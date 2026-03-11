import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const conn = async () =>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database Connected Successfully.")
}

export default conn