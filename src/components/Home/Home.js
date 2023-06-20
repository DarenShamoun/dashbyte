import React from 'react';
import ChatContainer from '../Chat/ChatContainer'; // Import ChatContainer
import './home.module.css';

function HomePage({ messages, setMessages }) { // Add 'messages' and 'setMessages' to the props
  return (
    <div className="homePage">
      <h1>Welcome to Dashbyte</h1>
      <p>Build your PC with the help of our AI assistant.</p>
      <ChatContainer messages={messages} setMessages={setMessages} /> {/* Use ChatContainer here */}
    </div>
  );
}

export default HomePage;

