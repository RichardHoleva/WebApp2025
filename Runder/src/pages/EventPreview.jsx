import React from "react";
import "../styles/preview.css";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

export default function EventPreview(props) {
  const location = useLocation();
  const state = location.state || {};

  // avoid redeclaring identifiers from props by using distinct names
  const previewImage = state.image ?? props.image;
  const previewTitle = state.title ?? props.title;
  const previewDescription = state.description ?? props.description;
  const previewLocation = state.location ?? props.location;
  const previewDate = state.date ?? props.date;
  const previewTime = state.time ?? props.time;
  const previewTypeOfRun = state.typeOfRun ?? props.typeOfRun;

  return (
    <div className="preview-section">
      <h3 className="preview-title">Event Preview</h3>

      <div >
        {previewImage ? (
          <img src={previewImage} alt="Event" className="preview-image" />
        ) : (
          <div className="image-placeholder">No Image Selected</div>
        )}

        <h2 className="preview-event-title">
          {previewTitle || "Your event title"}
        </h2>

        <p className="preview-description">
          {previewDescription || "Add an event description to tell people more about it."}
        </p>

        <p className="preview-detail">
          📍 {previewLocation || "Event location"}
        </p>

        <p className="preview-detail">
          📅 {previewDate ? previewDate : "Select a date"}{" "}
          {previewTime ? `at ${previewTime}` : ""}
        </p>

        <p className="preview-detail">
          🏃 Type:{" "}
          <span
            className={
              previewTypeOfRun === "paid" ? "preview-paid" : "preview-free"
            }
          >
            {previewTypeOfRun === "paid" ? "Paid" : "Free"}
          </span>
        </p>
      </div>
       <NavBar />
    </div>
  );
}
