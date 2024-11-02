import React from 'react'
//
import About from './sections/About'
import GetInTouch from './sections/GetInTouch'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Worked from './sections/Worked'
import Footer from '@widgets/Footer'

const Home = () => {
  return (
    <>

      <Hero />
      <About />
      <Education />
      <Worked />
      <Projects />
      <GetInTouch />
      <Footer />

    </>
  )
}

export default Home