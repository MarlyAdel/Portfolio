import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <>
      <div className='className="min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white transition-colors duration-300'>
        <Navbar />
        <main className="pt-20 w-full">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App
