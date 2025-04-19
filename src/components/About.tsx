
import { useEffect, useRef } from 'react';

export const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-8">About Me</h2>
        <div 
          ref={contentRef}
          className="opacity-0 prose max-w-none"
        >
          <p className="text-lg text-secondary mb-6">
            I'm a passionate software engineer with a keen eye for design and a love for creating
            beautiful, functional web applications. With over 5 years of experience in full-stack
            development, I specialize in building scalable solutions that solve real-world problems.
          </p>
          <p className="text-lg text-secondary">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or sharing my knowledge through technical writing and mentoring.
          </p>
        </div>
      </div>
    </section>
  );
};
