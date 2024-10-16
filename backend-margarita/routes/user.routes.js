import { Router } from "express";

import { 
    registerUsersCtrl, 
    loginUsersCtrl, 
    logoutUsersCtrl, 
    updatePasswordCtrl,
    checkAuthCtrl 
} 
from "../controllers/user.controllers.js";

const routerUser = Router();

routerUser.post("/registerUsers", registerUsersCtrl);
routerUser.post("/loginUsers", loginUsersCtrl)
routerUser.post("/logoutUsers", logoutUsersCtrl)
routerUser.post('/update-password', updatePasswordCtrl)
routerUser.get("/authenticate-jwt", authenticateJWTCtrl, checkAuthCtrl)


export {routerUser};