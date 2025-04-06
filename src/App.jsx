import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/OurServices/Services'
import Title from './components/Title/Title'
import About from './components/About/About'
import Slogan from './components/Slogan/Slogan'
import Vision from './components/Vision/Vision'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title title='Our Services'/>
      <Services/>
      <Slogan/>
      <About/>
      <Vision/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App