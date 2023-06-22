const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/UserSchema")
const nodemailer = require("nodemailer")


const validateToken = asyncHandler(async(req,res)=>{
    
    let token;
    let authUser = req.headers.Authorization || req.headers.authorization
    const tokenSecret = "qwertyuiopasdfgh12345"
    if(!authUser){
        return  res.status(400).json({message:"User is not authorized to access this resources"})
      }
  
      if(authUser && authUser.startsWith("Bearer")){

          token = authUser.split(" ")[1]
          jwt.verify(token, tokenSecret,(err,result)=>{
            if(err){
                return res.status(400).json({message:"User invalid token"})
            }
            else{
                req.user = result
                next();
            }
          })
        
  
   
   } 
})



module.exports = validateToken