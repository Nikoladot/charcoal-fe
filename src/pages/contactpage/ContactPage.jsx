import React from 'react'

import image from '../../assets/albumone/image1.jpg'
import './ContactPage.css'
import ContactForm from './components/ContactForm/ContactForm'

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-left">
        <img src={image} alt="Contact" className="contact-image" />
      </div>
      <div className="contact-right">
        <div className="right-content">
          <h1>Contact Us</h1>
          <p>Your short description content goes here.</p>
          <ul className="contact-info">
            <li>WhatsApp: +1234567890</li>
            <li>Viber: +1234567890</li>
            <li>Phone Call: +1234567890</li>
            <li>Instagram: @yourinstagram</li>
            <li>Facebook: /yourfacebook</li>
          </ul>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
