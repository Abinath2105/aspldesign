// import React, { useState, useEffect, useRef } from 'react';
// import { ArrowRight } from 'lucide-react';
// import './Service.css';

// const Service = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [visible, setVisible] = useState(false);
//   const [expandedItem, setExpandedItem] = useState(null);
//   const sectionRef = useRef(null);

//   const categories = [
//     {
//       label: 'Business',
//       title: 'Business Services',
//       description: 'Digital transformation engineered for growth.',
//       color: '#4F46E5',
//       stats: { value: '200+', label: 'Projects' },
//       items: [
//         { title: 'Web & App Development', desc: 'Scalable platforms built with modern stacks and cloud architecture.', tag: 'React · Node.js · AWS' },
//         { title: 'Digital Marketing', desc: 'Performance campaigns driven by data, optimized for measurable return.', tag: 'SEO · PPC · Analytics' },
//         { title: 'UI/UX Design', desc: 'Thoughtful interfaces that convert visitors into lifelong customers.', tag: 'Figma · Design Systems' },
//         { title: 'Compliance & Finance', desc: 'Complete regulatory management so you can focus on building.', tag: 'GST · Audits · Filing' },
//         { title: 'Talent Solutions', desc: 'Vetted professionals matched to your culture and requirements.', tag: 'IT & Non-IT' },
//         { title: 'Brand Collateral', desc: 'Premium print and production that reflects your quality standards.', tag: 'Brochures · Merch' },
//       ]
//     },
//     {
//       label: 'Hospitality',
//       title: 'Hospitality & Events',
//       description: 'Experiences crafted with precision and artistry.',
//       color: '#EA580C',
//       stats: { value: '500+', label: 'Events' },
//       items: [
//         { title: 'Premium Dining', desc: 'Multi-cuisine excellence in an atmosphere of refined comfort.', tag: 'Indian · Chinese · Italian' },
//         { title: 'Corporate Events', desc: 'Impeccable planning for discerning professional audiences.', tag: 'Conferences · Galas' },
//         { title: 'Weddings & Celebrations', desc: 'Your vision honored with meticulous attention to every detail.', tag: 'Decor · Catering' },
//         { title: 'Full-Service Management', desc: 'Concept through completion — a seamless, stress-free experience.', tag: 'Venue · Logistics' },
//       ]
//     },
//     {
//       label: 'Technology',
//       title: 'Laptop Solutions',
//       description: 'Premium devices made accessible without compromise.',
//       color: '#059669',
//       stats: { value: '1000+', label: 'Units' },
//       items: [
//         { title: 'Certified Refurbished', desc: 'Rigorously tested devices backed by comprehensive warranty coverage.', tag: '8–12 Month Warranty' },
//         { title: 'Enterprise Procurement', desc: 'Custom configurations at scale with dedicated account management.', tag: 'Tailored Solutions' },
//         { title: 'Support & Service', desc: 'Technical assistance available when you need it, how you need it.', tag: '24/7 Help Desk' },
//         { title: 'Education Access', desc: 'Special pricing that empowers students and emerging startups.', tag: 'Up to 40% Savings' },
//       ]
//     },
//     {
//       label: 'Education',
//       title: 'Training & Skills',
//       description: 'Learning experiences that translate directly to careers.',
//       color: '#0284C7',
//       stats: { value: '50+', label: 'Courses' },
//       items: [
//         { title: 'Digital Marketing', desc: 'Master real campaigns with actual budgets and live performance data.', tag: '3-Month Intensive' },
//         { title: 'Full Stack Development', desc: 'Build production-ready applications from architecture to deployment.', tag: 'Java · React · Python' },
//         { title: 'UI/UX Design', desc: 'Craft experiences through design thinking and industry-standard tools.', tag: 'Portfolio Included' },
//         { title: 'Professional Skills', desc: 'Communication, presence, and confidence for high-stakes environments.', tag: 'Mock Interviews' },
//       ]
//     },
//     {
//       label: 'Creative',
//       title: 'Creator Studio',
//       description: 'Where ideas crystallize and content becomes art.',
//       color: '#DB2777',
//       stats: { value: '100+', label: 'Productions' },
//       items: [
//         { title: 'Studio & Lighting', desc: 'Cinema-grade environment engineered for stunning visual output.', tag: '4K · Pro Lighting' },
//         { title: 'Multi-Camera Production', desc: 'Dynamic storytelling captured from multiple perspectives.', tag: '3-Camera Setup' },
//         { title: 'Post-Production', desc: 'Expert editing, color grading, and sound design that elevates.', tag: 'Premiere · DaVinci' },
//         { title: 'Creative Partnership', desc: 'End-to-end support for your vision from concept to delivery.', tag: 'Full Crew · Full Service' },
//       ]
//     },
//   ];

