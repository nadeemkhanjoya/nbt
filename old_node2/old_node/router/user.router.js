import express from "express"
import { chengepassword, forgetPasswordotp, forgotpassword, logIn, lookup, sinUp } from "../controller/user.cont.js"
import { upload } from "../service/multer.servise.js"
import { auth } from "../middelwere/auth.js"
const userroute = express.Router()
userroute.route("/user/create").post(upload.single("dp"),sinUp)
userroute.route("/user/login").get(logIn)
userroute.route("/user/lookup").get(lookup)
userroute.route("/user/chengepassword").put(auth,chengepassword)
userroute.route("/user/forgetPasswordotp").put(forgetPasswordotp)
userroute.route("/user/forgotpassword").put(forgotpassword)
export default userroute