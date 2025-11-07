import React from 'react';
import runnerImage from '../assets/runner.png';
import '../styles/event-card.css';

export default function EventCard({ title, location, date, imageUrl, onJoinEvent, description }) {
  return (
    <div className="event-card">
      <div className="event-image-container">
        <img
          src={imageUrl || runnerImage}
          alt={title}
          className="event-image"
        />

        <div className="event-date">
          <span className="event-month">{date.month}</span>
          <span className="event-day">{date.day}</span>
        </div>

        <button className="join-button" onClick={onJoinEvent}>
          Edit Event
        </button>
      </div>

      <div className="event-info">
        <h3>{title}</h3>
        <p>{location}</p>
      </div>
    </div>
  );
}
