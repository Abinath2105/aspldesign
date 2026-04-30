import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Building2, 
  Globe,
  TrendingUp,
  Star,
  Shield,
  Users,
  GraduationCap,
  Award,
  ExternalLink
} from 'lucide-react';
import './Partners.css';

const Partners = () => {
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const [activeRegion, setActiveRegion] = useState('all');
  const sectionRef = useRef(null);

  const partners = [
    { 
      id: 1,
      name: 'Avant Enterprises', 
      location: 'Bengaluru',
      region: 'south',
      type: 'Technology',
      since: '2021',
      projects: '15+',
      description: 'Strategic technology partner for enterprise solutions and digital transformation.',
      color: '#6366F1',
      bgColor: '#EEF2FF',
      icon: Building2,
      achievements: ['Best Partner Award 2023', '15+ Joint Projects', 'Enterprise Solutions']
    },
    { 
      id: 2,
      name: 'Digi Pondy', 
      location: 'Pondicherry',
      region: 'south',
      type: 'Digital Marketing',
      since: '2022',
      projects: '25+',
      description: 'Digital marketing powerhouse driving online growth for mutual clients across South India.',
      color: '#0EA5E9',
      bgColor: '#F0F9FF',
      icon: TrendingUp,
      achievements: ['25+ Campaigns Delivered', 'Marketing Excellence', 'South India Coverage']
    },
    { 
      id: 3,
      name: 'De mentee Academy', 
      location: 'Pondicherry',
      region: 'south',
      type: 'Education',
      since: '2020',
      projects: '500+',
      description: 'Premier training institution partnering on skill development and placement programs.',
      color: '#10B981',
      bgColor: '#ECFDF5',
      icon: GraduationCap,
      achievements: ['500+ Students Trained', 'Placement Partner', '10+ Course Collaborations']
    },
    { 
      id: 4,
      name: 'Redbook Events', 
      location: 'Coimbatore',
      region: 'south',
      type: 'Events',
      since: '2022',
      projects: '30+',
      description: 'Event management excellence — from corporate conferences to grand celebrations.',
      color: '#F59E0B',
      bgColor: '#FFFBEB',
      icon: Award,
      achievements: ['30+ Successful Events', 'Corporate & Wedding', 'Pan-India Presence']
    },
  ];

  const regions = [
    { id: 'all', label: 'All Partners', count: partners.length },
    { id: 'south', label: 'South India', count: partners.filter(p => p.region === 'south').length },
  ];

  const filteredPartners = activeRegion === 'all' 
    ? partners 
    : partners.filter(p => p.region === activeRegion);

  // Observe elements for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.partners-premium__reveal');
    elements?.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredPartners]);

  return (
    <section id="partners" className="partners-premium" ref={sectionRef}>
      
      {/* Background */}
      <div className="partners-premium__bg">
        <div className="partners-premium__bg-orb partners-premium__bg-orb--1" />
        <div className="partners-premium__bg-orb partners-premium__bg-orb--2" />
        <div className="partners-premium__bg-grid" />
      </div>

      <div className="partners-premium__container">
        
        {/* ============ SECTION HEADER ============ */}
        <div className="partners-premium__header">
          <div className="partners-premium__badge">
            <Sparkles size={14} />
            <span>Our Network</span>
          </div>

          <h2 className="partners-premium__title">
            Trusted
            <span className="partners-premium__title-gradient"> partners</span>
          </h2>
          
          <p className="partners-premium__subtitle">
            Strategic collaborations across India that amplify our capabilities and deliver exceptional value to our clients.
          </p>

          {/* Region Filter Tabs */}
          <div className="partners-premium__filters">
            {regions.map((region) => (
              <button
                key={region.id}
                className={`partners-premium__filter ${activeRegion === region.id ? 'partners-premium__filter--active' : ''}`}
                onClick={() => setActiveRegion(region.id)}
              >
                <Globe size={14} />
                <span>{region.label}</span>
                <span className="partners-premium__filter-count">{region.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ============ FEATURED PARTNER STATS ============ */}
        <div className="partners-premium__stats partners-premium__reveal">
          <div className="partners-premium__stats-card">
            <div className="partners-premium__stat">
              <Building2 size={20} color="#6366F1" />
              <div>
                <span className="partners-premium__stat-value">4+</span>
                <span className="partners-premium__stat-label">Active Partners</span>
              </div>
            </div>
            <div className="partners-premium__stat-divider" />
            <div className="partners-premium__stat">
              <MapPin size={20} color="#0EA5E9" />
              <div>
                <span className="partners-premium__stat-value">3</span>
                <span className="partners-premium__stat-label">Cities</span>
              </div>
            </div>
            <div className="partners-premium__stat-divider" />
            <div className="partners-premium__stat">
              <Star size={20} color="#F59E0B" />
              <div>
                <span className="partners-premium__stat-value">570+</span>
                <span className="partners-premium__stat-label">Joint Projects</span>
              </div>
            </div>
            <div className="partners-premium__stat-divider" />
            <div className="partners-premium__stat">
              <Award size={20} color="#10B981" />
              <div>
                <span className="partners-premium__stat-value">4</span>
                <span className="partners-premium__stat-label">Industries</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============ PARTNERS GRID ============ */}
        <div className="partners-premium__grid">
          {filteredPartners.map((partner, index) => (
            <div
              key={partner.id}
              className={`partners-premium__card partners-premium__reveal ${hoveredPartner === partner.id ? 'partners-premium__card--hovered' : ''}`}
              onMouseEnter={() => setHoveredPartner(partner.id)}
              onMouseLeave={() => setHoveredPartner(null)}
              style={{
                '--partner-color': partner.color,
                '--partner-bg': partner.bgColor,
              }}
            >
              {/* Card Header */}
              <div className="partners-premium__card-header">
                <div 
                  className="partners-premium__card-icon"
                  style={{ background: partner.color, boxShadow: `0 8px 24px ${partner.color}30` }}
                >
                  <partner.icon size={24} color="#FFFFFF" />
                </div>
                
                <div className="partners-premium__card-badges">
                  <span className="partners-premium__card-badge" style={{ backgroundColor: partner.bgColor, color: partner.color }}>
                    Since {partner.since}
                  </span>
                  <span className="partners-premium__card-badge" style={{ backgroundColor: '#F3F4F6', color: '#6B7280' }}>
                    {partner.type}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="partners-premium__card-body">
                <h3 className="partners-premium__card-name">{partner.name}</h3>
                
                <div className="partners-premium__card-location">
                  <MapPin size={14} color="#9CA3AF" />
                  <span>{partner.location}</span>
                </div>

                <p className="partners-premium__card-description">
                  {partner.description}
                </p>

                {/* Achievements */}
                <div className="partners-premium__card-achievements">
                  {partner.achievements.map((achievement, i) => (
                    <div key={i} className="partners-premium__card-achievement">
                      <Shield size={12} color={partner.color} />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="partners-premium__card-footer">
                <div className="partners-premium__card-stat">
                  <Users size={14} color={partner.color} />
                  <span>{partner.projects} Projects</span>
                </div>
                
                <div className="partners-premium__card-action">
                  <span>View Details</span>
                  <ExternalLink size={14} />
                </div>
              </div>

              {/* Hover Glow */}
              <div className="partners-premium__card-glow" style={{ background: `linear-gradient(135deg, ${partner.color}15, ${partner.color}05)` }} />
            </div>
          ))}
        </div>

        {/* ============ BOTTOM CTA ============ */}
        <div className="partners-premium__cta partners-premium__reveal">
          <div className="partners-premium__cta-card">
            <div className="partners-premium__cta-content">
              <Users size={28} color="#6366F1" />
              <div className="partners-premium__cta-info">
                <h3 className="partners-premium__cta-title">Want to Partner with Us?</h3>
                <p className="partners-premium__cta-text">
                  Join our growing network of trusted collaborators across India. Let's create something extraordinary together.
                </p>
              </div>
            </div>
            <a href="#contact" className="partners-premium__cta-btn">
              <span>Become a Partner</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;