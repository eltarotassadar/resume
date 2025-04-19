
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 py-4 shadow-sm">
      <div className="container mx-auto flex justify-center space-x-8">
        {['home', 'about', 'experience', 'skills', 'contact'].map((section) => (
          <Button
            key={section}
            variant="ghost"
            className={`capitalize ${
              activeSection === section ? 'text-accent' : 'text-primary'
            }`}
            onClick={() => scrollTo(section)}
          >
            {section}
          </Button>
        ))}
      </div>
    </nav>
  );
};
