// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { 
//   Star, 
//   Quote, 
//   ChevronLeft, 
//   ChevronRight,
//   Sparkles,
//   Building2,
//   GraduationCap,
//   Briefcase,
//   ArrowRight,
//   Users,
//   Award
// } from 'lucide-react';
// import './Testimonials.css';

// const Testimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [visibleTestimonials, setVisibleTestimonials] = useState([]);
//   const intervalRef = useRef(null);
//   const trackRef = useRef(null);
//   const sectionRef = useRef(null);

//   const testimonials = [
//     {
//       id: 1,
//       name: 'Rajesh Kumar',
//       role: 'CEO, TechVentures India',
//       company: 'TechVentures India',
//       content: 'ASPL transformed our digital presence completely. Their end-to-end approach saved us months of coordination with multiple vendors. The team\'s technical expertise and commitment to deadlines exceeded our expectations.',
//       rating: 5,
//       icon: Building2,
//       color: '#6366F1',
//       bgColor: '#EEF2FF',
//       project: 'Web & App Development',
//       metrics: { label: 'Time Saved', value: '3 Months' }
//     },
//     {
//       id: 2,
//       name: 'Priya Sharma',
//       role: 'Marketing Head, EduLearn',
//       company: 'EduLearn',
//       content: 'The training programs are outstanding. Our team upgraded their skills with real projects, not just theory. The mentorship from industry professionals made all the difference in practical learning.',
//       rating: 5,
//       icon: GraduationCap,
//       color: '#0EA5E9',
//       bgColor: '#F0F9FF',
//       project: 'Training & Development',
//       metrics: { label: 'Team Trained', value: '25+' }
//     },
//     {
//       id: 3,
//       name: 'Arun Patel',
//       role: 'Founder, StartupX',
//       company: 'StartupX',
//       content: 'From website to branding to compliance — everything handled flawlessly. A true one-stop solution that helped us launch 2 weeks ahead of schedule. Their flexible engagement model was perfect for our startup budget.',
//       rating: 5,
//       icon: Briefcase,
//       color: '#10B981',
//       bgColor: '#ECFDF5',
//       project: 'Business Services',
//       metrics: { label: 'Ahead of Schedule', value: '2 Weeks' }
//     },
//     {
//       id: 4,
//       name: 'Meera Reddy',
//       role: 'Director, InnovateCorp',
//       company: 'InnovateCorp',
//       content: 'The event management team pulled off our annual conference flawlessly. 500+ attendees, zero hiccups. Their attention to detail and creative approach made it our most successful event yet.',
//       rating: 5,
//       icon: Award,
//       color: '#F59E0B',
//       bgColor: '#FFFBEB',
//       project: 'Hospitality & Events',
//       metrics: { label: 'Attendees', value: '500+' }
//     },
//     {
//       id: 5,
//       name: 'Vikram Singh',
//       role: 'Content Creator, YouTube',
//       company: 'Creator Economy',
//       content: 'The podcast studio setup is world-class. From lighting to editing, their team handles everything. My production quality improved dramatically, and my audience has doubled since working with ASPL.',
//       rating: 5,
//       icon: Users,
//       color: '#EC4899',
//       bgColor: '#FDF2F8',
//       project: 'Creator Studio',
//       metrics: { label: 'Audience Growth', value: '2x' }
//     },
//   ];

//   const totalSlides = testimonials.length;

//   // Auto-advance carousel
//   const startInterval = useCallback(() => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       if (!isPaused) {
//         setDirection(1);
//         setActiveIndex((prev) => (prev + 1) % totalSlides);
//       }
//     }, 5000);
//   }, [isPaused, totalSlides]);

//   useEffect(() => {
//     startInterval();
//     return () => clearInterval(intervalRef.current);
//   }, [startInterval]);

//   // Update visible testimonials for the slider
//   useEffect(() => {
//     const visible = [];
//     for (let i = -1; i <= 1; i++) {
//       const index = (activeIndex + i + totalSlides) % totalSlides;
//       visible.push({ ...testimonials[index], position: i });
//     }
//     setVisibleTestimonials(visible);
//   }, [activeIndex]);

//   const handlePrev = () => {
//     setDirection(-1);
//     setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   const handleNext = () => {
//     setDirection(1);
//     setActiveIndex((prev) => (prev + 1) % totalSlides);
//   };

//   const handleDotClick = (index) => {
//     setDirection(index > activeIndex ? 1 : -1);
//     setActiveIndex(index);
//   };

//   const activeTestimonial = testimonials[activeIndex];

//   return (
//     <section id="testimonials" className="testimonials-premium" ref={sectionRef}>
      
//       {/* Background */}
//       <div className="testimonials-premium__bg">
//         <div className="testimonials-premium__bg-orb testimonials-premium__bg-orb--1" />
//         <div className="testimonials-premium__bg-orb testimonials-premium__bg-orb--2" />
//       </div>

//       <div className="testimonials-premium__container">
        
//         {/* ============ SECTION HEADER ============ */}
//         <div className="testimonials-premium__header">
//           <div className="testimonials-premium__badge">
//             <Sparkles size={14} />
//             <span>Client Stories</span>
//           </div>

//           <h2 className="testimonials-premium__title">
//             Trusted by
//             <span className="testimonials-premium__title-gradient"> visionaries</span>
//           </h2>
          
//           <p className="testimonials-premium__subtitle">
//             Real stories from real clients who've experienced the ASPL difference across our five core verticals.
//           </p>
//         </div>

//         {/* ============ CAROUSEL ============ */}
//         <div 
//           className="testimonials-premium__carousel"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
          
//           {/* Main Testimonial Card */}
//           <div className="testimonials-premium__main">
            
//             {/* Navigation Arrows */}
//             <button 
//               className="testimonials-premium__arrow testimonials-premium__arrow--prev"
//               onClick={handlePrev}
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft size={20} />
//             </button>

//             <div className="testimonials-premium__card">
//               {/* Quote Icon */}
//               <div className="testimonials-premium__quote-icon" style={{ color: activeTestimonial.color }}>
//                 <Quote size={48} />
//               </div>

//               <div className="testimonials-premium__card-grid">
                
//                 {/* Left: Content */}
//                 <div className="testimonials-premium__card-content">
//                   {/* Stars */}
//                   <div className="testimonials-premium__stars">
//                     {[...Array(activeTestimonial.rating)].map((_, i) => (
//                       <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
//                     ))}
//                   </div>

//                   {/* Testimonial Text */}
//                   <blockquote className="testimonials-premium__text">
//                     "{activeTestimonial.content}"
//                   </blockquote>

//                   {/* Author */}
//                   <div className="testimonials-premium__author">
//                     <div 
//                       className="testimonials-premium__author-avatar"
//                       style={{ backgroundColor: activeTestimonial.bgColor, color: activeTestimonial.color }}
//                     >
//                       {activeTestimonial.name.split(' ').map(n => n[0]).join('')}
//                     </div>
//                     <div className="testimonials-premium__author-info">
//                       <span className="testimonials-premium__author-name">{activeTestimonial.name}</span>
//                       <span className="testimonials-premium__author-role">{activeTestimonial.role}</span>
//                     </div>
//                   </div>

//                   {/* Project Tag */}
//                   <div 
//                     className="testimonials-premium__project-tag"
//                     style={{ backgroundColor: activeTestimonial.bgColor, color: activeTestimonial.color }}
//                   >
//                     <activeTestimonial.icon size={14} />
//                     <span>{activeTestimonial.project}</span>
//                   </div>
//                 </div>

//                 {/* Right: Visual & Metric */}
//                 <div 
//                   className="testimonials-premium__card-visual"
//                   style={{ backgroundColor: activeTestimonial.bgColor }}
//                 >
//                   {/* Large Company Icon */}
//                   <div className="testimonials-premium__card-visual-icon">
//                     <activeTestimonial.icon size={64} color={activeTestimonial.color} opacity={0.3} />
//                   </div>

//                   {/* Metric Card */}
//                   <div className="testimonials-premium__metric">
//                     <span className="testimonials-premium__metric-value" style={{ color: activeTestimonial.color }}>
//                       {activeTestimonial.metrics.value}
//                     </span>
//                     <span className="testimonials-premium__metric-label">{activeTestimonial.metrics.label}</span>
//                   </div>

