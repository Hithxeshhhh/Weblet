import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center py-20 px-4 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-blob blob-purple w-[500px] h-[500px] absolute top-20 left-20 opacity-15"></div>
        <div className="floating-blob blob-cyan w-[600px] h-[600px] absolute top-40 right-40 delay-700 opacity-15"></div>
        <div className="floating-blob blob-pink w-[400px] h-[400px] absolute bottom-5 left-1/3 delay-500 opacity-15"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div className="max-w-3xl mx-auto text-center" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 py-9">
            Don't build a site. <span className="text-neon-purple ">Rent one</span> that grows with you.
          </h1>
          <p className="text-xl text-gray-300 mb-10">Beautiful, ready-to-launch websites for small businesses live in 10 minutes.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-neon-purple text-white hover:bg-neon-purple/80 px-8 h-16 animate-pulse-glow text-lg py-[9px]">
              Browse Templates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-gray-600 hover:border-white text-lg px-8 py-6 h-16">
              See Pricing
            </Button>
            <Button variant="outline" className="border-gray-600 hover:border-white text-lg px-8 py-6 h-16">
              <a href="https://forms.gle/WKsiJXQaTbuxRh1JA" className="text-lg text-white hover:text-black" target="_blank">Write a review</a>
            </Button>
          </div>
        </motion.div>
        
        {/* Floating Mockup */}
        <motion.div className="mt-20 mx-auto max-w-5xl relative" initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4,
        duration: 0.8
      }}>
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
            <div className="glass absolute inset-0 shadow-2xl border-t border-white/20">
              <div className="h-8 bg-dark-400/80 flex items-center px-4 border-b border-gray-800/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
              </div>
              <div className="h-full bg-gradient-to-b from-dark-200/50 to-dark-300/50 backdrop-blur-sm">
                <div className="animate-wave">
                  <img src="/lovable-uploads/image.png" alt="Website Template Preview" className="w-full opacity-90 object-cover" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Small floating screens */}
          <div className="absolute -bottom-10 -left-10 w-64 h-44 rounded-lg overflow-hidden transform -rotate-6 animate-float">
            <div className="glass h-full border border-white/20 shadow-lg overflow-hidden">
              <div className="h-4 bg-dark-400/80 border-b border-gray-800/50"></div>
              <img src="/lovable-uploads/image.png" alt="Mobile Template Preview" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-44 h-64 rounded-lg overflow-hidden transform rotate-6 animate-float delay-300">
            <div className="glass h-full border border-white/20 shadow-lg overflow-hidden">
              <div className="h-4 bg-dark-400/80 border-b border-gray-800/50"></div>
              <img src="/lovable-uploads/image.png" alt="Tablet Template Preview" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;