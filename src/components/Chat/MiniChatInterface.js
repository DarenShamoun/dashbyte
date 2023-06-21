import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ChatInterface from './ChatInterface';

function MiniChatInterface({ selectedParts }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Chat with us
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chat with us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChatInterface selectedParts={selectedParts} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MiniChatInterface;
