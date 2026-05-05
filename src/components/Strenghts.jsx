// import React, { useEffect, useRef } from 'react';
// import { Shield, Clock, Award, ArrowRight } from 'lucide-react';
// import './Strenghts.css';

// const Strengths = () => {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = React.useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setVisible(true); },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const strengths = [
//     {
//       title: 'All under one roof',
//       description: 'Technology, creativity, marketing, and manpower — no need to juggle multiple vendors.',
//       stat: '360°',
//       color: '#4F46E5',
//     },
//     {
//       title: 'We execute, not advise',
//       description: 'Real operational work with measurable outcomes — not just slide decks and promises.',
//       stat: '50+',
//       color: '#EA580C',
//     },

//     {
//       title: 'Measurable results',
//       description: 'Strong commitment to quality, timelines, and real impact you can track.',
//       stat: '100%',
//       color: '#0284C7',
//     },
//     {
//       title: 'Cost-effective scale',
//       description: 'Enterprise-quality output at competitive pricing — maximum ROI, zero bloat.',
//       stat: '40%',
//       color: '#DB2777',
//     },
//   ];

//   const trustBadges = [
//     { icon: Shield, value: '100%', label: 'Quality', color: '#4F46E5' },
//     { icon: Clock, value: 'On-Time', label: 'Delivery', color: '#EA580C' },
//     { icon: Award, value: '4.9/5', label: 'Rating', color: '#059669' },
//   ];

//   return (
//     <section id="strengths" className="str" ref={sectionRef}>
      
//       {/* Apple-style animated background */}
//       <div className="str__canvas">
//         <div className="str__mesh str__mesh--1" />
//         <div className="str__mesh str__mesh--2" />
//         <div className="str__mesh str__mesh--3" />
//       </div>

//       <div className={`str__wrap ${visible ? 'str__wrap--in' : ''}`}>
        
//         {/* Label */}
//         <div className="str__label">Why choose us</div>
        
//         {/* Heading */}
//         <h2 className="str__heading">
//           Built different.
//           <span className="str__heading-accent"> Built for results.</span>
//         </h2>
        
//         {/* Subtitle */}
//         <p className="str__subtitle">
//           We combine technology, creativity, marketing, and manpower — all in one place, delivering work that moves the needle.
//         </p>

//         {/* Strengths Grid */}
//         <div className="str__grid">
//           {strengths.map((item, i) => (
//             <article
//               key={i}
//               className="str__card"
//               style={{ 
//                 '--s-color': item.color,
//                 animationDelay: `${i * 0.08}s`,
//               }}
//             >
//               <span className="str__card-stat" style={{ color: item.color }}>
//                 {item.stat}
//               </span>
              
//               <h3 className="str__card-title">{item.title}</h3>
//               <p className="str__card-desc">{item.description}</p>
              
//               <span className="str__card-line" style={{ background: item.color }} />
//             </article>
//           ))}
//         </div>

//         {/* Trust bar */}
//         <div className="str__trust">
//           {trustBadges.map((badge, i) => (
//             <div key={i} className="str__trust-item">
//               <badge.icon size={18} strokeWidth={1.5} style={{ color: badge.color }} />
//               <span className="str__trust-value">{badge.value}</span>
//               <span className="str__trust-label">{badge.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Strengths;














// import React, { useEffect, useRef, useState } from 'react';
// import { Shield, Clock, Award, ArrowRight, Sparkles, Star, Zap, TrendingUp } from 'lucide-react';
// import './Strenghts.css';

