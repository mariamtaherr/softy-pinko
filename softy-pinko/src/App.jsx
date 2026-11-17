import { useEffect } from 'react'
import AOS from 'aos'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import WorkProcess from './components/WorkProcess'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Stats from './components/Stats'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Start the scroll animations (data-aos="...") used in the About section
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <WorkProcess />
      <Testimonials />
      <Pricing />
      <Stats />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
