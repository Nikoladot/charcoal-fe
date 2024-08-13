import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

import './NavigationMenu.css';

function NavigationMenu() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const languages = [
    { code: 'en', name: 'English', flag: 'GB' },
    { code: 'sr', name: 'Srpski', flag: 'RS' },
    { code: 'bg', name: 'Български', flag: 'BG' },
    { code: 'mk', name: 'Македонски', flag: 'MK' },
    { code: 'sq', name: 'Albanian', flag: 'AL' },
    { code: 'ro', name: 'Română', flag: 'RO' },
    { code: 'de', name: 'Deutsch', flag: 'DE' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !dropdownRef.current?.contains(event.target)
    ) {
      setIsOpen(false);
      setIsDropdownOpen(false);
    } else if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Debugging logs
  console.log('Current language:', i18n.language);
  console.log('Selected language object:', languages.find((l) => l.code === i18n.language.split('-')[0]));

  return (
    <div ref={menuRef} className={`navigation-menu ${isOpen ? 'menu-open' : ''}`}>
      <div className="language-selector" ref={dropdownRef}>
        <div className="language-label" onClick={toggleDropdown}>
          <span>{languages.find((l) => l.code === i18n.language.split('-')[0])?.name || 'Language'}</span>
          {languages.find((l) => l.code === i18n.language.split('-')[0]) && (
            <Flag
              code={languages.find((l) => l.code === i18n.language.split('-')[0])?.flag}
              alt="Flag"
              className="flag-icon"
            />
          )}
        </div>
        {isDropdownOpen && (
          <div className="language-dropdown">
            <div className="dropdown-scroll">
              {languages.map((lng) => (
                <div
                  key={lng.code}
                  className="language-option"
                  onClick={() => changeLanguage(lng.code)}
                >
                  <span>{lng.name}</span>
                  <Flag code={lng.flag} alt="Flag" className="flag-icon" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={`nav-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="hamburger-bar"></div>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/" className="menu-item" onClick={() => setIsOpen(false)}>
            {i18n.t('home')}
          </Link>
          <Link to="/gallery" className="menu-item" onClick={() => setIsOpen(false)}>
            {i18n.t('gallery')}
          </Link>
          <Link to="/about" className="menu-item" onClick={() => setIsOpen(false)}>
            {i18n.t('about')}
          </Link>
          <Link to="/contact" className="menu-item" onClick={() => setIsOpen(false)}>
            {i18n.t('contact')}
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavigationMenu;
