import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  faInstagram,
  faViber,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

import './ContactNavigation.css'

function ContactNavigation() {
  const { t } = useTranslation() // Import useTranslation hook
  const [showPopup, setShowPopup] = useState(false)
  const [popupContent, setPopupContent] = useState(null)
  const [copyAction, setCopyAction] = useState(false)
  const [copied, setCopied] = useState(false)
  const navigate = useNavigate()

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
        setTimeout(() => {
          setCopied(true)

          // Force reflow to ensure the copied state is visible
          document.querySelector('.popup').offsetHeight

          setTimeout(() => {
            document.querySelector('.popup').classList.add('closing') // Start the closing transition
          }, 2000)

          setTimeout(() => {
            setShowPopup(false)
            setCopied(false)
            setCopyAction(false)
          }, 2300) // Match this with the CSS transition duration
        }, 100) // Small delay before setting copied to ensure rendering
      })
    }
  }, [popupContent, copyAction])

  const handleIconClick = (type) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    let content;

    if (type === 'email') {
      content = {
        text: 'zzlatko44@gmail.com',
        type: 'email',
        options: [
          { label: t('go_to_contact_form'), action: handleRedirectToContactForm },
          { label: t('open_email_app'), action: handleOpenEmailApp },
          { label: t('copy_email'), action: () => setCopyAction(true) },
        ],
      }
    } else if (type === 'phone') {
      content = {
        text: '+381 61 6704 501',
        type: 'phone',
        options: [
          { label: t('copy_number'), action: () => setCopyAction(true) },
          isMobile && { label: t('call_now'), action: () => window.location.href = `tel:+381616704501` },
        ].filter(Boolean), // filter(Boolean) removes any false values in case the user is not on mobile
      }
    } else if (type === 'whatsapp' || type === 'viber') {
      content = {
        text: '+381 61 6704 501',
        type: 'phone',
        options: [
          { label: t('copy_number'), action: () => setCopyAction(true) },
        ],
      }
    }

    setPopupContent(content)
    setShowPopup(true)
  }

  const handleRedirectToContactForm = () => {
    setShowPopup(false)
    navigate('/contact#contact-form')
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
        <span onClick={() => handleIconClick('whatsapp')}>
          <FontAwesomeIcon icon={faWhatsapp} className="icon" size="xl" />
        </span>
        <span onClick={() => handleIconClick('viber')}>
          <FontAwesomeIcon icon={faViber} className="icon" size="xl" />
        </span>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className={`popup ${copied ? 'copied' : ''}`}>
            {copied ? (
              <>
                <FontAwesomeIcon icon={faCheckCircle} size="2x" />
                <p>{t('copied')}</p>
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
            {!copied && <button onClick={handleClosePopup}>{t('close')}</button>}
          </div>
        </div>
      )}
    </>
  )
}

export default ContactNavigation
