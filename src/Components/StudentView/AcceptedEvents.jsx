import React, {useEffect, useState} from 'react';
import './AcceptedEvents.css'; // You can create a CSS file for styling
import {useNavigate} from 'react-router-dom';

function Event({ date, description, event_type, location, modality, name }) {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div
            className="event-box"
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
        >
            <div className="event-info">
                <div className="event-detail">Name: {name}</div>
            </div>
            {showPopup && (
                <div className="popup">
                    <div>Date: {date}</div>
                    <div>Description: {description}</div>
                    <div>Event Type: {event_type}</div>
                    <div>Location: {location}</div>
                    <div>Modality: {modality}</div>
                </div>
            )}
        </div>
    );
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
                <EventList/>
            </div>
            <button style={{marginTop: 50}} onClick={handleLogoutButton} className="button">Logout</button>
        </div>
    );
};

export default AcceptedEvents;