// const Strengths = () => {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { 
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const handleMouseMove = (e) => {
//     if (!sectionRef.current) return;
//     const rect = sectionRef.current.getBoundingClientRect();
//     setMousePos({
//       x: (e.clientX - rect.left) / rect.width,
//       y: (e.clientY - rect.top) / rect.height,
//     });
//   };

//   const strengths = [
//     {
//       icon: Sparkles,
//       title: 'All under one roof',
//       description: 'Technology, creativity, marketing, and manpower — one partner, zero vendor chaos.',
//       stat: '360°',
//       color: '#6366F1',
//     },
//     {
//       icon: Zap,
//       title: 'We execute, not advise',
//       description: 'Real operational work with measurable outcomes — not just slide decks and promises.',
//       stat: '50+',
//       color: '#F59E0B',
//     },
//     {
//       icon: TrendingUp,
//       title: 'Measurable results',
//       description: 'Strong commitment to quality, timelines, and real impact you can track.',
//       stat: '100%',
//       color: '#10B981',
//     },
//     {
//       icon: Star,
//       title: 'Cost-effective scale',
//       description: 'Enterprise-quality output at competitive pricing — maximum ROI, zero bloat.',
//       stat: '40%',
//       color: '#EC4899',
//     },
//   ];

//   const trustBadges = [
//     { icon: Shield, value: '100%', label: 'Quality', color: '#6366F1' },
//     { icon: Clock, value: 'On-Time', label: 'Delivery', color: '#F59E0B' },
//     { icon: Award, value: '4.9/5', label: 'Rating', color: '#10B981' },
//   ];

//   return (
//     <section 
//       id="strengths" 
//       className="str" 
//       ref={sectionRef}
//       onMouseMove={handleMouseMove}
//     >
      
//       {/* Ambient background elements */}
//       <div className="str-bg">
//         <div className="str-bg-gradient" />
        
//         {/* Orbital blobs */}
//         <div className="str-orb str-orb--1" style={{ '--color': '#6366F1' }} />
//         <div className="str-orb str-orb--2" style={{ '--color': '#F59E0B' }} />
//         <div className="str-orb str-orb--3" style={{ '--color': '#EC4899' }} />
        
//         {/* Mouse-following glow */}
//         <div 
//           className="str-mouse-glow"
//           style={{
//             '--mx': `${mousePos.x * 100}%`,
//             '--my': `${mousePos.y * 100}%`,
//           }}
//         />
        
//         {/* Grid pattern */}
//         <div className="str-grid-pattern" />
//       </div>

//       <div className={`str-wrap ${visible ? 'is-visible' : ''}`}>
        
//         {/* Section label with animated line */}
//         <div className="str-label-wrapper">
//           <span className="str-label-line" />
//           <span className="str-label-text">Why choose us</span>
//           <span className="str-label-line" />
//         </div>
        
//         {/* Main heading */}
//         <h2 className="str-heading">
//           <span className="str-heading-static">Built different.</span>
//           <span className="str-heading-accent-wrapper">
//             <span className="str-heading-accent"> Built for results.</span>
//             <svg className="str-heading-underline" viewBox="0 0 100 8" preserveAspectRatio="none">
//               <path d="M0,4 Q25,8 50,4 Q75,0 100,4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//           </span>
//         </h2>
        
//         {/* Subtitle */}
//         <p className="str-subtitle">
//           We combine technology, creativity, marketing, and manpower — all in one place, delivering work that actually moves the needle.
//         </p>

//         {/* Strengths Grid */}
//         <div className="str-grid">
//           {strengths.map((item, i) => (
//             <article
//               key={i}
//               className={`str-card ${hoveredCard === i ? 'is-hovered' : ''} ${hoveredCard !== null && hoveredCard !== i ? 'is-dimmed' : ''}`}
//               style={{ 
//                 '--card-color': item.color,
//                 '--card-index': i,
//                 animationDelay: `${i * 0.1}s`,
//               }}
//               onMouseEnter={() => setHoveredCard(i)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Card shine effect */}
//               <div className="str-card-shine" />
              
//               {/* Icon */}
//               <div className="str-card-icon-wrap">
//                 <item.icon size={22} strokeWidth={1.8} className="str-card-icon" />
//                 <div className="str-card-icon-glow" />
//               </div>
              
//               {/* Stat badge */}
//               <span className="str-card-stat">
//                 {item.stat}
//               </span>
              
//               {/* Title */}
//               <h3 className="str-card-title">{item.title}</h3>
              
//               {/* Description */}
//               <p className="str-card-desc">{item.description}</p>
              
//               {/* Animated border */}
//               <div className="str-card-border">
//                 <div className="str-card-border-glow" />
//               </div>
              
//               {/* Corner accent */}
//               <div className="str-card-corner str-card-corner--tl" />
//               <div className="str-card-corner str-card-corner--br" />
//             </article>
//           ))}
//         </div>

//         {/* Trust bar */}
//         <div className="str-trust">
//           <div className="str-trust-inner">
//             {trustBadges.map((badge, i) => (
//               <div key={i} className="str-trust-item" style={{ animationDelay: `${i * 0.15}s` }}>
//                 <div className="str-trust-icon-wrap" style={{ '--badge-color': badge.color }}>
//                   <badge.icon size={17} strokeWidth={1.8} />
//                 </div>
//                 <div className="str-trust-content">
//                   <span className="str-trust-value">{badge.value}</span>
//                   <span className="str-trust-label">{badge.label}</span>
//                 </div>
//                 {i < trustBadges.length - 1 && <div className="str-trust-divider" />}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Strengths;












import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Shield, Clock, Award, Sparkles, Star, Zap, TrendingUp } from 'lucide-react';
import './Strenghts.css';

const Strengths = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    requestAnimationFrame(() => {
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const strengths = [
    {
      icon: Sparkles,
      title: 'All under one roof',
      description: 'Technology, creativity, marketing, and manpower — one partner, zero vendor chaos.',
      stat: '360°',
      color: '#6366F1',
    },
    {
      icon: Zap,
      title: 'We execute, not advise',
      description: 'Real operational work with measurable outcomes — not just slide decks and promises.',
      stat: '50+',
      color: '#F59E0B',
    },
    {
      icon: TrendingUp,
      title: 'Measurable results',
      description: 'Strong commitment to quality, timelines, and real impact you can track.',
      stat: '100%',
      color: '#10B981',
    },
    {
      icon: Star,
      title: 'Cost-effective scale',
      description: 'Enterprise-quality output at competitive pricing — maximum ROI, zero bloat.',
      stat: '40%',
      color: '#EC4899',
    },
  ];

  const trustBadges = [
    { icon: Shield, value: '100%', label: 'Quality', color: '#6366F1' },
    { icon: Clock, value: 'On-Time', label: 'Delivery', color: '#F59E0B' },
    { icon: Award, value: '4.9/5', label: 'Rating', color: '#10B981' },
  ];

  return (
    <section 
      id="strengths" 
      className="str" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      
      {/* Cinematic background system */}
      <div className="str-bg">
        <div className="str-bg-gradient" />
        
        {/* Floating orbs */}
        <div className="str-orb str-orb--1" style={{ '--orb-color': '#6366F1' }} />
        <div className="str-orb str-orb--2" style={{ '--orb-color': '#EC4899' }} />
        <div className="str-orb str-orb--3" style={{ '--orb-color': '#10B981' }} />
        
        {/* Mouse-following ambient glow */}
        <div 
          className="str-mouse-glow"
          style={{
            '--mx': `${mousePos.x * 100}%`,
            '--my': `${mousePos.y * 100}%`,
          }}
        />
        
        {/* Subtle grid */}
        <div className="str-grid-pattern" />
      </div>

      <div className={`str-wrap ${visible ? 'is-visible' : ''}`}>
        
        {/* Label with animated lines */}
        <div className="str-label">
          <span className="str-label-line str-label-line--left" />
          <span className="str-label-text">Why choose us</span>
          <span className="str-label-line str-label-line--right" />
        </div>
        
        {/* Heading with clip reveal */}
        <h2 className="str-heading">
          <span className="str-heading-row">
            <span className="str-heading-text">Built different.</span>
          </span>
          <span className="str-heading-row">
            <span className="str-heading-text str-heading-text--accent">
              Built for results.
              <svg className="str-heading-underline" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,4 Q25,8 50,4 Q75,0 100,4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </span>
        </h2>
        
        {/* Subtitle */}
        <p className="str-subtitle">
          We combine technology, creativity, marketing, and manpower — all in one place, delivering work that actually moves the needle.
        </p>

        {/* Strengths Grid */}
        <div className="str-grid">
          {strengths.map((item, i) => (
            <article
              key={i}
              className={`str-card ${hoveredCard === i ? 'is-hovered' : ''} ${hoveredCard !== null && hoveredCard !== i ? 'is-dimmed' : ''}`}
              style={{ '--card-color': item.color, '--i': i }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Top accent bar */}
              <div className="str-card-accent" />
              
              {/* Shine sweep */}
              <div className="str-card-shine" />
              
              {/* Icon with glow */}
              <div className="str-card-icon-wrap">
                <div className="str-card-icon-bg" />
                <item.icon size={22} strokeWidth={1.8} className="str-card-icon" />
              </div>
              
              {/* Stat */}
              <span className="str-card-stat">{item.stat}</span>
              
              {/* Title */}
              <h3 className="str-card-title">{item.title}</h3>
              
              {/* Description */}
              <p className="str-card-desc">{item.description}</p>
              
              {/* Bottom corner glow */}
              <div className="str-card-corner-glow" />
            </article>
          ))}
        </div>

        {/* Trust bar */}
        {/* <div className="str-trust">
          <div className="str-trust-inner">
            {trustBadges.map((badge, i) => (
              <div key={i} className="str-trust-item" style={{ '--trust-i': i, '--trust-color': badge.color }}>
                <div className="str-trust-icon-wrap">
                  <badge.icon size={18} strokeWidth={1.8} />
                </div>
                <div className="str-trust-content">
                  <span className="str-trust-value">{badge.value}</span>
                  <span className="str-trust-label">{badge.label}</span>
                </div>
                {i < trustBadges.length - 1 && <div className="str-trust-divider" />}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Strengths;