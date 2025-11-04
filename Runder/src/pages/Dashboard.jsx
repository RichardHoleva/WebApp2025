import { useAuth } from '../auth/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div style={{ padding: 16 }}>
      <h2>Welcome, {user?.email}</h2>
      <button onClick={() => signOut(auth)}>Sign out</button>
      <p>Next: Register page and Firestore events.</p>
    </div>
  );
}
