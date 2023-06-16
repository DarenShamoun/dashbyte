import React from 'react';

function PCBuilder({ selectedParts, onPartSelect }) {
  // A list of PC parts (you can replace this with actual data)
  const parts = [
    { id: 1, name: 'CPU 1', price: 100 },
    { id: 2, name: 'CPU 2', price: 200 },
    { id: 3, name: 'GPU 1', price: 300 },
    { id: 4, name: 'GPU 2', price: 400 },
    // add more parts as needed...
  ];

  return (
    <div>
      <h1>PC Builder Page</h1>
      <p>Select parts to build your PC:</p>
      <ul>
        {parts.map(part => (
          <li key={part.id}>
            {part.name} - ${part.price}
            <button onClick={() => onPartSelect(part)}>Select</button>
          </li>
        ))}
      </ul>
      <h2>Selected Parts:</h2>
      <ul>
        {selectedParts.map(part => (
          <li key={part.id}>
            {part.name} - ${part.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PCBuilder;
