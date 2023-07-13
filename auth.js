import jwt from "jsonwebtoken"
export const auth = async(req,res,next)=>{
    if(!req.headers["authorization"]){
        res.send({
            status:false,
            msg:"auth is requierd",
            data:{}
        })
        return
    }
    var token = req.headers["authorization"].replace("Bearer ",'')
    var cheaktoken = jwt.verify(token,"jjjj")
    if(cheaktoken==false){
        res.send({
            status:false,
            msg:"worng token",
            data:{}
        }) 
        
    }else{
        next()
    }

}