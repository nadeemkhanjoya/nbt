import chatmodal from "../modal/chat.modal.js"

export const chat = async(req,res)=>{
    var create = await chatmodal.create(req.body)
    res.send(create)
}

export const chatget=async(req,res)=>{
    var find= await chatmodal.find().populate('sender').populate('recever')
    res.send(find)
} 