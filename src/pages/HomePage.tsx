import '../App.css'
import charlestonSunsetImage from '../assets/charleston-sunset.jpg'
// @ts-ignore
import hustedLogoWhite from '../assets/husted-logo-white.png'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import About from '../components/About'
import FeaturedProperties from '../components/FeaturedProperties'
import Testimonial from '../components/Testimonial'
import Partners from '../components/Partners'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function HomePage() {
  useScrollAnimation();

  return (
    <div className="app">
      <div className="hero-section">
        <div className="hero-background">
          <img src={charlestonSunsetImage} alt="Background" draggable="false" />
        </div>
        <Navbar />
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="name-container">
              <h1 className="name">Kathy Cannavaro</h1>
              <div className="name-separator"></div>
              <img src={hustedLogoWhite} alt="Husted Logo" className="husted-logo" />
            </div>
            <p className="title">REALTOR®</p>
            <p className="title">Serving the Greater Charleston Area</p>
            <p className="title">Residential, Land, Commercial</p>
            <Button text="Contact" href="#/contact" />
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Partners />
      <FeaturedProperties />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage

