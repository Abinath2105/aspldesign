// import React, { useState, useRef, useEffect, useCallback } from 'react';
// import { ArrowRight } from 'lucide-react';
// import './Service.css';

// const Services = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const sectionRef = useRef(null);

//   const categories = [
//     {
//       label: 'Business',
//       title: 'Business Services',
//       subtitle: 'Digital transformation engineered for growth.',
//       color: '#4F46E5',
//       colorLight: '#EEF2FF',
//       gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #A78BFA 100%)',
//       stats: [
//         { value: '200+', label: 'Projects' },
//         { value: '4.9', label: 'Rating' },
//         { value: '25+', label: 'Experts' },
//       ],
//       items: [
//         { title: 'Web & App Development', description: 'Scalable platforms with modern stacks.', tag: 'React · Node.js · AWS' },
//         { title: 'Digital Marketing', description: 'Data-driven campaigns that deliver ROI.', tag: 'SEO · PPC · Analytics' },
//         { title: 'UI/UX Design', description: 'Interfaces that convert visitors.', tag: 'Figma · Design Systems' },
//         { title: 'Compliance & Finance', description: 'Regulatory peace of mind.', tag: 'GST · Audits · Filing' },
//         { title: 'Talent Solutions', description: 'Vetted professionals, right fit.', tag: 'IT & Non-IT' },
//         { title: 'Brand Collateral', description: 'Premium print and production.', tag: 'Brochures · Merch' },
//       ]
//     },
//     {
//       label: 'Hospitality',
//       title: 'Hospitality & Events',
//       subtitle: 'Experiences crafted with precision.',
//       color: '#EA580C',
//       colorLight: '#FFF7ED',
//       gradient: 'linear-gradient(135deg, #EA580C 0%, #F97316 50%, #FDBA74 100%)',
//       stats: [
//         { value: '500+', label: 'Events' },
//         { value: '4.8', label: 'Rating' },
//         { value: '30+', label: 'Specialists' },
//       ],
//       items: [
//         { title: 'Premium Dining', description: 'Multi-cuisine excellence.', tag: 'Indian · Chinese · Italian' },
//         { title: 'Corporate Events', description: 'Impeccable professional planning.', tag: 'Conferences · Galas' },
//         { title: 'Weddings & Celebrations', description: 'Your vision, honored.', tag: 'Decor · Catering' },
//         { title: 'Full-Service Management', description: 'Concept to completion.', tag: 'Venue · Logistics' },
//       ]
//     },
//     {
//       label: 'Technology',
//       title: 'Laptop Solutions',
//       subtitle: 'Premium devices, accessible prices.',
//       color: '#059669',
//       colorLight: '#ECFDF5',
//       gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #6EE7B7 100%)',
//       stats: [
//         { value: '1000+', label: 'Units' },
//         { value: '4.9', label: 'Rating' },
//         { value: '15+', label: 'Tech Team' },
//       ],
//       items: [
//         { title: 'Certified Refurbished', description: 'Tested devices with warranty.', tag: '8–12 Month Warranty' },
//         { title: 'Enterprise Procurement', description: 'Custom configurations at scale.', tag: 'Tailored Solutions' },
//         { title: 'Support & Service', description: 'Technical assistance anytime.', tag: '24/7 Help Desk' },
//         { title: 'Education Access', description: 'Special pricing for students.', tag: 'Up to 40% Savings' },
//       ]
//     },
//     {
//       label: 'Education',
//       title: 'Training & Skills',
//       subtitle: 'Learning that launches careers.',
//       color: '#0284C7',
//       colorLight: '#F0F9FF',
//       gradient: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 50%, #7DD3FC 100%)',
//       stats: [
//         { value: '50+', label: 'Courses' },
//         { value: '4.7', label: 'Rating' },
//         { value: '20+', label: 'Mentors' },
//       ],
//       items: [
//         { title: 'Digital Marketing', description: 'Real campaigns, real budgets.', tag: '3-Month Intensive' },
//         { title: 'Full Stack Development', description: 'Build production-ready apps.', tag: 'Java · React · Python' },
//         { title: 'UI/UX Design', description: 'Design thinking and tools.', tag: 'Portfolio Included' },
//         { title: 'Professional Skills', description: 'Communication mastery.', tag: 'Mock Interviews' },
//       ]
//     },
//     {
//       label: 'Creative',
//       title: 'Creator Studio',
//       subtitle: 'Where content becomes art.',
//       color: '#DB2777',
//       colorLight: '#FDF2F8',
//       gradient: 'linear-gradient(135deg, #DB2777 0%, #EC4899 50%, #F9A8D4 100%)',
//       stats: [
//         { value: '100+', label: 'Productions' },
//         { value: '5.0', label: 'Rating' },
//         { value: '10+', label: 'Creatives' },
//       ],
//       items: [
//         { title: 'Studio & Lighting', description: 'Cinema-grade environment.', tag: '4K · Pro Lighting' },
//         { title: 'Multi-Camera Production', description: 'Dynamic storytelling.', tag: '3-Camera Setup' },
//         { title: 'Post-Production', description: 'Expert editing and color.', tag: 'Premiere · DaVinci' },
//         { title: 'Creative Partnership', description: 'End-to-end support.', tag: 'Full Crew · Full Service' },
//       ]
//     },
//   ];

