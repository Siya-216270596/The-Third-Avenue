import React from 'react'
import './Vision.css'
import about_img from '../../assets/Image 10.jpg'

const Vision = () => {
  const services = [
    {
      title: "Recruitment Services",
      description: "Connecting businesses with the right talent by sourcing and placing learners into training and job opportunities."
    },
    {
      title: "Leadership & Management Development",
      description: "Providing customized qualifications in leadership, management, and business strategy to elevate organizational performance."
    },
    {
      title: "Job Readiness Programs",
      description: "Equipping learners with essential soft skills to ensure they are ready for professional success."
    },
    {
      title: "Entrepreneurial Development",
      description: "Offering training and mentorship to help individuals start and sustain successful businesses."
    }
  ];

  return (
    <div className='vision-container'>
      <div className='vision-header'>
        <h2>Our Services</h2>
        <p>The Third Avenue equips South Africa’s youth with skills and purpose to thrive in work or entrepreneurship.</p>
      </div>
      
      <div className='vision-content'>
        <div className='vision-items'>
          {services.map((service, index) => (
            <div className='service-card' key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className='vision-image'>
          <img src={about_img} alt="Our Services" />
        </div>
      </div>
    </div>
  )
}

export default Vision