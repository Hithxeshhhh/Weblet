
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Can I switch templates later?",
    answer: "Yes, you can switch templates at any time. Your content will be migrated automatically to the new template. You might need to make minor adjustments to ensure everything looks perfect with the new design."
  },
  {
    question: "What happens if I cancel?",
    answer: "If you cancel your subscription, your website will remain active until the end of your billing period. After that, your site will be archived and you'll have 30 days to reactivate your account or export your content before it's permanently removed."
  },
  {
    question: "Can I connect my own domain?",
    answer: "Absolutely! You can connect any domain you own to your Weblet site. We provide step-by-step instructions for configuring your DNS settings, or our support team can assist you with the process."
  },
  {
    question: "Do I need technical knowledge to use Weblet?",
    answer: "No technical knowledge is required. Our platform is designed for non-technical users, with an intuitive interface that makes it easy to customize your site. Of course, if you have technical skills, you'll have access to more advanced customization options."
  },
  {
    question: "Is there a limit to how much traffic my site can handle?",
    answer: "All plans include scalable hosting that automatically adjusts to handle traffic spikes. Basic plans can handle typical small business traffic, while higher-tier plans include enhanced resources for growing businesses with higher traffic volumes."
  },
  {
    question: "Can I sell products or services through my Weblet site?",
    answer: "Yes! Our Intermediate and Professional plans include e-commerce functionality. You can set up an online store, accept payments, manage inventory, and process orders directly through your Weblet site."
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked <span className="text-neon-blue">Questions</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about Weblet
          </motion.p>
        </div>
        
        <motion.div
          className="glass p-6 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-white/10 last:border-b-0"
              >
                <AccordionTrigger className="hover:text-neon-blue transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
