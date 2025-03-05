import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar () {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <h4>Navbar</h4>
      <ul>
        <li><button onClick={() => handleNavigation('/Home')}>Home</button></li>
        <li><button onClick={() => handleNavigation('/About')}>About</button></li>
        <li><button onClick={() => handleNavigation('/Launches')}>Launches</button></li>
        <li><button onClick={() => handleNavigation('/Gallery')}>Gallery</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;