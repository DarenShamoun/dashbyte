import React, { useState, useEffect } from 'react';
import chatInterfaceStyles from './chatInterface.module.css';

console.log(process.env.REACT_APP_SERVER_URL);

function ChatInterface({ selectedParts }) {
  const [messages, setMessages] = useState([]);
  const [aiIsTyping, setAiIsTyping] = useState(false); // New state for AI typing

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

  return (
    <div className={chatInterfaceStyles.chatInterface}>
      <div className={chatInterfaceStyles.messages}>
      {messages.map((message, index) => (
        <div key={index} style={{width: '100%', display: 'flex', justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'}}>
          <div className={message.sender === 'user' ? chatInterfaceStyles.userMessage : chatInterfaceStyles.aiMessage}>
            <strong>{message.sender.toUpperCase()}: </strong>
            <p>{message.text}</p>
            <span className={chatInterfaceStyles.timestamp}>{message.timestamp}</span>
          </div>
        </div>
      ))}
        {/* Add this line */}
        {aiIsTyping && <div className={chatInterfaceStyles.aiTyping}>AI is typing...</div>}
      </div>
      <form onSubmit={handleInputSubmit} className={chatInterfaceStyles.inputForm}>
        <input name="input" type="text" className={chatInterfaceStyles.inputField} />
        <button type="submit" className={chatInterfaceStyles.sendButton}>Send</button>
      </form>
    </div>
  );

}

export default ChatInterface;
