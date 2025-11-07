import React from 'react';
import { useAuth } from '../auth/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import AddRunInput from '../components/AddRunInput.jsx';
import NavBar from '../components/NavBar.jsx';
import Calendar from '../components/Calendar.jsx';
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
        <header>
          <h2>Welcome, {user?.email ?? 'runner'}</h2>
          <button onClick={() => signOut(auth)}>Sign out</button>
        </header>

      
        <section>
          <AddRunInput title="New run" onAdd={handleAdd} />
        </section>
        
        <main className="dashboard">
          <div className="dashboard-container">
            <h1 className="dashboard-title">Upcoming Events</h1>

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
            </div>
          </div>
        </main>

      </div>
      <NavBar />
    </>
  );
}
