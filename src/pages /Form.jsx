import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/contact/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let result;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        result = await response.text();
      }

      console.log('Server response:', result);
      alert('Form submitted successfully!');
      setFormData({ name: '', phone: '', email: '', country: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  // ✅ Inline Styles
  const containerStyle = {
    maxWidth: '600px',
    width: '90%',
    margin: '40px auto',
    padding: '60px 20px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const formStyle = {
    width: '100%',
    background: '#f9f9f9',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '25px',
  };

  const groupStyle = {
    marginBottom: '20px',
    width: '100%',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '15px',
    boxSizing: 'border-box',
  };

  const selectStyle = {
    ...inputStyle,
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '14px',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  };

  const handleMouseEnter = (e) => (e.target.style.backgroundColor = '#0056b3');
  const handleMouseLeave = (e) => (e.target.style.backgroundColor = '#007bff');

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Us</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        {/* Name */}
        <div style={groupStyle}>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            style={inputStyle}
          />
        </div>

        {/* Phone */}
        <div style={groupStyle}>
          <label htmlFor="phone" style={labelStyle}>Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            style={inputStyle}
          />
        </div>

        {/* Email */}
        <div style={groupStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
            style={inputStyle}
          />
        </div>

        {/* Country */}
        <div style={groupStyle}>
          <label htmlFor="country" style={labelStyle}>Country:</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            style={selectStyle}
          >
            <option value="">Select your country</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="France">France</option>
            <option value="Japan">Japan</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
