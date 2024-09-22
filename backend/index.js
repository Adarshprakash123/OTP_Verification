const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const messageRoutes = require('./routes/messageRoutes');
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/otpApp');

const app = express();
app.use(bodyParser.json());
app.use(cors());  // Enable cross-origin requests

// Routes
app.use('/api/messages', messageRoutes);

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
