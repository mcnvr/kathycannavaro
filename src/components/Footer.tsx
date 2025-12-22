import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-disclaimer">
          <p>
            Kathy Cannavaro is a real estate salesperson licensed by the state of South Carolina affiliated with Keller Williams. Keller Williams is a real estate broker licensed by the state of South Carolina and abides by equal housing opportunity laws. License number 128377. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. No statement is made as to accuracy of any description. All measurements and sq ft are approximate. This is not intended to solicit property already listed. Nothing herein shall be construed as legal, accounting or other professional advice outside of a real estate brokerage.
          </p>
        </div>
        <div className="footer-branding">
          <div className="footer-logo">Kathy Cannavaro</div>
          <p className="footer-copyright">© Copyright {new Date().getFullYear()}</p>
          <p className="footer-license">Kathy Cannavaro, Keller Williams, License 128377</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

