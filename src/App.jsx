import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import { Canvas } from '@react-three/fiber'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
// import Cursor from './Components/Cursor'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
     
      <Footer />
    </main>
  )
}

export default App