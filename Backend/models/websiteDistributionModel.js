import mongoose from "mongoose";

const websiteSchema=mongoose.Schema({
    templateId:{
        type:mongoose.Types.ObjectId,
        required:[true, "Please enter the template ID"]
    },
    eventName:{
        type:String,
        required:[true, "Please enter the event name"]
    },
    eventDescription:{
        type:String,
        required:[true, "Please enter the description for the website"]
    },
    peopleCount:{
        type:Number,
        default:0
    }
})

const websites=new mongoose.model("websites", websiteSchema);
export default websites;