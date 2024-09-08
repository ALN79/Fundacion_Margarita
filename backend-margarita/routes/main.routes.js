import { Router } from "express";

import { registerUsers } from "../controllers/main.controllers.js";
import { loginUsers } from "../controllers/main.controllers.js";

const router = Router();

router.post("/registerUsers", registerUsers);
router.post("/loginUsers", loginUsers)

export {router};