// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { 
//   Phone, 
//   MessageCircle, 
//   ArrowRight,
//   Sparkles,
//   X,
//   ChevronDown,
//   Star,
//   Zap,
//   Award,
//   Users,
//   Headphones,
//   ArrowUpRight
// } from 'lucide-react';
// import './Navbar.css';
// import logo from '../img/logo-dark.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState('');
//   const [hoveredService, setHoveredService] = useState(null);
//   const [showServices, setShowServices] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const navRef = useRef(null);
//   const dropdownRef = useRef(null);
//   const servicesTimeout = useRef(null);
//   const rafRef = useRef(null);

//   useEffect(() => {
//     let ticking = false;
//     const handleScroll = () => {
//       if (!ticking) {
//         rafRef.current = requestAnimationFrame(() => {
//           setScrolled(window.scrollY > 20);
//           const sections = ['services', 'strengths', 'partners', 'contact'];
//           for (const section of sections.reverse()) {
//             const element = document.getElementById(section);
//             if (element && window.scrollY >= element.offsetTop - 400) {
//               setActiveLink(section);
//               break;
//             }
//           }
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : '';
//     return () => { document.body.style.overflow = ''; };
//   }, [isOpen]);

//   const handleDropdownMouseMove = useCallback((e) => {
//     if (dropdownRef.current) {
//       const rect = dropdownRef.current.getBoundingClientRect();
//       setMousePos({
//         x: (e.clientX - rect.left) / rect.width,
//         y: (e.clientY - rect.top) / rect.height,
//       });
//     }
//   }, []);

//   // Simplified services — just names and colors
//   const services = [
//     { 
//       name: 'Business',
//       color: '#4F46E5',
//       gradient: 'linear-gradient(135deg, #4F46E5, #A78BFA)',
//       items: ['Web & Apps', 'Marketing', 'UI/UX', 'Compliance', 'Staffing', 'Print']
//     },
//     { 
//       name: 'Hospitality',
//       color: '#EA580C',
//       gradient: 'linear-gradient(135deg, #EA580C, #FDBA74)',
//       items: ['Dining', 'Corporate', 'Weddings', 'Management']
//     },
//     { 
//       name: 'Technology',
//       color: '#059669',
//       gradient: 'linear-gradient(135deg, #059669, #6EE7B7)',
//       items: ['Refurbished', 'Enterprise', 'Support', 'Education']
//     },
//     { 
//       name: 'Training',
//       color: '#0284C7',
//       gradient: 'linear-gradient(135deg, #0284C7, #7DD3FC)',
//       items: ['Marketing', 'Development', 'Design', 'Soft Skills']
//     },
//     { 
//       name: 'Creative',
//       color: '#DB2777',
//       gradient: 'linear-gradient(135deg, #DB2777, #F9A8D4)',
//       items: ['Studio', 'Production', 'Editing', 'Partnership']
//     },
//   ];

//   const navLinks = [
//     { name: 'Strengths', href: '#strengths', icon: Award },
//     { name: 'Partners', href: '#partners', icon: Users },
//   ];

//   const whatsappNumber = "919843406360";
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi ASPL Team! I'd love to discuss a project.")}`;

//   const handleServicesEnter = () => {
//     clearTimeout(servicesTimeout.current);
//     setShowServices(true);
//   };

//   const handleServicesLeave = () => {
//     servicesTimeout.current = setTimeout(() => {
//       setShowServices(false);
//     }, 200);
//   };

//   return (
//     <>
//       <header className={`aether-nav ${scrolled ? 'aether-nav--scrolled' : ''}`} ref={navRef}>
        
//         {/* Floating orbs */}
//         <div className="aether-nav__orb aether-nav__orb--1" />
//         <div className="aether-nav__orb aether-nav__orb--2" />
        
//         <div className="aether-nav__container">
          
