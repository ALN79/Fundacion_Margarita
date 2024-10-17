import { Router } from "express";

import {
    simulateTransfer,
    createAddress,
    addFunds,
    getTransactions
} from "../controllers/transfer.controller.js";

const routerTransfer = Router()

routerTransfer.post('/create-address', createAddress);
routerTransfer.post('/simulate-transfer', simulateTransfer);
routerTransfer.post('/add-funds', addFunds);
routerTransfer.get('/show-transactions/:id_usuario', getTransactions);

export { routerTransfer }