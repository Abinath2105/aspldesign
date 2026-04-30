

import React, { useState, useRef, useEffect } from 'react';
import { 
  Code, 
  Palette, 
  GraduationCap, 
  Mic, 
  UtensilsCrossed, 
  Laptop,
  BarChart3,
  Shield,
  Briefcase,
  Printer,
  Users,
  Camera,
  ArrowRight,
  Sparkles,
  Star,
  Zap,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);

  const services = [
    {
      id: 'business',
      category: 'Business Services',
      icon: Briefcase,
      gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      color: '#6366F1',
      bgColor: '#EEF2FF',
      tagline: 'Digital transformation under one roof',
      stats: { projects: '200+', clients: '150+', rating: '4.9' },
      items: [
        { name: 'Web & App Development', icon: Code, desc: 'Scalable platforms built with cutting-edge tech', highlight: 'React, Node.js, AWS' },
        { name: 'Digital Marketing & Branding', icon: BarChart3, desc: 'Data-driven campaigns that deliver real ROI', highlight: 'SEO, PPC, Social Media' },
        { name: 'UI/UX & Graphic Design', icon: Palette, desc: 'Human-centered designs that convert visitors', highlight: 'Figma, Prototyping' },
        { name: 'GST, Finance & Compliance', icon: Shield, desc: 'Hassle-free regulatory compliance management', highlight: 'GST Filing, Audits' },
        { name: 'Manpower & Staffing', icon: Users, desc: 'Right talent, right role, right time', highlight: 'IT & Non-IT Roles' },
        { name: 'Printing & Production', icon: Printer, desc: 'Premium print collateral for your brand', highlight: 'Brochures, Merchandise' },
      ]
    },
    {
      id: 'hospitality',
      category: 'Hospitality & Events',
      icon: UtensilsCrossed,
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
      color: '#F59E0B',
      bgColor: '#FFFBEB',
      tagline: 'Creating unforgettable experiences',
      stats: { projects: '500+', clients: '300+', rating: '4.8' },
      items: [
        { name: 'Multi-cuisine Restaurant', icon: UtensilsCrossed, desc: 'Premium dining with diverse culinary options', highlight: 'Indian, Chinese, Italian' },
        { name: 'Corporate Events', icon: Briefcase, desc: 'Professional event planning & execution', highlight: 'Conferences, Seminars' },
        { name: 'Weddings & Celebrations', icon: Star, desc: 'Your dream celebration brought to life', highlight: 'Decor, Catering, Planning' },
        { name: 'End-to-End Execution', icon: CheckCircle2, desc: 'From concept to flawless delivery', highlight: 'Venue, Logistics, Sound' },
      ]
    },
    {
      id: 'laptops',
      category: 'Laptop Solutions',
      icon: Laptop,
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      color: '#10B981',
      bgColor: '#ECFDF5',
      tagline: 'Premium tech at accessible prices',
      stats: { projects: '1000+', clients: '800+', rating: '4.9' },
      items: [
        { name: 'Refurbished Laptops', icon: Laptop, desc: 'Quality-tested devices with warranty', highlight: '8-12 Month Warranty' },
        { name: 'Bulk Corporate Orders', icon: Briefcase, desc: 'Enterprise-grade solutions at scale', highlight: 'Custom Configurations' },
        { name: 'Service & Support', icon: Shield, desc: 'Dedicated after-sales technical support', highlight: '24/7 Assistance' },
        { name: 'Student Discounts', icon: GraduationCap, desc: 'Special pricing for students & startups', highlight: 'Up to 40% Off' },
      ]
    },
    {
      id: 'training',
      category: 'Training & Skills',
      icon: GraduationCap,
      gradient: 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
      color: '#0EA5E9',
      bgColor: '#F0F9FF',
      tagline: 'Learn by building real products',
      stats: { projects: '50+', clients: '500+', rating: '4.7' },
      items: [
        { name: 'Digital Marketing Course', icon: BarChart3, desc: 'Practical training with live campaigns', highlight: '3 Month Program' },
        { name: 'Full Stack Development', icon: Code, desc: 'Java, Python, React & more', highlight: 'Live Projects' },
        { name: 'UI/UX Design', icon: Palette, desc: 'Design thinking & industry tools', highlight: 'Portfolio Building' },
        { name: 'Soft Skills & English', icon: Users, desc: 'Communication & professional excellence', highlight: 'Mock Interviews' },
      ]
    },
    {
      id: 'creator',
      category: 'Creator Studio',
      icon: Mic,
      gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
      color: '#EC4899',
      bgColor: '#FDF2F8',
      tagline: 'Where content comes to life',
      stats: { projects: '100+', clients: '50+', rating: '5.0' },
      items: [
        { name: 'Studio Setup & Lighting', icon: Camera, desc: 'Professional-grade recording environment', highlight: '4K Ready' },
        { name: 'Multi-cam Production', icon: Mic, desc: 'High-quality video with multiple angles', highlight: '3-Camera Setup' },
        { name: 'Editing & Post-Production', icon: Palette, desc: 'Expert editing, color grading & sound', highlight: 'Premiere Pro, DaVinci' },
        { name: 'Creator Support', icon: Users, desc: 'For brands, educators & influencers', highlight: 'End-to-End Service' },
      ]
    },
  ];

  // Scroll to category on mobile
  const scrollToCategory = (index) => {
    setActiveCategory(index);
    if (categoryRefs.current[index] && window.innerWidth < 768) {
      categoryRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeService = services[activeCategory];

  return (
    <section id="services" className="services-premium" ref={sectionRef}>
      
      {/* Background decorative elements */}
      <div className="services-premium__bg">

        {/* Floating Particles */}
<div className="services-premium__particles">
  {[...Array(12)].map((_, i) => (
    <div 
      key={i}
      className="services-premium__particle"
      style={{
        left: `${5 + Math.random() * 90}%`,
        top: `${5 + Math.random() * 90}%`,
        width: `${2 + Math.random() * 4}px`,
        height: `${2 + Math.random() * 4}px`,
        background: ['#6366F1', '#10B981', '#F59E0B', '#EC4899'][i % 4],
        opacity: 0.15 + Math.random() * 0.15,
        '--px': `${(Math.random() - 0.5) * 100}px`,
        '--py': `${(Math.random() - 0.5) * 100}px`,
        animationDuration: `${6 + Math.random() * 10}s`,
        animationDelay: `${Math.random() * 8}s`,
      }}
    />
  ))}
</div>
        <div className="services-premium__bg-orb services-premium__bg-orb--1" />
        <div className="services-premium__bg-orb services-premium__bg-orb--2" />
        <div className="services-premium__bg-grid" />
      </div>

      <div className="services-premium__container">
        
        {/* ============ SECTION HEADER ============ */}
        <div className="services-premium__header">
          {/* Pill Badge */}
          <div className="services-premium__badge">
            <Sparkles size={14} />
            <span>What We Offer</span>
          </div>

          <h2 className="services-premium__title">
            Everything you need,
            <span className="services-premium__title-gradient"> in one place</span>
          </h2>
          
          <p className="services-premium__subtitle">
            Five core verticals. Dozens of services. One partner for all your business, creative, and technical needs.
          </p>

  
        </div>

        {/* ============ ACTIVE CATEGORY CONTENT ============ */}
        <div className="services-premium__content">
          
          {/* Category Hero Card */}


          {/* Service Items Grid */}
          <div className="services-premium__grid">
            {activeService.items.map((item, index) => (
              <div
                key={index}
                className={`services-premium__item ${hoveredItem === index ? 'services-premium__item--hovered' : ''}`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ '--item-color': activeService.color, '--item-bg': activeService.bgColor }}
              >
                {/* Item Header */}
                <div className="services-premium__item-header">
                  <div className="services-premium__item-icon" style={{ backgroundColor: activeService.bgColor, color: activeService.color }}>
                    <item.icon size={18} />
                  </div>
                  <ChevronRight size={14} className="services-premium__item-chevron" />
                </div>

                {/* Item Content */}
                <h4 className="services-premium__item-name">{item.name}</h4>
                <p className="services-premium__item-desc">{item.desc}</p>

                {/* Highlight Tag */}
                <div className="services-premium__item-tag" style={{ color: activeService.color, backgroundColor: activeService.bgColor }}>
                  <Zap size={10} />
                  <span>{item.highlight}</span>
                </div>

                {/* Hover Glow */}
                <div className="services-premium__item-glow" style={{ background: activeService.gradient }} />
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="services-premium__banner" style={{ background: activeService.gradient }}>
            <div className="services-premium__banner-content">
              <div className="services-premium__banner-text">
                <Sparkles size={20} color="#fff" />
                <span>Ready to start your {activeService.category.toLowerCase()} journey?</span>
              </div>
              <a href="#contact" className="services-premium__banner-cta">
                <span>Let's Talk</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;