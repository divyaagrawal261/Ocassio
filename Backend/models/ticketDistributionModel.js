import mongoose from "mongoose";

const ticketSchema=mongoose.Schema({
    templateId:{
        type:mongoose.Types.ObjectId,
        required:[true, "Please enter the template ID"]
    },
    attendeeName:{
        type:String,
        required:[true, "Please enter a userhandle"]
    },
    eventName:{
        type:String,
        required:[true, "Please enter the event name"]
    },
    paid:{
        type:Boolean,
        default:false
    }   
})

const tickets=new mongoose.model("tickets", ticketSchema);
export default tickets;