//           {/* ========== LOGO ========== */}
//           <a href="#" className="aether-nav__logo" aria-label="ASPL Home">
//             <img src={logo} alt="ASPL" className="aether-nav__logo-img" />
//             <div className="aether-nav__logo-dot" />
//           </a>

//           {/* ========== NAVIGATION ========== */}
//           <nav className="aether-nav__nav">
            
//             {/* Services Trigger */}
//             <div 
//               className="aether-nav__services-wrapper"
//               onMouseEnter={handleServicesEnter}
//               onMouseLeave={handleServicesLeave}
//             >
//               <button 
//                 className={`aether-nav__services-trigger ${showServices ? 'aether-nav__services-trigger--active' : ''}`}
//                 onClick={() => setShowServices(!showServices)}
//                 aria-expanded={showServices}
//               >
//                 <Sparkles size={14} className="aether-nav__sparkle" />
//                 <span>Services</span>
//                 <ChevronDown size={13} className={`aether-nav__chevron ${showServices ? 'aether-nav__chevron--open' : ''}`} />
//               </button>

//               {/* ========== INNOVATIVE DROPDOWN ========== */}
//               <div 
//                 className={`aether-dropdown ${showServices ? 'aether-dropdown--open' : ''}`}
//                 ref={dropdownRef}
//                 onMouseMove={handleDropdownMouseMove}
//                 style={{ '--mouse-x': mousePos.x, '--mouse-y': mousePos.y }}
//               >
//                 {/* Cursor glow */}
//                 <div 
//                   className="aether-dropdown__cursor-glow"
//                   style={{
//                     left: `${mousePos.x * 100}%`,
//                     top: `${mousePos.y * 100}%`,
//                   }}
//                 />

//                 <div className="aether-dropdown__inner">
                  
//                   {/* Visual service cards — one per category */}
//                   <div className="aether-dropdown__grid">
//                     {services.map((service, i) => {
//                       const isHovered = hoveredService === i;
//                       return (
//                         <a
//                           key={i}
//                           href="#services"
//                           className={`aether-dropdown__card ${isHovered ? 'aether-dropdown__card--hovered' : ''}`}
//                           onMouseEnter={() => setHoveredService(i)}
//                           onMouseLeave={() => setHoveredService(null)}
//                           onClick={() => setShowServices(false)}
//                           style={{
//                             '--card-color': service.color,
//                             '--card-gradient': service.gradient,
//                           }}
//                         >
//                           {/* Background gradient reveal */}
//                           <div className="aether-dropdown__card-bg" />
                          
//                           {/* Service name */}
//                           <h4 className="aether-dropdown__card-title">
//                             {service.name}
//                           </h4>
                          
//                           {/* Mini tag cloud */}
//                           <div className="aether-dropdown__card-tags">
//                             {service.items.slice(0, 4).map((item, j) => (
//                               <span 
//                                 key={j} 
//                                 className="aether-dropdown__card-tag"
//                                 style={{ 
//                                   '--tag-delay': `${j * 0.05}s`
//                                 }}
//                               >
//                                 {item}
//                               </span>
//                             ))}
//                           </div>
                          
//                           {/* Hover indicator */}
//                           <span className="aether-dropdown__card-indicator" style={{ color: service.color }}>
//                             <ArrowUpRight size={14} strokeWidth={2} />
//                           </span>
//                         </a>
//                       );
//                     })}
//                   </div>

//                   {/* Trust pulse */}
//                   <div className="aether-dropdown__trust">
//                     <div className="aether-dropdown__trust-item">
//                       <Star size={12} fill="#F59E0B" color="#F59E0B" />
//                       <span>4.9 Rating</span>
//                     </div>
//                     <div className="aether-dropdown__trust-item">
//                       <Zap size={12} color="#4F46E5" />
//                       <span>200+ Projects</span>
//                     </div>
//                     <div className="aether-dropdown__trust-item">
//                       <Users size={12} color="#059669" />
//                       <span>50+ Experts</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Links */}
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className={`aether-nav__link ${activeLink === link.href.replace('#', '') ? 'aether-nav__link--active' : ''}`}
//               >
//                 <link.icon size={13} />
//                 <span>{link.name}</span>
//               </a>
//             ))}
//           </nav>

//           {/* ========== ACTIONS ========== */}
//           <div className="aether-nav__actions">
//             <a href="tel:9843406360" className="aether-nav__icon" title="Call">
//               <Phone size={16} strokeWidth={1.8} />
//             </a>
//             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="aether-nav__icon aether-nav__icon--whatsapp" title="WhatsApp">
//               <MessageCircle size={16} strokeWidth={1.8} />
//             </a>
//             <a href="#contact" className="aether-nav__cta">
//               <span>Contact</span>
//               <ArrowRight size={14} strokeWidth={2} />
//             </a>
//             <button 
//               className={`aether-nav__burger ${isOpen ? 'aether-nav__burger--open' : ''}`}
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Menu"
//             >
//               <span /><span /><span />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* ========== MOBILE MENU ========== */}
//       <div className={`aether-mobile ${isOpen ? 'aether-mobile--open' : ''}`}>
//         <div className="aether-mobile__backdrop" onClick={() => setIsOpen(false)} />
//         <div className="aether-mobile__panel">
//           <div className="aether-mobile__header">
//             <img src={logo} alt="ASPL" className="aether-mobile__logo" />
//             <button className="aether-mobile__close" onClick={() => setIsOpen(false)}>
//               <X size={20} strokeWidth={1.8} />
//             </button>
//           </div>

//           <div className="aether-mobile__section">
//             <span className="aether-mobile__label">Services</span>
//             {services.map((service, i) => (
//               <a
//                 key={i}
//                 href="#services"
//                 className="aether-mobile__card"
//                 onClick={() => setIsOpen(false)}
//                 style={{ animationDelay: `${i * 0.05}s` }}
//               >
//                 <span className="aether-mobile__card-color" style={{ background: service.color }} />
//                 <span className="aether-mobile__card-name">{service.name}</span>
//                 <span className="aether-mobile__card-count">{service.items.length} services</span>
//               </a>
//             ))}
//           </div>

//           <div className="aether-mobile__section">
//             <span className="aether-mobile__label">Navigate</span>
//             {navLinks.map((link, i) => (
//               <a key={i} href={link.href} className="aether-mobile__link" onClick={() => setIsOpen(false)} style={{ animationDelay: `${(i + 5) * 0.05}s` }}>
//                 <link.icon size={15} strokeWidth={1.8} />
//                 <span>{link.name}</span>
//               </a>
//             ))}
//             <a href="#contact" className="aether-mobile__link aether-mobile__link--accent" onClick={() => setIsOpen(false)} style={{ animationDelay: '0.4s' }}>
//               <Headphones size={15} strokeWidth={1.8} />
//               <span>Contact</span>
//             </a>
//           </div>

//           <div className="aether-mobile__actions">
//             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="aether-mobile__action aether-mobile__action--whatsapp">
//               <MessageCircle size={18} />
//               <div><span>WhatsApp</span><small>Instant reply</small></div>
//             </a>
//             <a href="tel:9843406360" className="aether-mobile__action aether-mobile__action--call">
//               <Phone size={18} />
//               <div><span>9843406360</span><small>Mon–Sat, 9AM–7PM</small></div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;














// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { 
//   Phone, 
//   MessageCircle, 
//   ArrowRight,
//   Sparkles,
//   X,
//   ChevronDown,
//   Star,
//   Zap,
//   Award,
//   Users,
//   Headphones,
//   ArrowUpRight,
//   Briefcase,
//   Info
// } from 'lucide-react';
// import './Navbar.css';
// import logo from '../img/logo-dark.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [activeLink, setActiveLink] = useState('');
//   const [hoveredService, setHoveredService] = useState(null);
//   const [showServices, setShowServices] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const navRef = useRef(null);
//   const dropdownRef = useRef(null);
//   const servicesTimeout = useRef(null);
//   const lastScrollY = useRef(0);
//   const rafRef = useRef(null);

