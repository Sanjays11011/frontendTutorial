import React, { useState } from 'react';

const FunctionalComponentTut = () => {
    // State management using useState hook
    const [message, setMessage] = useState('Hello, Functional Component!');

    // Event handler function
    const handleClick = () => {
        setMessage('Button Clicked!');
    };

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default FunctionalComponentTut;