import React, { useState, useEffect } from "react";
import ThirteenImage from "../assets/thirteen13.jpg";

export default function ConsultingAndAdvisory() {
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
      {/* Title */}
      <div style={{ textAlign: "center", paddingTop: isMobile ? "80px" : "130px" }}>
        <h1 style={{ fontSize: isMobile ? "1.6rem" : "2rem" }}>
          Consulting & Advisory Services
        </h1>
      </div>

      {/* Hero Section */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
          gap: isMobile ? "20px" : "60px",
        }}
      >
        <img
          src={ThirteenImage}
          alt="Consulting"
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
          At DigiTech, we empower businesses to harness the full potential of
          technology through strategic consulting and advisory services. Our
          expertise in <strong>Digital Transformation, IT Strategy, and Emerging
          Technologies</strong> helps organizations stay ahead in an
          ever-evolving digital landscape.
        </p>
      </div>

      {/* Section 1 */}
      <div
        style={{
          textAlign: isMobile ? "center" : "left",
          marginTop: "50px",
        }}
      >
        <p style={{ fontSize: isMobile ? "1rem" : "1.1rem" }}>
          We go beyond traditional consulting by providing tailored strategies
          that align technology initiatives with your business vision. Our
          focus is on:
        </p>

        <h2 style={{ marginTop: "20px", fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
          ✅ Crafting Multi-Year IT Strategies & Roadmaps
        </h2>
        <p style={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}>
          • We work closely with organizations to design a long-term, scalable
          IT strategy. <br />
          • Our structured approach ensures technology adoption aligns with
          business objectives. <br />
          • We help businesses future-proof operations with sustainable digital
          frameworks.
        </p>
      </div>

      {/* Section 2 */}
      <div
        style={{
          textAlign: isMobile ? "center" : "left",
          marginTop: "40px",
        }}
      >
        <h2 style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
          ✅ Implementing Cutting-Edge Technologies
        </h2>
        <p style={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}>
          We provide expert guidance on leveraging the latest advancements,
          including: <br />
          • <strong>Internet of Things (IoT):</strong> Connecting devices and
          systems to optimize operations. <br />
          • <strong>Robotic Process Automation (RPA):</strong> Automating
          repetitive tasks for improved efficiency. <br />
          • <strong>Advanced Analytics & AI:</strong> Enhancing decision-making
          with data-driven insights. <br />
          • <strong>Cybersecurity Solutions:</strong> Strengthening security
          frameworks to protect digital assets.
        </p>
      </div>

      {/* Section 3 */}
      <div
        style={{
          textAlign: isMobile ? "center" : "left",
          marginTop: "40px",
        }}
      >
        <h2 style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
          ✅ Cloud Strategy & Migration
        </h2>
        <p style={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}>
          A seamless cloud adoption strategy is critical for agility. We help
          with: <br />
          • <strong>Developing a migration roadmap:</strong> Smooth transition
          to the cloud. <br />
          • <strong>Enhancing scalability & flexibility:</strong> Through
          cloud-native solutions. <br />
          • <strong>Improving cost-efficiency:</strong> By optimizing cloud
          infrastructure. <br />
          • <strong>Ensuring security & compliance:</strong> With robust
          governance.
        </p>
      </div>

      {/* Section 4 */}
      <div
        style={{
          textAlign: isMobile ? "center" : "left",
          marginTop: "40px",
        }}
      >
        <h2 style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
          Why Choose Our Consulting Services?
        </h2>
        <p style={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}>
          <strong>🚀 Strategic Alignment:</strong> We ensure technology
          investments drive business value. <br />
          <strong>🔍 Innovation-Driven Approach:</strong> Stay competitive with
          emerging technologies. <br />
          <strong>💡 End-to-End Support:</strong> From strategy to execution,
          we guide you at every step. <br />
          <strong>🤝 Collaborative Partnership:</strong> We work closely with
          your team to address unique challenges. <br />
          <strong>📈 Sustainable Growth Focus:</strong> Our solutions are
          designed for long-term success.
        </p>
      </div>

      {/* Section 5 */}
      <div
        style={{
          textAlign: isMobile ? "center" : "left",
          marginTop: "50px",
        }}
      >
        <h2 style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
          Partner with Us for Your Digital Transformation Journey
        </h2>
        <p style={{ fontSize: isMobile ? "0.95rem" : "1.1rem" }}>
          Whether you’re looking to optimize operations, enhance security, or
          drive innovation, our consulting services provide the expertise you
          need to succeed. <br />
          <strong>📩 Get in touch today to start your transformation!</strong>
        </p>
      </div>
    </div>
  );
}
