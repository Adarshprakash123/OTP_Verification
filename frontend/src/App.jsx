import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactInfo from './components/ContactInfo';
import SendMessage from './components/SendMessage';
import MessageList from './components/MessageList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div>
                        <ContactList />
                        <MessageList />
                    </div>
                } />
                <Route path="/contact-info/:name" element={<ContactInfo />} />
                <Route path="/send-message/:name" element={<SendMessage />} />
            </Routes>
        </Router>
    );
};

export default App;
