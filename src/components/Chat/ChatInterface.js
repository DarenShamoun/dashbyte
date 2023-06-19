import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import chatInterfaceStyles from './chat-interface.module.css';
import logo from '../../assets/4kLogoOnly.png';
import ChatBox from './ChatBox'; // Import ChatBox

function ChatInterface({ home, selectedParts, messages, setMessages }) { // Add 'messages' and 'setMessages' to the props
  const [aiIsTyping, setAiIsTyping] = useState(false); // New state for AI typing
  const location = useLocation(); // Use the hook here


  // This function retrieves the current context
  const getCurrentContext = () => {
    // Convert the selectedParts array to a string
    return JSON.stringify(selectedParts);
  };

  const handleInputSubmit = async (event) => {
    event.preventDefault();
  
    // Get the input value from the form event
    const input = event.target.elements.input.value;
  
    // Add the user's message to the chat history
    setMessages([...messages, { text: input, sender: 'user', timestamp: new Date().toLocaleTimeString() }]);
  
    // Prepare the messages to send to the server
    const chatMessages = [
      {
        role: 'system',
        content: 'You are a helpful IT assistant.'
      },
      {
        role: 'user',
        content: input
      }
    ];
  
    // Get the current context (this will depend on your application)
    const context = getCurrentContext();
  
    // Send the messages, context, and selected parts to the server and get the AI's response
    setAiIsTyping(true); // AI starts typing
    const response = await fetch(process.env.REACT_APP_SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: chatMessages, context: context, selectedParts: selectedParts })
    });    
    setAiIsTyping(false); // AI finishes typing
  
    const data = await response.json();
    if (response.status === 500) {
      console.error('Server error:', data.error);
    }
    const aiMessage = data.message;
  
    // Add the AI's message to the chat history
    setMessages(prevMessages => [...prevMessages, { text: aiMessage, sender: 'ai', timestamp: new Date().toLocaleTimeString() }]);
  
    // Clear the input field
    event.target.elements.input.value = '';
  };

  // Scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    const messagesDiv = document.querySelector(`.${chatInterfaceStyles.messages}`);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
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