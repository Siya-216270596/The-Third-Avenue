import React from 'react';
import './Footer.css';
import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h4>NAVIGATE</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/hire">Hire Us</a></li>
        </ul>
      </div>

      <div className="footer-right">
        <h4>CONTACT</h4>
        <p>We are based in Marbella, Spain but work with clients around the globe.</p>
        <p>Email: <a href="mailto:info@socialsync-flow.com">info@socialsync-flow.com</a></p>
        <div className="social-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTiktok /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
