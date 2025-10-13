// CustomAlert.jsx
import React, { useEffect, useState } from 'react';
import './CustomAlert.css';

const Alert = ({ message, color = '#ff4d4f', onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    // Wait for animation to finish before removing from DOM
    setTimeout(() => {
      if (onClose) onClose();
    }, 300); // match CSS transition duration
  };

  return (
    <div className={`custom-alert ${visible ? 'show' : 'hide'}`} style={{ backgroundColor: color }}>
      <div className="alert-content">
        <p>{message}</p>
        <button onClick={handleClose}>OK</button>
      </div>
    </div>
  );
};

export default Alert;
