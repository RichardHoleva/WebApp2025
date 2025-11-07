import React from "react";
import "../styles/addRunInput.css";

export default function AddRunInput() {
  return (
    <div className="add-run-container">
      <button className="add-run-button group">

        <span className="add-run-text"> <span className="add-run-plus">+</span> Create new event</span>
      </button>
    </div>
  );
}