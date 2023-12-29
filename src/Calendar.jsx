import React from 'react';
import FullCalendar from '@fullcalendar/react'; // Import FullCalendar component
import dayGridPlugin from '@fullcalendar/daygrid'; // Import required plugins
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // Note: correct spelling

export default function Calendar() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // Ensure correct plugin names
        initialView="dayGridMonth" // Set the initial view as per your requirement
        events={[
          // Add your events data here if needed
          {
            title: 'Event 1',
            start: '2023-12-01',
            end: '2023-12-03',
          },
          // Add more events if needed
        ]}
      />
    </div>
  );
}