//   useEffect(() => {
//     let ticking = false;
//     const handleScroll = () => {
//       if (!ticking) {
//         rafRef.current = requestAnimationFrame(() => {
//           const currentScroll = window.scrollY;
          
//           if (currentScroll > lastScrollY.current && currentScroll > 400) {
//             setHidden(true);
//           } else {
//             setHidden(false);
//           }
//           lastScrollY.current = currentScroll;
          
//           setScrolled(currentScroll > 60);
          
//           const sections = ['services', 'strengths', 'partners', 'contact', 'about', 'careers'];
//           for (const section of sections.reverse()) {
//             const element = document.getElementById(section);
//             if (element && currentScroll >= element.offsetTop - 500) {
//               setActiveLink(section);
//               break;
//             }
//           }
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : '';
//     return () => { document.body.style.overflow = ''; };
//   }, [isOpen]);

//   const handleDropdownMouseMove = useCallback((e) => {
//     if (dropdownRef.current) {
//       const rect = dropdownRef.current.getBoundingClientRect();
//       setMousePos({
//         x: (e.clientX - rect.left) / rect.width,
//         y: (e.clientY - rect.top) / rect.height,
//       });
//     }
//   }, []);

//   const services = [
//     { 
//       name: 'Business',
//       color: '#4F46E5',
//       gradient: 'linear-gradient(135deg, #4F46E5, #A78BFA)',
//       items: ['Web & Apps', 'Marketing', 'UI/UX', 'Compliance', 'Staffing', 'Print']
//     },
//     { 
//       name: 'Hospitality',
//       color: '#EA580C',
//       gradient: 'linear-gradient(135deg, #EA580C, #FDBA74)',
//       items: ['Dining', 'Corporate', 'Weddings', 'Management']
//     },
//     { 
//       name: 'Technology',
//       color: '#059669',
//       gradient: 'linear-gradient(135deg, #059669, #6EE7B7)',
//       items: ['Refurbished', 'Enterprise', 'Support', 'Education']
//     },
//     { 
//       name: 'Training',
//       color: '#0284C7',
//       gradient: 'linear-gradient(135deg, #0284C7, #7DD3FC)',
//       items: ['Marketing', 'Development', 'Design', 'Soft Skills']
//     },
//     { 
//       name: 'Creative',
//       color: '#DB2777',
//       gradient: 'linear-gradient(135deg, #DB2777, #F9A8D4)',
//       items: ['Studio', 'Production', 'Editing', 'Partnership']
//     },
//   ];

//   const navLinks = [
//     { name: 'About', href: '#about', icon: Info },
//     { name: 'Careers', href: '#careers', icon: Briefcase },
//     { name: 'Strengths', href: '#strengths', icon: Award },
//     { name: 'Partners', href: '#partners', icon: Users },
//   ];

//   const whatsappNumber = "919843406360";
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi ASPL Team! I'd love to discuss a project.")}`;

//   const handleServicesEnter = () => {
//     clearTimeout(servicesTimeout.current);
//     setShowServices(true);
//   };

//   const handleServicesLeave = () => {
//     servicesTimeout.current = setTimeout(() => {
//       setShowServices(false);
//     }, 200);
//   };

//   return (
//     <>
//       <header 
//         className={`aether-nav ${scrolled ? 'aether-nav--scrolled' : ''} ${hidden ? 'aether-nav--hidden' : ''}`} 
//         ref={navRef}
//       >
        
//         {/* Floating orbs — visible only when scrolled */}
//         <div className="aether-nav__orb aether-nav__orb--1" />
//         <div className="aether-nav__orb aether-nav__orb--2" />
        
//         <div className="aether-nav__container">
          
