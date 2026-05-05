// // import React, { useState, useRef, useEffect, useCallback } from 'react';
// // import { ArrowRight } from 'lucide-react';
// // import './Service.css';

// // const Services = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [hoveredCard, setHoveredCard] = useState(null);
// //   const [isTransitioning, setIsTransitioning] = useState(false);
// //   const [visible, setVisible] = useState(false);
// //   const sectionRef = useRef(null);

// //   const categories = [
// //     {
// //       label: 'Business',
// //       title: 'Business Services',
// //       subtitle: 'Digital transformation engineered for growth.',
// //       color: '#4F46E5',
// //       colorLight: '#EEF2FF',
// //       gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #A78BFA 100%)',
// //       stats: [
// //         { value: '200+', label: 'Projects' },
// //         { value: '4.9', label: 'Rating' },
// //         { value: '25+', label: 'Experts' },
// //       ],
// //       items: [
// //         { title: 'Web & App Development', description: 'Scalable platforms with modern stacks.', tag: 'React · Node.js · AWS' },
// //         { title: 'Digital Marketing', description: 'Data-driven campaigns that deliver ROI.', tag: 'SEO · PPC · Analytics' },
// //         { title: 'UI/UX Design', description: 'Interfaces that convert visitors.', tag: 'Figma · Design Systems' },
// //         { title: 'Compliance & Finance', description: 'Regulatory peace of mind.', tag: 'GST · Audits · Filing' },
// //         { title: 'Talent Solutions', description: 'Vetted professionals, right fit.', tag: 'IT & Non-IT' },
// //         { title: 'Brand Collateral', description: 'Premium print and production.', tag: 'Brochures · Merch' },
// //       ]
// //     },
// //     {
// //       label: 'Hospitality',
// //       title: 'Hospitality & Events',
// //       subtitle: 'Experiences crafted with precision.',
// //       color: '#EA580C',
// //       colorLight: '#FFF7ED',
// //       gradient: 'linear-gradient(135deg, #EA580C 0%, #F97316 50%, #FDBA74 100%)',
// //       stats: [
// //         { value: '500+', label: 'Events' },
// //         { value: '4.8', label: 'Rating' },
// //         { value: '30+', label: 'Specialists' },
// //       ],
// //       items: [
// //         { title: 'Premium Dining', description: 'Multi-cuisine excellence.', tag: 'Indian · Chinese · Italian' },
// //         { title: 'Corporate Events', description: 'Impeccable professional planning.', tag: 'Conferences · Galas' },
// //         { title: 'Weddings & Celebrations', description: 'Your vision, honored.', tag: 'Decor · Catering' },
// //         { title: 'Full-Service Management', description: 'Concept to completion.', tag: 'Venue · Logistics' },
// //       ]
// //     },
// //     {
// //       label: 'Technology',
// //       title: 'Laptop Solutions',
// //       subtitle: 'Premium devices, accessible prices.',
// //       color: '#059669',
// //       colorLight: '#ECFDF5',
// //       gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #6EE7B7 100%)',
// //       stats: [
// //         { value: '1000+', label: 'Units' },
// //         { value: '4.9', label: 'Rating' },
// //         { value: '15+', label: 'Tech Team' },
// //       ],
// //       items: [
// //         { title: 'Certified Refurbished', description: 'Tested devices with warranty.', tag: '8–12 Month Warranty' },
// //         { title: 'Enterprise Procurement', description: 'Custom configurations at scale.', tag: 'Tailored Solutions' },
// //         { title: 'Support & Service', description: 'Technical assistance anytime.', tag: '24/7 Help Desk' },
// //         { title: 'Education Access', description: 'Special pricing for students.', tag: 'Up to 40% Savings' },
// //       ]
// //     },
// //     {
// //       label: 'Education',
// //       title: 'Training & Skills',
// //       subtitle: 'Learning that launches careers.',
// //       color: '#0284C7',
// //       colorLight: '#F0F9FF',
// //       gradient: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 50%, #7DD3FC 100%)',
// //       stats: [
// //         { value: '50+', label: 'Courses' },
// //         { value: '4.7', label: 'Rating' },
// //         { value: '20+', label: 'Mentors' },
// //       ],
// //       items: [
// //         { title: 'Digital Marketing', description: 'Real campaigns, real budgets.', tag: '3-Month Intensive' },
// //         { title: 'Full Stack Development', description: 'Build production-ready apps.', tag: 'Java · React · Python' },
// //         { title: 'UI/UX Design', description: 'Design thinking and tools.', tag: 'Portfolio Included' },
// //         { title: 'Professional Skills', description: 'Communication mastery.', tag: 'Mock Interviews' },
// //       ]
// //     },
// //     {
// //       label: 'Creative',
// //       title: 'Creator Studio',
// //       subtitle: 'Where content becomes art.',
// //       color: '#DB2777',
// //       colorLight: '#FDF2F8',
// //       gradient: 'linear-gradient(135deg, #DB2777 0%, #EC4899 50%, #F9A8D4 100%)',
// //       stats: [
// //         { value: '100+', label: 'Productions' },
// //         { value: '5.0', label: 'Rating' },
// //         { value: '10+', label: 'Creatives' },
// //       ],
// //       items: [
// //         { title: 'Studio & Lighting', description: 'Cinema-grade environment.', tag: '4K · Pro Lighting' },
// //         { title: 'Multi-Camera Production', description: 'Dynamic storytelling.', tag: '3-Camera Setup' },
// //         { title: 'Post-Production', description: 'Expert editing and color.', tag: 'Premiere · DaVinci' },
// //         { title: 'Creative Partnership', description: 'End-to-end support.', tag: 'Full Crew · Full Service' },
// //       ]
// //     },
// //   ];

// //   const active = categories[activeIndex];

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) setVisible(true);
// //       },
// //       { threshold: 0.1 }
// //     );
// //     if (sectionRef.current) observer.observe(sectionRef.current);
// //     return () => observer.disconnect();
// //   }, []);

// //   const handleCategoryChange = useCallback((index) => {
// //     if (index === activeIndex || isTransitioning) return;
// //     setIsTransitioning(true);
// //     setTimeout(() => {
// //       setActiveIndex(index);
// //       setHoveredCard(null);
// //       setTimeout(() => setIsTransitioning(false), 100);
// //     }, 200);
// //   }, [activeIndex, isTransitioning]);

// //   return (
// //     <section id="services" className="svc" ref={sectionRef}>
      
// //       {/* Background */}
// //       <div className="svc__bg">
// //         <div className="svc__bg-orb svc__bg-orb--1" />
// //         <div className="svc__bg-orb svc__bg-orb--2" />
// //         <div className="svc__bg-grid" />
// //       </div>

// //       <div className={`svc__container ${visible ? 'svc__container--visible' : ''}`}>
        
// //         {/* Header */}
// //         <header className="svc__header">
// //           <span className="svc__kicker">What we offer</span>
// //           <h2 className="svc__title">
// //             Everything you need
// //             <br />
// //             <span className="svc__title-accent">in one place</span>
// //           </h2>
// //           <p className="svc__subtitle">
// //             Five integrated divisions. One partner. Infinite possibilities.
// //           </p>
// //         </header>

// //         {/* Category Tabs */}
// //         <nav className="svc__tabs">
// //           {categories.map((cat, i) => (
// //             <button
// //               key={i}
// //               className={`svc__tab ${activeIndex === i ? 'svc__tab--active' : ''}`}
// //               onClick={() => handleCategoryChange(i)}
// //               style={{ '--tab-color': cat.color, '--tab-gradient': cat.gradient }}
// //             >
// //               {cat.label}
// //             </button>
// //           ))}
// //         </nav>

