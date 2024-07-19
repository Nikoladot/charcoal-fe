import React, { useEffect, useRef, useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import './NavigationMenu.css'

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <div
      ref={menuRef}
      className={`navigation-menu ${isOpen ? 'menu-open' : ''}`}
    >
      <div
        className={`nav-icon ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className="hamburger-bar"></div>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/" className="menu-item" onClick={() => setIsOpen(false)}>
            Home Page
          </Link>
          <Link
            to="/gallery"
            className="menu-item"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="menu-item"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="menu-item"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  )
}

export default NavigationMenu
