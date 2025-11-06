import { useAuth } from '../auth/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import NavBar from '../components/NavBar';

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <>
      <NavBar />
      <div>
        <h2>Welcome, {user?.email}</h2>
        <button onClick={() => signOut(auth)}>Sign out</button>
      </div>
    </>
  );
}
