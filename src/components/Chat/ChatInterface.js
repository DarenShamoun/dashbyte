import React, { useState } from 'react';
import ChatBox from './ChatBox';
import ChatMessage from './ChatMessage';
import { handleInputSubmit } from './chatFunctions'; // Import handleInputSubmit from chatFunctions.js

const ChatInterface = ({ selectedParts }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Use handleInputSubmit from chatFunctions.js
  const handleSubmit = (e) => handleInputSubmit(e, input, setInput, messages, setMessages);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      <ChatBox handleInputSubmit={handleSubmit} handleInputChange={handleInputChange} input={input} />
    </div>
  );
};

export default ChatInterface;
