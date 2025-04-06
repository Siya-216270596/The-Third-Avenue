import React from 'react'
import './Services.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'

const Services = () => {
  return (
    <div className='services'>
      <div className='service'>
        <img src={program_1} alt="" />
        <div className='caption'>
          <p>SOCIAL MEDIA MANAGEMENT</p>
        </div>
      </div>
      <div className='service'>
        <img src={program_2} alt="" />
        <div className='caption'>
          <p>CONTENT CREATION</p>
        </div>
      </div>
      <div className='service'>
        <img src={program_3} alt="" />
        <div className='caption'>
          <p>PAID ADVERTISEMENT</p>
        </div>
      </div>
      <button className='btn'>VIEW ALL SERVICES</button>
    </div>
  )
}

export default Services
