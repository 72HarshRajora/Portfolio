import express from "express"
import cors from "cors"
import multer from "multer"
import expModel from "../models/exp.model.js"
import skillModel from "../models/skill.model.js"
import projModel from "../models/proj.model.js"
import bcrypt from "bcrypt"
import cookieParser from "cookie-parser"
import adminModel from "../models/admin.js"
import jwt from "jsonwebtoken"

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://www.72harshrajora.in",
        "https://72harshrajora.in"
    ],
    credentials: true
}))

// AI use here for multer
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage
})

app.post("/experience", async (req, res) => {
    const data = req.body;
    await expModel.create(data)

    res.status(200).json({
        message: "Data Posted Successfully."
    })
})

app.post("/skill", async (req, res) => {
    const data = req.body;
    await skillModel.create(data)

    res.status(200).json({
        message: "Data Posted Successfully."
    })
})

app.post("/project", upload.single("ProjectImg"), async (req, res) => {
    const data = req.body;
    // AI use here for upload/multer
    await projModel.create({
        ProjectName: data.ProjectName,
        ProjectDesc: data.ProjectDesc,
        ProjectImg: req.file.buffer,
        ImgType: req.file.mimetype
    })

    res.status(200).json({
        message: "Data Posted Successfully."
    })
})


app.get("/experience", async (req, res) => {
    const data = await expModel.find()
    res.status(200).json({
        message: "Data fetch successfully.",
        data: data
    })
})

app.get("/skill", async (req, res) => {
    const data = await skillModel.find()
    res.status(200).json({
        message: "Data fetch successfully.",
        data: data
    })
})

app.get("/project", async (req, res) => {
    const data = await projModel.find()
    const formattedData = data.map(item => {
        return ({
            _id: item._id,
            ProjectName: item.ProjectName,
            ProjectDesc: item.ProjectDesc,
            ProjectImg: item.ProjectImg
                ? `data:${item.ImgType};base64,${item.ProjectImg.toString("base64")}`
                : null
        })
    })

    res.status(200).json({
        message: "Data fetch successfully.",
        data: formattedData
    })
})


app.delete("/experience/:index", async (req, res) => {
    const index = req.params.index
    await expModel.findByIdAndDelete(index)

    res.status(200).json({
        message: "Experience deleted successfully."
    })
})

app.delete("/skill/:index", async (req, res) => {
    const index = req.params.index
    await skillModel.findByIdAndDelete(index)

    res.status(200).json({
        message: "Skill deleted successfully"
    })
})

app.delete("/project/:index", async (req, res) => {
    const index = req.params.index
    await projModel.findByIdAndDelete(index)

    res.status(200).json({
        message: "Project deleted successfully."
    })
})


app.post("/register-admin", async (req, res) => {
    const { email, password } = req.body

    const admin = await adminModel.findOne({ email })
    if (admin) {
        return res.status(409).json({
            message: "Admin already exists."
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await adminModel.create({
        email,
        password: hashedPassword
    })

    res.status(200).json({
        message: "Admin Registered Successfully."
    })
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body

    const admin = await adminModel.findOne({ email })

    const isCorrect = await bcrypt.compare(password, admin.password)

    if (!isCorrect) {
        return res.status(400).json({
            message: "Invalid Credential."
        })
    }

    const token = jwt.sign({
        id: admin._id,
        email: admin.email
    }, process.env.JWT_SECRET)

    res.cookie("Rajora's-Token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000
    })

    res.status(200).json({
        message: "Admin logged in successfully."
    })
})

app.get("/admin", (req, res) => {
    const token = req.cookies["Rajora's-Token"]

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized Admin."
        })
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET)

        res.status(200).json({
            success: true
        })
    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized user."
        })
    }
})

export default app