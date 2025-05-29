import React from 'react';
import { FiTarget, FiEye, FiUsers, FiAward, FiZap, FiArrowRight, FiHeart, FiUser, FiShield, FiStar, FiLock, FiTool, FiBook } from 'react-icons/fi';
import './VisionAndMission.css';

const VisionAndMission = () => {
  return (
    <div className="VisionAndMission-page">
      {/* Hero Section */}
      {/* Mission & Vision */}
      <section className="mv-section">
        <div className="mv-card mission-card">
          <div className="card-header">
            <div className="icon-container">
              <FiTarget className="mv-icon"/>
            </div>
            <h2>Our Mission</h2>
          </div>
          <p>To provide accessible, high-quality training programmes that empower individuals and communities to reach their full potential.</p>
        </div>

        <div className="mv-card vision-card">
          <div className="card-header">
            <div className="icon-container">
              <FiEye className="mv-icon"/>
            </div>
            <h2>Our Vision</h2>
          </div>
          <p>To be a catalyst for transformation through education, enabling a skilled and competitive South African workforce.</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-header">
          <h2>Our Core Values</h2>
          <p>The principles that guide our work and define our culture</p>
        </div>
        
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon-container">
              <FiZap className="value-icon"/>
            </div>
            <h3>Empowerment</h3>
            <p>Equipping learners with practical skills for sustainable employment</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon-container">
              <FiUser className="value-icon"/>
            </div>
            <h3>Inclusivity</h3>
            <p>Creating opportunities for all, regardless of background</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon-container">
              <FiStar className="value-icon"/>
            </div>
            <h3>Excellence</h3>
            <p>Striving for the highest quality in all our programs</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon-container">
              <FiShield className="value-icon"/>
            </div>
            <h3>Accountability</h3>
            <p>Taking responsibility for our actions and outcomes</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon-container">
              <FiTool className="value-icon"/>
            </div>
            <h3>Innovation</h3>
            <p>Developing creative solutions to education challenges</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="section-header">
          <h2>Our Journey</h2>
          <p>Milestones in our story of transformation</p>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2016</div>
            <div className="timeline-content">
              <h3>Foundation</h3>
              <p>The Third Avenue was founded by Sandisiwe Mabongo</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2018</div>
            <div className="timeline-content">
              <h3>National Expansion</h3>
              <p>Expanded operations to three provinces</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2020</div>
            <div className="timeline-content">
              <h3>Digital Transformation</h3>
              <p>Launched online learning platform</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2023</div>
            <div className="timeline-content">
              <h3>Education Innovator Award</h3>
              <p>Recognized for outstanding contribution to skills development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="founder-content">
          <div className="section-header">
            <h2>Meet Our Founder</h2>
            <p>The visionary behind The Third Avenue</p>
          </div>
          
          <blockquote className="founder-quote">
            "We are the difference that shapes future leaders."
          </blockquote>
          
          <div className="founder-details">
            <div className="founder-info">
              <h3 className="founder-name">Sandisiwe Mabongo</h3>
              <p className="founder-credentials">
                NQF Level 5 Facilitator | Skills Development Expert
              </p>
              <p className="founder-story">
                Founded in 2016, The Third Avenue was created out of a deep passion for transforming lives through education. Our mission is to close the divide between education and employment by equipping individuals with the practical skills and qualifications needed to thrive in the workforce.
              </p>
            </div>
            
            <div className="founder-image-container">
              <div className="founder-photo"></div>
              <div className="founder-badge">
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section">
        <div className="commitment-content">
          <h2>Our Commitment</h2>
          <p>
            We are proud to be part of a nationwide transformation, supporting youth with specialized programs that bridge the skills gap in key industries. We believe in lifelong learning, and our work extends beyond training — it’s about creating pathways to success, personal growth, and economic empowerment.
          </p>
          
          <div className="impact-stats">
            <div className="impact-stat">
              <FiUsers className="impact-icon"/>
              <div>
                <h3>5000+</h3>
                <p>Careers Transformed</p>
              </div>
            </div>
            
            <div className="impact-stat">
              <FiBook className="impact-icon"/>
              <div>
                <h3>120+</h3>
                <p>Programs Offered</p>
              </div>
            </div>
            
            <div className="impact-stat">
              <FiZap className="impact-icon"/>
              <div>
                <h3>9</h3>
                <p>Provinces Reached</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionAndMission;