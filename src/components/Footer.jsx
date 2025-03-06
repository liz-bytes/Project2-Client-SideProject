import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {currentYear} Team 4: Liz, Omar, Camilo & Harman. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;