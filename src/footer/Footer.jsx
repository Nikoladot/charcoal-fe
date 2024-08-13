import React from 'react'
import {
  faFacebookF,
  faInstagram,
  faViber,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

function Footer({ openPrivacyModal }) {
  const { t } = useTranslation()

  const handlePrivacyClick = (e) => {
    e.preventDefault() // Prevents the default link behavior
    openPrivacyModal() // Opens the privacy policy modal
  }

  return (
    <>
      <div className="top-shadow"></div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <p>{t('follow_us_content')}</p>
          </div>

          <div className="footer-section social">
            <h2>{t('follow_us_title')}</h2>
            <div className="social-icons">
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="viber://contact?number=+123456789">
                <FontAwesomeIcon icon={faViber} />
              </a>
              <a href="https://wa.me/123456789">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="mailto:info@company.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="tel:+123456789">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </div>
          </div>

          <div className="footer-section links">
            <h2>{t('links')}</h2>
            <ul>
              <li>
                <a href="/about">{t('about')}</a>
              </li>
              <li>
                <a href="/services">{t('services')}</a>
              </li>
              <li>
                <a href="/contact">{t('contact')}</a>
              </li>
              <li>
                <a href="#!" onClick={handlePrivacyClick}>
                  {t('privacy_policy')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; Nikola Blagunovski. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
