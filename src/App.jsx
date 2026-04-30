import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/Services';
import Strengths from './components/Strenghts';
import Testimonials from './components/sections/Testimonials';
import Partners from './components/Partners';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      <Navbar />
      <Hero/>
      <Services />
      <Strengths />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;