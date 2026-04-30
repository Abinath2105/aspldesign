


// import React, { useState, useRef, useEffect } from 'react';
// import { 
//   Code, 
//   Palette, 
//   GraduationCap, 
//   Mic, 
//   UtensilsCrossed, 
//   Laptop,
//   BarChart3,
//   Shield,
//   Briefcase,
//   Printer,
//   Users,
//   Camera,
//   ArrowRight,
//   Sparkles,
//   Star,
//   Zap,
//   ChevronRight,
//   CheckCircle2
// } from 'lucide-react';
// import './Services.css';

// const Services = () => {
//   const [activeCategory, setActiveCategory] = useState(0);
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const sectionRef = useRef(null);
//   const categoryRefs = useRef([]);

//   const services = [
//     {
//       id: 'business',
//       category: 'Business Services',
//       icon: Briefcase,
//       gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
//       color: '#6366F1',
//       bgColor: '#EEF2FF',
//       tagline: 'Digital transformation under one roof',
//       stats: { projects: '200+', clients: '150+', rating: '4.9' },
//       items: [
//         { name: 'Web & App Development', icon: Code, desc: 'Scalable platforms built with cutting-edge tech', highlight: 'React, Node.js, AWS' },
//         { name: 'Digital Marketing & Branding', icon: BarChart3, desc: 'Data-driven campaigns that deliver real ROI', highlight: 'SEO, PPC, Social Media' },
//         { name: 'UI/UX & Graphic Design', icon: Palette, desc: 'Human-centered designs that convert visitors', highlight: 'Figma, Prototyping' },
//         { name: 'GST, Finance & Compliance', icon: Shield, desc: 'Hassle-free regulatory compliance management', highlight: 'GST Filing, Audits' },
//         { name: 'Manpower & Staffing', icon: Users, desc: 'Right talent, right role, right time', highlight: 'IT & Non-IT Roles' },
//         { name: 'Printing & Production', icon: Printer, desc: 'Premium print collateral for your brand', highlight: 'Brochures, Merchandise' },
//       ]
//     },
//     {
//       id: 'hospitality',
//       category: 'Hospitality & Events',
//       icon: UtensilsCrossed,
//       gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
//       color: '#F59E0B',
//       bgColor: '#FFFBEB',
//       tagline: 'Creating unforgettable experiences',
//       stats: { projects: '500+', clients: '300+', rating: '4.8' },
//       items: [
//         { name: 'Multi-cuisine Restaurant', icon: UtensilsCrossed, desc: 'Premium dining with diverse culinary options', highlight: 'Indian, Chinese, Italian' },
//         { name: 'Corporate Events', icon: Briefcase, desc: 'Professional event planning & execution', highlight: 'Conferences, Seminars' },
//         { name: 'Weddings & Celebrations', icon: Star, desc: 'Your dream celebration brought to life', highlight: 'Decor, Catering, Planning' },
//         { name: 'End-to-End Execution', icon: CheckCircle2, desc: 'From concept to flawless delivery', highlight: 'Venue, Logistics, Sound' },
//       ]
//     },
//     {
//       id: 'laptops',
//       category: 'Laptop Solutions',
//       icon: Laptop,
//       gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
//       color: '#10B981',
//       bgColor: '#ECFDF5',
//       tagline: 'Premium tech at accessible prices',
//       stats: { projects: '1000+', clients: '800+', rating: '4.9' },
//       items: [
//         { name: 'Refurbished Laptops', icon: Laptop, desc: 'Quality-tested devices with warranty', highlight: '8-12 Month Warranty' },
//         { name: 'Bulk Corporate Orders', icon: Briefcase, desc: 'Enterprise-grade solutions at scale', highlight: 'Custom Configurations' },
//         { name: 'Service & Support', icon: Shield, desc: 'Dedicated after-sales technical support', highlight: '24/7 Assistance' },
//         { name: 'Student Discounts', icon: GraduationCap, desc: 'Special pricing for students & startups', highlight: 'Up to 40% Off' },
//       ]
//     },
//     {
//       id: 'training',
//       category: 'Training & Skills',
//       icon: GraduationCap,
//       gradient: 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
//       color: '#0EA5E9',
//       bgColor: '#F0F9FF',
//       tagline: 'Learn by building real products',
//       stats: { projects: '50+', clients: '500+', rating: '4.7' },
//       items: [
//         { name: 'Digital Marketing Course', icon: BarChart3, desc: 'Practical training with live campaigns', highlight: '3 Month Program' },
//         { name: 'Full Stack Development', icon: Code, desc: 'Java, Python, React & more', highlight: 'Live Projects' },
//         { name: 'UI/UX Design', icon: Palette, desc: 'Design thinking & industry tools', highlight: 'Portfolio Building' },
//         { name: 'Soft Skills & English', icon: Users, desc: 'Communication & professional excellence', highlight: 'Mock Interviews' },
//       ]
//     },
//     {
//       id: 'creator',
//       category: 'Creator Studio',
//       icon: Mic,
//       gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
//       color: '#EC4899',
//       bgColor: '#FDF2F8',
//       tagline: 'Where content comes to life',
//       stats: { projects: '100+', clients: '50+', rating: '5.0' },
//       items: [
//         { name: 'Studio Setup & Lighting', icon: Camera, desc: 'Professional-grade recording environment', highlight: '4K Ready' },
//         { name: 'Multi-cam Production', icon: Mic, desc: 'High-quality video with multiple angles', highlight: '3-Camera Setup' },
//         { name: 'Editing & Post-Production', icon: Palette, desc: 'Expert editing, color grading & sound', highlight: 'Premiere Pro, DaVinci' },
//         { name: 'Creator Support', icon: Users, desc: 'For brands, educators & influencers', highlight: 'End-to-End Service' },
//       ]
//     },
//   ];

