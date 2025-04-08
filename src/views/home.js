import React from 'react'

import { Helmet } from 'react-helmet'

import Card from '../components/card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Naranja Dulce</title>
        <meta property="og:title" content="Naranja Dulce" />
      </Helmet>
      <div className="home-hero hero-container section-container"></div>
      <div className="section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content1">
            <h1 className="home-title">NARANJA DULCE</h1>
            <div className="home-container11">
              <button className="button button-gradient">Get started</button>
              <button className="button button-transparent">Log in</button>
            </div>
          </div>
          <div className="home-image1">
            <img
              alt="pastedImage"
              src="/external/pastedimage-yfzs-700w.png"
              className="home-pasted-image1"
            />
          </div>
        </div>
        <div className="home-max-width2 max-width">
          <div className="home-image2">
            <img
              alt="image"
              src="/group%2020-1200w.png"
              className="home-hero-image"
            />
          </div>
          <div className="home-content2">
            <span className="home-text10 beforeHeading">how it works</span>
            <h1 className="home-text11">
              <span>
                Pay and get paid
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text13">
                faster
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>than ever.</span>
            </h1>
            <img
              alt="image"
              src="/group%2018-1200w.png"
              className="home-image3"
            />
            <span className="home-text15">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className="home-container12">
              <button className="button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-navbar navbar-container">
        <div className="max-width">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-logo1">
              <img alt="image" src="/group%202.svg" className="home-image4" />
              <span className="brandName">
                <span className="home-text17">UP -</span>
                <span> START</span>
              </span>
            </div>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <div className="home-links1">
                <span className="home-text19 navbarLink">How it works</span>
                <span className="home-text20 navbarLink">Features</span>
                <span className="home-text21 navbarLink">Blog</span>
                <span className="home-text22 navbarLink">Pricing</span>
                <button className="button-secondary button">Log in</button>
                <button className="button button-primary">Get started</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <div className="home-logo2">
                    <img
                      alt="image"
                      src="/group%202.svg"
                      className="home-image5"
                    />
                    <span className="brandName">
                      <span className="home-text24">UP -</span>
                      <span> START</span>
                    </span>
                  </div>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links2">
                  <span className="home-text26 navbarLink">About</span>
                  <span className="home-text27 navbarLink">Features</span>
                  <span className="home-text28 navbarLink">Pricing</span>
                  <span className="home-text29 navbarLink">Team</span>
                  <span className="home-text30 navbarLink">Blog</span>
                </nav>
                <div className="home-buttons">
                  <button className="button-secondary button">Log in</button>
                  <button className="button button-primary">Get started</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon14"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon16"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon18"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width4 max-width">
          <span className="home-text31 beforeHeading">get started</span>
          <h1 className="home-text32">
            <span>No matter what you do,</span>
            <br></br>
            <span>UpStart will save you money</span>
          </h1>
          <div className="home-cards-container">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwxfDF8c2VhcmNofDF8fFJFU1RBVVJBTlR8ZW58MHx8fHwxNzQ0MTMzMjgyfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=700"
              className="home-image6"
            />
            <Card text="Family" rootClassName="cardroot-class-name1"></Card>
          </div>
        </div>
      </div>
      <div className="home-section3 section-container">
        <div className="home-max-width5 max-width">
          <div className="home-faq">
            <div className="home-questions">
              <span className="home-text35 beforeHeading">faq</span>
              <h1 className="home-text36">MENU</h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text37">
                    Is this a Free or Paid service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon20">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text38">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text39">
                    Do you operate in United Stated?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon22">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text40">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger3">
                  <span className="home-text41">
                    Is this a globally available bank?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon24">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text42">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger4">
                  <span className="home-text43">
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon26">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text44">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="pastedImage"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
            />
          </div>
          <div className="home-banner">
            <span className="home-text45 beforeHeading">get started</span>
            <h1 className="home-text46">
              <span>Push your finances to</span>
              <br></br>
              <span>the next level.</span>
            </h1>
            <span className="home-text50">
              <span>
                Amet minim mollit non deserunt ullamco est sit
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                aliqua dolor do amet sint.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="home-btns">
              <button className="home-button8 button button-transparent">
                See all plans
              </button>
              <button className="home-button9 button button-gradient">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container13">
            <div className="footer-column">
              <span className="home-text54">Product</span>
              <span className="home-text55">How it works</span>
              <span className="home-text56">Features</span>
              <span className="home-text57">Pricing</span>
              <span className="home-text58">Blog</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="home-text60">App</span>
              <span className="home-text61">Download iOS app</span>
              <span className="home-text62">Download Android app</span>
              <span className="home-text63">Log in to Portal</span>
              <span className="home-text64">Administrative</span>
              <span>Legal</span>
            </div>
            <div className="footer-column">
              <span className="home-text66">Company</span>
              <span className="home-text67">About us</span>
              <span className="home-text68">Culture</span>
              <span className="home-text69">Code of conduct</span>
              <span className="home-text70">Careers</span>
              <span className="home-text71">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="home-text73">Invest</span>
              <span className="home-text74">Commodity</span>
              <span className="home-text75">Savings</span>
              <span className="home-text76">
                <span>Taxes and fees</span>
                <br></br>
                <span></span>
              </span>
              <span className="home-text79">
                <span>Currency exchange</span>
              </span>
              <span>Community</span>
            </div>
            <div className="footer-column">
              <span className="home-text82">Security</span>
              <span className="home-text83">Security status</span>
              <span className="home-text84">ISO</span>
              <span className="home-text85">System status</span>
              <span>Customer Help</span>
            </div>
            <div className="footer-column">
              <span className="home-text87">Follow</span>
              <span className="home-text88">Instagram</span>
              <span className="home-text89">Twitter</span>
              <span className="home-text90">Facebook</span>
              <span className="home-text91">Tik Tok</span>
              <span className="home-text92">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
