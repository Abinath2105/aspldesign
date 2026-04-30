// src/components/sections/Services.jsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  HiCode, 
  HiDeviceMobile,
  HiColorSwatch, 
  HiChartBar, 
  HiGlobe, 
  HiLightBulb,
  HiShieldCheck,
  HiUserGroup,
  HiBriefcase,
  HiAcademicCap,
  HiCamera,
  HiMicrophone,
  HiSparkles,
  HiArrowRight,
  HiStar,
  HiBadgeCheck
} from 'react-icons/hi';
import { 
  BsLaptop, 
  BsPrinter, 
  BsChevronRight 
} from 'react-icons/bs';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { MdRestaurant, MdEvent, MdCelebration, MdSupportAgent } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import Button from '../ui/Button';

const Service = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const inView = useInView(sectionRef, { 
    triggerOnce: true, 
    threshold: 0.1 
  });

  useEffect(() => {
    if (inView) setIsInView(true);
  }, [inView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const categories = [
    {
      id: 'business',
      label: 'Tech & Business',
      icon: HiBriefcase,
      gradient: 'from-primary-500 via-purple-500 to-blue-500',
      color: 'primary',
      tagline: 'Digital transformation under one roof',
      stats: [
        { value: '200+', label: 'Projects' },
        { value: '150+', label: 'Clients' },
        { value: '4.9', label: 'Rating' }
      ],
      items: [
        { 
          icon: HiCode, 
          title: 'Web & App Development',
          description: 'Scalable platforms built with cutting-edge technology',
          tags: ['React', 'Node.js', 'AWS'],
          features: ['Custom Web Apps', 'Mobile Apps', 'API Development', 'Cloud Solutions']
        },
        { 
          icon: HiChartBar, 
          title: 'Digital Marketing',
          description: 'Data-driven campaigns that deliver measurable ROI',
          tags: ['SEO', 'PPC', 'Social Media'],
          features: ['SEO Optimization', 'Google Ads', 'Social Media', 'Analytics']
        },
        { 
          icon: HiColorSwatch, 
          title: 'UI/UX Design',
          description: 'Human-centered designs that convert visitors into customers',
          tags: ['Figma', 'Prototyping', 'Design Systems'],
          features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
        },
        { 
          icon: HiShieldCheck, 
          title: 'Compliance & Finance',
          description: 'Hassle-free regulatory compliance and financial management',
          tags: ['GST Filing', 'Audits', 'Tax Planning'],
          features: ['GST Registration', 'Tax Filing', 'Company Compliance', 'Financial Advisory']
        },
        { 
          icon: HiUserGroup, 
          title: 'Staffing Solutions',
          description: 'Right talent, right role, right time for your business',
          tags: ['IT', 'Non-IT', 'Executive'],
          features: ['Tech Recruitment', 'Bulk Hiring', 'Contract Staffing', 'HR Consulting']
        },
        { 
          icon: BsPrinter, 
          title: 'Printing & Production',
          description: 'Premium print collateral that elevates your brand',
          tags: ['Brochures', 'Merchandise', 'Packaging'],
          features: ['Business Cards', 'Brochures', 'Banners', 'Custom Merchandise']
        }
      ]
    },
    {
      id: 'hospitality',
      label: 'Hospitality & Events',
      icon: MdRestaurant,
      gradient: 'from-orange-500 via-red-500 to-yellow-500',
      color: 'orange',
      tagline: 'Creating unforgettable experiences',
      stats: [
        { value: '500+', label: 'Events' },
        { value: '300+', label: 'Clients' },
        { value: '4.8', label: 'Rating' }
      ],
      items: [
        { 
          icon: MdRestaurant, 
          title: 'Multi-cuisine Restaurant',
          description: 'Premium dining experience with diverse culinary options',
          tags: ['Indian', 'Chinese', 'Italian'],
          features: ['Fine Dining', 'Quick Service', 'Catering', 'Private Events']
        },
        { 
          icon: MdEvent, 
          title: 'Corporate Events',
          description: 'Professional event planning and flawless execution',
          tags: ['Conferences', 'Seminars', 'Team Building'],
          features: ['Venue Selection', 'Catering', 'AV Setup', 'Event Management']
        },
        { 
          icon: MdCelebration, 
          title: 'Weddings & Celebrations',
          description: 'Your dream celebration brought to life with elegance',
          tags: ['Decor', 'Catering', 'Planning'],
          features: ['Venue Decoration', 'Menu Planning', 'Photography', 'Entertainment']
        },
        { 
          icon: MdSupportAgent, 
          title: 'Event Support',
          description: 'End-to-end event management and coordination',
          tags: ['Logistics', 'Sound', 'Lighting'],
          features: ['Equipment Rental', 'Staff Support', 'Setup & Teardown', 'Emergency Backup']
        }
      ]
    },
    {
      id: 'training',
      label: 'Training & Skills',
      icon: FaGraduationCap,
      gradient: 'from-sky-500 via-cyan-500 to-teal-500',
      color: 'sky',
      tagline: 'Learn by building real products',
      stats: [
        { value: '1000+', label: 'Students' },
        { value: '50+', label: 'Courses' },
        { value: '4.7', label: 'Rating' }
      ],
      items: [
        { 
          icon: HiCode, 
          title: 'Full Stack Development',
          description: 'Master frontend and backend with industry projects',
          tags: ['Java', 'Python', 'React'],
          features: ['3-Month Program', 'Live Projects', 'Mentorship', 'Job Placement']
        },
        { 
          icon: HiChartBar, 
          title: 'Digital Marketing',
          description: 'Practical training with live campaign management',
          tags: ['SEO', 'Google Ads', 'Analytics'],
          features: ['2-Month Program', 'Real Campaigns', 'Certification', 'Portfolio Building']
        },
        { 
          icon: HiColorSwatch, 
          title: 'UI/UX Design',
          description: 'Design thinking and industry-standard tool mastery',
          tags: ['Figma', 'Design Systems', 'Research'],
          features: ['2-Month Program', 'Design Projects', 'Portfolio', 'Mock Interviews']
        },
        { 
          icon: HiUserGroup, 
          title: 'Soft Skills & English',
          description: 'Communication excellence for professional growth',
          tags: ['Speaking', 'Writing', 'Presentation'],
          features: ['6-Week Program', 'Mock Sessions', 'Resume Building', 'Interview Prep']
        }
      ]
    },
    {
      id: 'creator',
      label: 'Creator Studio',
      icon: HiCamera,
      gradient: 'from-pink-500 via-rose-500 to-purple-500',
      color: 'pink',
      tagline: 'Where content comes to life',
      stats: [
        { value: '100+', label: 'Creators' },
        { value: '50+', label: 'Brands' },
        { value: '5.0', label: 'Rating' }
      ],
      items: [
        { 
          icon: HiCamera, 
          title: 'Professional Studio',
          description: '4K-ready recording environment with pro lighting',
          tags: ['4K Cameras', 'Lighting', 'Green Screen'],
          features: ['Multi-cam Setup', 'Studio Booking', 'Equipment Rental', 'Technical Support']
        },
        { 
          icon: HiMicrophone, 
          title: 'Audio Production',
          description: 'Crystal-clear sound recording and engineering',
          tags: ['Podcast', 'Voice Over', 'Music'],
          features: ['Audio Recording', 'Mixing & Mastering', 'Sound Design', 'Podcast Setup']
        },
        { 
          icon: HiColorSwatch, 
          title: 'Video Editing',
          description: 'Professional post-production and visual effects',
          tags: ['Premiere', 'DaVinci', 'After Effects'],
          features: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Final Delivery']
        },
        { 
          icon: HiUserGroup, 
          title: 'Creator Support',
          description: 'End-to-end support for brands and influencers',
          tags: ['Strategy', 'Production', 'Distribution'],
          features: ['Content Strategy', 'Production Help', 'Channel Management', 'Monetization Tips']
        }
      ]
    }
  ];

  const activeService = categories[activeCategory];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* ============ BACKGROUND EFFECTS ============ */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />
        </div>

        {/* Mouse-following gradient */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-3xl transition-transform duration-1000"
          style={{
            background: `radial-gradient(circle, ${activeService.color === 'primary' ? '#6366f1' : 
              activeService.color === 'orange' ? '#f97316' : 
              activeService.color === 'sky' ? '#0ea5e9' : '#ec4899'}, transparent 70%)`,
            transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
          }}
        />
      </div>

      {/* ============ MAIN CONTENT ============ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============ SECTION HEADER ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6"
          >
            <HiSparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">What We Offer</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Everything you need,{' '}
            <span className="gradient-text">in one place</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-lg md:text-xl text-dark-400 max-w-3xl mx-auto leading-relaxed"
          >
            Five core verticals. Dozens of services. One trusted partner for all your 
            business, creative, and technical needs.
          </motion.p>
        </motion.div>

        {/* ============ CATEGORY NAVIGATION ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white/5 hover:bg-white/10 text-dark-300 hover:text-white border border-white/10'
              }`}
            >
              <category.icon className={`w-4 h-4 ${
                activeCategory === index ? 'text-white' : 'text-dark-400 group-hover:text-white'
              }`} />
              <span>{category.label}</span>
              
              {/* Active indicator */}
              {activeCategory === index && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-primary-500 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* ============ ACTIVE CATEGORY CONTENT ============ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-8 mb-12 p-6 glass-card"
            >
              {activeService.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-dark-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Service Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {activeService.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="group relative glass-card p-6 md:p-8 cursor-pointer"
                >
                  {/* Hover Gradient Effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${activeService.gradient} opacity-[0.02]`} />
                  
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div 
                      className="absolute inset-[-2px] rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${
                          activeService.color === 'primary' ? '#6366f1' :
                          activeService.color === 'orange' ? '#f97316' :
                          activeService.color === 'sky' ? '#0ea5e9' : '#ec4899'
                        }, transparent)`
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${activeService.gradient}`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <motion.div
                        animate={{ x: hoveredItem === index ? 0 : -5 }}
                        transition={{ duration: 0.2 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        <BsChevronRight className="w-5 h-5 text-primary-400" />
                      </motion.div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-dark-400 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {item.features?.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <HiBadgeCheck className="w-4 h-4 text-primary-400 flex-shrink-0" />
                          <span className="text-dark-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-dark-300 group-hover:border-primary-500/20 group-hover:text-primary-300 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className={`relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-r ${activeService.gradient}`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <HiSparkles className="w-8 h-8 text-white" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Ready to start your {activeService.label.toLowerCase()} journey?
                    </h3>
                    <p className="text-white/80">
                      Let's discuss your project and find the perfect solution for your needs.
                    </p>
                  </div>
                </div>
                
                <Button variant="secondary" size="lg" className="bg-white text-dark-900 hover:bg-white/90 border-0 whitespace-nowrap">
                  <span>Let's Talk</span>
                  <HiArrowRight className="ml-2" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Service;