import React, { useState } from 'react';
import chatInterfaceStyles from './chatInterface.module.css';

function ChatInterface() {
  const [messages, setMessages] = useState([]);

  const handleInputSubmit = async (event) => {
    event.preventDefault();
  
    // Get the input value from the form event
    const input = event.target.elements.input.value;

    // Add the user's message to the chat history
    setMessages([...messages, { text: input, sender: 'user' }]);
  
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
  
    // Send the messages to the server and get the AI's response
    const response = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: chatMessages })
    });
  
    const data = await response.json();
    const aiMessage = data.message;
  
    // Add the AI's message to the chat history
    setMessages(prevMessages => [...prevMessages, { text: aiMessage, sender: 'ai' }]);
  
    // Clear the input field
    event.target.elements.input.value = '';
  };
  

  return (
    <div className={chatInterfaceStyles.chatInterface}>
      <div className={chatInterfaceStyles.messages}>
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'user' ? chatInterfaceStyles.userMessage : chatInterfaceStyles.aiMessage}>
            <strong>{message.sender.toUpperCase()}: </strong>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleInputSubmit} className={chatInterfaceStyles.inputForm}>
        <input name="input" type="text" className={chatInterfaceStyles.inputField} />
        <button type="submit" className={chatInterfaceStyles.sendButton}>Send</button>
      </form>
    </div>
  );
}

export default ChatInterface;
