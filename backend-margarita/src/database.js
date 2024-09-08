import {createConnection} from "mysql2/promise.js";
import { DB_HOST, DB_NAME, DB_USER } from "../env/config.js";

async function ConnectionDataBase(){
    try {
            const connection = await createConnection({
                host: DB_HOST,
                user: DB_USER,
                database: DB_NAME,
            })
            return connection
    } catch (error) {
        console.error("ERROR AL CONECTAR A LA BASE DE DATOS", error)
    }
};
    
export {ConnectionDataBase};