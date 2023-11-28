// EventContext.jsx

import React, { createContext, useContext, useState } from 'react';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [eventDetails, setEventDetails] = useState(null);

    const updateEventDetails = (details) => {
        setEventDetails(details);
    };

    return (
        <EventContext.Provider value={{ eventDetails, updateEventDetails }}>
            {children}
        </EventContext.Provider>
    );
};

export const useEventContext = () => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEventContext must be used within an EventProvider');
    }
    return context;
};
