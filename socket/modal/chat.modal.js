import mongoose from "mongoose";
const chatschema= new mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId, ref: 'user' 
    },
    recever:{
        type: mongoose.Schema.Types.ObjectId, ref: 'user' 
    },
    msg:{
        type:String
    },
    user:{
        type:Array
    }
})
var chatmodal = mongoose.model("chat",chatschema)
export default chatmodal