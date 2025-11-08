import React, { useState } from "react";
import NavBar from '../components/NavBar.jsx';
import ProgressBar from "../components/ProgressBar.jsx";
import "../styles/generalinfo.css";
import AddImage from "../components/AddImage.jsx";
import InputField from "../components/inputField.jsx";

export default function CreateGeneral() {
  const [typeOfRun, setTypeOfRun] = useState("free");

  return (
    <>
      <NavBar />
      <ProgressBar />
      <div className="create-general-container">
        <div className="header">
          <h2>General Information</h2>
          <button className="close-btn">×</button>
          
        </div>
        <AddImage />
        <div className="section-header">
          <h3 className="section-title">Event Title</h3>
          <span className="required-badge">Required</span>
        </div>
        <InputField 
        placeholder="Enter event title" 
        multiline={false}
        rows={3}/>
        <div className="section-header-description">
          <h3 className="section-title">Event Description</h3>
          <span className="required-badge">Optional</span>
        </div>
        <InputField 
          placeholder="Enter event description"
          multiline={true}
          rows={6}
        />
        <div className="section-header-description">
          <h3 className="section-title">Type of Run</h3>
        </div>
        

      </div>
    </>
  );
}