import mongoose from "mongoose";

const projSchema = new mongoose.Schema({
    ProjectName: String,
    ProjectDesc: String,
    ProjectImg: Buffer,
    ImgType: String
})

const projModel = mongoose.model("projData", projSchema)

export default projModel;