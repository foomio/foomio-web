import React from 'react';
import './styles/Game1.css'; // Import the CSS file

function Game1() {
  // Function to toggle full screen mode
  const toggleFullScreen = () => {
    const iframe = document.querySelector('.game-iframe');
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) { /* Safari */
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) { /* IE11 */
        iframe.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="game-container">
      {/* Embed the game using the provided iframe code */}      
      <button onClick={toggleFullScreen} className="full-screen-button">
        Full Screen
      </button>
      <iframe
        src="https://www.onlinegames.io/games/2023/unity2/gta-simulator/index.html"
        title="Game1"
        className="game-iframe"
      ></iframe>
      
      {/* Description */}
      <p className="game-description">
        Medieval Kenieval is coming soon until then I have a playable placeholder from an unknown dev.
      </p>

    </div>
  );
}

export default Game1;
