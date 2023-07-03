import mongoose from "mongoose";

const usermodal = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true  
    },
    dp:{
        type:String,
        required:true   
    },
    otp:{
        type:Number 
    },
    token:{
        type:String 
    }
},{timestamps:true})

const user = await mongoose.model("users",usermodal)
export default user