import React, { useState, useEffect } from 'react';
import './Services.css';
import program_1 from '../../assets/program-1.png';
import Image9 from '../../assets/Image9.jpg';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import Stem from '../../assets/Stem.jpg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const serviceData = [
  {
    image: program_3,
    title: 'Learnerships',
    content: `🌱 Structured programs combining classroom learning and workplace experience. Engaged learners in class/workplace.`,
  },
  {
    image: program_2,
    title: 'Skills Programmes',
    content: `🔧 Practical, job-specific skills through workshops, labs, and field work.`,
  },
  {
    image: Stem,
    title: 'STEM Training',
    content: `⚙️ Science, tech, engineering & math training with robotics and coding projects.`,
  },
  {
    image: Image9,
    title: 'Apprenticeships',
    content: `🛠️ Learn under expert mentors in real-world technical environments.`,
  },
  {
    image: program_2,
    title: 'Bursaries',
    content: `🎓 Financial aid for talented learners preparing for university education.`,
  },
  {
    image: program_3,
    title: 'SMME Support',
    content: `💡 Business support for entrepreneurs including incubation and mentoring.`,
  },
  {
    image: program_1,
    title: 'Career Guidance',
    content: `🧭 Professional career counseling and pathway development services.`,
  },
  {
    image: program_2,
    title: 'Internships',
    content: `📚 Practical work experience opportunities for recent graduates.`,
  },
];

const Services = () => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showArrows, setShowArrows] = useState({ left: false, right: true });

  const handleScroll = (direction) => {
    const row = document.querySelector('.services-row');
    const cardWidth = 300; // Width of each card including margin
    const scrollAmount = cardWidth * 3; // Scroll 3 cards at a time

    row.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) handleScroll('right');
    if (touchEnd - touchStart > 50) handleScroll('left');
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