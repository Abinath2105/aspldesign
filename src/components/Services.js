import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import './Services.css';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const categories = [
    {
      label: 'Business',
      title: 'Business Services',
      subtitle: 'Digital transformation engineered for growth.',
      color: '#4F46E5',
      colorLight: '#EEF2FF',
      colorAccent: '#818CF8',
      gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #A78BFA 100%)',
      stats: [
        { value: '200+', label: 'Projects' },
        { value: '4.9', label: 'Rating' },
        { value: '25+', label: 'Experts' },
      ],
      items: [
        { title: 'Web & App Development', description: 'Scalable platforms engineered with modern stacks and architecture.', tag: 'React · Node.js · AWS' },
        { title: 'Digital Marketing', description: 'Performance campaigns driven by data, optimized for return.', tag: 'SEO · PPC · Analytics' },
        { title: 'UI/UX Design', description: 'Interfaces that convert visitors into lifelong customers.', tag: 'Figma · Design Systems' },
        // { title: 'Compliance & Finance', description: 'Complete regulatory management for peace of mind.', tag: 'GST · Audits · Filing' },
 
      ]
    },
    {
      label: 'Hospitality',
      title: 'Hospitality & Events',
      subtitle: 'Experiences crafted with precision and artistry.',
      color: '#EA580C',
      colorLight: '#FFF7ED',
      colorAccent: '#FB923C',
      gradient: 'linear-gradient(135deg, #EA580C 0%, #F97316 50%, #FDBA74 100%)',
      stats: [
        { value: '500+', label: 'Events' },
        { value: '4.8', label: 'Rating' },
        { value: '30+', label: 'Specialists' },
      ],
      items: [
        // { title: 'Premium Dining', description: 'Multi-cuisine excellence in an atmosphere of refined comfort.', tag: 'Indian · Chinese · Italian' },
        { title: 'Corporate Events', description: 'Impeccable planning for discerning professional audiences.', tag: 'Conferences · Galas' },
        { title: 'Weddings & Celebrations', description: 'Your vision honored with meticulous attention to detail.', tag: 'Decor · Catering' },
        { title: 'Full-Service Management', description: 'Concept through completion — seamless and stress-free.', tag: 'Venue · Logistics' },
      ]
    },
    {
      label: 'Technology',
      title: 'Laptop Solutions',
      subtitle: 'Premium devices made accessible, never compromised.',
      color: '#059669',
      colorLight: '#ECFDF5',
      colorAccent: '#34D399',
      gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #6EE7B7 100%)',
      stats: [
        { value: '1000+', label: 'Units' },
        { value: '4.9', label: 'Rating' },
        { value: '15+', label: 'Tech Team' },
      ],
      items: [
        { title: 'Certified Refurbished', description: 'Rigorously tested devices with comprehensive warranty.', tag: '8–12 Month Warranty' },
        { title: 'Enterprise Procurement', description: 'Custom configurations at scale with dedicated support.', tag: 'Tailored Solutions' },
        { title: 'Support & Service', description: 'Technical assistance available when and how you need it.', tag: '24/7 Help Desk' },
    //     { title: 'Education Access', description: 'Special pricing that empowers students and startups.', tag: 'Up to 40% Savings' },
       ]
    },
    {
      label: 'Education',
      title: 'Training & Skills',
      subtitle: 'Learning experiences that translate directly to careers.',
      color: '#0284C7',
      colorLight: '#F0F9FF',
      colorAccent: '#38BDF8',
      gradient: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 50%, #7DD3FC 100%)',
      stats: [
        { value: '50+', label: 'Courses' },
        { value: '4.7', label: 'Rating' },
        { value: '20+', label: 'Mentors' },
      ],
      items: [
        { title: 'Digital Marketing', description: 'Master real campaigns with actual budgets and data.', tag: '3-Month Intensive' },
        { title: 'Full Stack Development', description: 'Build production-ready apps from architecture to deployment.', tag: 'Java · React · Python' },
        // { title: 'UI/UX Design', description: 'Craft experiences through design thinking and tools.', tag: 'Portfolio Included' },
        { title: 'Professional Skills', description: 'Communication and presence for high-stakes environments.', tag: 'Mock Interviews' },
      ]
    },
    {
      label: 'Creative',
      title: 'Creator Studio',
      subtitle: 'Where ideas crystallize and content becomes art.',
      color: '#DB2777',
      colorLight: '#FDF2F8',
      colorAccent: '#F472B6',
      gradient: 'linear-gradient(135deg, #DB2777 0%, #EC4899 50%, #F9A8D4 100%)',
      stats: [
        { value: '100+', label: 'Productions' },
        { value: '5.0', label: 'Rating' },
        { value: '10+', label: 'Creatives' },
      ],
      items: [
        { title: 'Studio & Lighting', description: 'Cinema-grade environment for stunning visual output.', tag: '4K · Pro Lighting' },
        // { title: 'Multi-Camera Production', description: 'Dynamic storytelling from multiple perspectives.', tag: '3-Camera Setup' },
        { title: 'Post-Production', description: 'Expert editing, color grading, and sound design.', tag: 'Premiere · DaVinci' },
        { title: 'Creative Partnership', description: 'End-to-end support from concept to delivery.', tag: 'Full Crew · Full Service' },
      ]
    },
  ];

  const active = categories[activeIndex];

  // Scroll progress tracking for dynamic background
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      const scrollStart = rect.top;
      const progress = Math.max(0, Math.min(1, -scrollStart / (sectionHeight - windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCategoryChange = useCallback((index) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setHoveredCard(null);
    setTimeout(() => setIsTransitioning(false), 400);
  }, [activeIndex, isTransitioning]);

  return (
    <section id="services" className="aether" ref={sectionRef}>
      
      {/* ================================================================ */}
      {/* DYNAMIC GRADIENT MESH BACKGROUND */}
      {/* ================================================================ */}
      <div className="aether__atmosphere">
        <div 
          className="aether__atmosphere-layer aether__atmosphere-layer--1"
          style={{ 
            opacity: 0.5 + scrollProgress * 0.3,
            transform: `translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px)` 
          }}
        />
        <div 
          className="aether__atmosphere-layer aether__atmosphere-layer--2"
          style={{ 
            opacity: 0.3 + scrollProgress * 0.4,
            transform: `translate(${(mousePosition.x - 0.5) * -30}px, ${(mousePosition.y - 0.5) * -30}px)` 
          }}
        />
        <div 
          className="aether__atmosphere-layer aether__atmosphere-layer--3"
          style={{ 
            background: active.gradient,
            opacity: 0.08 + scrollProgress * 0.06,
            transform: `translate(${(mousePosition.x - 0.5) * 15}px, ${(mousePosition.y - 0.5) * 15}px) scale(${1 + scrollProgress * 0.1})`
          }}
        />
        {/* Floating particles */}
        <div className="aether__particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="aether__particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 10}s`,
                opacity: 0.15 + Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="aether__container">
        
        {/* ================================================================ */}
        {/* SECTION HEADER */}
        {/* ================================================================ */}
        <header className="aether__header">
          <div className="aether__kicker">
            <span className="aether__kicker-line" />
            Our Services
          </div>
          <h2 className="aether__heading">
            Everything you need
            <br />
            <span className="aether__heading-accent">in one place</span>
          </h2>
          <p className="aether__subheading">
            Five integrated divisions orbiting a shared mission — your success. 
            From code to cuisine, from pixels to productions.
          </p>
        </header>

        {/* ================================================================ */}
        {/* CATEGORY TABS — FLOATING GLASS PILLS */}
        {/* ================================================================ */}
        <nav className="aether__tabs" aria-label="Service categories">
          <div className="aether__tabs-track">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`aether__tab ${activeIndex === i ? 'aether__tab--active' : ''}`}
                onClick={() => handleCategoryChange(i)}
                style={{
                  '--tab-color': cat.color,
                  '--tab-gradient': cat.gradient,
                }}
              >
                <span className="aether__tab-label">{cat.label}</span>
                {activeIndex === i && (
                  <span className="aether__tab-glow" />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* ================================================================ */}
        {/* ACTIVE CATEGORY SHOWCASE */}
        {/* ================================================================ */}
        <div 
          className={`aether__showcase ${isTransitioning ? 'aether__showcase--morphing' : ''}`} 
          key={activeIndex}
          ref={contentRef}
        >
          
          {/* Category Hero Card */}
          <div className="aether__hero" style={{ borderColor: `${active.color}20` }}>
            <div 
              className="aether__hero-bg"
              style={{ background: active.gradient }}
            />
            <div className="aether__hero-content">
              <div className="aether__hero-info">
                <h3 className="aether__hero-title">{active.title}</h3>
                <p className="aether__hero-subtitle">{active.subtitle}</p>
              </div>
              
              <div className="aether__hero-stats">
                {active.stats.map((stat, i) => (
                  <div key={i} className="aether__hero-stat">
                    <span className="aether__hero-stat-value" style={{ color: active.color }}>
                      {stat.value}
                    </span>
                    <span className="aether__hero-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Cards — Glass Morphing Grid */}
          <div className="aether__grid">
            {active.items.map((item, i) => {
              const isHovered = hoveredCard === `${activeIndex}-${i}`;
              return (
                <article
                  key={i}
                  className={`aether__card ${isHovered ? 'aether__card--revealed' : ''}`}
                  onMouseEnter={() => setHoveredCard(`${activeIndex}-${i}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    '--card-color': active.color,
                    '--card-gradient': active.gradient,
                    '--card-light': active.colorLight,
                  }}
                >
                  {/* Glass overlay on hover */}
                  <div className="aether__card-glass" />
                  
                  {/* Hover border gradient */}
                  <div className="aether__card-border" />
                  
                  {/* Content */}
                  <div className="aether__card-body">
                    <span className="aether__card-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    
                    <h4 className="aether__card-title">{item.title}</h4>
                    <p className="aether__card-desc">{item.description}</p>
                    
                    <div className="aether__card-tag-row">
                      <span className="aether__card-tag" style={{ 
                        color: active.color, 
                        backgroundColor: active.colorLight,
                      }}>
                        {item.tag}
                      </span>
                      
                      <span className="aether__card-icon" style={{ color: active.color }}>
                        <Plus size={14} strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="aether__card-corner" style={{ borderColor: active.color }} />
                </article>
              );
            })}
          </div>

          {/* Bottom CTA — Floating Banner */}
          <div className="aether__cta">
            <div className="aether__cta-inner" style={{ background: active.gradient }}>
              <div className="aether__cta-pattern" />
              <div className="aether__cta-content">
                <div>
                  <p className="aether__cta-heading">
                    Begin your {active.label.toLowerCase()} transformation
                  </p>
                  <p className="aether__cta-subtext">
                    Schedule a consultation with our specialists.
                  </p>
                </div>
                <a 
                  href="#contact" 
                  className="aether__cta-btn"
                >
                  <span>Start a Project</span>
                  <ArrowRight size={16} strokeWidth={2} />
                  <span className="aether__cta-btn-shine" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;