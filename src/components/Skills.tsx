
import { useEffect, useRef } from 'react';
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "UI/UX Design", level: 75 },
  { name: "Python", level: 70 }
];

export const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

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

    const items = skillsRef.current?.children;
    if (items) {
      Array.from(items).forEach((item) => {
        observer.observe(item);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12">Skills</h2>
        <div ref={skillsRef} className="space-y-8 max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="opacity-0">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium text-primary">{skill.name}</span>
                <span className="text-accent">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
