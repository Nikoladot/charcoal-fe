import React from 'react'
import {
  faInstagram,
  faViber,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

function Footer({ openPrivacyModal }) {
  const { t } = useTranslation()

  const handlePrivacyClick = (e) => {
    e.preventDefault()
    openPrivacyModal()
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
            <div className="social-items">
              <div className="social-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>prodajacumura.plv@gmail.com</span>
              </div>
              <div className="social-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>+381 61 6704 501</span>
              </div>
              <div className="social-item">
                <FontAwesomeIcon icon={faInstagram} />
                <a href="https://www.instagram.com/charcoal_serbia.export/" target="_blank" rel="noopener noreferrer">
                  click here to view instgaram
                </a>
              </div>
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
