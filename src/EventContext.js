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
    return useContext(EventContext);
};
