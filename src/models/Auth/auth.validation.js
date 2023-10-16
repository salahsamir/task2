import joi from 'joi'
import { generalFields } from './../../middleware/validation.js';
export const create_valid=joi.object({
userName:generalFields.name,
email:generalFields.email,
password:generalFields.password,
cpassword:generalFields.cpassword,
age:joi.number(),
gender:joi.string()

})
export const login_valid=joi.object({
    email:generalFields.email,
    password:generalFields.password,
   
    
    })