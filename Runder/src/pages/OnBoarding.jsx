import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/onboarding.css';
import Logo from '../assets/logo.png';
import FirstImageOB from '../assets/FirstPageImage.png'
import OnBoardingOne from '../assets/onboarding1.png';

export default function OnBoarding() {
  const nav = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const totalSlides = 3;

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }

    if (touchStart - touchEnd < -75) {
      
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  return (
    <div 
      className="onboarding-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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

      {/* Dots indicator - moved outside header */}
      <div className="onboarding-dots">
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
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