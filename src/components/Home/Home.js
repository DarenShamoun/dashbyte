import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ChatInterface from '../Chat/ChatInterface';

function HomePage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to Dashbyte!</h1>
          <p>We offer a variety of tech services, including software development, PC building, IT services, and website design. Chat with us to learn more!</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <ChatInterface />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