// //         {/* Content */}
// //         <div className={`svc__content ${isTransitioning ? 'svc__content--fading' : ''}`} key={activeIndex}>
          
// //           {/* Stats Row */}
// //           <div className="svc__stats-row">
// //             <div className="svc__stats-info">
// //               <h3 className="svc__stats-title" style={{ color: active.color }}>{active.title}</h3>
// //               <p className="svc__stats-subtitle">{active.subtitle}</p>
// //             </div>
// //             <div className="svc__stats">
// //               {active.stats.map((stat, i) => (
// //                 <div key={i} className="svc__stat">
// //                   <span className="svc__stat-value" style={{ color: active.color }}>{stat.value}</span>
// //                   <span className="svc__stat-label">{stat.label}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Cards Grid */}
// //           <div className="svc__grid">
// //             {active.items.map((item, i) => {
// //               const isHovered = hoveredCard === `${activeIndex}-${i}`;
// //               return (
// //                 <article
// //                   key={i}
// //                   className={`svc__card ${isHovered ? 'svc__card--hovered' : ''}`}
// //                   onMouseEnter={() => setHoveredCard(`${activeIndex}-${i}`)}
// //                   onMouseLeave={() => setHoveredCard(null)}
// //                   style={{
// //                     '--card-color': active.color,
// //                     '--card-light': active.colorLight,
// //                     '--card-gradient': active.gradient,
// //                   }}
// //                 >
// //                   <span className="svc__card-num">{String(i + 1).padStart(2, '0')}</span>
                  
// //                   <div className="svc__card-content">
// //                     <h4 className="svc__card-title">{item.title}</h4>
// //                     <p className="svc__card-desc">{item.description}</p>
// //                     <span className="svc__card-tag" style={{ color: active.color, background: active.colorLight }}>
// //                       {item.tag}
// //                     </span>
// //                   </div>
                  
// //                   <div className="svc__card-shine" />
// //                 </article>
// //               );
// //             })}
// //           </div>

// //           {/* CTA */}
// //           <div className="svc__cta" style={{ background: active.gradient }}>
// //             <div className="svc__cta-inner">
// //               <div>
// //                 <p className="svc__cta-title">Start your {active.label.toLowerCase()} journey</p>
// //                 <p className="svc__cta-text">Schedule a consultation with our team.</p>
// //               </div>
// //               <a href="#contact" className="svc__cta-btn">
// //                 Get in touch
// //                 <ArrowRight size={16} strokeWidth={2} />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Services;



















// // import React, { useState, useRef, useEffect, useCallback } from 'react';
// // import { ArrowRight } from 'lucide-react';
// // import './Service.css';

// // const Services = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [hoveredCard, setHoveredCard] = useState(null);
// //   const [isTransitioning, setIsTransitioning] = useState(false);
// //   const [visible, setVisible] = useState(false);
// //   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
// //   const sectionRef = useRef(null);

// //   const categories = [
// //     {
// //       label: 'Business',
// //       title: 'Business Services',
// //       subtitle: 'Digital transformation engineered for growth.',
// //       color: '#4F46E5',
// //       gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #A78BFA 100%)',
// //       stats: [
// //         { value: '200+', label: 'Projects' },
// //         { value: '4.9', label: 'Rating' },
// //         { value: '25+', label: 'Experts' },
// //       ],
// //       items: [
// //         { title: 'Web & App Development', description: 'Scalable platforms with modern stacks.', tag: 'React · Node.js · AWS' },
// //         { title: 'Digital Marketing', description: 'Data-driven campaigns that deliver ROI.', tag: 'SEO · PPC · Analytics' },
// //         { title: 'UI/UX Design', description: 'Interfaces that convert visitors.', tag: 'Figma · Design Systems' },
// //         { title: 'Compliance & Finance', description: 'Regulatory peace of mind.', tag: 'GST · Audits · Filing' },
// //         { title: 'Talent Solutions', description: 'Vetted professionals, right fit.', tag: 'IT & Non-IT' },
// //         { title: 'Brand Collateral', description: 'Premium print and production.', tag: 'Brochures · Merch' },
// //       ]
// //     },
// //     {
// //       label: 'Hospitality',
// //       title: 'Hospitality & Events',
// //       subtitle: 'Experiences crafted with precision.',
// //       color: '#EA580C',
// //       gradient: 'linear-gradient(135deg, #EA580C 0%, #F97316 50%, #FDBA74 100%)',
// //       stats: [
// //         { value: '500+', label: 'Events' },
// //         { value: '4.8', label: 'Rating' },
// //         { value: '30+', label: 'Specialists' },
// //       ],
// //       items: [
// //         { title: 'Premium Dining', description: 'Multi-cuisine excellence.', tag: 'Indian · Chinese · Italian' },
// //         { title: 'Corporate Events', description: 'Impeccable professional planning.', tag: 'Conferences · Galas' },
// //         { title: 'Weddings & Celebrations', description: 'Your vision, honored.', tag: 'Decor · Catering' },
// //         { title: 'Full-Service Management', description: 'Concept to completion.', tag: 'Venue · Logistics' },
// //       ]
// //     },
// //     {
// //       label: 'Technology',
// //       title: 'Laptop Solutions',
// //       subtitle: 'Premium devices, accessible prices.',
// //       color: '#059669',
// //       gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #6EE7B7 100%)',
// //       stats: [
// //         { value: '1000+', label: 'Units' },
// //         { value: '4.9', label: 'Rating' },
// //         { value: '15+', label: 'Tech Team' },
// //       ],
// //       items: [
// //         { title: 'Certified Refurbished', description: 'Tested devices with warranty.', tag: '8–12 Month Warranty' },
// //         { title: 'Enterprise Procurement', description: 'Custom configurations at scale.', tag: 'Tailored Solutions' },
// //         { title: 'Support & Service', description: 'Technical assistance anytime.', tag: '24/7 Help Desk' },
// //         { title: 'Education Access', description: 'Special pricing for students.', tag: 'Up to 40% Savings' },
// //       ]
// //     },
// //     {
// //       label: 'Education',
// //       title: 'Training & Skills',
// //       subtitle: 'Learning that launches careers.',
// //       color: '#0284C7',
// //       gradient: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 50%, #7DD3FC 100%)',
// //       stats: [
// //         { value: '50+', label: 'Courses' },
// //         { value: '4.7', label: 'Rating' },
// //         { value: '20+', label: 'Mentors' },
// //       ],
// //       items: [
// //         { title: 'Digital Marketing', description: 'Real campaigns, real budgets.', tag: '3-Month Intensive' },
// //         { title: 'Full Stack Development', description: 'Build production-ready apps.', tag: 'Java · React · Python' },
// //         { title: 'UI/UX Design', description: 'Design thinking and tools.', tag: 'Portfolio Included' },
// //         { title: 'Professional Skills', description: 'Communication mastery.', tag: 'Mock Interviews' },
// //       ]
// //     },
// //     {
// //       label: 'Creative',
// //       title: 'Creator Studio',
// //       subtitle: 'Where content becomes art.',
// //       color: '#DB2777',
// //       gradient: 'linear-gradient(135deg, #DB2777 0%, #EC4899 50%, #F9A8D4 100%)',
// //       stats: [
// //         { value: '100+', label: 'Productions' },
// //         { value: '5.0', label: 'Rating' },
// //         { value: '10+', label: 'Creatives' },
// //       ],
// //       items: [
// //         { title: 'Studio & Lighting', description: 'Cinema-grade environment.', tag: '4K · Pro Lighting' },
// //         { title: 'Multi-Camera Production', description: 'Dynamic storytelling.', tag: '3-Camera Setup' },
// //         { title: 'Post-Production', description: 'Expert editing and color.', tag: 'Premiere · DaVinci' },
// //         { title: 'Creative Partnership', description: 'End-to-end support.', tag: 'Full Crew · Full Service' },
// //       ]
// //     },
// //   ];

