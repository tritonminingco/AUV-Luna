// AUVSimulator.jsx
// Main panel for simulating multiple AUVs

import React from 'react';
import AUVCard from './AUVCard';
import { AUVMap } from './AUVMap';
import AlertSystem from './alerts/AlertSystem';
import '../styles/AUVSimulator.css';
import useAUVSimulation from './useAUVSimulation';

const AUVSimulator = () => {
  // Placeholder for simulation hook and alert integration
  const { auvs } = useAUVSimulation();
  return (
    <div className="auv-simulator-panel">
      <h2>AUV Telemetry Simulator</h2>
      <div className="auv-features">
        <div className="auv-cards-container">
        {auvs.map(auv => (
          <AUVCard key={auv.id} auv={auv} />
        ))}
        </div>
      <AUVMap auvs={auvs} />
      </div>
      {/* You can add more <AUVCard /> components for multiple AUVs */}
      {/* Alert system can be added below */}
      {/* <AlertSystem /> */}

    </div>
  );
};

export default AUVSimulator;