//                   {/* Company Name */}
//                   <div className="testimonials-premium__company">
//                     <Building2 size={14} color={activeTestimonial.color} />
//                     <span>{activeTestimonial.company}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <button 
//               className="testimonials-premium__arrow testimonials-premium__arrow--next"
//               onClick={handleNext}
//               aria-label="Next testimonial"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>

//           {/* Dots Navigation */}
//           <div className="testimonials-premium__dots">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 className={`testimonials-premium__dot ${index === activeIndex ? 'testimonials-premium__dot--active' : ''}`}
//                 onClick={() => handleDotClick(index)}
//                 aria-label={`Go to testimonial ${index + 1}`}
//                 style={{
//                   '--dot-color': testimonials[index].color,
//                 }}
//               >
//                 {index === activeIndex && (
//                   <span className="testimonials-premium__dot-progress" />
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* Preview Strip */}
//           <div className="testimonials-premium__preview-strip">
//             {testimonials.map((item, index) => (
//               <button
//                 key={item.id}
//                 className={`testimonials-premium__preview ${index === activeIndex ? 'testimonials-premium__preview--active' : ''}`}
//                 onClick={() => handleDotClick(index)}
//                 style={{
//                   '--preview-color': item.color,
//                   '--preview-bg': item.bgColor,
//                 }}
//               >
//                 <div 
//                   className="testimonials-premium__preview-avatar"
//                   style={{ backgroundColor: item.bgColor, color: item.color }}
//                 >
//                   {item.name.split(' ').map(n => n[0]).join('')}
//                 </div>
//                 <div className="testimonials-premium__preview-info">
//                   <span className="testimonials-premium__preview-name">{item.name.split(' ')[0]}</span>
//                   <span className="testimonials-premium__preview-role">{item.project}</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ============ BOTTOM CTA ============ */}
//         <div className="testimonials-premium__cta">
//           <p className="testimonials-premium__cta-text">
//             Join 200+ satisfied clients across India
//           </p>
//           <a href="#contact" className="testimonials-premium__cta-btn">
//             <span>Start Your Success Story</span>
//             <ArrowRight size={16} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;













// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { 
//   Star, 
//   Quote, 
//   ChevronLeft, 
//   ChevronRight,
//   Sparkles,
//   Building2,
//   GraduationCap,
//   Briefcase,
//   ArrowRight,
//   Users,
//   Award
// } from 'lucide-react';
// import './Testimonials.css';

// const Testimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const intervalRef = useRef(null);
//   const sectionRef = useRef(null);
//   const cardRef = useRef(null);

//   const testimonials = [
//     {
//       id: 1,
//       name: 'Rajesh Kumar',
//       role: 'CEO, TechVentures India',
//       content: 'ASPL transformed our digital presence completely. Their end-to-end approach saved us months of coordination. The team\'s technical expertise and commitment to deadlines exceeded our expectations.',
//       rating: 5,
//       color: '#4F46E5',
//       project: 'Web & App Development',
//       metric: { value: '3 Months', label: 'Saved' }
//     },
//     {
//       id: 2,
//       name: 'Priya Sharma',
//       role: 'Marketing Head, EduLearn',
//       content: 'The training programs are outstanding. Our team upgraded their skills with real projects, not just theory. The mentorship from industry professionals made all the difference.',
//       rating: 5,
//       color: '#0284C7',
//       project: 'Training & Development',
//       metric: { value: '25+', label: 'Trained' }
//     },
//     {
//       id: 3,
//       name: 'Arun Patel',
//       role: 'Founder, StartupX',
//       content: 'From website to branding to compliance — everything handled flawlessly. A true one-stop solution that helped us launch ahead of schedule. Perfect for our startup budget.',
//       rating: 5,
//       color: '#059669',
//       project: 'Business Services',
//       metric: { value: '2 Weeks', label: 'Early' }
//     },
//     {
//       id: 4,
//       name: 'Meera Reddy',
//       role: 'Director, InnovateCorp',
//       content: 'The event management team pulled off our annual conference flawlessly. 500+ attendees, zero hiccups. Their attention to detail made it our most successful event yet.',
//       rating: 5,
//       color: '#EA580C',
//       project: 'Hospitality & Events',
//       metric: { value: '500+', label: 'Attendees' }
//     },
//     {
//       id: 5,
//       name: 'Vikram Singh',
//       role: 'Content Creator',
//       content: 'The podcast studio is world-class. From lighting to editing, their team handles everything. My production quality improved dramatically, and my audience has doubled.',
//       rating: 5,
//       color: '#DB2777',
//       project: 'Creator Studio',
//       metric: { value: '2x', label: 'Growth' }
//     },
//   ];

//   const active = testimonials[activeIndex];

//   // Auto-advance
//   const startInterval = useCallback(() => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       if (!isPaused) {
//         setActiveIndex((prev) => (prev + 1) % testimonials.length);
//       }
//     }, 5000);
//   }, [isPaused]);

//   useEffect(() => {
//     startInterval();
//     return () => clearInterval(intervalRef.current);
//   }, [startInterval]);

//   // Intersection observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setVisible(true); },
//       { threshold: 0.15 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);

//   return (
//     <section id="testimonials" className="tst" ref={sectionRef}>
      
//       {/* Living background */}
//       <div className="tst__bg">
//         <div className="tst__bg-orb tst__bg-orb--1" />
//         <div className="tst__bg-orb tst__bg-orb--2" />
//       </div>

//       <div className={`tst__wrap ${visible ? 'tst__wrap--in' : ''}`}>
        
//         {/* Header */}
//         <header className="tst__header">
//           <span className="tst__header-kicker">
//             <span className="tst__header-kicker-line" />
//             Client Stories
//           </span>
//           <h2 className="tst__header-title">
//             Trusted by
//             <span className="tst__header-title-accent"> visionaries</span>
//           </h2>
//         </header>

//         {/* Carousel */}
//         <div 
//           className="tst__carousel"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
          
//           {/* Main card */}
//           <div className="tst__card" ref={cardRef} key={activeIndex}>
            
//             {/* Quote mark */}
//             <div className="tst__card-quote" style={{ color: active.color }}>
//               <Quote size={40} strokeWidth={1} />
//             </div>

//             {/* Content */}
//             <div className="tst__card-content">
//               {/* Stars */}
//               <div className="tst__card-stars">
//                 {[...Array(active.rating)].map((_, i) => (
//                   <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
//                 ))}
//               </div>

//               {/* Text */}
//               <blockquote className="tst__card-text">
//                 "{active.content}"
//               </blockquote>

//               {/* Author */}
//               <div className="tst__card-author">
//                 <div className="tst__card-author-avatar" style={{ 
//                   background: `linear-gradient(135deg, ${active.color}, ${active.color}CC)`,
//                   color: '#FFFFFF'
//                 }}>
//                   {active.name.split(' ').map(n => n[0]).join('')}
//                 </div>
//                 <div>
//                   <span className="tst__card-author-name">{active.name}</span>
//                   <span className="tst__card-author-role">{active.role}</span>
//                 </div>
//               </div>

//               {/* Meta row */}
//               <div className="tst__card-meta">
//                 <span className="tst__card-project" style={{ color: active.color }}>
//                   {active.project}
//                 </span>
//                 <span className="tst__card-metric" style={{ color: active.color }}>
//                   {active.metric.value}
//                   <span className="tst__card-metric-label">{active.metric.label}</span>
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="tst__nav">
//             <button className="tst__nav-btn" onClick={handlePrev} aria-label="Previous">
//               <ChevronLeft size={18} strokeWidth={1.5} />
//             </button>
            
//             {/* Dots */}
//             <div className="tst__nav-dots">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   className={`tst__nav-dot ${i === activeIndex ? 'tst__nav-dot--active' : ''}`}
//                   onClick={() => setActiveIndex(i)}
//                   style={{ '--dot-color': testimonials[i].color }}
//                   aria-label={`Go to testimonial ${i + 1}`}
//                 />
//               ))}
//             </div>

//             <button className="tst__nav-btn" onClick={handleNext} aria-label="Next">
//               <ChevronRight size={18} strokeWidth={1.5} />
//             </button>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="tst__cta">
//           <p>Join 200+ clients across India</p>
//           <a href="#contact">
//             Start your story
//             <ArrowRight size={14} strokeWidth={2} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;




























// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { 
//   Star, 
//   Quote, 
//   ChevronLeft, 
//   ChevronRight,
//   Sparkles,
//   Building2,
//   GraduationCap,
//   Briefcase,
//   ArrowRight,
//   Users,
//   Award,
//   Heart,
//   TrendingUp
// } from 'lucide-react';
// import './Testimonials.css';

// const Testimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const [direction, setDirection] = useState('next');
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const intervalRef = useRef(null);
//   const sectionRef = useRef(null);
//   const cardRef = useRef(null);

//   const testimonials = [
//     {
//       id: 1,
//       name: 'Rajesh Kumar',
//       role: 'CEO, TechVentures India',
//       content: 'ASPL transformed our digital presence completely. Their end-to-end approach saved us months of coordination. The team\'s technical expertise and commitment to deadlines exceeded our expectations.',
//       rating: 5,
//       color: '#6366F1',
//       gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
//       icon: Briefcase,
//       project: 'Web & App Development',
//       metric: { value: '3 Months', label: 'Saved' },
//       company: 'TechVentures India'
//     },
//     {
//       id: 2,
//       name: 'Priya Sharma',
//       role: 'Marketing Head, EduLearn',
//       content: 'The training programs are outstanding. Our team upgraded their skills with real projects, not just theory. The mentorship from industry professionals made all the difference.',
//       rating: 5,
//       color: '#0EA5E9',
//       gradient: 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)',
//       icon: GraduationCap,
//       project: 'Training & Development',
//       metric: { value: '25+', label: 'Trained' },
//       company: 'EduLearn'
//     },
//     {
//       id: 3,
//       name: 'Arun Patel',
//       role: 'Founder, StartupX',
//       content: 'From website to branding to compliance — everything handled flawlessly. A true one-stop solution that helped us launch ahead of schedule. Perfect for our startup budget.',
//       rating: 5,
//       color: '#10B981',
//       gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
//       icon: TrendingUp,
//       project: 'Business Services',
//       metric: { value: '2 Weeks', label: 'Early' },
//       company: 'StartupX'
//     },
//     {
//       id: 4,
//       name: 'Meera Reddy',
//       role: 'Director, InnovateCorp',
//       content: 'The event management team pulled off our annual conference flawlessly. 500+ attendees, zero hiccups. Their attention to detail made it our most successful event yet.',
//       rating: 5,
//       color: '#F59E0B',
//       gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
//       icon: Building2,
//       project: 'Hospitality & Events',
//       metric: { value: '500+', label: 'Attendees' },
//       company: 'InnovateCorp'
//     },
//     {
//       id: 5,
//       name: 'Vikram Singh',
//       role: 'Content Creator',
//       content: 'The podcast studio is world-class. From lighting to editing, their team handles everything. My production quality improved dramatically, and my audience has doubled.',
//       rating: 5,
//       color: '#EC4899',
//       gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
//       icon: Sparkles,
//       project: 'Creator Studio',
//       metric: { value: '2x', label: 'Growth' },
//       company: 'Independent Creator'
//     },
//   ];

//   const active = testimonials[activeIndex];

//   // Mouse tracking
//   const handleMouseMove = useCallback((e) => {
//     if (!sectionRef.current) return;
//     const rect = sectionRef.current.getBoundingClientRect();
//     setMousePos({
//       x: (e.clientX - rect.left) / rect.width,
//       y: (e.clientY - rect.top) / rect.height,
//     });
//   }, []);

//   // Auto-advance
//   const startInterval = useCallback(() => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       if (!isPaused && !isAnimating) {
//         setDirection('next');
//         handleNext();
//       }
//     }, 6000);
//   }, [isPaused, isAnimating]);

//   useEffect(() => {
//     startInterval();
//     return () => clearInterval(intervalRef.current);
//   }, [startInterval]);

//   // Intersection observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { 
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const navigate = (newIndex, dir) => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setDirection(dir);
//     setActiveIndex(newIndex);
//     setTimeout(() => setIsAnimating(false), 600);
//   };

//   const handlePrev = () => {
//     navigate((activeIndex - 1 + testimonials.length) % testimonials.length, 'prev');
//   };

//   const handleNext = () => {
//     navigate((activeIndex + 1) % testimonials.length, 'next');
//   };

//   // Calculate surrounding indices for preview
//   const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
//   const nextIndex = (activeIndex + 1) % testimonials.length;

//   return (
//     <section 
//       id="testimonials" 
//       className="tst" 
//       ref={sectionRef}
//       onMouseMove={handleMouseMove}
//     >
      
//       {/* Ambient background system */}
//       <div className="tst-bg">
//         <div className="tst-bg-gradient" />
//         <div 
//           className="tst-bg-glow"
//           style={{
//             '--mx': `${mousePos.x * 100}%`,
//             '--my': `${mousePos.y * 100}%`,
//             '--glow-color': active.color,
//           }}
//         />
//         <div className="tst-bg-grid" />
//         <div className="tst-bg-orb tst-bg-orb--1" style={{ '--orb-color': active.color }} />
//         <div className="tst-bg-orb tst-bg-orb--2" style={{ '--orb-color': testimonials[nextIndex].color }} />
//       </div>

//       <div className={`tst-wrap ${visible ? 'is-visible' : ''}`}>
        
//         {/* Header */}
//         <header className="tst-header">
//           <div className="tst-header-label">
//             <Sparkles size={14} strokeWidth={1.8} />
//             <span>Client Stories</span>
//             <span className="tst-header-label-line" />
//           </div>
//           <h2 className="tst-header-title">
//             <span className="tst-header-title-static">Trusted by</span>
//             <span className="tst-header-title-accent">
//               {' '}visionaries
//               <svg className="tst-header-title-underline" viewBox="0 0 100 8" preserveAspectRatio="none">
//                 <path d="M0,4 Q25,8 50,4 Q75,0 100,4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//             </span>
//           </h2>
//           <p className="tst-header-subtitle">
//             Real stories from real clients who transformed their businesses with us
//           </p>
//         </header>

//         {/* Carousel */}
//         <div 
//           className="tst-carousel"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
          
//           {/* Preview cards - Previous */}
//           <div 
//             className="tst-preview tst-preview--prev"
//             onClick={handlePrev}
//           >
//             <div className="tst-preview-card" style={{ '--preview-color': testimonials[prevIndex].color }}>
//               <div className="tst-preview-avatar" style={{ background: testimonials[prevIndex].gradient }}>
//                 {testimonials[prevIndex].name.split(' ').map(n => n[0]).join('')}
//               </div>
//               <span className="tst-preview-name">{testimonials[prevIndex].name.split(' ')[0]}</span>
//             </div>
//           </div>

//           {/* Main card */}
//           <div 
//             className={`tst-card ${isAnimating ? `tst-card--${direction}` : ''}`} 
//             key={activeIndex}
//             ref={cardRef}
//           >
//             {/* Decorative quote */}
//             <div className="tst-card-quote-mark" style={{ color: active.color }}>
//               <Quote size={48} strokeWidth={1.5} />
//             </div>

//             {/* Content area */}
//             <div className="tst-card-content">
              
//               {/* Company badge */}
//               <div className="tst-card-badge" style={{ background: `${active.color}10`, color: active.color }}>
//                 <active.icon size={14} strokeWidth={1.8} />
//                 {active.company}
//               </div>

//               {/* Rating stars */}
//               <div className="tst-card-stars">
//                 {[...Array(active.rating)].map((_, i) => (
//                   <Star 
//                     key={i} 
//                     size={15} 
//                     fill="#F59E0B" 
//                     color="#F59E0B"
//                     className="tst-card-star"
//                     style={{ animationDelay: `${i * 0.08}s` }}
//                   />
//                 ))}
//               </div>

//               {/* Testimonial text */}
//               <blockquote className="tst-card-text">
//                 "{active.content}"
//               </blockquote>

//               {/* Author section */}
//               <div className="tst-card-author-section">
//                 <div className="tst-card-author">
//                   <div 
//                     className="tst-card-author-avatar"
//                     style={{ background: active.gradient }}
//                   >
//                     {active.name.split(' ').map(n => n[0]).join('')}
//                   </div>
//                   <div className="tst-card-author-info">
//                     <span className="tst-card-author-name">{active.name}</span>
//                     <span className="tst-card-author-role">{active.role}</span>
//                   </div>
//                 </div>

