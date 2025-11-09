import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventHeader from '../components/previewComponents/EventHeader';
import OrganizerCard from '../components/previewComponents/OrganizerCard';
import AboutSection from '../components/previewComponents/AboutSection';
import familyRunImage from '../assets/familyrun.png';
import '../styles/preview.css';

function EventPreview() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event data from Supabase
    // For now, using mock data
    setEvent({
      title: 'Family Run 2025',
      date: '22 Oct, 2025, 19:30',
      location: 'Meet Point - Forstbotanisk Have',
      image: familyRunImage,
      difficulty: 'Beginner',
      participants: 23,
      privacy: 'Private',
      distance: '10 km',
      description: 'Family Run is a midweek reset built around movement...',
      organizer: {
        name: 'Richard Holeva',
        avatar: '/path/to/avatar.jpg'
      }
    });
  }, [eventId]);

  if (!event) return <div>Loading...</div>;

  return (
    <div className="event-preview-page">
      <EventHeader event={event} />
      <OrganizerCard organizer={event.organizer} />
      <AboutSection description={event.description} />
      
      <div className="distance-section">
        <h3>🎯 Distance - {event.distance}</h3>
        <p>See the route where we will be running</p>
        <button className="open-map-btn">Open Map</button>
      </div>

      <div className="buddy-section">
        <h3>🏃 You don't like to run alone?</h3>
        <p>Join a buddy program where u will be matched with a person to run and motivate each other</p>
        <button className="join-buddy-btn">Join Buddy Program</button>
      </div>

      {/* Add more sections: Playlist, Gallery */}

      <button className="buy-ticket-btn">BUY TICKET 15 DKK</button>
    </div>
  );
}

export default EventPreview;