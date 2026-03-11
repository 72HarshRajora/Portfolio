import mongoose from "mongoose";

const expSchema = new mongoose.Schema({
    CompanyName: String,
    CompanyDesc: String,
})

const expModel = mongoose.model("expData", expSchema)

export default expModel;