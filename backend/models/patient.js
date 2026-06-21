const mongoose = require("mongoose");
const patientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true 
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
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
    timeStamps: true
});
module.exports = mongoose.model("Patient", patientSchema);