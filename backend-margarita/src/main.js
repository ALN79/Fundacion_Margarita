import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { routerContact } from "../routes/contact.routes.js";
import { routerGoals } from "../routes/goals.routes.js";
import { routerUser } from "../routes/user.routes.js";
import { routerTransfer } from "../routes/transfer.routes.js";

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
app.use(routerContact, routerGoals, routerUser,routerTransfer)
//Inicio del servidor en PORT 3000
app.listen(process.env.PORT, () => {
    console.log("Server Running on port", process.env.PORT);
});
