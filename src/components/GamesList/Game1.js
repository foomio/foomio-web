// Game1.js

import React from 'react';
import './styles/Game1.css'; // Import the CSS file

function Game1() {
  return (
    <div className="game-container">
      {/* Embed the game using the provided iframe code */}
      <iframe
        src="https://itch.io/embed-upload/3323473?color=333333"
        title="Friday Night Funkin' Game"
        className="game-iframe"
      ></iframe>
      {/* Description */}
      <p className="game-description">
        Friday Night Funkin' is a rhythm game where you must impress your girlfriend by hitting the right notes at the right time.
      </p>
    </div>
  );
}

export default Game1;
