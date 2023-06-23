import React from "react";
import Stroke from '../assets/icon-stroke.svg'
import Service from '../assets/service-icon-link.svg'
import ServiceIcon from '../assets/service-icon-edit.svg'
import QRCode from '../assets/service-icon-qr-code.svg'
import Analytics from '../assets/service-icon-analytics.svg'
import Circle from '../assets/icon-check-circle.svg'
import WhiteCircle from '../assets/white-icon-check-circle.svg'
import Trim1 from '../assets/trim-pattern-1.svg'
import Trim2 from '../assets/trim-pattern-2.svg'
import FAQ1 from '../assets/faq-pattern-1.svg'
import FAQ2 from '../assets/faq-pattern-2.svg'
import IconMinus from '../assets/icon-minus.svg'
import IconPlus from '../assets/icon-plus.svg'
import GetStarted1 from '../assets/get-started-pattern-1.svg'
import GetStarted2 from '../assets/get-started-pattern-2.svg'
import Wand from '../assets/icon-magicwand.svg'

const SecondScreen: React.FunctionComponent = () => {
    return (
      <div>
        <main>
      <section className="container hide">
        <div>
          <h2>
            One Stop.
            <br />
            Four <span className="blue-text">Possibilities</span>
          </h2>
          <div className="stats-container">
            <div className="stats">
              <div id="users">
                <h4 className="stat-num">3M</h4>
                <p className="stat-desc">Active Users</p>
              </div>
              <div id="links-created">
                <h4 className="stat-num">60M</h4>
                <p className="stat-desc">Links &amp; QR codes created</p>
              </div>
            </div>
            <div className="stats">
              <div id="clicked">
                <h4 className="stat-num">1B</h4>
                <p className="stat-desc">Clicked &amp; Scanned connections</p>
              </div>
              <div id="integrations">
                <h4 className="stat-num">300K</h4>
                <p className="stat-desc">App Integrations</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="choose-us hide">
            <div>
              <img src={Stroke} alt="icon-stroke" />
              <h2>Why Choose <span className="blue-text">Scissors</span></h2>
            </div>
            <p>
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all of these is second to none.
            </p>
          </div>

           {/* ----------------- SERVICES SECTION -----------------  */}

          <div className="services hide">
            <div className="services-group-1">
              <div className="service hide">
                <img
                  src={Service}
                  alt="service-icon-link"
                />
                <div>
                  <h3>URL Shortening</h3>
                  <p>
                    Scissor allows you to shorten URLs of your business, events.
                    Shorten your URL at scale, URL redirects.
                  </p>
                </div>
              </div>
              <div className="service hide">
                <img
                  src={ServiceIcon}
                  alt="service-icon-edit"
                />
                <div>
                  <h3>Custom URLs</h3>
                  <p>
                    With Scissor, you can create custom URLs, with the length
                    you want! A solution for socials and businesses.
                  </p>
                </div>
              </div>
            </div>
            <div className="services-group-2">
              <div className="service hide">
                <img
                  src={QRCode}
                  alt="service-icon-qr-code"
                />
                <div>
                  <h3>QR Codes</h3>
                  <p>
                    Generate QR codes to your business, events. Bring your
                    audience and customers to your doorstep with this scan and
                    go solution.
                  </p>
                </div>
              </div>
              <div className="service hide">
                <img
                  src={Analytics}
                  alt="service-icon-analytics"
                />
                <div>
                  <h3>Data Analytics</h3>
                  <p>
                    Receive data on the usage of either your shortened URL,
                    custom URLs or generated QR codes. Embedded to monitor
                    progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="pricing hide">
        <div className="pricing-header">
          <img src={Stroke} alt="icon-stroke" />
          <div>
            <h2>
              A <span className="blue-text">price perfect</span> for your needs.
            </h2>
            <p>
              From catering for your personal, business, event, socials needs,
              you can be rest assured we have you in mind in our pricing.
            </p>
          </div>
        </div>
        <div className="pricing-body">
          <div className="pricing-plan hide">
            <p>Basic</p>
            <div className="pricing-info">
              <div>
                <h4>FREE</h4>
                <p>Free plan for all users</p>
              </div>
              <ul className="benefits">
                <li>
                  <img
                    src={Circle}
                    alt="icon-check-circle"
                  />Unlimited URL Shortening
                </li>
                <li>
                  <img
                    src={Circle}
                    alt="icon-check-circle"
                  />Basic Link Analytics
                </li>
                <li>
                  <img
                    src={Circle}
                    alt="icon-check-circle"
                  />Customizable Short Links
                </li>
                <li>
                  <img
                    src={Circle}
                    alt="icon-check-circle"
                  />Standard Support
                </li>
                <li>
                  <img
                    src={Circle}
                    alt="icon-check-circle"
                  />Ad-supported
                </li>
              </ul>
            </div>
          </div>
          <div className="pricing-plan hide recommended">
            <p>Professional</p>
            <div className="pricing-info">
              <div>
                <h4>$ 15/month</h4>
                <p>Ideal for business creators</p>
              </div>
              <ul className="benefits">
                <li>
                  <img
                    src={WhiteCircle}
                    alt="icon-check-circle"
                  />Enhanced Link Analytics
                </li>
                <li>
                  <img
                    src={WhiteCircle}
                    alt="icon-check-circle"
                  />Custom Branded Domains
                </li>
                <li>
                  <img
                    src={WhiteCircle}
                    alt="icon-check-circle"
                  />Advanced Link customization
                </li>
                <li>
                  <img
                    src={WhiteCircle}
                    alt="icon-check-circle"
                  />Priority Support
                </li>
                <li>
                  <img
                    src={WhiteCircle}
                    alt="icon-check-circle"
                  />Ad-free Experience
                </li>
              </ul>
            </div>
          </div>
          <div className="pricing-plan hide">
            <p>Teams</p>
            <div className="pricing-info">
              <div>
                <h4>$ 25/month</h4>
                <p>Share with up to 10 users</p>
              </div>
              <ul className="benefits">
                <li>
                  <img
                    src={Circle}
                    alt="icon-check-circle"
                  />Team Collaboration
                </li>
                <li>
                  <img
                    src={Circle}
                    alt="icon-check-circle"
                  />User Roles and Permissions
                </li>
                <li>
                  <img
                    src={Circle}
                    alt="icon-check-circle"
                  />Enhanced Security
                </li>
                <li>
                  <img
                    src={Circle}
                    alt="icon-check-circle"
                  />API Access
                </li>
                <li>
                  <img
                    src={Circle}
                    alt="icon-check-circle"
                  />Dedicated Account Manager
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pricing-cta hide">
          <button className="btn">Get Custom Pricing</button>
          <button className="btn">Select Pricing</button>
        </div>
      </section>


      <section className="trim-url hide">
        <img
          src={Trim1}
          alt="trim-pattern-1"
          id="trim-pattern-1"
        />
        <img
          src={Trim2}
          alt="trim-pattern-2"
          id="trim-pattern-2"
        />
        <div>
          <form>
            <input
              type="text"
              id="input-url"
              placeholder="Paste URL here..."
              className="hide"
            />
            <br />
            <select id="domain" className="hide">
              <option value="">Choose Domain</option>
              <option value="">Domain 1</option>
              <option value="">Domain 2</option>
              <option value="">Domain 3</option>
              <option value="">Domain 4</option>
            </select>
            <input
              type="text"
              id="input-alias"
              placeholder="Type Alias Here"
              className="hide"
            />
          </form>
          <div>
            <button className="btn">
              Trim URL
              <img
                src={Wand}
                alt="icon-magic wand"
                className="hide"
              />
            </button>
            <p>
              By clicking TrimURL, I agree to the
              <span className="policy hide">Terms of Service</span>,
              <span className="policy hide">Privacy Policy</span> and Use of
              Cookies.
            </p>
          </div>
        </div>
      </section>

      <section className="faq hide">
        <img
          src={FAQ1}
          alt="faq-pattern-1"
          id="faq-pattern-1"
        />
        <img
          src={FAQ2}
          alt="faq-pattern-2"
          id="faq-pattern-2"
        />
        <div>
          <h2><img src={Stroke} alt="icon-stroke" />FAQs</h2>
          <div className="questions">
            <div className="question-container hide">
              <div className="question">
                <p>How does URL shortening work?</p>
                <img src={IconMinus} alt="icon-plus" />
              </div>
              <div className="answer">
                URL shortening works by taking a long URL and creating a
                shorter, condensed version that redirects to the original URL.
                When a user clicks on the shortened link, they are redirected to
                the intended destination.
              </div>
            </div>
            <div className="question-container hide">
              <div className="question">
                <p>
                  Is it necesary to create an account to use the shortening
                  service?
                </p>
                <img src={IconPlus} alt="icon-plus" />
              </div>
            </div>
            <div className="question-container hide">
              <div className="question">
                <p>Are the shortened links permanent? Will they expire?</p>
                <img src={IconPlus} alt="icon-plus" />
              </div>
            </div>
            <div className="question-container hide">
              <div className="question">
                <p>
                  Are there any limitations on the number of URLs I can shorten?
                </p>
                <img src={IconPlus} alt="icon-plus" />
              </div>
            </div>
            <div className="question-container hide">
              <div className="question">
                <p>
                  Can I customize the shorteneed URL to represent my brand or
                  content?
                </p>
                <img src={IconPlus} alt="icon-plus" />
              </div>
            </div>
            <div className="question-container hide">
              <div className="question">
                <p>CanI track the performance of my shortened URLs?</p>
                <img src={IconPlus} alt="icon-plus" />
              </div>
            </div>
            <div className="question-container hide">
              <div className="question">
                <p>
                  How secure is the URL shortening service? Are the shortened
                  lists protected against spam or malicious content?
                </p>
                <img src={IconPlus} alt="icon-plus" />
              </div>
            </div>
            <div className="question-container hide">
              <div className="question">
                <p>What is a QR code and what can it do?</p>
                <img src={IconPlus} alt="icon-plus" />
              </div>
            </div>
            <div className="question-container hide">
              <div className="question">
                <p>
                  Is there an API available for integrating the URL shortening
                  service into my own applications or websites?
                </p>
                <img src={IconPlus} alt="icon-plus" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="get-started hide">
        <img
          src={GetStarted1}
          alt="get-started-pattern-1"
          id="get-started-pattern-1"
        />
        <img
          src={GetStarted2}
          alt="get-started-pattern-2"
          id="get-started-pattern-2"
        />
        <div>
          <h2 className="hide">Revolutionizing Link Optimization</h2>
          <button className="btn hide">Get Started</button>
        </div>
      </section>
    </main>

    </div>
    )
}

export default SecondScreen;