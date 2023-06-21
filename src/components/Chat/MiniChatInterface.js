// Import necessary dependencies
import React, { useState } from 'react'; // useState is a Hook that lets you add React state to function components
import { Modal, Button } from 'react-bootstrap'; // Modal and Button are components from the react-bootstrap library
import ChatInterface from './ChatInterface'; // Import the ChatInterface component

// Define the MiniChatInterface component
// This component receives a prop for selectedParts
function MiniChatInterface({ selectedParts }) {
  // Initialize the show state as false
  // setShow is the function to update the show state
  const [show, setShow] = useState(false);

  // Define a function to close the modal
  // This function sets the show state to false
  const handleClose = () => setShow(false);

  // Define a function to show the modal
  // This function sets the show state to true
  const handleShow = () => setShow(true);

  // Render the MiniChatInterface component
  return (
    <>
      {/* Render a Button component to open the chat */}
      <Button variant="primary" onClick={handleShow}>
        Chat with us
      </Button>

      {/* Render a Modal component for the chat */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chat with us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render the ChatInterface component inside the modal */}
          <ChatInterface selectedParts={selectedParts} />
        </Modal.Body>
      </Modal>
    </>
  );
}

// Export the MiniChatInterface component as the default export
export default MiniChatInterface;
