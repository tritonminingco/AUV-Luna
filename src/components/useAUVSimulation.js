// useAUVSimulation.js
// Custom hook for simulating AUV telemetry and behavior

import { useEffect, useRef, useState } from 'react';

const INITIAL_AUVS = [
  {
    id: 1,
    name: 'AUV-Alpha',
    battery: 1.0, // 100%
    latitude: 37.7749,
    longitude: -122.4194,
  },
  {
    id: 2,
    name: 'AUV-Beta',
    battery: 1.0,
    latitude: 37.7750,
    longitude: -122.4180,
  },
];

const BATTERY_DRAIN_PER_TICK = 0.01; // 1% every tick (5s)

const useAUVSimulation = () => {
  const [auvs, setAuvs] = useState(INITIAL_AUVS);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setAuvs(prevAuvs =>
        prevAuvs.map(auv => ({
          ...auv,
          battery: Math.max(0, auv.battery - BATTERY_DRAIN_PER_TICK),
          longitude: Number((auv.longitude + (Math.random() - 0.5) * 0.001).toFixed(6)), // Simulate movement, round to 3 decimals
          latitude: Number((auv.latitude + (Math.random() - 0.5) * 0.001).toFixed(6)),   // Round to 3 decimals
        }))
      );
    }, 1000); // update every 1 second

    return () => clearInterval(intervalRef.current);
  }, []);

  return {
    auvs,
    alerts: [],
  };
};

export default useAUVSimulation;