import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import chatInterfaceStyles from './mini-chat-interface.module.css';
import ChatBox from './ChatBox'; // Import ChatBox
import { handleInputSubmit } from './ChatFunctions'; // Import handleInputSubmit

function MiniChatInterface({ selectedParts, messages, setMessages }) { // Add 'messages' and 'setMessages' to the props
  const [aiIsTyping, setAiIsTyping] = useState(false); // New state for AI typing
  const location = useLocation(); // Use the hook here

  // Scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    const messagesDiv = document.querySelector(`.${chatInterfaceStyles.messages}`);
    if (messagesDiv) {
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  }, [messages]);

  // Only render the mini chat interface on pages other than the home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className={chatInterfaceStyles.miniChatInterface}>
      <ChatBox messages={messages} aiIsTyping={aiIsTyping} handleInputSubmit={(event) => handleInputSubmit(event, messages, setMessages, selectedParts, setAiIsTyping)} /> {/* Use the ChatBox component here */}
    </div>
  );
}

export default MiniChatInterface;