// //   const active = categories[activeIndex];

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => { if (entry.isIntersecting) setVisible(true); },
// //       { threshold: 0.1 }
// //     );
// //     if (sectionRef.current) observer.observe(sectionRef.current);
// //     return () => observer.disconnect();
// //   }, []);

// //   useEffect(() => {
// //     const handleMove = (e) => {
// //       if (!sectionRef.current) return;
// //       const rect = sectionRef.current.getBoundingClientRect();
// //       setMousePos({
// //         x: (e.clientX - rect.left) / rect.width,
// //         y: (e.clientY - rect.top) / rect.height,
// //       });
// //     };
// //     window.addEventListener('mousemove', handleMove, { passive: true });
// //     return () => window.removeEventListener('mousemove', handleMove);
// //   }, []);

// //   const handleCategoryChange = useCallback((index) => {
// //     if (index === activeIndex || isTransitioning) return;
// //     setIsTransitioning(true);
// //     setTimeout(() => {
// //       setActiveIndex(index);
// //       setHoveredCard(null);
// //       setTimeout(() => setIsTransitioning(false), 100);
// //     }, 200);
// //   }, [activeIndex, isTransitioning]);

// //   return (
// //     <section id="services" className="svc" ref={sectionRef}>
      
// //       {/* Living gradient atmosphere */}
// //       <div className="svc__bg">
// //         <div 
// //           className="svc__bg-orb svc__bg-orb--1"
// //           style={{
// //             transform: `translate(${(mousePos.x - 0.5) * 40}px, ${(mousePos.y - 0.5) * 40}px)`,
// //           }}
// //         />
// //         <div 
// //           className="svc__bg-orb svc__bg-orb--2"
// //           style={{
// //             transform: `translate(${(mousePos.x - 0.5) * -50}px, ${(mousePos.y - 0.5) * -50}px)`,
// //           }}
// //         />
// //         <div 
// //           className="svc__bg-glow"
// //           style={{
// //             background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${active.color}06 0%, transparent 50%)`,
// //           }}
// //         />
// //       </div>

// //       <div className={`svc__wrap ${visible ? 'svc__wrap--in' : ''}`}>
        
// //         {/* Header */}
// //         <header className="svc__header">
// //           <span className="svc__header-kicker">
// //             <span className="svc__header-kicker-line" />
// //             What we offer
// //           </span>
// //           <h2 className="svc__header-title">
// //             Everything you need
// //             <span className="svc__header-title-accent"> in one place</span>
// //           </h2>
// //         </header>

// //         {/* Category tabs */}
// //         <nav className="svc__tabs">
// //           {categories.map((cat, i) => (
// //             <button
// //               key={i}
// //               className={`svc__tab ${activeIndex === i ? 'svc__tab--active' : ''}`}
// //               onClick={() => handleCategoryChange(i)}
// //               style={{ '--tab-color': cat.color, '--tab-gradient': cat.gradient }}
// //             >
// //               {cat.label}
// //             </button>
// //           ))}
// //         </nav>

// //         {/* Content */}
// //         <div className={`svc__content ${isTransitioning ? 'svc__content--fading' : ''}`} key={activeIndex}>
          
// //           {/* Info bar */}
// //           <div className="svc__bar" style={{ borderLeftColor: active.color }}>
// //             <div>
// //               <h3 className="svc__bar-title" style={{ color: active.color }}>{active.title}</h3>
// //               <p className="svc__bar-subtitle">{active.subtitle}</p>
// //             </div>
// //             <div className="svc__bar-stats">
// //               {active.stats.map((stat, i) => (
// //                 <div key={i} className="svc__bar-stat">
// //                   <span className="svc__bar-stat-value" style={{ color: active.color }}>{stat.value}</span>
// //                   <span className="svc__bar-stat-label">{stat.label}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Cards */}
// //           <div className="svc__grid">
// //             {active.items.map((item, i) => {
// //               const isHovered = hoveredCard === `${activeIndex}-${i}`;
// //               return (
// //                 <article
// //                   key={i}
// //                   className={`svc__card ${isHovered ? 'svc__card--hover' : ''}`}
// //                   onMouseEnter={() => setHoveredCard(`${activeIndex}-${i}`)}
// //                   onMouseLeave={() => setHoveredCard(null)}
// //                   style={{ '--card-color': active.color, '--card-gradient': active.gradient }}
// //                 >
// //                   <span className="svc__card-index">{String(i + 1).padStart(2, '0')}</span>
                  
// //                   <h4 className="svc__card-title">{item.title}</h4>
// //                   <p className="svc__card-desc">{item.description}</p>
                  
// //                   <div className="svc__card-footer">
// //                     <span className="svc__card-tag" style={{ color: active.color }}>
// //                       {item.tag}
// //                     </span>
// //                     <span className="svc__card-icon">
// //                       <ArrowRight size={13} strokeWidth={1.5} />
// //                     </span>
// //                   </div>
// //                 </article>
// //               );
// //             })}
// //           </div>

// //           {/* CTA */}
// //           <div className="svc__cta">
// //             <div className="svc__cta-inner" style={{ background: active.gradient }}>
// //               <p className="svc__cta-text">
// //                 Start your <strong>{active.label.toLowerCase()}</strong> journey
// //               </p>
// //               <a href="#contact" className="svc__cta-btn">
// //                 Get in touch
// //                 <ArrowRight size={14} strokeWidth={2} />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Services;







// // import React, { useState, useEffect, useRef } from 'react';
// // import { ArrowRight } from 'lucide-react';
// // import './Service.css';

// // const Service = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [visible, setVisible] = useState(false);
// //   const [expandedItem, setExpandedItem] = useState(null);
// //   const sectionRef = useRef(null);

