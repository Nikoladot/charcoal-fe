import React from 'react'

import {
  faFacebookF,
  faInstagram,
  faViber,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ContactNavigation.css'

function ContactNavigation() {
  return (
    <div className="social-media-icons">
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="icon" size="xl" />
      </a>
      <a href="https://www.vimeo.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} className="icon" size="xl" />
      </a>
      <a
        href="+38166290993"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faPhone} className="icon" size="xl" />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="icon" size="xl" />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faViber} className="icon" size="xl" />
      </a>
    </div>
  )
}

export default ContactNavigation
