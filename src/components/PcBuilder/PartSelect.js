import React from 'react';

function PartSelect({ partType, partData }) {
  return (
    <div className="partSelection">
      <h2>{partType}:</h2>
      <select onChange={(e) => partData.onPartSelect(JSON.parse(e.target.value))}>
        {partData.partList.map(part => (
          <option key={part._id} value={JSON.stringify(part)}>
            {part.Brand} {part.Model} - ${part.Price}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PartSelect;
