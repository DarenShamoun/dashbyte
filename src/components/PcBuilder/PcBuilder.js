import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './pc-builder.module.css'; // Import the styles

function PcBuilder() {
  const [cpu, setCpu] = useState([]);
  const [gpu, setGpu] = useState([]);
  const [ram, setRam] = useState([]);
  const [ssd, setSsd] = useState([]);
  const [hdd, setHdd] = useState([]);
  const [usb, setUsb] = useState([]);
  const [selectedParts, setSelectedParts] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    const fetchParts = async (partType, setPartState) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/parts/${partType}`);
        setPartState(response.data);
      } catch (err) {
        console.error(`Failed to fetch parts: ${err}`);
      }
    };
  
    fetchParts('CPU', setCpu);
    fetchParts('GPU', setGpu);
    fetchParts('RAM', setRam);
    fetchParts('SSD', setSsd);
    fetchParts('HDD', setHdd);
    fetchParts('USB', setUsb);    
  }, []);
  

  const onPartSelect = (part) => {
    setSelectedParts(prevParts => [...prevParts, part]);
  };

  const onChatSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/chat', {
        messages: [...chatMessages, { role: 'user', content: userMessage }],
        selectedParts: selectedParts
      });

      setChatMessages(prevMessages => [...prevMessages, { role: 'user', content: userMessage }, { role: 'ai', content: response.data.message }]);
      setUserMessage("");
    } catch (err) {
      console.error(`Failed to create chat: ${err}`);
    }
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
      <h2>Chat:</h2>
      <div className={styles.chatBox}>
        {chatMessages.map((message, index) => (
          <p key={index} className={message.role === 'ai' ? styles.aiMessage : styles.userMessage}>
            {message.role.toUpperCase()}: {message.content}
          </p>
        ))}
      </div>
      <form onSubmit={onChatSubmit}>
        <input type="text" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default PcBuilder;