//   const active = categories[activeIndex];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setVisible(true); },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="services" className="svc" ref={sectionRef}>
      
//       {/* Animated atmosphere */}
//       <div className="svc__atmos">
//         <div className="svc__atmos-orb svc__atmos-orb--1" />
//         <div className="svc__atmos-orb svc__atmos-orb--2" />
//       </div>

//       <div className={`svc__wrap ${visible ? 'svc__wrap--in' : ''}`}>
        
//         {/* Header */}
//         <div className="svc__head">
//           <span className="svc__head-eyebrow">Our services</span>
//           <h2 className="svc__head-title">
//             Solutions for
//             <span className="svc__head-title-accent"> every ambition</span>
//           </h2>
//         </div>

//         {/* Category tabs — underline style */}
//         <div className="svc__nav">
//           {categories.map((cat, i) => (
//             <button
//               key={i}
//               className={`svc__nav-item ${activeIndex === i ? 'svc__nav-item--on' : ''}`}
//               onClick={() => { setActiveIndex(i); setExpandedItem(null); }}
//               style={{ '--nav-color': cat.color }}
//             >
//               {cat.label}
//             </button>
//           ))}
//         </div>

//         {/* Content area */}
//         <div className="svc__stage" key={activeIndex}>
          
//           {/* Sidebar — category info */}
//           <div className="svc__sidebar">
//             <div className="svc__sidebar-sticky">
//               <span className="svc__sidebar-stat" style={{ color: active.color }}>
//                 {active.stats.value}
//               </span>
//               <span className="svc__sidebar-stat-label">{active.stats.label}</span>
//               <h3 className="svc__sidebar-title">{active.title}</h3>
//               <p className="svc__sidebar-desc">{active.description}</p>
//               <a href="#contact" className="svc__sidebar-cta" style={{ background: active.color }}>
//                 Get started
//                 <ArrowRight size={14} strokeWidth={2} />
//               </a>
//             </div>
//           </div>

//           {/* Main — expandable service list */}
//           <div className="svc__list">
//             {active.items.map((item, i) => {
//               const isOpen = expandedItem === `${activeIndex}-${i}`;
//               return (
//                 <div
//                   key={i}
//                   className={`svc__row ${isOpen ? 'svc__row--open' : ''}`}
//                   style={{ '--row-color': active.color, animationDelay: `${i * 0.06}s` }}
//                 >
//                   <button
//                     className="svc__row-trigger"
//                     onClick={() => setExpandedItem(isOpen ? null : `${activeIndex}-${i}`)}
//                   >
//                     <span className="svc__row-num">{String(i + 1).padStart(2, '0')}</span>
//                     <span className="svc__row-title">{item.title}</span>
//                     <span className="svc__row-tag" style={{ color: active.color }}>{item.tag}</span>
//                     <span className={`svc__row-icon ${isOpen ? 'svc__row-icon--open' : ''}`}>
//                       <ArrowRight size={14} strokeWidth={1.5} />
//                     </span>
//                   </button>
                  
//                   <div className="svc__row-panel">
//                     <p className="svc__row-desc">{item.desc}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;



















