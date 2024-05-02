// AboutMe.js
import React from 'react';
import './styles/About.css'; // Import CSS file for styling

function AboutMe() {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="section">
        <h3>Education</h3>
        <p>Texas State University, San Marcos, TX — B.A Computer Science</p>
        <p>August 2016 - May 2023, San Marcos</p>
      </div>
      <div className="section">
        <h3>Technical Skills</h3>
        <p>Portfolio/Language/Tools: C++, Java, HTML/CSS, Python, & C#</p>
        <p>AWS, Terraform, React, Unity, MongoDB, Garage Band, Google Calendar, Adobe Creative Cloud, Microsoft Office, and Docker</p>
      </div>
      <div className="section">
        <h3>Experience</h3>
        <p>Oteemo, Reston, VA — Associate DevSecOps Consultant</p>
        <p>February 2022 - July 2023</p>
        <ul>
          <li>Contributed to the Vulnerability Assessment Tracker (VAT) team for Platform 1’s IronBank, addressing frontend design, backend servers, and database issues.</li>
          <li>Spearheaded the creation of User Stories for SkiCamp (an Air Force federal project), significantly enhancing project communication and client satisfaction.</li>
          <li>Demonstrated proficiency in utilizing GitLab and GitHub for version control and fostering collaboration among team members.</li>
          <li>Efficiently managed tasks and projects using Jira and Miro, ensuring timely completion and delivery of project milestones.</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
