
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  DollarSign, 
  Wrench, 
  Cpu, 
  HardDrive
} from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Fast Deployment',
    description: 'Get your website online in 48 hours or less, ready to grow your business.'
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: 'No Setup Cost',
    description: 'Pay only for what you use with transparent monthly subscription plans.'
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: 'Maintenance-Free',
    description: 'All updates, security patches, and performance optimizations included.'
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'AI Custom Templates',
    description: 'Smart, adaptive designs that evolve with your business needs.'
  },
  {
    icon: <HardDrive className="h-6 w-6" />,
    title: 'Scalable Hosting',
    description: 'Enterprise-grade hosting that grows with your traffic demands.'
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="absolute inset-0 z-0">
        <div className="floating-blob blob-pink w-[400px] h-[400px] absolute bottom-20 right-20 opacity-10"></div>
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
            Why Choose <span className="text-neon-pink">Weblet</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're changing how small businesses build their online presence
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-gradient-to-br from-neon-purple to-neon-pink w-12 h-12 rounded-lg flex items-center justify-center mb-5 text-white">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
