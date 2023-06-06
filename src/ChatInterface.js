import React, { useState } from 'react';

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message.sender}: {message.text}</p>
        ))}
      </div>
      <form onSubmit={handleInputSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatInterface;
