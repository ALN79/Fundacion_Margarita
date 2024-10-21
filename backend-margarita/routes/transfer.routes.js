import { Router } from "express";

import {
  simulateTransfer,
  createAddress,
  buyFunds,
  getTransactions,
} from "../controllers/transfer.controller.js";

const routerTransfer = Router();

routerTransfer.post("/create-address", createAddress);
routerTransfer.post("/simulate-transfer", simulateTransfer);
routerTransfer.post("/buy-funds", buyFunds);
routerTransfer.get("/show-transactions/:id_usuario", getTransactions);

export { routerTransfer };
