import React from 'react';
import {
  faFacebookF,
  faInstagram,
  faViber,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="top-shadow"></div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <p>We provide top-notch services with a dedicated team, ensuring high quality and reliability in every project. Our commitment is to exceed your expectations. Trust us to deliver innovative solutions. Your satisfaction is our priority.</p>
          </div>

          <div className="footer-section social">
            <h2>Follow Us</h2>
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
            <h2>Links</h2>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
