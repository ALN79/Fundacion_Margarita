import { Router } from "express";

import { 
    emailResetPasswordCtrl, 
    FormContactCtrl 
} 
from "../controllers/contact.controllers.js";

const routerContact = Router()

routerContact.post("/send-contact", FormContactCtrl);
routerContact.post('/reset-password', emailResetPasswordCtrl)

export {routerContact}
