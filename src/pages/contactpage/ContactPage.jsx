import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import './ContactPage.css';
import image from '../../assets/albumone/Charcoal-2.png';
import ContactNavigation from '../homepage/components/ContactNavigation/ContactNavigation';
import NavigationMenu from '../homepage/components/NavigationMenu/NavigationMenu';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <ContactNavigation />
      <NavigationMenu />
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
  );
};

export default ContactPage;
