import chalk from "chalk";
import mongoose from "mongoose";


export const DbConnect=async()=>{
    return await mongoose.connect(process.env.URI).then(result=>{
        console.log(chalk.bgYellowBright('db successfully connected'));
    }).catch(err=>{
        console.log(chalk.bgRed('fail to connected db'));
    })
}