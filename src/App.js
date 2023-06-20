import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { handleInputSubmit } from './components/Chat/ChatFunctions'; // Import handleInputSubmit
import ChatContainer from './components/Chat/ChatContainer'; // Import ChatContainer
import Navbar from './components/Navbar/Navbar';
import ServicesSection from './components/Services/Services';
import AboutSection from './components/About/About';
import ContactSection from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PCBuilder from './components/PcBuilder/PcBuilder';
import NotFound from './components/404/NotFound';
import HomePage from './components/Home/Home';

function App() {
  // The selected parts (initially empty)
  const [selectedParts, setSelectedParts] = useState([]);

  // The chat messages (initially empty)
  const [messages, setMessages] = useState([]);

  const handlePartSelect = (part) => {
    // Add the selected part to the selected parts
    setSelectedParts(prevSelectedParts => [...prevSelectedParts, part]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage messages={messages} setMessages={setMessages} />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/pc-builder" element={<PCBuilder selectedParts={selectedParts} onPartSelect={handlePartSelect} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatContainer handleInputSubmit={handleInputSubmit} selectedParts={selectedParts} messages={messages} setMessages={setMessages} />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
