import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Projects.css'; // Import the CSS file

// Import images for projects
import Project1Image from './images/MK-Logo.png';


function Projects() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Medieval Kenival',
      coverArt: Project1Image, // Use the imported image
      uploadDate: 'May 1, 2024' // Upload date
    },

    // Add more project objects as needed
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
                <Link to={`/project${project.id}`}>
                  <button className="view-button">View</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
