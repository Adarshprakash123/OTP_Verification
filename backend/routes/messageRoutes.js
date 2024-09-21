const express = require('express');
const { sendMessage, getMessages } = require('../controllers/messageController');
const router = express.Router();

// POST: Send OTP message
router.post('/send', sendMessage);

// GET: Get all sent messages
router.get('/', getMessages);

module.exports = router;
