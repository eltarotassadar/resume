
import { ExperienceCard } from './ExperienceCard';

const experiences = [
  {
    period: "2020 - Present",
    title: "Senior Software Engineer",
    company: "Tech Corp",
    description: "Leading development of enterprise web applications",
    illustration: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png" // Programming illustration
  },
  {
    period: "2018 - 2020",
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    description: "Developed and maintained multiple client projects",
    illustration: "https://cdn-icons-png.flaticon.com/512/2091/2091665.png" // Data visualization illustration
  },
  {
    period: "2016 - 2018",
    title: "Junior Developer",
    company: "StartUp Co",
    description: "Built and deployed web applications using modern technologies",
    illustration: "https://cdn-icons-png.flaticon.com/512/1067/1067567.png" // Rocket/startup illustration
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
