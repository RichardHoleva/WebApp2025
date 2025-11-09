import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import AddRunInput from '../components/AddRunInput.jsx';
import NavBar from '../components/NavBar.jsx';
import Calendar from '../components/Calendar.jsx';
import Filter from '../components/Filter.jsx';
import '../styles/dashboard.css';
import EventCard from '../components/event-card';
import { getAllEvents, getUserEvents, joinEvent } from '../lib/events.js';
import runnerImage from '../assets/runner.png';

export default function Dashboard() {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('all'); // 'all', 'created', 'joined'

  useEffect(() => {
    loadEvents();
  }, [filterType]);

  const loadEvents = async () => {
    setLoading(true);
    try {
      let result;
      if (filterType === 'created') {
        result = await getUserEvents();
      } else {
        result = await getAllEvents();
      }
      
      if (result.success) {
        setEvents(result.events);
      } else {
        console.error('Error loading events:', result.error);
      }
    } catch (error) {
      console.error('Error loading events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleJoinEvent = async (eventId) => {
    try {
      const result = await joinEvent(eventId);
      if (result.success) {
        console.log('Successfully joined event');
        // Optionally reload events to update participant count
        loadEvents();
      } else {
        alert(`Error joining event: ${result.error}`);
      }
    } catch (error) {
      alert(`Error joining event: ${error.message}`);
    }
  };

  const formatEventForCard = (event) => {
    const eventDate = new Date(event.date);
    const month = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const day = eventDate.getDate().toString().padStart(2, '0');
    
    return {
      id: event.id,
      title: event.title,
      location: event.location,
      date: { month, day },
      imageUrl: event.image_url || runnerImage,
      description: event.description,
      typeOfRun: event.type_of_run,
      time: event.time,
      createdBy: event.created_by,
      participants: event.participants || []
    };
  };

  return (
    <>
      <Calendar />
      <div>
        <main className="dashboard">
          <div className="dashboard-container">
            <Filter onFilterChange={setFilterType} />
            <AddRunInput title="New run" />
            
            {loading ? (
              <p>Loading events...</p>
            ) : (
              <div className="events-list">
                {events.length === 0 ? (
                  <p>No events found. Create your first event!</p>
                ) : (
                  events.map((event) => {
                    const formattedEvent = formatEventForCard(event);
                    return (
                      <EventCard
                        key={event.id}
                        title={formattedEvent.title}
                        location={formattedEvent.location}
                        date={formattedEvent.date}
                        imageUrl={formattedEvent.imageUrl}
                        description={formattedEvent.description}
                        onJoinEvent={() => handleJoinEvent(event.id)}
                      />
                    );
                  })
                )}
              </div>
            )}
          </div>
        </main>
      </div>
      <NavBar />
    </>
  );
}