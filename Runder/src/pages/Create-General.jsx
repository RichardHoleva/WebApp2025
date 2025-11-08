import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import "../styles/generalinfo.css";
import "../styles/preview.css";
import AddImage from "../components/AddImage.jsx";
import InputField from "../components/inputField.jsx";
import Entrance from "../components/Entrance.jsx";

export default function CreateGeneral() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [typeOfRun, setTypeOfRun] = useState("free");

  const handleClose = () => navigate("/dashboard");
  const handleConfirm = () => {
    // navigate to the preview page and pass current form data via location state
    navigate("/event-preview", {
      state: { image, title, description, location, date, time, typeOfRun },
    });
  };

  const handleImageChange = (file) => {
    if (file) setImage(URL.createObjectURL(file));
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

        <div className="content-wrapper">
          {/* ==== Left: Form ==== */}
          <div className="form-section">
            <AddImage onImageSelect={handleImageChange} />

            <div className="section-header">
              <h3 className="section-title">Event Title</h3>
              <span className="required-badge">Required</span>
            </div>
            <InputField
              placeholder="Enter event title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="section-header-description">
              <h3 className="section-title">Event Description</h3>
              <span className="required-badge">Optional</span>
            </div>
            <InputField
              placeholder="Enter event description"
              multiline={true}
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="section-header-description">
              <h3 className="section-title">Type of Run</h3>
            </div>
            <Entrance setTypeOfRun={setTypeOfRun} /> {/* make sure Entrance calls props.setTypeOfRun("paid"/"free") */}

            <div className="section-header">
              <h3 className="section-title">Location</h3>
              <span className="required-badge">Required</span>
            </div>
            <InputField
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <div className="date-time-container">
              <div className="date-time-field">
                <div className="section-header">
                  <h3 className="section-title">Select Date</h3>
                  <span className="required-badge">Required</span>
                </div>
                <InputField
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="date-time-field">
                <div className="section-header">
                  <h3 className="section-title">Select Time</h3>
                </div>
                <InputField
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>

            <button className="confirm-btn" onClick={handleConfirm}>
              Confirm Event
            </button>
          </div>

          {/* Live preview removed */}
        </div>
      </div>
    </div>
  );
}
