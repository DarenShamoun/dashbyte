import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatInterface from './ChatInterface';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import PCBuilder from './PCBuilder';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/chat" element={<ChatInterface />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/pc-builder" element={<PCBuilder />} />
        <Route path="*" element={<NotFound />} /> {/* This should be the last route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
