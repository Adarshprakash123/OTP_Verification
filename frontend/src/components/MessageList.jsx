import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MessageList = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('https://otp-verification-2-dc58.onrender.com/api/messages');
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div>
            <h2>Sent Messages</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {msg.name} <br />
                        <strong>Time:</strong> {new Date(msg.date).toLocaleString()} <br />
                        <strong>OTP:</strong> {msg.otp}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;
