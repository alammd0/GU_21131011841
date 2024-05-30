import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import NumberTypeForm from './compnents/NumberTypeForm';
import NumberDisplay from './compnents/NumberDisplay';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetch = async (numberType) => {
    setError(null);
    setData(null);

    if (!['p', 'f', 'e', 'r'].includes(numberType)) {
      setError('Invalid number type. Please use p, f, e, or r.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/numbers/${numberType}`);
      setData(response.data);
    } catch (error) {
      setError('Failed to fetch data from the server.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Average Calculator</h1>

        <NumberTypeForm onSubmit={handleFetch}/>

        <NumberDisplay data={data} error={error}/>

      </header>
    </div>
  );
}

export default App;
