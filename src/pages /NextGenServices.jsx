import React from 'react'
import FiveteenImage from '../assets/fiveteen15.jpg'

export default function NextGenServices() {
  return (
    <div className="container">
      <h1 className="title">Next-Gen Services</h1>

      <div className="image-section">
        <img src={FiveteenImage} alt="Next-Gen" className="service-image" />
        <p className="intro">
          As businesses embrace digital transformation, adopting next-generation technologies is
          crucial for staying ahead of the competition. At <strong>DigiTech</strong>, we offer
          <strong> cutting-edge solutions</strong> designed to <strong> enhance efficiency, elevate customer
          experiences, and strengthen security.</strong>
        </p>
      </div>

      <div className="section">
        <h2>Our Next-Gen Technology Solutions</h2>
        <p>
          We enable businesses to harness the power of AI, automation, IoT, and advanced security
          frameworks to drive innovation and growth.
        </p>
      </div>

      <div className="section">
        <h2>🌟 Customer Experience Tools – Personalization & Optimization</h2>
        <ul>
          <li><strong>AI-driven customer insights:</strong> To personalize user journeys.</li>
          <li><strong>Omnichannel engagement platforms:</strong> For seamless interactions.</li>
          <li><strong>Chatbots & Virtual Assistants:</strong> To enhance real-time support.</li>
          <li><strong>Customer feedback systems:</strong> To continuously improve service quality.</li>
          <li><strong>Behavior analytics & sentiment analysis:</strong> To improve customer satisfaction.</li>
        </ul>
      </div>

      <div className="section">
        <h2>📡 IoT & AIOps – Real-Time Monitoring & Automation</h2>
        <ul>
          <li><strong>Real-time asset monitoring</strong> for predictive maintenance.</li>
          <li><strong>Automated anomaly detection</strong> to prevent operational disruptions.</li>
          <li><strong>AI-powered IT automation</strong> to optimize workflows and reduce downtime.</li>
          <li><strong>Smart device integration</strong> for intelligent business operations.</li>
        </ul>
      </div>

      <div className="section">
        <h2>🧠 AI/ML Platforms – Actionable Insights for Smarter Decisions</h2>
        <ul>
          <li><strong>Turn raw data into predictive insights</strong> for informed decision-making.</li>
          <li><strong>Automate repetitive processes</strong> using AI-driven analytics.</li>
          <li><strong>Enhance forecasting models</strong> for demand planning and risk management.</li>
          <li><strong>Improve fraud detection</strong> with AI-powered anomaly detection.</li>
        </ul>
      </div>

      <div className="section">
        <h2>🛡️ Security & Governance – Strengthening Digital Protection</h2>
        <ul>
          <li><strong>Build robust security frameworks</strong> with advanced threat detection.</li>
          <li><strong>Automate governance and compliance</strong> to reduce risks.</li>
          <li><strong>Implement Zero Trust security models</strong> for enhanced access control.</li>
          <li><strong>Use AI-driven cybersecurity</strong> to detect and mitigate threats in real time.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Why Choose Our Next-Gen Services?</h2>
        <ul>
          <li><strong>✅ AI-Driven Innovation –</strong> We integrate AI and automation to optimize operations and customer experiences.</li>
          <li><strong>✅ Future-Ready Solutions –</strong> Our services ensure businesses stay ahead in a dynamic digital landscape.</li>
          <li><strong>✅ Enterprise-Grade Security –</strong> We prioritize security and compliance to safeguard critical business assets.</li>
          <li><strong>✅ Seamless Integration –</strong> Our solutions work across multiple platforms for a unified transformation.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Transform Your Business with Next-Gen Technology</h2>
        <p>
          From AI-powered insights to intelligent automation, our Next-Gen Services drive innovation,
          efficiency, and security. <br /><strong>📩 Get in touch with us today to explore how our Next-Gen
          solutions can elevate your business!</strong>
        </p>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: auto;
          padding: 100px 20px 40px;
          font-family: Arial, sans-serif;
        }

        .title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 40px;
        }

        .image-section {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          gap: 40px;
          justify-content: center;
          margin-bottom: 60px;
        }

        .service-image {
          max-width: 100%;
          width: 350px;
          height: auto;
          border-radius: 8px;
        }

        .intro {
          max-width: 600px;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .section {
          margin-bottom: 50px;
        }

        h2 {
          color: #2c3e50;
          font-size: 1.6rem;
          margin-bottom: 16px;
        }

        p, li {
          font-size: 1.1rem;
          line-height: 1.6;
        }

        ul {
          padding-left: 20px;
        }

        li {
          margin-bottom: 12px;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }

          .intro,
          p,
          li {
            font-size: 1rem;
          }

          .image-section {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}
