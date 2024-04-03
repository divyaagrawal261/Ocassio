import mongoose from "mongoose";

const ticketTemplateSchema=mongoose.Schema({
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

const ticketTemplate=new mongoose.model("ticketTemplate", ticketTemplateSchema);
export default ticketTemplate;