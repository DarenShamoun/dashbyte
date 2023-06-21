import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ChatBox from './ChatBox';
import { handleInputSubmit } from './ChatFunctions';

function MiniChatInterface({ selectedParts, messages, setMessages }) {
  const [aiIsTyping, setAiIsTyping] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const messagesDiv = document.querySelector('.chatBox__history');
    if (messagesDiv) {
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  }, [messages]);

  if (location.pathname === '/') {
    return null;
  }

  return (
    <Container>
      <Row>
        <Col>
          <ChatBox
            messages={messages}
            aiIsTyping={aiIsTyping}
            handleInputSubmit={(event, input, setInput) => handleInputSubmit(event, input, setInput, messages, setMessages, selectedParts, setAiIsTyping)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MiniChatInterface;
