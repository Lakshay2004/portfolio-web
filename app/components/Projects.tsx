'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory management, payment integration, and admin dashboard.',
    image: '/images/project1.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project1',
  },
  {
    id: 2,
    title: 'Social Media App',
    description:
      'A modern social media application with real-time messaging, post sharing, and interactive user profiles.',
    image: '/images/project2.jpg',
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project2',
  },
  {
    id: 3,
    title: 'Task Management System',
    description:
      'Collaborative task management tool with drag-and-drop functionality, team collaboration, and progress tracking.',
    image: '/images/project3.jpg',
    tags: ['React', 'Express', 'MongoDB', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project3',
  },
  {
    id: 4,
    title: 'AI Content Generator',
    description:
      'AI-powered content generation tool using OpenAI API for creating blog posts, social media content, and more.',
    image: '/images/project4.jpg',
    tags: ['Next.js', 'OpenAI', 'Tailwind', 'Prisma'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project4',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="projects" ref={sectionRef} className="py-20 lg:py-32 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing some of my best work and side projects that demonstrate my skills and passion
            for development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            className="!pb-16"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="!w-full max-w-lg">
                <div className="group relative bg-black/40 border border-gray-800 rounded-xl overflow-hidden hover:border-accent transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl">🚀</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                      >
                        <HiExternalLink className="text-xl" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                      >
                        <HiCode className="text-xl" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #3b82f6;
        }
        .swiper-pagination-bullet {
          background: #3b82f6;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6;
        }
      `}</style>
    </section>
  );
}
