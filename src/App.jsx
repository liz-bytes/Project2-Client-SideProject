import LaunchPage from "./pages/LaunchPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import React, { useState } from 'react';

function App() {
  const [currentSection, setCurrentSection] = useState('');

  const handleNavbarClick = (section) => {
    setCurrentSection(section); // Update active section when navbar button is clicked
  };

  return (
    <Router>
      <div className='WelcomeMessage'>
        <h1>SpaceXplorer</h1>
        <Navbar onClick={handleNavbarClick} />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Launches" element={<LaunchPage />} />
          {/* <Route path="/Gallery" element={<Gallery />} /> */}
          {/* <Route path="/launch/:id" element={<LaunchDetails />} /> */}
        </Routes>
        {/* Render Home only if 'Launches' section is active */}
        {currentSection === 'Home' && <Home />}
        {currentSection === 'About' && <About />}
        {currentSection === 'Launches' && <LaunchPage />}
      </div>
    </Router>
  );
}

export default App;