//                 {/* Metric badge */}
//                 <div className="tst-card-metric">
//                   <span className="tst-card-metric-value" style={{ color: active.color }}>
//                     {active.metric.value}
//                   </span>
//                   <span className="tst-card-metric-label">{active.metric.label}</span>
//                 </div>
//               </div>

//               {/* Project tag */}
//               <div className="tst-card-project-tag" style={{ borderColor: `${active.color}30`, background: `${active.color}08` }}>
//                 <div className="tst-card-project-dot" style={{ background: active.color }} />
//                 {active.project}
//               </div>
//             </div>

//             {/* Card glow border */}
//             <div className="tst-card-glow-border" style={{ '--border-color': active.color }} />
//           </div>

//           {/* Preview cards - Next */}
//           <div 
//             className="tst-preview tst-preview--next"
//             onClick={handleNext}
//           >
//             <div className="tst-preview-card" style={{ '--preview-color': testimonials[nextIndex].color }}>
//               <div className="tst-preview-avatar" style={{ background: testimonials[nextIndex].gradient }}>
//                 {testimonials[nextIndex].name.split(' ').map(n => n[0]).join('')}
//               </div>
//               <span className="tst-preview-name">{testimonials[nextIndex].name.split(' ')[0]}</span>
//             </div>
//           </div>

//           {/* Navigation controls */}
//           <div className="tst-nav">
//             <button 
//               className="tst-nav-btn" 
//               onClick={handlePrev} 
//               aria-label="Previous testimonial"
//               disabled={isAnimating}
//             >
//               <ChevronLeft size={18} strokeWidth={2} />
//             </button>
            
//             {/* Progress dots */}
//             <div className="tst-nav-dots">
//               {testimonials.map((t, i) => (
//                 <button
//                   key={i}
//                   className={`tst-nav-dot ${i === activeIndex ? 'is-active' : ''}`}
//                   onClick={() => {
//                     if (i !== activeIndex) {
//                       navigate(i, i > activeIndex ? 'next' : 'prev');
//                     }
//                   }}
//                   style={{ '--dot-color': t.color }}
//                   aria-label={`Go to testimonial ${i + 1}`}
//                 >
//                   {i === activeIndex && (
//                     <div className="tst-nav-dot-progress" />
//                   )}
//                 </button>
//               ))}
//             </div>

//             <button 
//               className="tst-nav-btn" 
//               onClick={handleNext} 
//               aria-label="Next testimonial"
//               disabled={isAnimating}
//             >
//               <ChevronRight size={18} strokeWidth={2} />
//             </button>
//           </div>
//         </div>

//         {/* Bottom stats & CTA */}
//         <div className="tst-footer">
//           <div className="tst-footer-stats">
//             <div className="tst-footer-stat">
//               <Users size={18} strokeWidth={1.8} />
//               <span className="tst-footer-stat-value">200+</span>
//               <span className="tst-footer-stat-label">Happy clients</span>
//             </div>
//             <div className="tst-footer-stat-divider" />
//             <div className="tst-footer-stat">
//               <Award size={18} strokeWidth={1.8} />
//               <span className="tst-footer-stat-value">4.9/5</span>
//               <span className="tst-footer-stat-label">Average rating</span>
//             </div>
//             <div className="tst-footer-stat-divider" />
//             <div className="tst-footer-stat">
//               <Heart size={18} strokeWidth={1.8} />
//               <span className="tst-footer-stat-value">98%</span>
//               <span className="tst-footer-stat-label">Would recommend</span>
//             </div>
//           </div>
          
//           <a href="#contact" className="tst-footer-cta">
//             <span>Start your success story</span>
//             <ArrowRight size={16} strokeWidth={2} />
//             <div className="tst-footer-cta-shimmer" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;























// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { 
//   Star, 
//   Quote, 
//   ChevronLeft, 
//   ChevronRight,
//   Sparkles,
//   Building2,
//   GraduationCap,
//   Briefcase,
//   ArrowRight,
//   Users,
//   Award,
//   Heart,
//   TrendingUp
// } from 'lucide-react';
// import './Testimonials.css';

// const Testimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const [direction, setDirection] = useState('next');
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const intervalRef = useRef(null);
//   const sectionRef = useRef(null);

//   const testimonials = [
//     {
//       id: 1,
//       name: 'Rajesh Kumar',
//       role: 'CEO, TechVentures India',
//       content: 'ASPL transformed our digital presence completely. Their end-to-end approach saved us months of coordination. The team\'s technical expertise and commitment to deadlines exceeded our expectations.',
//       rating: 5,
//       color: '#6366F1',
//       icon: Briefcase,
//       project: 'Web & App Development',
//       metric: { value: '3 Months', label: 'Saved' },
//       company: 'TechVentures India'
//     },
//     {
//       id: 2,
//       name: 'Priya Sharma',
//       role: 'Marketing Head, EduLearn',
//       content: 'The training programs are outstanding. Our team upgraded their skills with real projects, not just theory. The mentorship from industry professionals made all the difference.',
//       rating: 5,
//       color: '#0EA5E9',
//       icon: GraduationCap,
//       project: 'Training & Development',
//       metric: { value: '25+', label: 'Trained' },
//       company: 'EduLearn'
//     },
//     {
//       id: 3,
//       name: 'Arun Patel',
//       role: 'Founder, StartupX',
//       content: 'From website to branding to compliance — everything handled flawlessly. A true one-stop solution that helped us launch ahead of schedule. Perfect for our startup budget.',
//       rating: 5,
//       color: '#10B981',
//       icon: TrendingUp,
//       project: 'Business Services',
//       metric: { value: '2 Weeks', label: 'Early' },
//       company: 'StartupX'
//     },
//     {
//       id: 4,
//       name: 'Meera Reddy',
//       role: 'Director, InnovateCorp',
//       content: 'The event management team pulled off our annual conference flawlessly. 500+ attendees, zero hiccups. Their attention to detail made it our most successful event yet.',
//       rating: 5,
//       color: '#F59E0B',
//       icon: Building2,
//       project: 'Hospitality & Events',
//       metric: { value: '500+', label: 'Attendees' },
//       company: 'InnovateCorp'
//     },
//     {
//       id: 5,
//       name: 'Vikram Singh',
//       role: 'Content Creator',
//       content: 'The podcast studio is world-class. From lighting to editing, their team handles everything. My production quality improved dramatically, and my audience has doubled.',
//       rating: 5,
//       color: '#EC4899',
//       icon: Sparkles,
//       project: 'Creator Studio',
//       metric: { value: '2x', label: 'Growth' },
//       company: 'Independent Creator'
//     },
//   ];

//   const active = testimonials[activeIndex];

//   const handleMouseMove = useCallback((e) => {
//     if (!sectionRef.current) return;
//     const rect = sectionRef.current.getBoundingClientRect();
//     requestAnimationFrame(() => {
//       setMousePos({
//         x: (e.clientX - rect.left) / rect.width,
//         y: (e.clientY - rect.top) / rect.height,
//       });
//     });
//   }, []);

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove, { passive: true });
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [handleMouseMove]);

//   const startInterval = useCallback(() => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       if (!isPaused && !isAnimating) {
//         setDirection('next');
//         handleNext();
//       }
//     }, 6000);
//   }, [isPaused, isAnimating]);

