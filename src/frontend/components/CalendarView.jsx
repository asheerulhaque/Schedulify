import React from 'react';
import FullCalendar from '@fullcalendar/react'; // Make sure this import is correct
import dayGridPlugin from '@fullcalendar/daygrid';
import { Link } from 'react-router-dom';


const CalendarView = () => {
    return (
        <div>
            <Link to="/book">Book an Appointment</Link>

            <h2>View Available Time Slots:</h2>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={[
                    // Define your appointment events here
                    // You can fetch these events from the backend
                    // Example event:
                    {
                        title: 'Available Slot',
                        start: '2023-09-10T09:00:00', // Replace with your actual date and time
                        end: '2023-09-10T10:00:00',   // Replace with your actual date and time
                    }
                ]}
            />
        </div>
    );
};

export default CalendarView;
