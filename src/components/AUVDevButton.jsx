import React from 'react';

const buttonStyle = {
  position: 'absolute',
  top: 16,
  right: 24,
  zIndex: 1000,
  background: '#23283a',
  color: '#fff',
  border: '2px solid #2196f3',
  borderRadius: '6px',
  padding: '0.5em 1em',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1em',
  boxShadow: '0 2px 8px #0003',
};

const AUVDevButton = ({ onFakeAlert }) => (
  <button style={buttonStyle} onClick={onFakeAlert}>
    + Dev Alert
  </button>
);

export default AUVDevButton;