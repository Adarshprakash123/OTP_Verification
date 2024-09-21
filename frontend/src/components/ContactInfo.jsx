import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ContactInfo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { contact } = location.state;
    const handleSendMessage = () => {
        navigate(`/send-message/${contact.name}`, { state: { contact } });
    };

    return (
        <div>
            <h2>Contact Info</h2>
            <p>Name: {contact.name}</p>
            <p>Phone: {contact.phone}</p>
            <button onClick={handleSendMessage}>Send Message</button>
        </div>
    );
};

export default ContactInfo;
