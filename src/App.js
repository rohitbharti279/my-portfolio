import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Rohit Bharti</h1>
          <p>+91 8804073066 | rohitbharti279@gmail.com</p>
          <p>
            GitHub:{' '}
            <a
              href="https://github.com/rohitbharti279"
              target="_blank"
              rel="noopener noreferrer"
            >
              rohitbharti279
            </a>
          </p>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Rohit Bharti</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
