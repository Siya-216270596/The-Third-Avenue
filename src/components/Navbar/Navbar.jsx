import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar= () => {
  const [mobileMenu, setMobileMenu]= useState(false);
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className='container'>
      <img src={logo} alt="Website logo" className='logo'/>
      <ul className={`mobile-nav ${mobileMenu ? '' : 'hide-mobile-menu'}`}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about-page' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='VisionAndMission-page' smooth={true} offset={-150} duration={500}>Vision And Mission</Link></li>
        <li><Link to='vision'smooth={true} offset={-150}duration={500}>Services</Link></li>
        <li><Link to='services-section' smooth={true} offset={-150} duration={500}>Explore Our Programmes</Link></li>
        <li><Link to='contact-section'smooth={true} offset={0}duration={500}>Get in Touch</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
}
export default Navbar