// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { 
//   ArrowRight, 
//   MessageCircle, 
//   Sparkles,
//   Code2,
//   Camera,
//   GraduationCap,
//   Laptop,
//   UtensilsCrossed,
//   Star,
//   Zap,
//   Shield,
//   TrendingUp,
//   Play,
//   MousePointer2,
//   ChevronDown
// } from 'lucide-react';
// import './Hero.css';

// // Import images
// import businessImg from '../img/business.jpg';
// import hospitalityImg from '../img/event.jpg';
// import laptopImg from '../img/laptop.jpg';
// import trainingImg from '../img/training.jpg';
// import creatorImg from '../img/podcast.jpg';

// const Hero = () => {
//   const containerRef = useRef(null);
//   const [activeTab, setActiveTab] = useState(0);
//   const [imageLoaded, setImageLoaded] = useState({});
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const [isVisible, setIsVisible] = useState(false);
  
//   const whatsappNumber = "919843406360";
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi ASPL Team! I'm interested in growing my business. Let's talk!")}`;

//   // Entrance animation
//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 100);
//   }, []);

//   // Mouse parallax tracking
//   const handleMouseMove = useCallback((e) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width;
//     const y = (e.clientY - rect.top) / rect.height;
//     setMousePos({ x, y });
//   }, []);

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [handleMouseMove]);

//   // Auto-rotate tabs
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTab((prev) => (prev + 1) % serviceTabs.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   // Preload images
//   useEffect(() => {
//     const images = [businessImg, hospitalityImg, laptopImg, trainingImg, creatorImg];
//     images.forEach((src, index) => {
//       const img = new Image();
//       img.src = src;
//       img.onload = () => setImageLoaded(prev => ({ ...prev, [index]: true }));
//     });
//   }, []);

//   const serviceTabs = [
//     {
//       id: 'business',
//       icon: Code2,
//       label: 'Business Services',
//       shortLabel: 'Business',
//       gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A855F7 100%)',
//       color: '#6366F1',
//       bgColor: '#EEF2FF',
//       image: businessImg,
//       stats: { value: '200+', label: 'Projects', suffix: 'Delivered' },
//       features: ['Web & App Development', 'Digital Marketing', 'UI/UX Design', 'Cloud Solutions'],
//       tagline: 'We architect digital ecosystems that drive revenue and scale operations.',
//       overlayGradient: 'linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 60%, #0A0A0F 100%)',
//       accentGradient: 'linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(139,92,246,0.2) 100%)',
//       glassGradient: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.08) 100%)',
//     },
//     {
//       id: 'hospitality',
//       icon: UtensilsCrossed,
//       label: 'Hospitality & Events',
//       shortLabel: 'Hospitality',
//       gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #F97316 100%)',
//       color: '#F59E0B',
//       bgColor: '#FFFBEB',
//       image: hospitalityImg,
//       stats: { value: '500+', label: 'Events', suffix: 'Managed' },
//       features: ['Corporate Events', 'Wedding Planning', 'Catering Services', 'Venue Management'],
//       tagline: 'We craft immersive experiences that resonate, inspire, and leave lasting impressions.',
//       overlayGradient: 'linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 60%, #0A0A0F 100%)',
//       accentGradient: 'linear-gradient(135deg, rgba(245,158,11,0.4) 0%, rgba(239,68,68,0.2) 100%)',
//       glassGradient: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(239,68,68,0.08) 100%)',
//     },
//     {
//       id: 'laptops',
//       icon: Laptop,
//       label: 'Laptop Solutions',
//       shortLabel: 'Laptops',
//       gradient: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #34D399 100%)',
//       color: '#10B981',
//       bgColor: '#ECFDF5',
//       image: laptopImg,
//       stats: { value: '1000+', label: 'Devices', suffix: 'Sold' },
//       features: ['Refurbished Laptops', 'Bulk Orders', 'Service & Warranty', 'Student Discounts'],
//       tagline: 'Premium refurbished technology that delivers enterprise performance at startup prices.',
//       overlayGradient: 'linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 60%, #0A0A0F 100%)',
//       accentGradient: 'linear-gradient(135deg, rgba(16,185,129,0.4) 0%, rgba(5,150,105,0.2) 100%)',
//       glassGradient: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.08) 100%)',
//     },
//     {
//       id: 'training',
//       icon: GraduationCap,
//       label: 'Training & Skills',
//       shortLabel: 'Training',
//       gradient: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #06B6D4 100%)',
//       color: '#0EA5E9',
//       bgColor: '#F0F9FF',
//       image: trainingImg,
//       stats: { value: '10+', label: 'Courses', suffix: 'Available' },
//       features: ['Live Project Training', 'Industry Mentorship', 'Portfolio Building', 'Job Assistance'],
//       tagline: 'Learn by building. Real projects, real mentors, real career transformation.',
//       overlayGradient: 'linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 60%, #0A0A0F 100%)',
//       accentGradient: 'linear-gradient(135deg, rgba(14,165,233,0.4) 0%, rgba(59,130,246,0.2) 100%)',
//       glassGradient: 'linear-gradient(135deg, rgba(14,165,233,0.15) 0%, rgba(59,130,246,0.08) 100%)',
//     },
//     {
//       id: 'creator',
//       icon: Camera,
//       label: 'Creator Studio',
//       shortLabel: 'Studio',
//       gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 50%, #F472B6 100%)',
//       color: '#EC4899',
//       bgColor: '#FDF2F8',
//       image: creatorImg,
//       stats: { value: '50+', label: 'Creators', suffix: 'Empowered' },
//       features: ['Podcast Production', 'Video Shooting', 'Script Writing', 'Post Production'],
//       tagline: 'Where your content vision meets professional production — lights, camera, action.',
//       overlayGradient: 'linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 60%, #0A0A0F 100%)',
//       accentGradient: 'linear-gradient(135deg, rgba(236,72,153,0.4) 0%, rgba(139,92,246,0.2) 100%)',
//       glassGradient: 'linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(139,92,246,0.08) 100%)',
//     }
//   ];

//   const activeService = serviceTabs[activeTab];

//   return (
//     <section 
//       className="hero-masterpiece" 
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//     >
      
//       {/* ============================================
//            BACKGROUND - CINEMATIC IMAGE SYSTEM
//            ============================================ */}
//       <div className="hero-masterpiece__bg">
//         {/* Image layers with crossfade */}
//         {serviceTabs.map((service, index) => (
//           <div
//             key={service.id}
//             className={`hero-masterpiece__bg-image ${index === activeTab ? 'hero-masterpiece__bg-image--active' : 'hero-masterpiece__bg-image--hidden'}`}
//             style={{ backgroundImage: `url(${service.image})` }}
//           >
//             <div className="hero-masterpiece__bg-overlay" style={{ background: service.overlayGradient }} />
//           </div>
//         ))}
        
//         {/* Parallax accent gradient */}
//         <div 
//           className="hero-masterpiece__accent"
//           style={{ 
//             background: activeService.accentGradient,
//             transform: `translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * -30}px)`
//           }}
//         />
        
//         {/* Geometric accent shapes */}
//         <div className="hero-masterpiece__geometry">
//           <div 
//             className="hero-masterpiece__geo hero-masterpiece__geo--1"
//             style={{ 
//               borderColor: `${activeService.color}20`,
//               background: `${activeService.color}05`,
//               transform: `translate(${(mousePos.x - 0.5) * -50}px, ${(mousePos.y - 0.5) * -50}px) rotate(${(mousePos.x - 0.5) * 15}deg)`
//             }}
//           />
//           <div 
//             className="hero-masterpiece__geo hero-masterpiece__geo--2"
//             style={{ 
//               borderColor: `${activeService.color}15`,
//               background: `${activeService.color}03`,
//               transform: `translate(${(mousePos.x - 0.5) * -80}px, ${(mousePos.y - 0.5) * -80}px) rotate(${(mousePos.y - 0.5) * -20}deg)`
//             }}
//           />
//         </div>

//         {/* Floating orb */}
//         <div 
//           className="hero-masterpiece__orb"
//           style={{ 
//             background: `radial-gradient(circle, ${activeService.color}25 0%, transparent 70%)`,
//             transform: `translate(${mousePos.x * 60 - 30}px, ${mousePos.y * 60 - 30}px)`
//           }}
//         />
//       </div>

//       {/* ============================================
//            MAIN CONTENT
//            ============================================ */}
//       <div className={`hero-masterpiece__content ${isVisible ? 'hero-masterpiece__content--visible' : ''}`}>
        
//         {/* Top bar */}
//         {/* <div className="hero-masterpiece__topbar">
//           <div className="hero-masterpiece__topbar-inner">
//             <div className="hero-masterpiece__logo-mark">
//               <div className="hero-masterpiece__logo-diamond" />
//               <span className="hero-masterpiece__logo-text">ASPL</span>
//             </div>
//             <div className="hero-masterpiece__status">
//               <span className="hero-masterpiece__status-dot" />
//               <span className="hero-masterpiece__status-text">Available for projects</span>
//             </div>
//           </div>
//         </div> */}

//         {/* Hero body */}
//         <div className="hero-masterpiece__body">
          
//           {/* LEFT - Main messaging */}
//           <div className="hero-masterpiece__left">
            
//             {/* Category badge */}
//             {/* <div className="hero-masterpiece__category-row">
//               {serviceTabs.map((service, index) => (
//                 <button
//                   key={service.id}
//                   className={`hero-masterpiece__category-pill ${index === activeTab ? 'hero-masterpiece__category-pill--active' : ''}`}
//                   onClick={() => setActiveTab(index)}
//                   style={{
//                     '--pill-color': service.color,
//                     '--pill-bg': `${service.color}15`
//                   }}
//                 >
//                   <service.icon size={13} />
//                   <span>{service.shortLabel}</span>
//                 </button>
//               ))}
//             </div> */}

//             {/* Main headline */}
//             <h1 className="hero-masterpiece__headline">
//               <span className="hero-masterpiece__headline-top">We turn</span>
//               <span className="hero-masterpiece__headline-main">
//                 <span 
//                   className="hero-masterpiece__headline-highlight"
//                   style={{ 
//                     backgroundImage: activeService.gradient,
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     backgroundClip: 'text'
//                   }}
//                 >
//                   {activeService.label}
//                 </span>
//               </span>
//               <span className="hero-masterpiece__headline-bottom">into growth engines</span>
//             </h1>

//             {/* Tagline */}
//             <p className="hero-masterpiece__tagline">
//               {activeService.tagline}
//             </p>

//             {/* Feature tags */}
//             <div className="hero-masterpiece__feature-tags">
//               {activeService.features.map((feat, i) => (
//                 <span 
//                   key={i} 
//                   className="hero-masterpiece__feature-tag"
//                   style={{ 
//                     '--tag-color': activeService.color,
//                     animationDelay: `${i * 0.1}s`
//                   }}
//                 >
//                   <Star size={10} fill={activeService.color} color={activeService.color} />
//                   {feat}
//                 </span>
//               ))}
//             </div>

//             {/* CTA + Stats row */}
//             <div className="hero-masterpiece__action-row">
//               <a href="#contact" className="hero-masterpiece__cta" style={{ background: activeService.gradient }}>
//                 <span>Start Your Project</span>
//                 <div className="hero-masterpiece__cta-arrow">
//                   <ArrowRight size={16} />
//                 </div>
//                 <div className="hero-masterpiece__cta-shine" />
//               </a>
              
           
//             </div>

          
//           </div>

       
//         </div>

//         {/* Scroll indicator */}
//         <div className="hero-masterpiece__scroll">
//           <span>Discover More</span>
//           <div className="hero-masterpiece__scroll-line">
//             <div className="hero-masterpiece__scroll-thumb" />
//           </div>
//         </div>
//       </div>

//       {/* WhatsApp float */}
//       <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hero-masterpiece__whatsapp-float">
//         <div className="hero-masterpiece__whatsapp-float-pulse" />
//         <MessageCircle size={20} color="#FFFFFF" />
//       </a>
//     </section>
//   );
// };

// export default Hero;






























// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { ArrowRight, MessageCircle, Star } from 'lucide-react';
// import './Hero.css';

// // Import images
// import businessImg from '../img/banner1.jpg';
// import hospitalityImg from '../img/event.jpg';
// import laptopImg from '../img/laptop.jpg';
// import trainingImg from '../img/training.jpg';
// import creatorImg from '../img/podcast.jpg';

// const Hero = () => {
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const [imagesLoaded, setImagesLoaded] = useState({});

//   const whatsappLink = `https://wa.me/919843406360?text=${encodeURIComponent("Hi ASPL Team! I'm interested in growing my business. Let's talk!")}`;

//   // Entrance
//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 150);
//     return () => clearTimeout(timer);
//   }, []);

//   // Mouse tracking for parallax
//   const handleMouseMove = useCallback((e) => {
//     if (!sectionRef.current) return;
//     const rect = sectionRef.current.getBoundingClientRect();
//     setMousePos({
//       x: (e.clientX - rect.left) / rect.width,
//       y: (e.clientY - rect.top) / rect.height,
//     });
//   }, []);

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove, { passive: true });
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [handleMouseMove]);

