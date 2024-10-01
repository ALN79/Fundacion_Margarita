import { Router } from "express";

import { registerUsersCtrl, loginUsersCtrl, logoutUsersCtrl, resetPasswordCtrl, updatePasswordCtrl, checkAuthCtrl } from "../controllers/main.controllers.js";
import { FormContactCtrl } from "../controllers/contact.controllers.js";
import { authenticateJWTCtrl } from "../helpers/authenticateJWT.js";
import { getBinanceAccount } from "../controllers/main.controllers.js";
import { simulateBinanceTransfer } from "../controllers/main.controllers.js";

import { getInfoQuoteCtrl } from "../controllers/goals.controllers.js";

const router = Router();

router.post("/registerUsers", registerUsersCtrl);
router.post("/loginUsers", loginUsersCtrl)
router.post("/logoutUsers", logoutUsersCtrl)
router.post('/reset-password', resetPasswordCtrl)
router.post('/update-password', updatePasswordCtrl)
router.get("/authenticate-jwt", authenticateJWTCtrl, checkAuthCtrl)

router.post("/send-contact", FormContactCtrl);
router.get("/binance", getBinanceAccount);
router.post("/transfer-binance", simulateBinanceTransfer);

router.get("/quotes-info", getInfoQuoteCtrl)

export {router};