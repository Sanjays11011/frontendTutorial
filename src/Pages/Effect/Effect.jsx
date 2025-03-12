import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  // State to store fetched data
  const [data, setData] = useState(null);
  // State to handle loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function to fetch data
    const fetchData = async () => {
      try {
        // Simulate a network request delay
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data); // Set the fetched data to state
      } catch (error) {
        setError(error.message); // Set error state if the fetch fails
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    // Call the fetch function
    fetchData();

    // Cleanup function (optional): Cancel or abort fetch if the component is unmounted
    return () => {
      console.log('Cleanup: Component unmounted or effect re-run');
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={containerStyle}>
      <h1>Fetched Data</h1>
      <ul>
        {data.slice(0, 5).map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline styling for the components
const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
  width: '80%',
  margin: '20px auto',
};

export default DataFetchingComponent;
