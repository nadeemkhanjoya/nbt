import express from  "express"
import con from "./config/db.js"
import userroute from "./router/user.router.js"
// const socket=require('socket.io')
import {Server, Socket} from "socket.io"
import dotenv from "dotenv"
import cateroute from "./router/category.route.js"
import ejs from 'ejs'
const port =5454
const app = express()
app.use(express.json())
dotenv.config()
app.set("views","views")
app.set("view engine","ejs")
con()
app.use(userroute)
app.use(cateroute)
app.use(express.static('imgupload')); 
const server= app.listen(port,(req,res)=>{
    console.log(`server on`);
})
app.get("/",(req,res)=>{
    res.render("index.ejs")
})

const io = new Server(server)
io.on("connection",(Socket)=>{
    console.log(Socket.id);
    Socket.on('send-msg',(data)=>{
        console.log(data);
        Socket.broadcast.emit('recev-msg',data)
    })
        
    
    // Socket.on("join",(data)=>{
    //     console.log(data);
    // })
})