import React from 'react'
import {
  faInstagram,
  faViber,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from 'react-router-dom'
import './Footer.css'

function Footer({ openPrivacyModal }) {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  // Get the current language code
  const currentLanguageCode = i18n.language ? i18n.language.split('-')[0] : 'en'

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
            <h2>{t('contact_us_title')}</h2>
            <div className="social-items">
              <div className="social-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>zzlatko44@gmail.com</span>
              </div>
              <div className="social-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>+381 61 6704 501</span>
              </div>
              <div className="social-item">
                <FontAwesomeIcon icon={faInstagram} />
                <a href="https://www.instagram.com/charcoal_serbia.export/" target="_blank" rel="noopener noreferrer">
                    charcoal_serbia
                  <span className="tooltip">{t('click_here_to_view_instagram')}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section links">
            <h2>{t('links')}</h2>
            <ul>
              <li>
                <Link to={`/${currentLanguageCode}/about`}>{t('about')}</Link>
              </li>
              <li>
                <Link to={`/${currentLanguageCode}/Gallery`}>{t('gallery')}</Link>
              </li>
              <li>
                <Link to={`/${currentLanguageCode}/contact`}>{t('contact')}</Link>
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
