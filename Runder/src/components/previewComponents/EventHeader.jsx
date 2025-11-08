import React from 'react';
import '../../styles/preview.css';

function EventHeader({ event }) {
  return (
    <div className="event-header">
      <div className="header-actions">
        <button className="back-btn">←</button>
        <button className="share-btn">⤴</button>
      </div>
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-info">
        <h1>{event.title}</h1>
        <div className="event-meta">
          <span className="date">📅 {event.date}</span>
          <span className="location">📍 {event.location}</span>
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