import React from 'react';
import './Footer.css';
import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';
import beeCertificate from '../../assets/docs/BEE.pdf';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-right">
        <div className="social-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTiktok /></a>
          <a href="#"><FaLinkedin /></a>
        </div> 
        <div className="bee-certificate-link">
        <a href={beeCertificate} target="_blank" rel="noopener noreferrer">
          Our BEE Certificate
        </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
