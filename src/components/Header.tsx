import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-lg shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-white flex items-center">
            Weblet
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#templates" className="text-sm text-gray-300 hover:text-white transition-colors">Templates</a>
          <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">How It Works</a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
          <button className="bg-red-500 rounded-md px-2 py-2 "><a href="https://forms.gle/WKsiJXQaTbuxRh1JA" className="text-lg text-white hover:text-black" target="_blank">Write a review</a></button>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-neon-purple text-white hover:bg-neon-purple/80 btn-glow">
            Start Free Trial
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-gray-700">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-dark-300 border-gray-700">
              <div className="flex flex-col space-y-6 mt-12">
                <a href="#features" className="text-lg text-gray-200 hover:text-white">Features</a>
                <a href="#templates" className="text-lg text-gray-200 hover:text-white">Templates</a>
                <a href="#pricing" className="text-lg text-gray-200 hover:text-white">Pricing</a>
                <a href="#how-it-works" className="text-lg text-gray-200 hover:text-white">How It Works</a>
                <a href="#contact" className="text-lg text-gray-200 hover:text-white">Contacts</a>
                
                <Button className="w-full bg-neon-purple text-white hover:bg-neon-purple/80 btn-glow">
                  Start Free Trial
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
