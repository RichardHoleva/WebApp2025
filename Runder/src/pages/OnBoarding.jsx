import { useNavigate } from 'react-router-dom';
import '../styles/onboarding.css';
import Logo from '../assets/logo.png';
import FirstImageOB from '../assets/FirstPageImage.png'
import OnBoardingOne from '../assets/onboarding1.png';

export default function OnBoarding() {
  const nav = useNavigate();

    return (
     <div className="onboarding-container">
    <div className="onboarding-header">
      <div className="onboarding-image-bg">
        <img src={FirstImageOB} alt="First Onboarding" />
      </div>
      <div className="onboarding-image-overlay">
        <img src={OnBoardingOne} alt="Onboarding Step 1" />
      </div>
      <div className="onboarding-logo">
        <img src={Logo} alt="Runder Logo" />
      </div>
    </div>

    <div className="onboarding-content">
      <h3>Get started with your running journey</h3>
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