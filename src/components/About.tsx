import './About.css'
// @ts-ignore
import kathyHeadshot from '../assets/headshot1.jpg'
// @ts-ignore
import littleGymImage from '../assets/littlegym.png'
// @ts-ignore
import zillowTopAgentImage from '../assets/zillow-top-agent.jpeg'
import Button from './Button'

function About() {
  return (
    <>
      {/* Intro Section - Tan/Beige background */}
      <section id="about" className="intro-section">
        <div className="intro-container scroll-animate">
          <h2 className="intro-heading">Representing Buyers and Sellers in the Charleston Area</h2>
          <p className="intro-text">
            Kathy is a dedicated and versatile real estate professional with a passion for helping clients achieve their real estate goals—whether that's buying or selling a home, securing land, or navigating commercial property transactions.
          </p>
        </div>
      </section>

      {/* Feature Section 1 - Text Left, Image Right */}
      <section className="feature-section">
        <div className="feature-container scroll-animate">
          <div className="feature-content">
            <h3 className="feature-heading">Trusted Advisor. Results-Driven.<br />Client-First.</h3>
            <p className="feature-text">
              With a client-first approach and a strong commitment to exceptional service, Kathy offers a full spectrum of real estate expertise across residential and commercial markets. From helping families find their dream homes to assisting business owners in leasing or purchasing the perfect commercial space, Kathy brings deep knowledge, sharp negotiation skills, and an unwavering dedication to every transaction.
            </p>
            <Button text="Learn more" variant="black" href="https://kcannavaro.kw.com/" />
          </div>
          <div className="feature-image">
            <img src={kathyHeadshot} alt="Kathy Cannavaro" />
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Image Left, Text Right */}
      <section className="feature-section feature-section-alt">
        <div className="feature-container scroll-animate">
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

      {/* Feature Section 3 - Text Left, Image Right */}
      <section className="feature-section">
        <div className="feature-container scroll-animate">
          <div className="feature-content">
            <h3 className="feature-heading">Award winning agent.</h3>
            <p className="feature-text">
              Recognized as a top-rated agent on Zillow, Kathy helps clients discover exceptional properties throughout the Charleston area.
            </p>
            <a 
              href="https://www.zillow.com/profile/Kathleen%20Cannavaro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-black zillow-button"
            >
              <svg viewBox="0 0 1475 1710" fill="currentColor" width="20" height="20">
                <path d="M.1 889.4V614.5L738.2 0l736.6 614.5V866c-188.4 36.2-606.2 165.1-784.1 246-1.4.6-3.2.4-1.1-2.5C791.8 972 975 780.2 1139.7 644.6c1.1-.8 2-1.7 2.6-2.8.7-1.2 1.2-2.4 1.4-3.7.1-1.3.1-2.6-.3-3.8-.3-1.3-.9-2.5-1.7-3.5-22.3-28.7-104-133.7-129.3-163.9-4.4-5.2-7.8-8-15.3-6-239.6 63-768.2 285.1-997 428.5m244.2 452.8c-3.8-4.7-4.1-7.1.8-14.8 106.2-164.5 323.1-420.3 461.4-528.7 2.5-2 1.8-3.7-1.1-2.7C561.3 845.7 151.8 1031.4.2 1121.9v587.3h1474.6v-565.3c-201.4 36.1-803.3 224.9-1077 373.7-5 3.4-11.9 2.4-15.9-2.5z"/>
              </svg>
              View on Zillow
            </a>
          </div>
          <div className="feature-image">
            <img src={zillowTopAgentImage} alt="Zillow Top Agent" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
