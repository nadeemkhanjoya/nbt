import mongoose from "mongoose";
const url = "mongodb+srv://nadeemkhan:nadeemkhan@nadeem.zlf200r.mongodb.net/test?retryWrites=true&w=majority"
const con = async()=>{
    const db = await mongoose.connect(process.env.URL||url)
    console.log("db on");
}
export default con