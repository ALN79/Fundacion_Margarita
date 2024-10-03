import { ConnectionDataBase } from "../src/database.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


// Configura Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

//Registro de usuarios
export const registerUsersCtrl = async (req, res) => {
  //Guarda los datos que el usuario ingreso en el register
  const { name, surname, email, password } = req.body;
  //Conecta a la base de datos
  const connection = await ConnectionDataBase();
  try {
    //Verifica si el email ingresado ya existe
    const [userExist] = await connection.query(
      "SELECT * FROM usuario WHERE email = ?",
      [email]
    );
    if (userExist.length > 0) {
      console.error("El usuario ya existe");
      res
        .status(409)
        .json({
          message:
            "La direccion de correo electronico ingresada ya esta siendo utilizada por otro usuario",
        });
    } else {
      //Hashea la contraseña
      const hashPassword = await bcrypt.hash(password, 10);
      //Sube los datos del usuario a la base de datos
      await connection.query(
        "INSERT INTO `usuario`(`nombre_us`, `apellido_us`,`email`,`contraseña`,`puntos_total`,`monto_donado`) VALUES (?,?,?,?,?,?)",
        [name, surname, email, hashPassword, 0, 0]
      );
      res.status(201).json({ message: "Usuario registrado exitosamente" });
      connection.end();
    }
  } catch (error) {
    console.error("NO SE PUDO REGISTRAR", error);
    res
      .status(500)
      .json({ message: "Error inesperado al registrar el usuario" });
  } finally {
    //Cierra la conexión a la base de datos
    if (connection) {
      connection.end();
    }
  }
};

//Inicio de Sesión de usuarios
export const loginUsersCtrl = async (req, res) => {
  //Guarda los datos que el usuario ingreso en el login
  const { emailLogin, passwordLogin } = req.body;
  try {
    const connection = await ConnectionDataBase();
    //Busca el email en la base de datos
    const [searchUser] = await connection.query(
      "SELECT * FROM usuario WHERE email = ?",
      [emailLogin]
    );
    //Una vez obtiene el resultado cierra la conexion a la db
    connection.end();
    //Si no encuentra el email, el usuario no existe
    if (searchUser.length === 0) {
      return res.status(400).json({ message: "El usuario no existe" });
    } else {
      //Si encuentra el email enviado, valida la contraseña
      const validarContrasenia = await bcrypt.compare(
        passwordLogin,
        searchUser[0].contraseña
      );
      //Si la contraseña no coincide con el email, devuelve un error
      if (!validarContrasenia) {
        res.status(400).json({
          message: "La contraseña es incorrecta",
        });
      }
      //Si email y contraseña coinciden, crea el jwt con el id y email del usuario
      else {
        const token = jwt.sign(
          {
            id: searchUser[0].id,
            email: searchUser[0].email,
            username: searchUser[0].nombre_us,
          },
          process.env.SECRET_KEY,
          { expiresIn: "5h" }
        );
        //Se guarda el jwt en una cookie para que no se pueda ver desde el navegador
        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
        });
        res.status(200).json({
          message: "Inicio de sesión exitoso",
        });
      }
    }
  } catch (error) {
    console.error("Error al iniciar sesión", error);
  }
};

//Verifica si el token es valido. Este controlador usa el middleware: auhtenticateJWT
export const checkAuthCtrl = (req, res) => {
  res.set('Cache-Control', 'no-store'); //Evita que el navegador guarde la respuesta en cache
  res.status(200).json({ user: req.user });
  console.log(req.user);
};

//Cerrar Sesión de usuarios
export const logoutUsersCtrl = (req, res) => {
  //Borra el token de la cookie
  res.clearCookie("token", { httpOnly: true });
  res.status(200).json({ message: "Logout exitoso" });
};


//Envia el correo para recuperar contraseña
export const resetPasswordCtrl = async (req, res) => {
  const { emailRecover } = req.body;

  const connection = await ConnectionDataBase();

  try {
    // Verifica si el correo existe en la base de datos
    const [user] = await connection.query(
      "SELECT * FROM usuario WHERE email = ?",
      [emailRecover]
    );
    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    // Genera un token aleatorio
    const token = crypto.randomBytes(20).toString("hex");

    // Establece una fecha de expiración (ej: 1 hora)
    const expirationDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hora
    const formattedExpirationDate = expirationDate
      .toISOString()
      .slice(0, 19)
      .replace("T", " "); //Formatea el horario para mySQL

    // Actualiza el token y la fecha de expiración en la base de datos
    await connection.query(
      "UPDATE usuario SET reset_password_token = ?, reset_password_expires = ? WHERE email = ?",
      [token, formattedExpirationDate, emailRecover]
    );
    // Configura el correo para enviar
    const mailOptions = {
      to: emailRecover,
      from: process.env.EMAIL_USER,
      subject: "Restablecer Contraseña",
      html: `
            <div style="font-family: Arial, sans-serif; padding: 16px; background-color: #fefce8; border-radius: 8px; border: 1px solid #FFFF00; max-width: 600px; margin: 0 auto; text-align: center;">
                <img src="https://i.pinimg.com/originals/11/94/c7/1194c7e6b8da26afee2a502f0e004e8f.png" alt="Margarita" style="width: 100px; height: auto; margin-bottom: 20px;" />
                <h2 style="font-size: 24px; color: #fcd34d; margin-bottom: 20px;">Restablecer Contraseña</h2>
                <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <p style="font-size: 18px; color: #000000;">Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace o pégalo en tu navegador para completar el proceso:</p>
                    <p style="text-align: center; margin-top: 20px;">
                        <a href="http://localhost:5173/reset/${token}" style="font-size: 18px; color: #ffffff; background-color: #fcd34d; padding: 10px 20px; border-radius: 8px; text-decoration: none;">
                            Restablecer Contraseña
                        </a>
                    </p>
                    <p style="font-size: 16px; color: #000000; margin-top: 20px;">Si no solicitaste este correo, simplemente ignóralo y no se hará ningún cambio.</p>
                </div>
                <footer style="text-align: center; font-size: 14px; color: #fcd34d; margin-top: 20px;">
                    <p>Este es un correo automático, por favor no respondas.</p>
                </footer>
            </div>
        `,
    };

    // Envía el correo
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({
        message: "Correo enviado para restablecer la contraseña",
        token: token,
      });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error al procesar la solicitud", error: err.message });
  }
};

