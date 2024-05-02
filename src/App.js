// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Components for each page
import Home from './components/Home';
import About from './components/About';
import Games from './components/Games';
import Game1 from './components/GamesList/Game1'; // Import the game component
import Tutorials from './components/Tutorials'; // Make sure the path is correct
import Tutorial1 from './components/TutorialsList/Tutorial1'; // Make sure the path is correct


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>foomi.io</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/games">Games</Link>
              </li>
              <li>
                <Link to="/tutorials">Tutorials</Link> {/* Add link to Tutorials */}
              </li>              
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/games" element={<Games />} />
            <Route path="/game1" element={<Game1 />} /> {/* Route for the game */}
            <Route path="/tutorials" element={<Tutorials />} /> {/* Route for the Tutorials component */}
            <Route path="/tutorial1" element={<Tutorial1 />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
