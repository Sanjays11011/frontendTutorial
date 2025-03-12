import React, { useState, useRef } from 'react';

const Ref = () => {
  // Ref to access the input element
  const inputRef = useRef(null);
  // Ref to track focus count without re-rendering
  const focusCountRef = useRef(0);

  // State to store the focus count for display
  const [focusCount, setFocusCount] = useState(0);

  // Handle the input focus
  const handleFocus = () => {
    focusCountRef.current += 1; // Increment focus count stored in ref
    setFocusCount(focusCountRef.current); // Update the state for display
  };

  // Handle button click to focus on the input
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Handle scroll to input field
  const scrollToInput = () => {
    inputRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={containerStyle}>
      <h1>Advanced useRef Example</h1>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Focus me or scroll to me"
          onFocus={handleFocus}
          style={inputStyle}
        />
        <div>
          <p>Focus Count: {focusCount}</p>
        </div>
      </div>
      
      <div style={buttonContainerStyle}>
        <button onClick={focusInput} style={buttonStyle}>
          Focus the input
        </button>
        <button onClick={scrollToInput} style={buttonStyle}>
          Scroll to input
        </button>
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
  width: '300px',
  margin: '0 auto',
};

const inputStyle = {
  padding: '10px',
  fontSize: '14px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonContainerStyle = {
  marginTop: '15px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  margin: '5px',
};

export default Ref;
