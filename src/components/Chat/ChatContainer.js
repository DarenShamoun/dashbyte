import React from 'react';
import { useLocation } from 'react-router-dom';
import ChatInterface from './ChatInterface';
import MiniChatInterface from './MiniChatInterface';

function ChatContainer({ handleInputSubmit, selectedParts, messages, setMessages, setAiIsTyping }) {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' ? 
        <ChatInterface handleInputSubmit={handleInputSubmit} selectedParts={selectedParts} messages={messages} setMessages={setMessages} setAiIsTyping={setAiIsTyping} /> :
        <MiniChatInterface handleInputSubmit={handleInputSubmit} selectedParts={selectedParts} messages={messages} setMessages={setMessages} setAiIsTyping={setAiIsTyping} />
      }
    </div>
  );
}

export default ChatContainer;
