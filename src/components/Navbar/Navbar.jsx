import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/TTA-logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenu) return;

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenu]);

  const navItems = [
    { to: 'hero', text: 'Home' },
    { to: 'about-page', text: 'About Us' },
    { to: 'VisionAndMission-page', text: 'Mission And Vision' },
    { to: 'vision-container', text: 'Services' },
    { to: 'services-section', text: 'Explore Our Programmes' },
    { to: 'contact-section', text: 'Get in Touch' },
  ];

  return (
    <nav className="container" ref={navRef}>
      <img src={logo} alt="Website logo" className="logo" />

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
      <ul className={`mobile-nav ${mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}`}>
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

      {/* Hamburger icon */}
      <img
        src={menu_icon}
        alt="menu icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;