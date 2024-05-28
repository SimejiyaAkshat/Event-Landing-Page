import React from 'react';
import './EventSchedule.css';

const EventSchedule = () => {
  return (
    <div className="event-schedule">
      <h2>Event Schedule</h2>
      <ul>
        <li>
          <strong>10:00 AM:</strong> Opening Ceremony
        </li>
        <li>
          <strong>11:00 AM:</strong> Keynote Speaker
        </li>
        <li>
          <strong>1:00 PM:</strong> Lunch Break
        </li>
        <li>
          <strong>2:00 PM:</strong> Workshops
        </li>
        <li>
          <strong>5:00 PM:</strong> Networking Session
        </li>
      </ul>
    </div>
  );
};

export default EventSchedule;
