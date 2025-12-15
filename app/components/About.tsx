'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -50,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div ref={imageRef} className="relative">
              <div className="aspect-square max-w-md mx-auto relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-6xl text-gray-600">👨‍💻</span>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-accent">About</span> Me
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-300 text-lg mb-6">
              I&apos;m a passionate Full Stack Developer with a keen eye for creating elegant
              solutions to complex problems. With expertise in modern web technologies, I bring
              ideas to life through clean, efficient code.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-400 mb-8">
              My journey in web development started several years ago, and since then, I&apos;ve
              had the privilege of working on diverse projects ranging from responsive web
              applications to complex backend systems. I&apos;m constantly learning and adapting
              to new technologies to deliver the best possible solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
                  <p className="text-accent font-bold text-2xl">5+</p>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
                  <p className="text-accent font-bold text-2xl">50+</p>
                  <p className="text-gray-400 text-sm">Projects Completed</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
                  <p className="text-accent font-bold text-2xl">30+</p>
                  <p className="text-gray-400 text-sm">Happy Clients</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
                  <p className="text-accent font-bold text-2xl">10+</p>
                  <p className="text-gray-400 text-sm">Technologies</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-colors"
              >
                Let&apos;s Work Together
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
