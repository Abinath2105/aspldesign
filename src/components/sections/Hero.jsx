import React, { useEffect, useRef, useState, useCallback } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles,
  Code2,
  Camera,
  GraduationCap,
  Laptop,
  UtensilsCrossed,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Play,
  MousePointer2,
  ChevronDown
} from 'lucide-react';
import './Hero.css';

// Import images
import businessImg from '../img/business.jpg';
import hospitalityImg from '../img/event.jpg';
import laptopImg from '../img/laptop.jpg';
import trainingImg from '../img/training.jpg';
import creatorImg from '../img/podcast.jpg';

const Hero = () => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isVisible, setIsVisible] = useState(false);
  
  const whatsappNumber = "919843406360";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi ASPL Team! I'm interested in growing my business. Let's talk!")}`;

  // Entrance animation
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Mouse parallax tracking
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % serviceTabs.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Preload images
  useEffect(() => {
    const images = [businessImg, hospitalityImg, laptopImg, trainingImg, creatorImg];
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => setImageLoaded(prev => ({ ...prev, [index]: true }));
    });
  }, []);

  const serviceTabs = [
    {
      id: 'business',
      icon: Code2,
      label: 'Business Services',
      shortLabel: 'Business',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A855F7 100%)',
      color: '#6366F1',
      bgColor: '#EEF2FF',
      image: businessImg,
      stats: { value: '200+', label: 'Projects', suffix: 'Delivered' },
      features: ['Web & App Development', 'Digital Marketing', 'UI/UX Design', 'Cloud Solutions'],
      tagline: 'We architect digital ecosystems that drive revenue and scale operations.',
      overlayGradient: 'linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 60%, #0A0A0F 100%)',
      accentGradient: 'linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(139,92,246,0.2) 100%)',
      glassGradient: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.08) 100%)',
    },
    {
      id: 'hospitality',
      icon: UtensilsCrossed,
      label: 'Hospitality & Events',
      shortLabel: 'Hospitality',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #F97316 100%)',
      color: '#F59E0B',
      bgColor: '#FFFBEB',
      image: hospitalityImg,
      stats: { value: '500+', label: 'Events', suffix: 'Managed' },
      features: ['Corporate Events', 'Wedding Planning', 'Catering Services', 'Venue Management'],
      tagline: 'We craft immersive experiences that resonate, inspire, and leave lasting impressions.',
      overlayGradient: 'linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 60%, #0A0A0F 100%)',
      accentGradient: 'linear-gradient(135deg, rgba(245,158,11,0.4) 0%, rgba(239,68,68,0.2) 100%)',
      glassGradient: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(239,68,68,0.08) 100%)',
    },
    {
      id: 'laptops',
      icon: Laptop,
      label: 'Laptop Solutions',
      shortLabel: 'Laptops',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #34D399 100%)',
      color: '#10B981',
      bgColor: '#ECFDF5',
      image: laptopImg,
      stats: { value: '1000+', label: 'Devices', suffix: 'Sold' },
      features: ['Refurbished Laptops', 'Bulk Orders', 'Service & Warranty', 'Student Discounts'],
      tagline: 'Premium refurbished technology that delivers enterprise performance at startup prices.',
      overlayGradient: 'linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 60%, #0A0A0F 100%)',
      accentGradient: 'linear-gradient(135deg, rgba(16,185,129,0.4) 0%, rgba(5,150,105,0.2) 100%)',
      glassGradient: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.08) 100%)',
    },
    {
      id: 'training',
      icon: GraduationCap,
      label: 'Training & Skills',
      shortLabel: 'Training',
      gradient: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #06B6D4 100%)',
      color: '#0EA5E9',
      bgColor: '#F0F9FF',
      image: trainingImg,
      stats: { value: '10+', label: 'Courses', suffix: 'Available' },
      features: ['Live Project Training', 'Industry Mentorship', 'Portfolio Building', 'Job Assistance'],
      tagline: 'Learn by building. Real projects, real mentors, real career transformation.',
      overlayGradient: 'linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 60%, #0A0A0F 100%)',
      accentGradient: 'linear-gradient(135deg, rgba(14,165,233,0.4) 0%, rgba(59,130,246,0.2) 100%)',
      glassGradient: 'linear-gradient(135deg, rgba(14,165,233,0.15) 0%, rgba(59,130,246,0.08) 100%)',
    },
    {
      id: 'creator',
      icon: Camera,
      label: 'Creator Studio',
      shortLabel: 'Studio',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 50%, #F472B6 100%)',
      color: '#EC4899',
      bgColor: '#FDF2F8',
      image: creatorImg,
      stats: { value: '50+', label: 'Creators', suffix: 'Empowered' },
      features: ['Podcast Production', 'Video Shooting', 'Script Writing', 'Post Production'],
      tagline: 'Where your content vision meets professional production — lights, camera, action.',
      overlayGradient: 'linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 60%, #0A0A0F 100%)',
      accentGradient: 'linear-gradient(135deg, rgba(236,72,153,0.4) 0%, rgba(139,92,246,0.2) 100%)',
      glassGradient: 'linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(139,92,246,0.08) 100%)',
    }
  ];

  const activeService = serviceTabs[activeTab];

  return (
    <section 
      className="hero-masterpiece" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      
      {/* ============================================
           BACKGROUND - CINEMATIC IMAGE SYSTEM
           ============================================ */}
      <div className="hero-masterpiece__bg">
        {/* Image layers with crossfade */}
        {serviceTabs.map((service, index) => (
          <div
            key={service.id}
            className={`hero-masterpiece__bg-image ${index === activeTab ? 'hero-masterpiece__bg-image--active' : 'hero-masterpiece__bg-image--hidden'}`}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="hero-masterpiece__bg-overlay" style={{ background: service.overlayGradient }} />
          </div>
        ))}
        
        {/* Parallax accent gradient */}
        <div 
          className="hero-masterpiece__accent"
          style={{ 
            background: activeService.accentGradient,
            transform: `translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * -30}px)`
          }}
        />
        
        {/* Geometric accent shapes */}
        <div className="hero-masterpiece__geometry">
          <div 
            className="hero-masterpiece__geo hero-masterpiece__geo--1"
            style={{ 
              borderColor: `${activeService.color}20`,
              background: `${activeService.color}05`,
              transform: `translate(${(mousePos.x - 0.5) * -50}px, ${(mousePos.y - 0.5) * -50}px) rotate(${(mousePos.x - 0.5) * 15}deg)`
            }}
          />
          <div 
            className="hero-masterpiece__geo hero-masterpiece__geo--2"
            style={{ 
              borderColor: `${activeService.color}15`,
              background: `${activeService.color}03`,
              transform: `translate(${(mousePos.x - 0.5) * -80}px, ${(mousePos.y - 0.5) * -80}px) rotate(${(mousePos.y - 0.5) * -20}deg)`
            }}
          />
        </div>

        {/* Floating orb */}
        <div 
          className="hero-masterpiece__orb"
          style={{ 
            background: `radial-gradient(circle, ${activeService.color}25 0%, transparent 70%)`,
            transform: `translate(${mousePos.x * 60 - 30}px, ${mousePos.y * 60 - 30}px)`
          }}
        />
      </div>

      {/* ============================================
           MAIN CONTENT
           ============================================ */}
      <div className={`hero-masterpiece__content ${isVisible ? 'hero-masterpiece__content--visible' : ''}`}>
        
        {/* Top bar */}
        {/* <div className="hero-masterpiece__topbar">
          <div className="hero-masterpiece__topbar-inner">
            <div className="hero-masterpiece__logo-mark">
              <div className="hero-masterpiece__logo-diamond" />
              <span className="hero-masterpiece__logo-text">ASPL</span>
            </div>
            <div className="hero-masterpiece__status">
              <span className="hero-masterpiece__status-dot" />
              <span className="hero-masterpiece__status-text">Available for projects</span>
            </div>
          </div>
        </div> */}

        {/* Hero body */}
        <div className="hero-masterpiece__body">
          
          {/* LEFT - Main messaging */}
          <div className="hero-masterpiece__left">
            
            {/* Category badge */}
            {/* <div className="hero-masterpiece__category-row">
              {serviceTabs.map((service, index) => (
                <button
                  key={service.id}
                  className={`hero-masterpiece__category-pill ${index === activeTab ? 'hero-masterpiece__category-pill--active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  style={{
                    '--pill-color': service.color,
                    '--pill-bg': `${service.color}15`
                  }}
                >
                  <service.icon size={13} />
                  <span>{service.shortLabel}</span>
                </button>
              ))}
            </div> */}

            {/* Main headline */}
            <h1 className="hero-masterpiece__headline">
              <span className="hero-masterpiece__headline-top">We turn</span>
              <span className="hero-masterpiece__headline-main">
                <span 
                  className="hero-masterpiece__headline-highlight"
                  style={{ 
                    backgroundImage: activeService.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {activeService.label}
                </span>
              </span>
              <span className="hero-masterpiece__headline-bottom">into growth engines</span>
            </h1>

            {/* Tagline */}
            <p className="hero-masterpiece__tagline">
              {activeService.tagline}
            </p>

            {/* Feature tags */}
            <div className="hero-masterpiece__feature-tags">
              {activeService.features.map((feat, i) => (
                <span 
                  key={i} 
                  className="hero-masterpiece__feature-tag"
                  style={{ 
                    '--tag-color': activeService.color,
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  <Star size={10} fill={activeService.color} color={activeService.color} />
                  {feat}
                </span>
              ))}
            </div>

            {/* CTA + Stats row */}
            <div className="hero-masterpiece__action-row">
              <a href="#contact" className="hero-masterpiece__cta" style={{ background: activeService.gradient }}>
                <span>Start Your Project</span>
                <div className="hero-masterpiece__cta-arrow">
                  <ArrowRight size={16} />
                </div>
                <div className="hero-masterpiece__cta-shine" />
              </a>
              
              {/* <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hero-masterpiece__whatsapp-cta">
                <MessageCircle size={16} />
                <span>Quick Chat</span>
              </a> */}
            </div>

            {/* Stats */}
            {/* <div className="hero-masterpiece__stats">
              <div className="hero-masterpiece__stat" style={{ borderColor: `${activeService.color}20` }}>
                <span className="hero-masterpiece__stat-value" style={{ color: activeService.color }}>
                  {activeService.stats.value}
                </span>
                <span className="hero-masterpiece__stat-label">{activeService.stats.label}</span>
                <span className="hero-masterpiece__stat-suffix">{activeService.stats.suffix}</span>
              </div>
              <div className="hero-masterpiece__stat" style={{ borderColor: `${activeService.color}20` }}>
                <span className="hero-masterpiece__stat-value" style={{ color: activeService.color }}>4.9</span>
                <span className="hero-masterpiece__stat-label">Client Rating</span>
                <span className="hero-masterpiece__stat-suffix">★★★★★</span>
              </div>
              <div className="hero-masterpiece__stat" style={{ borderColor: `${activeService.color}20` }}>
                <span className="hero-masterpiece__stat-value" style={{ color: activeService.color }}>24/7</span>
                <span className="hero-masterpiece__stat-label">Support</span>
                <span className="hero-masterpiece__stat-suffix">Always</span>
              </div>
            </div> */}
          </div>

          {/* RIGHT - Preview card */}
          {/* <div className="hero-masterpiece__right">
            <div 
              className="hero-masterpiece__preview"
              style={{ 
                background: activeService.glassGradient,
                borderColor: `${activeService.color}20`,
                transform: `translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)`
              }}
            >
              
              <div className="hero-masterpiece__preview-header">
                <div className="hero-masterpiece__preview-dots">
                  <div className="hero-masterpiece__preview-dot hero-masterpiece__preview-dot--red" />
                  <div className="hero-masterpiece__preview-dot hero-masterpiece__preview-dot--yellow" />
                  <div className="hero-masterpiece__preview-dot hero-masterpiece__preview-dot--green" />
                </div>
                <div className="hero-masterpiece__preview-url" style={{ color: `${activeService.color}80` }}>
                  aspl.tech/{activeService.id}
                </div>
              </div>

            
              <div className="hero-masterpiece__preview-body">
                <div className="hero-masterpiece__preview-icon" style={{ background: activeService.gradient }}>
                  <activeService.icon size={28} color="#FFFFFF" />
                </div>
                
                <div className="hero-masterpiece__preview-stat-card">
                  <span className="hero-masterpiece__preview-stat-value" style={{ color: activeService.color }}>
                    {activeService.stats.value}
                  </span>
                  <span className="hero-masterpiece__preview-stat-label">
                    {activeService.stats.label} {activeService.stats.suffix}
                  </span>
                </div>

                <div className="hero-masterpiece__preview-features">
                  {activeService.features.slice(0, 3).map((feat, i) => (
                    <span key={i} className="hero-masterpiece__preview-feat">
                      <Zap size={10} color={activeService.color} />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
     <div className="hero-masterpiece__preview-glow" style={{ background: `linear-gradient(135deg, ${activeService.color}30, transparent 60%)` }} />
            </div>

         
            <div className="hero-masterpiece__nav-dots">
              {serviceTabs.map((service, index) => (
                <button
                  key={index}
                  className={`hero-masterpiece__nav-dot ${index === activeTab ? 'hero-masterpiece__nav-dot--active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  style={{ '--dot-color': service.color }}
                >
                  {index === activeTab && <div className="hero-masterpiece__nav-dot-progress" />}
                </button>
              ))}
            </div>
          </div> */}
        </div>

        {/* Scroll indicator */}
        <div className="hero-masterpiece__scroll">
          <span>Discover More</span>
          <div className="hero-masterpiece__scroll-line">
            <div className="hero-masterpiece__scroll-thumb" />
          </div>
        </div>
      </div>

      {/* WhatsApp float */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hero-masterpiece__whatsapp-float">
        <div className="hero-masterpiece__whatsapp-float-pulse" />
        <MessageCircle size={20} color="#FFFFFF" />
      </a>
    </section>
  );
};

export default Hero;