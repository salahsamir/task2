import jwt from 'jsonwebtoken'
 
export const GenerateToken=(payload)=>{
    const token=jwt.sign(payload,process.env.SIGNATURE)
    return token
}

export const VerifyToken=(payload)=>{
    const token=jwt.verify(payload,process.env.SIGNATURE)
    return token
}