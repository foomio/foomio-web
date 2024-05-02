// Home.js
import React from 'react';
import logo from './images/logo.png'; // Adjust the path to correctly point to the logo.png file
import './styles/Home.css'; // Import the CSS file from the styles folder

function Home() {
  return (
    <div>
      <h2></h2>
     <img src={logo} alt="Logo" className="logo"/>
      {/* Add other content of your Home page here */}
    </div>
  );
}

export default Home;
