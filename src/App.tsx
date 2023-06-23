import SecondScreen from "./screens/second";
import Third from "./screens/third";
import Aurora from './assets/aurora.svg';
import Underline from './assets/icon-underline.svg';
import Link from './assets/icon-link.svg'
import Vector from './assets/Vector2.svg'
import Ellipse from './assets/ellipse.png'
import Rectangle from './assets/rectangle.svg'
import IconChain from './assets/footer-icon-chain.svg'
import IconLine from './assets/footer-icon-line.svg'
import IconDown from './assets/icon-down.svg'

function App() {
  return (
    <div className="mobile">
      <header className="hero-section hide">
        <img src={Aurora} alt="aurora" id="aurora" />
        <nav className="hide">
          <div id="logo">
            <img src={IconChain} alt="icon-chain" />
            &nbsp;&nbsp;&nbsp;
            <img src={IconLine} alt="icon-line" />
            &nbsp;&nbsp;&nbsp;
            <h1 id="name"> Scissor</h1>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link blue-text">
                My URLs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" id="features" className="nav-link">
                Features
                <img src={IconDown} alt="icon-down" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Analytics
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                FAQs
              </a>
            </li>
          </ul>
          <div className="cta">
            <a href="#" className="blue-text">
              Log In
            </a>
            <button className="btn">Try for free</button>
          </div>
        </nav>
        <section className="intro-container">
          <div className="intro-text hide">
            <h2>
              Optimize Your Online Experience with Our Advanced &nbsp; 
              <strong id="important" className="blue-text">
                URL Shortening &nbsp;
                <img src={Underline} alt="icon-underline" />
              </strong>
              Solution
            </h2>
            <p>
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, branded links, and domain customization
              options to reinforce your brand presence and enhance user
              engagement.
            </p>
          </div>
          <div className="cta">
            <button className="btn">Sign Up</button>
            <a href="#" className="blue-text">
              Learn More
            </a>
          </div>
        </section>
        <section className="group-2 hide">
          <div>
            <img src={Link} alt="icon-link" className="hide" />
            <p className="hide">
              Seamlessly transform your long URLs into concise
              <br />
              and shareable links with just few clicks.
            </p>
          </div>
          <img src={Vector} alt="" className="hide" />
        </section>
        <section className="group-3 hide">
          <img src={Ellipse} alt="ellipse.png" id="ellipse" />
          <img src={Rectangle} alt="rectangle.svg" id="rectangle" />
        </section>
      </header>
      <SecondScreen />
      <Third />
    </div>
  );
}

export default App;