//   const activeService = services[activeCategory];

//   return (
//     <section id="services" className="services-premium" ref={sectionRef}>
      
//       {/* Background decorative elements */}
//      {/* ============ APPLE-INSPIRED BACKGROUND EFFECTS ============ */}
// <div className="services-premium__bg">
  
//   {/* Hexagon Grid */}
//   <div className="services-premium__hex-grid" />
  
//   {/* Geometric Shapes */}
//   <div className="services-premium__geo-shapes">
//     <div className="services-premium__geo-shape services-premium__geo-shape--hexagon" />
//     <div className="services-premium__geo-shape services-premium__geo-shape--triangle" />
//     <div className="services-premium__geo-shape services-premium__geo-shape--pentagon" />
//     <div className="services-premium__geo-shape services-premium__geo-shape--diamond" />
//   </div>
  
//   {/* Morphing Orbs */}
//   <div className="services-premium__morph-orb services-premium__morph-orb--1" />
//   <div className="services-premium__morph-orb services-premium__morph-orb--2" />
//   <div className="services-premium__morph-orb services-premium__morph-orb--3" />
  
//   {/* Grid Lines */}
//   <div className="services-premium__grid-lines">
//     {[...Array(4)].map((_, i) => <div key={`h-${i}`} className="services-premium__grid-line" />)}
//     {[...Array(4)].map((_, i) => <div key={`v-${i}`} className="services-premium__grid-line services-premium__grid-line--vertical" />)}
//   </div>
  
//   {/* Light Streaks */}
//   <div className="services-premium__light-streak services-premium__light-streak--1" />
//   <div className="services-premium__light-streak services-premium__light-streak--2" />
//   <div className="services-premium__light-streak services-premium__light-streak--3" />
  
