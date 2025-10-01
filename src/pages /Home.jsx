import Header from "../components/Header";
import '../style.css';
import HomeImage from "../assets/home1.jpg";
import SecondImage from "../assets/second2.jpg";
import ThirdImage from "../assets/third3.jpg";
import FourImage from "../assets/fourth4.jpg";
import FiveImage from "../assets/five5.jpg";
import SixImage from "../assets/six6.jpg";
import SevenImage from "../assets/seven7.jpg";
import EightImage from "../assets/eight8.jpg";
import NineImage from "../assets/nine9.jpg";
import TenImage from "../assets/ten10.jpg";
import { useState } from "react";
import Form from "./Form";

export default function Home() {
  const [openForms, setOpenForms] = useState(false);

  const openForm = () => {
    setOpenForms(true);
  };

  return (
    <>
      {!openForms && (
        <div className="home-container">

          {/* Hero Section */}
          <section className="hero-section">
            <img src={HomeImage} alt="Hero" className="hero-image" />
            <div className="hero-text">
              <p>Transform Your Business With Tailored ICT, Data And AI Solutions.</p>
            </div>
          </section>

          {/* About Section */}
          <section className="about-section">
            <div className="about-image">
              <img src={SecondImage} alt="About Us" />
            </div>
            <div className="about-content">
              <h6>About Us</h6>
              <h4>At DigiTech, we specialize in driving business transformation</h4>
              <p>
                We offer expert ICT consulting services for small businesses.
                Let us help you streamline your technology and maximize your productivity.
              </p>
              <button className="btn" onClick={openForm}>Find Out More</button>
            </div>
          </section>

          {/* Services Section */}
          <section className="services-section">
            <h3>Unlocking Innovation: DigiTech’s Expert Services</h3>

            <div className="service-grid">
              <div className="service-card">
                <h4>Growth Advisory</h4>
                <img src={ThirdImage} alt="Growth Advisory" />
                <p>
                  <strong>Advisory & Mentorship:</strong> Strategic guidance for startups... <br />
                  <strong>Investment Support:</strong> Connecting startups with investors... <br />
                  <strong>Technology Evaluation:</strong> Assessing and optimizing tech... <br />
                </p>
              </div>

              <div className="service-card">
                <h4>Consult</h4>
                <img src={FourImage} alt="Consult" />
                <p>
                  <strong>Digital Transformation Advisory:</strong> Guiding businesses... <br />
                  <strong>Cloud Adoption & Migration:</strong> Enabling smooth transitions... <br />
                </p>
              </div>

              <div className="service-card">
                <h4>Technology Transformation</h4>
                <img src={FiveImage} alt="Technology" />
                <p>
                  <strong>Program & Project Management:</strong> Ensuring successful execution... <br />
                </p>
                <button className="btn" onClick={openForm}>Learn More</button>
              </div>
            </div>
          </section>

          {/* Additional Services */}
          <section className="service-grid">
            <div className="service-card">
              <h4>Next Gen Services</h4>
              <img src={SixImage} alt="Next Gen" />
              <p>
                <strong>Enhanced Customer Experience:</strong> Delivering seamless, personalized interactions.<br />
                <strong>IoT, Data & AIOps Tools:</strong> Enabling automation and insights.
              </p>
            </div>

            <div className="service-card">
              <h4>Talent Unleashed</h4>
              <img src={SevenImage} alt="Talent" />
              <p>
                <strong>Leadership Workshops:</strong> Empowering teams to lead and grow. <br />
                <strong>Sales Training:</strong> Driving results through skill-building. <br />
              </p>
              <button className="btn" onClick={openForm}>Learn More</button>
            </div>

            <div className="service-card">
              <h4>Domain Expertise</h4>
              <img src={EightImage} alt="Domain" />
              <p>
                Expertise across ICT, Telecom, Healthcare, and more. <br />
                We help businesses innovate and grow sustainably.
              </p>
              <button className="btn" onClick={openForm}>Learn More</button>
            </div>
          </section>

          {/* About DigiTech */}
          <section className="about-digitech">
            <img src={NineImage} alt="About DigiTech" className="wide-banner" />
            <h2>About DigiTech Consulting</h2>

            <div className="mission-section">
              <img src={TenImage} alt="Mission" />
              <div className="mission-text">
                <h5>Our Mission</h5>
                <p>
                  At DigiTech, our mission is to empower businesses through innovative IT solutions.
                  We strive to enhance operational efficiency and drive growth in the digital landscape.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <div className="footer-grid">
              <div className="footer-section">
                <h4>DigiTech Consulting</h4>
                <p>
                  Transforming businesses with tailored ICT, Data, and AI solutions.
                  Empowering your digital journey with innovation and expertise.
                </p>
              </div>

              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
             
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Services</h4>
                <ul>
                  <li><a href="#">Growth Advisory</a></li>
                  <li><a href="#">Consulting</a></li>
                  <li><a href="#">Technology Transformation</a></li>
                  <li><a href="#">Next Gen Services</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Contact Us</h4>
                <p>
                  <strong>Email:</strong> info@digitech.com<br />
                  <strong>Phone:</strong> 8754594900<br />
                  <strong>Address:</strong> 123 Tech Avenue, Innovation City
                </p>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} DigiTech Consulting. All rights reserved.</p>
            </div>
          </footer>
        </div>
      )}

      {openForms && <Form />}
    </>
  );
}
