import React from 'react';
import {
  FiUsers,
  FiAward} from 'react-icons/fi';import './About.css';
import aboutImage from '../../assets/Lauren-Quote-Student.jpg'; 

const About = () => {
  return (
    <div className="about-page">
        <div className="about-header">
        <h2 className="section-title">ABOUT US</h2>
          <p>The Third Avenue drives national transformation by upskilling youth from under-resourced communities through accredited training, bridging the gap between education and employment</p>
        </div>
      <section className="hero-section"></section>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Who We Are</span>
          </h1>
          <p className="hero-description">
            At The Third Avenue, we are passionate about delivering impactful skills development initiatives tailored to meet the needs of South Africa’s diverse workforce. Our approach combines strategic insight, practical training, and measurable outcomes to foster growth and social impact.
          </p>
          <div className="hero-stats">
            <div className="stat-card">
              <FiUsers className="stat-icon"/>
              <div>
                <h3>2500+</h3>
                <p>Learners Empowered</p>
              </div>
            </div>
            <div className="stat-card">
              <FiAward className="stat-icon"/>
              <div>
                <h3>94%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
            <div className="qoute-image-container">
              <div className="founder-photo">
                <div className='founder-image'>
                  <img src={aboutImage} alt="founder" />
                </div>
              </div>
            </div>
      </section>
    </div>
  );
};

export default About;