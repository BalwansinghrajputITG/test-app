import React, { useEffect, useState } from 'react';
import './Alert.css';

const SuperAlert = ({ message, bgColor = '#111', textColor = '#fff' }) => {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);
 function Changer(){
  setClosing(true);
}
  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true); // Trigger slide up
      setTimeout(() => setVisible(false), 400); // Wait for animation
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible || !message) return null;

  return (
    <div
      className={`super-alert ${closing ? '' : 'slide-down'}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {message}
      <button style={{color:"black",marginLeft:'0.4rem' , background:'#1c1705'}} onClick={Changer}> Ok</button>
    </div>
  );
};

export default SuperAlert;
