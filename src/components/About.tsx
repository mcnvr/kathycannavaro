import './About.css'
import kathyHeadshot from '../assets/kathycannavaro_headshot.webp'
// @ts-ignore
import littleGymImage from '../assets/littlegym.jpg'
import Button from './Button'

function About() {
  return (
    <>
      {/* Intro Section - Tan/Beige background */}
      <section id="about" className="intro-section">
        <div className="intro-container">
          <h2 className="intro-heading">Representing Buyers and Sellers in the Charleston Area</h2>
          <p className="intro-text">
            Kathy is a dedicated and versatile real estate professional with a passion for helping clients achieve their real estate goals—whether that's buying or selling a home, securing land, or navigating commercial property transactions.
          </p>
        </div>
      </section>

      {/* Feature Section 1 - Text Left, Image Right */}
      <section className="feature-section">
        <div className="feature-container">
          <div className="feature-content">
            <h3 className="feature-heading">Trusted Advisor. Results-Driven.<br />Client-First.</h3>
            <p className="feature-text">
              With a client-first approach and a strong commitment to exceptional service, Kathy offers a full spectrum of real estate expertise across residential and commercial markets. From helping families find their dream homes to assisting business owners in leasing or purchasing the perfect commercial space, Kathy brings deep knowledge, sharp negotiation skills, and an unwavering dedication to every transaction.
            </p>
            <Button text="Learn more" variant="black" href="#services" />
          </div>
          <div className="feature-image">
            <img src={kathyHeadshot} alt="Kathy Cannavaro" />
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Image Left, Text Right */}
      <section className="feature-section feature-section-alt">
        <div className="feature-container">
          <div className="feature-image">
            <img src={littleGymImage} alt="Kathy at The Little Gym" />
          </div>
          <div className="feature-content">
            <h3 className="feature-heading">15 Years as a Business Owner.<br />A Foundation Built on Service.</h3>
            <p className="feature-text">
              Before launching her successful real estate career, Kathy spent 15 years as the owner and operator of a top-rated franchise of <em>The Little Gym</em>, where she built a strong foundation in customer service, operations, and business development.
            </p>
            <p className="feature-text">
              A former teacher as well, Kathy's background uniquely equips her to guide clients through the process with clarity, care, and confidence. She understands what it takes to run a business and serve clients at the highest level.
            </p>
            <Button text="Work with Kathy" variant="black" href="#/contact" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
