import React from 'react';

// Child component that receives props
import Person from './Components/Person';

// Parent component that passes props to the child
const Parent = () => {
  const personName = "Jefinrojar J";
  const personAge = 20;

  return (
    <div style={containerStyle}>
      <h1>Parent Component</h1>
      <Person name={personName} age={personAge} />
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


export default Parent;
