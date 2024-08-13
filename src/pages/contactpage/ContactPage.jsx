import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  faFacebookF,
  faInstagram,
  faViber,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import image from '../../assets/albumone/image1.jpg'
import './ContactPage.css'
import ContactForm from './components/ContactForm/ContactForm'

function ContactPage() {
  const { t } = useTranslation()

  return (
    <div className="contact-page">
      <div className="top-section">
        <div className="contact-left">
          <img src={image} alt="Contact" className="contact-image" />
        </div>
        <div className="contact-right">
          <h1>{t('contact_us_title')}</h1>
          <p>{t('contact_us_content')}</p>
          <ul className="contact-info">
            <li>
              <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" /> WhatsApp: +1234567890
            </li>
            <li>
              <FontAwesomeIcon icon={faViber} className="contact-icon" /> Viber: +1234567890
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="contact-icon" /> Phone Call: +1234567890
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} className="contact-icon" /> Instagram: @yourinstagram
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebookF} className="contact-icon" /> Facebook: /yourfacebook
            </li>
          </ul>
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
