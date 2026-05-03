import React, { useEffect, useRef, useState } from 'react';
import './Partners.css';

const Partners = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const partners = [
    { 
      name: 'Avant Enterprises', 
      location: 'Bengaluru',
      type: 'Technology',
      since: '2021',
      projects: '15+',
      description: 'Enterprise solutions and digital transformation across South India.',
      color: '#4F46E5',
    },
    { 
      name: 'Digi Pondy', 
      location: 'Pondicherry',
      type: 'Marketing',
      since: '2022',
      projects: '25+',
      description: 'Digital marketing campaigns that drive measurable growth.',
      color: '#EA580C',
    },
    { 
      name: 'De mentee Academy', 
      location: 'Pondicherry',
      type: 'Education',
      since: '2020',
      projects: '500+',
      description: 'Premier training institution for skill development and placement.',
      color: '#059669',
    },
    { 
      name: 'Redbook Events', 
      location: 'Coimbatore',
      type: 'Events',
      since: '2022',
      projects: '30+',
      description: 'Corporate conferences and celebrations with flawless execution.',
      color: '#DB2777',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="partners" className="ptn" ref={sectionRef}>
      
      {/* Apple-style animated background */}
      <div className="ptn__canvas">
        <div className="ptn__mesh ptn__mesh--1" />
        <div className="ptn__mesh ptn__mesh--2" />
        <div className="ptn__mesh ptn__mesh--3" />
      </div>

      <div className={`ptn__wrap ${visible ? 'ptn__wrap--in' : ''}`}>
        
        {/* Header */}
        <div className="ptn__header">
          <div className="ptn__label">Our Network</div>
          <h2 className="ptn__heading">
            Trusted by
            <span className="ptn__heading-accent"> industry leaders</span>
          </h2>
          <p className="ptn__subtitle">
            Strategic collaborations that amplify everything we deliver.
          </p>
        </div>

        {/* Partner story cards — horizontal scroll on mobile, wrap on desktop */}
        <div className="ptn__stories">
          {partners.map((partner, i) => (
            <article
              key={i}
              className="ptn__story"
              style={{ 
                '--p-color': partner.color,
                animationDelay: `${i * 0.12}s`,
              }}
            >
              {/* Large stat number */}
              <span className="ptn__story-stat" style={{ color: partner.color }}>
                {partner.projects}
              </span>
              
              {/* Content */}
              <div className="ptn__story-content">
                <h3 className="ptn__story-name">{partner.name}</h3>
                <span className="ptn__story-meta">
                  {partner.type} · {partner.location}
                </span>
                <p className="ptn__story-desc">{partner.description}</p>
                <span className="ptn__story-since" style={{ color: partner.color }}>
                  Partner since {partner.since}
                </span>
              </div>
              
              {/* Accent bar */}
              <span className="ptn__story-line" style={{ background: partner.color }} />
            </article>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="ptn__trust">
          <div className="ptn__trust-item">
            <span className="ptn__trust-value">4+</span>
            <span className="ptn__trust-label">Active Partners</span>
          </div>
          <div className="ptn__trust-item">
            <span className="ptn__trust-value">3</span>
            <span className="ptn__trust-label">Cities</span>
          </div>
          <div className="ptn__trust-item">
            <span className="ptn__trust-value">570+</span>
            <span className="ptn__trust-label">Joint Projects</span>
          </div>
          <div className="ptn__trust-item">
            <span className="ptn__trust-value">4</span>
            <span className="ptn__trust-label">Industries</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;