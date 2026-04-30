import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, 
  Layers, 
  Users, 
  Target, 
  Clock, 
  TrendingUp,
  Shield,
  Zap,
  Award,
  Sparkles,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Star
} from 'lucide-react';
import './Strenghts.css';

const Strengths = () => {
  const [activeTab, setActiveTab] = useState('business');
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('strengths-premium__animate--visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.strengths-premium__animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const strengths = [
    {
      icon: Layers,
      title: 'End-to-End Solutions',
      desc: 'Complete support from planning to execution — everything under one roof. No need to coordinate with multiple vendors.',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      color: '#6366F1',
      bgColor: '#EEF2FF',
      stat: '360°'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      desc: 'Hands-on expertise with real operational work, not just presentations and promises. We execute, not just strategize.',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
      color: '#3B82F6',
      bgColor: '#EFF6FF',
      stat: '50+'
    },
    {
      icon: Target,
      title: 'Flexible Engagement',
      desc: 'Project-based, resource augmentation, rental, training — choose the model that fits your needs and budget.',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      color: '#10B981',
      bgColor: '#ECFDF5',
      stat: '4x'
    },
    {
      icon: Clock,
      title: 'Measurable Outcomes',
      desc: 'Strong commitment to quality, timelines, and real results. We measure success by the impact we create.',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
      color: '#F59E0B',
      bgColor: '#FFFBEB',
      stat: '100%'
    },
    {
      icon: TrendingUp,
      title: 'Cost-Effective Growth',
      desc: 'Scalable solutions that deliver maximum ROI. Get enterprise-quality output at competitive, transparent pricing.',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
      color: '#EC4899',
      bgColor: '#FDF2F8',
      stat: '40%'
    },
  ];

  const businessBenefits = [
    { text: 'Complete support from planning to execution', icon: Shield },
    { text: 'Technology + Creativity + Marketing + Manpower', icon: Zap },
    { text: 'Cost-effective & scalable growth solutions', icon: TrendingUp },
    { text: 'Real operational work, not just presentations', icon: Target },
    { text: 'Flexible engagement models for every need', icon: Layers },
    { text: 'Measurable results with timeline commitment', icon: Clock },
  ];

  const studentBenefits = [
    { text: 'Learn by doing, not by listening', icon: Zap },
    { text: 'Mentorship from industry professionals', icon: Users },
    { text: 'On-the-job training with live projects', icon: Briefcase },
    { text: 'Build portfolios & career opportunities', icon: Award },
    { text: '10+ professional courses to choose from', icon: Layers },
    { text: 'Internship & placement assistance', icon: GraduationCap },
  ];

  return (
    <section id="strengths" className="strengths-premium" ref={sectionRef}>
      
      {/* Background */}
      <div className="strengths-premium__bg">
        <div className="strengths-premium__bg-orb strengths-premium__bg-orb--1" />
        <div className="strengths-premium__bg-orb strengths-premium__bg-orb--2" />
        <div className="strengths-premium__bg-grid" />
      </div>

      <div className="strengths-premium__container">
        
        {/* ============ SECTION HEADER ============ */}
        <div className="strengths-premium__header strengths-premium__animate">
          <div className="strengths-premium__badge">
            <Sparkles size={14} />
            <span>Our Core Strengths</span>
          </div>

          <h2 className="strengths-premium__title">
            Why businesses
            <span className="strengths-premium__title-gradient"> choose us</span>
          </h2>
          
          <p className="strengths-premium__subtitle">
            Technology + Creativity + Marketing + Manpower — all in one place, delivering real results that move the needle.
          </p>
        </div>

        {/* ============ STRENGTHS CARDS ============ */}
        <div className="strengths-premium__grid">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="strengths-premium__card strengths-premium__animate"
              style={{ 
                '--card-gradient': item.gradient, 
                '--card-color': item.color, 
                '--card-bg': item.bgColor,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Card Top Accent */}
              <div className="strengths-premium__card-accent" style={{ background: item.gradient }} />
              
              {/* Icon */}
              <div className="strengths-premium__card-icon" style={{ background: item.gradient }}>
                <item.icon size={24} color="#fff" />
              </div>

              {/* Stat Badge */}
              <div className="strengths-premium__card-stat" style={{ color: item.color, backgroundColor: item.bgColor }}>
                {item.stat}
              </div>

              {/* Content */}
              <h3 className="strengths-premium__card-title">{item.title}</h3>
              <p className="strengths-premium__card-desc">{item.desc}</p>

              {/* Hover Arrow */}
              <div className="strengths-premium__card-arrow">
                <ArrowRight size={16} color={item.color} />
              </div>

              {/* Hover Glow */}
              <div className="strengths-premium__card-glow" style={{ background: item.gradient }} />
            </div>
          ))}
        </div>

        {/* ============ DUAL BENEFITS SECTION ============ */}
        {/* <div className="strengths-premium__benefits strengths-premium__animate">
          
      
          <div className="strengths-premium__benefits-tabs">
            <button
              className={`strengths-premium__benefits-tab ${activeTab === 'business' ? 'strengths-premium__benefits-tab--active' : ''}`}
              onClick={() => setActiveTab('business')}
            >
              <Briefcase size={18} />
              <span>For Businesses</span>
              {activeTab === 'business' && <span className="strengths-premium__benefits-tab-line" />}
            </button>
            <button
              className={`strengths-premium__benefits-tab ${activeTab === 'student' ? 'strengths-premium__benefits-tab--active' : ''}`}
              onClick={() => setActiveTab('student')}
            >
              <GraduationCap size={18} />
              <span>For Students & Creators</span>
              {activeTab === 'student' && <span className="strengths-premium__benefits-tab-line" />}
            </button>
          </div>

          
          <div className="strengths-premium__benefits-content">
            
         
            <div 
              className="strengths-premium__benefits-visual"
              style={{
                background: activeTab === 'business' 
                  ? 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)' 
                  : 'linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)'
              }}
            >
              <div className="strengths-premium__benefits-visual-icon">
                {activeTab === 'business' ? (
                  <Briefcase size={48} color="#6366F1" />
                ) : (
                  <GraduationCap size={48} color="#EC4899" />
                )}
              </div>
              
              
              <div className="strengths-premium__benefits-float strengths-premium__benefits-float--1">
                <Star size={16} fill={activeTab === 'business' ? '#6366F1' : '#EC4899'} color={activeTab === 'business' ? '#6366F1' : '#EC4899'} />
              </div>
              <div className="strengths-premium__benefits-float strengths-premium__benefits-float--2">
                <Award size={20} color={activeTab === 'business' ? '#8B5CF6' : '#F59E0B'} />
              </div>
            </div>

          
            <div className="strengths-premium__benefits-list">
              <h3 className="strengths-premium__benefits-title">
                {activeTab === 'business' ? 'What Businesses Get' : 'What Students & Creators Get'}
              </h3>
              
              <div className="strengths-premium__benefits-items">
                {(activeTab === 'business' ? businessBenefits : studentBenefits).map((benefit, index) => (
                  <div 
                    key={index} 
                    className="strengths-premium__benefit-item"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <div 
                      className="strengths-premium__benefit-check"
                      style={{
                        backgroundColor: activeTab === 'business' ? '#ECFDF5' : '#FDF2F8',
                        color: activeTab === 'business' ? '#10B981' : '#EC4899'
                      }}
                    >
                      <Check size={14} />
                    </div>
                    <div className="strengths-premium__benefit-item-content">
                      <benefit.icon size={16} className="strengths-premium__benefit-item-icon" />
                      <span>{benefit.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#contact" className="strengths-premium__benefits-cta">
                <span>{activeTab === 'business' ? 'Start Growing Your Business' : 'Begin Your Learning Journey'}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div> */}

        {/* ============ TRUST BADGE STRIP ============ */}
        <div className="strengths-premium__trust strengths-premium__animate">
          <div className="strengths-premium__trust-card">
            <div className="strengths-premium__trust-item">
              <Shield size={20} color="#6366F1" />
              <div>
                <span className="strengths-premium__trust-value">100%</span>
                <span className="strengths-premium__trust-label">Quality Commitment</span>
              </div>
            </div>
            <div className="strengths-premium__trust-divider" />
            <div className="strengths-premium__trust-item">
              <Clock size={20} color="#F59E0B" />
              <div>
                <span className="strengths-premium__trust-value">On-Time</span>
                <span className="strengths-premium__trust-label">Delivery Record</span>
              </div>
            </div>
            <div className="strengths-premium__trust-divider" />
            <div className="strengths-premium__trust-item">
              <Award size={20} color="#10B981" />
              <div>
                <span className="strengths-premium__trust-value">4.9/5</span>
                <span className="strengths-premium__trust-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strengths;