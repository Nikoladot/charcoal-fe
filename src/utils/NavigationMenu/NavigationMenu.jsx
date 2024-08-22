import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Flag from 'react-world-flags'

import './NavigationMenu.css'

function NavigationMenu() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const menuRef = useRef(null)
  const dropdownRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const languages = [
    { code: 'en', name: 'English', flag: 'GB' },
    { code: 'sr', name: 'Srpski', flag: 'RS' },
    { code: 'bg', name: 'Български', flag: 'BG' },
    { code: 'mk', name: 'Македонски', flag: 'MK' },
    { code: 'sq', name: 'Albanian', flag: 'AL' },
    { code: 'ro', name: 'Română', flag: 'RO' },
    { code: 'de', name: 'Deutsch', flag: 'DE' }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !dropdownRef.current?.contains(event.target)
    ) {
      setIsOpen(false)
      setIsDropdownOpen(false)
    } else if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false)
    }
  }

  const changeLanguage = (lng) => {
    const currentPath = location.pathname
    const newPath = `/${lng}${currentPath.replace(/\/[a-z]{2}/, '')}`
    i18n.changeLanguage(lng)
    navigate(newPath)
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const currentLanguageCode = i18n.language ? i18n.language.split('-')[0] : 'en'

  return (
    <div ref={menuRef} className={`navigation-menu ${isOpen ? 'menu-open' : ''}`}>
      <div className="language-selector" ref={dropdownRef} onClick={toggleDropdown}>
        <div className="language-label">
          <span>{languages.find((l) => l.code === currentLanguageCode)?.name || 'Language'}</span>
          {languages.find((l) => l.code === currentLanguageCode) && (
            <Flag
              code={languages.find((l) => l.code === currentLanguageCode)?.flag}
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
          <Link to={`/${currentLanguageCode}/homepage`} className="menu-item" onClick={() => setIsOpen(false)}>
            {t('home')}
          </Link>
          <Link to={`/${currentLanguageCode}/gallery`} className="menu-item" onClick={() => setIsOpen(false)}>
            {t('gallery')}
          </Link>
          <Link to={`/${currentLanguageCode}/about`} className="menu-item" onClick={() => setIsOpen(false)}>
            {t('about')}
          </Link>
          <Link to={`/${currentLanguageCode}/contact`} className="menu-item" onClick={() => setIsOpen(false)}>
            {t('contact')}
          </Link>
        </div>
      )}
    </div>
  )
}

export default NavigationMenu
