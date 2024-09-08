import { ConnectionDataBase } from "../src/database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../env/config.js";

export const registerUsers = async (req, res) => {
    //Guarda los datos que el usuario ingreso en el register
    const { name, surname, email, password } = req.body
    //Conecta a la base de datos
    const connection = await ConnectionDataBase()
    try {
        //Verifica si el email ingresado ya existe
        const [userExist] = await connection.query("SELECT * FROM usuario WHERE email = ?", [email])
        if (userExist.length > 0) {
            console.error("El usuario ya existe")
            res.status(409).json({ message: "La direccion de correo electronico ingresada ya esta siendo utilizada por otro usuario" })
        }
        else {
            //Hashea la contraseña
            const hashPassword = await bcrypt.hash(password, 10)
            //Sube los datos del usuario a la base de datos
            await connection.query("INSERT INTO `usuario`(`nombre_us`, `apellido_us`,`email`,`contraseña`,`puntos_total`,`monto_donado`) VALUES (?,?,?,?,?,?)", [name, surname, email, hashPassword, 0, 0])
            res.status(201).json({ message: "Usuario registrado exitosamente" });
            connection.end()
        }
    } catch (error) {
        console.error("NO SE PUDO REGISTRAR", error)
        res.status(500).json({ message: "Error inesperado al registrar el usuario" });
    }
    finally {
        //Cierra la conexión a la base de datos
        if (connection) {
            connection.end()
        }
    }

}


export const loginUsers = async (req, res) => {
    //Guarda los datos que el usuario ingreso en el login
    const { emailLogin, passwordLogin } = req.body
    try {
        const connection = await ConnectionDataBase()
        //Busca el email en la base de datos
        const [searchUser] = await connection.query("SELECT * FROM usuario WHERE email = ?", [emailLogin])
        //Una vez obtiene el resultado cierra la conexion a la db
        connection.end()
        //Si no encuentra el email, el usuario no existe
        if (searchUser.length === 0) {
            return res.status(400).json({ message: "El usuario no existe" })
        }
        else {
            //Si encuentra el email enviado, valida la contraseña
            const validarContrasenia = await bcrypt.compare(passwordLogin, searchUser[0].contraseña)
            //Si la contraseña no coincide con el email, devuelve un error
            if (!validarContrasenia) {
                res.status(400).json({
                    message: 'La contraseña es incorrecta'
                })
            }
            //Si email y contraseña coinciden, crea el jwt con el id y email del usuario
            else {
                const token = jwt.sign({
                    id: searchUser[0].id, 
                    username: searchUser[0].email
                },
                    SECRET_KEY, { expiresIn: "5h" }
                )
                //Se guarda el jwt en una cookie para que no se pueda ver desde el navegador
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: false,    
                });     
                res.status(200).json({
                    message: 'Inicio de sesión exitoso',
                })
            }
        }
    } catch (error) {
        console.error("Error al iniciar sesión", error)
    }

}