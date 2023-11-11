import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const Homepage = () => {
    return (
        <div className="homepage">
            <h1>Virginia Tech Event Cataloging System</h1>
            <div className="buttons">
                {/* Use Link to navigate to /login-signup */}
                <Link to="/login-signup" className="login-signup">
                    Login/Sign Up
                </Link>
                {/* Use Link to navigate to /about */}
                <Link to="/about" className="about">
                    About
                </Link>
            </div>
        </div>
    );
};

export default Homepage;
