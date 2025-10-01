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
        <div>
            <div>
                <h1 style={{ paddingTop: '145px', textAlign: 'center' }}>Talent Unleashed</h1>
            </div>
            <div>
                <p style={{ textAlign: 'center', fontSize: '20px', paddingTop: '20px' }}>
                    <strong>Join Our Team</strong>
                </p>
            </div>
            <div>
                <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '30px', maxWidth: '800px', margin: '30px auto' }}>
                    Digitech's Talent Acquisition services streamline the process of finding and hiring top-tier talent. We leverage our extensive network and industry expertise to identify, attract, and secure skilled professionals who align with your company's culture and goals. Our comprehensive approach includes strategic sourcing, thorough screening, and efficient onboarding, ensuring you build a high-performing team that drives innovation and growth.
                </p>
            </div>

            {/* Error Display */}
            {error && (
                <div style={{
                    backgroundColor: '#ffebee',
                    color: '#c62828',
                    padding: '15px',
                    borderRadius: '5px',
                    margin: '20px auto',
                    maxWidth: '600px',
                    textAlign: 'center'
                }}>
                    {error}
                </div>
            )}

            {/* Applications List Section */}
            <div style={{
                
            }}>
               
                
                {applications.length > 0 ? (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            overflow: 'hidden'
                        }}>
                            <thead>
                                <tr style={{ backgroundColor: '#3498db', color: 'white' }}>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Category</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>phone_number</th>
                                    <th style={{ padding: '12px', textAlign: 'center' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map((app, index) => (
                                    <tr key={app._id || index} style={{
                                        borderBottom: '1px solid #ddd',
                                        backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white'
                                    }}>
                                        <td style={{ padding: '12px' }}>{app.name}</td>
                                        <td style={{ padding: '12px' }}>{app.email}</td>
                                        <td style={{ padding: '12px' }}>{app.category}</td>
                                        <td style={{ padding: '12px' }}>{app.phone_number}</td>
                                        <td style={{ padding: '12px', textAlign: 'center' }}>
                                            <button
                                                onClick={() => deleteApplication(app._id)}
                                                style={{
                                                    backgroundColor: '#e74c3c',
                                                    color: 'white',
                                                    border: 'none',
                                                    padding: '8px 16px',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer',
                                                    fontSize: '14px'
                                                }}
                                                onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
                                                onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    // This section has been removed - no "No applications found" message
                    null
                )}
            </div>

            {/* Application Form */}
            <div style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '10px',
                margin: '40px auto',
                maxWidth: '600px',
                boxShadow: ' rgba(0, 0, 0, )'
            }}>
                <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>
                    Apply Now {loading && '(Submitting...)'}
                </h2>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#34495e' }}>
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#34495e' }}>
                            Email Address *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#34495e' }}>
                            phone_number Number *
                        </label>
                        <input
                            type="tel"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#34495e' }}>
                            Address *
                        </label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            rows="3"
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px',
                                resize: 'vertical'
                            }}
                        ></textarea>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#34495e' }}>
                            Category *
                        </label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#34495e' }}>
                            Message *
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px',
                                resize: 'vertical'
                            }}
                        ></textarea>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#34495e' }}>
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
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px',
                                backgroundColor: 'white'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            backgroundColor: loading ? '#95a5a6' : '#3498db',
                            color: 'white',
                            padding: '14px 28px',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            width: '100%',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => !loading && (e.target.style.backgroundColor = '#2980b9')}
                        onMouseOut={(e) => !loading && (e.target.style.backgroundColor = '#3498db')}
                    >
                        {loading ? 'Submitting...' : 'Submit Application'}
                    </button>
                </form>
            </div>
        </div>
    )
}