//   useEffect(() => {
//     startInterval();
//     return () => clearInterval(intervalRef.current);
//   }, [startInterval]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { 
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const navigate = (newIndex, dir) => {
//     if (isAnimating || newIndex === activeIndex) return;
//     setIsAnimating(true);
//     setDirection(dir);
//     setTimeout(() => {
//       setActiveIndex(newIndex);
//       setTimeout(() => setIsAnimating(false), 50);
//     }, 300);
//   };

//   const handlePrev = () => {
//     navigate((activeIndex - 1 + testimonials.length) % testimonials.length, 'prev');
//   };

//   const handleNext = () => {
//     navigate((activeIndex + 1) % testimonials.length, 'next');
//   };

//   const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
//   const nextIndex = (activeIndex + 1) % testimonials.length;

//   return (
//     <section 
//       id="testimonials" 
//       className="tst" 
//       ref={sectionRef}
//       onMouseMove={handleMouseMove}
//     >
      
//       {/* Ambient background */}
//       <div className="tst-bg">
//         <div className="tst-bg-gradient" />
//         <div 
//           className="tst-bg-glow"
//           style={{
//             '--mx': `${mousePos.x * 100}%`,
//             '--my': `${mousePos.y * 100}%`,
//             '--glow-color': active.color,
//           }}
//         />
//         <div className="tst-bg-grid" />
//         <div className="tst-orb tst-orb--1" style={{ '--orb-color': active.color }} />
//         <div className="tst-orb tst-orb--2" style={{ '--orb-color': testimonials[nextIndex].color }} />
//       </div>

//       <div className={`tst-wrap ${visible ? 'is-visible' : ''}`}>
        
//         {/* Header */}
//         <header className="tst-header">
//           <div className="tst-label">
//             <Sparkles size={14} strokeWidth={1.8} />
//             <span>Client Stories</span>
//             <span className="tst-label-line" />
//           </div>
//           <h2 className="tst-title">
//             <span className="tst-title-row">
//               <span className="tst-title-text">Trusted by</span>
//             </span>
//             <span className="tst-title-row">
//               <span className="tst-title-text tst-title-text--accent">
//                 visionaries
//                 <svg className="tst-title-underline" viewBox="0 0 100 8" preserveAspectRatio="none">
//                   <path d="M0,4 Q25,8 50,4 Q75,0 100,4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                 </svg>
//               </span>
//             </span>
//           </h2>
//           <p className="tst-subtitle">
//             Real stories from real clients who transformed their businesses with us
//           </p>
//         </header>

//         {/* Carousel */}
//         <div 
//           className="tst-carousel"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
          
//           {/* Previous preview */}
//           <div className="tst-preview tst-preview--prev" onClick={handlePrev}>
//             <div className="tst-preview-card" style={{ '--preview-color': testimonials[prevIndex].color }}>
//               <div className="tst-preview-avatar" style={{ background: testimonials[prevIndex].color }}>
//                 {testimonials[prevIndex].name.split(' ').map(n => n[0]).join('')}
//               </div>
//               <span className="tst-preview-name">{testimonials[prevIndex].name.split(' ')[0]}</span>
//             </div>
//           </div>

//           {/* Main card */}
//           <div 
//             className={`tst-card ${isAnimating ? `tst-card--${direction}` : ''}`}
//             key={activeIndex}
//           >
//             {/* Large quote mark */}
//             <div className="tst-card-quote" style={{ color: active.color }}>
//               <Quote size={44} strokeWidth={1.2} />
//             </div>

//             <div className="tst-card-content">
              
//               {/* Company badge */}
//               <div className="tst-card-badge" style={{ background: `${active.color}10`, color: active.color }}>
//                 <active.icon size={14} strokeWidth={1.8} />
//                 {active.company}
//               </div>

//               {/* Stars */}
//               <div className="tst-card-stars">
//                 {[...Array(active.rating)].map((_, i) => (
//                   <Star 
//                     key={i} 
//                     size={14} 
//                     fill="#F59E0B" 
//                     color="#F59E0B"
//                     style={{ animationDelay: `${i * 0.08}s` }}
//                   />
//                 ))}
//               </div>

//               {/* Text */}
//               <blockquote className="tst-card-text">
//                 "{active.content}"
//               </blockquote>

//               {/* Author + Metric */}
//               <div className="tst-card-bottom">
//                 <div className="tst-card-author">
//                   <div className="tst-card-author-avatar" style={{ background: active.color }}>
//                     {active.name.split(' ').map(n => n[0]).join('')}
//                   </div>
//                   <div className="tst-card-author-info">
//                     <span className="tst-card-author-name">{active.name}</span>
//                     <span className="tst-card-author-role">{active.role}</span>
//                   </div>
//                 </div>

//                 <div className="tst-card-metric">
//                   <span className="tst-card-metric-value" style={{ color: active.color }}>
//                     {active.metric.value}
//                   </span>
//                   <span className="tst-card-metric-label">{active.metric.label}</span>
//                 </div>
//               </div>

//               {/* Project tag */}
//               <div className="tst-card-project" style={{ borderColor: `${active.color}25`, background: `${active.color}06` }}>
//                 <span className="tst-card-project-dot" style={{ background: active.color }} />
//                 {active.project}
//               </div>
//             </div>

//             {/* Border glow */}
//             <div className="tst-card-border" style={{ '--border-color': active.color }} />
//           </div>

//           {/* Next preview */}
//           <div className="tst-preview tst-preview--next" onClick={handleNext}>
//             <div className="tst-preview-card" style={{ '--preview-color': testimonials[nextIndex].color }}>
//               <div className="tst-preview-avatar" style={{ background: testimonials[nextIndex].color }}>
//                 {testimonials[nextIndex].name.split(' ').map(n => n[0]).join('')}
//               </div>
//               <span className="tst-preview-name">{testimonials[nextIndex].name.split(' ')[0]}</span>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="tst-nav">
//           <button className="tst-nav-btn" onClick={handlePrev} disabled={isAnimating}>
//             <ChevronLeft size={18} strokeWidth={2} />
//           </button>
          
//           <div className="tst-nav-dots">
//             {testimonials.map((t, i) => (
//               <button
//                 key={i}
//                 className={`tst-nav-dot ${i === activeIndex ? 'is-active' : ''}`}
//                 onClick={() => navigate(i, i > activeIndex ? 'next' : 'prev')}
//                 style={{ '--dot-color': t.color }}
//               >
//                 {i === activeIndex && <div className="tst-nav-dot-fill" />}
//               </button>
//             ))}
//           </div>

//           <button className="tst-nav-btn" onClick={handleNext} disabled={isAnimating}>
//             <ChevronRight size={18} strokeWidth={2} />
//           </button>
//         </div>

//         {/* Footer stats + CTA */}
//         <div className="tst-footer">
//           <div className="tst-footer-stats">
//             <div className="tst-footer-stat">
//               <Users size={17} strokeWidth={1.8} />
//               <span className="tst-footer-stat-value">200+</span>
//               <span className="tst-footer-stat-label">Happy clients</span>
//             </div>
//             <div className="tst-footer-divider" />
//             <div className="tst-footer-stat">
//               <Award size={17} strokeWidth={1.8} />
//               <span className="tst-footer-stat-value">4.9/5</span>
//               <span className="tst-footer-stat-label">Average rating</span>
//             </div>
//             <div className="tst-footer-divider" />
//             <div className="tst-footer-stat">
//               <Heart size={17} strokeWidth={1.8} />
//               <span className="tst-footer-stat-value">98%</span>
//               <span className="tst-footer-stat-label">Would recommend</span>
//             </div>
//           </div>
          
//           <a href="#contact" className="tst-footer-cta">
//             <span>Start your success story</span>
//             <ArrowRight size={15} strokeWidth={2} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;













// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { 
//   Star, 
//   Quote, 
//   ChevronLeft, 
//   ChevronRight,
//   Sparkles,
//   Building2,
//   GraduationCap,
//   Briefcase,
//   ArrowRight,
//   Users,
//   Award,
//   Heart,
//   TrendingUp
// } from 'lucide-react';
// import './Testimonials.css';

// const Testimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const [direction, setDirection] = useState('next');
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const intervalRef = useRef(null);
//   const sectionRef = useRef(null);
//   const canvasRef = useRef(null);
//   const animFrameRef = useRef(null);
//   const particlesRef = useRef([]);

//   const testimonials = [
//     {
//       id: 1,
//       name: 'Rajesh Kumar',
//       role: 'CEO, TechVentures India',
//       content: 'ASPL transformed our digital presence completely. Their end-to-end approach saved us months of coordination. The team\'s technical expertise and commitment to deadlines exceeded our expectations.',
//       rating: 5,
//       color: '#6366F1',
//       icon: Briefcase,
//       project: 'Web & App Development',
//       metric: { value: '3 Months', label: 'Saved' },
//       company: 'TechVentures India'
//     },
//     {
//       id: 2,
//       name: 'Priya Sharma',
//       role: 'Marketing Head, EduLearn',
//       content: 'The training programs are outstanding. Our team upgraded their skills with real projects, not just theory. The mentorship from industry professionals made all the difference.',
//       rating: 5,
//       color: '#0EA5E9',
//       icon: GraduationCap,
//       project: 'Training & Development',
//       metric: { value: '25+', label: 'Trained' },
//       company: 'EduLearn'
//     },
//     {
//       id: 3,
//       name: 'Arun Patel',
//       role: 'Founder, StartupX',
//       content: 'From website to branding to compliance — everything handled flawlessly. A true one-stop solution that helped us launch ahead of schedule. Perfect for our startup budget.',
//       rating: 5,
//       color: '#10B981',
//       icon: TrendingUp,
//       project: 'Business Services',
//       metric: { value: '2 Weeks', label: 'Early' },
//       company: 'StartupX'
//     },
//     {
//       id: 4,
//       name: 'Meera Reddy',
//       role: 'Director, InnovateCorp',
//       content: 'The event management team pulled off our annual conference flawlessly. 500+ attendees, zero hiccups. Their attention to detail made it our most successful event yet.',
//       rating: 5,
//       color: '#F59E0B',
//       icon: Building2,
//       project: 'Hospitality & Events',
//       metric: { value: '500+', label: 'Attendees' },
//       company: 'InnovateCorp'
//     },
//     {
//       id: 5,
//       name: 'Vikram Singh',
//       role: 'Content Creator',
//       content: 'The podcast studio is world-class. From lighting to editing, their team handles everything. My production quality improved dramatically, and my audience has doubled.',
//       rating: 5,
//       color: '#EC4899',
//       icon: Sparkles,
//       project: 'Creator Studio',
//       metric: { value: '2x', label: 'Growth' },
//       company: 'Independent Creator'
//     },
//   ];

//   const active = testimonials[activeIndex];

//   // Mouse tracking
//   const handleMouseMove = useCallback((e) => {
//     if (!sectionRef.current) return;
//     const rect = sectionRef.current.getBoundingClientRect();
//     requestAnimationFrame(() => {
//       setMousePos({
//         x: (e.clientX - rect.left) / rect.width,
//         y: (e.clientY - rect.top) / rect.height,
//       });
//     });
//   }, []);

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove, { passive: true });
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [handleMouseMove]);

