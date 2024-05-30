// AboutMe.js
import React from 'react';
import './styles/About.css'; // Import CSS file for styling

function AboutMe() {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <p>I created this website using AWS and React</p>
      <div className="section">
        <h3>Personal</h3>
        <p>I am DevSecOps Engineer with a love for learning and problem solving!</p>
        <p>My favorite color is green, and I share my home with Bazooka, my dachshund. In my free time, I enjoy playing video games, a hobby that was sparked when I watched my sister play Final Fantasy 10.</p>
      </div>
      <div className="section">
        <h3>Education</h3>
        <p>Texas State University, San Marcos, TX — B.A Computer Science</p>
        <p>August 2016 - May 2023, San Marcos</p>
      </div>
      <div className="section">
        <h3>Technical Skills</h3>
        <p>Languages/Tools: C++, Java, JavaScript, HTML/CSS, & Python</p>
        <p>AWS, React, Terraform, Google Calendar, Docker, Git, Gitlab, and Microsoft Office. </p>
      </div>
      <div className="section">
        <h3>Experience</h3>
        <p>Oteemo, Reston, VA — Associate DevSecOps Consultant</p>
        <p>February 2022 - July 2023</p>
        <ul>
          <p>- Contributed to the Vulnerability Assessment Tracker (VAT) team for Platform 1’s IronBank, addressing frontend design, backend servers, and database issues.</p>
          <p>- Spearheaded the creation of User Stories for SkiCamp (an Air Force federal project), significantly enhancing project communication and client satisfaction.</p>
          <p>- Demonstrated proficiency in utilizing GitLab and GitHub for version control and fostering collaboration among team members.</p>
          <p>- Efficiently managed tasks and projects using Jira and Miro, ensuring timely completion and delivery of project milestones.</p>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
