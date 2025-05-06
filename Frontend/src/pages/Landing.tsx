import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../Components/Navbar';
import { Hero } from '../Components/Hero';
import { Features } from '../Components/Features';
import { Benefits } from '../Components/Benefits';
import { CallToAction } from '../Components/CallToAction';
import { Footer } from '../Components/Footer';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-900 font-sans"
    >
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <CallToAction onDemoClick={() => navigate('/signup')} />
      </main>
      <Footer />
    </motion.div>
  );
};