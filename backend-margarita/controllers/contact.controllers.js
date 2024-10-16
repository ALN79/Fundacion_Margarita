import nodemailer from "nodemailer";
import dotenv from "dotenv";
import crypto from "crypto";
dotenv.config();

// Configura Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
});
  

//Envia el mensaje de contacto al correo de la fundación
export const FormContactCtrl = async (req, res) => {
    // Desestructuración del cuerpo de la solicitud
    const { name, email, subject, message } = req.body;

    // Verificar que los datos estén presentes
    if (!name || !email || !subject || !message) {
        return res.status(400).send("Datos faltantes");
    }

    // Configurar el transporter de Nodemailer para Gmail
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD, // Usa una contraseña de aplicación
        },
    });

    // Configurar el contenido del correo
    const mailOptions = {
        from: email, // Email del remitente
        to: "fundacionmargarita24@gmail.com", // Tu correo donde recibirás la consulta
        subject: `Consulta de ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 16px; background-color: #fefce8; border-radius: 8px; border: 1px solid #FFFF00; max-width: 600px; margin: 0 auto; text-align: center;">
                <img src="https://i.pinimg.com/originals/11/94/c7/1194c7e6b8da26afee2a502f0e004e8f.png" alt="Margarita" style="width: 100px; height: auto; margin-bottom: 20px;" />
                <h2 style="font-size: 24px; color: #fcd34d; margin-bottom: 20px;">Consulta Recibida</h2>
                <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <p style="font-size: 18px; color: #000000;"><strong>Nombre:</strong> ${name}</p>
                    <p style="font-size: 18px; color: #000000;"><strong>Email:</strong> ${email}</p>
                    <p style="font-size: 18px; color: #000000;"><strong>Asunto:</strong> ${subject}</p>
                    <p style="font-size: 18px; color: #000000;"><strong>Mensaje:</strong></p>
                    <p style="font-size: 16px; color: #000000;">${message}</p>
                </div>
                <footer style="font-size: 14px; color: #fcd34d; margin-top: 20px;">
                    <p>Consulta recibida a través del sitio web de la fundación.</p>
                </footer>
            </div>
        `,
    };

    try {
        // Enviar el correo
        await transporter.sendMail(mailOptions);
        res.status(200).send("Correo enviado");
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).send("Error al enviar el correo");
    }
};


//Envia el correo para recuperar contraseña
export const emailResetPasswordCtrl = async (req, res) => {
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

