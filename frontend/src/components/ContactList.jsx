import React from 'react';
import contacts from '../utils/contacts.json';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarkList from '../components/MessageList'
const ContactList = () => {
    const navigate = useNavigate();

    const handleClick = (contact) => {
        navigate(`/contact-info/${contact.name}`, { state: { contact } });
    };

    return (
        <div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index} onClick={() => handleClick(contact)}>
                        {contact.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
