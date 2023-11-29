import React from 'react';
import './AcceptedEvents.css'; // You can create a CSS file for styling
import {useNavigate} from 'react-router-dom';

const AcceptedEvents = () => {
    const navigate = useNavigate();

    function handleLogoutButton() {
        sessionStorage.removeItem("username")
        sessionStorage.removeItem("password")
        sessionStorage.removeItem("isAdmin")
        navigate('/login-signup')
    }

    return (
        <div className="student-account-container" style={{marginLeft: -700, marginTop: -20}}>
            <div className="sidebar">
                <button className="button2">Homepage</button>
            </div>
            <div className="header" style={{marginLeft: -10, marginTop: 30}}>
                <h2>Events that I'm Invited to...</h2>
            </div>
            <button style={{marginTop: 50}} onClick={handleLogoutButton} className="button">Logout</button>
        </div>
    );
};

export default AcceptedEvents;