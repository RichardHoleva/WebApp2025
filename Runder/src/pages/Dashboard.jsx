import React from 'react';
import { useAuth } from '../auth/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import AddRunInput from '../components/AddRunInput.jsx';
import NavBar from '../components/NavBar.jsx';

export default function Dashboard() {
  const { user } = useAuth();

  const handleAdd = (name) => {
    console.log('New run:', name);
  };

  return (
    <>
      <div>
        <header>
          <h2>Welcome, {user?.email ?? 'runner'}</h2>
          <button onClick={() => signOut(auth)}>Sign out</button>
        </header>

        <p>Next: Register page and Firestore events.</p>

        <section>
          <AddRunInput title="New run" onAdd={handleAdd} />
        </section>
      </div>

      <NavBar />
    </>
  );
}