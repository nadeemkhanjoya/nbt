import usermodal from "../modal/user.modal.js"
import bcrypt from "bcryptjs"


export const usercreate = async(req,res)=>{
 var hash = await bcrypt.hash(req.body.password,10)
 req.body.password=hash
var create = await usermodal.create(req.body)
res.send(create)

}