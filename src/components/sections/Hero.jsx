// import React, { useEffect, useRef } from 'react';
// import { 
//   ArrowRight, 
//   CheckCircle, 
//   Star, 
//   MessageCircle, 
//   BarChart3, 
//   Megaphone, 
//   Target,
//   Zap,
//   Shield,
//   TrendingUp,
//   Users,
//   Play,
//   Sparkles,
//   ChevronDown
// } from 'lucide-react';
// import './Hero.css';

// const Hero = () => {
//   const containerRef = useRef(null);
//   const visualRef = useRef(null);
  
//   const whatsappNumber = "919843406360";
//   const whatsappMessage = encodeURIComponent("Hi ASPL Team! I'm interested in growing my business. Let's talk!");
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

//   // Parallax & Mouse Move Effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!containerRef.current || !visualRef.current) return;
      
//       const { clientX, clientY } = e;
//       const { innerWidth, innerHeight } = window;
      
//       const moveX = (clientX - innerWidth / 2) * 0.02;
//       const moveY = (clientY - innerHeight / 2) * 0.02;
      
//       visualRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const coreServices = [
//     { 
//       icon: BarChart3, 
//       name: 'Analysis', 
//       desc: 'Data-driven business intelligence',
//       gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
//       stat: '+247%'
//     },
//     { 
//       icon: Megaphone, 
//       name: 'Marketing', 
//       desc: 'Performance marketing that converts',
//       gradient: 'linear-gradient(135deg, #3B82F6 0%, #2DD4BF 100%)',
//       stat: '10M+'
//     },
//     { 
//       icon: Target, 
//       name: 'Strategy', 
//       desc: 'Precision growth frameworks',
//       gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
//       stat: '98%'
//     },
//   ];

//   const coreCategories = [
//     { 
//       name: 'Business Services',
//       tag: 'Popular',
//       features: ['Web & App Dev', 'Digital Marketing', 'UI/UX Design']
//     },
//     { 
//       name: 'Hospitality & Events',
//       tag: 'Premium',
//       features: ['Catering', 'Corporate Events', 'Weddings']
//     },
//     { 
//       name: 'Laptop Solutions',
//       tag: 'Bestseller',
//       features: ['Refurbished', 'Bulk Orders', 'Warranty']
//     },
//     { 
//       name: 'Training & Skills',
//       tag: 'Trending',
//       features: ['Live Projects', '10+ Courses', 'Mentorship']
//     },
//     { 
//       name: 'Creator Studio',
//       tag: 'New',
//       features: ['Podcast Setup', 'Editing', 'Production']
//     },
//   ];

//   const trustMetrics = [
//     { value: '50+', label: 'Team Experts', icon: Users },
//     { value: '200+', label: 'Projects Delivered', icon: TrendingUp },
//     { value: '4.9', label: 'Client Rating', icon: Star },
//     { value: '24/7', label: 'Support', icon: Shield },
//   ];

//   const partnerLogos = [
//     { name: 'Avant', full: 'Avant Enterprises' },
//     { name: 'Digi', full: 'Digi Pondy' },
//     { name: 'DM', full: 'De mentee Academy' },
//     { name: 'RB', full: 'Redbook Events' },
//   ];

//   return (
//     <section className="hero-pro" ref={containerRef}>
      
//       {/* Animated Background */}
//       <div className="hero-pro__bg">
//         <div className="hero-pro__bg-grid" />
//         <div className="hero-pro__bg-gradient hero-pro__bg-gradient--1" />
//         <div className="hero-pro__bg-gradient hero-pro__bg-gradient--2" />
//         <div className="hero-pro__bg-gradient hero-pro__bg-gradient--3" />
        
//         {/* Animated Orb Particles */}
//         {[...Array(20)].map((_, i) => (
//           <div 
//             key={i}
//             className="hero-pro__particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 4}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Container */}
//       <div className="hero-pro__container">
        
//         {/* ============ LEFT CONTENT ============ */}
//         <div className="hero-pro__content">
          
//           {/* Announcement Bar - Like Stripe/Linear */}
//           <div className="hero-pro__announcement">
//             <span className="hero-pro__announcement-badge">New</span>
//             <span className="hero-pro__announcement-text">
//               Introducing Creator Studio — Podcast, Video & Production
//             </span>
//             <ArrowRight size={14} className="hero-pro__announcement-arrow" />
//           </div>

//           {/* Main Headline - Value-First Like Shopify */}
//           <h1 className="hero-pro__headline">
//             <span className="hero-pro__headline-line">
//               Build. Scale.
//             </span>
//             <span className="hero-pro__headline-line">
//               <span className="hero-pro__headline-gradient">Dominate</span> Your Market
//             </span>
//           </h1>

//           {/* Subheadline - Specific Promise Like Semrush */}
//           <p className="hero-pro__subheadline">
//             One partner. Five verticals. Endless growth.
//             <span className="hero-pro__subheadline-highlight"> From code to events, laptops to podcasts — we execute while you focus on vision.</span>
//           </p>

//           {/* Core Services Mini Cards - Like Notion's Feature Previews */}
//           <div className="hero-pro__service-cards">
//             {coreServices.map((service, index) => (
//               <div 
//                 key={index} 
//                 className="hero-pro__service-card"
//                 style={{ '--delay': `${index * 0.1}s` }}
//               >
//                 <div className="hero-pro__service-card-icon" style={{ background: service.gradient }}>
//                   <service.icon size={16} color="#fff" />
//                 </div>
//                 <div className="hero-pro__service-card-content">
//                   <div className="hero-pro__service-card-header">
//                     <span className="hero-pro__service-card-name">{service.name}</span>
//                     <span className="hero-pro__service-card-stat">{service.stat}</span>
//                   </div>
//                   <span className="hero-pro__service-card-desc">{service.desc}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Section - Multi-path Like HubSpot */}
//           <div className="hero-pro__cta-group">
//             <a href="#services" className="hero-pro__cta-primary">
//               <span>Start Growing Now</span>
//               <div className="hero-pro__cta-primary-icon">
//                 <ArrowRight size={18} />
//               </div>
//               <div className="hero-pro__cta-primary-shine" />
//             </a>
            
//             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hero-pro__cta-secondary">
//               <MessageCircle size={18} />
//               <span>WhatsApp Chat</span>
//               <span className="hero-pro__cta-secondary-badge">Instant</span>
//             </a>
            
//             <button className="hero-pro__cta-tertiary">
//               <Play size={14} fill="currentColor" />
//               <span>See How It Works</span>
//             </button>
//           </div>

