import { Router } from "express";

import * as authController from './Controller/auth.js'
import { validation } from "../../middleware/validation.js";
import { create_valid,login_valid } from "./auth.validation.js";
import { authMiddleware } from './../../middleware/auth.js';

export const auth=Router()
auth.post('/signup',validation(create_valid),authController.Registar)
auth.post('/signin',validation(login_valid),authController.Login)
auth.get('/',authMiddleware,authController.Profile)