//   // Particle system
//   useEffect(() => {
//     if (!canvasRef.current || !visible) return;
    
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let particles = [];
//     const maxParticles = 40;
//     const colors = ['#6366F1', '#0EA5E9', '#10B981', '#F59E0B', '#EC4899'];

//     const resize = () => {
//       const rect = canvas.getBoundingClientRect();
//       canvas.width = rect.width * window.devicePixelRatio;
//       canvas.height = rect.height * window.devicePixelRatio;
//       ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
//     };

//     resize();
//     window.addEventListener('resize', resize);

//     // Create particles
//     class Particle {
//       constructor() {
//         this.reset();
//       }
//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 1.5 + 0.5;
//         this.speedX = (Math.random() - 0.5) * 0.3;
//         this.speedY = (Math.random() - 0.5) * 0.3;
//         this.color = colors[Math.floor(Math.random() * colors.length)];
//         this.opacity = Math.random() * 0.3 + 0.05;
//         this.life = 0;
//         this.maxLife = 300 + Math.random() * 400;
//       }
//       update(mx, my) {
//         const w = canvas.width / window.devicePixelRatio;
//         const h = canvas.height / window.devicePixelRatio;
        
//         // Mouse attraction
//         const dx = mx * w - this.x;
//         const dy = my * h - this.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);
//         if (dist < 200) {
//           this.speedX += (dx / dist) * 0.02;
//           this.speedY += (dy / dist) * 0.02;
//         }

//         this.x += this.speedX;
//         this.y += this.speedY;
//         this.speedX *= 0.998;
//         this.speedY *= 0.998;
//         this.life++;

//         if (this.life > this.maxLife || 
//             this.x < -50 || this.x > w + 50 || 
//             this.y < -50 || this.y > h + 50) {
//           this.reset();
//           this.x = Math.random() * w;
//           this.y = Math.random() * h;
//         }
//       }
//       draw(ctx) {
//         const fadeIn = Math.min(this.life / 60, 1);
//         const fadeOut = Math.max(0, 1 - (this.life - this.maxLife + 60) / 60);
//         const alpha = this.opacity * fadeIn * fadeOut;
        
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.globalAlpha = alpha;
//         ctx.fill();
        
//         // Outer glow
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.globalAlpha = alpha * 0.15;
//         ctx.fill();
        
//         ctx.globalAlpha = 1;
//       }
//     }

//     for (let i = 0; i < maxParticles; i++) {
//       particles.push(new Particle());
//     }
//     particlesRef.current = particles;

//     // Connect nearby particles with lines
//     const drawConnections = (particles) => {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
          
//           if (dist < 120) {
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.strokeStyle = active.color;
//             ctx.globalAlpha = (1 - dist / 120) * 0.06;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//             ctx.globalAlpha = 1;
//           }
//         }
//       }
//     };

//     const animate = () => {
//       const w = canvas.width / window.devicePixelRatio;
//       const h = canvas.height / window.devicePixelRatio;
//       ctx.clearRect(0, 0, w, h);

//       particles.forEach(p => {
//         p.update(mousePos.x, mousePos.y);
//         p.draw(ctx);
//       });
      
//       drawConnections(particles);
      
//       animFrameRef.current = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(animFrameRef.current);
//       window.removeEventListener('resize', resize);
//     };
//   }, [visible, active.color, mousePos]);

//   // Auto-advance
//   const startInterval = useCallback(() => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       if (!isPaused && !isAnimating) {
//         setDirection('next');
//         handleNext();
//       }
//     }, 6000);
//   }, [isPaused, isAnimating]);

//   useEffect(() => {
//     startInterval();
//     return () => clearInterval(intervalRef.current);
//   }, [startInterval]);

