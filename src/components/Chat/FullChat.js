import React, { useContext, useState } from 'react';
import { ChatContext } from './ChatContext';

function FullChat() {
  const { messages, setMessages } = useContext(ChatContext);
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
          <div key={index}>
            <span>{message.sender}: </span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleInputSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default FullChat;
