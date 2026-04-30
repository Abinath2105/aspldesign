// src/components/sections/Portfolio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import AnimatedSection from '../ui/AnimatedSection';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack marketplace with real-time inventory management',
    image: '🛒',
    technologies: ['React', 'Node.js', 'MongoDB'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Healthcare App',
    category: 'App Development',
    description: 'Telemedicine platform with video consultation features',
    image: '🏥',
    technologies: ['React Native', 'Python', 'AWS'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Fintech Dashboard',
    category: 'UI/UX Design',
    description: 'Analytics dashboard for financial data visualization',
    image: '📊',
    technologies: ['Figma', 'React', 'D3.js'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    description: 'Multi-platform campaign reaching 1M+ impressions',
    image: '📱',
    technologies: ['Meta Ads', 'Google Ads', 'Analytics'],
    color: 'from-orange-500 to-red-500',
  },
];

const categories = ['All', 'Web Development', 'App Development', 'UI/UX Design', 'Digital Marketing'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 bg-dark-900/50">
      <div className="container-custom section-padding">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text">Recent Work</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Explore some of our latest projects showcasing our expertise 
            across different domains and technologies.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-white/5 text-dark-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                className="group relative glass-card p-8 cursor-pointer"
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -5 }}
              >
                {/* Project Icon */}
                <div className={`text-6xl mb-6 inline-block p-4 bg-gradient-to-br ${project.color} rounded-2xl`}>
                  {project.image}
                </div>

                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-300 text-sm rounded-full mb-3">
                  {project.category}
                </span>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-dark-400 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-dark-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Action */}
                <AnimatePresence>
                  {hoveredProject === index && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex items-center text-primary-400"
                    >
                      <span className="text-sm font-medium">View Case Study</span>
                      <HiExternalLink className="ml-2" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;