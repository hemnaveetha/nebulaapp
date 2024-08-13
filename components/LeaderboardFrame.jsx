import React, { useEffect, useRef } from 'react';

const LeaderboardFrame = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      // Handle incoming messages if needed
      console.log('Received message from iframe:', event.data);
    };

    // Set the function to update the iframe content
    window.updateLeaderboard = (gameData) => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage({ type: 'UPDATE_LEADERBOARD', data: gameData }, '*');
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        ref={iframeRef}
        src={`${process.env.PUBLIC_URL}/leaderboard.html`}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Leaderboard"
      />
    </div>
  );
};

export default LeaderboardFrame;
