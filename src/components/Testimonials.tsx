
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Testimonial = {
  content: string;
  author: string;
  position: string;
  company?: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    content: "stands out. The integrations are seamless. The workflow customization saves me hours every week.",
    author: "David L.",
    position: "Operations Lead",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
  },
  {
    content: "stands out. The integrations are seamless. The workflow customization saves me hours every week.",
    author: "Emily T.",
    position: "Founder & CEO",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100",
  },
  {
    content: "stands out. The integrations are seamless. The workflow customization saves me hours every week.",
    author: "Samantha R.",
    position: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
  },
  {
    content: "stands out. The integrations are seamless. The workflow customization saves me hours every week.",
    author: "James K.",
    position: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100",
  },
  {
    content: "stands out. The integrations are seamless. The workflow customization saves me hours every week.",
    author: "Carlos M.",
    position: "IT Specialist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
  },
  {
    content: "stands out. The integrations are seamless. The workflow customization saves me hours every week.",
    author: "Jessica M.",
    position: "Team Lead",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100",
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
    <section className="py-24 px-4 bg-dark-400/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our <span className="text-neon-cyan">Clients</span> Say
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don't take our word for it — hear from our clients
          </motion.p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="h-full glass rounded-lg p-6 flex flex-col"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-6">
                    <Avatar className="h-12 w-12 mr-4 border border-white/10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 flex-grow">"{testimonial.content}"</p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-0 translate-y-0 rounded-full border-gray-700 hover:bg-dark-200" />
            <CarouselNext className="relative inset-0 translate-y-0 rounded-full border-gray-700 hover:bg-dark-200" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
