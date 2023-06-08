import React from 'react';
import ChatInterface from './ChatInterface'; // Import the chat interface component
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.chatInterface}>
        <ChatInterface />
      </div>
    </div>
  );
};


export default HeroSection;
