import React from 'react';
import { Form, Button } from 'react-bootstrap';

function ChatBox({ input, handleInputSubmit, handleInputChange }) {
  return (
    <Form onSubmit={handleInputSubmit}>
      <Form.Group className="d-flex">
        <Form.Control
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message here..."
        />
        <Button type="submit" className="ms-2">Send</Button>
      </Form.Group>
    </Form>
  );
}

export default ChatBox;
