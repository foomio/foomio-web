import React from 'react';
import './styles/Game1.css'; // Import the CSS file
import MKImage from './MK-Logo.png';
function Game1() {
  return (
    <div className="game-container">
      {/* Display the image */}
      <img src={MKImage} alt="Placeholder" className="game-image" />

      {/* Description */}
      <p className="game-description">
        Medieval Kenieval is coming soon.
      </p>
    </div>
  );
}

export default Game1;
