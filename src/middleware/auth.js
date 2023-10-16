import { UserModel } from "../../db/modules/user.model.js"
import { VerifyToken } from "../utilits/token.js"


export const authMiddleware=async(req,res,next)=>{
    const {authorization}=req.headers
   
    if(!authorization?.startsWith(process.env.BEARER)){
        return next(new Error('invalid BEARERKey',{cause:403}))
    }
    const realToken=authorization.split(process.env.BEARER)[1]
    const {id}=VerifyToken(realToken)
    if(!id){
        return next(new Error('invalid id',{cause:403}))

    }
    const user=await UserModel.findById(id).select('userName email')
    if(!user){
        return next(new Error('invalid token',{cause:403}))

    }
    req.user=user
    return next()
}