//   // Auto-rotate
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % services.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Preload images
//   useEffect(() => {
//     const images = [businessImg, hospitalityImg, laptopImg, trainingImg, creatorImg];
//     images.forEach((src, i) => {
//       const img = new Image();
//       img.src = src;
//       img.onload = () => setImagesLoaded(prev => ({ ...prev, [i]: true }));
//     });
//   }, []);

//   const services = [
//     {
//       id: 'business',
//       label: 'Business',
//       headline: 'Digital transformation',
//       color: '#4F46E5',
//       gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #A78BFA 100%)',
//       image: businessImg,
//       features: ['Web & Apps', 'Marketing', 'UI/UX', 'Cloud'],
//       stat: { value: '200+', label: 'Projects shipped' },
//     },
//     {
//       id: 'hospitality',
//       label: 'Hospitality',
//       headline: 'Unforgettable events',
//       color: '#EA580C',
//       gradient: 'linear-gradient(135deg, #EA580C 0%, #F97316 50%, #FDBA74 100%)',
//       image: hospitalityImg,
//       features: ['Corporate', 'Weddings', 'Catering', 'Management'],
//       stat: { value: '500+', label: 'Events executed' },
//     },
//     {
//       id: 'laptops',
//       label: 'Technology',
//       headline: 'Premium devices',
//       color: '#059669',
//       gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #6EE7B7 100%)',
//       image: laptopImg,
//       features: ['Refurbished', 'Enterprise', 'Support', 'Education'],
//       stat: { value: '1000+', label: 'Units delivered' },
//     },
//     {
//       id: 'training',
//       label: 'Training',
//       headline: 'Career acceleration',
//       color: '#0284C7',
//       gradient: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 50%, #7DD3FC 100%)',
//       image: trainingImg,
//       features: ['Live Projects', 'Mentorship', 'Portfolio', 'Placement'],
//       stat: { value: '500+', label: 'Graduates placed' },
//     },
//     {
//       id: 'creator',
//       label: 'Creative',
//       headline: 'Content mastery',
//       color: '#DB2777',
//       gradient: 'linear-gradient(135deg, #DB2777 0%, #EC4899 50%, #F9A8D4 100%)',
//       image: creatorImg,
//       features: ['Podcast', '4K Video', 'Editing', 'Full Crew'],
//       stat: { value: '100+', label: 'Productions done' },
//     },
//   ];

//   const active = services[activeIndex];

//   return (
//     <section className="hero" ref={sectionRef} onMouseMove={handleMouseMove}>
      
