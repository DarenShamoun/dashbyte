// Import necessary dependencies
import React from 'react'; // React is the JavaScript library used for building the user interface
import { Form, Button } from 'react-bootstrap'; // Form and Button are components from the react-bootstrap library

// Define the ChatBox component
// This component receives props for input, handleInputSubmit, and handleInputChange
function ChatBox({ input, handleInputSubmit, handleInputChange }) {
  // Render the ChatBox component
  return (
    // Use the Form component from react-bootstrap for the chat box
    <Form onSubmit={handleInputSubmit}>
      <Form.Group className="d-flex">
        {/* Use the Form.Control component for the input field */}
        <Form.Control
          type="text" // The type of the input field is text
          value={input} // The value of the input field is the input prop
          onChange={handleInputChange} // When the input field changes, call the handleInputChange function
          placeholder="Type your message here..." // The placeholder text for the input field
        />
        {/* Use the Button component for the submit button */}
        <Button type="submit" className="ms-2">Send</Button>
      </Form.Group>
    </Form>
  );
}

// Export the ChatBox component as the default export
export default ChatBox;
