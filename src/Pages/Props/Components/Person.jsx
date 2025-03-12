import React from 'react'

const Person = (props) => {
    return (
      <div style={personStyle}>
        <h2>Person Info</h2>
        <p><strong>Name:</strong> {props.name}</p>
        <p><strong>Age:</strong> {props.age}</p>
      </div>
    );
  };

  const personStyle = {
    backgroundColor: '#ecf0f1',
    borderRadius: '5px',
    padding: '10px',
    marginTop: '15px',
    textAlign: 'left',
  };
  

export default Person