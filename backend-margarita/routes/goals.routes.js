import { Router } from "express";

import {
    getInfoQuoteCtrl,
    uploadGoalsCtrl,
    renderGoalsCtrl
}
    from "../controllers/goals.controllers.js";

import { authenticateJWTCtrl } from "../middlewares/authenticateJWT.js";

const routerGoals = Router()

routerGoals.get("/quotes-info", getInfoQuoteCtrl)
routerGoals.post("/upload-goals", authenticateJWTCtrl, uploadGoalsCtrl)
routerGoals.get("/get-info-goals", renderGoalsCtrl)


export {routerGoals}