//       {/* ================================================================ */}
//       {/* BACKGROUND — Cinematic image crossfade */}
//       {/* ================================================================ */}
//       <div className="hero__canvas">
//         {services.map((svc, i) => (
//           <div
//             key={svc.id}
//             className={`hero__image ${i === activeIndex ? 'hero__image--active' : ''}`}
//             style={{ backgroundImage: `url(${svc.image})` }}
//           >
//             <div className="hero__image-veil" />
//           </div>
//         ))}
        
//         {/* Atmospheric gradient overlay */}
//         <div 
//           className="hero__atmosphere"
//           style={{
//             background: `radial-gradient(ellipse at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${active.color}15 0%, transparent 60%)`
//           }}
//         />
        
//         {/* Deep bottom fade */}
//         <div className="hero__fade" />
//       </div>

//       {/* ================================================================ */}
//       {/* FLOATING PARALLAX ORBS */}
//       {/* ================================================================ */}
//       <div className="hero__orbs">
//         <div 
//           className="hero__orb hero__orb--1"
//           style={{
//             background: `radial-gradient(circle, ${active.color}30, transparent)`,
//             transform: `translate(${(mousePos.x - 0.5) * 40}px, ${(mousePos.y - 0.5) * 40}px)`
//           }}
//         />
//         <div 
//           className="hero__orb hero__orb--2"
//           style={{
//             background: `radial-gradient(circle, ${active.color}15, transparent)`,
//             transform: `translate(${(mousePos.x - 0.5) * -60}px, ${(mousePos.y - 0.5) * -60}px)`
//           }}
//         />
//       </div>

//       {/* ================================================================ */}
//       {/* CONTENT */}
//       {/* ================================================================ */}
//       <div className={`hero__content ${isVisible ? 'hero__content--visible' : ''}`}>
        
//         {/* Category selector — inline pills */}
//         {/* <div className="hero__pills">
//           {services.map((svc, i) => (
//             <button
//               key={svc.id}
//               className={`hero__pill ${i === activeIndex ? 'hero__pill--active' : ''}`}
//               onClick={() => setActiveIndex(i)}
//               style={{ '--pill-color': svc.color }}
//             >
//               {svc.label}
//               {i === activeIndex && <span className="hero__pill-glow" />}
//             </button>
//           ))}
//         </div> */}

//         {/* Main headline */}
//         <h1 className="hero__headline">
//           <span className="hero__headline-static">We turn</span>
//           <span 
//             className="hero__headline-dynamic"
//             style={{ 
//               backgroundImage: active.gradient,
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//             }}
//           >
//             {active.headline}
//           </span>
//           <span className="hero__headline-static">into growth engines</span>
//         </h1>

//         {/* Feature chips */}
//         <div className="hero__chips">
//           {active.features.map((feat, i) => (
//             <span 
//               key={i} 
//               className="hero__chip"
//               style={{ 
//                 '--chip-color': active.color,
//                 animationDelay: `${i * 0.1}s`
//               }}
//             >
//               <Star size={10} fill={active.color} color={active.color} />
//               {feat}
//             </span>
//           ))}
//         </div>

//         {/* Stat + CTA row */}
//         <div className="hero__action">
//           <div className="hero__stat">
//             <span className="hero__stat-value" style={{ color: active.color }}>
//               {active.stat.value}
//             </span>
//             <span className="hero__stat-label">{active.stat.label}</span>
//           </div>
          
//           <a 
//             href="#contact" 
//             className="hero__cta"
//             style={{ background: active.gradient }}
//           >
//             <span>Start a project</span>
//             <ArrowRight size={16} strokeWidth={2} />
//             <span className="hero__cta-shimmer" />
//           </a>
//         </div>
//       </div>

//       {/* ================================================================ */}
//       {/* SCROLL INDICATOR */}
//       {/* ================================================================ */}
//       {/* <div className="hero__scroll">
//         <span className="hero__scroll-text">Discover</span>
//         <div className="hero__scroll-track">
//           <div className="hero__scroll-dot" />
//         </div>
//       </div> */}

//       {/* ================================================================ */}
//       {/* WHATSAPP FLOAT */}
//       {/* ================================================================ */}
//       <a 
//         href={whatsappLink} 
//         target="_blank" 
//         rel="noopener noreferrer" 
//         className="hero__whatsapp"
//       >
//         <span className="hero__whatsapp-pulse" />
//         <MessageCircle size={20} color="#FFFFFF" />
//       </a>
//     </section>
//   );
// };

// export default Hero;














// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { ArrowRight, MessageCircle } from 'lucide-react';
// import './Hero.css';

// // Import images
// import businessImg from '../img/banner1.jpg';
// import hospitalityImg from '../img/event.jpg';
// import laptopImg from '../img/laptop.jpg';
// import trainingImg from '../img/training.jpg';
// import creatorImg from '../img/podcast.jpg';

// const Hero = () => {
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const [progress, setProgress] = useState(0);

//   const whatsappLink = `https://wa.me/919843406360?text=${encodeURIComponent("Hi ASPL Team! I'm interested in growing my business. Let's talk!")}`;

//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 200);
//   }, []);

//   const handleMouseMove = useCallback((e) => {
//     if (!sectionRef.current) return;
//     const rect = sectionRef.current.getBoundingClientRect();
//     setMousePos({
//       x: (e.clientX - rect.left) / rect.width,
//       y: (e.clientY - rect.top) / rect.height,
//     });
//   }, []);

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove, { passive: true });
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [handleMouseMove]);

