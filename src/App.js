import "./styles.css";
import mayaPhoto from "./assets/IMG_8202.jpeg";
import merricPhoto from "./assets/merric.jpeg";
export default function App() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="logo">
          <span className="logoIcon">🔥❄️</span>
          <div>
            <h2>LARIBEE</h2>
            <p>Heating & Cooling</p>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="callTop" href="tel:3150000000">
          Call Now
        </a>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <p className="eyebrow">New York HVAC Services</p>
          <h1>Reliable Heating & Cooling You Can Count On</h1>
          <p>
            Laribee Heating & Cooling provides dependable HVAC repairs,
            installations, and maintenance to keep your home comfortable
            year-round.
          </p>

          <div className="buttons">
            <a href="#contact" className="primaryBtn">
              Request an Estimate
            </a>
            <a href="tel:3150000000" className="secondaryBtn">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <p className="eyebrow">Our Services</p>
        <h2>Heating & Cooling Solutions</h2>

        <div className="serviceGrid">
          <div className="serviceCard">
            <h3>Heating Repair</h3>
            <p>Fast furnace and heating system repairs.</p>
          </div>

          <div className="serviceCard">
            <h3>AC Repair</h3>
            <p>Cooling system troubleshooting, repairs, and tune-ups.</p>
          </div>

          <div className="serviceCard">
            <h3>System Installation</h3>
            <p>Professional furnace, AC, and HVAC system replacement.</p>
          </div>

          <div className="serviceCard">
            <h3>Maintenance</h3>
            <p>Seasonal service to help prevent breakdowns.</p>
          </div>
        </div>
      </section>

      <section id="about" className="aboutSection">
        <div className="aboutHeader">
          <p className="eyebrow">Meet The Team</p>
          <h2>The Laribees</h2>
          <p>
            As a brother and sister team, we combine hands-on expertise and
            strong business management to deliver honest service, quality
            workmanship, and a better customer experience from start to finish.
          </p>
        </div>

        <div className="teamGrid">
          <div className="teamCard">
            <img src={merricPhoto} alt="Merric Laribee" />
            <div className="teamContent">
              <h3>Merric Laribee</h3>
              <span>Founder & Lead HVAC Technician</span>
              <p>
                Merric is the founder of Laribee Heating & Cooling and leads all
                service, repair, installation, and maintenance operations.
              </p>
              <p>
                He takes pride in providing honest recommendations, quality
                workmanship, and reliable solutions that keep homes comfortable
                year-round.
              </p>
            </div>
          </div>

          <div className="teamCard">
            <img src={mayaPhoto} alt="Maya Laribee" />
            <div className="teamContent">
              <h3>Maya Laribee</h3>
              <span>Business Operations & Customer Relations</span>
              <p>
                Maya oversees customer communication, scheduling, marketing, and
                the company's online presence.
              </p>
              <p>
                She is dedicated to making every interaction professional,
                organized, and seamless.
              </p>
            </div>
          </div>
        </div>

        <div className="storyBox">
          <p className="eyebrow">Our Story</p>
          <h2>Built on Hard Work and Family Values</h2>
          <p>
            Laribee Heating & Cooling was founded on the belief that customers
            deserve honest service, dependable workmanship, and clear
            communication.
          </p>
          <p>
            As siblings, Merric and Maya combined their strengths and values to
            build a business focused on helping families stay comfortable
            throughout every season in New York.
          </p>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Get Started</p>
        <h2>Request a Free Estimate</h2>
        <p>Need heating or cooling service? Contact us today.</p>

        <form className="contactForm">
          <input type="text" placeholder="Full Name" />
          <input type="tel" placeholder="Phone Number" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="What service do you need?" />
          <button type="submit">Submit Request</button>
        </form>
      </section>

      <footer>
        <h3>Laribee Heating & Cooling</h3>
        <p>Reliable Heating & Cooling Services Across New York</p>
      </footer>
    </div>
  );
}
