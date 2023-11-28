import React from 'react';
import './EventDetails.css'
import {useNavigate} from "react-router-dom";

const EventDetails = () => {
    // Sample event data
    let navigate = useNavigate()

    const eventData = {
        eventName: 'Sample Event',
        eventDescription: 'A description of the sample event.',
        location: 'Sample Location',
        date: '2023-12-01', // Replace with actual date format
        time: '15:00', // Replace with actual time format
    };

    const handleAcceptClick = () => {
        // Handle the "Accept" button click action
        console.log('Accepted');
    };

    function handleLogoutButton() {
        sessionStorage.removeItem("username")
        sessionStorage.removeItem("password")
        sessionStorage.removeItem("isAdmin")
        navigate('/')
    }

    return (
        <div className="event-container">
            <div className="event-details">
                <h2>Event Details</h2>
                <div>
                    <strong>Event Name:</strong> {eventData.eventName}
                </div>
                <div>
                    <strong>Event Description:</strong> {eventData.eventDescription}
                </div>
                <div>
                    <strong>Location:</strong> {eventData.location}
                </div>
                <div>
                    <strong>Date:</strong> {eventData.date}
                </div>
                <div>
                    <strong>Time:</strong> {eventData.time}
                </div>
            </div>

            <div className="action-buttons">
                <button onClick={handleAcceptClick}>Accept/Accepted</button>
                <button onClick={handleLogoutButton}>Logout</button>
            </div>
        </div>
    );
};

export default EventDetails;
