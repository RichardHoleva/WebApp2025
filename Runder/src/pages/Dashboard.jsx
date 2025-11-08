import React from 'react';
import { useAuth } from '../auth/AuthProvider';
import AddRunInput from '../components/AddRunInput.jsx';
import NavBar from '../components/NavBar.jsx';
import Calendar from '../components/Calendar.jsx';
import Filter from '../components/Filter.jsx';
import '../styles/dashboard.css';
import EventCard from '../components/event-card';
import runnerImage from '../assets/runner.png';

export default function Dashboard() {
  const { user } = useAuth();

  const handleAdd = (name) => {
    console.log('New run:', name);
  };

  return (
    <>
      <Calendar />
      <div>
        

      
          
        <main className="dashboard">
          <div className="dashboard-container">
            <Filter />
            <AddRunInput title="New run" onAdd={handleAdd} />
            <div className="events-list">
              <EventCard
                title="Bay Breeze Dash"
                location="Risskov Strandpark"
                date={{ month: "OCT", day: "24" }}
                imageUrl={runnerImage}
                onJoinEvent={() => console.log("Joined Bay Breeze Dash")}
              />

              <EventCard
                title="Urban Steps Challenge"
                location="Aarhus City Hall Square"
                date={{ month: "NOV", day: "12" }}
                imageUrl={runnerImage}
                onJoinEvent={() => console.log("Joined Urban Steps Challenge")}
              />
              
              <EventCard
                title="Urban Steps Challenge"
                location="Aarhus City Hall Square"
                date={{ month: "NOV", day: "12" }}
                imageUrl={runnerImage}
                onJoinEvent={() => console.log("Joined Urban Steps Challenge")}
              />

              
              
            </div>
          </div>
        </main>

      </div>
      <NavBar />
    </>
  );
}
