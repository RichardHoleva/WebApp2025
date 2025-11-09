import React from 'react';
import runnerImage from '../assets/runner.png';
import '../styles/event-card.css';
import { useNavigate } from 'react-router-dom';

export default function EventCard({ id, title, location, date, imageUrl, onJoinEvent, description, onDeleteEvent, showDeleteButton = false }) {
  const navigate = useNavigate();

  return (
    <div className="event-card">
      <div className="event-image-container">
        <img
          src={imageUrl || runnerImage}
          alt={title}
          className="event-image"
        />

        {showDeleteButton && (
          <button className="delete-button" onClick={() => onDeleteEvent(id)}>
            ×
          </button>
        )}

        <div className="event-date">
          <span className="event-month">{date.month}</span>
          <span className="event-day">{date.day}</span>
        </div>
        
        <button className="join-button" onClick={() => navigate(`/event/${id}`)}>
          Join Event
        </button>
      </div>
        

      <div className="event-info">
        <h3>{title}</h3>
        <p>{location}</p>
      </div>
    </div>
  );
}