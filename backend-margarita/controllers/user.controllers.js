import { ConnectionDataBase } from "../src/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


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
            id: searchUser[0].id_usuario,
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