//   // Intersection observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { 
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const navigate = (newIndex, dir) => {
//     if (isAnimating || newIndex === activeIndex) return;
//     setIsAnimating(true);
//     setDirection(dir);
//     setTimeout(() => {
//       setActiveIndex(newIndex);
//       setTimeout(() => setIsAnimating(false), 50);
//     }, 300);
//   };

//   const handlePrev = () => {
//     navigate((activeIndex - 1 + testimonials.length) % testimonials.length, 'prev');
//   };

//   const handleNext = () => {
//     navigate((activeIndex + 1) % testimonials.length, 'next');
//   };

//   const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
//   const nextIndex = (activeIndex + 1) % testimonials.length;

//   return (
//     <section 
//       id="testimonials" 
//       className="tst" 
//       ref={sectionRef}
//       onMouseMove={handleMouseMove}
//     >
      
//       {/* Cinematic background system */}
//       <div className="tst-bg">
//         {/* Animated particle canvas */}
//         <canvas ref={canvasRef} className="tst-canvas" />
        
//         {/* Gradient overlays */}
//         <div className="tst-bg-gradient" />
//         <div className="tst-bg-gradient-animated" />
        
//         {/* Mouse-following glow */}
//         <div 
//           className="tst-bg-glow"
//           style={{
//             '--mx': `${mousePos.x * 100}%`,
//             '--my': `${mousePos.y * 100}%`,
//             '--glow-color': active.color,
//           }}
//         />
        
//         {/* Floating orbs */}
//         <div className="tst-orb tst-orb--1" style={{ '--orb-color': active.color }} />
//         <div className="tst-orb tst-orb--2" style={{ '--orb-color': testimonials[nextIndex].color }} />
//         <div className="tst-orb tst-orb--3" style={{ '--orb-color': testimonials[prevIndex].color }} />
        
//         {/* Subtle grid */}
//         <div className="tst-bg-grid" />
        
//         {/* Animated wave */}
//         <div className="tst-wave" />
//       </div>

//       <div className={`tst-wrap ${visible ? 'is-visible' : ''}`}>
        
//         {/* Header */}
//         <header className="tst-header">
//           <div className="tst-label">
//             <Sparkles size={14} strokeWidth={1.8} />
//             <span>Client Stories</span>
//             <span className="tst-label-line" />
//           </div>
//           <h2 className="tst-title">
//             <span className="tst-title-row">
//               <span className="tst-title-text">Trusted by</span>
//             </span>
//             <span className="tst-title-row">
//               <span className="tst-title-text tst-title-text--accent">
//                 visionaries
//                 <svg className="tst-title-underline" viewBox="0 0 100 8" preserveAspectRatio="none">
//                   <path d="M0,4 Q25,8 50,4 Q75,0 100,4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                 </svg>
//               </span>
//             </span>
//           </h2>
//           <p className="tst-subtitle">
//             Real stories from real clients who transformed their businesses with us
//           </p>
//         </header>

//         {/* Carousel */}
//         <div 
//           className="tst-carousel"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
          
//           {/* Previous preview */}
//           <div className="tst-preview tst-preview--prev" onClick={handlePrev}>
//             <div className="tst-preview-card" style={{ '--preview-color': testimonials[prevIndex].color }}>
//               <div className="tst-preview-avatar" style={{ background: testimonials[prevIndex].color }}>
//                 {testimonials[prevIndex].name.split(' ').map(n => n[0]).join('')}
//               </div>
//               <span className="tst-preview-name">{testimonials[prevIndex].name.split(' ')[0]}</span>
//             </div>
//           </div>

//           {/* Main card */}
//           <div 
//             className={`tst-card ${isAnimating ? `tst-card--${direction}` : ''}`}
//             key={activeIndex}
//           >
//             {/* Quote mark */}
//             <div className="tst-card-quote" style={{ color: active.color }}>
//               <Quote size={44} strokeWidth={1.2} />
//             </div>

//             <div className="tst-card-content">
              
//               {/* Company badge */}
//               <div className="tst-card-badge" style={{ background: `${active.color}10`, color: active.color }}>
//                 <active.icon size={14} strokeWidth={1.8} />
//                 {active.company}
//               </div>

//               {/* Stars */}
//               <div className="tst-card-stars">
//                 {[...Array(active.rating)].map((_, i) => (
//                   <Star 
//                     key={i} 
//                     size={14} 
//                     fill="#F59E0B" 
//                     color="#F59E0B"
//                     style={{ animationDelay: `${i * 0.08}s` }}
//                   />
//                 ))}
//               </div>

//               {/* Text */}
//               <blockquote className="tst-card-text">
//                 "{active.content}"
//               </blockquote>

//               {/* Author + Metric */}
//               <div className="tst-card-bottom">
//                 <div className="tst-card-author">
//                   <div className="tst-card-author-avatar" style={{ background: active.color }}>
//                     {active.name.split(' ').map(n => n[0]).join('')}
//                   </div>
//                   <div className="tst-card-author-info">
//                     <span className="tst-card-author-name">{active.name}</span>
//                     <span className="tst-card-author-role">{active.role}</span>
//                   </div>
//                 </div>

//                 <div className="tst-card-metric">
//                   <span className="tst-card-metric-value" style={{ color: active.color }}>
//                     {active.metric.value}
//                   </span>
//                   <span className="tst-card-metric-label">{active.metric.label}</span>
//                 </div>
//               </div>

//               {/* Project tag */}
//               <div className="tst-card-project" style={{ borderColor: `${active.color}25`, background: `${active.color}06` }}>
//                 <span className="tst-card-project-dot" style={{ background: active.color }} />
//                 {active.project}
//               </div>
//             </div>

//             {/* Border glow */}
//             <div className="tst-card-border" style={{ '--border-color': active.color }} />
            
//             {/* Inner shine on hover */}
//             <div className="tst-card-shine" />
//           </div>

//           {/* Next preview */}
//           <div className="tst-preview tst-preview--next" onClick={handleNext}>
//             <div className="tst-preview-card" style={{ '--preview-color': testimonials[nextIndex].color }}>
//               <div className="tst-preview-avatar" style={{ background: testimonials[nextIndex].color }}>
//                 {testimonials[nextIndex].name.split(' ').map(n => n[0]).join('')}
//               </div>
//               <span className="tst-preview-name">{testimonials[nextIndex].name.split(' ')[0]}</span>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="tst-nav">
//           <button className="tst-nav-btn" onClick={handlePrev} disabled={isAnimating}>
//             <ChevronLeft size={18} strokeWidth={2} />
//           </button>
          
//           <div className="tst-nav-dots">
//             {testimonials.map((t, i) => (
//               <button
//                 key={i}
//                 className={`tst-nav-dot ${i === activeIndex ? 'is-active' : ''}`}
//                 onClick={() => navigate(i, i > activeIndex ? 'next' : 'prev')}
//                 style={{ '--dot-color': t.color }}
//               >
//                 {i === activeIndex && <div className="tst-nav-dot-fill" />}
//               </button>
//             ))}
//           </div>

//           <button className="tst-nav-btn" onClick={handleNext} disabled={isAnimating}>
//             <ChevronRight size={18} strokeWidth={2} />
//           </button>
//         </div>

//         {/* Footer stats + CTA */}
//         <div className="tst-footer">
//           <div className="tst-footer-stats">
//             <div className="tst-footer-stat">
//               <Users size={17} strokeWidth={1.8} />
//               <span className="tst-footer-stat-value">200+</span>
//               <span className="tst-footer-stat-label">Happy clients</span>
//             </div>
//             <div className="tst-footer-divider" />
//             <div className="tst-footer-stat">
//               <Award size={17} strokeWidth={1.8} />
//               <span className="tst-footer-stat-value">4.9/5</span>
//               <span className="tst-footer-stat-label">Average rating</span>
//             </div>
//             <div className="tst-footer-divider" />
//             <div className="tst-footer-stat">
//               <Heart size={17} strokeWidth={1.8} />
//               <span className="tst-footer-stat-value">98%</span>
//               <span className="tst-footer-stat-label">Would recommend</span>
//             </div>
//           </div>
          
//           <a href="#contact" className="tst-footer-cta">
//             <span>Start your success story</span>
//             <ArrowRight size={15} strokeWidth={2} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials; 























import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Building2,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Users,
  Award,
  Heart,
  TrendingUp
} from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const particlesRef = useRef([]);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'CEO, TechVentures India',
      content: 'ASPL transformed our digital presence completely. Their end-to-end approach saved us months of coordination. The team\'s technical expertise and commitment to deadlines exceeded our expectations.',
      rating: 5,
      color: '#6366F1',
      icon: Briefcase,
      project: 'Web & App Development',
      metric: { value: '3 Months', label: 'Saved' },
      company: 'TechVentures India'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Marketing Head, EduLearn',
      content: 'The training programs are outstanding. Our team upgraded their skills with real projects, not just theory. The mentorship from industry professionals made all the difference.',
      rating: 5,
      color: '#0EA5E9',
      icon: GraduationCap,
      project: 'Training & Development',
      metric: { value: '25+', label: 'Trained' },
      company: 'EduLearn'
    },
    {
      id: 3,
      name: 'Arun Patel',
      role: 'Founder, StartupX',
      content: 'From website to branding to compliance — everything handled flawlessly. A true one-stop solution that helped us launch ahead of schedule. Perfect for our startup budget.',
      rating: 5,
      color: '#10B981',
      icon: TrendingUp,
      project: 'Business Services',
      metric: { value: '2 Weeks', label: 'Early' },
      company: 'StartupX'
    },
    {
      id: 4,
      name: 'Meera Reddy',
      role: 'Director, InnovateCorp',
      content: 'The event management team pulled off our annual conference flawlessly. 500+ attendees, zero hiccups. Their attention to detail made it our most successful event yet.',
      rating: 5,
      color: '#F59E0B',
      icon: Building2,
      project: 'Hospitality & Events',
      metric: { value: '500+', label: 'Attendees' },
      company: 'InnovateCorp'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Content Creator',
      content: 'The podcast studio is world-class. From lighting to editing, their team handles everything. My production quality improved dramatically, and my audience has doubled.',
      rating: 5,
      color: '#EC4899',
      icon: Sparkles,
      project: 'Creator Studio',
      metric: { value: '2x', label: 'Growth' },
      company: 'Independent Creator'
    },
  ];

  const active = testimonials[activeIndex];

  // Mouse tracking
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

  // Particle system
  useEffect(() => {
    if (!canvasRef.current || !visible) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 40;
    const colors = ['#6366F1', '#0EA5E9', '#10B981', '#F59E0B', '#EC4899'];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    // Create particles
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.3 + 0.05;
        this.life = 0;
        this.maxLife = 300 + Math.random() * 400;
      }
      update(mx, my) {
        const w = canvas.width / window.devicePixelRatio;
        const h = canvas.height / window.devicePixelRatio;
        
        // Mouse attraction
        const dx = mx * w - this.x;
        const dy = my * h - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          this.speedX += (dx / dist) * 0.02;
          this.speedY += (dy / dist) * 0.02;
        }

        this.x += this.speedX;
        this.y += this.speedY;
        this.speedX *= 0.998;
        this.speedY *= 0.998;
        this.life++;

        if (this.life > this.maxLife || 
            this.x < -50 || this.x > w + 50 || 
            this.y < -50 || this.y > h + 50) {
          this.reset();
          this.x = Math.random() * w;
          this.y = Math.random() * h;
        }
      }
      draw(ctx) {
        const fadeIn = Math.min(this.life / 60, 1);
        const fadeOut = Math.max(0, 1 - (this.life - this.maxLife + 60) / 60);
        const alpha = this.opacity * fadeIn * fadeOut;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = alpha * 0.15;
        ctx.fill();
        
        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }
    particlesRef.current = particles;

    // Connect nearby particles with lines
    const drawConnections = (particles) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = active.color;
            ctx.globalAlpha = (1 - dist / 120) * 0.06;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    const animate = () => {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      ctx.clearRect(0, 0, w, h);

      particles.forEach(p => {
        p.update(mousePos.x, mousePos.y);
        p.draw(ctx);
      });
      
      drawConnections(particles);
      
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [visible, active.color, mousePos]);

  // Auto-advance
  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused && !isAnimating) {
        setDirection('next');
        handleNext();
      }
    }, 6000);
  }, [isPaused, isAnimating]);

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [startInterval]);

  // Intersection observer
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

  const navigate = (newIndex, dir) => {
    if (isAnimating || newIndex === activeIndex) return;
    setIsAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const handlePrev = () => {
    navigate((activeIndex - 1 + testimonials.length) % testimonials.length, 'prev');
  };

  const handleNext = () => {
    navigate((activeIndex + 1) % testimonials.length, 'next');
  };

  const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (activeIndex + 1) % testimonials.length;

  return (
    <section 
      id="testimonials" 
      className="tst" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      
      {/* Cinematic background system */}
      <div className="tst-bg">
        {/* Animated particle canvas */}
        <canvas ref={canvasRef} className="tst-canvas" />
        
        {/* Gradient overlays */}
        <div className="tst-bg-gradient" />
        <div className="tst-bg-gradient-animated" />
        
        {/* Mouse-following glow */}
        <div 
          className="tst-bg-glow"
          style={{
            '--mx': `${mousePos.x * 100}%`,
            '--my': `${mousePos.y * 100}%`,
            '--glow-color': active.color,
          }}
        />
        
        {/* Floating orbs */}
        {/* <div className="tst-orb tst-orb--1" style={{ '--orb-color': active.color }} />
        <div className="tst-orb tst-orb--2" style={{ '--orb-color': testimonials[nextIndex].color }} />
        <div className="tst-orb tst-orb--3" style={{ '--orb-color': testimonials[prevIndex].color }} />
         */}
        {/* Subtle grid */}
        <div className="tst-bg-grid" />
        
        {/* Animated wave */}
        <div className="tst-wave" />
      </div>

      <div className={`tst-wrap ${visible ? 'is-visible' : ''}`}>
        
        {/* Header */}
        <header className="tst-header">
          <div className="tst-label">
            <Sparkles size={14} strokeWidth={1.8} />
            <span>Client Stories</span>
            <span className="tst-label-line" />
          </div>
          <h2 className="tst-title">
            <span className="tst-title-row">
              <span className="tst-title-text">Trusted by</span>
            </span>
            <span className="tst-title-row">
              <span className="tst-title-text tst-title-text--accent">
                visionaries
                <svg className="tst-title-underline" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,4 Q25,8 50,4 Q75,0 100,4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </span>
          </h2>
          <p className="tst-subtitle">
            Real stories from real clients who transformed their businesses with us
          </p>
        </header>

        {/* Carousel */}
        <div 
          className="tst-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Previous preview */}
          <div className="tst-preview tst-preview--prev" onClick={handlePrev}>
            <div className="tst-preview-card" style={{ '--preview-color': testimonials[prevIndex].color }}>
              <div className="tst-preview-avatar" style={{ background: testimonials[prevIndex].color }}>
                {testimonials[prevIndex].name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="tst-preview-name">{testimonials[prevIndex].name.split(' ')[0]}</span>
            </div>
          </div>

          {/* Main card */}
          <div 
            className={`tst-card ${isAnimating ? `tst-card--${direction}` : ''}`}
            key={activeIndex}
          >
            {/* Quote mark */}
            <div className="tst-card-quote" style={{ color: active.color }}>
              <Quote size={44} strokeWidth={1.2} />
            </div>

            <div className="tst-card-content">
              
              {/* Company badge */}
              <div className="tst-card-badge" style={{ background: `${active.color}10`, color: active.color }}>
                <active.icon size={14} strokeWidth={1.8} />
                {active.company}
              </div>

              {/* Stars */}
              <div className="tst-card-stars">
                {[...Array(active.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill="#F59E0B" 
                    color="#F59E0B"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  />
                ))}
              </div>

              {/* Text */}
              <blockquote className="tst-card-text">
                "{active.content}"
              </blockquote>

              {/* Author + Metric */}
              <div className="tst-card-bottom">
                <div className="tst-card-author">
                  <div className="tst-card-author-avatar" style={{ background: active.color }}>
                    {active.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="tst-card-author-info">
                    <span className="tst-card-author-name">{active.name}</span>
                    <span className="tst-card-author-role">{active.role}</span>
                  </div>
                </div>

                <div className="tst-card-metric">
                  <span className="tst-card-metric-value" style={{ color: active.color }}>
                    {active.metric.value}
                  </span>
                  <span className="tst-card-metric-label">{active.metric.label}</span>
                </div>
              </div>

              {/* Project tag */}
              <div className="tst-card-project" style={{ borderColor: `${active.color}25`, background: `${active.color}06` }}>
                <span className="tst-card-project-dot" style={{ background: active.color }} />
                {active.project}
              </div>
            </div>

            {/* Border glow */}
            <div className="tst-card-border" style={{ '--border-color': active.color }} />
            
            {/* Inner shine on hover */}
            <div className="tst-card-shine" />
          </div>

          {/* Next preview */}
          <div className="tst-preview tst-preview--next" onClick={handleNext}>
            <div className="tst-preview-card" style={{ '--preview-color': testimonials[nextIndex].color }}>
              <div className="tst-preview-avatar" style={{ background: testimonials[nextIndex].color }}>
                {testimonials[nextIndex].name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="tst-preview-name">{testimonials[nextIndex].name.split(' ')[0]}</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="tst-nav">
          <button className="tst-nav-btn" onClick={handlePrev} disabled={isAnimating}>
            <ChevronLeft size={18} strokeWidth={2} />
          </button>
          
          <div className="tst-nav-dots">
            {testimonials.map((t, i) => (
              <button
                key={i}
                className={`tst-nav-dot ${i === activeIndex ? 'is-active' : ''}`}
                onClick={() => navigate(i, i > activeIndex ? 'next' : 'prev')}
                style={{ '--dot-color': t.color }}
              >
                {i === activeIndex && <div className="tst-nav-dot-fill" />}
              </button>
            ))}
          </div>

          <button className="tst-nav-btn" onClick={handleNext} disabled={isAnimating}>
            <ChevronRight size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Footer stats + CTA */}
        {/* <div className="tst-footer">
          <div className="tst-footer-stats">
            <div className="tst-footer-stat">
              <Users size={17} strokeWidth={1.8} />
              <span className="tst-footer-stat-value">200+</span>
              <span className="tst-footer-stat-label">Happy clients</span>
            </div>
            <div className="tst-footer-divider" />
            <div className="tst-footer-stat">
              <Award size={17} strokeWidth={1.8} />
              <span className="tst-footer-stat-value">4.9/5</span>
              <span className="tst-footer-stat-label">Average rating</span>
            </div>
            <div className="tst-footer-divider" />
            <div className="tst-footer-stat">
              <Heart size={17} strokeWidth={1.8} />
              <span className="tst-footer-stat-value">98%</span>
              <span className="tst-footer-stat-label">Would recommend</span>
            </div>
          </div>
          
          <a href="#contact" className="tst-footer-cta">
            <span>Start your success story</span>
            <ArrowRight size={15} strokeWidth={2} />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;