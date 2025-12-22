import './Testimonial.css'
// @ts-ignore
import insideImage from '../assets/inside.webp'

function Testimonial() {
  return (
    <section id="reviews" className="testimonial-section">
      <div className="testimonial-background">
        <img src={insideImage} alt="Interior" draggable="false" />
        <div className="testimonial-overlay"></div>
      </div>
      <div className="testimonial-content">
        <h2 className="testimonial-heading">What my <em>clients</em> are saying</h2>
        <div className="testimonial-quotes">
          <div className="testimonial-quote-block">
            <blockquote className="testimonial-quote">
              "Kathy was absolutely wonderful! She was so helpful in every aspect of the process and we will definitely work with her again in the future. She is knowledgeable, a great communicator and very good at what she does. We can't recommend her enough!"
            </blockquote>
            <div className="testimonial-stars">★★★★★</div>
            <blockquote className="testimonial-quote">
              "Kathy was super helpful finding our new home with lots of connections and knowledge of the area. Very happy with her service and would love to work with her again."
            </blockquote>
            <div className="testimonial-stars">★★★★★</div>
          </div>
          <div className="testimonial-quote-block">
            <blockquote className="testimonial-quote">
              "Kathy IS the best there is when it comes to this. Her knowledge, professionalism, dedication, and passion are at peak excellence! She fought for us, she lead the way, she answered EVERY call, she solved every problem in a timely manner. She truly cares and like I said, is the best in this field. We just moved into our home a few days ago. Kathy made the process painless, easy, and comprehensible. I would ONLY recommend her as an agent. No one else comes close to the skill she possesses. Truly one of a kind!"
            </blockquote>
            <div className="testimonial-stars">★★★★★</div>
          </div>
        </div>
        <a 
          href="https://www.zillow.com/profile/Kathleen%20Cannavaro#reviews" 
          target="_blank" 
          rel="noopener noreferrer"
          className="testimonial-button"
        >
          See more reviews
        </a>
      </div>
    </section>
  )
}

export default Testimonial

