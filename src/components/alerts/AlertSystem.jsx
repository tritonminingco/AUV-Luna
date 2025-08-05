import React from 'react';
import AlertDialog from './AlertDialog';
import '../../styles/alerts/AlertSystem.css';

const AlertSystem = ({ alerts, onClose }) => {
    if (!alerts || alerts.length === 0) return null;
    if (alerts.length > 5) {
        console.warn('AlertSystem: Too many alerts, displaying only the first 5.');
        alerts = alerts.slice(0, 5); // Limit to first 5 alerts
    }
    // Ensure alerts are sorted by timestamp, newest first
    alerts.sort((a, b) => b.timestamp - a.timestamp);

    alerts.forEach((alert, index) => {
        if (!alert.id) {
            alert.id = `alert-${Date.now()}-${index}`; // Generate a unique ID
        }
    });



    return (
        <div
            className="alert-system"
            style={{
                position: 'fixed',
                top: 24,
                right: 24,
                width: 340,
                maxHeight: '80vh',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                zIndex: 2000,
                pointerEvents: 'none', // allow click-through except on alerts
            }}
        >
            {alerts.map((alert) => (
                <div
                    key={alert.id}
                    style={{
                        animation: `slide-in-right 0.4s cubic-bezier(.4,2,.6,1)`,
                        pointerEvents: 'auto', // allow interaction with alert
                    }}
                >
                    <AlertDialog {...alert} onClose={onClose} />
                </div>
            ))}
            <style>{`
                @keyframes slide-in-right {
                    from { transform: translateX(100px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default AlertSystem;