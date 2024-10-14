import { Router } from "express";

import { registerUsersCtrl, loginUsersCtrl, logoutUsersCtrl, resetPasswordCtrl, updatePasswordCtrl, checkAuthCtrl } from "../controllers/main.controllers.js";
import { FormContactCtrl } from "../controllers/contact.controllers.js";
import { authenticateJWTCtrl } from "../helpers/authenticateJWT.js";
import { simulateTransfer, createAddress, addFunds, getTransactions } from "../controllers/wallet.controller.js";
import { getInfoQuoteCtrl, uploadGoalsCtrl } from "../controllers/goals.controllers.js";


const router = Router();

router.post("/registerUsers", registerUsersCtrl);
router.post("/loginUsers", loginUsersCtrl)
router.post("/logoutUsers", logoutUsersCtrl)
router.post('/reset-password', resetPasswordCtrl)
router.post('/update-password', updatePasswordCtrl)
router.get("/authenticate-jwt", authenticateJWTCtrl, checkAuthCtrl)

router.post("/send-contact", FormContactCtrl);

router.post('/create-address', createAddress);
router.post('/simulate-transfer', simulateTransfer);
router.post('/add-funds', addFunds);
router.get('/show-transactions/:id_usuario', getTransactions);

router.get("/quotes-info", getInfoQuoteCtrl)
router.post("/upload-goals", authenticateJWTCtrl, uploadGoalsCtrl)

export {router};