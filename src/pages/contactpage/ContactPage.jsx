import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import {
  faInstagram,
  faViber,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // <-- Import the FontAwesomeIcon component
import { useLocation } from 'react-router-dom';

import './ContactPage.css'
import ContactForm from './components/ContactForm/ContactForm'

function ContactPage() {
  const { t } = useTranslation(['meta', 'content'])
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
    setTooltip(type === 'phone' ? t('content:contact_tooltip_number_copied') : t('content:contact_tooltip_mail_copied'))
    setClickedCard(type)
    setShowHoverTooltip(false)

    setTimeout(() => {
      setTooltip(null)
      setClickedCard(null)
      setShowHoverTooltip(true)
    }, 2000)
  }

  const handleInstagramRedirect = () => {
    try {
      setClickedCard('instagram')
      window.open('https://www.instagram.com/charcoal_serbia.export/', '_blank')
      setTimeout(() => {
        setClickedCard(null)
      }, 2000)
    } catch (error) {
      console.error('Error opening Instagram:', error)
    }
  }

  return (
    <div className="contact-page">
      <Helmet>
        <title>{t('meta:meta.contact.title')}</title>
        <meta name="description" content={t('meta:meta.contact.description')} />
        <meta name="keywords" content={t('meta:meta.contact.keywords')} />

        {/* hreflang tags for SEO */}
        <link rel="alternate" hreflang="en" href="http://yourdomain.com/en/contact" />
        <link rel="alternate" hreflang="sr" href="http://yourdomain.com/sr/contact" />
        <link rel="alternate" hreflang="bg" href="http://yourdomain.com/bg/contact" />
        <link rel="alternate" hreflang="mk" href="http://yourdomain.com/mk/contact" />
        <link rel="alternate" hreflang="sq" href="http://yourdomain.com/sq/contact" />
        <link rel="alternate" hreflang="ro" href="http://yourdomain.com/ro/contact" />
        <link rel="alternate" hreflang="de" href="http://yourdomain.com/de/contact" />
      </Helmet>
      {tooltip && <div className="tooltip-contact" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>{tooltip}</div>}
      <div className="hero-section">
        <div className="hero-content-wrapper">
          <h1 className="contact-page-title">{t('content:contact_us_title')}</h1>
          <p className="contact-page-description">{t('content:contact_us_content')}</p>
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
            {showHoverTooltip && <div className="tooltip-hover">{t('content:contact_hover_copy_number')}</div>}
          </div>
          <div
              className={`contact-card ${clickedCard === 'email' ? 'submitted' : ''}`}
              onClick={(event) => handleCopy('zzlatko44@gmail.com', 'email', event)}
            >
              <FontAwesomeIcon icon={clickedCard === 'email' ? faCheckCircle : faEnvelope} className="contact-card-icon" />
              <h2>Email</h2>
              <p className="email-text" title="zzlatko44@gmail.com">zzlatko44@gmail.com</p>
              {showHoverTooltip && <div className="tooltip-hover">{t('content:contact_hover_copy_mail')}</div>}
            </div>
                      <div
            className={`contact-card ${clickedCard === 'instagram' ? 'submitted' : ''}`}
            onClick={handleInstagramRedirect}
          >
            <FontAwesomeIcon icon={clickedCard === 'instagram' ? faCheckCircle : faInstagram} className="contact-card-icon" />
            <h2>Instagram</h2>
            {showHoverTooltip && <div className="tooltip-hover">{t('content:contact_hover_click_instagram')}</div>}
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
