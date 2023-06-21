import React from 'react';
import './home.module.css';
import ChatInterface from '../Chat/ChatInterface';

function HomePage() {
 return (
  <div className="homePage">
   <h1>Welcome to Dashbyte</h1>
   <p>Build your PC with the help of our AI assistant.</p>
   <ChatInterface />
  </div>
 );
}

export default HomePage;
