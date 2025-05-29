import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/OurServices/Services'
import About from './components/About/About'
import VisionAndMission from './components/VisionAndMission/VisionAndMission'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Vision from './components/Vision/Vision'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About />
      <VisionAndMission />
      <Vision/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App