import React from "react";
import "../styles/addRunInput.css";

export default function AddRunInput() {
  return (
    <div className="add-run-container">
      <button className="add-run-button group">
        <span className="add-run-plus">+</span>
        <span className="add-run-text">Create new event</span>
      </button>
    </div>
  );
}