import mongoose from "mongoose";

const cateschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userid:{
         type: mongoose.Schema.Types.ObjectId, ref: 'users' 
    }
},{timestamps:true})
const category= mongoose.model("category",cateschema)
export default category