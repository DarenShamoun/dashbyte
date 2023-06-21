import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ServicesSection from './components/Services/Services';
import AboutSection from './components/About/About';
import ContactSection from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PCBuilder from './components/PcBuilder/PcBuilder';
import NotFound from './components/404/NotFound';
import HomePage from './components/Home/Home';
import FullChat from './components/Chat/FullChat';
import MiniChat from './components/Chat/MiniChat';
import { ChatProvider } from './components/Chat/ChatContext';

function App() {
  const [selectedParts, setSelectedParts] = useState([]);

  const handlePartSelect = (part) => {
    setSelectedParts(prevSelectedParts => [...prevSelectedParts, part]);
  };

  return (
    <div className="App">
      <Router>
        <ChatProvider>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage><FullChat /></HomePage>} />
              <Route path="/about" element={<AboutSection><MiniChat /></AboutSection>} />
              <Route path="/services" element={<ServicesSection><MiniChat /></ServicesSection>} />
              <Route path="/contact" element={<ContactSection><MiniChat /></ContactSection>} />
              <Route path="/pc-builder" element={<PCBuilder selectedParts={selectedParts} onPartSelect={handlePartSelect}><MiniChat /></PCBuilder>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </ChatProvider>
      </Router>
    </div>
  );
}

export default App;
