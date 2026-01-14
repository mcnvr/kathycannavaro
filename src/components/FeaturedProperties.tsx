import { useEffect, useState, useRef } from 'react'
import './FeaturedProperties.css'

interface Property {
  id: string
  price: string
  address: string
  beds: number | null
  baths: number | null
  sqft: string | null
  image: string
  link: string
}

interface PropertiesData {
  lastUpdated: string | null
  properties: Property[]
  error?: string
}

function FeaturedProperties() {
  const [data, setData] = useState<PropertiesData>({ lastUpdated: null, properties: [] })
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/data/properties.json')
      .then(response => response.json())
      .then((jsonData: PropertiesData) => {
        setData(jsonData)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading properties:', error)
        setLoading(false)
      })
  }, [])

  // Calculate how many cards are visible based on screen width
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  const [visibleCards, setVisibleCards] = useState(getVisibleCards())

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, data.properties.length - visibleCards)

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
  }

  // Scroll carousel when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / data.properties.length
      carouselRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      })
    }
  }, [currentIndex, data.properties.length])

  if (loading) {
    return (
      <section className="featured-properties-section">
        <div className="featured-properties-container">
          <h2 className="featured-properties-heading">Featured Properties</h2>
          <p className="featured-properties-loading">Loading properties...</p>
        </div>
      </section>
    )
  }

  if (data.properties.length === 0) {
    return (
      <section className="featured-properties-section">
        <div className="featured-properties-container">
          <h2 className="featured-properties-heading">Featured Properties</h2>
          <p className="featured-properties-empty">No featured properties available at this time.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="featured-properties-section">
      <div className="featured-properties-container">
        <div className="featured-properties-header">
          <h2 className="featured-properties-heading">Featured Properties</h2>
          <div className="featured-properties-nav">
            <button 
              className="nav-button" 
              aria-label="Previous"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button 
              className="nav-button" 
              aria-label="Next"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="carousel-wrapper">
          <div className="properties-carousel" ref={carouselRef}>
            {data.properties.map((property) => (
              <a 
                key={property.id} 
                href={property.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="property-card"
              >
                {property.image && (
                  <div className="property-image">
                    <img src={property.image} alt={property.address} loading="lazy" />
                  </div>
                )}
                
                <div className="property-content">
                  <div className="property-price">{property.price}</div>
                  <div className="property-address">{property.address}</div>
                  
                  {(property.beds || property.baths || property.sqft) && (
                    <div className="property-details">
                      {property.beds && <span>{property.beds} bd</span>}
                      {property.baths && <span>{property.baths} ba</span>}
                      {property.sqft && <span>{property.sqft}</span>}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="carousel-indicators">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Search all properties button */}
        <div className="search-all-container">
          <a 
            href="https://kcannavaro.kw.com/search" 
            target="_blank" 
            rel="noopener noreferrer"
            className="search-all-button"
          >
            Search all properties
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties
