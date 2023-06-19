import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatInterface from './ChatInterface';
import MiniChatInterface from './MiniChatInterface';
import Navbar from './Navbar';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import PCBuilder from './components/PcBuilder/PcBuilder';
import NotFound from './NotFound';
import HomePage from './components/Home/Home';
import { useLocation } from 'react-router-dom'; // Import useLocation

function App() {
  // The selected parts (initially empty)
  const [selectedParts, setSelectedParts] = useState([]);

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
          <Route path="/" element={<HomePage />} />
            <Route path="/" element={<ChatInterface home selectedParts={selectedParts} />} /> {/* Pass the 'home' prop here */}
            <Route path="/about" element={<AboutSection />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/pc-builder" element={<PCBuilder selectedParts={selectedParts} onPartSelect={handlePartSelect} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <MiniChatInterface selectedParts={selectedParts} /> {/* Display MiniChatInterface on all pages */}
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
