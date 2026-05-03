import React, { useEffect, useRef } from 'react';
import { Shield, Clock, Award, ArrowRight } from 'lucide-react';
import './Strenghts.css';

const Strengths = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const strengths = [
    {
      title: 'All under one roof',
      description: 'Technology, creativity, marketing, and manpower — no need to juggle multiple vendors.',
      stat: '360°',
      color: '#4F46E5',
    },
    {
      title: 'We execute, not advise',
      description: 'Real operational work with measurable outcomes — not just slide decks and promises.',
      stat: '50+',
      color: '#EA580C',
    },

    {
      title: 'Measurable results',
      description: 'Strong commitment to quality, timelines, and real impact you can track.',
      stat: '100%',
      color: '#0284C7',
    },
    {
      title: 'Cost-effective scale',
      description: 'Enterprise-quality output at competitive pricing — maximum ROI, zero bloat.',
      stat: '40%',
      color: '#DB2777',
    },
  ];

  const trustBadges = [
    { icon: Shield, value: '100%', label: 'Quality', color: '#4F46E5' },
    { icon: Clock, value: 'On-Time', label: 'Delivery', color: '#EA580C' },
    { icon: Award, value: '4.9/5', label: 'Rating', color: '#059669' },
  ];

  return (
    <section id="strengths" className="str" ref={sectionRef}>
      
      {/* Apple-style animated background */}
      <div className="str__canvas">
        <div className="str__mesh str__mesh--1" />
        <div className="str__mesh str__mesh--2" />
        <div className="str__mesh str__mesh--3" />
      </div>

      <div className={`str__wrap ${visible ? 'str__wrap--in' : ''}`}>
        
        {/* Label */}
        <div className="str__label">Why choose us</div>
        
        {/* Heading */}
        <h2 className="str__heading">
          Built different.
          <span className="str__heading-accent"> Built for results.</span>
        </h2>
        
        {/* Subtitle */}
        <p className="str__subtitle">
          We combine technology, creativity, marketing, and manpower — all in one place, delivering work that moves the needle.
        </p>

        {/* Strengths Grid */}
        <div className="str__grid">
          {strengths.map((item, i) => (
            <article
              key={i}
              className="str__card"
              style={{ 
                '--s-color': item.color,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              <span className="str__card-stat" style={{ color: item.color }}>
                {item.stat}
              </span>
              
              <h3 className="str__card-title">{item.title}</h3>
              <p className="str__card-desc">{item.description}</p>
              
              <span className="str__card-line" style={{ background: item.color }} />
            </article>
          ))}
        </div>

        {/* Trust bar */}
        <div className="str__trust">
          {trustBadges.map((badge, i) => (
            <div key={i} className="str__trust-item">
              <badge.icon size={18} strokeWidth={1.5} style={{ color: badge.color }} />
              <span className="str__trust-value">{badge.value}</span>
              <span className="str__trust-label">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;