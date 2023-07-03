import express from "express";
import { usercreate } from "../controller/user.cont.js";
var userrouter = express.Router()
userrouter.route("/user/create").post(usercreate)
export default userrouter