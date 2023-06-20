import React, { useState } from 'react';
import './chat-box.module.css'; // Import the styles

function ChatBox({ messages = [], aiIsTyping, selectedParts, setMessages, handleInputSubmit }) {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="chatBox">
      <div className="chatBox__history">
        {messages.map((message, index) => (
          <div key={index} className={`chatBox__message chatBox__message--${message.sender}`}>
            {message.text}
          </div>
        ))}
        {aiIsTyping && <div className="chatBox__typing">AI is typing...</div>}
      </div>
      <form className="chatBox__inputForm" onSubmit={(event) => handleInputSubmit(event, input, setInput)}>
        <textarea className="chatBox__input" value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatBox;
