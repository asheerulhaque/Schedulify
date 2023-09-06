import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // Import FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';

const BookingForm = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotSelect = (selectInfo) => { // Change the parameter name to selectInfo
        setSelectedSlot(selectInfo.startStr);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send a request to the backend to confirm the appointment
        // Include the selectedSlot and user information
    };

    return (
        <div>
            <h2>Select an available time slot:</h2>
            <FullCalendar
                plugins={[dayGridPlugin]}
                selectable={true}
                select={handleSlotSelect}
            />
            {selectedSlot && (
                <form onSubmit={handleSubmit}>
                    {/* Display selected slot and user information inputs */}
                    <p>Selected Slot: {selectedSlot}</p>
                    {/* Add user information input fields here */}
                    <button type="submit">Book Appointment</button>
                </form>
            )}
        </div>
    );
};

export default BookingForm;
