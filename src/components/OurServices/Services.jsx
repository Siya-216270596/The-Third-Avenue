import React, { useState, useEffect } from 'react';
import './Services.css';
import burarsy from '../../assets/burarsy.jpg';
import apprrentship from '../../assets/apprrentship.jpg';
import skills_program from '../../assets/skills_program.jpg';
import learnship from '../../assets/learnship.jpg';
import Stem from '../../assets/Stem.jpg'
import Smme_support from '../../assets/Smme_support.jpg';
import career from '../../assets/career.png';
import internship from '../../assets/internship.jpg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const serviceData = [
  {
    image: learnship,
    title: 'Learnerships',
    content: `Structured programs combining classroom learning and workplace experience. Engaged learners in workplace.`,
  },
  {
    image: skills_program,
    title: 'Skills Programmes',
    content: `Practical, job-specific skills through workshops, labs, and field work.`,
  },
  {
    image: Stem,
    title: 'STEM Training',
    content: `Science, tech, engineering & math training with robotics and coding projects.`,
  },
  {
    image: apprrentship,
    title: 'Apprenticeships',
    content: `Learn under expert mentors in real-world technical environments.`,
  },
  {
    image: burarsy,
    title: 'Bursaries',
    content: `Financial aid for talented learners preparing for university education.`,
  },
  {
    image: Smme_support,
    title: 'SMME Support',
    content: `Business support for entrepreneurs including incubation and mentoring.`,
  },
  {
    image: career,
    title: 'Career Guidance',
    content: `Professional career counseling and pathway development services.`,
  },
  {
    image: internship,
    title: 'Internships',
    content: `Practical work experience opportunities for recent graduates.`,
  },
];

const Services = () => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showArrows, setShowArrows] = useState({ left: false, right: true });

  const handleScroll = (direction) => {
    const row = document.querySelector('.services-row');
    const card = row.querySelector('.service-card');
    const cardWidth = card.offsetWidth + 24; // 24 = typical gap between cards
    const scrollAmount = cardWidth;
  
    row.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) < 30) return; // Ignore tiny movements
  
    if (diff > 0) handleScroll('right'); // swiped left
    if (diff < 0) handleScroll('left');  // swiped right
  };

  useEffect(() => {
    const row = document.querySelector('.services-row');
    const updateArrows = () => {
      const { scrollLeft, scrollWidth, clientWidth } = row;
      setShowArrows({
        left: scrollLeft > 50,
        right: scrollLeft + clientWidth < scrollWidth - 50
      });
    };

    row.addEventListener('scroll', updateArrows);
    return () => row.removeEventListener('scroll', updateArrows);
  }, []);

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="section-title">OUR OFFERINGS</h2>
        <p className="section-subtitle">
          Innovative learning solutions tailored for individuals and businesses
        </p>

        <div className="carousel-wrapper">
          {showArrows.left && (
            <button 
              className="carousel-arrow left"
              onClick={() => handleScroll('left')}
              aria-label="Previous items"
            >
              <FiChevronLeft size={36} />
            </button>
          )}

          <div 
            className="services-row"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {serviceData.map((service, index) => (
              <article className="service-card" key={index}>
                <div className="card-image">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    loading="lazy"
                  />
                  <div className="image-overlay" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.content}</p>
                </div>
              </article>
            ))}
          </div>

          {showArrows.right && (
            <button 
              className="carousel-arrow right"
              onClick={() => handleScroll('right')}
              aria-label="Next items"
            >
              <FiChevronRight size={36} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;