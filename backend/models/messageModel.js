const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: String,
    phone: String,
    otp: String,
    date: { type: Date, default: Date.now },
    messageSid: String  // Twilio message SID
});

module.exports = mongoose.model('Message', messageSchema);
