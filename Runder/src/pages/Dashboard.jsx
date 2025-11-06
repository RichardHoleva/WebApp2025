import React from 'react';
import { useAuth } from '../auth/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import AddRunInput from '../components/AddRunInput.jsx';

export default function Dashboard() {
  const { user } = useAuth();

  const handleAdd = (name) => {
    console.log('New run:', name);
    // TODO: zapisz do Firestore lub zaktualizuj stan
  };

  return (
    <div style={{ padding: 16, maxWidth: 900, margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <h2 style={{ margin: 0 }}>Welcome, {user?.email ?? 'runner'}</h2>
        <button onClick={() => signOut(auth)}>Sign out</button>
      </header>

      <p style={{ color: '#666', marginTop: 12 }}>Next: Register page and Firestore events.</p>

      <section style={{ marginTop: 24 }}>
        <AddRunInput title="New run" onAdd={handleAdd} />
      </section>
    </div>
  );
}




