
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ExperienceCardProps {
  period: string;
  title: string;
  company: string;
  description: string;
  illustration: string;
}

export const ExperienceCard = ({ period, title, company, description, illustration }: ExperienceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [-100, 0, 0, -100]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, x }}
      className="flex gap-6 items-start mb-16 relative"
    >
      <div className="w-32 flex-shrink-0">
        <span className="text-accent font-medium">{period}</span>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="text-secondary font-medium">{company}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <div className="absolute -z-10 right-0 opacity-20">
        <img src={illustration} alt="" className="w-32 h-32 object-contain" />
      </div>
    </motion.div>
  );
};
