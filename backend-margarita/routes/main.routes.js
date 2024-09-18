import { Router } from "express";

import { registerUsers } from "../controllers/main.controllers.js";
import { loginUsers } from "../controllers/main.controllers.js";
import { logoutUsers } from "../controllers/main.controllers.js";
import { resetPassword } from "../controllers/main.controllers.js";
import { updatePassword } from "../controllers/main.controllers.js"
import { checkAuth } from "../controllers/main.controllers.js";
import { authenticateJWT } from "../helpers/authenticateJWT.js";

const router = Router();

router.post("/registerUsers", registerUsers);
router.post("/loginUsers", loginUsers)
router.post("/logoutUsers", logoutUsers)
router.post('/reset-password', resetPassword)
router.post('/update-password', updatePassword)
router.get("/authenticate-jwt", authenticateJWT, checkAuth)

export {router};