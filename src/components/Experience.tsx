
import { ExperienceCard } from './ExperienceCard';

const experiences = [
  {
    period: "2020 - Present",
    title: "Senior Software Engineer",
    company: "Tech Corp",
    description: "Leading development of enterprise web applications using React, TypeScript and Node.js. Implementing CI/CD pipelines and mentoring junior developers.",
    illustration: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=600" // Code/tech illustration
  },
  {
    period: "2018 - 2020",
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    description: "Developed and maintained multiple client projects using modern JavaScript frameworks. Worked with REST APIs and database design.",
    illustration: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=600" // Developer setup
  },
  {
    period: "2016 - 2018",
    title: "Junior Developer",
    company: "StartUp Co",
    description: "Built and deployed web applications using React and Node.js. Collaborated in agile teams to deliver client-facing products.",
    illustration: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600" // Startup environment
  }
];

export const Experience = () => {
  return (
    <section 
      id="experience" 
      className="min-h-screen flex items-center py-20 bg-gray-50 relative"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12">Experience</h2>
        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
