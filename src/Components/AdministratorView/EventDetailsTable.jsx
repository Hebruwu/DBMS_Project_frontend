// EventDetailsTable.jsx

import React from 'react';

const EventDetailsTable = ({ eventDetails }) => {
    if (!eventDetails) {
        return null;
    }

    return (
        <div className="event-details-table">
            <table>
                <thead>
                <tr>
                    <th>Event Name</th>
                    <th>Description</th>
                    <th>Location</th>
                    {/* Add more columns based on your event details structure */}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{eventDetails.eventName}</td>
                    <td>{eventDetails.eventDescription}</td>
                    <td>{eventDetails.location}</td>
                    {/* Add more cells based on your event details structure */}
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EventDetailsTable;