// //   const categories = [
// //     {
// //       label: 'Business',
// //       title: 'Business Services',
// //       description: 'Digital transformation engineered for growth.',
// //       color: '#4F46E5',
// //       stats: { value: '200+', label: 'Projects' },
// //       items: [
// //         { title: 'Web & App Development', desc: 'Scalable platforms built with modern stacks and cloud architecture.', tag: 'React · Node.js · AWS' },
// //         { title: 'Digital Marketing', desc: 'Performance campaigns driven by data, optimized for measurable return.', tag: 'SEO · PPC · Analytics' },
// //         { title: 'UI/UX Design', desc: 'Thoughtful interfaces that convert visitors into lifelong customers.', tag: 'Figma · Design Systems' },
// //         { title: 'Compliance & Finance', desc: 'Complete regulatory management so you can focus on building.', tag: 'GST · Audits · Filing' },
// //         { title: 'Talent Solutions', desc: 'Vetted professionals matched to your culture and requirements.', tag: 'IT & Non-IT' },
// //         { title: 'Brand Collateral', desc: 'Premium print and production that reflects your quality standards.', tag: 'Brochures · Merch' },
// //       ]
// //     },
// //     {
// //       label: 'Hospitality',
// //       title: 'Hospitality & Events',
// //       description: 'Experiences crafted with precision and artistry.',
// //       color: '#EA580C',
// //       stats: { value: '500+', label: 'Events' },
// //       items: [
// //         { title: 'Premium Dining', desc: 'Multi-cuisine excellence in an atmosphere of refined comfort.', tag: 'Indian · Chinese · Italian' },
// //         { title: 'Corporate Events', desc: 'Impeccable planning for discerning professional audiences.', tag: 'Conferences · Galas' },
// //         { title: 'Weddings & Celebrations', desc: 'Your vision honored with meticulous attention to every detail.', tag: 'Decor · Catering' },
// //         { title: 'Full-Service Management', desc: 'Concept through completion — a seamless, stress-free experience.', tag: 'Venue · Logistics' },
// //       ]
// //     },
// //     {
// //       label: 'Technology',
// //       title: 'Laptop Solutions',
// //       description: 'Premium devices made accessible without compromise.',
// //       color: '#059669',
// //       stats: { value: '1000+', label: 'Units' },
// //       items: [
// //         { title: 'Certified Refurbished', desc: 'Rigorously tested devices backed by comprehensive warranty coverage.', tag: '8–12 Month Warranty' },
// //         { title: 'Enterprise Procurement', desc: 'Custom configurations at scale with dedicated account management.', tag: 'Tailored Solutions' },
// //         { title: 'Support & Service', desc: 'Technical assistance available when you need it, how you need it.', tag: '24/7 Help Desk' },
// //         { title: 'Education Access', desc: 'Special pricing that empowers students and emerging startups.', tag: 'Up to 40% Savings' },
// //       ]
// //     },
// //     {
// //       label: 'Education',
// //       title: 'Training & Skills',
// //       description: 'Learning experiences that translate directly to careers.',
// //       color: '#0284C7',
// //       stats: { value: '50+', label: 'Courses' },
// //       items: [
// //         { title: 'Digital Marketing', desc: 'Master real campaigns with actual budgets and live performance data.', tag: '3-Month Intensive' },
// //         { title: 'Full Stack Development', desc: 'Build production-ready applications from architecture to deployment.', tag: 'Java · React · Python' },
// //         { title: 'UI/UX Design', desc: 'Craft experiences through design thinking and industry-standard tools.', tag: 'Portfolio Included' },
// //         { title: 'Professional Skills', desc: 'Communication, presence, and confidence for high-stakes environments.', tag: 'Mock Interviews' },
// //       ]
// //     },
// //     {
// //       label: 'Creative',
// //       title: 'Creator Studio',
// //       description: 'Where ideas crystallize and content becomes art.',
// //       color: '#DB2777',
// //       stats: { value: '100+', label: 'Productions' },
// //       items: [
// //         { title: 'Studio & Lighting', desc: 'Cinema-grade environment engineered for stunning visual output.', tag: '4K · Pro Lighting' },
// //         { title: 'Multi-Camera Production', desc: 'Dynamic storytelling captured from multiple perspectives.', tag: '3-Camera Setup' },
// //         { title: 'Post-Production', desc: 'Expert editing, color grading, and sound design that elevates.', tag: 'Premiere · DaVinci' },
// //         { title: 'Creative Partnership', desc: 'End-to-end support for your vision from concept to delivery.', tag: 'Full Crew · Full Service' },
// //       ]
// //     },
// //   ];

// //   const active = categories[activeIndex];

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => { if (entry.isIntersecting) setVisible(true); },
// //       { threshold: 0.1 }
// //     );
// //     if (sectionRef.current) observer.observe(sectionRef.current);
// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <section id="services" className="svc" ref={sectionRef}>
      
// //       {/* Animated atmosphere */}
// //       <div className="svc__atmos">
// //         <div className="svc__atmos-orb svc__atmos-orb--1" />
// //         <div className="svc__atmos-orb svc__atmos-orb--2" />
// //       </div>

// //       <div className={`svc__wrap ${visible ? 'svc__wrap--in' : ''}`}>
        
// //         {/* Header */}
// //         <div className="svc__head">
// //           <span className="svc__head-eyebrow">Our services</span>
// //           <h2 className="svc__head-title">
// //             Solutions for
// //             <span className="svc__head-title-accent"> every ambition</span>
// //           </h2>
// //         </div>

// //         {/* Category tabs — underline style */}
// //         <div className="svc__nav">
// //           {categories.map((cat, i) => (
// //             <button
// //               key={i}
// //               className={`svc__nav-item ${activeIndex === i ? 'svc__nav-item--on' : ''}`}
// //               onClick={() => { setActiveIndex(i); setExpandedItem(null); }}
// //               style={{ '--nav-color': cat.color }}
// //             >
// //               {cat.label}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Content area */}
// //         <div className="svc__stage" key={activeIndex}>
          
// //           {/* Sidebar — category info */}
// //           <div className="svc__sidebar">
// //             <div className="svc__sidebar-sticky">
// //               <span className="svc__sidebar-stat" style={{ color: active.color }}>
// //                 {active.stats.value}
// //               </span>
// //               <span className="svc__sidebar-stat-label">{active.stats.label}</span>
// //               <h3 className="svc__sidebar-title">{active.title}</h3>
// //               <p className="svc__sidebar-desc">{active.description}</p>
// //               <a href="#contact" className="svc__sidebar-cta" style={{ background: active.color }}>
// //                 Get started
// //                 <ArrowRight size={14} strokeWidth={2} />
// //               </a>
// //             </div>
// //           </div>

// //           {/* Main — expandable service list */}
// //           <div className="svc__list">
// //             {active.items.map((item, i) => {
// //               const isOpen = expandedItem === `${activeIndex}-${i}`;
// //               return (
// //                 <div
// //                   key={i}
// //                   className={`svc__row ${isOpen ? 'svc__row--open' : ''}`}
// //                   style={{ '--row-color': active.color, animationDelay: `${i * 0.06}s` }}
// //                 >
// //                   <button
// //                     className="svc__row-trigger"
// //                     onClick={() => setExpandedItem(isOpen ? null : `${activeIndex}-${i}`)}
// //                   >
// //                     <span className="svc__row-num">{String(i + 1).padStart(2, '0')}</span>
// //                     <span className="svc__row-title">{item.title}</span>
// //                     <span className="svc__row-tag" style={{ color: active.color }}>{item.tag}</span>
// //                     <span className={`svc__row-icon ${isOpen ? 'svc__row-icon--open' : ''}`}>
// //                       <ArrowRight size={14} strokeWidth={1.5} />
// //                     </span>
// //                   </button>
                  
// //                   <div className="svc__row-panel">
// //                     <p className="svc__row-desc">{item.desc}</p>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Service;



// import React, { useState, useEffect, useRef } from 'react';
// import { ArrowRight } from 'lucide-react';
// import './Service.css';

// const Service = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [visible, setVisible] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const sectionRef = useRef(null);

//   const categories = [
//     {
//       label: 'Business',
//       title: 'Business Services',
//       description: 'Digital transformation engineered for growth.',
//       color: '#4F46E5',
//       stat: { value: '200+', label: 'Projects' },
//       items: [
//         { title: 'Web & App Development', description: 'Scalable platforms built with modern stacks and cloud-native architecture.' },
//         { title: 'Digital Marketing', description: 'Performance campaigns driven by data and optimized for measurable return.' },
       
//         { title: 'Compliance & Finance', description: 'Complete regulatory management so you can focus on building.' },
//         { title: 'Talent Solutions', description: 'Vetted professionals matched to your culture and requirements.' },
       
