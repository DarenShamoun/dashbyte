import React from 'react';
import ChatInterface from './ChatInterface'; // Import the chat interface component
import styles from './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Add your hero section content here */}
      
      <div className="chatbot">
        <ChatInterface /> {/* Include the chat interface component */}
      </div>
    </div>
  );
};

export default HeroSection;
