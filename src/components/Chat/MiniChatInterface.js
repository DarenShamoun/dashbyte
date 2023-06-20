import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import chatInterfaceStyles from './mini-chat-interface.module.css';
import ChatBox from './ChatBox'; // Import ChatBox
import { handleInputSubmit } from './ChatFunctions'; // Import handleInputSubmit

function MiniChatInterface({ selectedParts, messages, setMessages }) {
  const [aiIsTyping, setAiIsTyping] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const messagesDiv = document.querySelector(`.${chatInterfaceStyles.messages}`);
    if (messagesDiv) {
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  }, [messages]);

  if (location.pathname === '/') {
    return null;
  }

  console.log(messages);

  return (
    <div className={chatInterfaceStyles.miniChatInterface}>
      <ChatBox messages={messages} aiIsTyping={aiIsTyping} handleInputSubmit={(event, input, setInput) => {
        event.preventDefault();
        handleInputSubmit(event, input, setInput, messages, setMessages, selectedParts, setAiIsTyping);
      }} />
    </div>
  );
}

export default MiniChatInterface;
