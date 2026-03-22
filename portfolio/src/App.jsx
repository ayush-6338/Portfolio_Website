import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans">
      <Navbar />
      <main id="home">
        <Hero/>
      </main>
      <About />
    </div>
  )
}

export default App
