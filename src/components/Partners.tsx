import './Partners.css'
// @ts-ignore
import hustedLogo from '../assets/husted.png'
// @ts-ignore
import kwLogo from '../assets/kw.png'

function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-container scroll-animate">
        <img src={hustedLogo} alt="The Husted Team" className="partner-logo" />
        <img src={kwLogo} alt="Keller Williams" className="partner-logo" />
      </div>
    </section>
  )
}

export default Partners