//           {/* ========== LOGO ========== */}
//           <a href="#" className="aether-nav__logo" aria-label="ASPL Home">
//             <img src={logo} alt="ASPL" className="aether-nav__logo-img" />
//             <div className="aether-nav__logo-dot" />
//           </a>

//           {/* ========== NAVIGATION ========== */}
//           <nav className="aether-nav__nav">
            
//             {/* Services Dropdown Trigger */}
//             <div 
//               className="aether-nav__services-wrapper"
//               onMouseEnter={handleServicesEnter}
//               onMouseLeave={handleServicesLeave}
//             >
//               <button 
//                 className={`aether-nav__services-trigger ${showServices ? 'aether-nav__services-trigger--active' : ''}`}
//                 onClick={() => setShowServices(!showServices)}
//                 aria-expanded={showServices}
//               >
//                 <Sparkles size={14} className="aether-nav__sparkle" />
//                 <span>Services</span>
//                 <ChevronDown size={13} className={`aether-nav__chevron ${showServices ? 'aether-nav__chevron--open' : ''}`} />
//               </button>

//               {/* ========== MEGAMENU DROPDOWN ========== */}
//               <div 
//                 className={`aether-dropdown ${showServices ? 'aether-dropdown--open' : ''}`}
//                 ref={dropdownRef}
//                 onMouseMove={handleDropdownMouseMove}
//                 style={{ '--mouse-x': mousePos.x, '--mouse-y': mousePos.y }}
//               >
//                 {/* Cursor glow */}
//                 <div 
//                   className="aether-dropdown__cursor-glow"
//                   style={{
//                     left: `${mousePos.x * 100}%`,
//                     top: `${mousePos.y * 100}%`,
//                   }}
//                 />

//                 <div className="aether-dropdown__inner">
                  
//                   {/* Header */}
//                   <div className="aether-dropdown__header">
//                     <div>
//                       <span className="aether-dropdown__kicker">Our Ecosystem</span>
//                       <h3 className="aether-dropdown__title">What can we build for you?</h3>
//                     </div>
//                     <a href="#services" className="aether-dropdown__view-all" onClick={() => setShowServices(false)}>
//                       View all services <ArrowUpRight size={13} />
//                     </a>
//                   </div>

//                   {/* Service cards */}
//                   <div className="aether-dropdown__grid">
//                     {services.map((service, i) => {
//                       const isHovered = hoveredService === i;
//                       return (
//                         <a
//                           key={i}
//                           href="#services"
//                           className={`aether-dropdown__card ${isHovered ? 'aether-dropdown__card--hovered' : ''}`}
//                           onMouseEnter={() => setHoveredService(i)}
//                           onMouseLeave={() => setHoveredService(null)}
//                           onClick={() => setShowServices(false)}
//                           style={{
//                             '--card-color': service.color,
//                             '--card-gradient': service.gradient,
//                           }}
//                         >
//                           <div className="aether-dropdown__card-bg" />
                          
                        
                          
//                           <h4 className="aether-dropdown__card-title" style={{ color: service.color }}>
//                             {service.name}
//                           </h4>
                          
//                           <div className="aether-dropdown__card-tags">
//                             {service.items.slice(0, 4).map((item, j) => (
//                               <span 
//                                 key={j} 
//                                 className="aether-dropdown__card-tag"
//                                 style={{ '--tag-delay': `${j * 0.04}s` }}
//                               >
//                                 {item}
//                               </span>
//                             ))}
//                           </div>
                          
//                           <span className="aether-dropdown__card-arrow" style={{ color: service.color }}>
//                             <ArrowUpRight size={14} strokeWidth={2} />
//                           </span>
//                         </a>
//                       );
//                     })}
//                   </div>

              
//                 </div>
//               </div>
//             </div>

//             {/* Standard Nav Links */}
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className={`aether-nav__link ${activeLink === link.href.replace('#', '') ? 'aether-nav__link--active' : ''}`}
//               >
//                 <link.icon size={14} strokeWidth={1.8} />
//                 <span>{link.name}</span>
//               </a>
//             ))}
//           </nav>

