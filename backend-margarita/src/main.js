import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import { router } from "../routes/main.routes.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express()

//Middlewares
app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://localhost:5173',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser());
app.use(router)

//Inicio del servidor en PORT 3000
app.listen(process.env.PORT, () => {
    console.log("Server Running on port", process.env.PORT);
});
