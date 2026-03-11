import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    SkillName: String,
})

const skillModel = mongoose.model("skillData", skillSchema)

export default skillModel;