import React from 'react';
import '../../styles/preview.css';

function AboutSection({ description }) {
  return (
    <div className="about-section">
      <h2>⚡ About</h2>
      <p>{description}</p>
    </div>
  );
}

export default AboutSection;