//   {/* Particles */}
//   <div className="services-premium__particles">
//     {[...Array(15)].map((_, i) => {
//       const types = ['circle', 'diamond', 'square'];
//       const type = types[i % 3];
//       const colors = ['#6366F1', '#10B981', '#F59E0B', '#EC4899', '#0EA5E9'];
//       return (
//         <div
//           key={i}
//           className={`services-premium__particle services-premium__particle--${type}`}
//           style={{
//             left: `${5 + Math.random() * 90}%`,
//             top: `${5 + Math.random() * 90}%`,
//             width: `${2 + Math.random() * 5}px`,
//             height: `${2 + Math.random() * 5}px`,
//             background: colors[i % colors.length],
//             opacity: 0.12 + Math.random() * 0.15,
//             '--px': `${(Math.random() - 0.5) * 120}px`,
//             '--py': `${(Math.random() - 0.5) * 120}px`,
//             animationDuration: `${8 + Math.random() * 12}s`,
//             animationDelay: `${Math.random() * 10}s`,
//           }}
//         />
//       );
//     })}
//   </div>
  
//   {/* Concentric Ripples */}
//   <div className="services-premium__ripple services-premium__ripple--1" />
//   <div className="services-premium__ripple services-premium__ripple--2" />
//   <div className="services-premium__ripple services-premium__ripple--3" />
  
//   {/* Noise Texture */}
//   <div className="services-premium__noise" />
  
//   {/* Existing orbs and grid */}
//   <div className="services-premium__bg-orb services-premium__bg-orb--1" />
//   <div className="services-premium__bg-orb services-premium__bg-orb--2" />
//   <div className="services-premium__bg-grid" />
// </div>
//       <div className="services-premium__container">
        
//         {/* ============ SECTION HEADER ============ */}
//         <div className="services-premium__header">
//           <div className="services-premium__badge">
//             <Sparkles size={14} />
//             <span>What We Offer</span>
//           </div>

//           <h2 className="services-premium__title">
//             Everything you need,
//             <span className="services-premium__title-gradient"> in one place</span>
//           </h2>
          
//           <p className="services-premium__subtitle">
//             Five core verticals. Dozens of services. One partner for all your business, creative, and technical needs.
//           </p>
//         </div>

//         {/* ============ ACTIVE CATEGORY CONTENT ============ */}
//         <div className="services-premium__content">

//           {/* Service Items Grid */}
//           <div className="services-premium__grid">
//             {activeService.items.map((item, index) => (
//               <div
//                 key={index}
//                 className={`services-premium__item ${hoveredItem === index ? 'services-premium__item--hovered' : ''}`}
//                 onMouseEnter={(e) => {
//                   setHoveredItem(index);
//                   const rect = e.currentTarget.getBoundingClientRect();
//                   const x = ((e.clientX - rect.left) / rect.width) * 100;
//                   const y = ((e.clientY - rect.top) / rect.height) * 100;
//                   e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
//                   e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
//                 }}
//                 onMouseMove={(e) => {
//                   if (hoveredItem === index) {
//                     const rect = e.currentTarget.getBoundingClientRect();
//                     const x = ((e.clientX - rect.left) / rect.width) * 100;
//                     const y = ((e.clientY - rect.top) / rect.height) * 100;
//                     e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
//                     e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
//                   }
//                 }}
//                 onMouseLeave={() => setHoveredItem(null)}
//                 style={{ '--item-color': activeService.color, '--item-bg': activeService.bgColor }}
//               >
//                 {/* Watermark Number */}
//                 <span className="services-premium__item-number">
//                   {String(index + 1).padStart(2, '0')}
//                 </span>

//                 {/* Item Header */}
//                 <div className="services-premium__item-header">
//                   <div className="services-premium__item-icon" style={{ backgroundColor: activeService.bgColor, color: activeService.color }}>
//                     <item.icon size={18} />
//                   </div>
//                   <ChevronRight size={14} className="services-premium__item-chevron" />
//                 </div>

//                 {/* Item Content */}
//                 <h4 className="services-premium__item-name">{item.name}</h4>
//                 <p className="services-premium__item-desc">{item.desc}</p>

