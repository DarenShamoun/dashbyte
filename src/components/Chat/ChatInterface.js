// Import necessary dependencies
import React, { useState } from 'react'; // useState is a Hook that lets you add React state to function components
import ChatBox from './ChatBox'; // Import the ChatBox component
import ChatMessage from './ChatMessage'; // Import the ChatMessage component
import { handleInputSubmit } from './chatFunctions'; // Import the handleInputSubmit function from chatFunctions.js

// Define the ChatInterface component
const ChatInterface = ({ selectedParts }) => {
  // Initialize the messages state as an empty array
  // setMessages is the function to update the messages state
  const [messages, setMessages] = useState([]);

  // Initialize the input state as an empty string
  // setInput is the function to update the input state
  const [input, setInput] = useState('');

  // Define a function to handle form submission
  // This function calls the handleInputSubmit function from chatFunctions.js
  const handleSubmit = (e) => handleInputSubmit(e, input, setInput, messages, setMessages);

  // Define a function to handle input change
  // This function updates the input state with the user's input
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Render the ChatInterface component
  return (
    <div>
      {/* Render a list of ChatMessage components for each message in the messages state */}
      {messages.map((message) => (  
        <ChatMessage key={message.id} {...message} />  
      ))}
      {/* Render the ChatBox component and pass the necessary props */}
      <ChatBox handleInputSubmit={handleSubmit} handleInputChange={handleInputChange} input={input} />
    </div>
  );
};

// Export the ChatInterface component as the default export
export default ChatInterface;
