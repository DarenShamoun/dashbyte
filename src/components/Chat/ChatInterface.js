import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import chatInterfaceStyles from './chat-interface.module.css';
import logo from '../../assets/4kLogoOnly.png';
import ChatBox from './ChatBox'; 
import { handleInputSubmit } from './ChatFunctions'; 

function ChatInterface({ home, selectedParts, messages, setMessages }) { 
  const [aiIsTyping, setAiIsTyping] = useState(false); 
  const location = useLocation(); 

  useEffect(() => {
    const messagesDiv = document.querySelector(`.${chatInterfaceStyles.messages}`);
    if (messagesDiv) {
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  }, [messages]);

  if (location.pathname !== '/') {
    return null;
  }

  console.log(messages);

  return (
    <div className={`${chatInterfaceStyles.chatInterface} ${home ? 'home' : ''}`} style={{ backgroundImage: `url(${logo})` }}>
      <ChatBox messages={messages} aiIsTyping={aiIsTyping} handleInputSubmit={(event, input, setInput) => {
        event.preventDefault();
        handleInputSubmit(event, input, setInput, messages, setMessages, selectedParts, setAiIsTyping);
      }} />
    </div>
  );
}

export default ChatInterface;
