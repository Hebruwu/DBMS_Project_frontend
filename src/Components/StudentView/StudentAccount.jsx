import React from 'react';
import './StudentAccount.css'; // You can create a CSS file for styling

const StudentAccount = () => {
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
        <div className="student-account-container" style={{ marginLeft: -750, marginTop: -20}}>
            <div className="sidebar">
                <button className="button">Homepage</button>
                <button className="button">Invitations</button>
                <button className="button2">Account</button>
            </div>
            <div className="header" style={{ marginLeft: -10, marginTop: 30}}>
                <h2>Student Account Details</h2>
            </div>
            <div className="account-details" style={{ marginTop: 100, marginLeft: -700}}>
                <div className="text">
                    <img src="" alt="" />
                    Student Name: {studentDetails.studentName}
                </div>
                <div className="text">
                    <img src="" alt="" />
                    Student ID: {studentDetails.studentID}
                </div>
                <div className="text">
                    <img src="" alt="" />
                    Username: {studentDetails.username}
                </div>
                <div className="text">
                    <img src="" alt="" />
                    Email: {studentDetails.email}
                </div>
                <div className="text">
                    <img src="" alt="" />
                    Password: {studentDetails.password}
                </div>
                <div className="text">
                    <img src="" alt="" />
                    Major: {studentDetails.major}
                </div>
                <div className="text">
                    <img src="" alt="" />
                    Year: {studentDetails.year}
                </div>
                <div className="text">
                    <img src="" alt="" />
                    Gender: {studentDetails.gender}
                </div>
                <div className="text">
                    <img src="" alt="" />
                    Race: {studentDetails.race}
                </div>
                <div className="text">
                    <img src="" alt="" />
                    Domestic/International: {studentDetails.domesticInternational}
                </div>
            </div>
            <div className="additional-actions" style={{ marginTop: 400, marginRight: -400}}>
                <button className="button">View Accepted Events</button>
                <div className="additional-actions" style={{marginTop: -10}}>
                <button className="button">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default StudentAccount;
