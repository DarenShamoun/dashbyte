import React, { useState } from 'react';
import { ListGroup, Form, Button, Col } from 'react-bootstrap';

function ChatBox({ messages = [], aiIsTyping, setAiIsTyping, handleInputSubmit }) {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Col className="d-flex flex-column justify-content-between">
      <ListGroup className="chatBox__history mb-3">
        {messages.map((message, index) => (
          <ListGroup.Item key={index} className={`chatBox__message chatBox__message--${message.sender}`}>
            {message.text}
          </ListGroup.Item>
        ))}
        {aiIsTyping === true && <div className="chatBox__typing">AI is typing...</div>}
      </ListGroup>
      <Form className="chatBox__inputForm" onSubmit={(event) => handleInputSubmit(event, input, setInput, aiIsTyping, setAiIsTyping)}>
        <Form.Control
          className="chatBox__input"
          value={input}
          onChange={handleInputChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleInputSubmit(event, input, setInput, aiIsTyping, setAiIsTyping);
            }
          }}
          as="textarea"
        />
        <Button type="submit">Send</Button>
      </Form>
    </Col>
  );
}

export default ChatBox;
