import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Navbar</h1>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Launches</li>
        <li>Gallery</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
}

export default Navbar
