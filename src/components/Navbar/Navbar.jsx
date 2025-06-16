import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/TTA-logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const navItems = [
    { to: 'hero', text: 'Home' },
    { to: 'about-page', text: 'About Us' },
    { to: 'VisionAndMission-page', text: 'Mission And Vision' },
    { to: 'vision-container', text: 'Services' },
    { to: 'services-section', text: 'Explore Our Programmes' },
    { to: 'contact-section', text: 'Get in Touch' }
  ];

  return (
    <nav className='container'>
      <img src={logo} alt="Website logo" className='logo'/>
      
      {/* Desktop Navigation */}
      <ul className="desktop-nav">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.to === 'hero' || item.to === 'contact-section' ? 0 : -150}
              duration={0}
              className={activeLink === item.to ? 'active-link' : ''}
              onSetActive={() => handleSetActive(item.to)}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      
      {/* Mobile Navigation */}
      <ul className={`mobile-nav ${mobileMenu ? '' : 'hide-mobile-menu'}`}>
        {navItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.to === 'hero' || item.to === 'contact-section' ? 0 : -150}
              duration={0}
              className={activeLink === item.to ? 'active-link' : ''}
              onSetActive={() => handleSetActive(item.to)}
              onClick={toggleMenu}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
}

export default Navbar;