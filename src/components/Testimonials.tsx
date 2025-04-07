
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

type Testimonial = {
  content: string;
  author: string;
  position: string;
  company: string;
  industry: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    content: "Weblet saved us thousands in development costs. We had our restaurant website up and running in just 2 days, complete with online ordering capabilities.",
    author: "Sarah Johnson",
    position: "Owner",
    company: "The Green Plate",
    industry: "Restaurant",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
  },
  {
    content: "As a freelance designer, I needed a professional portfolio without the hassle of coding it myself. Weblet's templates are stunning and incredibly customizable.",
    author: "Michael Chen",
    position: "UI/UX Designer",
    company: "Freelance",
    industry: "Creative",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100",
  },
  {
    content: "Our e-commerce store was set up in under a week. The templates are optimized for conversions and the support team has been incredible with helping us customize everything.",
    author: "Alicia Parker",
    position: "Founder",
    company: "Urban Threads",
    industry: "E-commerce",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100",
  },
  {
    content: "Weblet has been a game changer for our medical practice. Our patients can now book appointments online and access their records securely.",
    author: "Dr. James Wilson",
    position: "Director",
    company: "CityHealth Clinic",
    industry: "Medical",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
  },
];

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth + 100 
        : scrollLeft + clientWidth - 100;
        
      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 px-4 bg-dark-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Client <span className="text-neon-cyan">Testimonials</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See what our clients have to say about their experience
          </motion.p>
        </div>
        
        <div className="relative">
          <motion.div 
            className="flex space-x-4 overflow-x-auto scrollbar-none pb-6"
            ref={sliderRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] md:min-w-[400px] flex-shrink-0 glass rounded-xl p-6 border border-white/10"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="mb-4">
                  <svg className="w-8 h-8 text-neon-cyan opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                
                <p className="text-gray-200 mb-6">{testimonial.content}</p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.position}, {testimonial.company}
                    </p>
                    <p className="text-xs text-neon-cyan mt-1">{testimonial.industry}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-gray-700 hover:bg-dark-200"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-gray-700 hover:bg-dark-200"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
