// Games.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Games.css'; // Import the CSS file

// Import the image
import oshaImage from './images/osha.jpg';

function Games() {
  // Sample game data
  const games = [
    {
      id: 1,
      title: 'Osha Violation Simulator',
      coverArt: oshaImage, // Use the imported image
      uploadDate: 'May 1, 2024' // Upload date
    },
    // Add more game objects as needed
  ];

  return (
    <div>
      <h2>Games</h2>
      <div className="game-container"> {/* Add a container */}
        <div className="game-list">
          {games.map((game) => (
            <div key={game.id} className="game-item">
              <img src={game.coverArt} alt={game.title} />
              <div className="game-info">
                <h3>{game.title}</h3>
                <p>Uploaded: {game.uploadDate}</p>
                <Link to={`/game${game.id}`}>Play</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games;
