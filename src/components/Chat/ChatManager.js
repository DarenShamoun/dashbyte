import React, { useState } from 'react';
import ChatContainer from './ChatContainer';
import { handleInputSubmit } from './ChatFunctions';

function ChatManager({ home, selectedParts }) {
  const [messages, setMessages] = useState([]);
  const [aiIsTyping, setAiIsTyping] = useState(false);

  return (
    <ChatContainer
      home={home}
      selectedParts={selectedParts}
      messages={messages}
      setMessages={setMessages}
      setAiIsTyping={setAiIsTyping}
      handleInputSubmit={(event, input, setInput) => handleInputSubmit(event, input, setInput, messages, setMessages, selectedParts, setAiIsTyping)}
    />
  );
}

export default ChatManager;
