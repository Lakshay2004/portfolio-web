'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiBriefcase, HiCalendar } from 'react-icons/hi';

const experiences = [
  {
    id: 1,
    company: 'Tech Innovations Inc.',
    role: 'Senior Full Stack Developer',
    duration: '2022 - Present',
    description:
      'Leading a team of developers in building scalable web applications. Implemented microservices architecture and improved application performance by 40%.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript'],
  },
  {
    id: 2,
    company: 'Digital Solutions Ltd.',
    role: 'Full Stack Developer',
    duration: '2020 - 2022',
    description:
      'Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers to deliver high-quality solutions.',
    technologies: ['Vue.js', 'Python', 'MongoDB', 'GraphQL'],
  },
  {
    id: 3,
    company: 'StartUp Ventures',
    role: 'Frontend Developer',
    duration: '2019 - 2020',
    description:
      'Built responsive and interactive user interfaces for various web applications. Worked closely with UX designers to implement pixel-perfect designs.',
    technologies: ['React', 'Redux', 'Sass', 'Jest'],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="experience" ref={sectionRef} className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-accent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the companies I&apos;ve had the pleasure to work with.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent via-purple-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-black z-10" />

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 hover:border-accent transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <HiBriefcase className="text-xl" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <HiCalendar />
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
