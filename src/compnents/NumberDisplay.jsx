import React from 'react';

const NumberDisplay = ({ data, error }) => {
  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="result">
      <h2>Stored Numbers</h2>
      <ul>
        {data.storedNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <p><strong>Average:</strong> {data.average}</p>
    </div>
  );
};

export default NumberDisplay;
