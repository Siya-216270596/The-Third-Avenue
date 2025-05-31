import React from 'react';
import './Footer.css';
import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-right">
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
