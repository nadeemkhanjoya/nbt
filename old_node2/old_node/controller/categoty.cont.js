import category from "../modal/category.modal.js";
import user from "../modal/user.modal.js";

export const cateCreate = async(req,res)=>{
    var find = await category.findOne({name:req.body.name})
    if(find){
        res.send({
            status:false,
            msg:"already exist"
        })
    }else{
        var create = await category.create(req.body)
        res.send({
            status:true,
            msg:"created",
            data:create
        })
    }
}

export const cateGet =async(req,res)=>{
    var find = await category.findOne({name:req.body.name}).populate("userid").limit
    if(find){
        res.status(200).send({
            status:true,
            msg:"fecth successfull",
            data:find
        })
    }else{
        res.status(404).send({
            status:false,
            msg:"not found"
        })
    }
}

export const regex = async(req,res)=>{
    var find= await category.aggregate([{
        $match: {
             name:{$regex:req.body.name}
            }}])
    res.send(find)
}

