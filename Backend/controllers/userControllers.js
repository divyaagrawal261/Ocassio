import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const createUser=asyncHandler(async(req,res)=>{
    const {userhandle, password, fullName, email }=req.body

    try{
    if(!userhandle || !password || !fullName || !email)
    {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const hashedPassword=await bcrypt.hash(password,10);
    
    const user=await User.create({userhandle,fullName, email, password:hashedPassword});

    if(user)
    {
        res.status(201).json({_id:user.id,username: user.username});
    }
    else
    {
        res.status(400);
        throw new Error("User data is not valid");
    }
}
catch(err)
{
    res.status(400).json(err.message);
}
});

const loginUser=asyncHandler(async(req,res)=>{
    const {email, password}=req.body;

    try{
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user=await User.findOne({email});

    if(user && (await bcrypt.compare(password,user.password)))
    {
        const accessToken=jwt.sign({
            user:{
                username: user.username,
                id: user.id,
            },
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"240m"});
        res.status(200).json({accessToken});
    }
    else{
        res.status(401);
        throw new Error("Username or Password does not match");
    }
}
catch(err)
{
    res.status(400).json(err.message);
}
 });

const currentUser=asyncHandler(async(req, res)=>{
    const id=req.user.id;
    const user=await User.findById(id).select('-password');
    res.status(200).json({user});
})
export {createUser,loginUser,currentUser}  