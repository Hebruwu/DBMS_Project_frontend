import React from 'react';
import './PostedEvents.css'; // You can create a CSS file for styling

const PostedEvents = () => {
    // Sample data (replace with your actual data)
    const studentDetails = {
        studentName: 'John Doe',
        studentID: 'A123',
        username: 'john_student',
        email: 'john.doe@example.com',
        password: '********',
        major: 'Computer Science',
        year: 'Junior',
        gender: 'Male',
        race: 'Asian',
        domesticInternational: 'International',
    };

    return (
        <div className="student-account-container" style={{ marginLeft: -700, marginTop: -20}}>
            <div className="sidebar">
                <button className="button2">Homepage</button>
                <button className="button">Create Event</button>
            </div>
            <div className="header" style={{ marginLeft: -10, marginTop: 30}}>
                <h2>Events (Already Posted)</h2>
            </div>
            <button style={{ marginTop: 50}} className="button" >Logout</button>
        </div>
    );
};

export default PostedEvents;