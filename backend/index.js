const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const messageRoutes = require('./routes/messageRoutes');
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://singh:12345678.aA%40@cluster0.l02gr.mongodb.net/otpApp');

const app = express();
app.use(bodyParser.json());
app.use(cors());  // Enable cross-origin requests

// Routes
app.use('/api/messages', messageRoutes);

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
