// src/components/sections/Training.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiAcademicCap, HiClock, HiUserGroup, HiBadgeCheck,
  HiTrendingUp, HiCode, HiChartPie, HiColorSwatch 
} from 'react-icons/hi';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';

const courses = [
  {
    icon: HiCode,
    title: 'Full Stack Development',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    topics: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    color: 'from-blue-500 to-cyan-500',
    students: 1200,
  },
  {
    icon: HiColorSwatch,
    title: 'UI/UX Design',
    duration: '8 Weeks',
    level: 'All Levels',
    topics: ['Design Thinking', 'Figma', 'User Research', 'Prototyping'],
    color: 'from-purple-500 to-pink-500',
    students: 800,
  },
  {
    icon: HiChartPie,
    title: 'Data Analytics',
    duration: '10 Weeks',
    level: 'Intermediate',
    topics: ['Python', 'SQL', 'Power BI', 'Machine Learning'],
    color: 'from-green-500 to-emerald-500',
    students: 600,
  },
  {
    icon: HiTrendingUp,
    title: 'Digital Marketing',
    duration: '6 Weeks',
    level: 'Beginner Friendly',
    topics: ['SEO', 'Social Media', 'Google Ads', 'Analytics'],
    color: 'from-orange-500 to-red-500',
    students: 1500,
  },
];

const features = [
  {
    icon: HiAcademicCap,
    title: 'Practical Learning',
    description: 'Work on real projects, not just theory',
  },
  {
    icon: HiClock,
    title: 'Flexible Schedule',
    description: 'Learn at your own pace with mentor support',
  },
  {
    icon: HiUserGroup,
    title: 'Small Batches',
    description: 'Personalized attention with 1:15 ratio',
  },
  {
    icon: HiBadgeCheck,
    title: 'Job Ready Skills',
    description: 'Industry-recognized certification',
  },
];

const Training = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  return (
    <section id="training" className="relative py-24 bg-dark-900/50">
      <div className="container-custom section-padding">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Launch Your Career with{" "}
            <span className="gradient-text">Practical Training</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Industry-focused courses designed to make you job-ready. 
            Learn by building real projects under expert mentorship.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-dark-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </AnimatedSection>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <AnimatedSection key={course.title} delay={index * 0.1}>
              <motion.div
                className="glass-card p-6 h-full relative overflow-hidden cursor-pointer"
                onHoverStart={() => setHoveredCourse(index)}
                onHoverEnd={() => setHoveredCourse(null)}
                whileHover={{ y: -5 }}
              >
                {/* Gradient Overlay on Hover */}
                <AnimatePresence>
                  {hoveredCourse === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5`}
                    />
                  )}
                </AnimatePresence>

                {/* Course Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center mb-4`}>
                  <course.icon className="w-6 h-6 text-white" />
                </div>

                {/* Course Info */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {course.title}
                </h3>
                
                <div className="flex items-center space-x-4 text-sm text-dark-400 mb-4">
                  <span className="flex items-center">
                    <HiClock className="mr-1" />
                    {course.duration}
                  </span>
                  <span>{course.level}</span>
                </div>

                {/* Topics */}
                <div className="space-y-2 mb-6">
                  {course.topics.map((topic) => (
                    <div key={topic} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary-400 rounded-full" />
                      <span className="text-dark-300 text-sm">{topic}</span>
                    </div>
                  ))}
                </div>

                {/* Students Count & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-dark-400 text-sm">
                    {course.students}+ students
                  </span>
                  <Button variant="primary" size="sm">
                    Enroll Now
                  </Button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;