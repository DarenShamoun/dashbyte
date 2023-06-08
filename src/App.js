import React from 'react';
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
