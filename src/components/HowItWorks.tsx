
import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckSquare, 
  PanelTop, 
  Palette, 
  Rocket
} from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Choose Industry',
    description: 'Select from our industry-specific templates designed for your business needs.',
    icon: <CheckSquare className="w-6 h-6" />,
    color: 'neon-purple',
  },
  {
    step: 2,
    title: 'Select Template',
    description: 'Browse our collection of premium templates and find the perfect match.',
    icon: <PanelTop className="w-6 h-6" />,
    color: 'neon-cyan',
  },
  {
    step: 3,
    title: 'Customize',
    description: 'Add your content, branding, and colors using our simple editor.',
    icon: <Palette className="w-6 h-6" />,
    color: 'neon-pink',
  },
  {
    step: 4,
    title: 'Launch Instantly',
    description: 'Go live with your new website instantly with one click.',
    icon: <Rocket className="w-6 h-6" />,
    color: 'neon-blue',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="floating-blob blob-purple w-[500px] h-[500px] absolute -top-40 -right-60 opacity-10"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It <span className="text-neon-cyan">Works</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get your website up and running in four simple steps
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-blue transform -translate-x-1/2"></div>
          
          <div className="space-y-20 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={step.step}
                className={`flex flex-col lg:flex-row ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                } items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Time marker */}
                <div className="hidden lg:block lg:w-1/2"></div>
                
                <div className="relative flex items-center justify-center mb-8 lg:mb-0 z-10">
                  <div className={`w-14 h-14 rounded-full bg-${step.color}/20 flex items-center justify-center text-${step.color} border border-${step.color}/30`}>
                    {step.icon}
                  </div>
                  <div className="absolute -z-10 w-24 h-24 rounded-full bg-gradient-radial from-neon-purple/20 to-transparent animate-pulse"></div>
                </div>
                
                <div className={`lg:w-1/2 lg:px-12 ${
                  index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'
                }`}>
                  <div className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-lg">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-${step.color}/30 text-${step.color} font-bold mb-4`}>
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
