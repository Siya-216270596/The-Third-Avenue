import React from 'react'
import './Vision.css'
import about_img from '../../assets/Image 10.jpg'

const Vision = () => {
  return (
    <div className='vision'>
      <div className='vision-mid'>
        <h1>Our Service</h1>

        <div>
          <h2>Recruitment Services</h2>
          <br />
          <p>
            Connecting businesses with
            the right talent by sourcing and placing learners into training and job opportunities.
          </p>
        </div>

        <div>
          <h2>Leadership & Management Development</h2>
          <br />
          <p>
           Providing customized qualifications in leadership, management, and business strategy to elevate organizational performance.
          </p>
        </div>

        <div>
          <h2>Job Readiness Programs</h2>
          <br />
          <p>
            Equipping learners with essential soft skills to ensure they are ready for professional success.
          </p>
        </div>

        <div>
          <h2>Entrepreneurial Development</h2>
          <br />
          <p>
           Offering training and mentorship to help individuals start and sustain successful businesses.
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
