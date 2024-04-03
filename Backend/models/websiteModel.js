import mongoose from "mongoose";

const websiteTemplateSchema=mongoose.Schema({
    templateName:{
        type:String,
        required:[true, "Please enter a title for the template"],
        unique:[true, "Template Name already taken"]
    },
    count:{
        type:Number,
        default:0
    },
    creator:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    htmlContent:{
        type:String,
        required:[true, "Please enter the html content"]
    },
    cssContent:{
        type:String,
        required:[true, "Please enter the css content"]
    }
})

const websiteTemplate=new mongoose.model("websiteTemplate", websiteTemplateSchema);
export default websiteTemplate;