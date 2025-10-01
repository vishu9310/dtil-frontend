// import { Helmet } from "react-helmet";
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

    const [openForms, setOpenForms] = useState(false)

    const openForm = () => {
        setOpenForms(true)
    }
    return (
        <>
       { !openForms && <div>

            <div style={{ display: 'flex', alignItems: 'center', padding: `122px` }}>
                <img src={HomeImage} width={1470} height={400} />
            </div>
            <div style={{ textAlign: 'center', padding: `20px`, marginTop: `-120px`, boxSizing: `border-box`, fontSize: 'xx-large' }}>
                <p>Transform Your Business With Tailored ICT, Data And AI Solutions.</p>
            </div>
            <div className="col-md-12" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="row-md-6">
                    <img src={SecondImage} width={750} height={500} />
                </div>
                <div className="row-md-6" style={{ height: '500px', width: '750px', backgroundColor: '#ecbbbb24' }}>
                    <div className="about">
                        <h6 className="h6">About Us</h6>
                        <h4 className="h4">At DigiTech, we specialize in driving business transformatio</h4>
                        <p className="p">We offer expert ICT consulting services for small businesses. Let us help you streamline your technology and maximize your productivity.</p>
                        <div className="button">
                            <button className="btn" onClick={()=>openForm()}>Find Out More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', padding: `20px`, marginTop: `40px`, boxSizing: `border-box`, fontSize: 'xx-large' }}>
                <h3>Unlocking Innovation: DigiTech’s Expert Services</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '6%', marginTop: '0', }}>
                <div className="col-md-4">
                    <h4 className="h4" style={{ marginLeft: 119 }}>Growth Advisory</h4>
                    <img src={ThirdImage} width={400} height={200} />
                    <p>
                        <span>
                            🔹
                            <strong>  Advisory & Mentorship:</strong>
                            Strategic guidance for startups to navigate challenges and scale effectively.
                            <br />
                            🔹
                            <strong>Investment Support:</strong>
                            Connecting startups with potential investors and funding opportunities.
                            <br />
                            🔹
                            <strong>Go-to-Market Partnership:</strong>
                            Helping businesses craft winning market entry and expansion strategies.
                            <br />
                            🔹
                            <strong>Technology Evaluation:</strong>
                            Assessing and optimizing tech solutions to enhance efficiency and innovation.
                            <br />
                            🔹
                            <strong>Employment Assistance: </strong>
                            Bridging talent gaps by connecting businesses with skilled professionals.
                            With Digitech by your side, turn your vision into reality with confidence and precision!
                            <br />
                        </span>


                    </p>
                </div>
                <div className="col-md-4" >
                    <h4 className="h4" style={{ marginLeft: 150 }}>Consult</h4>
                    <img src={FourImage} width={400} height={200} />
                    <p>
                        <span>
                            🔹
                            <strong> Digital Transformation Advisory :</strong>
                            Guiding businesses through seamless digital evolution.
                            <br />
                            🔹
                            <strong>Multi-Year ICT Strategy & Roadmap:</strong>
                            Designing long-term tech strategies aligned with business goals.
                            <br />
                            🔹
                            <strong>IoT, Data, AI & RPA Implementation:</strong>
                            Leveraging cutting-edge technologies to drive automation and intelligence.
                            <br />
                            🔹
                            <strong>Advanced Analytics:</strong>
                            Turning data into actionable insights for smarter decision-making.
                            <br />
                            🔹
                            <strong>Cloud Adoption & Migration Strategies : </strong>
                            Enabling smooth and efficient cloud transitions
                            With Digitech, transform your business with innovation, efficiency, and a future-ready approach!
                            <br />
                        </span>
                    </p>

                </div>
                <div className="col-md-4" >
                    <h4 className="h4" style={{ marginLeft: 83 }}>Technology Transformation</h4>
                    <img src={FiveImage} width={400} height={200} />
                    <p>
                        <span>
                            🔹
                            <strong> ICT Transformation Governance:</strong>
                            Establishing and managing robust governance frameworks.
                            <br />
                            🔹
                            <strong>Steering Committee Advisory:</strong>
                            Providing strategic guidance to leadership for informed decision-making.
                            <br />
                            🔹
                            <strong>Program & Project Management:</strong>
                            Ensuring successful execution of technology initiatives.
                            <br />
                            🔹
                            <strong>:</strong>
                            Crafting custom software solutions and ensuring seamless system integration.
                            <br />
                            🔹
                            <strong> Transition Assistance (HOTO) : </strong>
                            Facilitating smooth handover and takeover processes for minimal disruption.
                            With Digitech, navigate technology transformation with precision, agility, and success.
                            <br />
                            <button className="btn" style={{ marginTop: 50 }} onClick={()=>openForm()}>
                                Learn More
                            </button>
                        </span>
                    </p>
                </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '6%', marginTop: '-79', }}>
                <div className="col-md-4">
                    <h4 className="h4" style={{ marginLeft: 119 }}>Next Gen Services</h4>
                    <img src={SixImage} width={400} height={200} />
                    <div>
                        <p>
                            <span>
                                🔹
                                <strong> Enhanced Customer Experience: </strong>
                                Delivering seamless, <br /> personalized interactions.
                                <br />
                                🔹
                                <strong> IoT, Data & AIOps Tools: </strong>
                                Enabling intelligent automation<br /> and real-time operations.
                                <br />
                                🔹
                                <strong> Actionable Insights with ML/AI: </strong>
                                Transforming data <br /> into strategic business decisions.
                                <br />
                                🔹
                                <strong>Security Consulting :</strong>
                                Strengthening cybersecurity for a <br /> resilient digital ecosystem.
                                <br />
                                🔹
                                <strong> Governance Automation : </strong>
                                Streamlining compliance and IT governance with smart solutions.
                                <br />
                            </span>
                        </p>

                    </div>


                </div>
                <div className="col-md-4" style={{marginLeft:'15px'}}>
                    <h4 className="h4" style={{ marginLeft: 150 }}>Talent Unleashed</h4>
                    <img src={SevenImage} width={400} height={200} />
                    <div>
                        <p>
                            <span>
                                An organization’s greatest asset is its workforce.
                                <br />
                                🔹
                                <strong>DigiTech Talent Unleashed:</strong>
                                empowers employees to grow into
                                <br /> leadership roles while driving business success. Through
                                <br />
                                🔹
                                <strong>Leadership workshops:</strong>
                                <br />
                                🔹
                                <strong>sales training:</strong>
                                <br />
                                🔹
                                <strong>Industry-specific programs:</strong>
                                <br />
                                🔹
                                <strong>Talent Engagement and Retention:</strong>
                                <br />
                                Talent Engagement and Retention
                                <br />
                                <button className="btn" style={{ marginTop: 90 }} onClick={()=>openForm()}>
                                    Learn More
                                </button>
                            </span>
                        </p>
                    </div>

                </div>
                <div className="col-md-4" style={{marginLeft:'15px'}}>
                    <h4 className="h4" style={{ marginLeft: 83 }}>Domain Expertise</h4>
                    <img src={EightImage} width={400} height={200} />
                    <div>
                        <p>
                            <span style={{ marginLeft: 4 }}>
                                DigiTech brings deep expertise across
                                <br />
                                <span> 🔹
                                <strong>ICT</strong></span>
                                
                                <br />
                                <span>🔹
                                    <strong>ITES </strong></span>
                                <br />
                                🔹
                                <strong>Telecom</strong>
                                <br />
                                🔹
                                <strong>Healthcare</strong>
                                <br />
                                🔹
                                <strong>Consulting Advisory</strong>
                                <br />
                                🔹
                                <strong>Transformation, and Talent Services:</strong>
                                We help businesses innovate,
                                <br />optimize operations, and build future-ready workforces. Our strategic approach ensures seamless digital evolution, industry-specific solutions, and sustainable growth.
                                <br />
                                <button className="btn" style={{ marginTop: 67 , }} onClick={()=>openForm()}>
                                    Learn More
                                </button>

                            </span>


                        </p>
                    </div>
                        
                    <div />
                     
                </div>
               
            </div>
            <div style={{ display: 'flex', alignItems: 'center', padding: `22px`, }}>
                <img src={NineImage} width={1470} height={400} style={{margin:82,  marginTop: -38}}/>
            </div>
            <div>
                <h2 style={{marginLeft: 610, marginTop:-36}}>About DigiTech Consulting</h2>
            </div>
            <div className="col-md-12" style={{ display: 'flex', alignItems: 'center', padding:'50px', marginLeft:'65px' }}>
                <div className="row-md-6" >
                    <img src={TenImage} width={500} height={250} style={{marginLeft: '206',}} />
                </div>
                <div className="row-md-6" style={{ height: '250px', width: '750px', backgroundColor: 'white', marginLeft:'8%' }}>
                    <div className="Our Mission"  style={{marginLeft:'217'}}>
                        <h5 className="h5" style={{marginLeft:'36%'}}>Our Mission</h5>
                        <p className="p">At DigiTech, our mission is to empower businesses through innovative IT solutions. We strive to enhance operational efficiency and drive growth in the digital landscape.</p>
                    </div>
                </div>
            </div>

        