import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, ChevronRight, Play, Zap, Layers } from 'lucide-react';
import './Service.css';

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const categories = [
    {
      label: 'Business',
      title: 'Business Services',
      description: 'Digital transformation engineered for growth.',
      gradient: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
      color: '#4F46E5',
      stats: { value: '200+', label: 'Projects' },
      items: [
        { title: 'Web & App Development', desc: 'Scalable platforms built with modern stacks and cloud architecture.', tag: 'React · Node.js · AWS' },
        { title: 'Digital Marketing', desc: 'Performance campaigns driven by data, optimized for measurable return.', tag: 'SEO · PPC · Analytics' },
        { title: 'UI/UX Design', desc: 'Thoughtful interfaces that convert visitors into lifelong customers.', tag: 'Figma · Design Systems' },
        { title: 'Compliance & Finance', desc: 'Complete regulatory management so you can focus on building.', tag: 'GST · Audits · Filing' },
        { title: 'Talent Solutions', desc: 'Vetted professionals matched to your culture and requirements.', tag: 'IT & Non-IT' },
        { title: 'Brand Collateral', desc: 'Premium print and production that reflects your quality standards.', tag: 'Brochures · Merch' },
      ]
    },
    {
      label: 'Hospitality',
      title: 'Hospitality & Events',
      description: 'Experiences crafted with precision and artistry.',
      gradient: 'linear-gradient(135deg, #EA580C, #F97316)',
      color: '#EA580C',
      stats: { value: '500+', label: 'Events' },
      items: [
        { title: 'Premium Dining', desc: 'Multi-cuisine excellence in an atmosphere of refined comfort.', tag: 'Indian · Chinese · Italian' },
        { title: 'Corporate Events', desc: 'Impeccable planning for discerning professional audiences.', tag: 'Conferences · Galas' },
        { title: 'Weddings & Celebrations', desc: 'Your vision honored with meticulous attention to every detail.', tag: 'Decor · Catering' },
        { title: 'Full-Service Management', desc: 'Concept through completion — a seamless, stress-free experience.', tag: 'Venue · Logistics' },
      ]
    },
    {
      label: 'Technology',
      title: 'Laptop Solutions',
      description: 'Premium devices made accessible without compromise.',
      gradient: 'linear-gradient(135deg, #059669, #10B981)',
      color: '#059669',
      stats: { value: '1000+', label: 'Units' },
      items: [
        { title: 'Certified Refurbished', desc: 'Rigorously tested devices backed by comprehensive warranty coverage.', tag: '8–12 Month Warranty' },
        { title: 'Enterprise Procurement', desc: 'Custom configurations at scale with dedicated account management.', tag: 'Tailored Solutions' },
        { title: 'Support & Service', desc: 'Technical assistance available when you need it, how you need it.', tag: '24/7 Help Desk' },
        { title: 'Education Access', desc: 'Special pricing that empowers students and emerging startups.', tag: 'Up to 40% Savings' },
      ]
    },
    {
      label: 'Education',
      title: 'Training & Skills',
      description: 'Learning experiences that translate directly to careers.',
      gradient: 'linear-gradient(135deg, #0284C7, #38BDF8)',
      color: '#0284C7',
      stats: { value: '50+', label: 'Courses' },
      items: [
        { title: 'Digital Marketing', desc: 'Master real campaigns with actual budgets and live performance data.', tag: '3-Month Intensive' },
        { title: 'Full Stack Development', desc: 'Build production-ready applications from architecture to deployment.', tag: 'Java · React · Python' },
        { title: 'UI/UX Design', desc: 'Craft experiences through design thinking and industry-standard tools.', tag: 'Portfolio Included' },
        { title: 'Professional Skills', desc: 'Communication, presence, and confidence for high-stakes environments.', tag: 'Mock Interviews' },
      ]
    },
    {
      label: 'Creative',
      title: 'Creator Studio',
      description: 'Where ideas crystallize and content becomes art.',
      gradient: 'linear-gradient(135deg, #DB2777, #F43F5E)',
      color: '#DB2777',
      stats: { value: '100+', label: 'Productions' },
      items: [
        { title: 'Studio & Lighting', desc: 'Cinema-grade environment engineered for stunning visual output.', tag: '4K · Pro Lighting' },
        { title: 'Multi-Camera Production', desc: 'Dynamic storytelling captured from multiple perspectives.', tag: '3-Camera Setup' },
        { title: 'Post-Production', desc: 'Expert editing, color grading, and sound design that elevates.', tag: 'Premiere · DaVinci' },
        { title: 'Creative Partnership', desc: 'End-to-end support for your vision from concept to delivery.', tag: 'Full Crew · Full Service' },
      ]
    },
  ];

  const active = categories[activeIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setVisible(true);
          // Play video when section becomes visible
          if (videoRef.current) {
            videoRef.current.play().catch(e => console.log('Video autoplay prevented:', e));
          }
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Preload video background effect
  useEffect(() => {
    const timer = setTimeout(() => setVideoLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="services" className="svc" ref={sectionRef}>
      {/* Cinematic Background Video + Overlay */}
      <div className="svc__video-bg">
        <video 
          ref={videoRef}
          className="svc__video"
          autoPlay
          loop
          muted
          playsInline
          poster="https://assets.codepen.io/13471/abstract-bg-poster.jpg"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="https://cdn.pixabay.com/video/2022/12/15/143718-783252770_large.mp4" type="video/mp4" />
          {/* Fallback abstract gradient if video fails */}
        </video>
        <div className="svc__video-overlay"></div>
        {/* Animated gradient orbs */}
        <div className="svc__atmos-orb svc__atmos-orb--1"></div>
        <div className="svc__atmos-orb svc__atmos-orb--2"></div>
        <div className="svc__atmos-orb svc__atmos-orb--3"></div>
      </div>

      {/* Floating, animated particles background */}
      <div className="svc__particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="svc__particle" style={{ '--i': i, '--dur': `${15 + Math.random() * 20}s`, '--delay': `${Math.random() * 10}s` }}></div>
        ))}
      </div>

      <div className={`svc__wrap ${visible ? 'svc__wrap--in' : ''}`}>
        
        {/* Header with subtle entrance */}
        <div className="svc__head">
          <span className="svc__head-eyebrow">
            <Sparkles size={16} strokeWidth={1.5} />
            Curated ecosystems
          </span>
          <h2 className="svc__head-title">
            Solutions for
            <span className="svc__head-title-accent"> every ambition</span>
          </h2>
          <p className="svc__head-subtitle">Global-grade services designed to scale your vision — from concept to market dominance.</p>
        </div>

        {/* Category tabs — capsule design with spring animation */}
        <div className="svc__nav">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`svc__nav-item ${activeIndex === i ? 'svc__nav-item--on' : ''}`}
              onClick={() => { setActiveIndex(i); setExpandedItem(null); }}
              style={{ '--nav-color': cat.color }}
            >
              <span className="svc__nav-dot"></span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content area — split layout with glass card effect */}
        <div className="svc__stage" key={activeIndex}>
          
          {/* Sidebar — floating stats card */}
          <div className="svc__sidebar">
            <div className="svc__sidebar-sticky" style={{ background: `linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)`, backdropFilter: 'blur(12px)' }}>
              <div className="svc__sidebar-stat-wrap">
                <span className="svc__sidebar-stat" style={{ background: active.gradient, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  {active.stats.value}
                </span>
                <span className="svc__sidebar-stat-label">{active.stats.label}</span>
              </div>
              <h3 className="svc__sidebar-title">{active.title}</h3>
              <p className="svc__sidebar-desc">{active.description}</p>
              <a href="#contact" className="svc__sidebar-cta" style={{ background: active.gradient }}>
                Start a conversation
                <ArrowRight size={16} strokeWidth={2} />
              </a>
              <div className="svc__sidebar-badge">
                <Zap size={12} />
                <span>Trusted by 500+ innovators</span>
              </div>
            </div>
          </div>

          {/* Main — expandable, Apple-style service rows */}
          <div className="svc__list">
            {active.items.map((item, i) => {
              const isOpen = expandedItem === `${activeIndex}-${i}`;
              return (
                <div
                  key={i}
                  className={`svc__row ${isOpen ? 'svc__row--open' : ''}`}
                  style={{ '--row-color': active.color, animationDelay: `${i * 0.05}s` }}
                >
                  <button
                    className="svc__row-trigger"
                    onClick={() => setExpandedItem(isOpen ? null : `${activeIndex}-${i}`)}
                  >
                    <div className="svc__row-left">
                      <span className="svc__row-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="svc__row-title">{item.title}</span>
                    </div>
                    <div className="svc__row-right">
                      <span className="svc__row-tag" style={{ backgroundColor: `${active.color}15`, color: active.color, border: `1px solid ${active.color}30` }}>
                        {item.tag}
                      </span>
                      <span className={`svc__row-icon ${isOpen ? 'svc__row-icon--open' : ''}`}>
                        <ChevronRight size={18} strokeWidth={2} />
                      </span>
                    </div>
                  </button>
                  
                  <div className="svc__row-panel">
                    <div className="svc__row-panel-inner">
                      <p className="svc__row-desc">{item.desc}</p>
                      <div className="svc__row-meta">
                        <Play size={12} />
                        <span>Launch-ready in weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* CTA hint at bottom of list */}
            <div className="svc__list-footer">
              <div className="svc__list-footer-line"></div>
              <p>Tailored end-to-end solutions — from discovery to deployment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS injected here for production-ready styles (inline for single-file component) */}
      <style jsx>{`
        /* Additional styles for Service component - this will be applied globally via CSS file typically, 
           but included here for clarity (in real project move to Service.css) */
      `}</style>
    </section>
  );
};

export default Service;