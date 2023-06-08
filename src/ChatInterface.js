import React, { useState } from 'react';
import styles from './ChatInterface.module.css';

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInputSubmit = async (event) => {
    event.preventDefault();
  
    // Add the user's message to the chat history
    setMessages([...messages, { text: input, sender: 'user' }]);
  
    // Prepare the messages to send to the server
    const chatMessages = [
      {
        role: 'system',
        content: 'You are a helpful assistant.'
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
    setInput('');
  };
  

  return (
    <div className={styles.chatInterface}>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <p key={index} className={message.sender === 'user' ? styles.userMessage : styles.aiMessage}>
            {message.text}
          </p>
        ))}
      </div>
      <form onSubmit={handleInputSubmit} className={styles.inputForm}>
        <input type="text" value={input} onChange={handleInputChange} className={styles.inputField} />
        <button type="submit" className={styles.sendButton}>Send</button>
      </form>
    </div>
  );
}

export default ChatInterface;
