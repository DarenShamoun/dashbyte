import React, { useState } from 'react';
import ChatContainer from './ChatContainer';
import { handleInputSubmit as handleInputSubmitFunction } from './ChatFunctions';

function ChatManager() {
  const [messages, setMessages] = useState([]);
  const [selectedParts, setSelectedParts] = useState([]);

  const handleInputSubmit = (event, input, setInput) => {
    event.preventDefault();
    handleInputSubmitFunction(event, input, setInput, messages, setMessages, selectedParts);
  };

  return (
    <ChatContainer 
      handleInputSubmit={handleInputSubmit} 
      selectedParts={selectedParts} 
      messages={messages} 
      setMessages={setMessages} 
    />
  );
}

export default ChatManager;
