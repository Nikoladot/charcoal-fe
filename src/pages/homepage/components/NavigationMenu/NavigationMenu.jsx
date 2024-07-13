import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css';

function NavigationMenu () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navigation-menu ${isOpen ? 'menu-open' : ''}`}>
      <div className={`nav-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="hamburger-bar"></div>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/" className="menu-item">Home Page</Link>
          <Link to="/gallery" className="menu-item">Gallery</Link>
          <Link to="/about" className="menu-item">About Us</Link>
          <Link to="/contact" className="menu-item">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default NavigationMenu;