//   // Auto-rotate with progress bar
//   useEffect(() => {
//     const duration = 5000;
//     const interval = 50;
//     let elapsed = 0;

//     const timer = setInterval(() => {
//       elapsed += interval;
//       setProgress((elapsed % duration) / duration);
      
//       if (elapsed >= duration) {
//         elapsed = 0;
//         setActiveIndex((prev) => (prev + 1) % services.length);
//       }
//     }, interval);

//     return () => clearInterval(timer);
//   }, []);

//   const handlePillClick = (index) => {
//     setActiveIndex(index);
//     setProgress(0);
//   };

//   const services = [
//     {
//       id: 'business',
//       label: 'Business',
//       headline: 'Digital transformation',
//       color: '#4F46E5',
//       image: businessImg,
//       features: ['Web & Apps', 'Marketing', 'UI/UX', 'Cloud'],
//       stat: { value: '200+', label: 'Projects delivered' },
//     },
//     {
//       id: 'hospitality',
//       label: 'Hospitality',
//       headline: 'Unforgettable events',
//       color: '#EA580C',
//       image: hospitalityImg,
//       features: ['Corporate', 'Weddings', 'Catering', 'Management'],
//       stat: { value: '500+', label: 'Events executed' },
//     },
//     {
//       id: 'laptops',
//       label: 'Technology',
//       headline: 'Premium devices',
//       color: '#059669',
//       image: laptopImg,
//       features: ['Refurbished', 'Enterprise', 'Support', 'Education'],
//       stat: { value: '1000+', label: 'Units delivered' },
//     },
//     {
//       id: 'training',
//       label: 'Training',
//       headline: 'Career acceleration',
//       color: '#0284C7',
//       image: trainingImg,
//       features: ['Live Projects', 'Mentorship', 'Portfolio', 'Placement'],
//       stat: { value: '500+', label: 'Graduates placed' },
//     },
//     {
//       id: 'creator',
//       label: 'Creative',
//       headline: 'Content mastery',
//       color: '#DB2777',
//       image: creatorImg,
//       features: ['Podcast', '4K Video', 'Editing', 'Full Crew'],
//       stat: { value: '100+', label: 'Productions done' },
//     },
//   ];

//   const active = services[activeIndex];

//   return (
//     <section className="hero" ref={sectionRef} onMouseMove={handleMouseMove}>
      
//       {/* Image background with crossfade */}
//       <div className="hero__bg">
//         {services.map((svc, i) => (
//           <div
//             key={svc.id}
//             className={`hero__bg-img ${i === activeIndex ? 'hero__bg-img--active' : ''}`}
//             style={{ backgroundImage: `url(${svc.image})` }}
//           />
//         ))}
//         <div className="hero__bg-overlay" />
//         <div 
//           className="hero__bg-glow"
//           style={{
//             background: `radial-gradient(ellipse at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${active.color}20 0%, transparent 50%)`,
//           }}
//         />
//       </div>

//       <div className={`hero__wrap ${isVisible ? 'hero__wrap--in' : ''}`}>
        
//         {/* Content */}
//         <div className="hero__content">
          
//           {/* Category pills */}
//           {/* <div className="hero__pills">
//             {services.map((svc, i) => (
//               <button
//                 key={svc.id}
//                 className={`hero__pill ${i === activeIndex ? 'hero__pill--on' : ''}`}
//                 onClick={() => handlePillClick(i)}
//                 style={{ '--pill-color': svc.color }}
//               >
//                 <span className="hero__pill-label">{svc.label}</span>
//                 {i === activeIndex && (
//                   <span className="hero__pill-bar">
//                     <span className="hero__pill-bar-fill" style={{ width: `${progress * 100}%` }} />
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div> */}

//           {/* Headline */}
//           <h1 className="hero__headline">
//             We turn <span></span>
//             <span className="hero__headline-highlight" style={{ color: active.color }}>
//               {active.headline}
//             </span> <span></span>
//             into growth engines
//           </h1>

//           {/* Features */}
//           <div className="hero__features">
//             {active.features.map((feat, i) => (
//               <span key={i} className="hero__feature" style={{ animationDelay: `${i * 0.08}s` }}>
//                 {feat}
//               </span>
//             ))}
//           </div>

//           {/* Action row */}
//           <div className="hero__action">
//             <div className="hero__stat">
//               <span className="hero__stat-num" style={{ color: active.color }}>{active.stat.value}</span>
//               <span className="hero__stat-lbl">{active.stat.label}</span>
//             </div>
//             <a href="#contact" className="hero__cta" style={{ background: active.color }}>
//               Start a project
//               <ArrowRight size={16} strokeWidth={2} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* WhatsApp */}
//       <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hero__wa">
//         <MessageCircle size={20} color="#fff" />
//       </a>
//     </section>
//   );
// };

// export default Hero;















// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { ArrowRight, MessageCircle } from 'lucide-react';
// import './Hero.css';

// // Import images
// import businessImg from '../img/banner1.jpg';
// import hospitalityImg from '../img/event.jpg';
// import laptopImg from '../img/laptop.jpg';
// import trainingImg from '../img/training.jpg';
// import creatorImg from '../img/podcast.jpg';

// const Hero = () => {
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const [progress, setProgress] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const intervalRef = useRef(null);
//   const progressIntervalRef = useRef(null);
//   const startTimeRef = useRef(Date.now());

