import React from 'react';
import { FiTarget, FiEye, FiUsers, FiAward, FiZap, FiArrowRight, FiHeart, FiUser, FiShield, FiStar, FiLock, FiTool, FiBook } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
        <div className="contact-header">
        <h2 className="section-title">ABOUT US</h2>
          <p>We would love to hear from you.</p>
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
        <div className="hero-image-container">
          <div className="team-photo"></div>
          <div className="image-overlay"></div>
        </div>
      </section>
    </div>
  );
};

export default About;