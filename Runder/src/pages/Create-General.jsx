import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import ProgressBar from "../components/ProgressBar.jsx";
import "../styles/generalinfo.css";
import AddImage from "../components/AddImage.jsx";
import InputField from "../components/inputField.jsx";
import Entrance from "../components/Entrance.jsx";

export default function CreateGeneral() {
  const navigate = useNavigate();
  const [typeOfRun, setTypeOfRun] = useState("free");

  const handleClose = () => {
    navigate('/dashboard');
  };

  const handleConfirm = () => {
    
    console.log('Event confirmed');
    navigate('/dashboard');
  };

  return (
    <div className="create-general-page">
      <NavBar />
      <ProgressBar />
      <div className="create-general-container">
        <div className="header">
          <h2>General Information</h2>
          <button className="close-btn" onClick={handleClose}>×</button>
        </div>
        <AddImage />
        <div className="section-header">
          <h3 className="section-title">Event Title</h3>
          <span className="required-badge">Required</span>
        </div>
        <InputField 
          placeholder="Enter event title" 
        />
        <div className="section-header-description">
          <h3 className="section-title">Event Description</h3>
          <span className="required-badge">Optional</span>
        </div>
        <InputField 
          placeholder="Enter event description"
          multiline={true}
          rows={4}
        />
        <div className="section-header-description">
          <h3 className="section-title">Type of Run</h3>
        </div>
          <Entrance/>
         <div className="section-header">
          <h3 className="section-title">Location</h3>
          <span className="required-badge">Required</span>
        </div>
        <InputField 
          placeholder="Enter location" 
          multiline={false}
          rows={3}
        />
        <div className="date-time-container">
          <div className="date-time-field">
            <div className="section-header">
              <h3 className="section-title">Select Date</h3>
              <span className="required-badge">Required</span>
            </div>
            <InputField 
              placeholder="Choose date" 
              multiline={false}
              rows={3}
              type="date"
            />
          </div>
          <div className="date-time-field">
            <div className="section-header">
              <h3 className="section-title">Select Time</h3>
            </div>
            <InputField 
              placeholder="Choose time" 
              multiline={false}
              rows={3}
              type="time"
            />
          </div>
        </div>
        <button className="confirm-btn" onClick={handleConfirm}>
          Confirm Event
        </button>
      </div>
    </div>
  );
}