import React from 'react';
import './WhosAttending.css';

const WhosAttending = () => {
    // Sample data for the table
    const attendees = [
        { name: 'John Doe', department: 'Computer Science', major: 'Software Engineering', year: 'Senior', gender: 'Male', race: 'Caucasian', nationality: 'American' },
        // Add more attendees as needed
    ];

    return (
        <div>
            <h1>Who's Attending</h1>
            <table border="1">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Major</th>
                    <th>Year</th>
                    <th>Gender</th>
                    <th>Race</th>
                    <th>Nationality</th>
                </tr>
                </thead>
                <tbody>
                {attendees.map((attendee, index) => (
                    <tr key={index}>
                        <td>{attendee.name}</td>
                        <td>{attendee.department}</td>
                        <td>{attendee.major}</td>
                        <td>{attendee.year}</td>
                        <td>{attendee.gender}</td>
                        <td>{attendee.race}</td>
                        <td>{attendee.nationality}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default WhosAttending;
