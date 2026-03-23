import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import CodingJourney from './components/CodingJourney'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans">
      <Navbar />
      <main id="home">
        <Hero/>
      </main>
      <About />
      <Skill />
      <CodingJourney />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
