import mongoose from "mongoose";

const eventSchema=mongoose.Schema({
    organizerId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true, "Please enter a organizerID"]
    },
    eventID:{
        type:String,
        required:[true, "Please enter the unique event ID"]
    },
    eventName:{
        type:String,
        required:[true, "Please enter an event name"]
    },
    description:{
        type:String,
        required:[true, "Please provide a short description about the event"]
    },
    startTime:{
        type:Date,
        required:[true, "Please enter a start date"]
    },
    endTime:{
        type:Date,
        required:[true, "Please enter a end date"]
    },
    location:{
        type:String,
        required:[true, "Please enter a location for the event"]
    },
    mode:{
        type:String,
        required:[true, "Please enter the mode (online/offline/hybrid)"],
        default:"online"
    },
    status:{
        type:String,
        default:"Upcoming"
    },
    ticketTemplateID:{
        type:mongoose.Types.ObjectId,
        ref:"Ticket"
    },
    websiteTemplateID:{
        type:mongoose.Types.ObjectId,
        ref:"Website"
    },
    fee:{
        type:Number,
        default:0
    },
    peopleCount:{
        type:Number,
        default:0
    }
})

const Event=new mongoose.model("Event", eventSchema);
export default Event;