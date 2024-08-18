import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  faInstagram,
  faViber,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom';

import './ContactPage.css'
import ContactForm from './components/ContactForm/ContactForm'

function ContactPage() {
  const { t } = useTranslation()
  const [tooltip, setTooltip] = useState(null)
  const [tooltipPosition, setTooltipPosition] = useState({})
  const [clickedCard, setClickedCard] = useState(null)
  const [showHoverTooltip, setShowHoverTooltip] = useState(true)
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleCopy = (text, type, event) => {
    navigator.clipboard.writeText(text)
    const rect = event.currentTarget.getBoundingClientRect()
    setTooltipPosition({ top: rect.bottom + window.scrollY + 5, left: rect.left + window.scrollX })
    setTooltip(type === 'phone' ? 'Number copied!' : 'Email copied!')
    setClickedCard(type) // Store the clicked card type
    setShowHoverTooltip(false) // Hide the hover tooltip


    setTimeout(() => {
      setTooltip(null)
      setClickedCard(null) // Reset the clicked card after 2 seconds
      setShowHoverTooltip(true) // Show the hover tooltip again after reset
    }, 2000)
  }

  const handleInstagramRedirect = () => {
    try {
      setClickedCard('instagram') // Mark Instagram as clicked
      window.open('https://www.instagram.com/charcoal_serbia.export/', '_blank')
      setTimeout(() => {
        setClickedCard(null) // Reset the clicked state after 2 seconds
      }, 2000)
    } catch (error) {
      console.error('Error opening Instagram:', error)
    }
  }
  return (
    <div className="contact-page">
      {tooltip && <div className="tooltip" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>{tooltip}</div>}
      <div className="hero-section">
        <div className="hero-content-wrapper">
          <h1 className="contact-page-title">{t('contact_us_title')}</h1>
          <p className="contact-page-description">{t('contact_us_content')}</p>
        </div>
      </div>
      <div className="contact-grid-section">
        <div className="contact-grid">
          <div
            className={`contact-card ${clickedCard === 'phone' ? 'submitted' : ''}`}
            onClick={(event) => handleCopy('+381 61 6704 501', 'phone', event)}
          >
            <div className="contact-card-icons">
              {clickedCard === 'phone' ? (
                <FontAwesomeIcon icon={faCheckCircle} className="contact-card-icon" />
              ) : (
                <>
                  <FontAwesomeIcon icon={faWhatsapp} className="contact-card-icon" />
                  <FontAwesomeIcon icon={faViber} className="contact-card-icon viber-icon" />
                  <FontAwesomeIcon icon={faPhone} className="contact-card-icon phone-icon" />
                </>
              )}
            </div>
            <h2>Contact</h2>
            <p>+381 61 6704 501</p>
            {showHoverTooltip && <div className="tooltip-hover">Click here to copy +381 61 6704 501</div>}
          </div>
          <div
            className={`contact-card ${clickedCard === 'email' ? 'submitted' : ''}`}
            onClick={(event) => handleCopy('prodajacumura.plv@gmail.com', 'email', event)}
          >
            <FontAwesomeIcon icon={clickedCard === 'email' ? faCheckCircle : faEnvelope} className="contact-card-icon" />
            <h2>Email</h2>
            <p>prodajacumura.plv@gmail.com</p>
            {showHoverTooltip && <div className="tooltip-hover">Click here to copy prodajacumura.plv@gmail.com</div>}
          </div>
          <div
            className={`contact-card ${clickedCard === 'instagram' ? 'submitted' : ''}`}
            onClick={handleInstagramRedirect}
          >
            <FontAwesomeIcon icon={clickedCard === 'instagram' ? faCheckCircle : faInstagram} className="contact-card-icon" />
            <h2>Instagram</h2>
            {showHoverTooltip && <div className="tooltip-hover">Click here to visit our Instagram profile</div>}
          </div>
        </div>
      </div>
      <div className='top-to-bottom-fade'></div>
      <div className="contact-form-section">
        <ContactForm />
      </div>
      <div className='bottom-to-top-fade'></div>
    </div>
  )
}

export default ContactPage
