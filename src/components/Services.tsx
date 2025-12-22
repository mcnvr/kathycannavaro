import './Services.css'
// @ts-ignore
import house1Image from '../assets/house1.webp'
// @ts-ignore
import house2Image from '../assets/house2.webp'
// @ts-ignore
import commercialImage from '../assets/commercial.jpg'
// @ts-ignore
import clientResourcesImage from '../assets/clientresources.webp'

const services = [
  {
    title: 'Buying',
    description: 'Learn how the right strategy will help you find your perfect home',
    image: house1Image
  },
  {
    title: 'Selling',
    description: 'Rely on a trusted advisor to sell your home quicker for more money',
    image: house2Image
  },
  {
    title: 'Commercial',
    description: 'Expert guidance for leasing, purchasing, or selling commercial properties',
    image: commercialImage
  },
  {
    title: 'Client Resources',
    description: 'Find market updates, listings, and helpful tips for homeowners',
    image: clientResourcesImage
  }
]

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-heading">Services Offered</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#/contact" className="service-button">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

