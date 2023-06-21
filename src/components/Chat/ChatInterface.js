import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ChatBox from './ChatBox';
import ChatMessage from './ChatMessage';
import { handleInputSubmit, getCurrentContext } from '../../utils/chatFunctions';

function ChatInterface({ selectedParts }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleInputSubmit(event, input, setInput, messages, setMessages, selectedParts);
  };

  return (
    <Container>
      <Row>
        <Col>
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              text={message.text}
              sender={message.sender}
              timestamp={message.timestamp}
            />
          ))}
          <ChatBox
            input={input}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ChatInterface;
