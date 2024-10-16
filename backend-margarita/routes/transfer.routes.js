import { Router } from "express";

import {
    getBinanceAccount,
    simulateBinanceTransfer
}
from "../controllers/transfer.controllers.js"

const routerTransfer = Router()

routerTransfer.get("/binance", getBinanceAccount);
routerTransfer.post("/transfer-binance", simulateBinanceTransfer);


export {routerTransfer}