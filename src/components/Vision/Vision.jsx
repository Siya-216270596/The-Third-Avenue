import React from 'react'
import './Vision.css'
import about_img from '../../assets/about.png'

const Vision = () => {
  return (
    <div className='vision'>
      <div className='vision-mid'>
        <h1>Quick Links</h1>

        <div>
          <h2>Our Story & Vision</h2>
          <br />
          <p>
            We’re driven by a passion for helping luxury brands thrive. By creating impactful
            content and strategies that truly connect, we aim to help your business grow while
            leaving a lasting impression on your audience.
          </p>
        </div>

        <div>
          <h2>Explore Our Expertise</h2>
          <br />
          <p>
            With a wealth of experience in crafting luxury marketing campaigns and standout content,
            we specialize in turning bold ideas into strategies that deliver real results.
          </p>
        </div>

        <div>
          <h2>Get In Touch With Us</h2>
          <br />
          <p>
            Let’s work together to bring your vision to life. Reach out today to get started!
          </p>
        </div>
      </div>

      <div className='vision-right'>
        <img src={about_img} alt="Vision" />
      </div>
    </div>
  )
}

export default Vision