//   const whatsappLink = `https://wa.me/919843406360?text=${encodeURIComponent("Hi ASPL Team! I'm interested in growing my business. Let's talk!")}`;

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 300);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleMouseMove = useCallback((e) => {
//     if (!sectionRef.current) return;
//     const rect = sectionRef.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width;
//     const y = (e.clientY - rect.top) / rect.height;
//     requestAnimationFrame(() => {
//       setMousePos({ x, y });
//     });
//   }, []);

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove, { passive: true });
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [handleMouseMove]);

//   const startRotation = useCallback(() => {
//     if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
//     if (intervalRef.current) clearTimeout(intervalRef.current);
    
//     startTimeRef.current = Date.now();
//     const duration = 6000;
//     const fps = 60;
//     const frameDuration = 1000 / fps;

//     progressIntervalRef.current = setInterval(() => {
//       const elapsed = Date.now() - startTimeRef.current;
//       const newProgress = Math.min(elapsed / duration, 1);
//       setProgress(newProgress);

//       if (newProgress >= 1) {
//         clearInterval(progressIntervalRef.current);
//         setActiveIndex(prev => (prev + 1) % services.length);
//         setProgress(0);
//         startTimeRef.current = Date.now();
//       }
//     }, frameDuration);
//   }, []);

//   useEffect(() => {
//     if (!isHovering) {
//       startRotation();
//     } else {
//       if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
//       if (intervalRef.current) clearTimeout(intervalRef.current);
//     }
//     return () => {
//       if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
//       if (intervalRef.current) clearTimeout(intervalRef.current);
//     };
//   }, [isHovering, startRotation]);

//   const handlePillClick = (index) => {
//     setActiveIndex(index);
//     setProgress(0);
//     startTimeRef.current = Date.now();
//     if (!isHovering) {
//       startRotation();
//     }
//   };

//   const services = [
//     {
//       id: 'business',
//       label: 'Business',
//       headline: 'Digital transformation',
//       subheadline: 'From concept to scale',
//       color: '#5E5CE6',
//       gradient: 'linear-gradient(135deg, #5E5CE6 0%, #8B5CF6 50%, #A78BFA 100%)',
//       image: businessImg,
//       features: ['Web & Apps', 'Marketing', 'UI/UX', 'Cloud'],
//       stat: { value: '200+', label: 'Projects delivered' },
//     },
//     {
//       id: 'hospitality',
//       label: 'Hospitality',
//       headline: 'Unforgettable events',
//       subheadline: 'Crafted to perfection',
//       color: '#FF6B35',
//       gradient: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FFB347 100%)',
//       image: hospitalityImg,
//       features: ['Corporate', 'Weddings', 'Catering', 'Management'],
//       stat: { value: '500+', label: 'Events executed' },
//     },
//     {
//       id: 'laptops',
//       label: 'Technology',
//       headline: 'Premium devices',
//       subheadline: 'Power meets elegance',
//       color: '#00C897',
//       gradient: 'linear-gradient(135deg, #00C897 0%, #00D2FF 50%, #4FACFE 100%)',
//       image: laptopImg,
//       features: ['Refurbished', 'Enterprise', 'Support', 'Education'],
//       stat: { value: '1000+', label: 'Units delivered' },
//     },
//     {
//       id: 'training',
//       label: 'Training',
//       headline: 'Career acceleration',
//       subheadline: 'Learn. Build. Launch.',
//       color: '#0066FF',
//       gradient: 'linear-gradient(135deg, #0066FF 0%, #00C6FF 50%, #0072FF 100%)',
//       image: trainingImg,
//       features: ['Live Projects', 'Mentorship', 'Portfolio', 'Placement'],
//       stat: { value: '500+', label: 'Graduates placed' },
//     },
//     {
//       id: 'creator',
//       label: 'Creative',
//       headline: 'Content mastery',
//       subheadline: 'Stories that resonate',
//       color: '#FF2D55',
//       gradient: 'linear-gradient(135deg, #FF2D55 0%, #FF375F 50%, #FF6482 100%)',
//       image: creatorImg,
//       features: ['Podcast', '4K Video', 'Editing', 'Full Crew'],
//       stat: { value: '100+', label: 'Productions done' },
//     },
//   ];

//   const active = services[activeIndex];
//   const nextService = services[(activeIndex + 1) % services.length];
//   const prevService = services[(activeIndex - 1 + services.length) % services.length];

