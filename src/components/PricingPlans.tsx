
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

type PriceTier = {
  name: string;
  price: { monthly: number; yearly: number };
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  color?: string;
};

const pricingPlans: PriceTier[] = [
  {
    name: "Basic",
    price: { monthly: 20, yearly: 192 },
    description: "Perfect for small businesses just getting started online.",
    features: [
      "1 Website",
      "5 Pages",
      "Free Domain Connection",
      "Mobile Responsive",
      "Basic SEO",
      "Email Support"
    ],
    buttonText: "Get Started",
  },
  {
    name: "Intermediate",
    price: { monthly: 35, yearly: 336 },
    description: "Ideal for growing businesses looking to expand their online presence.",
    features: [
      "1 Website",
      "15 Pages",
      "Free Domain Connection",
      "Mobile Responsive",
      "Advanced SEO",
      "Email & Chat Support",
      "E-commerce (up to 50 products)",
      "Custom Forms"
    ],
    popular: true,
    buttonText: "Get Started",
    color: "neon-purple",
  },
  {
    name: "Professional",
    price: { monthly: 50, yearly: 480 },
    description: "For established businesses requiring advanced features and customization.",
    features: [
      "1 Website",
      "Unlimited Pages",
      "Free Domain Connection",
      "Mobile Responsive",
      "Advanced SEO",
      "Priority Support",
      "Unlimited E-commerce",
      "Custom Forms",
      "Analytics Dashboard",
      "API Access"
    ],
    buttonText: "Get Started",
  },
];

const PricingPlans = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 px-4 bg-dark-500">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Pricing <span className="text-neon-pink">Plans</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Simple, transparent pricing that grows with your business
          </motion.p>
          
          <div className="flex items-center justify-center mt-8 mb-12">
            <span className={`mr-3 ${!annual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <Switch
              checked={annual}
              onCheckedChange={setAnnual}
            />
            <span className={`ml-3 ${annual ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="text-neon-pink text-xs ml-1">(20% off)</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              {plan.popular && (
                <div className="absolute -top-5 inset-x-0 flex justify-center">
                  <span className="bg-neon-purple text-xs px-3 py-1 rounded-full text-white">
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card className={`border ${
                plan.popular 
                  ? 'border-neon-purple/50 bg-gradient-to-b from-dark-300 to-dark-400 shadow-[0_0_25px_-5px_rgba(177,76,255,0.3)]' 
                  : 'border-gray-800 bg-dark-400'
                } overflow-hidden`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className={`text-2xl font-bold ${plan.color ? `text-${plan.color}` : ''}`}>
                    {plan.name}
                  </CardTitle>
                  <div className="mt-1">
                    <span className="text-3xl font-bold">
                      ${annual ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-gray-400 ml-1">
                      /{annual ? 'year' : 'month'}
                    </span>
                  </div>
                  <CardDescription className="text-gray-400 mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className={`mr-2 h-5 w-5 ${plan.color ? `text-${plan.color}` : 'text-neon-cyan'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-neon-purple hover:bg-neon-purple/80 btn-glow' 
                        : 'bg-dark-300 hover:bg-dark-200'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
