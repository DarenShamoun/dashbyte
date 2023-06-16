import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatInterface from './chatInterface';
import Navbar from './navbar';
import HeroSection from './heroSection';
import ServicesSection from './servicesSection';
import AboutSection from './aboutSection';
import ContactSection from './contactSection';
import Footer from './footer';
import PCBuilder from './pcBuilder';
import NotFound from './notFound';

function App() {
  // The selected parts (initially empty)
  const [selectedParts, setSelectedParts] = useState([]);

  const handlePartSelect = (part) => {
    // Add the selected part to the selected parts
    setSelectedParts(prevSelectedParts => [...prevSelectedParts, part]);
  };

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/pc-builder" element={<PCBuilder selectedParts={selectedParts} onPartSelect={handlePartSelect} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