//           {/* Trust Bar - Like Shopify's Social Proof */}
//           <div className="hero-pro__trust">
//             {/* Partner Avatars Row */}
//             <div className="hero-pro__trust-avatars">
//               {partnerLogos.map((partner, index) => (
//                 <div 
//                   key={index} 
//                   className="hero-pro__trust-avatar"
//                   style={{ zIndex: 4 - index }}
//                   title={partner.full}
//                 >
//                   {partner.name}
//                 </div>
//               ))}
//               <div className="hero-pro__trust-avatar hero-pro__trust-avatar--more">
//                 +6
//               </div>
//             </div>
            
//             {/* Rating */}
//             <div className="hero-pro__trust-rating">
//               <div className="hero-pro__trust-stars">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
//                 ))}
//               </div>
//               <span className="hero-pro__trust-text">
//                 Trusted by <strong>50+ businesses</strong> across India
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* ============ RIGHT VISUAL ============ */}
//         <div className="hero-pro__visual" ref={visualRef}>
          
//           {/* Main Dashboard Card - Replaces Static Image Like HubSpot */}
//           <div className="hero-pro__dashboard">
//             {/* Dashboard Header */}
//             <div className="hero-pro__dashboard-header">
//               <div className="hero-pro__dashboard-dots">
//                 <div className="hero-pro__dashboard-dot hero-pro__dashboard-dot--red" />
//                 <div className="hero-pro__dashboard-dot hero-pro__dashboard-dot--yellow" />
//                 <div className="hero-pro__dashboard-dot hero-pro__dashboard-dot--green" />
//               </div>
//               <div className="hero-pro__dashboard-title">
//                 <span>ASPL Ecosystem</span>
//                 <Sparkles size={14} className="hero-pro__dashboard-sparkle" />
//               </div>
//             </div>

//             {/* Category Cards Grid */}
//             <div className="hero-pro__dashboard-grid">
//               {coreCategories.map((category, index) => (
//                 <div 
//                   key={index} 
//                   className="hero-pro__dashboard-category"
//                   style={{ animationDelay: `${index * 0.15}s` }}
//                 >
//                   <div className="hero-pro__dashboard-category-header">
//                     <span className="hero-pro__dashboard-category-index">0{index + 1}</span>
//                     {category.tag && (
//                       <span className={`hero-pro__dashboard-category-tag hero-pro__dashboard-category-tag--${category.tag.toLowerCase()}`}>
//                         {category.tag}
//                       </span>
//                     )}
//                   </div>
//                   <h4 className="hero-pro__dashboard-category-name">{category.name}</h4>
//                   <div className="hero-pro__dashboard-category-features">
//                     {category.features.map((feat, i) => (
//                       <span key={i} className="hero-pro__dashboard-category-feat">
//                         <CheckCircle size={12} />
//                         {feat}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Real-time Activity Indicator */}
//             <div className="hero-pro__dashboard-activity">
//               <div className="hero-pro__dashboard-pulse" />
//               <span>3 projects in progress right now</span>
//             </div>
//           </div>

//           {/* Floating Stats Cards */}
//           <div className="hero-pro__float hero-pro__float--1">
//             <div className="hero-pro__float-card">
//               <TrendingUp size={18} color="#10B981" />
//               <div className="hero-pro__float-content">
//                 <span className="hero-pro__float-value">40%</span>
//                 <span className="hero-pro__float-label">Avg. Cost Reduction</span>
//               </div>
//             </div>
//           </div>

//           <div className="hero-pro__float hero-pro__float--2">
//             <div className="hero-pro__float-card">
//               <Zap size={18} color="#F59E0B" />
//               <div className="hero-pro__float-content">
//                 <span className="hero-pro__float-value">3x</span>
//                 <span className="hero-pro__float-label">Faster Delivery</span>
//               </div>
//             </div>
//           </div>

//           <div className="hero-pro__float hero-pro__float--3">
//             <div className="hero-pro__float-card">
//               <Shield size={18} color="#6366F1" />
//               <div className="hero-pro__float-content">
//                 <span className="hero-pro__float-value">98%</span>
//                 <span className="hero-pro__float-label">Client Satisfaction</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Metrics Bar - Like Calm's Trust Strip */}
//       <div className="hero-pro__metrics">
//         <div className="hero-pro__metrics-container">
//           {trustMetrics.map((metric, index) => (
//             <div key={index} className="hero-pro__metrics-item">
//               <metric.icon size={20} className="hero-pro__metrics-icon" />
//               <div className="hero-pro__metrics-content">
//                 <span className="hero-pro__metrics-value">{metric.value}</span>
//                 <span className="hero-pro__metrics-label">{metric.label}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* WhatsApp Floating Button */}
//       <a 
//         href={whatsappLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="hero-pro__whatsapp-float"
//         aria-label="Chat on WhatsApp"
//       >
//         <div className="hero-pro__whatsapp-pulse" />
//         <MessageCircle size={24} color="#fff" />
//       </a>

//       {/* Scroll Indicator */}
//       <div className="hero-pro__scroll-indicator">
//         <span>Discover More</span>
//         <ChevronDown size={20} className="hero-pro__scroll-chevron" />
//       </div>
//     </section>
//   );
// };

// export default Hero;




















// import React, { useEffect, useRef, useState } from 'react';
// import { 
//   ArrowRight, 
//   CheckCircle, 
//   Star, 
//   MessageCircle, 
//   BarChart3, 
//   Megaphone, 
//   Target,
//   Zap,
//   Shield,
//   TrendingUp,
//   Users,
//   Play,
//   Sparkles,
//   ChevronDown,
//   Code2,
//   Palette,
//   Camera,
//   GraduationCap,
//   Laptop,
//   UtensilsCrossed,
//   ArrowUpRight,
//   Pause,
//   MousePointer2
// } from 'lucide-react';
// import './Hero.css';

// const Hero = () => {
//   const containerRef = useRef(null);
//   const cursorRef = useRef(null);
//   const [activeTab, setActiveTab] = useState(0);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
  
//   const whatsappNumber = "919843406360";
//   const whatsappMessage = encodeURIComponent("Hi ASPL Team! I'm interested in growing my business. Let's talk!");
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

