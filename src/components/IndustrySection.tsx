
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Coffee, Truck, Brush, Stethoscope, Wrench } from 'lucide-react';

const industries = [
  {
    name: 'Ecommerce',
    icon: <ShoppingCart className="w-8 h-8" />,
    description: 'Online stores for products & services',
  },
  {
    name: 'Restaurants & Cafés',
    icon: <Coffee className="w-8 h-8" />,
    description: 'Menus, reservations & ordering',
  },
  {
    name: 'Logistics',
    icon: <Truck className="w-8 h-8" />,
    description: 'Delivery tracking & scheduling',
  },
  {
    name: 'Creators & Freelancers',
    icon: <Brush className="w-8 h-8" />,
    description: 'Portfolios & booking systems',
  },
  {
    name: 'Medical',
    icon: <Stethoscope className="w-8 h-8" />,
    description: 'Appointments & patient management',
  },
  {
    name: 'Local Services',
    icon: <Wrench className="w-8 h-8" />,
    description: 'Quotes & service scheduling',
  },
];

const IndustrySection = () => {
  return (
    <section id="industries" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Industries We <span className="text-neon-purple">Serve</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Specialized templates designed for your specific industry needs.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className="card-gradient p-6 rounded-xl transition-all hover:bg-dark-200/70 hover:shadow-lg cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-neon-purple/10 rounded-full w-16 h-16 flex items-center justify-center mb-5 text-neon-purple group-hover:bg-neon-purple/20 transition-all">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p className="text-gray-400">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
