import React, { useState, useEffect } from "react";
import ElevenImage from "../assets/eleven11.jpg";
import TwelveImage from "../assets/twelve12.jpg";
import Form from "./Form";

export default function GrowthAdvisary() {
  const [openForms, setOpenForms] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openForm = () => setOpenForms(true);

  if (openForms) return <Form />;

  return (
    <div
      style={{
        padding: isMobile ? "20px" : "40px 80px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
        color: "#222",
      }}
    >
      {/* Top section */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? "20px" : "60px",
          marginBottom: "60px",
        }}
      >
        <img
          src={ElevenImage}
          alt="Growth Advisory"
          style={{
            width: isMobile ? "100%" : "50%",
            height: isMobile ? "auto" : "450px",
            objectFit: "cover",
            marginTop: isMobile ? "100px" :"60px",
            borderRadius: "8px",
          }}
        />

        <div style={{ flex: 1, textAlign: isMobile ? "center" : "left" }}>
          <h6 style={{ marginBottom: "10px", color: "#00aaff" }}>Hello</h6>
          <h3 style={{ marginBottom: "15px", fontSize: isMobile ? "1.2rem" : "1.6rem" }}>
            At DigiTech, we specialize in driving business transformation
          </h3>
          <p style={{ lineHeight: 1.6, fontSize: isMobile ? "0.9rem" : "1rem" }}>
            We offer expert ICT consulting services for small businesses. <br />
            Let us help you streamline your technology and maximize your productivity.
          </p>
          <button
            onClick={openForm}
            style={{
              backgroundColor: "#00aaff",
              border: "none",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "15px",
              fontSize: isMobile ? "0.9rem" : "1rem",
            }}
          >
            Find More
          </button>
        </div>
      </div>

      {/* Section Title */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: isMobile ? "1.5rem" : "2rem",
        }}
      >
        Services in Growth Advisory
      </h1>

      {/* Services Section */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
          gap: isMobile ? "20px" : "40px",
          marginBottom: "60px",
        }}
      >
        <img
          src={TwelveImage}
          alt="Service"
          style={{
            width: isMobile ? "100%" : "40%",
            height: isMobile ? "auto" : "250px",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />

        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: "10px" }}>🚀 Develop Go-to-Market Strategies</h2>
          <p style={{ lineHeight: 1.6 }}>
            Successfully entering a market requires more than just a great product. We help businesses:
            <br />• Identify and engage with key industry players and partners.
            <br />• Develop market entry strategies to position your brand effectively.
            <br />• Optimize sales channels for maximum reach.
            <br />• Leverage partnerships for co-branding and joint ventures.
          </p>
        </div>
      </div>

      {/* Other sections */}
      {[
        {
          title: "📊 Evaluate Business Models & Market Potential",
          text: `A strong foundation is essential for long-term success. Our team conducts evaluations to:
          • Assess business model viability.
          • Analyze trends, customer needs, and positioning.
          • Identify differentiation opportunities.
          • Provide data-driven insights for growth.`,
        },
        {
          title: "🔧 Optimize Operations & Strategy",
          text: `Efficient operations are the backbone of growth. We help startups:
          • Streamline workflows.
          • Implement scalable processes.
          • Optimize pricing and costs.
          • Align execution with strategic goals.`,
        },
        {
          title: "🎯 Ongoing Mentorship & Industry Insights",
          text: `Execution is key. Our team provides:
          • Mentorship and expert guidance.
          • Market intelligence and best practices.
          • Vision refinement and adaptability.
          • Networking with investors and leaders.`,
        },
        {
          title: "📈 Accelerate Your Business Growth",
          text: `Whether launching, scaling, or seeking investment,
          our Growth Advisory services equip you with the right strategies,
          insights, and connections to thrive.`,
        },
      ].map((section, idx) => (
        <div
          key={idx}
          style={{
            marginBottom: "40px",
            textAlign: isMobile ? "center" : "left",
            width: "100%",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>{section.title}</h2>
          <p style={{ lineHeight: 1.6, whiteSpace: "pre-line" }}>{section.text}</p>
        </div>
      ))}

      {/* Footer Call-to-Action */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h4 style={{ marginBottom: "10px" }}>📩 Get in touch today to explore how we can help your business grow!</h4>
        <button
          onClick={openForm}
          style={{
            backgroundColor: "#00aaff",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: isMobile ? "1rem" : "1.1rem",
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
