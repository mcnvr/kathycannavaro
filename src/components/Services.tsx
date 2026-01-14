import './Services.css'
// @ts-ignore
import residentialImage from '../assets/residential.jpg'
// @ts-ignore
import landImage from '../assets/land.jpg'
// @ts-ignore
import commercialImage from '../assets/commercial-real-estate.jpg'
// @ts-ignore
import clientResourcesImage from '../assets/clientresources.webp'

const services = [
  {
    title: 'Residential',
    description: 'Expert guidance for buying and selling residential properties in Charleston',
    image: residentialImage
  },
  {
    title: 'Land',
    description: 'Professional assistance with land acquisition, development, and sales',
    image: landImage
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
        <h2 className="services-heading scroll-animate">Services Offered</h2>
        <div className="services-grid scroll-animate">
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

