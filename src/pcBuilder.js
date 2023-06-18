import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './pcBuilder.module.css'; // Import the styles

function PcBuilder() {
  const [cpu, setCpu] = useState([]);
  const [gpu, setGpu] = useState([]);
  const [ram, setRam] = useState([]);
  const [ssd, setSsd] = useState([]);
  const [hdd, setHdd] = useState([]);
  const [usb, setUsb] = useState([]);
  const [selectedParts, setSelectedParts] = useState([]);

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const cpu = await axios.get('http://localhost:5000/api/parts/cpu');
        setCpu(cpu.data);
        const gpu = await axios.get('http://localhost:5000/api/parts/gpu');
        setGpu(gpu.data);
        const ram = await axios.get('http://localhost:5000/api/parts/ram');
        setRam(ram.data);
        const ssd = await axios.get('http://localhost:5000/api/parts/ssd');
        setSsd(ssd.data);
        const hdd = await axios.get('http://localhost:5000/api/parts/hdd');
        setHdd(hdd.data);
        const usb = await axios.get('http://localhost:5000/api/parts/usb');
        setUsb(usb.data);
      } catch (err) {
        console.error(`Failed to fetch parts: ${err}`);
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
    <div className={styles.pcBuilder}>
      <h1>PC Builder Page</h1>
      <p>Select parts to build your PC:</p>
      <div className={styles.partSelection}>
        <h2>CPU:</h2>
        <select onChange={(e) => onPartSelect(JSON.parse(e.target.value))}>
          {cpu.map(part => (
            <option key={part._id} value={JSON.stringify(part)}>
              {part.Brand} {part.Model} - ${part.Price}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.partSelection}>
        <h2>GPU:</h2>
        <select onChange={(e) => onPartSelect(JSON.parse(e.target.value))}>
          {gpu.map(part => (
            <option key={part._id} value={JSON.stringify(part)}>
              {part.Brand} {part.Model} - ${part.Price}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.partSelection}>
        <h2>RAM:</h2>
        <select onChange={(e) => onPartSelect(JSON.parse(e.target.value))}>
          {ram.map(part => (
            <option key={part._id} value={JSON.stringify(part)}>
              {part.Brand} {part.Model} - ${part.Price}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.partSelection}>
        <h2>SSD:</h2>
        <select onChange={(e) => onPartSelect(JSON.parse(e.target.value))}>
          {ssd.map(part => (
            <option key={part._id} value={JSON.stringify(part)}>
              {part.Brand} {part.Model} - ${part.Price}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.partSelection}>
        <h2>HDD:</h2>
        <select onChange={(e) => onPartSelect(JSON.parse(e.target.value))}>
          {hdd.map(part => (
            <option key={part._id} value={JSON.stringify(part)}>
                            {part.Brand} {part.Model} - ${part.Price}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.partSelection}>
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
