import { Router } from "express";

import {
    getInfoQuoteCtrl,
    uploadGoalsCtrl
}
    from "../controllers/goals.controllers.js";

import { authenticateJWTCtrl } from "../helpers/authenticateJWT.js";

const routerGoals = Router()

routerGoals.get("/quotes-info", getInfoQuoteCtrl)
routerGoals.post("/upload-goals", authenticateJWTCtrl, uploadGoalsCtrl)

export {routerGoals}