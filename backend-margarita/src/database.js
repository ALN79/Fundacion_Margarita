import {createConnection} from "mysql2/promise.js";
import dotenv from 'dotenv';
dotenv.config();

async function ConnectionDataBase(){
    try {
            const connection = await createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                database: process.env.DB_NAME,
            })
            return connection
    } catch (error) {
        console.error("ERROR AL CONECTAR A LA BASE DE DATOS", error)
    }
};
    
export {ConnectionDataBase};