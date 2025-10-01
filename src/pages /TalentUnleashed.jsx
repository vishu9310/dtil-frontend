import React from 'react'
import { useState, useEffect } from 'react';

export default function TalentUnleashed() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        address: '',
        message: '',
        category: '',
        resume: null
    });

    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    // Fetch applications from backend API
    const fetchApplications = async () => {
        try {
            setLoading(true);
            setError('');
            const response = await fetch('http://localhost:8000/api/applications');
            
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || `HTTP error! status: ${response.status}`);
            }
            
            // Check if response is JSON
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                setApplications(data);
            } else {
                const text = await response.text();
                console.warn('Non-JSON response received:', text);
                setApplications([]); // Set empty array instead of failing
            }
        } catch (err) {
            setError('Error fetching applications: ' + err.message);
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    // Fetch applications when component mounts
    useEffect(() => {
        fetchApplications();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Create FormData object to handle file upload
            const submitData = new FormData();
            submitData.append('name', formData.name);
            submitData.append('email', formData.email);
            submitData.append('phone_number', formData.phone_number);
            submitData.append('address', formData.address);
            submitData.append('message', formData.message);
            submitData.append('category', formData.category);
            if (formData.resume) {
                submitData.append('resume', formData.resume);
            }

            const response = await fetch('http://localhost:8000/api/talent/create', {
                method: 'POST',
                body: submitData,
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || `HTTP error! status: ${response.status}`);
            }

            // Try to parse as JSON, but handle non-JSON responses
            let result;
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                result = await response.json();
            } else {
                result = await response.text();
            }
            
            console.log('Application submitted:', result);
            
            alert('Thank you for your application! We will review your information and get back to you soon.');
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone_number: '',
                address: '',
                message: '',
                category: '',
                resume: null
            });

            // Refresh applications list
            fetchApplications();

        } catch (err) {
            setError('Error submitting application: ' + err.message);
            console.error('Error:', err);
            alert('There was an error submitting your application. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Delete application function
    const deleteApplication = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/applications/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || `HTTP error! status: ${response.status}`);
            }

            // Refresh applications list
            fetchApplications();
            alert('Application deleted successfully!');
        } catch (err) {
            setError('Error deleting application: ' + err.message);
            console.error('Error:', err);
        }
    };
return (
    <div
      style={{
        padding: isMobile ? "80px 16px 40px" : "100px 40px 60px",
        maxWidth: "1200px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
        color: "#2c3e50",
      }}
    >
      {/* Title Section */}
      <h1
        style={{
          textAlign: "center",
          fontSize: isMobile ? "2rem" : "2.8rem",
          marginBottom: "10px",
          marginTop:"15px"
        }}
      >
        Talent Unleashed
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: isMobile ? "1.1rem" : "1.3rem",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Join Our Team
      </p>

      <p
        style={{
          textAlign: "center",
          fontSize: isMobile ? "1rem" : "1.1rem",
          margin: "20px auto",
          maxWidth: "800px",
          lineHeight: "1.6",
        }}
      >
        Digitech's Talent Acquisition services streamline the process of finding
        and hiring top-tier talent. We leverage our extensive network and
        industry expertise to identify, attract, and secure skilled
        professionals who align with your company's culture and goals. Our
        comprehensive approach includes strategic sourcing, thorough screening,
        and efficient onboarding — ensuring you build a high-performing team
        that drives innovation and growth.
      </p>

      {/* Error Message */}
      {error && (
        <div
          style={{
            backgroundColor: "#ffebee",
            color: "#c62828",
            padding: "15px",
            borderRadius: "6px",
            margin: "20px auto",
            maxWidth: "600px",
            textAlign: "center",
          }}
        >
          {error}
        </div>
      )}

      {/* Applications Table */}
      {applications.length > 0 && (
        <div style={{ overflowX: "auto", marginTop: "30px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "white",
            }}
          >
            <thead>
              <tr>
                {["Name", "Email", "Category", "Phone", "Actions"].map((header) => (
                  <th
                    key={header}
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      backgroundColor: "#3498db",
                      color: "white",
                      fontSize: isMobile ? "0.9rem" : "1rem",
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={app._id || index}>
                  <td style={{ padding: "12px" }}>{app.name}</td>
                  <td style={{ padding: "12px" }}>{app.email}</td>
                  <td style={{ padding: "12px" }}>{app.category}</td>
                  <td style={{ padding: "12px" }}>{app.phone_number}</td>
                  <td style={{ padding: "12px" }}>
                    <button
                      onClick={() => deleteApplication(app._id)}
                      style={{
                        backgroundColor: "#e74c3c",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = "#c0392b")}
                      onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Application Form */}
      <div
        style={{
          backgroundColor: "white",
          padding: isMobile ? "20px" : "40px",
          borderRadius: "10px",
          marginTop: "50px",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#2c3e50",
            fontSize: isMobile ? "1.3rem" : "1.7rem",
          }}
        >
          Apply Now {loading && "(Submitting...)"}
        </h2>

        <form onSubmit={handleSubmit}>
          {[
            { label: "Full Name", name: "name", type: "text" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Phone Number", name: "phone_number", type: "tel" },
            { label: "Category", name: "category", type: "text" },
          ].map(({ label, name, type }) => (
            <div key={name} style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#34495e",
                  fontSize: isMobile ? "0.95rem" : "1rem",
                }}
              >
                {label} *
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                  boxSizing: "border-box",
                }}
              />
            </div>
          ))}

          {/* Address */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#34495e",
              }}
            >
              Address *
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              required
              disabled={loading}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#34495e",
              }}
            >
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              disabled={loading}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* File Upload */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#34495e",
              }}
            >
              Attach Resume (PDF, DOC, DOCX) *
            </label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              required
              accept=".pdf,.doc,.docx"
              disabled={loading}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: "white",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: "#3498db",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );

}