import mongoose from "mongoose";
const con =()=>{
    var con = mongoose.connect("mongodb://localhost:27017/socket",
    {
        useUnifiedTopology: true,
            useNewUrlParser: true
    })
    console.log("db on");
}
export default con
// mongodb+srv://nadeemkhan:nadeemkhan@nadeem.zlf200r.mongodb.net/socket?retryWrites=true&w=majority