//       ]
//     },
//     {
//       label: 'Hospitality',
//       title: 'Hospitality & Events',
//       description: 'Experiences crafted with precision and artistry.',
//       color: '#EA580C',
//       stat: { value: '500+', label: 'Events' },
//       items: [
//         { title: 'Premium Dining', description: 'Multi-cuisine excellence in an atmosphere of refined comfort.' },
//         { title: 'Corporate Events', description: 'Impeccable planning for discerning professional audiences.' },
//         { title: 'Weddings & Celebrations', description: 'Your vision honored with meticulous attention to every detail.' },
//         { title: 'Full-Service Management', description: 'Concept through completion — a seamless, stress-free experience.' },
//       ]
//     },
//     {
//       label: 'Technology',
//       title: 'Laptop Solutions',
//       description: 'Premium devices made accessible without compromise.',
//       color: '#059669',
//       stat: { value: '1000+', label: 'Units' },
//       items: [
//         { title: 'Certified Refurbished', description: 'Rigorously tested devices backed by comprehensive warranty coverage.' },
//         { title: 'Enterprise Procurement', description: 'Custom configurations at scale with dedicated account management.' },
//         { title: 'Support & Service', description: 'Technical assistance available when you need it, how you need it.' },
//         { title: 'Education Access', description: 'Special pricing that empowers students and emerging startups.' },
//       ]
//     },
//     {
//       label: 'Education',
//       title: 'Training & Skills',
//       description: 'Learning experiences that translate directly to careers.',
//       color: '#0284C7',
//       stat: { value: '50+', label: 'Courses' },
//       items: [
//         { title: 'Digital Marketing', description: 'Master real campaigns with actual budgets and live performance data.' },
//         { title: 'Full Stack Development', description: 'Build production-ready applications from architecture to deployment.' },
//         { title: 'UI/UX Design', description: 'Craft experiences through design thinking and industry-standard tools.' },
//         { title: 'Professional Skills', description: 'Communication, presence, and confidence for high-stakes environments.' },
//       ]
//     },
//     {
//       label: 'Creative',
//       title: 'Creator Studio',
//       description: 'Where ideas crystallize and content becomes art.',
//       color: '#DB2777',
//       stat: { value: '100+', label: 'Productions' },
//       items: [
//         { title: 'Studio & Lighting', description: 'Cinema-grade environment engineered for stunning visual output.' },
//         { title: 'Multi-Camera Production', description: 'Dynamic storytelling captured from multiple perspectives simultaneously.' },
//         { title: 'Post-Production', description: 'Expert editing, color grading, and sound design that elevates raw footage.' },
//         { title: 'Creative Partnership', description: 'End-to-end support for your vision from concept to final delivery.' },
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

//   useEffect(() => {
//     const handleMove = (e) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       setMousePos({
//         x: (e.clientX - rect.left) / rect.width,
//         y: (e.clientY - rect.top) / rect.height,
//       });
//     };
//     window.addEventListener('mousemove', handleMove, { passive: true });
//     return () => window.removeEventListener('mousemove', handleMove);
//   }, []);

//   return (
//     <section id="services" className="svc" ref={sectionRef}>
      
//       {/* Animated gradient atmosphere */}
//       <div className="svc__bg">
//         <div className="svc__bg-orb svc__bg-orb--1" />
//         <div className="svc__bg-orb svc__bg-orb--2" />
//         <div className="svc__bg-orb svc__bg-orb--3" />
//         <div 
//           className="svc__bg-glow"
//           style={{
//             background: `radial-gradient(ellipse 70% 50% at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${active.color}08 0%, transparent 60%)`,
//           }}
//         />
//       </div>

//       <div className={`svc__wrap ${visible ? 'svc__wrap--in' : ''}`}>
        
//         {/* Header */}
//         <header className="svc__head">
//           <span className="svc__head-label">What we offer</span>
//           <h2 className="svc__head-title">
//             Solutions for
//             <span className="svc__head-title-fade"> every ambition</span>
//           </h2>
//         </header>

//         {/* Category tabs */}
//         <nav className="svc__tabs">
//           {categories.map((cat, i) => (
//             <button
//               key={i}
//               className={`svc__tab ${activeIndex === i ? 'svc__tab--on' : ''}`}
//               onClick={() => { setActiveIndex(i); setHoveredCard(null); }}
//               style={{ '--tab-color': cat.color }}
//             >
//               {cat.label}
//             </button>
//           ))}
//         </nav>

//         {/* Content grid */}
//         <div className="svc__content" key={activeIndex}>
          
//           {/* Stat + Info */}
//           <div className="svc__info">
//             <div className="svc__info-stat">
//               <span className="svc__info-stat-val" style={{ color: active.color }}>{active.stat.value}</span>
//               <span className="svc__info-stat-lbl">{active.stat.label}</span>
//             </div>
//             <div className="svc__info-text">
//               <h3 className="svc__info-title">{active.title}</h3>
//               <p className="svc__info-desc">{active.description}</p>
//             </div>
//           </div>

//           {/* Service cards */}
//           <div className="svc__grid">
//             {active.items.map((item, i) => {
//               const isHovered = hoveredCard === `${activeIndex}-${i}`;
//               return (
//                 <article
//                   key={i}
//                   className={`svc__card ${isHovered ? 'svc__card--hover' : ''}`}
//                   onMouseEnter={() => setHoveredCard(`${activeIndex}-${i}`)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   style={{ 
//                     '--card-color': active.color,
//                     animationDelay: `${i * 0.06}s`,
//                   }}
//                 >
//                   <span className="svc__card-num">{String(i + 1).padStart(2, '0')}</span>
//                   <h4 className="svc__card-title">{item.title}</h4>
//                   <p className="svc__card-desc">{item.description}</p>
//                   <span className="svc__card-line" />
//                 </article>
//               );
//             })}
//           </div>

//           {/* CTA */}
//           <a href="#contact" className="svc__cta" style={{ background: active.color }}>
//             <span>Start your {active.label.toLowerCase()} journey</span>
//             <ArrowRight size={15} strokeWidth={2} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;












// import React, { useState, useEffect, useRef } from 'react';
// import { ArrowRight, Sparkles, ChevronRight, Play, Zap, Layers } from 'lucide-react';
// import './Service.css';

// const Service = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [visible, setVisible] = useState(false);
//   const [expandedItem, setExpandedItem] = useState(null);
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const sectionRef = useRef(null);
//   const videoRef = useRef(null);

//   const categories = [
//     {
//       label: 'Business',
//       title: 'Business Services',
//       description: 'Digital transformation engineered for growth.',
//       gradient: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
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
//       gradient: 'linear-gradient(135deg, #EA580C, #F97316)',
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
//       gradient: 'linear-gradient(135deg, #059669, #10B981)',
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
//       gradient: 'linear-gradient(135deg, #0284C7, #38BDF8)',
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
//       gradient: 'linear-gradient(135deg, #DB2777, #F43F5E)',
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
//       ([entry]) => { 
//         if (entry.isIntersecting) {
//           setVisible(true);
//           // Play video when section becomes visible
//           if (videoRef.current) {
//             videoRef.current.play().catch(e => console.log('Video autoplay prevented:', e));
//           }
//         }
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // Preload video background effect
//   useEffect(() => {
//     const timer = setTimeout(() => setVideoLoaded(true), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section id="services" className="svc" ref={sectionRef}>
//       {/* Cinematic Background Video + Overlay */}
//       <div className="svc__video-bg">
//         <video 
//           ref={videoRef}
//           className="svc__video"
//           autoPlay
//           loop
//           muted
//           playsInline
//           // poster="https://assets.codepen.io/13471/abstract-bg-poster.jpg"
//           onLoadedData={() => setVideoLoaded(true)}
//         >
//           <source src="https://www.pexels.com/download/video/7651776/" type="video/mp4" />
//           {/* Fallback abstract gradient if video fails */}
//         </video>
//         <div className="svc__video-overlay"></div>
//         {/* Animated gradient orbs */}
//         <div className="svc__atmos-orb svc__atmos-orb--1"></div>
//         <div className="svc__atmos-orb svc__atmos-orb--2"></div>
//         <div className="svc__atmos-orb svc__atmos-orb--3"></div>
//       </div>

