import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SendMessage = () => {
    const location = useLocation(); // Use the useLocation hook
    const { contact } = location.state || {}; // Access contact from location.state
    const [otp, setOtp] = useState(Math.floor(100000 + Math.random() * 900000));

    const handleSend = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/messages/send', {
                name: contact.name,
                phone: contact.phone,
            });

            if (response.data.success) {
                alert('OTP sent successfully!');
            } else {
                alert('Failed to send OTP.');
            }
        } catch (error) {
            console.error('Error sending OTP', error);
        }
    };

    return (
        <div>
            <h2>Send Message to {contact ? contact.name : 'User'}</h2>
            <textarea value={`Hi. Your OTP is: ${otp}`} readOnly />
            <button onClick={handleSend}>Send OTP</button>
        </div>
    );
};

export default SendMessage;
