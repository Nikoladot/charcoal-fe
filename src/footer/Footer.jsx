import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="top-shadow"></div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>We are a company dedicated to providing the best services in our industry.</p>
            <p>Contact us at: info@company.com</p>
          </div>
          
          <div className="footer-section links">
            <h2>Links</h2>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section social">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          <div className="footer-section newsletter">
            <h2>Newsletter</h2>
            <form>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
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
