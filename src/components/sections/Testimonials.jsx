import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Building2,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Users,
  Award
} from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);
  const intervalRef = useRef(null);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'CEO, TechVentures India',
      company: 'TechVentures India',
      content: 'ASPL transformed our digital presence completely. Their end-to-end approach saved us months of coordination with multiple vendors. The team\'s technical expertise and commitment to deadlines exceeded our expectations.',
      rating: 5,
      icon: Building2,
      color: '#6366F1',
      bgColor: '#EEF2FF',
      project: 'Web & App Development',
      metrics: { label: 'Time Saved', value: '3 Months' }
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Marketing Head, EduLearn',
      company: 'EduLearn',
      content: 'The training programs are outstanding. Our team upgraded their skills with real projects, not just theory. The mentorship from industry professionals made all the difference in practical learning.',
      rating: 5,
      icon: GraduationCap,
      color: '#0EA5E9',
      bgColor: '#F0F9FF',
      project: 'Training & Development',
      metrics: { label: 'Team Trained', value: '25+' }
    },
    {
      id: 3,
      name: 'Arun Patel',
      role: 'Founder, StartupX',
      company: 'StartupX',
      content: 'From website to branding to compliance — everything handled flawlessly. A true one-stop solution that helped us launch 2 weeks ahead of schedule. Their flexible engagement model was perfect for our startup budget.',
      rating: 5,
      icon: Briefcase,
      color: '#10B981',
      bgColor: '#ECFDF5',
      project: 'Business Services',
      metrics: { label: 'Ahead of Schedule', value: '2 Weeks' }
    },
    {
      id: 4,
      name: 'Meera Reddy',
      role: 'Director, InnovateCorp',
      company: 'InnovateCorp',
      content: 'The event management team pulled off our annual conference flawlessly. 500+ attendees, zero hiccups. Their attention to detail and creative approach made it our most successful event yet.',
      rating: 5,
      icon: Award,
      color: '#F59E0B',
      bgColor: '#FFFBEB',
      project: 'Hospitality & Events',
      metrics: { label: 'Attendees', value: '500+' }
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Content Creator, YouTube',
      company: 'Creator Economy',
      content: 'The podcast studio setup is world-class. From lighting to editing, their team handles everything. My production quality improved dramatically, and my audience has doubled since working with ASPL.',
      rating: 5,
      icon: Users,
      color: '#EC4899',
      bgColor: '#FDF2F8',
      project: 'Creator Studio',
      metrics: { label: 'Audience Growth', value: '2x' }
    },
  ];

  const totalSlides = testimonials.length;

  // Auto-advance carousel
  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % totalSlides);
      }
    }, 5000);
  }, [isPaused, totalSlides]);

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [startInterval]);

  // Update visible testimonials for the slider
  useEffect(() => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + totalSlides) % totalSlides;
      visible.push({ ...testimonials[index], position: i });
    }
    setVisibleTestimonials(visible);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleDotClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="testimonials-premium" ref={sectionRef}>
      
      {/* Background */}
      <div className="testimonials-premium__bg">
        <div className="testimonials-premium__bg-orb testimonials-premium__bg-orb--1" />
        <div className="testimonials-premium__bg-orb testimonials-premium__bg-orb--2" />
      </div>

      <div className="testimonials-premium__container">
        
        {/* ============ SECTION HEADER ============ */}
        <div className="testimonials-premium__header">
          <div className="testimonials-premium__badge">
            <Sparkles size={14} />
            <span>Client Stories</span>
          </div>

          <h2 className="testimonials-premium__title">
            Trusted by
            <span className="testimonials-premium__title-gradient"> visionaries</span>
          </h2>
          
          <p className="testimonials-premium__subtitle">
            Real stories from real clients who've experienced the ASPL difference across our five core verticals.
          </p>
        </div>

        {/* ============ CAROUSEL ============ */}
        <div 
          className="testimonials-premium__carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Main Testimonial Card */}
          <div className="testimonials-premium__main">
            
            {/* Navigation Arrows */}
            <button 
              className="testimonials-premium__arrow testimonials-premium__arrow--prev"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="testimonials-premium__card">
              {/* Quote Icon */}
              <div className="testimonials-premium__quote-icon" style={{ color: activeTestimonial.color }}>
                <Quote size={48} />
              </div>

              <div className="testimonials-premium__card-grid">
                
                {/* Left: Content */}
                <div className="testimonials-premium__card-content">
                  {/* Stars */}
                  <div className="testimonials-premium__stars">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="testimonials-premium__text">
                    "{activeTestimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="testimonials-premium__author">
                    <div 
                      className="testimonials-premium__author-avatar"
                      style={{ backgroundColor: activeTestimonial.bgColor, color: activeTestimonial.color }}
                    >
                      {activeTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="testimonials-premium__author-info">
                      <span className="testimonials-premium__author-name">{activeTestimonial.name}</span>
                      <span className="testimonials-premium__author-role">{activeTestimonial.role}</span>
                    </div>
                  </div>

                  {/* Project Tag */}
                  <div 
                    className="testimonials-premium__project-tag"
                    style={{ backgroundColor: activeTestimonial.bgColor, color: activeTestimonial.color }}
                  >
                    <activeTestimonial.icon size={14} />
                    <span>{activeTestimonial.project}</span>
                  </div>
                </div>

                {/* Right: Visual & Metric */}
                <div 
                  className="testimonials-premium__card-visual"
                  style={{ backgroundColor: activeTestimonial.bgColor }}
                >
                  {/* Large Company Icon */}
                  <div className="testimonials-premium__card-visual-icon">
                    <activeTestimonial.icon size={64} color={activeTestimonial.color} opacity={0.3} />
                  </div>

                  {/* Metric Card */}
                  <div className="testimonials-premium__metric">
                    <span className="testimonials-premium__metric-value" style={{ color: activeTestimonial.color }}>
                      {activeTestimonial.metrics.value}
                    </span>
                    <span className="testimonials-premium__metric-label">{activeTestimonial.metrics.label}</span>
                  </div>

                  {/* Company Name */}
                  <div className="testimonials-premium__company">
                    <Building2 size={14} color={activeTestimonial.color} />
                    <span>{activeTestimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>

            <button 
              className="testimonials-premium__arrow testimonials-premium__arrow--next"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="testimonials-premium__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonials-premium__dot ${index === activeIndex ? 'testimonials-premium__dot--active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                style={{
                  '--dot-color': testimonials[index].color,
                }}
              >
                {index === activeIndex && (
                  <span className="testimonials-premium__dot-progress" />
                )}
              </button>
            ))}
          </div>

          {/* Preview Strip */}
          <div className="testimonials-premium__preview-strip">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                className={`testimonials-premium__preview ${index === activeIndex ? 'testimonials-premium__preview--active' : ''}`}
                onClick={() => handleDotClick(index)}
                style={{
                  '--preview-color': item.color,
                  '--preview-bg': item.bgColor,
                }}
              >
                <div 
                  className="testimonials-premium__preview-avatar"
                  style={{ backgroundColor: item.bgColor, color: item.color }}
                >
                  {item.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="testimonials-premium__preview-info">
                  <span className="testimonials-premium__preview-name">{item.name.split(' ')[0]}</span>
                  <span className="testimonials-premium__preview-role">{item.project}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ============ BOTTOM CTA ============ */}
        <div className="testimonials-premium__cta">
          <p className="testimonials-premium__cta-text">
            Join 200+ satisfied clients across India
          </p>
          <a href="#contact" className="testimonials-premium__cta-btn">
            <span>Start Your Success Story</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;