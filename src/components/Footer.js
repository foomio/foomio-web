// Footer.js

import React from 'react';
import './styles/Footer.css'; // Import the CSS file
function Footer() {

  const emailAddress = 'foomio.business@gmail.com';
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    alert('Email address copied to clipboard! Hope to hear from you soon!');
  };

  return (
    <footer>
      <div className="container">
        
        <ul>
          <li><a href="https://www.instagram.com/foomioo/">Instagram</a></li>
          <li><a href="https://www.youtube.com/@foomioo">Youtube</a></li>
          <li><a href="https://twitter.com/foomiodotcom">Twitter</a></li>
       
          <li><a href="https://www.twitch.tv/foomio_">Twitch</a></li>
          <li><a href="#" onClick={handleCopyEmail}>Contact</a></li>
        </ul>
        <p>© 2024 Foomio All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
