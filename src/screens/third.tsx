import FooterPat1 from '../assets/footer-pattern-1.svg'
import FooterPat2 from '../assets/footer-pattern-2.svg'
import IconChain from '../assets/footer-icon-chain.svg'
import IconLine from '../assets/footer-icon-line.svg'
import Twitter from '../assets/icon-twitter.svg'
import Instagram from '../assets/icon-instagram.svg'
import Linkedin from '../assets/icon-linkedin.svg'
import Github from '../assets/github.svg'

function Third() {
    return (
        <div>
        <footer className="hide">
      <img
        src={FooterPat1}
        alt="footer-pattern-1"
        id="footer-pattern-1"
      />
      <img
        src={FooterPat2}
        alt="footer-pattern-2"
        id="footer-pattern-2"
      />
      <div>
        <div id="footer-logo" className="hide">
          <img
            src={IconChain}
            alt="footer-icon-chain"
            id="footer-icon-chain"
          />
          <img
            src={IconLine}
            alt="footer-icon-line"
            id="footer-icon-line"
          />
          <h3 id="footer-name" className="hide">SCISSOR</h3>
        </div>
        <div className="socials hide">
          <a href="https://twitter.com/adedevs"><img src={Twitter} alt="icon-twitter" /> </a>
          <a href="https://www.instagram.com/sikeimagod/"><img src={Instagram} alt="icon-instagram" /></a>
          <a href="http://www.linkedin.com/in/adedevs"><img src={Linkedin} alt="icon-linkedin" /></a>
          <a href="https://www.github.com/adedevs"><img src={Github} alt="icon-github" /></a>
        </div>
      </div>
      <div className="extra-info hide">
        <div className="info-container hide">
          <h5>Why Scissor?</h5>
          <ul>
            <li><a href="#">Scissor 101</a></li>
            <li><a href="#">Integrations &amp; API</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
        <div className="info-container hide">
          <h5>Solutions</h5>
          <ul>
            <li><a href="#">Social Media</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">For Developers</a></li>
          </ul>
        </div>
        <div className="info-container hide">
          <h5>Products</h5>
          <ul>
            <li><a href="#">Link Management</a></li>
            <li><a href="#">QR Codes</a></li>
            <li><a href="#">Link-in-bio</a></li>
          </ul>
        </div>
        <div className="info-container hide">
          <h5>Company</h5>
          <ul>
            <li><a href="#">About Scissor</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Reviews</a></li>
          </ul>
        </div>
        <div className="info-container hide">
          <h5>Resources</h5>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Resource Library</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">App Connections</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Trust Center</a></li>
            <li><a href="#">Browser Extension</a></li>
            <li><a href="#">Mobile App</a></li>
          </ul>
        </div>
        <div className="info-container hide">
          <h5>Features</h5>
          <ul>
            <li><a href="#">Branded Links</a></li>
            <li><a href="#">Mobile Links</a></li>
            <li><a href="#">Campaign</a></li>
            <li><a href="#">Management &amp; Analytics</a></li>
            <li><a href="#">QR Code generation</a></li>
          </ul>
        </div>
        <div className="info-container hide">
          <h5>Legal</h5>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Acceptable Use Policy</a></li>
            <li><a href="#">Code of Conduct</a></li>
          </ul>
        </div>
      </div>
      <p id="copyright">
        <a href="#">Terms of Service</a>
        <a href="#">Security</a>
        <a href="#">Scissor 2023</a>
      </p>
      <div className='adedevs'>
            <p>This website was built by <a href='https://aderefinedweb.web.app/'>AdeDevs</a></p>
        </div>
    </footer>
    </div>
    )
}

export default Third;