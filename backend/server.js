const Patient = require("./models/patient");
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
connectDB();
const app = express();
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
            message: "Patient Registration Successful",
            patient
        });
    } catch(error){
        res.status(400).json({
            message: "Patient Registration Failed",
            error: error.message
        });
    }
});
app.listen(port,() =>
{
    console.log(`Server running on port ${port}`);
});