//           {/* ========== ACTIONS ========== */}
//           <div className="aether-nav__actions">
//             <a href="tel:9843406360" className="aether-nav__icon" title="Call us">
//               <Phone size={17} strokeWidth={1.8} />
//             </a>
//             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="aether-nav__icon aether-nav__icon--whatsapp" title="WhatsApp">
//               <MessageCircle size={17} strokeWidth={1.8} />
//             </a>
//             <a href="#contact" className="aether-nav__cta">
//               <span>Contact</span>
//               <ArrowRight size={15} strokeWidth={2} />
//               <span className="aether-nav__cta-shimmer" />
//             </a>
//             <button 
//               className={`aether-nav__burger ${isOpen ? 'aether-nav__burger--open' : ''}`}
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Menu"
//             >
//               <span /><span /><span />
//             </button>
//           </div>
//         </div>

//         {/* Bottom edge */}
//         <div className="aether-nav__edge" />
//       </header>

//       {/* ========== MOBILE MENU ========== */}
//       <div className={`aether-mobile ${isOpen ? 'aether-mobile--open' : ''}`}>
//         <div className="aether-mobile__backdrop" onClick={() => setIsOpen(false)} />
//         <div className="aether-mobile__panel">
//           <div className="aether-mobile__header">
//             <img src={logo} alt="ASPL" className="aether-mobile__logo" />
//             <button className="aether-mobile__close" onClick={() => setIsOpen(false)}>
//               <X size={20} strokeWidth={1.8} />
//             </button>
//           </div>

   

//           {/* Links */}
//           <div className="aether-mobile__section">
//             <span className="aether-mobile__label">Navigate</span>
//             {navLinks.map((link, i) => (
//               <a 
//                 key={i} 
//                 href={link.href} 
//                 className="aether-mobile__link" 
//                 onClick={() => setIsOpen(false)} 
//                 style={{ animationDelay: `${(i + 5) * 0.05}s` }}
//               >
//                 <link.icon size={16} strokeWidth={1.8} />
//                 <span>{link.name}</span>
//                 <ArrowRight size={13} />
//               </a>
//             ))}
//             <a 
//               href="#contact" 
//               className="aether-mobile__link aether-mobile__link--accent" 
//               onClick={() => setIsOpen(false)} 
//               style={{ animationDelay: '0.45s' }}
//             >
//               <Headphones size={16} strokeWidth={1.8} />
//               <span>Contact Us</span>
//               <ArrowRight size={13} />
//             </a>
//           </div>

//           {/* Actions */}
//           <div className="aether-mobile__actions">
//             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="aether-mobile__action aether-mobile__action--whatsapp">
//               <MessageCircle size={19} strokeWidth={1.8} />
//               <div><span>WhatsApp</span><small>Instant response</small></div>
//             </a>
//             <a href="tel:9843406360" className="aether-mobile__action aether-mobile__action--call">
//               <Phone size={19} strokeWidth={1.8} />
//               <div><span>9843406360</span><small>Mon–Sat · 9AM–7PM</small></div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;





























