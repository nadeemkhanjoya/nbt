import mongoose from "mongoose";
const userschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
var usermodal = mongoose.model("user",userschema)
export default usermodal