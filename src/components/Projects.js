import React from 'react';
import './styles/Projects.css'; // Import the CSS file

// Import images for projects
import Project1Image from './images/1584175590822 (1).png';
import Project2Image from './images/pink-notes.png'; // Add the new project image
import Project3Image from './images/logo7.png';
function Projects() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Tic Tac Toe on React',
      coverArt: Project1Image, // Use the imported image
      uploadDate: 'May 17, 2024', // Upload date
      url: 'https://github.com/foomio/tic-tac-toe-on-react' // External link URL
    },
    {
      id: 2,
      title: 'Notes App with TS',
      coverArt: Project2Image, // Use the new imported image
      uploadDate: 'May 14, 2024', // Upload date
      url: 'https://github.com/foomio/notes-app' // External link URL
    },
    {
      id: 3,
      title: 'Portfolio Site Code',
      coverArt: Project3Image, // Use the new imported image
      uploadDate: 'May 1, 2024', // Upload date
      url: 'https://github.com/foomio/notes-app' // External link URL
    },
  ];

  return (
    <div>
      <div className="project-container">
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <img src={project.coverArt} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>Uploaded: {project.uploadDate}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <button className="view-button">View on Github</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
