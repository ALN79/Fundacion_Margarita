import { Router } from "express";

import { registerUsersCtrl, loginUsersCtrl, logoutUsersCtrl, resetPasswordCtrl, updatePasswordCtrl, checkAuthCtrl, FormContactCtrl } from "../controllers/main.controllers.js";

import { authenticateJWTCtrl } from "../helpers/authenticateJWT.js";

const router = Router();

router.post("/registerUsers", registerUsersCtrl);
router.post("/loginUsers", loginUsersCtrl)
router.post("/logoutUsers", logoutUsersCtrl)
router.post('/reset-password', resetPasswordCtrl)
router.post('/update-password', updatePasswordCtrl)
router.get("/authenticate-jwt", authenticateJWTCtrl, checkAuthCtrl)
router.post("/send-contact", FormContactCtrl);

export {router};