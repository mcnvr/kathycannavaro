import './Contact.css'

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container scroll-animate">
        <div className="contact-details">
          <h3 className="contact-name">Kathy Cannavaro, Realtor</h3>
          <p className="contact-company">KELLER WILLIAMS</p>
          <p className="contact-address">1331 College Park Rd, Unit E</p>
          <p className="contact-address">Summerville, SC 29483</p>
        </div>

        <div className="contact-center">
          <a href="#/contact" className="contact-button">
            Questions? Contact Me Here
          </a>
          <div className="contact-social">
            <a href="https://www.zillow.com/profile/Kathleen%20Cannavaro" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="Zillow">
              <svg viewBox="0 0 1475 1710" fill="currentColor" width="18" height="18">
                <path d="M.1 889.4V614.5L738.2 0l736.6 614.5V866c-188.4 36.2-606.2 165.1-784.1 246-1.4.6-3.2.4-1.1-2.5C791.8 972 975 780.2 1139.7 644.6c1.1-.8 2-1.7 2.6-2.8.7-1.2 1.2-2.4 1.4-3.7.1-1.3.1-2.6-.3-3.8-.3-1.3-.9-2.5-1.7-3.5-22.3-28.7-104-133.7-129.3-163.9-4.4-5.2-7.8-8-15.3-6-239.6 63-768.2 285.1-997 428.5m244.2 452.8c-3.8-4.7-4.1-7.1.8-14.8 106.2-164.5 323.1-420.3 461.4-528.7 2.5-2 1.8-3.7-1.1-2.7C561.3 845.7 151.8 1031.4.2 1121.9v587.3h1474.6v-565.3c-201.4 36.1-803.3 224.9-1077 373.7-5 3.4-11.9 2.4-15.9-2.5z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/kathycannavarorealtor/" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/kathycannavarorealestateagent/" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="contact-info">
          <h4 className="contact-info-heading">Contact</h4>
          <a href="mailto:kcannavaro@kw.com" className="contact-link">kcannavaro@kw.com</a>
          <a href="tel:8434836614" className="contact-link">(843) 483-6614</a>
          <p className="contact-license">License #128377</p>
        </div>
      </div>
    </section>
  )
}

export default Contact

