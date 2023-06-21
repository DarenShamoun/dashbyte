// Import necessary dependencies
import React from 'react'; // React is the JavaScript library used for building the user interface
import { Card } from 'react-bootstrap'; // Card is a component from the react-bootstrap library

// Define the ChatMessage component
// This component receives props for text, sender, and timestamp
function ChatMessage({ text, sender, timestamp }) {  
  // Render the ChatMessage component
  return (  
    // Use the Card component from react-bootstrap to display the chat message
    <Card className={`mb-3 ${sender === 'ai' ? 'text-start' : 'text-end'}`}>
      <Card.Body>  
        {/* Display the text of the chat message */}
        <Card.Text>{text}</Card.Text>  
        {/* Display the timestamp of the chat message */}
        <Card.Subtitle className="text-muted">{timestamp}</Card.Subtitle>  
      </Card.Body>  
    </Card>  
  );  
}  

// Export the ChatMessage component as the default export
export default ChatMessage
