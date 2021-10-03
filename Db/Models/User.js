const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    ClockIn: {
        type: String,
        required: true
    },
    ClockOut: {
        type: String,
    },
    WorkingHours: {
        type: String
    }
}, { timestamps: true });


const userModel = mongoose.model('users', UserSchema);
module.exports = { userModel };