
import { useEffect, useRef } from 'react';

const experiences = [
  {
    period: "2020 - Present",
    title: "Senior Software Engineer",
    company: "Tech Corp",
    description: "Leading development of enterprise web applications"
  },
  {
    period: "2018 - 2020",
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    description: "Developed and maintained multiple client projects"
  },
  {
    period: "2016 - 2018",
    title: "Junior Developer",
    company: "StartUp Co",
    description: "Built and deployed web applications using modern technologies"
  }
];

export const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = timelineRef.current?.children;
    if (items) {
      Array.from(items).forEach((item) => {
        observer.observe(item);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12">Experience</h2>
        <div ref={timelineRef} className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="opacity-0 flex gap-6 items-start">
              <div className="w-32 flex-shrink-0">
                <span className="text-accent font-medium">{exp.period}</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                <p className="text-secondary font-medium">{exp.company}</p>
                <p className="text-gray-600 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
