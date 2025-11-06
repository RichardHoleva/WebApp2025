import { useNavigate } from 'react-router-dom';
import '../styles/onboarding.css';
import Logo from '../assets/logo.png';

export default function OnBoarding() {
  const nav = useNavigate();

  return (
    <div className="onboarding-container">
      <div className="onboarding-logo">
        <img src={Logo} alt="Runder Logo" />
      </div>

  <div className="onboarding-content">
        <h1>Welcome to Runder</h1>
        <p>Get started with your running journey</p>
      </div>
      
      <div className="onboarding-buttons">
        <button onClick={() => nav('/register')} className="btn-join">
          Join us
        </button>
        <button onClick={() => nav('/login')} className="btn-signin">
          Sign in
        </button>
      </div>
    </div>
  );
}