import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import chatInterfaceStyles from './chat-interface.module.css';
import logo from '../../assets/4kLogoOnly.png';
import ChatBox from './ChatBox'; // Import ChatBox

function ChatInterface({ home, selectedParts, messages, setMessages, handleInputSubmit }) { // Add 'handleInputSubmit' to the props
  const [aiIsTyping, setAiIsTyping] = useState(false); // New state for AI typing
  const location = useLocation(); // Use the hook here

  // Scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    const messagesDiv = document.querySelector(`.${chatInterfaceStyles.messages}`);
    if (messagesDiv) {
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  }, [messages]);

  // Only render the chat interface on the home page
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <div className={`${chatInterfaceStyles.chatInterface} ${home ? 'home' : ''}`}> {/* Use the 'home' prop here */}
      <div className={`${chatInterfaceStyles.chatInterface} ${chatInterfaceStyles.chatBackground}`} style={{ backgroundImage: `url(${logo})` }}>
        <div className={chatInterfaceStyles.chatInterface}>
          <div className={chatInterfaceStyles.chatInterfaceHome}> {/* Use chatInterfaceHome class */}
            <div className={chatInterfaceStyles.chatInterface}>
              <ChatBox messages={messages} aiIsTyping={aiIsTyping} handleInputSubmit={handleInputSubmit} /> {/* Use the ChatBox component here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
