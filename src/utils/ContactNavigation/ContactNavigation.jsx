import React, { useState, useEffect } from 'react'
import {
  faInstagram,
  faViber,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ContactNavigation.css'

function ContactNavigation() {
  const [showPopup, setShowPopup] = useState(false)
  const [popupContent, setPopupContent] = useState(null)
  const [copyAction, setCopyAction] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showPopup && !event.target.closest('.popup') && !event.target.closest('.icon')) {
        setShowPopup(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [showPopup])

  useEffect(() => {
    if (popupContent && copyAction) {
      navigator.clipboard.writeText(popupContent.text).then(() => {
        setCopied(true)
        
        // Force reflow to ensure the copied state is visible
        document.querySelector('.popup').offsetHeight
        
        setTimeout(() => {
          setShowPopup(false)
          setCopied(false)
          setCopyAction(false)
        }, 2000) // 2-second delay before closing
      })
    }
  }, [popupContent, copyAction])

  const handleIconClick = (type) => {
    const content =
      type === 'email'
        ? {
            text: 'prodajacumura.plv@gmail.com',
            type: 'email',
            options: [
              { label: 'Go to Contact Form', action: handleRedirectToContactForm },
              { label: 'Open Email App', action: handleOpenEmailApp },
              { label: 'Copy Email', action: () => setCopyAction(true) },
            ],
          }
        : {
            text: '+381 61 6704 501',
            type: 'phone',
            options: [{ label: 'Copy Number', action: () => setCopyAction(true) }],
          }

    setPopupContent(content)
    setShowPopup(true)
  }

  const handleRedirectToContactForm = () => {
    setShowPopup(false)
    window.location.href = `${window.location.origin}/#/contact#contact-form`
  }

  const handleOpenEmailApp = () => {
    setShowPopup(false)
    window.location.href = `mailto:${popupContent.text}`
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <>
      <div className="social-media-icons">
        <a href="https://www.instagram.com/charcoal_serbia.export?igsh=NjE5c2Y2bG4zbWt3" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className="icon" size="xl" />
        </a>
        <span onClick={() => handleIconClick('email')}>
          <FontAwesomeIcon icon={faEnvelope} className="icon" size="xl" />
        </span>
        <span onClick={() => handleIconClick('phone')}>
          <FontAwesomeIcon icon={faPhone} className="icon" size="xl" />
        </span>
        <span onClick={() => handleIconClick('phone')}>
          <FontAwesomeIcon icon={faWhatsapp} className="icon" size="xl" />
        </span>
        <span onClick={() => handleIconClick('phone')}>
          <FontAwesomeIcon icon={faViber} className="icon" size="xl" />
        </span>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className={`popup ${copied ? 'copied' : ''}`}>
            {copied ? (
              <>
                <FontAwesomeIcon icon={faCheckCircle} size="2x" />
                <p>Copied</p>
              </>
            ) : (
              <>
                <p>{popupContent?.text}</p>
                {popupContent?.options.map((option, index) => (
                  <button key={index} onClick={option.action}>
                    {option.label}
                  </button>
                ))}
              </>
            )}
            {!copied && <button onClick={handleClosePopup}>Close</button>}
          </div>
        </div>
      )}
    </>
  )
}

export default ContactNavigation
