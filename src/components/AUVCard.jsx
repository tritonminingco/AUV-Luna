// AUVCard.jsx
// Displays telemetry for a single AUV

import React from 'react';
import '../styles/AUVCard.css';


const AUVCard = ({ auv = {} }) => {
  // Prevent errors if auv is undefined
  const { name = 'Unknown', battery = 1.0, latitude = 0.0, longitude = 0.0 } = auv;
  return (
    <div className="auv-card">
      {/* Telemetry info will be rendered here */}
      <h3>{name}</h3>

      <p>Location: {latitude}, {longitude}</p>
      <div className="battery-bar-container">
        <div className="battery-bar-label">Battery:</div>
        <div className="battery-bar-outer">
          <div
            className="battery-bar-inner"
            style={{
              width: `${Math.max(0, Math.min(1, battery)) * 100}%`,
              backgroundColor: battery > 0.5 ? '#4caf50' : battery > 0.2 ? '#ff9800' : '#f44336'
            }}
          />
        </div>
        <span className="battery-bar-percent">{Math.round(battery * 100)}%</span>
      </div>
      <div className="auv-status">
        <p>Status: {battery > 0.2 ? 'Operational' : 'Low Battery'}</p>
        <p>Last Updated: {new Date().toLocaleTimeString()}</p>
      </div>
      {/* Additional telemetry data can be added here */}
    </div>
  );
};
export default AUVCard;
