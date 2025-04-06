import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
        <img src={about_img} alt="" className='about-img' />
        </div>
        <div className='about-mid'>
        <h1>About Us</h1>
        <br />
        <h2>Get to know the visionaries behind the brand</h2>
        <br />
        <p>SocialSync is a luxury social media marketing agency based in Marbella, working with clients worldwide. Founded by Jamie & Yeganeh.</p>
        <button className='btn'>Learn more.</button>
        </div>
        <div className='about-right'>
        <img src={about_img} alt="" className='about-img' />
        </div>
    </div>
  )
}

export default About