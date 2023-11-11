import React from 'react';
import './AdminAccount.css'; // You can create a CSS file for styling

const AdminAccount = () => {
    // Sample data (replace with your actual data)
    const adminDetails = {
        adminName: 'John Doe',
        adminID: 'A123',
        username: 'john_admin',
        email: 'john.doe@example.com',
        password: '********', // Note: Avoid storing passwords as plain text in real applications
    };

    return (
        <div className="event-creation-container" style={{ marginLeft: -700,  marginTop: 80}}>
            <div className="sidebar" style={{ marginLeft: -50 }}>
                <button className="button">Homepage</button>
                <button className="button">Create Event</button>
                <button className="button2">Account</button>
            </div>
            <div className="text3" style={{ marginLeft: 10, marginTop: 20}}>
                <h2>Admin Account Details</h2>
            </div>
            <div className="sidebar2" style={{ marginLeft: -350, marginTop: 100 }}>
                <div className="text">
                    <img src="" alt="" />
                    Admin Name: {adminDetails.adminName}
                </div>
                <div className="text">
                    <img src="" alt="" />
                    Admin ID: {adminDetails.adminID}
                </div>
                <div className="text">
                    <img src="" alt="" />
                    Username: {adminDetails.username}
                </div>
                <div className="text">
                    <img src="" alt="" />
                    Email: {adminDetails.email}
                </div>
                <div className="text">
                    <img src="" alt="" />
                    Password: {adminDetails.password}
                </div>
            </div>
            <div className="sidebar2" style={{ marginLeft: 100, marginTop: 30}}>
                <button className="button">View Posted Events</button>
            </div>
        </div>
    );
};

export default AdminAccount;
