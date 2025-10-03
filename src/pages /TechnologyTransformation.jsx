import React from 'react'
import FourteenImage from '../assets/fourteen14.jpg'

export default function TechnologyTransformation() {
  return (
    <div className="container">
      <h1 className="main-title" style={{marginTop:'31px'}}>Technology Transformation</h1>

      <div className="image-text-section">
        <img src={FourteenImage} alt="Technology Transformation" className="responsive-image" />
        <p className="description">
          In today’s fast-paced digital world, businesses must continuously evolve their technology
          landscape to stay competitive. At <strong>DigiTech</strong>, we provide <strong>comprehensive Technology
          Transformation services</strong>, ensuring that IT initiatives align with strategic business objectives
          and deliver measurable success.
        </p>
      </div>

      <div className="section">
        <h2>Our Approach to IT Transformation</h2>
        <p>
          We help organizations design, implement, and govern technology transformation projects with
          a structured, outcome-driven approach. Our expertise ensures seamless execution, minimizing
          risks and maximizing value.
        </p>
      </div>

      <div className="section">
        <h2>🔹 IT Transformation Governance & Strategic Alignment</h2>
        <ul>
          <li>We establish robust governance frameworks to align technology investments with business goals.</li>
          <li>Our team collaborates with Steering Committees to provide expert insights and guide decision-making.</li>
          <li>We ensure that IT transformation initiatives are executed efficiently, with clear accountability and measurable outcomes.</li>
        </ul>
      </div>

      <div className="section">
        <h2>🔹 Project Oversight & Execution Excellence</h2>
        <ul>
          <li>We offer end-to-end project management support to ensure timely and cost-effective delivery.</li>
          <li>Our advisory services help organizations navigate complex IT transformations with minimal disruption.</li>
          <li>We oversee resource allocation, budgeting, and risk mitigation to ensure smooth execution.</li>
        </ul>
      </div>

      <div className="section">
        <h2>🔹 Seamless Technology Adoption & Transition Support</h2>
        <ul>
          <li>Transitioning to new technologies can be challenging—we make it <strong>seamless and disruption-free</strong>.</li>
          <li>We develop structured <strong>change management strategies</strong> to ensure employees and stakeholders adapt quickly.</li>
          <li>Our approach ensures businesses can fully leverage their transformed IT environments for long-term success.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>✅ Strategic IT Governance –</strong> We ensure every IT initiative is well-governed and aligned with business priorities.</li>
          <li><strong>✅ Expert-Led Project Management –</strong> Our team provides hands-on guidance to execute technology transformation smoothly.</li>
          <li><strong>✅ Minimal Business Disruptions –</strong> We focus on a structured transition approach for seamless adoption.</li>
          <li><strong>✅ Long-Term Success –</strong> Our solutions are designed to maximize ROI and drive sustained digital growth.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Drive Technology Transformation with Confidence</h2>
        <p>
          Whether you’re modernizing legacy systems, migrating to the cloud, or implementing
          cutting-edge solutions, we provide the expertise and strategic oversight to ensure
          success. <br /><strong>📩 Contact us today to discuss your IT transformation needs!</strong>
        </p>
      </div>

      <style jsx>{`
        .container {
          padding: 100px 20px 40px;
          max-width: 1200px;
          margin: auto;
          font-family: Arial, sans-serif;
        }

        .main-title {
          text-align: center;
          font-size: 2.8rem;
          margin-bottom: 40px;
        }

        .image-text-section {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 60px;
          justify-content: center;
        }

        .responsive-image {
          width: 100%;
          max-width: 400px;
          height: auto;
          border-radius: 8px;
        }

        .description {
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 600px;
        }

        .section {
          margin-bottom: 50px;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 16px;
          color: #2c3e50;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.6;
        }

        ul {
          padding-left: 20px;
        }

        li {
          font-size: 1.1rem;
          margin-bottom: 12px;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2rem;
          }

          .description,
          p,
          li {
            font-size: 1rem;
          }

          .image-text-section {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
