// Tutorials.js

import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Tutorials.css'; // Import the CSS file

// Import the image
import reactImage from './images/react.png';

function Tutorials() {
    // Sample tutorial data
    const tutorials = [
      {
        id: 1,
        title: 'How to Create a React Website',
        thumbnail: reactImage, // Use the imported image variable
        readingTime: '10 mins',
        uploadDate: 'May 1, 2024',
      },
      // Add more tutorial objects as needed
    ];
  
    return (
      <div className="tutorials-container">
        <h2>Tutorials</h2>
        <div className="tutorial-list">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="tutorial-item">
              <Link to={`/tutorial${tutorial.id}`}>
                <img src={tutorial.thumbnail} alt={tutorial.title} />
                <div className="tutorial-info">
                  <h3>{tutorial.title}</h3>
                  <p>Reading Time: {tutorial.readingTime}</p>
                  <p>Uploaded: {tutorial.uploadDate}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default Tutorials;
