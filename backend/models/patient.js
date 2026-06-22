const mongoose = require("mongoose");
const patientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false 
    },
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["patient", "caregiver"],
        default: "patient"
    },
    faceVerified: {
        type: Boolean,
        default: false
    },
    voiceVerified: {
        type: Boolean,
        default: false
    },
    authorizedGuardian: {
        type: Array,
        default: []
    }
},
{
    timestamps: true
});
module.exports = mongoose.model("Patient", patientSchema);