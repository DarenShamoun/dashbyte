import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import ChatBox from './ChatBox';
import { handleInputSubmit } from './ChatFunctions';

function ChatInterface({ home, selectedParts, messages, setMessages, setAiIsTyping }) {
  const location = useLocation();

  useEffect(() => {
    const chatHistory = document.querySelector('.chatBox__history');
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }, [messages]);

  if (!home && location.pathname !== '/') {
    return null;
  }

  return (
    <Container>
      <Row>
        <ChatBox
          messages={messages}
          aiIsTyping={setAiIsTyping}
          handleInputSubmit={(event, input, setInput) => handleInputSubmit(event, input, setInput, messages, setMessages, selectedParts, setAiIsTyping)}
        />
      </Row>
    </Container>
  );
}

export default ChatInterface;
