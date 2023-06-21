import React from 'react';
import { Card } from 'react-bootstrap';

function ChatMessage({ text, sender, timestamp }) {
  return (
    <Card className={`mb-3 ${sender === 'ai' ? 'text-start' : 'text-end'}`}>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <Card.Subtitle className="text-muted">{timestamp}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default ChatMessage;
