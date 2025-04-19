
import { useEffect, useRef } from 'react';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/5">
      <div className="text-center space-y-6 opacity-0" ref={titleRef}>
        <h1 className="text-5xl md:text-7xl font-bold text-primary">
          John Doe
        </h1>
        <p className="text-xl md:text-2xl text-secondary">
          Software Engineer & Designer
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors">
            Contact Me
          </a>
          <a href="#about" className="border border-accent text-accent px-6 py-2 rounded-lg hover:bg-accent/10 transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};