//   return (
//     <section 
//       className="hero" 
//       ref={sectionRef} 
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => {
//         setIsHovering(false);
//         startTimeRef.current = Date.now() - (progress * 6000);
//       }}
//     >
      
//       {/* Cinematic Background System */}
//       <div className="hero-bg-system">
//         {/* Base images with Ken Burns effect */}
//         {services.map((svc, i) => (
//           <div
//             key={svc.id}
//             className={`hero-bg-image ${i === activeIndex ? 'is-active' : ''} ${i === (activeIndex + 1) % services.length ? 'is-next' : ''}`}
//             style={{ backgroundImage: `url(${svc.image})` }}
//           />
//         ))}
        
//         {/* Dynamic gradient overlay */}
//         <div className="hero-bg-gradient" />
        
//         {/* Mouse-following ambient light */}
//         <div 
//           className="hero-ambient-light"
//           style={{
//             background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${active.color}1A 0%, transparent 60%)`,
//             opacity: isHovering ? 1.2 : 0.8,
//           }}
//         />
        
//         {/* Subtle grain texture */}
//         <div className="hero-grain" />
        
//         {/* Edge vignette */}
//         <div className="hero-vignette" />
//       </div>

//       {/* Floating particles */}
//       <div className="hero-particles">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="hero-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 8}s`,
//               animationDuration: `${6 + Math.random() * 8}s`,
//               opacity: Math.random() * 0.3 + 0.1,
//               width: `${Math.random() * 3 + 1}px`,
//               height: `${Math.random() * 3 + 1}px`,
//               background: active.color,
//             }}
//           />
//         ))}
//       </div>

//       <div className={`hero-content-wrapper ${isVisible ? 'is-visible' : ''}`}>
        
//         {/* Service Navigation Pills - Redesigned */}
//         <nav 
//           className="hero-pills-container"
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//         >
//           {services.map((svc, i) => (
//             <button
//               key={svc.id}
//               className={`hero-pill ${i === activeIndex ? 'is-active' : ''} ${i === (activeIndex + 1) % services.length ? 'is-next' : ''}`}
//               onClick={() => handlePillClick(i)}
//               // style={{ '--pill-color': svc.color } as React.CSSProperties} 
//             >
//               <span className="pill-icon">
//                 {i === activeIndex && (
//                   <svg width="8" height="8" viewBox="0 0 8 8">
//                     <circle cx="4" cy="4" r="3" fill={svc.color} />
//                   </svg>
//                 )}
//               </span>
//               <span className="pill-label">{svc.label}</span>
//               {i === activeIndex && (
//                 <div className="pill-progress">
//                   <div 
//                     className="pill-progress-fill" 
//                     style={{ 
//                       width: `${progress * 100}%`,
//                       background: svc.gradient,
//                     }} 
//                   />
//                 </div>
//               )}
//             </button>
//           ))}
//         </nav>

//         {/* Main Content Area */}
//         <div className="hero-main-content">
          
//           {/* Subheadline - Apple style subtle intro */}
//           <div className="hero-subheadline-wrapper">
//             {/* <span className="hero-subheadline-line" style={{ background: active.gradient }} /> */}
//             <span className="hero-subheadline-text">
//               {active.subheadline}
//             </span>
//           </div>
          
//           {/* Main Headline - Cinematic typography */}
//           <h1 className="hero-headline">
//             <span className="headline-line headline-static">We turn</span>
//             <span className="headline-line headline-dynamic-wrapper">
//               <span 
//                 className="headline-dynamic"
//                 style={{ 
//                   background: active.gradient,
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                 }}
//               >
//                 {active.headline}
//               </span>
//             </span>
//             <span className="headline-line headline-static">into growth engines</span>
//           </h1>

//           {/* Feature Tags - Floating glass morphism */}
//           <div className="hero-features-container">
//             {active.features.map((feat, i) => (
//               <span 
//                 key={i} 
//                 className="hero-feature-tag"
//                 style={{ 
//                   animationDelay: `${i * 0.1}s`,
//                   borderColor: `${active.color}20`,
//                   background: `${active.color}08`,
//                 }}
//               >
//                 <span className="feature-dot" style={{ background: active.color }} />
//                 {feat}
//               </span>
//             ))}
//           </div>

//           {/* CTA Section - Premium interaction */}
//           <div className="hero-cta-section">
//             <div className="hero-stat-block">
//               <span 
//                 className="stat-value"
//                 style={{ 
//                   background: active.gradient,
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                 }}
//               >
//                 {active.stat.value}
//               </span>
//               <span className="stat-label">{active.stat.label}</span>
//             </div>
            
//             <a 
//               href="#contact" 
//               className="hero-cta-button"
//               // style={{ 
//               //   '--cta-color': active.color,
//               //   '--cta-gradient': active.gradient,
//               // } as React.CSSProperties}
//             >
//               <span className="cta-text">Start a project</span>
//               <span className="cta-icon-wrapper">
//                 <ArrowRight size={16} strokeWidth={2.5} />
//               </span>
//               <div className="cta-shimmer" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Service Preview Cards - Next/Previous */}
//       <div className="hero-preview-cards">
//         <div 
//           className="preview-card prev-card"
//           // style={{ '--preview-color': prevService.color } as React.CSSProperties}
//           onClick={() => handlePillClick((activeIndex - 1 + services.length) % services.length)}
//         >
//           <span className="preview-label">{prevService.label}</span>
//         </div>
//         <div 
//           className="preview-card next-card"
//           // style={{ '--preview-color': nextService.color } as React.CSSProperties}
//           onClick={() => handlePillClick((activeIndex + 1) % services.length)}
//         >
//           <span className="preview-label">{nextService.label}</span>
//         </div>
//       </div>

//       {/* WhatsApp FAB - Premium */}
//       <a 
//         href={whatsappLink} 
//         target="_blank" 
//         rel="noopener noreferrer" 
//         className="hero-whatsapp-fab"
//       >
//         <div className="fab-pulse" />
//         <MessageCircle size={22} color="#fff" />
//       </a>
//     </section>
//   );
// };

// export default Hero;


















import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import './Hero.css';

// Import images
import businessImg from '../img/banner1.jpg';
import hospitalityImg from '../img/event.jpg';
import laptopImg from '../img/laptop.jpg';
import trainingImg from '../img/training.jpg';
import creatorImg from '../img/podcast.jpg';

