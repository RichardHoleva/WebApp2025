import React from 'react';
import '../../styles/preview.css';

function EventHeader({ event }) {
  return (
    <div className="event-header">
      <div className="header-actions">
        <button className="back-btn">←</button>
        <button className="share-btn"><i class="fa-solid fa-share-nodes"></i></button>
      </div>
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-info">
        <h1>{event.title}</h1>
        <div className="event-meta">
          <span className="date"><i class="fa-regular fa-calendar"></i> {event.date}</span>
          <span className="location"><i class="fa-solid fa-location-dot"></i><b>Meet Point</b> - {event.location}</span>
        </div>
        <div className="event-stats">
          <span className="difficulty">{event.difficulty}</span>
          <span className="participants">👥 {event.participants} Participants</span>
          <span className="privacy">{event.privacy}</span>
        </div>
      </div>
    </div>
  );
}

export default EventHeader;