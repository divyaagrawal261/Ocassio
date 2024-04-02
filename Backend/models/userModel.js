import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    userhandle:{
        type:String,
        required:[true, "Please enter a username"],
        unique:[true, "Username already taken"]
    },
    email:{
        type:String,
        required:[true, "Please enter an email"],
        unique:[true, "Email already taken"]
    },
    password:{
        type:String,
        required:[true, "Please provide a password"]
    },
    fullName:{
        type:String,
        required:[true, "Please enter a username"]
    }
})

const User=new mongoose.model("User", userSchema);
export default User;