//   const active = categories[activeIndex];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const handleCategoryChange = useCallback((index) => {
//     if (index === activeIndex || isTransitioning) return;
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setActiveIndex(index);
//       setHoveredCard(null);
//       setTimeout(() => setIsTransitioning(false), 100);
//     }, 200);
//   }, [activeIndex, isTransitioning]);

//   return (
//     <section id="services" className="svc" ref={sectionRef}>
      
//       {/* Background */}
//       <div className="svc__bg">
//         <div className="svc__bg-orb svc__bg-orb--1" />
//         <div className="svc__bg-orb svc__bg-orb--2" />
//         <div className="svc__bg-grid" />
//       </div>

//       <div className={`svc__container ${visible ? 'svc__container--visible' : ''}`}>
        
//         {/* Header */}
//         <header className="svc__header">
//           <span className="svc__kicker">What we offer</span>
//           <h2 className="svc__title">
//             Everything you need
//             <br />
//             <span className="svc__title-accent">in one place</span>
//           </h2>
//           <p className="svc__subtitle">
//             Five integrated divisions. One partner. Infinite possibilities.
//           </p>
//         </header>

//         {/* Category Tabs */}
//         <nav className="svc__tabs">
//           {categories.map((cat, i) => (
//             <button
//               key={i}
//               className={`svc__tab ${activeIndex === i ? 'svc__tab--active' : ''}`}
//               onClick={() => handleCategoryChange(i)}
//               style={{ '--tab-color': cat.color, '--tab-gradient': cat.gradient }}
//             >
//               {cat.label}
//             </button>
//           ))}
//         </nav>

//         {/* Content */}
//         <div className={`svc__content ${isTransitioning ? 'svc__content--fading' : ''}`} key={activeIndex}>
          
//           {/* Stats Row */}
//           <div className="svc__stats-row">
//             <div className="svc__stats-info">
//               <h3 className="svc__stats-title" style={{ color: active.color }}>{active.title}</h3>
//               <p className="svc__stats-subtitle">{active.subtitle}</p>
//             </div>
//             <div className="svc__stats">
//               {active.stats.map((stat, i) => (
//                 <div key={i} className="svc__stat">
//                   <span className="svc__stat-value" style={{ color: active.color }}>{stat.value}</span>
//                   <span className="svc__stat-label">{stat.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Cards Grid */}
//           <div className="svc__grid">
//             {active.items.map((item, i) => {
//               const isHovered = hoveredCard === `${activeIndex}-${i}`;
//               return (
//                 <article
//                   key={i}
//                   className={`svc__card ${isHovered ? 'svc__card--hovered' : ''}`}
//                   onMouseEnter={() => setHoveredCard(`${activeIndex}-${i}`)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   style={{
//                     '--card-color': active.color,
//                     '--card-light': active.colorLight,
//                     '--card-gradient': active.gradient,
//                   }}
//                 >
//                   <span className="svc__card-num">{String(i + 1).padStart(2, '0')}</span>
                  
//                   <div className="svc__card-content">
//                     <h4 className="svc__card-title">{item.title}</h4>
//                     <p className="svc__card-desc">{item.description}</p>
//                     <span className="svc__card-tag" style={{ color: active.color, background: active.colorLight }}>
//                       {item.tag}
//                     </span>
//                   </div>
                  
