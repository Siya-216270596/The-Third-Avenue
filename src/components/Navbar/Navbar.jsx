import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar= () => {
  return (
    <nav>
      <img src={logo} alt="Website logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar