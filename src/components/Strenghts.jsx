// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Check, 
//   Layers, 
//   Users, 
//   Target, 
//   Clock, 
//   TrendingUp,
//   Shield,
//   Zap,
//   Award,
//   Sparkles,
//   ArrowRight,
//   Briefcase,
//   GraduationCap,
//   Star
// } from 'lucide-react';
// import './Strenghts.css';

// const Strengths = () => {
//   const [activeTab, setActiveTab] = useState('business');
//   const [visibleItems, setVisibleItems] = useState([]);
//   const sectionRef = useRef(null);

//   // Intersection Observer for scroll animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('strengths-premium__animate--visible');
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
//     );

//     const elements = sectionRef.current?.querySelectorAll('.strengths-premium__animate');
//     elements?.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const strengths = [
//     {
//       icon: Layers,
//       title: 'End-to-End Solutions',
//       desc: 'Complete support from planning to execution — everything under one roof. No need to coordinate with multiple vendors.',
//       gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
//       color: '#6366F1',
//       bgColor: '#EEF2FF',
//       stat: '360°'
//     },
//     {
//       icon: Users,
//       title: 'Experienced Team',
//       desc: 'Hands-on expertise with real operational work, not just presentations and promises. We execute, not just strategize.',
//       gradient: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
//       color: '#3B82F6',
//       bgColor: '#EFF6FF',
//       stat: '50+'
//     },
//     {
//       icon: Target,
//       title: 'Flexible Engagement',
//       desc: 'Project-based, resource augmentation, rental, training — choose the model that fits your needs and budget.',
//       gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
//       color: '#10B981',
//       bgColor: '#ECFDF5',
//       stat: '4x'
//     },
//     {
//       icon: Clock,
//       title: 'Measurable Outcomes',
//       desc: 'Strong commitment to quality, timelines, and real results. We measure success by the impact we create.',
//       gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
//       color: '#F59E0B',
//       bgColor: '#FFFBEB',
//       stat: '100%'
//     },
//     {
//       icon: TrendingUp,
//       title: 'Cost-Effective Growth',
//       desc: 'Scalable solutions that deliver maximum ROI. Get enterprise-quality output at competitive, transparent pricing.',
//       gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
//       color: '#EC4899',
//       bgColor: '#FDF2F8',
//       stat: '40%'
//     },
//   ];

//   const businessBenefits = [
//     { text: 'Complete support from planning to execution', icon: Shield },
//     { text: 'Technology + Creativity + Marketing + Manpower', icon: Zap },
//     { text: 'Cost-effective & scalable growth solutions', icon: TrendingUp },
//     { text: 'Real operational work, not just presentations', icon: Target },
//     { text: 'Flexible engagement models for every need', icon: Layers },
//     { text: 'Measurable results with timeline commitment', icon: Clock },
//   ];

//   const studentBenefits = [
//     { text: 'Learn by doing, not by listening', icon: Zap },
//     { text: 'Mentorship from industry professionals', icon: Users },
//     { text: 'On-the-job training with live projects', icon: Briefcase },
//     { text: 'Build portfolios & career opportunities', icon: Award },
//     { text: '10+ professional courses to choose from', icon: Layers },
//     { text: 'Internship & placement assistance', icon: GraduationCap },
//   ];

//   return (
//     <section id="strengths" className="strengths-premium" ref={sectionRef}>
      
//       {/* Background */}
//       <div className="strengths-premium__bg">
//         <div className="strengths-premium__bg-orb strengths-premium__bg-orb--1" />
//         <div className="strengths-premium__bg-orb strengths-premium__bg-orb--2" />
//         <div className="strengths-premium__bg-grid" />
//       </div>

//       <div className="strengths-premium__container">
        
//         {/* ============ SECTION HEADER ============ */}
//         <div className="strengths-premium__header strengths-premium__animate">
//           <div className="strengths-premium__badge">
//             <Sparkles size={14} />
//             <span>Our Core Strengths</span>
//           </div>

//           <h2 className="strengths-premium__title">
//             Why businesses
//             <span className="strengths-premium__title-gradient"> choose us</span>
//           </h2>
          
//           <p className="strengths-premium__subtitle">
//             Technology + Creativity + Marketing + Manpower — all in one place, delivering real results that move the needle.
//           </p>
//         </div>

//         {/* ============ STRENGTHS CARDS ============ */}
//         <div className="strengths-premium__grid">
//           {strengths.map((item, index) => (
//             <div
//               key={index}
//               className="strengths-premium__card strengths-premium__animate"
//               style={{ 
//                 '--card-gradient': item.gradient, 
//                 '--card-color': item.color, 
//                 '--card-bg': item.bgColor,
//                 animationDelay: `${index * 0.1}s`
//               }}
//             >
//               {/* Card Top Accent */}
//               <div className="strengths-premium__card-accent" style={{ background: item.gradient }} />
              
//               {/* Icon */}
//               <div className="strengths-premium__card-icon" style={{ background: item.gradient }}>
//                 <item.icon size={24} color="#fff" />
//               </div>

//               {/* Stat Badge */}
//               <div className="strengths-premium__card-stat" style={{ color: item.color, backgroundColor: item.bgColor }}>
//                 {item.stat}
//               </div>

//               {/* Content */}
//               <h3 className="strengths-premium__card-title">{item.title}</h3>
//               <p className="strengths-premium__card-desc">{item.desc}</p>

//               {/* Hover Arrow */}
//               <div className="strengths-premium__card-arrow">
//                 <ArrowRight size={16} color={item.color} />
//               </div>

//               {/* Hover Glow */}
//               <div className="strengths-premium__card-glow" style={{ background: item.gradient }} />
//             </div>
//           ))}
//         </div>

      

//         {/* ============ TRUST BADGE STRIP ============ */}
//         <div className="strengths-premium__trust strengths-premium__animate">
//           <div className="strengths-premium__trust-card">
//             <div className="strengths-premium__trust-item">
//               <Shield size={20} color="#6366F1" />
//               <div>
//                 <span className="strengths-premium__trust-value">100%</span>
//                 <span className="strengths-premium__trust-label">Quality Commitment</span>
//               </div>
//             </div>
//             <div className="strengths-premium__trust-divider" />
//             <div className="strengths-premium__trust-item">
//               <Clock size={20} color="#F59E0B" />
//               <div>
//                 <span className="strengths-premium__trust-value">On-Time</span>
//                 <span className="strengths-premium__trust-label">Delivery Record</span>
//               </div>
//             </div>
//             <div className="strengths-premium__trust-divider" />
//             <div className="strengths-premium__trust-item">
//               <Award size={20} color="#10B981" />
//               <div>
//                 <span className="strengths-premium__trust-value">4.9/5</span>
//                 <span className="strengths-premium__trust-label">Client Satisfaction</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Strengths;












// import React, { useEffect, useRef } from 'react';
// import { Shield, Clock, Award, Sparkles, ArrowRight } from 'lucide-react';
// import './Strenghts.css';

// const Strengths = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('str--visible');
//         }
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const strengths = [
//     {
//       title: 'All under one roof',
//       description: 'Technology, creativity, marketing, and manpower — no need to juggle multiple vendors.',
//       stat: '360°',
//       color: '#4F46E5',
//       gradient: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
//     },
//     {
//       title: 'We execute, not just advise',
//       description: 'Real operational work with measurable outcomes — not just slide decks and promises.',
//       stat: '50+',
//       color: '#EA580C',
//       gradient: 'linear-gradient(135deg, #EA580C, #F97316)',
//     },
//     {
//       title: 'Flexible engagement',
//       description: 'Project-based, resource augmentation, or retainer — choose what fits your needs.',
//       stat: '4x',
//       color: '#059669',
//       gradient: 'linear-gradient(135deg, #059669, #10B981)',
//     },
//     {
//       title: 'Measurable results',
//       description: 'Strong commitment to quality, timelines, and real impact you can track.',
//       stat: '100%',
//       color: '#0284C7',
//       gradient: 'linear-gradient(135deg, #0284C7, #0EA5E9)',
//     },
//     {
//       title: 'Cost-effective scale',
//       description: 'Enterprise-quality output at competitive pricing — maximum ROI, zero bloat.',
//       stat: '40%',
//       color: '#DB2777',
//       gradient: 'linear-gradient(135deg, #DB2777, #EC4899)',
//     },
//   ];

//   const trustBadges = [
//     { icon: Shield, value: '100%', label: 'Quality Commitment', color: '#4F46E5' },
//     { icon: Clock, value: 'On-Time', label: 'Delivery Record', color: '#EA580C' },
//     { icon: Award, value: '4.9/5', label: 'Client Rating', color: '#059669' },
//   ];

//   return (
//     <section id="strengths" className="str" ref={sectionRef}>
      
//       {/* Background */}
//       <div className="str__bg">
//         <div className="str__bg-orb str__bg-orb--1" />
//         <div className="str__bg-orb str__bg-orb--2" />
//       </div>

//       <div className="str__container">
        
//         {/* Header */}
//         <header className="str__header">
//           <span className="str__kicker">
//             <Sparkles size={13} />
//             Why choose us
//           </span>
//           <h2 className="str__title">
//             Built different.
//             <br />
//             <span className="str__title-accent">Built for results.</span>
//           </h2>
//           <p className="str__subtitle">
//             We combine technology, creativity, marketing, and manpower — all in one place, delivering work that moves the needle.
//           </p>
//         </header>

//         {/* Strengths Grid */}
//         <div className="str__grid">
//           {strengths.map((item, i) => (
//             <article
//               key={i}
//               className="str__card"
//               style={{
//                 '--card-color': item.color,
//                 '--card-gradient': item.gradient,
//                 animationDelay: `${i * 0.08}s`,
//               }}
//             >
//               <span className="str__card-stat" style={{ color: item.color }}>
//                 {item.stat}
//               </span>
              
//               <h3 className="str__card-title">{item.title}</h3>
//               <p className="str__card-desc">{item.description}</p>
              
//               <span className="str__card-line" style={{ background: item.gradient }} />
              
//               <span className="str__card-arrow" style={{ color: item.color }}>
//                 <ArrowRight size={15} strokeWidth={2} />
//               </span>
//             </article>
//           ))}
//         </div>

//         {/* Trust Bar */}
//         <div className="str__trust">
//           {trustBadges.map((badge, i) => (
//             <div key={i} className="str__trust-item">
//               <div className="str__trust-icon" style={{ color: badge.color }}>
//                 <badge.icon size={20} strokeWidth={1.8} />
//               </div>
//               <div className="str__trust-text">
//                 <span className="str__trust-value" style={{ color: badge.color }}>{badge.value}</span>
//                 <span className="str__trust-label">{badge.label}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Strengths;

















import React, { useEffect, useRef, useState } from 'react';
import { Shield, Clock, Award, Sparkles, ArrowRight, Star } from 'lucide-react';
import './Strenghts.css';

const Strengths = () => {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const strengths = [
    {
      title: 'All under one roof',
      description: 'Technology, creativity, marketing, and manpower — no need to juggle multiple vendors.',
      stat: '360°',
      color: '#4F46E5',
      gradient: 'radial-gradient(circle at 30% 30%, #4F46E5, #7C3AED)',
      angle: 0,
    },
    {
      title: 'We execute, not advise',
      description: 'Real operational work with measurable outcomes — not just slide decks.',
      stat: '50+',
      color: '#EA580C',
      gradient: 'radial-gradient(circle at 30% 30%, #EA580C, #F97316)',
      angle: 72,
    },
    {
      title: 'Flexible engagement',
      description: 'Project-based, resource augmentation, or retainer — your choice.',
      stat: '4x',
      color: '#059669',
      gradient: 'radial-gradient(circle at 30% 30%, #059669, #10B981)',
      angle: 144,
    },
    {
      title: 'Measurable results',
      description: 'Strong commitment to quality, timelines, and real impact.',
      stat: '100%',
      color: '#0284C7',
      gradient: 'radial-gradient(circle at 30% 30%, #0284C7, #0EA5E9)',
      angle: 216,
    },
    {
      title: 'Cost-effective scale',
      description: 'Enterprise-quality output at competitive pricing — maximum ROI.',
      stat: '40%',
      color: '#DB2777',
      gradient: 'radial-gradient(circle at 30% 30%, #DB2777, #EC4899)',
      angle: 288,
    },
  ];

  const trustBadges = [
    { icon: Shield, value: '100%', label: 'Quality', color: '#4F46E5' },
    { icon: Clock, value: 'On-Time', label: 'Delivery', color: '#EA580C' },
    { icon: Award, value: '4.9/5', label: 'Rating', color: '#059669' },
    { icon: Star, value: '200+', label: 'Projects', color: '#0284C7' },
  ];

  return (
    <section id="strengths" className="gstr" ref={sectionRef}>
      
      {/* Animated particle field */}
      <div className="gstr__particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="gstr__particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 8}s`,
              background: `hsl(${250 + Math.random() * 80}, 70%, ${60 + Math.random() * 20}%)`,
            }}
          />
        ))}
      </div>

      {/* Central gravitational orb */}
      <div 
        className="gstr__core"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)`,
        }}
      >
        <div className="gstr__core-ring gstr__core-ring--1" />
        <div className="gstr__core-ring gstr__core-ring--2" />
        <div className="gstr__core-ring gstr__core-ring--3" />
        <div className="gstr__core-inner">
          <Sparkles size={28} color="#fff" />
        </div>
      </div>

      {/* Orbiting connection lines */}
      <svg className="gstr__orbits" viewBox="0 0 100 100" preserveAspectRatio="none">
        {strengths.map((_, i) => {
          const angle = (i / strengths.length) * Math.PI * 2;
          const x2 = 50 + Math.cos(angle) * 35;
          const y2 = 50 + Math.sin(angle) * 35;
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={x2}
              y2={y2}
              className="gstr__orbit-line"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          );
        })}
      </svg>

      <div className={`gstr__container ${isVisible ? 'gstr__container--visible' : ''}`}>
        
        {/* Header */}
        <header className="gstr__header">
          <span className="gstr__kicker">
            <span className="gstr__kicker-dot" />
            Why choose us
          </span>
          <h2 className="gstr__title">
            Built different.
            <br />
            <span className="gstr__title-accent">Built for results.</span>
          </h2>
        </header>

        {/* Orbiting cards */}
        <div className="gstr__orbit-container">
          {strengths.map((item, i) => {
            const angle = (i / strengths.length) * Math.PI * 2 - Math.PI / 2;
            const radius = 38; // percentage
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;
            
            return (
              <div
                key={i}
                className="gstr__orbit-card"
                style={{
                  '--card-color': item.color,
                  '--card-gradient': item.gradient,
                  '--orbit-x': `${x}%`,
                  '--orbit-y': `${y}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                <span className="gstr__orbit-stat" style={{ color: item.color }}>
                  {item.stat}
                </span>
                <h3 className="gstr__orbit-title">{item.title}</h3>
                <p className="gstr__orbit-desc">{item.description}</p>
                <span className="gstr__orbit-arrow">
                  <ArrowRight size={14} strokeWidth={2} />
                </span>
              </div>
            );
          })}
        </div>

        {/* Trust bar */}
        <div className="gstr__trust">
          {trustBadges.map((badge, i) => (
            <div key={i} className="gstr__trust-item" style={{ '--trust-color': badge.color }}>
              <badge.icon size={18} strokeWidth={1.8} />
              <span className="gstr__trust-value">{badge.value}</span>
              <span className="gstr__trust-label">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;