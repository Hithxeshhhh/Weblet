
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import IndustrySection from '../components/IndustrySection';
import HowItWorks from '../components/HowItWorks';
import TemplateShowcase from '../components/TemplateShowcase';
import PricingPlans from '../components/PricingPlans';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

// Import framer-motion to use animations
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-400 text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <IndustrySection />
      <HowItWorks />
      <TemplateShowcase />
      <PricingPlans />
      <Features />
      <Testimonials />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