//       {/* Floating, animated particles background */}
//       <div className="svc__particles">
//         {[...Array(20)].map((_, i) => (
//           <div key={i} className="svc__particle" style={{ '--i': i, '--dur': `${15 + Math.random() * 20}s`, '--delay': `${Math.random() * 10}s` }}></div>
//         ))}
//       </div>

//       <div className={`svc__wrap ${visible ? 'svc__wrap--in' : ''}`}>
        
//         {/* Header with subtle entrance */}
//         <div className="svc__head">
//           <span className="svc__head-eyebrow">
//             <Sparkles size={16} strokeWidth={1.5} />
//             Curated ecosystems
//           </span>
//           <h2 className="svc__head-title">
//             Solutions for
//             <span className="svc__head-title-accent"> every ambition</span>
//           </h2>
//           <p className="svc__head-subtitle">Global-grade services designed to scale your vision — from concept to market dominance.</p>
//         </div>

//         {/* Category tabs — capsule design with spring animation */}
//         <div className="svc__nav">
//           {categories.map((cat, i) => (
//             <button
//               key={i}
//               className={`svc__nav-item ${activeIndex === i ? 'svc__nav-item--on' : ''}`}
//               onClick={() => { setActiveIndex(i); setExpandedItem(null); }}
//               style={{ '--nav-color': cat.color }}
//             >
//               <span className="svc__nav-dot"></span>
//               {cat.label}
//             </button>
//           ))}
//         </div>

//         {/* Content area — split layout with glass card effect */}
//         <div className="svc__stage" key={activeIndex}>
          
//           {/* Sidebar — floating stats card */}
//           <div className="svc__sidebar">
//             <div className="svc__sidebar-sticky" style={{ background: `linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)`, backdropFilter: 'blur(12px)' }}>
//               <div className="svc__sidebar-stat-wrap">
//                 <span className="svc__sidebar-stat" style={{ background: active.gradient, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
//                   {active.stats.value}
//                 </span>
//                 <span className="svc__sidebar-stat-label">{active.stats.label}</span>
//               </div>
//               <h3 className="svc__sidebar-title">{active.title}</h3>
//               <p className="svc__sidebar-desc">{active.description}</p>
//               <a href="#contact" className="svc__sidebar-cta" style={{ background: active.gradient }}>
//                 Start a conversation
//                 <ArrowRight size={16} strokeWidth={2} />
//               </a>
//               <div className="svc__sidebar-badge">
//                 <Zap size={12} />
//                 <span>Trusted by 500+ innovators</span>
//               </div>
//             </div>
//           </div>

//           {/* Main — expandable, Apple-style service rows */}
//           <div className="svc__list">
//             {active.items.map((item, i) => {
//               const isOpen = expandedItem === `${activeIndex}-${i}`;
//               return (
//                 <div
//                   key={i}
//                   className={`svc__row ${isOpen ? 'svc__row--open' : ''}`}
//                   style={{ '--row-color': active.color, animationDelay: `${i * 0.05}s` }}
//                 >
//                   <button
//                     className="svc__row-trigger"
//                     onClick={() => setExpandedItem(isOpen ? null : `${activeIndex}-${i}`)}
//                   >
//                     <div className="svc__row-left">
//                       <span className="svc__row-num">{String(i + 1).padStart(2, '0')}</span>
//                       <span className="svc__row-title">{item.title}</span>
//                     </div>
//                     <div className="svc__row-right">
//                       <span className="svc__row-tag" style={{ backgroundColor: `${active.color}15`, color: active.color, border: `1px solid ${active.color}30` }}>
//                         {item.tag}
//                       </span>
//                       <span className={`svc__row-icon ${isOpen ? 'svc__row-icon--open' : ''}`}>
//                         <ChevronRight size={18} strokeWidth={2} />
//                       </span>
//                     </div>
//                   </button>
                  
//                   <div className="svc__row-panel">
//                     <div className="svc__row-panel-inner">
//                       <p className="svc__row-desc">{item.desc}</p>
//                       <div className="svc__row-meta">
//                         <Play size={12} />
//                         <span>Launch-ready in weeks</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//             {/* CTA hint at bottom of list */}
//             <div className="svc__list-footer">
//               <div className="svc__list-footer-line"></div>
//               <p>Tailored end-to-end solutions — from discovery to deployment</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS injected here for production-ready styles (inline for single-file component) */}
//       <style jsx>{`
//         /* Additional styles for Service component - this will be applied globally via CSS file typically, 
//            but included here for clarity (in real project move to Service.css) */
//       `}</style>
//     </section>
//   );
// };

// export default Service;








// import React, { useState, useEffect, useRef } from 'react';
// import { ArrowRight, Sparkles, ChevronRight, Zap, Layers, TrendingUp, Award } from 'lucide-react';
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
//       description: 'Digital transformation engineered for exponential growth.',
//       gradient: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
//       lightGradient: 'linear-gradient(135deg, #EEF2FF, #F5F3FF)',
//       color: '#4F46E5',
//       accent: '#E0E7FF',
//       stats: { value: '200+', label: 'Projects Completed' },
//       items: [
//         { title: 'Web & App Development', desc: 'Scalable platforms built with modern stacks and cloud architecture.', tag: 'React · Node.js · AWS' },
//         { title: 'Digital Marketing', desc: 'Performance campaigns driven by data, optimized for measurable return.', tag: 'SEO · PPC · Analytics' },
  
//         { title: 'Compliance & Finance', desc: 'Complete regulatory management so you can focus on building.', tag: 'GST · Audits · Filing' },
//         { title: 'Talent Solutions', desc: 'Vetted professionals matched to your culture and requirements.', tag: 'IT & Non-IT' },
//       ]
//     },
//     {
//       label: 'Hospitality',
//       title: 'Hospitality & Events',
//       description: 'Experiences crafted with precision, warmth, and artistry.',
//       gradient: 'linear-gradient(135deg, #EA580C, #F97316)',
//       lightGradient: 'linear-gradient(135deg, #FFF7ED, #FFEDD5)',
//       color: '#EA580C',
//       accent: '#FFEDD5',
//       stats: { value: '500+', label: 'Events Hosted' },
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
//       gradient: 'linear-gradient(135deg, #059669, #10B981)',
//       lightGradient: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)',
//       color: '#059669',
//       accent: '#D1FAE5',
//       stats: { value: '1000+', label: 'Units Deployed' },
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
//       gradient: 'linear-gradient(135deg, #0284C7, #38BDF8)',
//       lightGradient: 'linear-gradient(135deg, #F0F9FF, #E0F2FE)',
//       color: '#0284C7',
//       accent: '#E0F2FE',
//       stats: { value: '50+', label: 'Active Courses' },
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
//       gradient: 'linear-gradient(135deg, #DB2777, #F43F5E)',
//       lightGradient: 'linear-gradient(135deg, #FDF2F8, #FCE7F3)',
//       color: '#DB2777',
//       accent: '#FCE7F3',
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
//       {/* Vibrant animated background - light and energetic */}
//       <div className="svc__bg">
//         <div className="svc__bg-gradient"></div>
//         <div className="svc__bg-orb svc__bg-orb--1"></div>
//         <div className="svc__bg-orb svc__bg-orb--2"></div>
//         <div className="svc__bg-orb svc__bg-orb--3"></div>
//         <div className="svc__bg-orb svc__bg-orb--4"></div>
//         <svg className="svc__bg-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
//           <path fill="#F3F4F6" fillOpacity="0.4" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,208C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//         </svg>
//       </div>

//       <div className={`svc__wrap ${visible ? 'svc__wrap--in' : ''}`}>
        
