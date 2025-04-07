
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from 'lucide-react';

const templates = [
  {
    id: 1,
    name: 'E-Commerce Pro',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    features: ['Product Gallery', 'Checkout', 'Account Management'],
  },
  {
    id: 2,
    name: 'Café Corner',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
    features: ['Menu Display', 'Reservations', 'Location Map'],
  },
  {
    id: 3,
    name: 'Express Logistics',
    category: 'logistics',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80',
    features: ['Tracking System', 'Quote Calculator', 'Service Areas'],
  },
  {
    id: 4,
    name: 'Creative Portfolio',
    category: 'freelancer',
    image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=800&q=80',
    features: ['Project Gallery', 'Contact Form', 'Testimonials'],
  },
  {
    id: 5,
    name: 'MediCenter',
    category: 'medical',
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=800&q=80',
    features: ['Appointment Booking', 'Doctor Profiles', 'Patient Portal'],
  },
  {
    id: 6,
    name: 'Service Hub',
    category: 'services',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    features: ['Service Catalog', 'Booking System', 'Testimonials'],
  },
];

const categories = [
  'all',
  'ecommerce',
  'restaurant',
  'logistics',
  'freelancer',
  'medical',
  'services',
];

const TemplateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredTemplate, setHoveredTemplate] = useState<number | null>(null);
  
  const filteredTemplates = activeCategory === 'all'
    ? templates
    : templates.filter(template => template.category === activeCategory);

  return (
    <section id="templates" className="py-24 px-4 relative">
      <div className="absolute inset-0 z-0">
        <div className="floating-blob blob-cyan w-[600px] h-[600px] absolute top-20 -left-80 opacity-10"></div>
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
            Template <span className="text-neon-blue">Showcase</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our collection of professionally designed templates ready for your business
          </motion.p>
        </div>
        
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? 'bg-neon-blue text-white'
                  : 'bg-dark-300/50 text-gray-300 hover:bg-dark-300'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>
        
        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              className="relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
            >
              <div className="relative aspect-[3/2] overflow-hidden group">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`flex gap-3 transition-opacity duration-300 ${
                    hoveredTemplate === template.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Button variant="outline" className="border-gray-500 text-white hover:bg-white/10 hover:text-white">
                      <Eye className="w-4 h-4 mr-2" /> Preview
                    </Button>
                    <Button className="bg-neon-blue text-white hover:bg-neon-blue/80">
                      Use Template
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-dark-400/80 backdrop-blur-sm text-xs px-3 py-1 rounded-full border border-white/10">
                  {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" className="border-gray-600 hover:border-white">
            View All Templates <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
