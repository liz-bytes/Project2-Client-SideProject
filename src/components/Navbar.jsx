import React from 'react';
import './Navbar.css';

const Navbar = ({ onClick }) => {
  return (
    <nav className="navbar">
      <h4>Navbar</h4>
      <ul>
        <li><button onClick={() => onClick('Home')}>Home</button></li>
        <li><button onClick={() => onClick('About')}>About</button></li>
        <li><button onClick={() => onClick('Launches')}>Launches</button></li>
        <li><button onClick={() => onClick('Gallery')}>Gallery</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;