'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiFigma,
} from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: SiReact, level: 90 },
      { name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { name: 'TypeScript', icon: SiTypescript, level: 88 },
      { name: 'JavaScript', icon: SiJavascript, level: 95 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, level: 85 },
      { name: 'Python', icon: SiPython, level: 80 },
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 82 },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: SiGit, level: 90 },
      { name: 'Docker', icon: SiDocker, level: 75 },
      { name: 'Figma', icon: SiFigma, level: 85 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-accent">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build amazing
            digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div key={skillCategory.category} variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white mb-6">{skillCategory.category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategory.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group relative bg-zinc-900/50 border border-gray-800 rounded-xl p-6 hover:border-accent transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl text-accent group-hover:scale-110 transition-transform">
                        <skill.icon />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                        <p className="text-sm text-gray-400">{skill.level}% Proficiency</p>
                      </div>
                    </div>
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-accent rounded-full"
                      />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-accent/5 to-purple-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
