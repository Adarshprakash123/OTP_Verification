const twilio = require('twilio');
const Message = require('../models/messageModel');   

// Load Twilio credentials from environment variables
require('dotenv').config();

// Use the correct variable names from the .env file
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);


// POST: Send OTP 
const sendMessage = (req, res) => {
    const { name, phone } = req.body;

    if (!name || !phone) {
        return res.status(400).json({ success: false, message: 'Name and phone number are required' });
    }

    // Log Twilio credentials for debugging (comment this out in production)
    console.log('Twilio Account SID:', accountSid);
    console.log('Twilio Auth Token:', authToken);

    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Use Twilio API to send the OTP message
    client.messages.create({
        body: `Hi ${name}, your OTP is: ${otp}`,
        from: '+13142875882',  // Your Twilio phone number (make sure it's verified)
        to: phone  // Recipient's phone number (must be in E.164 format, e.g., +919810153260)
    })
    .then(message => {
        console.log('Message sent successfully:', message.sid);

        // Optionally save message details in the database
        const newMessage = new Message({
            name,
            phone,
            otp,
            date: new Date(),
            messageSid: message.sid  // Store the Twilio message SID
        });
        
        newMessage.save()
            .then(() => {
                res.status(200).json({ success: true, otp });
            })
            .catch(err => {
                console.error('Error saving message to database:', err);
                res.status(500).json({ success: false, message: 'Failed to save message in database' });
            });
    })
    .catch(err => {
        console.error('Error sending SMS via Twilio:', err.message);
        res.status(500).json({ success: false, message: 'Failed to send message', error: err.message });
    });
};

// GET: Retrieve all sent messages
const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ date: -1 });  // Get messages in descending order by date
        res.status(200).json(messages);
    } catch (err) {
        console.error('Error fetching messages from database:', err);
        res.status(500).json({ error: 'Failed to retrieve messages' });
    }
};

module.exports = { sendMessage, getMessages };
