 import bcrypt from'bcryptjs'
 export const Hash=(password)=>{
    const hash=bcrypt.hashSync(password,parseInt(process.env.SALT))
    return hash
 }
 export const Compare=(password,hashPassword)=>{
   const compare=bcrypt.compareSync(password,hashPassword)
   return compare
}