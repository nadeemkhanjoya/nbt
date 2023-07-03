import express from "express";
import { Server, Socket } from "socket.io";
import ejs from "ejs"
import con from "./config/db.js";
import userrouter from "./route/user.route.js";
import chatrouter from "./route/chat.route.js";
const app = express()
app.use(express.json())
con()
app.use(userrouter)
app.use(chatrouter)
app.set("views","views")
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index.ejs")
})
const server = app.listen(1313,()=>{
    console.log("server on");
})

const io = new Server(server)
io.on("connection",(Socket)=>{
    console.log(Socket.id);
    Socket.on("join",(roomid)=>{
        console.log(roomid);
        Socket.join(roomid)
        Socket.on("send---",(data)=>{
            console.log(data);
            Socket.to(data.id).emit("recve",data.msg)
        })
    })
})