//         {/* Header with vibrant styling */}
//         <div className="svc__head">
//           <span className="svc__head-eyebrow">
//             <Sparkles size={16} strokeWidth={1.5} />
//             Our ecosystem
//           </span>
//           <h2 className="svc__head-title">
//             Solutions for <span></span>
//             <span className="svc__head-title-accent">  every ambition</span>
//           </h2>
//           <p className="svc__head-subtitle">Global-grade services designed to scale your vision — from concept to market dominance.</p>
//         </div>

//         {/* Category tabs — vibrant capsule design */}
//         <div className="svc__nav">
//           {categories.map((cat, i) => (
//             <button
//               key={i}
//               className={`svc__nav-item ${activeIndex === i ? 'svc__nav-item--on' : ''}`}
//               onClick={() => { setActiveIndex(i); setExpandedItem(null); }}
//               style={{ '--nav-color': cat.color }}
//             >
//               <span className="svc__nav-dot"></span>
//               {cat.label}
//             </button>
//           ))}
//         </div>

//         {/* Content area — split layout with vibrant cards */}
//         <div className="svc__stage" key={activeIndex}>
          
//           {/* Sidebar — vibrant stat card */}
//           <div className="svc__sidebar">
//             <div className="svc__sidebar-sticky" style={{ background: active.lightGradient, borderColor: `${active.color}20` }}>
//               <div className="svc__sidebar-stat-wrap">
//                 <div className="svc__sidebar-stat-icon" style={{ background: active.gradient }}>
//                   <TrendingUp size={24} color="white" />
//                 </div>
//                 <div>
//                   <span className="svc__sidebar-stat" style={{ color: active.color }}>
//                     {active.stats.value}
//                   </span>
//                   <span className="svc__sidebar-stat-label">{active.stats.label}</span>
//                 </div>
//               </div>
//               <h3 className="svc__sidebar-title" style={{ color: '#1F2937' }}>{active.title}</h3>
//               <p className="svc__sidebar-desc" style={{ color: '#4B5563' }}>{active.description}</p>
//               <a href="#contact" className="svc__sidebar-cta" style={{ background: active.gradient }}>
//                 Start a conversation
//                 <ArrowRight size={16} strokeWidth={2} />
//               </a>
//               <div className="svc__sidebar-badge" style={{ background: `${active.color}10`, color: active.color }}>
//                 <Award size={12} />
//                 <span>Trusted by 500+ innovators</span>
//               </div>
//             </div>
//           </div>

//           {/* Main — vibrant expandable service list */}
//           <div className="svc__list">
//             {active.items.map((item, i) => {
//               const isOpen = expandedItem === `${activeIndex}-${i}`;
//               return (
//                 <div
//                   key={i}
//                   className={`svc__row ${isOpen ? 'svc__row--open' : ''}`}
//                   style={{ 
//                     '--row-color': active.color,
//                     '--row-bg': active.accent,
//                     animationDelay: `${i * 0.05}s` 
//                   }}
//                 >
//                   <button
//                     className="svc__row-trigger"
//                     onClick={() => setExpandedItem(isOpen ? null : `${activeIndex}-${i}`)}
//                   >
//                     <div className="svc__row-left">
//                       <span className="svc__row-num" style={{ color: active.color }}>{String(i + 1).padStart(2, '0')}</span>
//                       <span className="svc__row-title">{item.title}</span>
//                     </div>
//                     <div className="svc__row-right">
//                       <span className="svc__row-tag" style={{ backgroundColor: `${active.color}15`, color: active.color, borderColor: `${active.color}25` }}>
//                         {item.tag}
//                       </span>
//                       <span className={`svc__row-icon ${isOpen ? 'svc__row-icon--open' : ''}`} style={{ color: active.color }}>
//                         <ChevronRight size={18} strokeWidth={2} />
//                       </span>
//                     </div>
//                   </button>
                  
//                   <div className="svc__row-panel">
//                     <div className="svc__row-panel-inner">
//                       <p className="svc__row-desc">{item.desc}</p>
//                       <div className="svc__row-meta" style={{ color: active.color }}>
//                         <Zap size={12} />
//                         <span>Launch-ready in weeks</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//             <div className="svc__list-footer">
//               <div className="svc__list-footer-line" style={{ background: active.color }}></div>
//               <p style={{ color: '#6B7280' }}>Tailored end-to-end solutions — from discovery to deployment</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;













// import React, { useState, useEffect, useRef } from 'react';
// import { ArrowRight, Sparkles, ChevronRight, TrendingUp } from 'lucide-react';
// import './Service.css';

// const Service = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [visible, setVisible] = useState(false);
//   const [expandedItem, setExpandedItem] = useState(null);
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const sectionRef = useRef(null);

//   const categories = [
//     {
//       label: 'Business',
//       title: 'Business Services',
//       description: 'Digital transformation engineered for exponential growth.',
//       color: '#6366F1',
//       stats: { value: '200+', label: 'Projects Completed' },
//       items: [
//         { title: 'Web & App Development', desc: 'Scalable platforms built with modern stacks and cloud architecture.', tag: 'React · Node.js · AWS' },
//         { title: 'Digital Marketing', desc: 'Performance campaigns driven by data, optimized for measurable return.', tag: 'SEO · PPC · Analytics' },
//         { title: 'Compliance & Finance', desc: 'Complete regulatory management so you can focus on building.', tag: 'GST · Audits · Filing' },
//         { title: 'Talent Solutions', desc: 'Vetted professionals matched to your culture and requirements.', tag: 'IT & Non-IT' },
//       ]
//     },
//     {
//       label: 'Hospitality',
//       title: 'Hospitality & Events',
//       description: 'Experiences crafted with precision, warmth, and artistry.',
//       color: '#F59E0B',
//       stats: { value: '500+', label: 'Events Hosted' },
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
//       color: '#10B981',
//       stats: { value: '1000+', label: 'Units Deployed' },
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
//       color: '#0EA5E9',
//       stats: { value: '50+', label: 'Active Courses' },
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
//       color: '#EC4899',
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
//       ([entry]) => { 
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="services" className="svc" ref={sectionRef}>
      
//       <div className={`svc-wrap ${visible ? 'is-visible' : ''}`}>
        
//         {/* Header */}
//         <header className="svc-header">
//           <div className="svc-label">
//             <Sparkles size={14} strokeWidth={1.8} />
//             <span>Our ecosystem</span>
//           </div>
//           <h2 className="svc-title">
//             <span className="svc-title-mask">
//               <span className="svc-title-text">Solutions for</span>
//             </span>
//             <span className="svc-title-mask">
//               <span className="svc-title-text svc-title-text--accent">every ambition</span>
//             </span>
//           </h2>
//           <p className="svc-subtitle">
//             Global-grade services designed to scale your vision — from concept to market dominance.
//           </p>
//         </header>

//         {/* Category pills */}
//         <nav className="svc-nav">
//           {categories.map((cat, i) => (
//             <button
//               key={i}
//               className={`svc-nav-pill ${activeIndex === i ? 'is-active' : ''}`}
//               onClick={() => { setActiveIndex(i); setExpandedItem(null); }}
//               style={{ '--pill-color': cat.color }}
//             >
//               {cat.label}
//             </button>
//           ))}
//         </nav>

//         {/* Content area */}
//         <div className="svc-content" key={activeIndex}>
          
//           {/* Sidebar */}
//           <aside className="svc-sidebar">
//             <div className="svc-sidebar-card" style={{ '--card-color': active.color }}>
//               <div className="svc-sidebar-stat">
//                 <span className="svc-sidebar-stat-value">{active.stats.value}</span>
//                 <span className="svc-sidebar-stat-label">{active.stats.label}</span>
//               </div>
//               <h3 className="svc-sidebar-title">{active.title}</h3>
//               <p className="svc-sidebar-desc">{active.description}</p>
//               <a href="#contact" className="svc-sidebar-cta">
//                 <span>Start a conversation</span>
//                 <ArrowRight size={15} strokeWidth={2} />
//               </a>
//             </div>
//           </aside>