//   // Custom cursor effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//       if (cursorRef.current) {
//         cursorRef.current.style.left = `${e.clientX}px`;
//         cursorRef.current.style.top = `${e.clientY}px`;
//       }
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Auto-rotate tabs
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTab((prev) => (prev + 1) % serviceTabs.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const serviceTabs = [
//     {
//       id: 'business',
//       icon: Code2,
//       label: 'Business Services',
//       gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
//       color: '#6366F1',
//       bgColor: '#EEF2FF',
//       stats: { value: '200+', label: 'Projects Delivered' },
//       features: ['Web & App Development', 'Digital Marketing & SEO', 'UI/UX Design', 'Cloud Solutions'],
//       preview: 'From MVPs to enterprise platforms — we build digital products that scale.'
//     },
//     {
//       id: 'hospitality',
//       icon: UtensilsCrossed,
//       label: 'Hospitality & Events',
//       gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
//       color: '#F59E0B',
//       bgColor: '#FFFBEB',
//       stats: { value: '500+', label: 'Events Managed' },
//       features: ['Corporate Events', 'Wedding Planning', 'Catering Services', 'Venue Management'],
//       preview: 'End-to-end event orchestration that leaves lasting impressions.'
//     },
//     {
//       id: 'laptops',
//       icon: Laptop,
//       label: 'Laptop Solutions',
//       gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
//       color: '#10B981',
//       bgColor: '#ECFDF5',
//       stats: { value: '1000+', label: 'Devices Sold' },
//       features: ['Refurbished Laptops', 'Bulk Corporate Orders', 'Service & Warranty', 'Student Discounts'],
//       preview: 'Premium refurbished tech with warranty — save up to 60% without compromise.'
//     },
//     {
//       id: 'training',
//       icon: GraduationCap,
//       label: 'Training & Skills',
//       gradient: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
//       color: '#3B82F6',
//       bgColor: '#EFF6FF',
//       stats: { value: '10+', label: 'Professional Courses' },
//       features: ['Live Project Training', 'Industry Mentorship', 'Portfolio Building', 'Job Assistance'],
//       preview: 'Learn by building real products with mentorship from industry pros.'
//     },
//     {
//       id: 'creator',
//       icon: Camera,
//       label: 'Creator Studio',
//       gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
//       color: '#EC4899',
//       bgColor: '#FDF2F8',
//       stats: { value: '50+', label: 'Creators Empowered' },
//       features: ['Podcast Production', 'Video Shooting', 'Script Writing', 'Post Production'],
//       preview: 'Professional studio setup for creators, brands, and educators.'
//     }
//   ];

//   const trustMetrics = [
//     { value: '50+', label: 'Team Experts', icon: Users, color: '#6366F1' },
//     { value: '200+', label: 'Projects Done', icon: TrendingUp, color: '#10B981' },
//     { value: '4.9', label: 'Client Rating', icon: Star, color: '#F59E0B' },
//     { value: '24/7', label: 'Support', icon: Shield, color: '#3B82F6' },
//   ];

//   const activeService = serviceTabs[activeTab];

//   return (
//     <section className="hero-innovative" ref={containerRef}>
      
//       {/* Custom Cursor */}
//       <div 
//         ref={cursorRef} 
//         className={`hero-innovative__cursor ${isHovering ? 'hero-innovative__cursor--hover' : ''}`}
//       >
//         <MousePointer2 size={18} />
//       </div>

//       {/* ============ TOP NAVIGATION STRIP ============ */}
//       {/* <div className="hero-innovative__top-strip">
//         <div className="hero-innovative__strip-container">
         
//           <div className="hero-innovative__live-indicator">
//             <span className="hero-innovative__live-dot" />
//             <span>3 projects starting today</span>
//           </div>
          
         
//           <div className="hero-innovative__quick-stats">
//             {trustMetrics.slice(0, 3).map((metric, i) => (
//               <div key={i} className="hero-innovative__quick-stat">
//                 <span className="hero-innovative__quick-stat-value">{metric.value}</span>
//                 <span className="hero-innovative__quick-stat-label">{metric.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div> */}

//       {/* ============ MAIN HERO CONTENT ============ */}
//       <div className="hero-innovative__container">
        
//         {/* Left Content */}
//         <div className="hero-innovative__content">
          
//           {/* Pill Badge */}
//           <div 
//             className="hero-innovative__pill"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//           >
//             <span className="hero-innovative__pill-icon">
//               <Sparkles size={14} />
//             </span>
//             <span className="hero-innovative__pill-text">Your all-in-one growth partner</span>
//             <span className="hero-innovative__pill-divider">•</span>
//             <span className="hero-innovative__pill-link">
//               View Services <ArrowUpRight size={12} />
//             </span>
//           </div>

//           {/* Dynamic Headline */}
//           <h1 className="hero-innovative__headline">
//             <span className="hero-innovative__headline-static">We turn</span>
//             <span className="hero-innovative__headline-rotating">
//               <span className="hero-innovative__headline-word" style={{ color: activeService.color }}>
//                 {activeService.label}
//               </span>
//             </span>
//             <span className="hero-innovative__headline-static">into growth engines</span>
//           </h1>

//           {/* Description */}
//           <p className="hero-innovative__description">
//             {activeService.preview}
//           </p>

//           {/* Service Tab Selector - Horizontal Scroll */}
//           <div className="hero-innovative__tab-selector">
//             {serviceTabs.map((tab, index) => (
//               <button
//                 key={tab.id}
//                 className={`hero-innovative__tab ${index === activeTab ? 'hero-innovative__tab--active' : ''}`}
//                 onClick={() => setActiveTab(index)}
//                 style={{
//                   '--tab-color': tab.color,
//                   '--tab-bg': tab.bgColor,
//                 }}
//               >
//                 <tab.icon size={16} />
//                 <span>{tab.label.split(' ')[0]}</span>
//               </button>
//             ))}
//           </div>

//           {/* Feature List */}
//           <div className="hero-innovative__features">
//             {activeService.features.map((feature, i) => (
//               <div key={i} className="hero-innovative__feature">
//                 <CheckCircle size={16} color={activeService.color} />
//                 <span>{feature}</span>
//               </div>
//             ))}
//           </div>

//           {/* CTA Stack */}
//           <div className="hero-innovative__cta-stack">
//             <a href="#contact" className="hero-innovative__cta-primary">
//               <span>Start Your Project</span>
//               <div className="hero-innovative__cta-icon-circle">
//                 <ArrowRight size={16} />
//               </div>
//             </a>
            
//             <div className="hero-innovative__cta-secondary-row">
//               <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hero-innovative__cta-whatsapp">
//                 <MessageCircle size={16} color="#25D366" />
//                 <span>WhatsApp</span>
//               </a>
              
//               <button 
//                 className="hero-innovative__cta-demo"
//                 onClick={() => setIsVideoPlaying(!isVideoPlaying)}
//               >
//                 <div className="hero-innovative__play-btn">
//                   {isVideoPlaying ? <Pause size={12} fill="#fff" color="#fff" /> : <Play size={12} fill="#fff" color="#fff" />}
//                 </div>
//                 <span>{isVideoPlaying ? 'Pause Preview' : 'Watch Demo'}</span>
//               </button>
//             </div>
//           </div>

//           {/* Client Avatars + Text */}
//           <div className="hero-innovative__social-proof">
//             <div className="hero-innovative__avatar-stack">
//               {['AJ', 'RP', 'MK', 'DS'].map((initials, i) => (
//                 <div 
//                   key={i} 
//                   className="hero-innovative__avatar"
//                   style={{ 
//                     backgroundColor: ['#EEF2FF', '#FDF2F8', '#ECFDF5', '#FFFBEB'][i],
//                     color: ['#6366F1', '#EC4899', '#10B981', '#F59E0B'][i],
//                     marginLeft: i > 0 ? '-10px' : '0',
//                     zIndex: 4 - i
//                   }}
//                 >
//                   {initials}
//                 </div>
//               ))}
//               <div className="hero-innovative__avatar-count">+12</div>
//             </div>
//             <div className="hero-innovative__rating-text">
//               <div className="hero-innovative__stars">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />
//                 ))}
//                 <span className="hero-innovative__rating-number">4.9/5</span>
//               </div>
//               <span className="hero-innovative__rating-sub">from 200+ clients across India</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Visual - Interactive Dashboard */}
//         <div className="hero-innovative__visual">
          
//           {/* Main Card */}
//           <div className="hero-innovative__visual-card">
            
//             {/* Card Header with Browser Dots */}
//             <div className="hero-innovative__visual-header">
//               <div className="hero-innovative__visual-dots">
//                 <div className="hero-innovative__visual-dot hero-innovative__visual-dot--red" />
//                 <div className="hero-innovative__visual-dot hero-innovative__visual-dot--yellow" />
//                 <div className="hero-innovative__visual-dot hero-innovative__visual-dot--green" />
//               </div>
//               <div className="hero-innovative__visual-url">
//                 <Zap size={12} color={activeService.color} />
//                 <span>aspl.tech/{activeService.id}</span>
//               </div>
//             </div>

//             {/* Dynamic Service Preview */}
//             <div className="hero-innovative__visual-body" style={{ backgroundColor: activeService.bgColor }}>
              
//               {/* Large Icon Watermark */}
//               <div className="hero-innovative__visual-watermark" style={{ color: `${activeService.color}15` }}>
//                 <activeService.icon size={120} />
//               </div>
              
//               {/* Service Info Overlay */}
//               <div className="hero-innovative__visual-content">
//                 <div className="hero-innovative__visual-stat-card">
//                   <span className="hero-innovative__visual-stat-value" style={{ color: activeService.color }}>
//                     {activeService.stats.value}
//                   </span>
//                   <span className="hero-innovative__visual-stat-label">{activeService.stats.label}</span>
//                 </div>
                
//                 <div className="hero-innovative__visual-features-mini">
//                   {activeService.features.slice(0, 3).map((feat, i) => (
//                     <span key={i} className="hero-innovative__visual-feat-tag">
//                       {feat}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Progress Bar */}
//               <div className="hero-innovative__visual-progress">
//                 <div 
//                   className="hero-innovative__visual-progress-fill"
//                   style={{ 
//                     width: `${(activeTab + 1) * 20}%`,
//                     backgroundColor: activeService.color 
//                   }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Floating Element 1 - Cost Savings */}
//           <div className="hero-innovative__float hero-innovative__float--1">
//             <div className="hero-innovative__float-card">
//               <div className="hero-innovative__float-icon" style={{ backgroundColor: '#ECFDF5' }}>
//                 <TrendingUp size={16} color="#10B981" />
//               </div>
//               <div className="hero-innovative__float-info">
//                 <span className="hero-innovative__float-value">40%</span>
//                 <span className="hero-innovative__float-label">Cost Reduction</span>
//               </div>
//             </div>
//           </div>

//           {/* Floating Element 2 - Speed */}
//           <div className="hero-innovative__float hero-innovative__float--2">
//             <div className="hero-innovative__float-card">
//               <div className="hero-innovative__float-icon" style={{ backgroundColor: '#FFFBEB' }}>
//                 <Zap size={16} color="#F59E0B" />
//               </div>
//               <div className="hero-innovative__float-info">
//                 <span className="hero-innovative__float-value">3x</span>
//                 <span className="hero-innovative__float-label">Faster Delivery</span>
//               </div>
//             </div>
//           </div>

//           {/* Floating Element 3 - Satisfaction */}
//           <div className="hero-innovative__float hero-innovative__float--3">
//             <div className="hero-innovative__float-card">
//               <div className="hero-innovative__float-icon" style={{ backgroundColor: '#EEF2FF' }}>
//                 <Shield size={16} color="#6366F1" />
//               </div>
//               <div className="hero-innovative__float-info">
//                 <span className="hero-innovative__float-value">98%</span>
//                 <span className="hero-innovative__float-label">Satisfaction</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ============ BOTTOM TRUST BAR ============ */}
//       <div className="hero-innovative__trust-bar">
//         <div className="hero-innovative__trust-container">
//           <span className="hero-innovative__trust-label">Trusted by companies across India</span>
//           <div className="hero-innovative__trust-logos">
//             {['Avant Enterprises', 'Digi Pondy', 'De mentee Academy', 'Redbook Events', 'TechCorp India', 'StartupHub'].map((name, i) => (
//               <div key={i} className="hero-innovative__trust-logo">
//                 <span className="hero-innovative__trust-logo-text">
//                   {name.split(' ').map(w => w[0]).join('')}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* WhatsApp Floating Button */}
//       <a 
//         href={whatsappLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="hero-innovative__whatsapp"
//       >
//         <div className="hero-innovative__whatsapp-pulse" />
//         <MessageCircle size={22} color="#fff" />
//       </a>

//       {/* Scroll Progress Indicator */}
//       <div className="hero-innovative__scroll-progress">
//         <div className="hero-innovative__scroll-line">
//           <div className="hero-innovative__scroll-fill" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


















// import React, { useEffect, useRef, useState } from 'react';
// import { 
//   ArrowRight, 
//   CheckCircle, 
//   Star, 
//   MessageCircle, 
//   Zap,
//   Shield,
//   TrendingUp,
//   Users,
//   Play,
//   Sparkles,
//   Code2,
//   Camera,
//   GraduationCap,
//   Laptop,
//   UtensilsCrossed,
//   ArrowUpRight,
//   Pause,
// } from 'lucide-react';
// import './Hero.css';

// // Import images (assuming you'll add these to your assets folder)
// import businessImg from '../img/business.jpg';
// import hospitalityImg from '../img/event.jpg';
// import laptopImg from '../img/laptop.jpg';
// import trainingImg from '../img/training.jpg';
// import creatorImg from '../img/podcast.jpg';

// const Hero = () => {
//   const containerRef = useRef(null);
//   const cursorRef = useRef(null);
//   const [activeTab, setActiveTab] = useState(0);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [imageLoaded, setImageLoaded] = useState({});
  
//   const whatsappNumber = "919843406360";
//   const whatsappMessage = encodeURIComponent("Hi ASPL Team! I'm interested in growing my business. Let's talk!");
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

//   // Custom cursor effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//       if (cursorRef.current) {
//         cursorRef.current.style.left = `${e.clientX}px`;
//         cursorRef.current.style.top = `${e.clientY}px`;
//       }
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Auto-rotate tabs
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTab((prev) => (prev + 1) % serviceTabs.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Preload images
//   useEffect(() => {
//     const images = [businessImg, hospitalityImg, laptopImg, trainingImg, creatorImg];
//     images.forEach((src, index) => {
//       const img = new Image();
//       img.src = src;
//       img.onload = () => {
//         setImageLoaded(prev => ({ ...prev, [index]: true }));
//       };
//     });
//   }, []);

//   const serviceTabs = [
//     {
//       id: 'business',
//       icon: Code2,
//       label: 'Business Services',
//       gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
//       color: '#6366F1',
//       bgColor: '#EEF2FF',
//       image: businessImg,
//       imageAlt: 'Web development and digital marketing services',
//       stats: { value: '200+', label: 'Projects Delivered' },
//       features: ['Web & App Development', 'Digital Marketing & SEO', 'UI/UX Design', 'Cloud Solutions'],
//       preview: 'From MVPs to enterprise platforms — we build digital products that scale.',
//       overlayGradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.85) 0%, rgba(139, 92, 246, 0.7) 100%)',
//     },
//     {
//       id: 'hospitality',
//       icon: UtensilsCrossed,
//       label: 'Hospitality & Events',
//       gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
//       color: '#F59E0B',
//       bgColor: '#FFFBEB',
//       image: hospitalityImg,
//       imageAlt: 'Corporate events and wedding planning services',
//       stats: { value: '500+', label: 'Events Managed' },
//       features: ['Corporate Events', 'Wedding Planning', 'Catering Services', 'Venue Management'],
//       preview: 'End-to-end event orchestration that leaves lasting impressions.',
//       overlayGradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.85) 0%, rgba(239, 68, 68, 0.7) 100%)',
//     },
//     {
//       id: 'laptops',
//       icon: Laptop,
//       label: 'Laptop Solutions',
//       gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
//       color: '#10B981',
//       bgColor: '#ECFDF5',
//       image: laptopImg,
//       imageAlt: 'Refurbished laptops and tech solutions',
//       stats: { value: '1000+', label: 'Devices Sold' },
//       features: ['Refurbished Laptops', 'Bulk Corporate Orders', 'Service & Warranty', 'Student Discounts'],
//       preview: 'Premium refurbished tech with warranty — save up to 60% without compromise.',
//       overlayGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.85) 0%, rgba(5, 150, 105, 0.7) 100%)',
//     },
//     {
//       id: 'training',
//       icon: GraduationCap,
//       label: 'Training & Skills',
//       gradient: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
//       color: '#3B82F6',
//       bgColor: '#EFF6FF',
//       image: trainingImg,
//       imageAlt: 'Professional training and skill development',
//       stats: { value: '10+', label: 'Professional Courses' },
//       features: ['Live Project Training', 'Industry Mentorship', 'Portfolio Building', 'Job Assistance'],
//       preview: 'Learn by building real products with mentorship from industry pros.',
//       overlayGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.85) 0%, rgba(6, 182, 212, 0.7) 100%)',
//     },
//     {
//       id: 'creator',
//       icon: Camera,
//       label: 'Creator Studio',
//       gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
//       color: '#EC4899',
//       bgColor: '#FDF2F8',
//       image: creatorImg,
//       imageAlt: 'Podcast and video production studio',
//       stats: { value: '50+', label: 'Creators Empowered' },
//       features: ['Podcast Production', 'Video Shooting', 'Script Writing', 'Post Production'],
//       preview: 'Professional studio setup for creators, brands, and educators.',
//       overlayGradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.85) 0%, rgba(139, 92, 246, 0.7) 100%)',
//     }
//   ];

//   const trustMetrics = [
//     { value: '50+', label: 'Team Experts', icon: Users, color: '#6366F1' },
//     { value: '200+', label: 'Projects Done', icon: TrendingUp, color: '#10B981' },
//     { value: '4.9', label: 'Client Rating', icon: Star, color: '#F59E0B' },
//     { value: '24/7', label: 'Support', icon: Shield, color: '#3B82F6' },
//   ];

//   const activeService = serviceTabs[activeTab];
//   const nextService = serviceTabs[(activeTab + 1) % serviceTabs.length];
//   const prevService = serviceTabs[(activeTab - 1 + serviceTabs.length) % serviceTabs.length];

//   return (
//     <section className="hero-innovative" ref={containerRef}>
      


      
//       {/* Custom Cursor */}
//       <div 
//         ref={cursorRef} 
//         className={`hero-innovative__cursor ${isHovering ? 'hero-innovative__cursor--hover' : ''}`}
//       />

    
//       {/* ============ MAIN HERO CONTENT ============ */}
//       <div className="hero-innovative__container">
        
//         {/* Left Content */}
//         <div className="hero-innovative__content">
          
        

//           {/* Dynamic Headline */}
//           <h1 className="hero-innovative__headline">
//             <span className="hero-innovative__headline-static">We turn</span>
//             <span className="hero-innovative__headline-rotating">
//               <span className="hero-innovative__headline-word" style={{ color: activeService.color }}>
//                 {activeService.label}
//               </span>
//             </span>
//             <span className="hero-innovative__headline-static">into growth engines</span>
//           </h1>

//           {/* Description */}
//           <p className="hero-innovative__description">
//             {activeService.preview}
//           </p>

      

//           {/* CTA Stack */}
//           <div className="hero-innovative__cta-stack">
//             <a href="#contact" className="hero-innovative__cta-primary">
//               <span>Start Your Project</span>
//               <div className="hero-innovative__cta-icon-circle">
//                 <ArrowRight size={16} />
//               </div>
//             </a>
            
          
//           </div>

       
//         </div>

//         {/* Right Visual - Image-Based Dashboard */}
//         <div className="hero-innovative__visual">
          
//           {/* Main Image Card */}
//           <div className="hero-innovative__visual-card">
            
//             {/* Card Header with Browser Dots */}
//             <div className="hero-innovative__visual-header">
//               <div className="hero-innovative__visual-dots">
//                 <div className="hero-innovative__visual-dot hero-innovative__visual-dot--red" />
//                 <div className="hero-innovative__visual-dot hero-innovative__visual-dot--yellow" />
//                 <div className="hero-innovative__visual-dot hero-innovative__visual-dot--green" />
//               </div>
//               <div className="hero-innovative__visual-url">
//                 <Zap size={12} color={activeService.color} />
//                 <span>aspl.tech/{activeService.id}</span>
//               </div>
//               <div className="hero-innovative__visual-nav">
//                 <button 
//                   className="hero-innovative__visual-nav-btn"
//                   onClick={() => setActiveTab((prev) => (prev - 1 + serviceTabs.length) % serviceTabs.length)}
//                   aria-label="Previous service"
//                 >
//                   ←
//                 </button>
//                 <button 
//                   className="hero-innovative__visual-nav-btn"
//                   onClick={() => setActiveTab((prev) => (prev + 1) % serviceTabs.length)}
//                   aria-label="Next service"
//                 >
//                   →
//                 </button>
//               </div>
//             </div>

//             {/* Image Container with Transition */}
//             <div className="hero-innovative__visual-body">
//               {/* Loading Skeleton */}
//               {!imageLoaded[activeTab] && (
//                 <div className="hero-innovative__visual-skeleton" />
//               )}
              
//               {/* Background Image */}
//               <div 
//                 className={`hero-innovative__visual-image ${imageLoaded[activeTab] ? 'hero-innovative__visual-image--loaded' : ''}`}
//                 style={{ backgroundImage: `url(${activeService.image})` }}
//                 role="img"
//                 aria-label={activeService.imageAlt}
//               >
//                 {/* Gradient Overlay */}
//                 <div 
//                   className="hero-innovative__visual-overlay"
//                   style={{ background: activeService.overlayGradient }}
//                 />
                
//                 {/* Content Overlay */}
//                 <div className="hero-innovative__visual-content">
//                   {/* Service Icon */}
//                   <div className="hero-innovative__visual-service-icon">
//                     <activeService.icon size={32} color="#fff" />
//                   </div>
                  
//                   {/* Stats Card */}
//                   <div className="hero-innovative__visual-stat-card">
//                     <span className="hero-innovative__visual-stat-value">
//                       {activeService.stats.value}
//                     </span>
//                     <span className="hero-innovative__visual-stat-label">
//                       {activeService.stats.label}
//                     </span>
//                   </div>
                  
//                   {/* Feature Tags */}
//                   <div className="hero-innovative__visual-features-mini">
//                     {activeService.features.slice(0, 3).map((feat, i) => (
//                       <span key={i} className="hero-innovative__visual-feat-tag">
//                         {feat}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Tab Progress Dots */}
//               <div className="hero-innovative__visual-dots-nav">
//                 {serviceTabs.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`hero-innovative__visual-dot-nav ${index === activeTab ? 'hero-innovative__visual-dot-nav--active' : ''}`}
//                     onClick={() => setActiveTab(index)}
//                     style={{
//                       '--dot-color': serviceTabs[index].color,
//                     }}
//                     aria-label={`Go to ${serviceTabs[index].label}`}
//                   />
//                 ))}
//               </div>
//             </div>
      
//           </div>

//           {/* Floating Element 1 - Cost Savings */}
//           <div className="hero-innovative__float hero-innovative__float--1">
//             <div className="hero-innovative__float-card">
//               <div className="hero-innovative__float-icon" style={{ backgroundColor: '#ECFDF5' }}>
//                 <TrendingUp size={16} color="#10B981" />
//               </div>
//               <div className="hero-innovative__float-info">
//                 <span className="hero-innovative__float-value">40%</span>
//                 <span className="hero-innovative__float-label">Cost Reduction</span>
//               </div>
//             </div>
//           </div>

//           {/* Floating Element 2 - Speed */}
//           <div className="hero-innovative__float hero-innovative__float--2">
//             <div className="hero-innovative__float-card">
//               <div className="hero-innovative__float-icon" style={{ backgroundColor: '#FFFBEB' }}>
//                 <Zap size={16} color="#F59E0B" />
//               </div>
//               <div className="hero-innovative__float-info">
//                 <span className="hero-innovative__float-value">3x</span>
//                 <span className="hero-innovative__float-label">Faster Delivery</span>
//               </div>
//             </div>
//           </div>

//           {/* Floating Element 3 - Satisfaction */}
//           <div className="hero-innovative__float hero-innovative__float--3">
//             <div className="hero-innovative__float-card">
//               <div className="hero-innovative__float-icon" style={{ backgroundColor: '#EEF2FF' }}>
//                 <Shield size={16} color="#6366F1" />
//               </div>
//               <div className="hero-innovative__float-info">
//                 <span className="hero-innovative__float-value">98%</span>
//                 <span className="hero-innovative__float-label">Satisfaction</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

     

//       {/* WhatsApp Floating Button */}
//       <a 
//         href={whatsappLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="hero-innovative__whatsapp"
//         aria-label="Chat on WhatsApp"
//       >
//         <div className="hero-innovative__whatsapp-pulse" />
//         <MessageCircle size={22} color="#fff" />
//       </a>
//     </section>
//   );
// };

// export default Hero;/


import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  MessageCircle, 
  Zap,
  Shield,
  TrendingUp,
  Users,
  Play,
  Sparkles,
  Code2,
  Camera,
  GraduationCap,
  Laptop,
  UtensilsCrossed,
  ArrowUpRight,
  Pause,
} from 'lucide-react';
import './Hero.css';

// Import images
import businessImg from '../img/business.jpg';
import hospitalityImg from '../img/event.jpg';
import laptopImg from '../img/laptop.jpg';
import trainingImg from '../img/training.jpg';
import creatorImg from '../img/podcast.jpg';

const Hero = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState({});
  
  const whatsappNumber = "919843406360";
  const whatsappMessage = encodeURIComponent("Hi ASPL Team! I'm interested in growing my business. Let's talk!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % serviceTabs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Preload images
  useEffect(() => {
    const images = [businessImg, hospitalityImg, laptopImg, trainingImg, creatorImg];
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageLoaded(prev => ({ ...prev, [index]: true }));
      };
    });
  }, []);

  const serviceTabs = [
    {
      id: 'business',
      icon: Code2,
      label: 'Business Services',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      color: '#6366F1',
      bgColor: '#EEF2FF',
      image: businessImg,
      imageAlt: 'Web development and digital marketing services',
      stats: { value: '200+', label: 'Projects Delivered' },
      features: ['Web & App Development', 'Digital Marketing & SEO', 'UI/UX Design', 'Cloud Solutions'],
      preview: 'From MVPs to enterprise platforms — we build digital products that scale.',
      overlayGradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.85) 0%, rgba(139, 92, 246, 0.7) 100%)',
    },
    {
      id: 'hospitality',
      icon: UtensilsCrossed,
      label: 'Hospitality & Events',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
      color: '#F59E0B',
      bgColor: '#FFFBEB',
      image: hospitalityImg,
      imageAlt: 'Corporate events and wedding planning services',
      stats: { value: '500+', label: 'Events Managed' },
      features: ['Corporate Events', 'Wedding Planning', 'Catering Services', 'Venue Management'],
      preview: 'End-to-end event orchestration that leaves lasting impressions.',
      overlayGradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.85) 0%, rgba(239, 68, 68, 0.7) 100%)',
    },
    {
      id: 'laptops',
      icon: Laptop,
      label: 'Laptop Solutions',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      color: '#10B981',
      bgColor: '#ECFDF5',
      image: laptopImg,
      imageAlt: 'Refurbished laptops and tech solutions',
      stats: { value: '1000+', label: 'Devices Sold' },
      features: ['Refurbished Laptops', 'Bulk Corporate Orders', 'Service & Warranty', 'Student Discounts'],
      preview: 'Premium refurbished tech with warranty — save up to 60% without compromise.',
      overlayGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.85) 0%, rgba(5, 150, 105, 0.7) 100%)',
    },
    {
      id: 'training',
      icon: GraduationCap,
      label: 'Training & Skills',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
      color: '#3B82F6',
      bgColor: '#EFF6FF',
      image: trainingImg,
      imageAlt: 'Professional training and skill development',
      stats: { value: '10+', label: 'Professional Courses' },
      features: ['Live Project Training', 'Industry Mentorship', 'Portfolio Building', 'Job Assistance'],
      preview: 'Learn by building real products with mentorship from industry pros.',
      overlayGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.85) 0%, rgba(6, 182, 212, 0.7) 100%)',
    },
    {
      id: 'creator',
      icon: Camera,
      label: 'Creator Studio',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
      color: '#EC4899',
      bgColor: '#FDF2F8',
      image: creatorImg,
      imageAlt: 'Podcast and video production studio',
      stats: { value: '50+', label: 'Creators Empowered' },
      features: ['Podcast Production', 'Video Shooting', 'Script Writing', 'Post Production'],
      preview: 'Professional studio setup for creators, brands, and educators.',
      overlayGradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.85) 0%, rgba(139, 92, 246, 0.7) 100%)',
    }
  ];

  const activeService = serviceTabs[activeTab];

  return (
    <section className="hero-innovative" ref={containerRef}>
      
      {/* ============ APPLE-INSPIRED BACKGROUND EFFECTS ============ */}
      <div className="hero-innovative__geometric-bg">
        
        {/* Hexagon Grid */}
        <div className="hero-innovative__hex-grid" />
        
        {/* Geometric Shapes */}
        <div className="hero-innovative__geo-shapes">
          <div className="hero-innovative__geo-shape hero-innovative__geo-shape--hexagon" />
          <div className="hero-innovative__geo-shape hero-innovative__geo-shape--triangle" />
          <div className="hero-innovative__geo-shape hero-innovative__geo-shape--pentagon" />
          <div className="hero-innovative__geo-shape hero-innovative__geo-shape--diamond" />
        </div>
        
        {/* Morphing Orbs */}
        <div className="hero-innovative__morph-orb hero-innovative__morph-orb--1" />
        <div className="hero-innovative__morph-orb hero-innovative__morph-orb--2" />
        <div className="hero-innovative__morph-orb hero-innovative__morph-orb--3" />
        
        {/* Grid Lines */}
        <div className="hero-innovative__grid-lines">
          <div className="hero-innovative__grid-line" />
          <div className="hero-innovative__grid-line" />
          <div className="hero-innovative__grid-line" />
          <div className="hero-innovative__grid-line" />
          <div className="hero-innovative__grid-line hero-innovative__grid-line--vertical" />
          <div className="hero-innovative__grid-line hero-innovative__grid-line--vertical" />
          <div className="hero-innovative__grid-line hero-innovative__grid-line--vertical" />
        </div>
        
        {/* Floating Particles */}
        <div className="hero-innovative__particles">
          <div className="hero-innovative__particle hero-innovative__particle--circle" style={{ left: '10%', top: '20%', animationDuration: '12s', animationDelay: '0s', '--drift-x': '80px', '--drift-y': '-100px' }} />
          <div className="hero-innovative__particle hero-innovative__particle--square" style={{ left: '25%', top: '60%', animationDuration: '15s', animationDelay: '2s', '--drift-x': '-90px', '--drift-y': '70px' }} />
          <div className="hero-innovative__particle hero-innovative__particle--diamond" style={{ left: '40%', top: '15%', animationDuration: '10s', animationDelay: '4s', '--drift-x': '100px', '--drift-y': '-60px' }} />
          <div className="hero-innovative__particle hero-innovative__particle--circle" style={{ left: '55%', top: '75%', animationDuration: '18s', animationDelay: '1s', '--drift-x': '-70px', '--drift-y': '-120px' }} />
          <div className="hero-innovative__particle hero-innovative__particle--square" style={{ left: '70%', top: '30%', animationDuration: '13s', animationDelay: '5s', '--drift-x': '110px', '--drift-y': '90px' }} />
          <div className="hero-innovative__particle hero-innovative__particle--diamond" style={{ left: '85%', top: '50%', animationDuration: '16s', animationDelay: '3s', '--drift-x': '-50px', '--drift-y': '-80px' }} />
          <div className="hero-innovative__particle hero-innovative__particle--circle" style={{ left: '15%', top: '85%', animationDuration: '14s', animationDelay: '6s', '--drift-x': '60px', '--drift-y': '-40px' }} />
          <div className="hero-innovative__particle hero-innovative__particle--square" style={{ left: '50%', top: '45%', animationDuration: '11s', animationDelay: '7s', '--drift-x': '-100px', '--drift-y': '50px' }} />
          <div className="hero-innovative__particle hero-innovative__particle--diamond" style={{ left: '35%', top: '10%', animationDuration: '17s', animationDelay: '8s', '--drift-x': '40px', '--drift-y': '-110px' }} />
          <div className="hero-innovative__particle hero-innovative__particle--circle" style={{ left: '75%', top: '70%', animationDuration: '9s', animationDelay: '9s', '--drift-x': '-80px', '--drift-y': '30px' }} />
          <div className="hero-innovative__particle hero-innovative__particle--square" style={{ left: '5%', top: '40%', animationDuration: '20s', animationDelay: '2.5s', '--drift-x': '120px', '--drift-y': '-90px' }} />
          <div className="hero-innovative__particle hero-innovative__particle--diamond" style={{ left: '60%', top: '90%', animationDuration: '13s', animationDelay: '5.5s', '--drift-x': '-30px', '--drift-y': '-70px' }} />
          <div className="hero-innovative__particle hero-innovative__particle--circle" style={{ left: '90%', top: '15%', animationDuration: '15s', animationDelay: '1.5s', '--drift-x': '70px', '--drift-y': '-50px' }} />
          <div className="hero-innovative__particle hero-innovative__particle--square" style={{ left: '20%', top: '35%', animationDuration: '12s', animationDelay: '7.5s', '--drift-x': '-110px', '--drift-y': '100px' }} />
          <div className="hero-innovative__particle hero-innovative__particle--diamond" style={{ left: '45%', top: '55%', animationDuration: '19s', animationDelay: '3.5s', '--drift-x': '90px', '--drift-y': '-20px' }} />
        </div>
        
        {/* Light Streaks */}
        <div className="hero-innovative__light-streak hero-innovative__light-streak--1" />
        <div className="hero-innovative__light-streak hero-innovative__light-streak--2" />
        
      </div>

      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className={`hero-innovative__cursor ${isHovering ? 'hero-innovative__cursor--hover' : ''}`}
      />

      {/* ============ MAIN HERO CONTENT ============ */}
      <div className="hero-innovative__container">
        
        {/* Left Content */}
        <div className="hero-innovative__content">

          {/* Dynamic Headline */}
          <h1 className="hero-innovative__headline">
            <span className="hero-innovative__headline-static">We turn</span>
            <span className="hero-innovative__headline-rotating">
              <span className="hero-innovative__headline-word" style={{ color: activeService.color }}>
                {activeService.label}
              </span>
            </span>
            <span className="hero-innovative__headline-static">into growth engines</span>
          </h1>

          {/* Description */}
          <p className="hero-innovative__description">
            {activeService.preview}
          </p>

          {/* CTA Stack */}
          <div className="hero-innovative__cta-stack">
            <a href="#contact" className="hero-innovative__cta-primary">
              <span>Start Your Project</span>
              <div className="hero-innovative__cta-icon-circle">
                <ArrowRight size={16} />
              </div>
            </a>
          </div>

        </div>

        {/* Right Visual - Image-Based Dashboard */}
        <div className="hero-innovative__visual">
          
          {/* Main Image Card */}
          <div className="hero-innovative__visual-card">
            
            {/* Card Header with Browser Dots */}
            <div className="hero-innovative__visual-header">
              <div className="hero-innovative__visual-dots">
                <div className="hero-innovative__visual-dot hero-innovative__visual-dot--red" />
                <div className="hero-innovative__visual-dot hero-innovative__visual-dot--yellow" />
                <div className="hero-innovative__visual-dot hero-innovative__visual-dot--green" />
              </div>
              <div className="hero-innovative__visual-url">
                <Zap size={12} color={activeService.color} />
                <span>aspl.tech/{activeService.id}</span>
              </div>
              <div className="hero-innovative__visual-nav">
                <button 
                  className="hero-innovative__visual-nav-btn"
                  onClick={() => setActiveTab((prev) => (prev - 1 + serviceTabs.length) % serviceTabs.length)}
                  aria-label="Previous service"
                >
                  ←
                </button>
                <button 
                  className="hero-innovative__visual-nav-btn"
                  onClick={() => setActiveTab((prev) => (prev + 1) % serviceTabs.length)}
                  aria-label="Next service"
                >
                  →
                </button>
              </div>
            </div>

            {/* Image Container with Transition */}
            <div className="hero-innovative__visual-body">
              {/* Loading Skeleton */}
              {!imageLoaded[activeTab] && (
                <div className="hero-innovative__visual-skeleton" />
              )}
              
              {/* Background Image */}
              <div 
                className={`hero-innovative__visual-image ${imageLoaded[activeTab] ? 'hero-innovative__visual-image--loaded' : ''}`}
                style={{ backgroundImage: `url(${activeService.image})` }}
                role="img"
                aria-label={activeService.imageAlt}
              >
                {/* Gradient Overlay */}
                <div 
                  className="hero-innovative__visual-overlay"
                  style={{ background: activeService.overlayGradient }}
                />
                
                {/* Content Overlay */}
                <div className="hero-innovative__visual-content">
                  {/* Service Icon */}
                  <div className="hero-innovative__visual-service-icon">
                    <activeService.icon size={32} color="#fff" />
                  </div>
                  
                  {/* Stats Card */}
                  <div className="hero-innovative__visual-stat-card">
                    <span className="hero-innovative__visual-stat-value">
                      {activeService.stats.value}
                    </span>
                    <span className="hero-innovative__visual-stat-label">
                      {activeService.stats.label}
                    </span>
                  </div>
                  
                  {/* Feature Tags */}
                  <div className="hero-innovative__visual-features-mini">
                    {activeService.features.slice(0, 3).map((feat, i) => (
                      <span key={i} className="hero-innovative__visual-feat-tag">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tab Progress Dots */}
              <div className="hero-innovative__visual-dots-nav">
                {serviceTabs.map((_, index) => (
                  <button
                    key={index}
                    className={`hero-innovative__visual-dot-nav ${index === activeTab ? 'hero-innovative__visual-dot-nav--active' : ''}`}
                    onClick={() => setActiveTab(index)}
                    style={{
                      '--dot-color': serviceTabs[index].color,
                    }}
                    aria-label={`Go to ${serviceTabs[index].label}`}
                  />
                ))}
              </div>
            </div>
      
          </div>

          {/* Floating Element 1 - Cost Savings */}
          <div className="hero-innovative__float hero-innovative__float--1">
            <div className="hero-innovative__float-card">
              <div className="hero-innovative__float-icon" style={{ backgroundColor: '#ECFDF5' }}>
                <TrendingUp size={16} color="#10B981" />
              </div>
              <div className="hero-innovative__float-info">
                <span className="hero-innovative__float-value">40%</span>
                <span className="hero-innovative__float-label">Cost Reduction</span>
              </div>
            </div>
          </div>

          {/* Floating Element 2 - Speed */}
          <div className="hero-innovative__float hero-innovative__float--2">
            <div className="hero-innovative__float-card">
              <div className="hero-innovative__float-icon" style={{ backgroundColor: '#FFFBEB' }}>
                <Zap size={16} color="#F59E0B" />
              </div>
              <div className="hero-innovative__float-info">
                <span className="hero-innovative__float-value">3x</span>
                <span className="hero-innovative__float-label">Faster Delivery</span>
              </div>
            </div>
          </div>

          {/* Floating Element 3 - Satisfaction */}
          <div className="hero-innovative__float hero-innovative__float--3">
            <div className="hero-innovative__float-card">
              <div className="hero-innovative__float-icon" style={{ backgroundColor: '#EEF2FF' }}>
                <Shield size={16} color="#6366F1" />
              </div>
              <div className="hero-innovative__float-info">
                <span className="hero-innovative__float-value">98%</span>
                <span className="hero-innovative__float-label">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-innovative__whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <div className="hero-innovative__whatsapp-pulse" />
        <MessageCircle size={22} color="#fff" />
      </a>
    </section>
  );
};

export default Hero;











































