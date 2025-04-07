
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="floating-blob blob-purple w-[600px] h-[600px] absolute top-0 left-1/2 transform -translate-x-1/2 opacity-10"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your website is <span className="text-neon-purple neon-glow">one click</span> away.
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            No devs, no delay, no worries.
          </p>
          
          <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white text-lg px-8 py-6 h-auto animate-pulse-glow">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="mt-6 text-sm text-gray-400">
            Try risk-free for 14 days. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