<footer style={{ 
  backgroundColor: '#2c3e50', 
  color: 'white', 
  padding: '40px 0 20px',
  marginTop: '50px'
}}>
  <div style={{ 
    display: 'flex', 
    justifyContent: 'space-around', 
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  }}>
    {/* Company Info */}
    <div style={{ width: '300px', marginBottom: '30px' }}>
      <h4 style={{ color: '#ecf0f1', marginBottom: '15px' }}>DigiTech Consulting</h4>
      <p style={{ lineHeight: '1.6', color: '#bdc3c7' }}>
        Transforming businesses with tailored ICT, Data and AI solutions. 
        Empowering your digital journey with innovation and expertise.
      </p>
    </div>
    
    {/* Quick Links */}
    <div style={{ width: '200px', marginBottom: '30px' }}>
      <h4 style={{ color: '#ecf0f1', marginBottom: '15px' }}>Quick Links</h4>
      <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
        <li><a href="#" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Home</a></li>
        <li><a href="#" style={{ color: '#bdc3c7', textDecoration: 'none' }}>About Us</a></li>
        <li><a href="#" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Services</a></li>
        <li><a href="#" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </div>
    
    {/* Services */}
    <div style={{ width: '200px', marginBottom: '30px' }}>
      <h4 style={{ color: '#ecf0f1', marginBottom: '15px' }}>Services</h4>
      <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
        <li><a href="#" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Growth Advisory</a></li>
        <li><a href="#" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Consulting</a></li>
        <li><a href="#" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Technology Transformation</a></li>
        <li><a href="#" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Next Gen Services</a></li>
      </ul>
    </div>
    
    {/* Contact Info */}
    <div style={{ width: '300px', marginBottom: '30px' }}>
      <h4 style={{ color: '#ecf0f1', marginBottom: '15px' }}>Contact Us</h4>
      <p style={{ color: '#bdc3c7', lineHeight: '1.8' }}>
        <strong>Email:</strong> info@digitech.com<br />
        <strong>Phone:</strong> 8754594900<br />
        <strong>Address:</strong> 123 Tech Avenue, Innovation City
      </p>
      <div style={{ marginTop: '15px' }}>
        <a href="#" style={{ color: 'white', marginRight: '15px', fontSize: '20px' }}>📱</a>
        <a href="#" style={{ color: 'white', marginRight: '15px', fontSize: '20px' }}>💼</a>
        <a href="#" style={{ color: 'white', marginRight: '15px', fontSize: '20px' }}>📷</a>
        <a href="#" style={{ color: 'white', fontSize: '20px' }}>🐦</a>
      </div>
    </div>
  </div>
  
  {/* Copyright */}
  <div style={{ 
    textAlign: 'center', 
    padding: '20px', 
    borderTop: '1px solid #34495e',
    marginTop: '30px',
    color: '#bdc3c7'
  }}>
    <p>© {new Date().getFullYear()} DigiTech Consulting. All rights reserved.</p>
  </div>
</footer>
        </div>}

       {openForms &&  <Form/>}
        </>

    );
}
