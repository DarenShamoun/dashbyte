import React from 'react';
import chatInterfaceStyles from './chat-interface.module.css';

function ChatBox({ messages = [], aiIsTyping, handleInputSubmit }) {
  return (
    <div>
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
        {aiIsTyping && <div className={chatInterfaceStyles.aiTyping}>AI is typing...</div>}
      </div>
      <form onSubmit={handleInputSubmit} className={chatInterfaceStyles.inputForm}>
        <input name="input" type="text" className={chatInterfaceStyles.inputField} />
        <button type="submit" className={chatInterfaceStyles.sendButton}>Send</button>
      </form>
    </div>
  );
}

export default ChatBox;