const Hero = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const progressIntervalRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const whatsappLink = `https://wa.me/919843406360?text=${encodeURIComponent("Hi ASPL Team! I'm interested in growing my business. Let's talk!")}`;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
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

  const startRotation = useCallback(() => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    startTimeRef.current = Date.now();
    const duration = 6000;
    const fps = 60;

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress);

      if (newProgress >= 1) {
        clearInterval(progressIntervalRef.current);
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveIndex(prev => (prev + 1) % services.length);
          setProgress(0);
          setIsTransitioning(false);
          startTimeRef.current = Date.now();
        }, 400);
      }
    }, 1000 / fps);
  }, []);

  useEffect(() => {
    if (!isHovering) {
      startRotation();
    } else {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    }
    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isHovering, startRotation]);

  const handlePillClick = (index) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setProgress(0);
      setIsTransitioning(false);
      startTimeRef.current = Date.now();
    }, 400);
  };

  const services = [
    {
      id: 'business',
      label: 'Business',
      headline: 'Digital transformation',
      subheadline: 'From concept to scale',
      color: '#6366F1',
      image: businessImg,
      features: ['Web & Apps', 'Marketing', 'UI/UX', 'Cloud'],
      stat: { value: '200+', label: 'Projects delivered' },
    },
    {
      id: 'hospitality',
      label: 'Hospitality',
      headline: 'Unforgettable events',
      subheadline: 'Crafted to perfection',
      color: '#F59E0B',
      image: hospitalityImg,
      features: ['Corporate', 'Weddings', 'Catering', 'Management'],
      stat: { value: '500+', label: 'Events executed' },
    },
    {
      id: 'laptops',
      label: 'Technology',
      headline: 'Premium devices',
      subheadline: 'Power meets elegance',
      color: '#10B981',
      image: laptopImg,
      features: ['Refurbished', 'Enterprise', 'Support', 'Education'],
      stat: { value: '1000+', label: 'Units delivered' },
    },
    {
      id: 'training',
      label: 'Training',
      headline: 'Career acceleration',
      subheadline: 'Learn. Build. Launch.',
      color: '#0EA5E9',
      image: trainingImg,
      features: ['Live Projects', 'Mentorship', 'Portfolio', 'Placement'],
      stat: { value: '500+', label: 'Graduates placed' },
    },
    {
      id: 'creator',
      label: 'Creative',
      headline: 'Content mastery',
      subheadline: 'Stories that resonate',
      color: '#EC4899',
      image: creatorImg,
      features: ['Podcast', '4K Video', 'Editing', 'Full Crew'],
      stat: { value: '100+', label: 'Productions done' },
    },
  ];

  const active = services[activeIndex];

  return (
    <section 
      className="hero" 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        startTimeRef.current = Date.now() - (progress * 6000);
      }}
    >
      
      {/* Background — clean image crossfade */}
      <div className="hero-bg">
        {services.map((svc, i) => (
          <div
            key={svc.id}
            className={`hero-bg-img ${i === activeIndex ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${svc.image})` }}
          />
        ))}
        <div className="hero-bg-overlay" />
        <div 
          className="hero-bg-glow"
          style={{
            '--mx': `${mousePos.x * 100}%`,
            '--my': `${mousePos.y * 100}%`,
            '--glow-color': active.color,
          }}
        />
      </div>

      <div className={`hero-wrap ${isVisible ? 'is-visible' : ''}`}>
        
        {/* Pill navigation */}
        {/* <nav className="hero-pills">
          {services.map((svc, i) => (
            <button
              key={svc.id}
              className={`hero-pill ${i === activeIndex ? 'is-active' : ''}`}
              onClick={() => handlePillClick(i)}
              style={{ '--pill-color': svc.color }}
            >
              <span className="hero-pill-label">{svc.label}</span>
              {i === activeIndex && (
                <span className="hero-pill-bar">
                  <span className="hero-pill-bar-fill" style={{ width: `${progress * 100}%` }} />
                </span>
              )}
            </button>
          ))}
        </nav> */}

        {/* Subheadline */}
        <div className="hero-subhead">
          <span className="hero-subhead-text">{active.subheadline}</span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline">
          <span className="hero-headline-row">We turn</span>
          <span className="hero-headline-row">
            <span 
              className="hero-headline-accent"
              style={{ color: active.color }}
            >
              {active.headline}
            </span>
          </span>
          <span className="hero-headline-row">into growth engines</span>
        </h1>

        {/* Feature tags */}
        <div className="hero-features">
          {active.features.map((feat, i) => (
            <span key={i} className="hero-feature" style={{ animationDelay: `${i * 0.08}s` }}>
              {feat}
            </span>
          ))}
        </div>

        {/* Action row */}
        <div className="hero-action">
          <div className="hero-stat">
            <span className="hero-stat-value" style={{ color: active.color }}>{active.stat.value}</span>
            <span className="hero-stat-label">{active.stat.label}</span>
          </div>
          <a href="#contact" className="hero-cta">
            <span>Start a project</span>
            <ArrowRight size={16} strokeWidth={2} />
          </a>
        </div>
      </div>

      {/* WhatsApp */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hero-wa"
      >
        <MessageCircle size={20} strokeWidth={2} />
      </a>
    </section>
  );
};

export default Hero;