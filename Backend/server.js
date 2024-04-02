import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/dbConnection.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

connectDb();
const app=express();

const port=process.env.PORT; 

app.use(express.json());
app.use("/api/users",userRoutes);

app.listen(port,()=>{
    console.log(`Server is listening on the port ${port}...`);
})