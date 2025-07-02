import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  // Fetch data from the backend API
  useEffect(() => {
    fetch('http://backend:3000/data')  // backend service address (e.g., "http://backend:3000")
      .then(response => response.json())
      .then(data => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