import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MessageCircle, 
  ArrowRight,
  X,
  ChevronDown,
} from 'lucide-react';
import './Navbar.css';
import logo from '../img/logo-dark.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const rafRef = useRef(null);
  const closeTimeout = useRef(null);

  const services = [
    { name: 'Business', color: '#4F46E5', items: ['Web & Apps', 'Marketing', 'UI/UX', 'Compliance', 'Staffing', 'Print'] },
    { name: 'Hospitality', color: '#EA580C', items: ['Dining', 'Corporate', 'Weddings', 'Management'] },
    { name: 'Technology', color: '#059669', items: ['Refurbished', 'Enterprise', 'Support', 'Education'] },
    { name: 'Training', color: '#0284C7', items: ['Marketing', 'Development', 'Design', 'Soft Skills'] },
    { name: 'Creative', color: '#DB2777', items: ['Studio', 'Production', 'Editing', 'Partnership'] },
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Strengths', href: '#strengths' },
    { name: 'Partners', href: '#partners' },
  ];

  const whatsappLink = `https://wa.me/919843406360?text=${encodeURIComponent("Hi ASPL Team! I'd love to discuss a project.")}`;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          const current = window.scrollY;
          if (current > lastScrollY.current && current > 400) setHidden(true);
          else setHidden(false);
          lastScrollY.current = current;
          setScrolled(current > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${hidden ? 'nav--hidden' : ''}`} ref={navRef}>
        <div className="nav__wrap">
          
          {/* Logo */}
          <a href="#" className="nav__logo" aria-label="ASPL Home">
            <img src={logo} alt="ASPL" className="nav__logo-img" />
          </a>

          {/* Desktop Navigation */}
          <nav className="nav__links">
            
            {/* Services Megamenu */}
            <div 
              className="nav__dd"
              onMouseEnter={() => { clearTimeout(closeTimeout.current); setShowServices(true); }}
              onMouseLeave={() => { closeTimeout.current = setTimeout(() => setShowServices(false), 150); }}
            >
              <button 
                className={`nav__dd-trigger ${showServices ? 'nav__dd-trigger--open' : ''}`}
                onClick={() => setShowServices(!showServices)}
              >
                Services
                <ChevronDown size={14} className={`nav__dd-chev ${showServices ? 'nav__dd-chev--open' : ''}`} />
              </button>

              <div className={`nav__menu ${showServices ? 'nav__menu--open' : ''}`}>
                <div className="nav__menu-inner">
                  <div className="nav__menu-grid">
                    {services.map((s, i) => (
                      <a
                        key={i}
                        href="#services"
                        className="nav__menu-card"
                        onClick={() => setShowServices(false)}
                      >
                        <h4 className="nav__menu-name" style={{ color: s.color }}>{s.name}</h4>
                        <div className="nav__menu-tags">
                          {s.items.slice(0, 4).map((item, j) => (
                            <span key={j} className="nav__menu-tag">{item}</span>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>
                  <a href="#services" className="nav__menu-all" onClick={() => setShowServices(false)}>
                    View all services <ArrowRight size={13} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>

            {/* Regular Links */}
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav__link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="nav__actions">
            <a href="tel:9843406360" className="nav__icon" aria-label="Call">
              <Phone size={16} strokeWidth={1.8} />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="nav__icon nav__icon--wa" aria-label="WhatsApp">
              <MessageCircle size={16} strokeWidth={1.8} />
            </a>
            <a href="#contact" className="nav__cta">
              Contact
              <ArrowRight size={14} strokeWidth={2} />
            </a>
            
            {/* Mobile Burger */}
            <button 
              className={`nav__burger ${isOpen ? 'nav__burger--open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`nav__mob ${isOpen ? 'nav__mob--open' : ''}`}>
        <div className="nav__mob-backdrop" onClick={() => setIsOpen(false)} />
        <div className="nav__mob-panel">
          
          {/* <div className="nav__mob-head">
            <img src={logo} alt="ASPL" className="nav__mob-logo" />
            <button className="nav__mob-close" onClick={() => setIsOpen(false)}>
              <X size={18} strokeWidth={1.8} />
            </button>
          </div> */}

       

          {/* Links */}
          <div className="nav__mob-section">
            <span className="nav__mob-label"></span>
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="nav__mob-link"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${(i + 5) * 0.04}s` }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="nav__mob-link nav__mob-link--cta"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </a>
          </div>

          {/* Contact buttons */}
          <div className="nav__mob-btns">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="nav__mob-btn nav__mob-btn--wa">
              <MessageCircle size={16} strokeWidth={1.8} />
              WhatsApp
            </a>
            <a href="tel:9843406360" className="nav__mob-btn nav__mob-btn--call">
              <Phone size={16} strokeWidth={1.8} />
              Call us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;