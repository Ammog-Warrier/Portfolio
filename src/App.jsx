import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <main className='max-w-10xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
        <Footer/>
    </main>
    )
}

export default App