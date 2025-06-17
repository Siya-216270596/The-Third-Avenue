import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>
        Empowering Futures Through Skills, Training & Development
        </h1>
        <p>The Third Avenue is a skills development and training consultancy dedicated to transforming lives through education, empowerment, and opportunity.
          We exist to unlock potential, cultivate talent, and provide future-focused learning solutions that prepare individuals and businesses for the evolving world of work.
        </p>
        <Link
          to="contact-section"
          smooth={true}
          duration={5}
          offset={-150}
          className="home-badge"
        >
          PARTNER US
        </Link>
      </div>
    </div>
  )
}

export default Hero