import { Router } from "express";

import { registerUsers } from "../controllers/main.controllers.js";
import { loginUsers } from "../controllers/main.controllers.js";
import { resetPassword } from "../controllers/main.controllers.js";
import { updatePassword } from "../controllers/main.controllers.js";

const router = Router();

router.post("/registerUsers", registerUsers);
router.post("/loginUsers", loginUsers)
router.post('/reset-password', resetPassword)
router.post('/update-password', updatePassword)

export {router};