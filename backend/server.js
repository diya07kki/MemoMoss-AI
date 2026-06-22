const Patient = require("./models/patient");
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
connectDB();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res) =>
{
    res.send("MemoMoss Backend Running");
});

app.get("/hello", (req,res) =>
{
    res.send("Hello diya!");
});

const port = 5000;
app.post("/register", async (req,res) =>{
    try {   
        const patient = new Patient(req.body);
        await patient.save();
        res.status(201).json({
            success: true,
            message: "Patient Registration Successful",
            patient
        });
    } catch(error){
        res.status(400).json({
            success: false,
            message: "Patient Registration Failed",
            error: error.message
        });
    }
});
app.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body;

        const patient = await Patient.findOne({
            email,
            password
        });

        if (!patient) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        res.status(200).json({
            success: true,
            role: patient.role,
            patient
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
});
app.listen(port,() =>
{
    console.log(`Server running on port ${port}`);
});