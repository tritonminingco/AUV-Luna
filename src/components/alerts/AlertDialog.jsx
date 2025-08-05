import React, { useEffect } from 'react';

const LEVEL_COLORS = {
  INFO: '#2196f3',
  WARN: '#ff9800',
  CRITICAL: '#f44336',
};

const AlertDialog = ({ id, title, message, level = 'INFO', timestamp, auvTag, onClose }) => {
  useEffect(() => {
    if (level !== 'CRITICAL') {
      const timer = setTimeout(() => onClose(id), 5000);
      return () => clearTimeout(timer);
    }
  }, [id, level, onClose]);

  // Convert timestamp to a readable date string
  const dateString = timestamp
    ? new Date(timestamp).toLocaleString()
    : '';

  return (
    <div
      style={{
        background: '#23283a',
        color: '#fff',
        borderLeft: `6px solid ${LEVEL_COLORS[level] || '#2196f3'}`,
        padding: '1rem',
        margin: '1rem 0',
        borderRadius: '8px',
        minWidth: '300px',
        boxShadow: '0 2px 8px #0006',
        position: 'relative',
      }}
    >
      <strong style={{ color: LEVEL_COLORS[level] }}>
        {title} - {dateString} - {auvTag}
      </strong>
      <p style={{ margin: '0.5em 0 0.5em 0' }}>{message}</p>
      <span
        style={{
          position: 'absolute',
          top: 8,
          right: 12,
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1.2em',
        }}
        onClick={() => onClose(id)}
        aria-label="Close"
        title="Close"
      >
        ×
      </span>
    </div>
  );
};

export default AlertDialog;