//                   <div className="svc__card-shine" />
//                 </article>
//               );
//             })}
//           </div>

//           {/* CTA */}
//           <div className="svc__cta" style={{ background: active.gradient }}>
//             <div className="svc__cta-inner">
//               <div>
//                 <p className="svc__cta-title">Start your {active.label.toLowerCase()} journey</p>
//                 <p className="svc__cta-text">Schedule a consultation with our team.</p>
//               </div>
//               <a href="#contact" className="svc__cta-btn">
//                 Get in touch
//                 <ArrowRight size={16} strokeWidth={2} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



















import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import './Service.css';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef(null);

  const categories = [
    {
      label: 'Business',
      title: 'Business Services',
      subtitle: 'Digital transformation engineered for growth.',
      color: '#4F46E5',
      gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #A78BFA 100%)',
      stats: [
        { value: '200+', label: 'Projects' },
        { value: '4.9', label: 'Rating' },
        { value: '25+', label: 'Experts' },
      ],
      items: [
        { title: 'Web & App Development', description: 'Scalable platforms with modern stacks.', tag: 'React · Node.js · AWS' },
        { title: 'Digital Marketing', description: 'Data-driven campaigns that deliver ROI.', tag: 'SEO · PPC · Analytics' },
        { title: 'UI/UX Design', description: 'Interfaces that convert visitors.', tag: 'Figma · Design Systems' },
        { title: 'Compliance & Finance', description: 'Regulatory peace of mind.', tag: 'GST · Audits · Filing' },
        { title: 'Talent Solutions', description: 'Vetted professionals, right fit.', tag: 'IT & Non-IT' },
        { title: 'Brand Collateral', description: 'Premium print and production.', tag: 'Brochures · Merch' },
      ]
    },
    {
      label: 'Hospitality',
      title: 'Hospitality & Events',
      subtitle: 'Experiences crafted with precision.',
      color: '#EA580C',
      gradient: 'linear-gradient(135deg, #EA580C 0%, #F97316 50%, #FDBA74 100%)',
      stats: [
        { value: '500+', label: 'Events' },
        { value: '4.8', label: 'Rating' },
        { value: '30+', label: 'Specialists' },
      ],
      items: [
        { title: 'Premium Dining', description: 'Multi-cuisine excellence.', tag: 'Indian · Chinese · Italian' },
        { title: 'Corporate Events', description: 'Impeccable professional planning.', tag: 'Conferences · Galas' },
        { title: 'Weddings & Celebrations', description: 'Your vision, honored.', tag: 'Decor · Catering' },
        { title: 'Full-Service Management', description: 'Concept to completion.', tag: 'Venue · Logistics' },
      ]
    },
    {
      label: 'Technology',
      title: 'Laptop Solutions',
      subtitle: 'Premium devices, accessible prices.',
      color: '#059669',
      gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #6EE7B7 100%)',
      stats: [
        { value: '1000+', label: 'Units' },
        { value: '4.9', label: 'Rating' },
        { value: '15+', label: 'Tech Team' },
      ],
      items: [
        { title: 'Certified Refurbished', description: 'Tested devices with warranty.', tag: '8–12 Month Warranty' },
        { title: 'Enterprise Procurement', description: 'Custom configurations at scale.', tag: 'Tailored Solutions' },
        { title: 'Support & Service', description: 'Technical assistance anytime.', tag: '24/7 Help Desk' },
        { title: 'Education Access', description: 'Special pricing for students.', tag: 'Up to 40% Savings' },
      ]
    },
    {
      label: 'Education',
      title: 'Training & Skills',
      subtitle: 'Learning that launches careers.',
      color: '#0284C7',
      gradient: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 50%, #7DD3FC 100%)',
      stats: [
        { value: '50+', label: 'Courses' },
        { value: '4.7', label: 'Rating' },
        { value: '20+', label: 'Mentors' },
      ],
      items: [
        { title: 'Digital Marketing', description: 'Real campaigns, real budgets.', tag: '3-Month Intensive' },
        { title: 'Full Stack Development', description: 'Build production-ready apps.', tag: 'Java · React · Python' },
        { title: 'UI/UX Design', description: 'Design thinking and tools.', tag: 'Portfolio Included' },
        { title: 'Professional Skills', description: 'Communication mastery.', tag: 'Mock Interviews' },
      ]
    },
    {
      label: 'Creative',
      title: 'Creator Studio',
      subtitle: 'Where content becomes art.',
      color: '#DB2777',
      gradient: 'linear-gradient(135deg, #DB2777 0%, #EC4899 50%, #F9A8D4 100%)',
      stats: [
        { value: '100+', label: 'Productions' },
        { value: '5.0', label: 'Rating' },
        { value: '10+', label: 'Creatives' },
      ],
      items: [
        { title: 'Studio & Lighting', description: 'Cinema-grade environment.', tag: '4K · Pro Lighting' },
        { title: 'Multi-Camera Production', description: 'Dynamic storytelling.', tag: '3-Camera Setup' },
        { title: 'Post-Production', description: 'Expert editing and color.', tag: 'Premiere · DaVinci' },
        { title: 'Creative Partnership', description: 'End-to-end support.', tag: 'Full Crew · Full Service' },
      ]
    },
  ];

  const active = categories[activeIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const handleCategoryChange = useCallback((index) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setHoveredCard(null);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  }, [activeIndex, isTransitioning]);

  return (
    <section id="services" className="svc" ref={sectionRef}>
      
      {/* Living gradient atmosphere */}
      <div className="svc__bg">
        <div 
          className="svc__bg-orb svc__bg-orb--1"
          style={{
            transform: `translate(${(mousePos.x - 0.5) * 40}px, ${(mousePos.y - 0.5) * 40}px)`,
          }}
        />
        <div 
          className="svc__bg-orb svc__bg-orb--2"
          style={{
            transform: `translate(${(mousePos.x - 0.5) * -50}px, ${(mousePos.y - 0.5) * -50}px)`,
          }}
        />
        <div 
          className="svc__bg-glow"
          style={{
            background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${active.color}06 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className={`svc__wrap ${visible ? 'svc__wrap--in' : ''}`}>
        
        {/* Header */}
        <header className="svc__header">
          <span className="svc__header-kicker">
            <span className="svc__header-kicker-line" />
            What we offer
          </span>
          <h2 className="svc__header-title">
            Everything you need
            <span className="svc__header-title-accent"> in one place</span>
          </h2>
        </header>

        {/* Category tabs */}
        <nav className="svc__tabs">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`svc__tab ${activeIndex === i ? 'svc__tab--active' : ''}`}
              onClick={() => handleCategoryChange(i)}
              style={{ '--tab-color': cat.color, '--tab-gradient': cat.gradient }}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div className={`svc__content ${isTransitioning ? 'svc__content--fading' : ''}`} key={activeIndex}>
          
          {/* Info bar */}
          <div className="svc__bar" style={{ borderLeftColor: active.color }}>
            <div>
              <h3 className="svc__bar-title" style={{ color: active.color }}>{active.title}</h3>
              <p className="svc__bar-subtitle">{active.subtitle}</p>
            </div>
            <div className="svc__bar-stats">
              {active.stats.map((stat, i) => (
                <div key={i} className="svc__bar-stat">
                  <span className="svc__bar-stat-value" style={{ color: active.color }}>{stat.value}</span>
                  <span className="svc__bar-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="svc__grid">
            {active.items.map((item, i) => {
              const isHovered = hoveredCard === `${activeIndex}-${i}`;
              return (
                <article
                  key={i}
                  className={`svc__card ${isHovered ? 'svc__card--hover' : ''}`}
                  onMouseEnter={() => setHoveredCard(`${activeIndex}-${i}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ '--card-color': active.color, '--card-gradient': active.gradient }}
                >
                  <span className="svc__card-index">{String(i + 1).padStart(2, '0')}</span>
                  
                  <h4 className="svc__card-title">{item.title}</h4>
                  <p className="svc__card-desc">{item.description}</p>
                  
                  <div className="svc__card-footer">
                    <span className="svc__card-tag" style={{ color: active.color }}>
                      {item.tag}
                    </span>
                    <span className="svc__card-icon">
                      <ArrowRight size={13} strokeWidth={1.5} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* CTA */}
          <div className="svc__cta">
            <div className="svc__cta-inner" style={{ background: active.gradient }}>
              <p className="svc__cta-text">
                Start your <strong>{active.label.toLowerCase()}</strong> journey
              </p>
              <a href="#contact" className="svc__cta-btn">
                Get in touch
                <ArrowRight size={14} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;