import React, { useEffect, useState } from 'react'

const LiveUser = () => {
    const [activeUsers, setActiveUsers] = useState(0);

    useEffect(() => {
        const connectToBackend = () => {
            console.log('Connecting to active user service...');
            setActiveUsers(Math.floor(Math.random() * 100) + 1); /

            const intervalId = setInterval(() => {
                const newCount = Math.max(0, activeUsers + (Math.random() > 0.5 ? 1 : -1));
                setActiveUsers(newCount);
            }, 5000);

            return () => {
                clearInterval(intervalId); // Cleanup on unmount
                console.log('Disconnected from active user service.');
            };
        };

        const cleanup = connectToBackend();
        return cleanup;
    }, [activeUsers]);


    return (
        <div>
            <div  >
                <h2>Active Users: {activeUsers}</h2>
            </div>
        </div>
    )
}

export default LiveUser;