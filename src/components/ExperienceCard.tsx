
import { useRef } from 'react';
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
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.35]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [20, 0]);

  return (
    <div ref={cardRef} className="flex gap-6 items-start mb-16 relative" style={{ position: 'relative' }}>
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ opacity, scale }}
      >
        <img 
          src={illustration} 
          alt="" 
          className="w-full h-full object-contain opacity-50"
        />
      </motion.div>
      
      <motion.div 
        className="w-32 flex-shrink-0"
        style={{ opacity: textOpacity, y: textY }}
      >
        <span className="text-accent font-medium">{period}</span>
      </motion.div>
      
      <motion.div 
        className="flex-grow"
        style={{ opacity: textOpacity, y: textY }}
      >
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="text-secondary font-medium">{company}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </motion.div>
    </div>
  );
};
