import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PcBuilder() {
  const [cpu, setCpu] = useState([]);
  const [gpu, setGpu] = useState([]);
  const [ram, setRam] = useState([]);
  const [ssd, setSsd] = useState([]);
  const [hdd, setHdd] = useState([]);
  const [usb, setUsb] = useState([]);
  const [selectedParts, setSelectedParts] = useState([]);

  useEffect(() => {
    const fetchParts = async (partType, setPartState) => {
      try {
        const response = await axios.get(`/api/parts/${partType}`);
        console.log(`Fetched ${partType}:`, response.data); // Add this line
        setPartState(response.data);
      } catch (error) {
        console.error(`Failed to fetch ${partType}: ${error}`);
      }
    };
    

    fetchParts('cpu', setCpu);
    fetchParts('gpu', setGpu);
    fetchParts('ram', setRam);
    fetchParts('ssd', setSsd);
    fetchParts('hdd', setHdd);
    fetchParts('usb', setUsb);
  }, []);

  const onPartSelect = (part) => {
    setSelectedParts(prevParts => [...prevParts, part]);
  };

  return (
    <div>
      <h1>PC Builder Page</h1>
      <p>Select parts to build your PC:</p>
      <div>
        <h2>CPU:</h2>
        <select onChange={(e) => onPartSelect(JSON.parse(e.target.value))}>
          {cpu.map(part => (
            <option key={part._id} value={JSON.stringify(part)}>
              {part.Brand} {part.Model} - ${part.Price}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>GPU:</h2>
        <select onChange={(e) => onPartSelect(JSON.parse(e.target.value))}>
          {gpu.map(part => (
            <option key={part._id} value={JSON.stringify(part)}>
              {part.Brand} {part.Model} - ${part.Price}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>RAM:</h2>
        <select onChange={(e) => onPartSelect(JSON.parse(e.target.value))}>
          {ram.map(part => (
            <option key={part._id} value={JSON.stringify(part)}>
              {part.Brand} {part.Model} - ${part.Price}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>SSD:</h2>
        <select onChange={(e) => onPartSelect(JSON.parse(e.target.value))}>
          {ssd.map(part => (
            <option key={part._id} value={JSON.stringify(part)}>
              {part.Brand} {part.Model} - ${part.Price}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>HDD:</h2>
        <select onChange={(e) => onPartSelect(JSON.parse(e.target.value))}>
          {hdd.map(part => (
            <option key={part._id} value={JSON.stringify(part)}>
              {part.Brand} {part.Model} - ${part.Price}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>USB:</h2>
        <select onChange={(e) => onPartSelect(JSON.parse(e.target.value))}>
          {usb.map(part => (
            <option key={part._id} value={JSON.stringify(part)}>
              {part.Brand} {part.Model} - ${part.Price}
            </option>
          ))}
        </select>
      </div>
      <h2>Selected Parts:</h2>
      <ul>
        {selectedParts.map(part => (
          <li key={part._id}>
            {part.Brand} {part.Model} - ${part.Price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PcBuilder;
