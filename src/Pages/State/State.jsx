import React, { useState } from 'react';

const State = () => {
  // Declare a state variable to hold the counter value
  const [count, setCount] = useState(0);

  // Handle increase, decrease, and reset
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={containerStyle}>
      <h1>JSX Counter Example</h1>
      <p style={counterStyle}>
        Current Count: <strong>{count}</strong>
      </p>
      <div style={buttonContainerStyle}>
        <button onClick={increase} style={buttonStyle}>Increase</button>
        <button onClick={decrease} style={buttonStyle}>Decrease</button>
        <button onClick={reset} style={buttonStyle}>Reset</button>
      </div>
      {count === 0 && <p style={infoStyle}>The counter is at zero!</p>}
      {count > 10 && <p style={infoStyle}>You’ve reached a high count!</p>}
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

const counterStyle = {
  fontSize: '24px',
  margin: '20px 0',
  fontWeight: 'bold',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s',
};

const infoStyle = {
  color: '#e74c3c',
  fontSize: '16px',
  fontStyle: 'italic',
};

export default State;
