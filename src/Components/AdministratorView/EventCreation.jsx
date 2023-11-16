import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './EventCreation.css'; // You can create a CSS file for styling

const EventCreation = () => {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [location, setLocation] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [eventType, setEventType] = useState('');
    const [eventModality, setEventModality] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="event-creation-container">
            <div className="sidebar" style={{ marginLeft: -500, marginTop: 30}}>
                <button className="button">Homepage</button>
                <button className="button-create">Create Event</button>
                <button className="button">Account</button>
            </div>
            <div className="sidebar2" style={{ marginLeft: 70, marginTop: 70}}>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Event Name"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Event Description"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="input">
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        placeholderText="Select Date & Time"
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Type"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Modality"
                        value={eventModality}
                        onChange={(e) => setEventModality(e.target.value)}
                    />
                </div>
            </div>
            <div className="text3" style={{ marginLeft: 10, marginTop: 20}}>
                <h2>Create an Event</h2>
            </div>
            <div className="sidebar2" style={{ marginLeft: 0, marginTop: 80}}>
                <button className="button">Send Invite</button>
                <button className="button">Who's attending?</button>
                <button className="button">Logout</button>
            </div>
        </div>
    );
};

export default EventCreation;
