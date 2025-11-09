import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventHeader from '../components/previewComponents/EventHeader';
import OrganizerCard from '../components/previewComponents/OrganizerCard';
import AboutSection from '../components/previewComponents/AboutSection';
import DistanceSection from '../components/previewComponents/DistanceSection';
import BuddySection from '../components/previewComponents/BuddySection';
import familyRunImage from '../assets/familyrun.png';
import richardholeva from '../assets/richardholeva.png'
import BuyTicket from '../components/previewComponents/BuyTicket';
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
      location: 'Forstbotanisk Have',
      image: familyRunImage,
      difficulty: 'Beginner',
      participants: 23,
      privacy: 'Private',
      distance: '10 km',
      description: 'Family Run is a midweek reset built around movement, connection, and good energy. It’s a casual, social run where everyone’s welcome — no pressure, no competition, just a chance to get outside, move your body, and share a few conversations along the way. Whether you come with friends or show up solo, you’ll find an easy pace and an even easier atmosphere. It’s about showing up, doing something good for yourself, and ending the day feeling a little lighter than when you started.',
      organizer: {
        name: 'Richard Holeva',
        avatar: richardholeva,
      }
    });
  }, [eventId]);

  if (!event) return <div>Loading...</div>;

  return (
    <div className="event-preview-page">
      <EventHeader event={event} />
      <OrganizerCard organizer={event.organizer} />
      <AboutSection description={event.description} />
      <DistanceSection distance={event.distance} />
      <BuddySection />

      {/* Add more sections: Playlist, Gallery */}

      <BuyTicket/>
    </div>
  );
}

export default EventPreview;