//                 {/* Highlight Tag */}
//                 <div className="services-premium__item-tag" style={{ color: activeService.color, backgroundColor: activeService.bgColor }}>
//                   <Zap size={10} />
//                   <span>{item.highlight}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Bottom CTA Banner */}
//           <div className="services-premium__banner" style={{ background: activeService.gradient }}>
//             <div className="services-premium__banner-content">
//               <div className="services-premium__banner-text">
//                 <Sparkles size={20} color="#fff" />
//                 <span>Ready to start your {activeService.category.toLowerCase()} journey?</span>
//               </div>
//               <a href="#contact" className="services-premium__banner-cta">
//                 <span>Let's Talk</span>
//                 <ArrowRight size={16} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;






















import React, { useState, useRef, useEffect } from 'react';
import { 
  Code, 
  Palette, 
  GraduationCap, 
  Mic, 
  UtensilsCrossed, 
  Laptop,
  BarChart3,
  Shield,
  Briefcase,
  Printer,
  Users,
  Camera,
  ArrowRight,
  Sparkles,
  Star,
  Zap,
  ChevronRight,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import './CosmicServices.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const services = [
    {
      id: 'business',
      category: 'Business Services',
      icon: Briefcase,
      gradient: 'linear-gradient(135deg, #6366F1 0%, #A78BFA 100%)',
      color: '#6366F1',
      bgLight: 'rgba(99, 102, 241, 0.1)',
      tagline: 'Digital transformation under one roof',
      stats: { projects: '200+', clients: '150+', rating: '4.9' },
      items: [
        { name: 'Web & App Development', icon: Code, desc: 'Scalable platforms built with cutting-edge tech stacks', highlight: 'React, Node.js, AWS' },
        { name: 'Digital Marketing', icon: BarChart3, desc: 'Data-driven campaigns that deliver measurable ROI', highlight: 'SEO, PPC, Social Media' },
        { name: 'UI/UX & Brand Design', icon: Palette, desc: 'Human-centered designs that convert visitors into customers', highlight: 'Figma, Prototyping' },
        { name: 'GST & Compliance', icon: Shield, desc: 'Hassle-free regulatory compliance management', highlight: 'GST Filing, Audits' },
        { name: 'Talent & Staffing', icon: Users, desc: 'Right talent, right role, right time — always', highlight: 'IT & Non-IT Roles' },
        { name: 'Print & Production', icon: Printer, desc: 'Premium print collateral that elevates your brand', highlight: 'Brochures, Merchandise' },
      ]
    },
    {
      id: 'hospitality',
      category: 'Hospitality & Events',
      icon: UtensilsCrossed,
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
      color: '#F59E0B',
      bgLight: 'rgba(245, 158, 11, 0.1)',
      tagline: 'Creating experiences that linger long after',
      stats: { projects: '500+', clients: '300+', rating: '4.8' },
      items: [
        { name: 'Multi-Cuisine Dining', icon: UtensilsCrossed, desc: 'Premium restaurant with diverse culinary traditions', highlight: 'Indian, Chinese, Italian' },
        { name: 'Corporate Events', icon: Briefcase, desc: 'Flawless planning & execution for professionals', highlight: 'Conferences, Seminars' },
        { name: 'Weddings & Celebrations', icon: Star, desc: 'Your dream celebration, meticulously brought to life', highlight: 'Decor, Catering, Planning' },
        { name: 'End-to-End Management', icon: CheckCircle2, desc: 'From initial concept to flawless final delivery', highlight: 'Venue, Logistics, Sound' },
      ]
    },
    {
      id: 'laptops',
      category: 'Laptop Solutions',
      icon: Laptop,
      gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
      color: '#10B981',
      bgLight: 'rgba(16, 185, 129, 0.1)',
      tagline: 'Premium technology, accessible to all',
      stats: { projects: '1000+', clients: '800+', rating: '4.9' },
      items: [
        { name: 'Refurbished Laptops', icon: Laptop, desc: 'Quality-tested devices backed by solid warranty', highlight: '8-12 Month Warranty' },
        { name: 'Bulk Corporate Orders', icon: Briefcase, desc: 'Enterprise-grade solutions at competitive scale', highlight: 'Custom Configurations' },
        { name: 'Service & Support', icon: Shield, desc: 'Dedicated after-sales technical assistance', highlight: '24/7 Support' },
        { name: 'Student Discounts', icon: GraduationCap, desc: 'Special pricing to empower education & startups', highlight: 'Up to 40% Off' },
      ]
    },
    {
      id: 'training',
      category: 'Training & Skills',
      icon: GraduationCap,
      gradient: 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)',
      color: '#0EA5E9',
      bgLight: 'rgba(14, 165, 233, 0.1)',
      tagline: 'Learn by building — not just watching',
      stats: { projects: '50+', clients: '500+', rating: '4.7' },
      items: [
        { name: 'Digital Marketing Course', icon: BarChart3, desc: 'Practical training with live campaign experience', highlight: '3 Month Program' },
        { name: 'Full Stack Development', icon: Code, desc: 'Master Java, Python, React & modern stacks', highlight: 'Live Projects' },
        { name: 'UI/UX Design', icon: Palette, desc: 'Design thinking, tools & portfolio building', highlight: 'Portfolio Building' },
        { name: 'Soft Skills & English', icon: Users, desc: 'Communication mastery & professional excellence', highlight: 'Mock Interviews' },
      ]
    },
    {
      id: 'creator',
      category: 'Creator Studio',
      icon: Mic,
      gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
      color: '#EC4899',
      bgLight: 'rgba(236, 72, 153, 0.1)',
      tagline: 'Where content transforms into art',
      stats: { projects: '100+', clients: '50+', rating: '5.0' },
      items: [
        { name: 'Studio & Lighting', icon: Camera, desc: 'Professional-grade recording environment, 4K ready', highlight: '4K Ready' },
        { name: 'Multi-Cam Production', icon: Mic, desc: 'High-quality video captured from multiple angles', highlight: '3-Camera Setup' },
        { name: 'Editing & Post-Production', icon: Palette, desc: 'Expert editing, color grading & sound design', highlight: 'Premiere Pro, DaVinci' },
        { name: 'Creator Support', icon: Users, desc: 'End-to-end service for brands & influencers', highlight: 'End-to-End Service' },
      ]
    },
  ];

  const activeService = services[activeCategory];

  const handleCategoryChange = (index) => {
    if (index === activeCategory || isTransitioning) return;
    setIsTransitioning(true);
    setActiveCategory(index);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  return (
    <section id="services" className="cosmic-services" ref={sectionRef}>
      
      {/* ============ COSMIC BACKGROUND ============ */}
      <div className="cosmic-services__bg">
        <div className="cosmic-services__particle-field" />
        <div className="cosmic-services__morph-orb cosmic-services__morph-orb--1" />
        <div className="cosmic-services__morph-orb cosmic-services__morph-orb--2" />
        <div className="cosmic-services__grid-lines" />
        <div className="cosmic-services__noise" />
      </div>

      <div className="cosmic-services__container">
        
        {/* ============ SECTION HEADER ============ */}
        <div className="cosmic-services__header">
          <div className="cosmic-services__badge">
            <Sparkles size={14} />
            <span>Our Ecosystem</span>
          </div>

          <h2 className="cosmic-services__title">
            Everything your brand needs,
            <span className="cosmic-services__title-gradient"> in one orbit</span>
          </h2>
          
          <p className="cosmic-services__subtitle">
            Five integrated verticals orbiting a single mission: your growth. Explore the constellation of services below.
          </p>
        </div>

        {/* ============ CONSTELLATION CATEGORY TABS ============ */}
        <div className="cosmic-services__constellation">
          {services.map((service, index) => (
            <button
              key={service.id}
              className={`cosmic-services__star ${activeCategory === index ? 'cosmic-services__star--active' : ''}`}
              onClick={() => handleCategoryChange(index)}
            >
              <div className="cosmic-services__star-icon" style={{ 
                background: activeCategory === index ? service.gradient : 'transparent',
                color: activeCategory === index ? '#fff' : service.color,
                borderColor: service.color
              }}>
                <service.icon size={18} />
              </div>
              <span className="cosmic-services__star-label">{service.category}</span>
              {/* Active indicator glow */}
              {activeCategory === index && <div className="cosmic-services__star-glow" style={{ background: service.gradient }} />}
            </button>
          ))}
        </div>

        {/* ============ ACTIVE CATEGORY CONTENT ============ */}
        <div className="cosmic-services__universe" ref={contentRef}>
          
          {/* Category Info Bar */}
          <div className="cosmic-services__info-bar" style={{ borderColor: activeService.color }}>
            <div className="cosmic-services__info-icon" style={{ background: activeService.gradient }}>
              <activeService.icon size={22} color="#fff" />
            </div>
            <div>
              <h3 className="cosmic-services__info-title" style={{ color: activeService.color }}>
                {activeService.category}
              </h3>
              <p className="cosmic-services__info-tagline">{activeService.tagline}</p>
            </div>
            <div className="cosmic-services__stats">
              <div className="cosmic-services__stat">
                <Star size={14} fill={activeService.color} color={activeService.color} />
                <span>{activeService.stats.rating}</span>
              </div>
              <div className="cosmic-services__stat">
                <Zap size={14} color={activeService.color} />
                <span>{activeService.stats.projects}</span>
              </div>
              <div className="cosmic-services__stat">
                <Users size={14} color={activeService.color} />
                <span>{activeService.stats.clients}</span>
              </div>
            </div>
          </div>

          {/* Service Items Grid */}
          <div className={`cosmic-services__grid ${isTransitioning ? 'cosmic-services__grid--transitioning' : ''}`}>
            {activeService.items.map((item, index) => (
              <div
                key={index}
                className={`cosmic-services__card ${hoveredItem === index ? 'cosmic-services__card--hovered' : ''}`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ 
                  '--card-color': activeService.color,
                  '--card-bg': activeService.bgLight,
                  '--card-gradient': activeService.gradient
                }}
              >
                {/* Light beam effect on hover */}
                <div className="cosmic-services__card-beam" />
                
                {/* Card Index */}
                <span className="cosmic-services__card-index">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Card Icon */}
                <div className="cosmic-services__card-icon" style={{ 
                  background: activeService.bgLight, 
                  color: activeService.color,
                  borderColor: `${activeService.color}30`
                }}>
                  <item.icon size={20} />
                </div>

                {/* Card Content */}
                <h4 className="cosmic-services__card-name">{item.name}</h4>
                <p className="cosmic-services__card-desc">{item.desc}</p>

                {/* Highlight Badge */}
                <div className="cosmic-services__card-badge" style={{ 
                  color: activeService.color, 
                  background: activeService.bgLight,
                  borderColor: `${activeService.color}40`
                }}>
                  <Sparkles size={10} />
                  <span>{item.highlight}</span>
                </div>

                {/* Hover Arrow */}
                <ArrowUpRight size={16} className="cosmic-services__card-arrow" color={activeService.color} />
              </div>
            ))}
          </div>

          {/* ============ COSMIC CTA BANNER ============ */}
          <div className="cosmic-services__banner" style={{ background: activeService.gradient }}>
            <div className="cosmic-services__banner-glow" />
            <div className="cosmic-services__banner-content">
              <div className="cosmic-services__banner-text">
                <Sparkles size={22} color="#fff" />
                <span>Ready to launch your {activeService.category.toLowerCase()}?</span>
              </div>
              <a href="#contact" className="cosmic-services__banner-cta">
                <span>Start a Project</span>
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="cosmic-services__banner-particles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="cosmic-services__banner-particle" style={{
                  left: `${10 + i * 12}%`,
                  animationDelay: `${i * 0.3}s`
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;