import mongoose, { Schema, model } from "mongoose";

const UserSchema=new Schema({
    userName:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },

    age:Number,
    gender:{
        type:String,
        enum:['male','famale'],
        default:'male'
    },
    isLoggin:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

export const UserModel=mongoose.models.User||model('User',UserSchema)