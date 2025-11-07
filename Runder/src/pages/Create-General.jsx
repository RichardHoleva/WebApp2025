import React, { useState } from "react";
import NavBar from '../components/NavBar.jsx';

export default function CreateGeneral() {
  const [typeOfRun, setTypeOfRun] = useState("free");

  return (
    <>
    <div className="event-form-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-step active"></div>
        <div className="progress-step"></div>
        <div className="progress-step"></div>
        <div className="progress-step"></div>
      </div>

      {/* Header */}
      <div className="header">
        <h2>General Information</h2>
        <button className="close-btn">×</button>
      </div>

      {/* Add Image */}
      <div className="image-upload">
        <div className="image-placeholder">
          <span className="image-icon">🖼️</span>
          <p>Add Image</p>
        </div>
      </div>

      {/* Event Title */}
      <div className="input-group">
        <input type="text" placeholder="Enter event title" className="input-field" />
      </div>

      {/* Event Description */}
      <div className="input-group">
        <textarea
          placeholder="Enter event description"
          className="textarea-field"
          rows="4"
        ></textarea>
      </div>

      {/* Type of Run */}
      <div className="run-type">
        <p>Type of Run</p>
        <div className="button-group">
          <button
            className={`type-btn ${typeOfRun === "paid" ? "active" : ""}`}
            onClick={() => setTypeOfRun("paid")}
          >
            Paid Entry
          </button>
          <button
            className={`type-btn ${typeOfRun === "free" ? "active" : ""}`}
            onClick={() => setTypeOfRun("free")}
          >
            Free Entry
          </button>
        </div>
      </div>

      {/* Location */}
      <div className="input-group location">
        <input type="text" placeholder="Enter Location" className="input-field" />
        <span className="icon">📍</span>
      </div>

      {/* Date and Time */}
      <div className="date-time">
        <div className="input-group">
          <input type="date" className="input-field" placeholder="Choose date" />
        </div>
        <div className="input-group">
          <input type="time" className="input-field" placeholder="Choose time" />
        </div>
      </div>

      {/* Continue Button */}
      <button className="continue-btn">Continue</button>
    </div>
    <NavBar />
    </>
  );
}
