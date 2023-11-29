import React, {useEffect, useState} from 'react';
import './PostedEvents.css'; // You can create a CSS file for styling
import {useNavigate} from 'react-router-dom';

function Event({date, description, event_type, location, modality, name}) {
    return (
        <div>
            Date: {date}
        </div>
    )
}

function EventList() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        async function fetchEvents() {
            try {
                let eventRes = await fetch("http://ec2-18-118-164-236.us-east-2.compute.amazonaws.com/eventhosting/events/events_details",
                    {
                        headers: {"Content-Type": "application/json",}
                    })
                let eventJson = await eventRes.json();
                setEvents(eventJson)

            } catch (e) {
                console.log(e)
            }
        }

        fetchEvents()
    }, []);
    console.log(events)
    return (
        <>
            {events.map((item, idx) => (
                <Event
                    key={idx} // Add a key prop for each item in the list
                    date={item.DATE_FROM}
                    description={item.DESCRIPTION}
                    event_type={item.EVENT_TYPE}
                    location={item.LOCATION}
                    modality={item.MODALITY}
                    name={item.NAME}
                />
            ))}
        </>
    )
}

const PostedEvents = () => {
    // Sample data (replace with your actual data)

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/admin-view/event-creation');
    };

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
                <button className="button" onClick={handleButtonClick}>Create Event</button>
            </div>
            <div className="header" style={{marginLeft: -10, marginTop: 30}}>
                <h2>Events (Already Posted)</h2>
                <EventList/>
            </div>
            <button style={{marginTop: 50}} onClick={handleLogoutButton} className="button">Logout</button>
        </div>
    );
};

export default PostedEvents;