import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans">
      <Navbar />
      <main id="home">
        <Hero/>
      </main>
    </div>
  )
}

export default App