//Cambia la contraseña
export const updatePasswordCtrl = async (req, res) => {
  const { token, passwordUpdate } = req.body;

  const connection = await ConnectionDataBase();

  const dateNow = new Date().toISOString().slice(0, 19).replace("T", " "); //Formatea la fecha actual para MySQL

  try {
    // Verifica si el token es válido y no ha expirado
    const [user] = await connection.query(
      "SELECT * FROM usuario WHERE reset_password_token = ? AND reset_password_expires > ?",
      [token, dateNow]
    );

    if (user.length === 0) {
      return res
        .status(400)
        .json({ message: "Error al recuperar la contraseña" });
    }

    // Genera un salt y hashea la nueva contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(passwordUpdate, saltRounds);

    // Actualiza la contraseña en la base de datos y elimina el token
    const query = await connection.query(
      "UPDATE usuario SET contraseña = ?, reset_password_token = NULL, reset_password_expires = NULL WHERE id_usuario = ?",
      [hashedPassword, user[0].id_usuario]
    );

    res.status(200).json({ message: "Contraseña actualizada con éxito" });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Error al actualizar la contraseña",
        error: err.message,
      });
  }
};


export const getBinanceAccount = async (req, res) => {
  const apiKey = '1r4Y96b5OtQkBFMS7ByanQCdPkzopyFjzLia4Aa94J1UB92BWaDka5TTCeo3iU9L';
  const apiSecret = '3Q6LeFHd42mmmslqtAxuT64yaOv5PNNwLZU2yuE3KNZQu39pRcxkvmMIOoQ7QlYR';
  const baseURL = 'https://testnet.binance.vision';

  try {
    const timestamp = Date.now();

    // Crear la query string con el timestamp
    const queryString = `timestamp=${timestamp}`;
  
    // Generar la firma HMAC SHA256 utilizando la API secret
    const signature = crypto.createHmac('sha256', apiSecret)
      .update(queryString)
      .digest('hex');
  
    // Construir la URL final con la firma
    const url = `${baseURL}/api/v3/account?${queryString}&signature=${signature}`;
  
    // Hacer la solicitud a la API de Binance
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-MBX-APIKEY': apiKey, // Enviar la API key en los headers
      },
    });

    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({
        error: 'Error en la respuesta de Binance',
        details: errorData,
      });
    }

    // Convertir la respuesta a JSON
    const data = await response.json();

    // Responder con los datos de la cuenta de Binance
    return res.status(200).json({
      message: 'Datos de la cuenta de Binance obtenidos con éxito',
      data,
    });

  } catch (error) {
    console.error('Error al obtener los datos de la cuenta de Binance:', error);

    // Enviar error genérico al cliente
    return res.status(500).json({
      error: 'Error al obtener los datos de la cuenta de Binance',
      details: error.message,
    });
  }
};

export const simulateBinanceTransfer = async (req, res) => {
  const apiKey = 'tu_api_key_testnet';
  const apiSecret = 'tu_api_secret_testnet';
  const baseURL = 'https://testnet.binance.vision';
  const { amount, cryptoSymbol, fromAccountType, toAccountType } = req.body;

  if (!amount || !cryptoSymbol || !fromAccountType || !toAccountType) {
      return res.status(400).json({ error: 'Faltan parámetros para la transferencia' });
  }

  try {
      const endpoint = '/sapi/v1/asset/transfer';
      const timestamp = Date.now();
      const queryString = `asset=${cryptoSymbol}&amount=${amount}&type=${fromAccountType}_${toAccountType}&timestamp=${timestamp}`;

      // Generar la firma HMAC SHA256
      const signature = crypto.createHmac('sha256', apiSecret)
          .update(queryString)
          .digest('hex');

      const url = `${baseURL}${endpoint}?${queryString}&signature=${signature}`;

      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'X-MBX-APIKEY': apiKey,
              'Content-Type': 'application/json',
          },
      });

      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          if (!response.ok) {
              console.error('Error en la respuesta de Binance:', data);
              return res.status(response.status).json(data);
          }
          res.json(data); // Simulación exitosa
      } else {
          const errorHtml = await response.text(); // Capturar el HTML de error
          console.error('Respuesta inesperada de Binance:', errorHtml);
          return res.status(500).json({ error: 'Respuesta inesperada de Binance', html: errorHtml });
      }
  } catch (error) {
      console.error('Error al simular la transferencia:', error);
      res.status(500).json({ error: 'Error al simular la transferencia' });
  }
};
