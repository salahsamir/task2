import { Compare, Hash } from "../../../utilits/bcrypt.js";
import { AsyncHandeller } from "../../../utilits/handleError.js";
import { GenerateToken } from "../../../utilits/token.js";
import { UserModel } from './../../../../db/modules/user.model.js';


export const Registar=AsyncHandeller(
    async(req,res,next)=>{
        const {email,password}=req.body;
        if(await UserModel.findOne({email})){
            return next(new Error('email already exist',{cause:403}));
        }
        req.body.password = Hash(password)
        
        const create=await UserModel.create(req.body)
        return create?res.status(201).json({message:"success",created:true,create}):next(new Error("invalid data"))
        

})


export const Login=AsyncHandeller(
    async(req,res,next)=>{
        const {email,password}=req.body
       const findUser=await UserModel.findOne({email})
       if(!findUser){
        return next (new Error('email not exist please registar',{cause:404}))
       }
       if(!Compare(password,findUser.password)){
        return next (new Error('password not match',{cause:404}))
       }
       findUser.isLoggin=true
       findUser.save()
       const token=GenerateToken({id:findUser._id,email})
       return res.status(200).json({message:"success",loggin:true,token})
    }
)

export const Profile=AsyncHandeller(
    async(req,res,next)=>{
        const data=req.user
        return res.status(200).json({message:"success",data})
    }
)