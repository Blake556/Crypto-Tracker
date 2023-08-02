import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data.users);
      }
    )
  }, []);

  return (
    <div className="App">
      {(backendData.length === 0) ? (
        <p>Loading...</p>
      ) : (
        backendData.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  );
}

export default App;


