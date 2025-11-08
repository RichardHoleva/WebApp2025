import React from "react";
import "../styles/input.css";

export default function InputField({ placeholder, value, onChange, type = "text", multiline = false, rows = 4 }) {
  if (multiline) {
    return (
      <div className="input-container">
        <textarea
          className="input-field textarea"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
        />
      </div>
    );
  }

  return (
    <div className="input-container">
      <input
        type={type}
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}