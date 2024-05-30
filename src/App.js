import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Components for each page
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects'; // Updated import for projects component

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>foomio</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link> {/* Updated link for projects */}
              </li>             
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="https://www.paypal.com/donate/?hosted_button_id=LM4F8DZL5ZKFN">Tip Jar</a> {/* Add your tip jar link */}
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} /> {/* Updated route for projects */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
