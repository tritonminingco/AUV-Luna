// useAUVSimulation.js
// Custom hook for simulating AUV telemetry and behavior

import { useEffect, useRef, useState } from 'react';

const generateRandomDirection = () => {
  const angle = Math.random() * 2 * Math.PI;
  return { x: Math.cos(angle), y: Math.sin(angle) };
}

const INITIAL_AUVS = [
  {
    id: 1,
    name: 'AUV-Alpha',
    battery: 1.0, // 100%
    latitude: 37.7749,
    longitude: -122.4194,
    state: 'normal', // can be 'normal', 'warning', 'critical'
    mission_type: 'Sampling', // can be 'Sampling', 'Surveying', 'Idle' or 'Tracking'
    direction: generateRandomDirection() // Random initial direction
  },
  {
    id: 2,
    name: 'AUV-Beta',
    battery: 1.0,
    latitude: 37.7750,
    longitude: -122.4180,
    state: 'normal',
    mission_type: 'Surveying',
    direction: generateRandomDirection()
  },
  //   {
  //   id: 2,
  //   name: 'AUV-Charlie',
  //   battery: 1.0,
  //   latitude: 37.7750,
  //   longitude: -122.4180,
  //   state: 'normal',
  //   mission_type: 'Surveying',
  //   direction: generateRandomDirection()
  // },
];



const BATTERY_DRAIN_PER_TICK = 0.01; // 1% every tick (5s)
const SPEED = 0.0001; // 0.0001 degrees per tick (5s)
const useAUVSimulation = () => {
  const [auvs, setAuvs] = useState(INITIAL_AUVS);
  const [alerts, setAlerts] = useState([]);
  const intervalRef = useRef();
  const alertIdRef = useRef(0);

  // Helper to add alert
  const addAlert = (alert) => {
    setAlerts((prev) => [
      ...prev,
      { ...alert, id: alertIdRef.current++ },
    ]);
  };

  // Remove alert by id
  const removeAlert = (id) => {
    setAlerts((prev) => prev.filter(a => a.id !== id));
    console.warn(`AlertSystem: Alert ${id} removed`);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log('AUVs updated at', new Date().toLocaleTimeString());
      setAuvs(prevAuvs => {
        return prevAuvs.map(auv => {
          const newBattery = Math.max(0, auv.battery - BATTERY_DRAIN_PER_TICK * (Math.random() + 0.5)); // Randomize battery drain slightly
          // Trigger CRITICAL alert if battery drops below 20% and not already alerted
          if (auv.battery >= 0.2 && newBattery < 0.2) {
            addAlert({
              title: `${auv.name} Battery Critical`,
              message: `Battery dropped below 20%. Immediate action required!`,
              level: 'CRITICAL',
              timestamp: Date.now(),
              auvTag: auv.name,
            });
          }
          var directionIncrement = {
            x: auv.direction.x * Math.random() * SPEED,
            y: auv.direction.y * Math.random() * SPEED
          }
          return {
            ...auv,
            state: newBattery < 0.2 ? 'critical' : newBattery < 0.5 ? 'warning' : 'normal',
            battery: newBattery,
            longitude: newBattery > 0 ? Number((auv.longitude + directionIncrement.x).toFixed(6)) : auv.longitude,
            latitude: newBattery > 0 ? Number((auv.latitude + directionIncrement.y).toFixed(6)) : auv.latitude,
          };
        });
      });
      // Remove outdated alerts
      setAlerts(prevAlerts => prevAlerts.filter(alert => {
        const age = Date.now() - alert.timestamp;
        return alert.level === 'CRITICAL' || age < 5000; // Keep CRITICAL alerts and those less than 5 seconds old
      }));
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return {
    auvs,
    alerts,
    removeAlert,
    addAlert,
  };
};

export default useAUVSimulation;