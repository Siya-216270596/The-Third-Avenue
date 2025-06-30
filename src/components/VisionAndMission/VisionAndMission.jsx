import React from 'react';
import {
  FiHeart,
  FiUsers,
  FiSmile,
  FiShield,
  FiCheckCircle,
  FiAward,
  FiCpu,
  FiBookOpen,
  FiLink,
  FiClipboard,
  FiTarget,
  FiEye,
  FiBook,
  FiZap
} from 'react-icons/fi';
import './VisionAndMission.css';
import about_img from '../../assets/founder.jpg'
import intergrity_icon from '../../assets/Intergrity.png'
import light_icon from '../../assets/light.png'
import learning_icon from '../../assets/learning.png'
import money_icon from '../../assets/money.png'
import guide_icon from '../../assets/guide.png'
import accountability_icon from '../../assets/Accountability.png'
import care_icon from '../../assets/Care.png'
import quality_icon from '../../assets/Quality.png'
import respect_icon from '../../assets/Respect.png'
import signature_icon from '../../assets/Signature.png'
import compassion_icon from '../../assets/Compassion.png'



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
      <section className="commitment-section">
        <div className="commitment-content">
          <h2>Our Core Values</h2>
          <p>The principles that guide our work and define our culture</p>
        </div>
        
        <div className="values-grid">
            <div className="impact-stat">
            <img src={compassion_icon} alt="Knowledge Icon" className="img-icon" />
              <div>
                <h3>Compassion</h3>
                <p>Showing genuine empathy and concern for others’ well-being and needs.</p>
              </div>
          </div>
            <div className="impact-stat">
              <img src={respect_icon} alt="Knowledge Icon" className="img-icon" />
              <div>
                <h3>Respect</h3>
                <p>Valuing others' perspectives, rights, and dignity in every interaction.</p>
              </div>
            </div>
            <div className="impact-stat">
              <img src={care_icon} alt="Knowledge Icon" className="img-icon" />
              <div>
                <h3>Care</h3>
                <p>Acting with thoughtfulness, kindness, and attention to individual needs.</p>
              </div>
          </div>
            <div className="impact-stat">
              <img src={intergrity_icon} alt="Knowledge Icon" className="img-icon" />
              <div>
                <h3> Integrity</h3>
                <p>Doing the right thing, even when no one is watching.</p>
              </div>
          </div>
            <div className="impact-stat">
              <img src={quality_icon} alt="Knowledge Icon" className="img-icon" />
              <div>
                <h3>Quality</h3>
                <p>Delivering consistently high standards in everything we create or do.</p>
              </div>
          </div>
            <div className="impact-stat">
              <img src={learning_icon} alt="Knowledge Icon" className="img-icon" />
              <div>
                <h3>Excellence</h3>
                <p>Striving to exceed expectations through continuous improvement and dedication.</p>
              </div>
          </div>
            <div className="impact-stat">
             <img src={light_icon} alt="Knowledge Icon" className="img-icon" />
              <div>
                <h3>Competence</h3>
                <p>Demonstrating skill, efficiency, and professionalism in every task undertaken.</p>
              </div>
          </div>
          <div className="impact-stat">
            <img src={guide_icon} alt="Knowledge Icon" className="img-icon" />
            <div>
              <h3>Knowledge</h3>
              <p>Applying expertise and continuous learning to inform decisions and actions.</p>
            </div>
          </div>
            <div className="impact-stat">
              <img src={money_icon} alt="Knowledge Icon" className="img-icon" />
              <div>
                <h3>Partnership</h3>
                <p>Collaborating openly and respectfully to achieve shared goals and success.</p>
              </div>
          </div>
            <div className="impact-stat">
              <img src={accountability_icon} alt="Knowledge Icon" className="img-icon" />
            <div>
              <h3>Accountability and Ethics</h3>
                <p>Taking responsibility while upholding strong moral and ethical principles.</p>
              </div>
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
              <p>The Third Avenue was established by visionary leader  <b>Sandisiwe Mabongo </b>with a clear mission:
                to bridge the gap between education and employment in South Africa.
                Inspired by a passion for youth development and transformation, the organization set out to deliver high-impact skills training and career-readiness programmes tailored to underserved communities. </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2018</div>
            <div className="timeline-content">
              <h3>National Expansion</h3>
              <p>By 2018, The Third Avenue had successfully expanded its operations across  <b>three provinces</b>, demonstrating the growing demand for quality, accessible skills development. This growth marked a significant milestone in extending the organization’s impact and reaching a wider network of learners, schools, and community-based partners across the country.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2023</div>
            <div className="timeline-content">
              <h3>CHIETA Partnership</h3>
              <p>In 2023, The Third Avenue partnered with <b>CHIETA (Chemical Industries Education & Training Authority)</b>—a pivotal milestone that reinforced our commitment to <b>sector-specific skills development</b>. This partnership empowered us to facilitate specialized training initiatives within the chemical industry, aligning education with evolving industry needs.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2025</div>
            <div className="timeline-content">
              <h3>Academic Collaborations with Universities of Technology</h3>
              <p>In 2025, The Third Avenue forged meaningful partnerships with leading institutions:<b>Cape Peninsula University of Technology (CPUT), Durban University of Technology (DUT)</b>, and <b>Tshwane University of Technology (TUT)</b>. These collaborations expanded our academic footprint and opened <b>new pathways for research, training, and skills development</b>—connecting students with real-world opportunities and industry readiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="founder-content">
          <div className="section-header-founder">
            <h2>Meet Our Founder</h2>
            <p>The Third Avenue was born from more than just an idea — it was sparked by a powerful conviction: that meaningful transformation begins with access, compassion, and vision.</p>
          </div>
          
          <blockquote className="founder-quote">
            The Third Avenue is not just a platform — it’s a promise. A promise that no dream is too small, and no voice is too quiet to spark change
          </blockquote>
          
          <div className="founder-details">
            <div className="founder-info">
              <h3 className="founder-name">Sandisiwe Mabongo</h3>
              <p className="founder-credentials">
              15+ Years Experience | NQF Level 5 Facilitator | Skills Development Expert
              </p>
              <p className="founder-story">
              Founder of <i>The Third Avenue</i> (est. 2016), Sandisiwe Mabongo is a passionate advocate for transformative education and inclusive development. With over 15 years of experience in the skills development sector, she has dedicated her career to <b>bridging the gap between education and employment</b>. Her work focuses on equipping individuals—particularly youth and women—with practical, accredited skills that empower them to thrive in a rapidly evolving workforce.
              </p>
              <img src={signature_icon} alt="signature Icon" className="img-signature-icon" />

            </div>
            
            <div className="founder-image-container">
              <div className="founder-photo">
                <div className='founder-image'>
                  <img src={about_img} alt="founder" />
                </div>
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