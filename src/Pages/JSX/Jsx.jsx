import React, { useState } from 'react';

const Jsx = () => {
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');

  // Handle input changes for form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(''); // Clear the error message when the user starts typing
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;

    // Simple form validation
    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }

    // Display form data on successful submission
    alert(`Form Submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setError('');
  };

  return (
    <div style={containerStyle}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={textareaStyle}
          />
        </div>

        {error && <p style={errorStyle}>{error}</p>}

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>

      <div style={submittedDataStyle}>
        <h2>Submitted Data</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Message:</strong> {formData.message}</p>
      </div>
    </div>
  );
};

// Inline styling for the components
const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
  width: '400px',
  margin: '0 auto',
};

const inputGroupStyle = {
  margin: '15px 0',
  textAlign: 'left',
};

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  marginBottom: '5px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '14px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '14px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  minHeight: '100px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

const errorStyle = {
  color: '#e74c3c',
  fontSize: '14px',
  marginTop: '10px',
};

const submittedDataStyle = {
  marginTop: '20px',
  padding: '15px',
  backgroundColor: '#ecf0f1',
  borderRadius: '8px',
  textAlign: 'left',
};

export default Jsx;
