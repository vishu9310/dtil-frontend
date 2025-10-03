import React, { useState, useEffect } from "react";
import SixteenImage from "../assets/sixteen16.jpg";

export default function Csr() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        padding: isMobile ? "20px" : "60px 100px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
        color: "#222",
        lineHeight: 1.6,
      }}
    >
      {/* Page Title */}
      <div style={{ textAlign: "center", paddingTop: isMobile ? "80px" : "140px" }}>
        <h1 style={{ fontSize: isMobile ? "1.6rem" : "2rem", marginTop:'-77px'}}>
          Our Commitment to Social Responsibility
        </h1>
      </div>

      {/* Image + Intro Section */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? "20px" : "60px",
          marginTop: "40px",
        }}
      >
        <img
          src={SixteenImage}
          alt="Corporate Social Responsibility"
          style={{
            width: isMobile ? "100%" : "40%",
            height: isMobile ? "auto" : "260px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
        <p
          style={{
            flex: 1,
            fontSize: isMobile ? "1rem" : "1.2rem",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          At DigiTech, we believe that business success goes hand in hand with
          social and environmental responsibility. Our Corporate Social
          Responsibility (CSR) initiatives are designed to create a lasting
          positive impact on society, the environment, and the communities we
          serve.
        </p>
      </div>

      {/* Section 1 */}
      <div style={{ marginTop: "50px", textAlign: isMobile ? "center" : "left" }}>
        <h2 style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
          🌍 Sustainability & Environmental Stewardship
        </h2>
        <p style={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}>
          We are committed to reducing our carbon footprint and promoting
          eco-friendly practices by: <br />
          • Implementing sustainable operations and reducing waste. <br />
          • Supporting renewable energy and resource conservation. <br />
          • Partnering with environmental organizations for a greener future.
        </p>
      </div>

      {/* Section 2 */}
      <div style={{ marginTop: "40px", textAlign: isMobile ? "center" : "left" }}>
        <h2 style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
          🤝 Community Engagement & Social Impact
        </h2>
        <p style={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}>
          Giving back is at the heart of our values. We support local and global
          communities through: <br />
          • Philanthropic initiatives and charitable donations. <br />
          • Volunteer programs that encourage employee participation. <br />
          • Partnerships with nonprofits to drive meaningful change.
        </p>
      </div>

      {/* Section 3 */}
      <div style={{ marginTop: "40px", textAlign: isMobile ? "center" : "left" }}>
        <h2 style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
          📚 Education & Skill Development
        </h2>
        <p style={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}>
          Integrity and inclusivity drive our business. We foster: <br />
          • A diverse and inclusive workplace culture. <br />
          • Fair labor practices and ethical sourcing. <br />
          • Transparency in corporate governance and decision-making.
        </p>
      </div>

      {/* Section 4 */}
      <div style={{ marginTop: "40px", textAlign: isMobile ? "center" : "left" }}>
        <h2 style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
          Transparency in Corporate Governance
        </h2>
        <p style={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}>
          At DigiTech, CSR is not just an obligation — it’s a core part of who
          we are. We continuously strive to make a difference through
          responsible business practices and meaningful initiatives.
        </p>
      </div>

      {/* Section 5 */}
      <div style={{ marginTop: "50px", textAlign: isMobile ? "center" : "left" }}>
        <h2 style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
          📩 Join Us in Making an Impact!
        </h2>
        <p style={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}>
          If you’d like to collaborate on a social initiative or learn more
          about our CSR efforts, get in touch with us today.
        </p>
      </div>
    </div>
  );
}
