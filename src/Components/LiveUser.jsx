import React, { useEffect, useState } from 'react';

const LiveUser = () => {
  const [liveUsers, setLiveUsers] = useState(0);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000');

    ws.onmessage = (event) => {
      setLiveUsers(Number(event.data));  // <-- fix here
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Cleanup on unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h2>Live Users Online: {liveUsers}</h2>
    </div>
  );
};

export default LiveUser;
