import React from 'react';
import SeventeenImage from '../assets/sixteen16.jpg';
import EighteenImage from '../assets/eighteen18.jpg';
import NineteenImage from '../assets/ninteen19.jpg';
import TwentyImage from '../assets/tewnty20.jpg';
import TwentyOneImage from '../assets/twentyone21.jpg';

export default function OurSolutions() {
  return (
    <div className="solutions-container">
      <h1 className="section-title" style={{marginTop:'49px'}}>Our Solutions </h1>

      {/* Section 1 */}
      <div className="section">
        <div className="section-block">
          <img src={SeventeenImage} alt="Business Insights" />
          <div className="text-block">
            <h2>Business Value and Outcome Based Insights</h2>
            <p>
              <strong>• Predictive Analytical Tools:</strong> It's about showing the real-world impact of data. <br />
              <strong>• Actionable Insights:</strong> Providing information that leads to strategic decisions. <br />
              <strong>• Data Visualization:</strong> Making complex data easy to understand. <br />
              <strong>• Performance Optimization:</strong> Helping businesses improve their results. <br />
              <strong>• Direct ROI:</strong> Demonstrating the return on investment. <br />
            </p>
          </div>
        </div>

        <div className="section-block reverse">
          <img src={EighteenImage} alt="Predictive Tools" />
          <div className="text-block">
            <h2>Predictive Analytical Tools</h2>
            <p>
              <strong>• Forecasting:</strong> Predicting future trends. <br />
              <strong>• Machine Learning:</strong> Using algorithms for accurate predictions. <br />
              <strong>• Proactive Decisions:</strong> Enabling businesses to act ahead of time. <br />
              <strong>• Optimization:</strong> Improving resource allocation and efficiency. <br />
              <strong>• Risk Mitigation:</strong> Identifying and mitigating potential risks. <br />
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section">
        <div className="section-block">
          <img src={NineteenImage} alt="IoT and AI" />
          <div className="text-block">
            <h2>IOT, Data and AI Solutions</h2>
            <p>
              <strong>• Connectivity:</strong> Connecting devices through IoT. <br />
              <strong>• Data Processing:</strong> Collecting and processing large datasets. <br />
              <strong>• AI-Driven Analytics:</strong> Using AI to extract insights. <br />
              <strong>• Automation:</strong> Automating processes for efficiency. <br />
              <strong>• Innovation:</strong> Creating new products and services. <br />
              <strong>• Real-time Monitoring:</strong> Providing up-to-the-minute data analysis. <br />
              <strong>• Predictive Maintenance:</strong> Anticipating maintenance needs. <br />
              <strong>• Personalized Experiences:</strong> Tailoring solutions to customer needs. <br />
            </p>
          </div>
        </div>

        <div className="section-block reverse">
          <img src={TwentyImage} alt="Network Transformation" />
          <div className="text-block">
            <h2>Network Transformation</h2>
            <p>
              <strong>• Modernization:</strong> Upgrading network infrastructure. <br />
              <strong>• Optimization:</strong> Improving performance and security. <br />
              <strong>• Scalability:</strong> Ensuring the network can grow with the business. <br />
              <strong>• Cloud Integration:</strong> Connecting networks to cloud services. <br />
              <strong>• Automation:</strong> Streamlining network operations. <br />
              <strong>• Agility:</strong> Enabling faster response to changing needs. <br />
              <strong>• Efficiency:</strong> Reducing costs and improving operations. <br />
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section">
        <div className="section-block centered">
          <img src={TwentyOneImage} alt="IT Security" />
          <div className="text-block">
            <h2>IT Security as a Service</h2>
            <p>
              Digitech's IT Security as a Service provides comprehensive protection for your organization's digital assets. <br />
              We deliver a range of security solutions through a subscription-based model, including:
            </p>
            <p>
              <strong>• Data loss prevention:</strong> Prevent sensitive data from being lost or stolen. <br />
              <strong>• Business continuity and disaster recovery:</strong> Ensure operations during crises. <br />
              <strong>• Identity and access management:</strong> Control access to your systems and data. <br />
              <strong>• Email security:</strong> Protect email from spam, phishing, and threats. <br />
              <strong>• Network security:</strong> Secure your network from intrusions. <br />
              <strong>• Web security:</strong> Protect web applications from threats. <br />
            </p>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .solutions-container {
          padding: 80px 20px;
          font-family: 'Arial', sans-serif;
        }

        .section-title {
          text-align: center;
          font-size: 36px;
          margin-bottom: 50px;
        }

        .section-block {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .section-block.reverse {
          flex-direction: row-reverse;
        }

        .section-block img {
          width: 350px;
          max-width: 100%;
          border-radius: 10px;
          object-fit: cover;
        }

        .text-block {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
        }

        .text-block h2 {
          font-size: 24px;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .text-block p {
          font-size: 18px;
          line-height: 1.6;
          color: #444;
        }

        .centered {
          flex-direction: column;
          text-align: center;
        }

        @media (max-width: 768px) {
          .section-block,
          .section-block.reverse {
            flex-direction: column;
          }

          .text-block {
            text-align: center;
          }

          .text-block p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
