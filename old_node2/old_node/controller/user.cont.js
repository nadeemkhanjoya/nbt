import express from "express"
import bcrypt from "bcrypt"
import user from "../modal/user.modal.js"
import path from "path"
import jwt from "jsonwebtoken"

export const sinUp = async (req, res) => {
    var find = await user.findOne({ name: req.body.name })
    if (find) {
        res.status(409).send({
            status: false,
            msg: "alredy exist"
        })
    } else {
        var path = `${req.file.path} `
        var hash = await bcrypt.hash(req.body.password, 10)
        req.body.password = hash
        req.body.dp = path
        var creat = await user.create(req.body)
        if (creat) {
            var token = await jwt.sign({ User_id: creat._id }, process.env.TOKEN_KEY)
            creat.token = token
            res.status(201).send({
                status: true,
                msg: "created",
                data: creat
            })
        }
    }
}
export const logIn = async (req, res) => {
    var find = await user.findOne({ email: req.body.email })
    if (find) {
        var checkpass = await bcrypt.compare(req.body.password, find.password)
        if (checkpass) {
            var token = await jwt.sign({user_id:find._id},process.env.TOKEN_KEY)
            find.token=token
            res.status(200).json({
                status: true,
                msg: "logIN success",
                data: {
                    name: find.name,
                    email: find.email,
                    phone: find.phone,
                    dp: find.dp,
                    token:find.token
                }
            })
        } else {
            res.status(400).json({
                status: false,
                msg: "password false",
                data: []
            })
        }
    } else {
        res.status(404).send({
            status: false,
            msg: "user not found"
        })
    }
}

export const chengepassword = async(req,res)=>{
    var find = await user.findOne({email:req.body.email})
    if(find){
        var checkpass = await bcrypt.compare(req.body.old_password,find.password)
        if(checkpass){
            var hash= await bcrypt.hash(req.body.new_password,10)
            req.body.password=hash
            await user.findByIdAndUpdate({_id:find._id},req.body)
            res.status(200).send({
                status:true,
                msg:"passwoord update success",
            
            })
        }else{
            res.status(400).send({
                status:false,
                msg:"worng password"
            })
        }
    }else{
        res.status(400).send({
            status:false,
            msg:"worng req"
        })
    }
}
export const forgetPasswordotp =async(req,res)=>{
    var otp = Math.floor(Math.random(90000) * 1000000)
    var find = await user.findOne({email:req.body.email})
    req.body.otp=otp
    if(find){
        var up = await user.findByIdAndUpdate({_id:find._id},req.body)
        find.otp= otp
        res.status(200).send({
            status:true,
            msg:"otp send",
            data:find.otp
        })
    }else{
        res.status(404).send({
            status:false,
            msg:"user not exist"
        })
    }

}

export const forgotpassword= async(req,res)=>{
    var find = await user.findOne({email:req.body.email,otp:req.body.otp})
    if(find){
        var hash = await bcrypt.hash(req.body.password,10)
        req.body.password=hash
          await user.findByIdAndUpdate({_id:find._id},req.body)
          res.status(200).send({
            status:true,
            msg:"update success",
            data:find
          })
    }else{
        res.status(400).send({
            status:false,
            msg:"you are worng"
        })
    }
}
export const lookup = async(req,res)=>{
    var find= await user.aggregate([
        {
    $lookup:{
        from: 'users',
        localField: 'userid',
        foreignField: '_id',
        as: 'users'
    },    
},

])
    res.send(find)
}