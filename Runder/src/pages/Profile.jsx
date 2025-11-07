import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import '../styles/profile.css';
import NavBar from '../components/NavBar';

function Profile() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="profile-container">
        <div className="profile-content">
          <button className="sign-out-button" onClick={handleSignOut}>
            Sign Out
          </button>
      </div>
    </div>
    </>
  );
}

export default Profile;