//           {/* Service list */}
//           <div className="svc-list">
//             {active.items.map((item, i) => {
//               const isOpen = expandedItem === `${activeIndex}-${i}`;
//               const isHovered = hoveredItem === `${activeIndex}-${i}`;
              
//               return (
//                 <div
//                   key={i}
//                   className={`svc-item ${isOpen ? 'is-open' : ''} ${isHovered ? 'is-hovered' : ''}`}
//                   style={{ '--item-color': active.color, '--i': i }}
//                   onMouseEnter={() => setHoveredItem(`${activeIndex}-${i}`)}
//                   onMouseLeave={() => setHoveredItem(null)}
//                 >
//                   <button
//                     className="svc-item-trigger"
//                     onClick={() => setExpandedItem(isOpen ? null : `${activeIndex}-${i}`)}
//                   >
//                     <div className="svc-item-left">
//                       <span className="svc-item-num">{String(i + 1).padStart(2, '0')}</span>
//                       <span className="svc-item-title">{item.title}</span>
//                     </div>
//                     <div className="svc-item-right">
//                       <span className="svc-item-tag">{item.tag}</span>
//                       <span className={`svc-item-chevron ${isOpen ? 'is-rotated' : ''}`}>
//                         <ChevronRight size={16} strokeWidth={2} />
//                       </span>
//                     </div>
//                   </button>
                  
//                   <div className="svc-item-panel">
//                     <div className="svc-item-panel-inner">
//                       <p className="svc-item-desc">{item.desc}</p>
//                       <div className="svc-item-meta">
//                         <TrendingUp size={12} strokeWidth={2} />
//                         <span>Launch-ready in weeks</span>
//                       </div>
//                     </div>
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
















import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Sparkles, ChevronRight, TrendingUp, Zap } from 'lucide-react';
import './Service.css';

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef(null);

  const categories = [
    {
      label: 'Business',
      title: 'Business Services',
      description: 'Digital transformation engineered for exponential growth.',
      color: '#6366F1',
      stats: { value: '200+', label: 'Projects Completed' },
      items: [
        { title: 'Web & App Development', desc: 'Scalable platforms built with modern stacks and cloud architecture.', tag: 'React · Node.js · AWS' },
        { title: 'Digital Marketing', desc: 'Performance campaigns driven by data, optimized for measurable return.', tag: 'SEO · PPC · Analytics' },
        { title: 'Compliance & Finance', desc: 'Complete regulatory management so you can focus on building.', tag: 'GST · Audits · Filing' },
        { title: 'Talent Solutions', desc: 'Vetted professionals matched to your culture and requirements.', tag: 'IT & Non-IT' },
      ]
    },
    {
      label: 'Hospitality',
      title: 'Hospitality & Events',
      description: 'Experiences crafted with precision, warmth, and artistry.',
      color: '#F59E0B',
      stats: { value: '500+', label: 'Events Hosted' },
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
      color: '#10B981',
      stats: { value: '1000+', label: 'Units Deployed' },
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
      color: '#0EA5E9',
      stats: { value: '50+', label: 'Active Courses' },
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
      color: '#EC4899',
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
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section 
      id="services" 
      className="svc" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      
      {/* Ambient background system */}
      <div className="svc-bg">
        <div className="svc-bg-gradient" />
        <div 
          className="svc-bg-glow"
          style={{
            '--mx': `${mousePos.x * 100}%`,
            '--my': `${mousePos.y * 100}%`,
            '--glow-color': active.color,
          }}
        />
        <div className="svc-bg-grid" />
        <div className="svc-orb svc-orb--1" style={{ '--orb-color': active.color }} />
        <div className="svc-orb svc-orb--2" style={{ '--orb-color': categories[(activeIndex + 1) % categories.length].color }} />
      </div>

      <div className={`svc-wrap ${visible ? 'is-visible' : ''}`}>
        
        {/* Header */}
        <header className="svc-header">
          <div className="svc-label">
            <Sparkles size={14} strokeWidth={1.8} />
            <span>Our ecosystem</span>
            <span className="svc-label-line" />
          </div>
          <h2 className="svc-title">
            <span className="svc-title-row">
              <span className="svc-title-text">Solutions for</span>
            </span>
            <span className="svc-title-row">
              <span className="svc-title-text svc-title-text--accent">every ambition</span>
              <svg className="svc-title-underline" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,4 Q25,8 50,4 Q75,0 100,4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="svc-subtitle">
            Global-grade services designed to scale your vision — from concept to market dominance.
          </p>
        </header>

        {/* Category pills */}
        <nav className="svc-nav">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`svc-nav-pill ${activeIndex === i ? 'is-active' : ''}`}
              onClick={() => { setActiveIndex(i); setExpandedItem(null); }}
              style={{ '--pill-color': cat.color, '--pill-i': i }}
            >
              <span className="svc-nav-dot" />
              {cat.label}
              {activeIndex === i && <div className="svc-nav-glow" />}
            </button>
          ))}
        </nav>

        {/* Content area */}
        <div className="svc-content" key={activeIndex}>
          
          {/* Sidebar */}
          <aside className="svc-sidebar">
            <div className="svc-sidebar-card" style={{ '--card-color': active.color }}>
              {/* Shine effect */}
              <div className="svc-sidebar-shine" />
              
              <div className="svc-sidebar-stat">
                <span className="svc-sidebar-stat-value">{active.stats.value}</span>
                <span className="svc-sidebar-stat-label">{active.stats.label}</span>
              </div>
              
              <h3 className="svc-sidebar-title">{active.title}</h3>
              <p className="svc-sidebar-desc">{active.description}</p>
              
              <a href="#contact" className="svc-sidebar-cta">
                <span>Start a conversation</span>
                <ArrowRight size={15} strokeWidth={2} />
                <div className="svc-sidebar-cta-shimmer" />
              </a>
              
              <div className="svc-sidebar-trust">
                <TrendingUp size={13} strokeWidth={2} />
                <span>Trusted by 500+ innovators</span>
              </div>

              {/* Accent line */}
              <div className="svc-sidebar-accent" />
            </div>
          </aside>

          {/* Service list */}
          <div className="svc-list">
            {active.items.map((item, i) => {
              const isOpen = expandedItem === `${activeIndex}-${i}`;
              
              return (
                <div
                  key={i}
                  className={`svc-item ${isOpen ? 'is-open' : ''}`}
                  style={{ '--item-color': active.color, '--i': i }}
                >
                  <button
                    className="svc-item-trigger"
                    onClick={() => setExpandedItem(isOpen ? null : `${activeIndex}-${i}`)}
                  >
                    <div className="svc-item-left">
                      <span className="svc-item-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="svc-item-title">{item.title}</span>
                    </div>
                    <div className="svc-item-right">
                      <span className="svc-item-tag">{item.tag}</span>
                      <span className={`svc-item-chevron ${isOpen ? 'is-rotated' : ''}`}>
                        <ChevronRight size={17} strokeWidth={2} />
                      </span>
                    </div>
                  </button>
                  
                  <div className="svc-item-panel">
                    <div className="svc-item-panel-inner">
                      <p className="svc-item-desc">{item.desc}</p>
                      <div className="svc-item-meta">
                        <Zap size={12} strokeWidth={2} />
                        <span>Launch-ready in weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* List footer */}
            <div className="svc-list-footer">
              <p>Tailored end-to-end solutions — from discovery to deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;