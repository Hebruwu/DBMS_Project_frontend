import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import HomePage from './Components/HomePage/HomePage';
import About from './Components/About/About';
import EventCreation from "./Components/AdministratorView/EventCreation";
import AdminAccount from "./Components/AdministratorView/AdminAccount";
import StudentAccount from "./Components/StudentView/StudentAccount";
import AcceptedEvents from "./Components/StudentView/AcceptedEvents";
import PostedEvents from "./Components/AdministratorView/PostedEvents";
import SendInvite from "./Components/AdministratorView/SendInvite";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login-signup" element={<LoginSignup />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>

    );
}

export default App;
