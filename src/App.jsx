import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import React, { useState } from 'react';

function App() {
  const [currentSection, setCurrentSection] = useState(''); // State to track which section is active

  const handleNavbarClick = (section) => {
    setCurrentSection(section); // Update active section when navbar button is clicked
  };


return (
  // <Router>
  //   <Navbar />
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/launches" element={<LaunchesList />} />
  //     {/* <Route path="/launch/:id" element={<LaunchDetails />} /> */}
  //   </Routes>
  // </Router>

  <div>
      <h1>SpaceXplorer</h1>
      <Navbar onClick={handleNavbarClick} />
      {/* Render Home only if 'Launches' section is active */}
      {currentSection === 'Launches' && <Home />}
    </div>
);
}

export default App
