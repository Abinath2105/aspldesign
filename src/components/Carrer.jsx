// // import React, { useState, useEffect, useRef } from 'react';
// // import { 
// //   ArrowRight,
// //   MessageCircle,
// //   Clock,
// //   Users,
// //   CheckCircle2,
// //   Shield,
// //   Send,
// // } from 'lucide-react';
// // import './Career.css';

// // const Career = () => {
// //   const [activePath, setActivePath] = useState(0);
// //   const [activeCourse, setActiveCourse] = useState(null);
// //   const [view, setView] = useState('paths');
// //   const [isVisible, setIsVisible] = useState(false);
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
// //       { threshold: 0.2 }
// //     );
// //     if (sectionRef.current) observer.observe(sectionRef.current);
// //     return () => observer.disconnect();
// //   }, []);

// //   const whatsappNumber = "919843406360";
// //   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi ASPL! I'm interested in your programs.")}`;

// //   const paths = [
// //     {
// //       id: 'tech',
// //       title: 'Technology',
// //       description: 'Master software engineering with real projects and expert mentorship.',
// //       color: '#4F46E5',
// //       stats: { students: '500+', placement: '94%' },
// //       courses: [
// //         { name: 'Full Stack Development', duration: '6 months', price: '₹49,999', features: ['HTML, CSS, JavaScript', 'React & Node.js', 'Database Design', 'Live Projects', 'Certificate'] },
// //         { name: 'Data Science & AI', duration: '8 months', price: '₹59,999', features: ['Python', 'Machine Learning', 'Deep Learning', 'Capstone Project', 'Job Guarantee'] },
// //         { name: 'Mobile App Development', duration: '5 months', price: '₹44,999', features: ['React Native', 'iOS & Android', 'App Deployment', 'Mentorship'] },
// //       ]
// //     },
// //     {
// //       id: 'business',
// //       title: 'Business',
// //       description: 'Learn analytics and marketing that delivers measurable business impact.',
// //       color: '#EA580C',
// //       stats: { students: '300+', placement: '90%' },
// //       courses: [
// //         { name: 'Business Analytics', duration: '4 months', price: '₹39,999', features: ['Excel Advanced', 'Power BI', 'Tableau', 'Case Studies'] },
// //         { name: 'Digital Marketing', duration: '3 months', price: '₹29,999', features: ['SEO & SEM', 'Social Media', 'Google Ads', 'Live Campaigns'] },
// //       ]
// //     },
// //     {
// //       id: 'creative',
// //       title: 'Creative',
// //       description: 'Create beautiful, functional designs that users love and brands need.',
// //       color: '#DB2777',
// //       stats: { students: '250+', placement: '88%' },
// //       courses: [
// //         { name: 'UI/UX Design', duration: '5 months', price: '₹44,999', features: ['Figma Mastery', 'User Research', 'Prototyping', 'Portfolio'] },
// //         { name: 'Graphic Design', duration: '4 months', price: '₹34,999', features: ['Photoshop', 'Illustrator', 'Branding', 'Freelancing'] },
// //       ]
// //     },
// //     {
// //       id: 'professional',
// //       title: 'Professional',
// //       description: 'Communication and leadership skills that accelerate any career.',
// //       color: '#059669',
// //       stats: { students: '200+', placement: '96%' },
// //       courses: [
// //         { name: 'Business Communication', duration: '2 months', price: '₹19,999', features: ['Public Speaking', 'Email Writing', 'Negotiation', 'Mock Sessions'] },
// //       ]
// //     },
// //   ];

// //   // ========== PATHS VIEW ==========
// //   const renderPaths = () => (
// //     <div className="cr" ref={sectionRef}>
// //       <div className={`cr__wrap ${isVisible ? 'cr__wrap--in' : ''}`}>
        
// //         {/* Label */}
// //         <span className="cr__label">Career programs</span>
        
// //         {/* Title */}
// //         <h1 className="cr__heading">
// //           Find your
// //           <span className="cr__heading-accent"> path</span>
// //         </h1>

// //         {/* Path cards */}
// //         <div className="cr__paths">
// //           {paths.map((path, i) => (
// //             <button
// //               key={path.id}
// //               className={`cr__path ${activePath === i ? 'cr__path--on' : ''}`}
// //               onClick={() => setActivePath(i)}
// //               style={{ '--p-color': path.color }}
// //             >
// //               <span className="cr__path-index">{String(i + 1).padStart(2, '0')}</span>
// //               <span className="cr__path-title">{path.title}</span>
// //               <span className="cr__path-desc">{path.description}</span>
// //               <span className="cr__path-line" />
// //             </button>
// //           ))}
// //         </div>

// //         {/* Course cards */}
// //         <div className="cr__courses">
// //           {paths[activePath].courses.map((course) => (
// //             <div
// //               key={course.name}
// //               className="cr__course"
// //               onClick={() => { setActiveCourse(course); setView('detail'); }}
// //               style={{ '--p-color': paths[activePath].color }}
// //             >
// //               <span className="cr__course-name">{course.name}</span>
// //               <span className="cr__course-meta">{course.duration}</span>
// //               <span className="cr__course-price">{course.price}</span>
// //               <span className="cr__course-arrow">
// //                 <ArrowRight size={15} strokeWidth={1.5} />
// //               </span>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Stats row */}
// //         <div className="cr__stats">
// //           <div className="cr__stat">
// //             <span className="cr__stat-num" style={{ color: paths[activePath].color }}>
// //               {paths[activePath].stats.students}
// //             </span>
// //             <span className="cr__stat-text">Students trained</span>
// //           </div>
// //           <div className="cr__stat">
// //             <span className="cr__stat-num" style={{ color: paths[activePath].color }}>
// //               {paths[activePath].stats.placement}
// //             </span>
// //             <span className="cr__stat-text">Placement rate</span>
// //           </div>
// //         </div>

// //         {/* WhatsApp link */}
// //         <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cr__wa">
// //           <MessageCircle size={15} strokeWidth={1.5} />
// //           Talk to a counselor
// //         </a>
// //       </div>
// //     </div>
// //   );

// //   // ========== DETAIL VIEW ==========
// //   const renderDetail = () => {
// //     if (!activeCourse) return null;
// //     return (
// //       <div className="cr cr--page">
// //         <div className="cr__wrap cr__wrap--in">
          
// //           <button className="cr__back" onClick={() => setView('paths')}>
// //             ← Back
// //           </button>

// //           <span className="cr__label" style={{ color: paths[activePath].color }}>
// //             {paths[activePath].title}
// //           </span>
          
// //           <h1 className="cr__heading cr__heading--small">
// //             {activeCourse.name}
// //           </h1>

// //           <div className="cr__detail-meta">
// //             <span><Clock size={14} strokeWidth={1.5} /> {activeCourse.duration}</span>
// //             <span className="cr__detail-price">{activeCourse.price}</span>
// //           </div>

// //           <div className="cr__detail-grid">
// //             <div>
// //               <h3 className="cr__detail-subtitle">What you'll learn</h3>
// //               <ul className="cr__detail-list">
// //                 {activeCourse.features.map((f, i) => (
// //                   <li key={i}>
// //                     <CheckCircle2 size={15} strokeWidth={1.5} color={paths[activePath].color} />
// //                     {f}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
            
// //             <div className="cr__detail-box" style={{ borderColor: `${paths[activePath].color}20` }}>
// //               <span className="cr__detail-box-price">{activeCourse.price}</span>
// //               <button 
// //                 className="cr__detail-btn"
// //                 style={{ background: paths[activePath].color }}
// //                 onClick={() => setView('enroll')}
// //               >
// //                 Enroll now
// //                 <ArrowRight size={15} strokeWidth={1.5} />
// //               </button>
// //               <p className="cr__detail-note">
// //                 <Shield size={13} strokeWidth={1.5} color={paths[activePath].color} />
// //                 {paths[activePath].stats.placement} placement rate
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   // ========== ENROLL VIEW ==========
// //   const renderEnroll = () => {
// //     const [form, setForm] = useState({ name: '', email: '', phone: '', batch: '' });
// //     const [done, setDone] = useState(false);

// //     if (done) {
// //       setTimeout(() => setView('success'), 1000);
// //       return (
// //         <div className="cr cr--page cr--center">
// //           <div className="cr__loading">
// //             <div className="cr__loading-ring" style={{ borderTopColor: paths[activePath].color }} />
// //             <p>Submitting…</p>
// //           </div>
// //         </div>
// //       );
// //     }

// //     return (
// //       <div className="cr cr--page">
// //         <div className="cr__wrap cr__wrap--in">
          
// //           <button className="cr__back" onClick={() => setView('detail')}>
// //             ← Back
// //           </button>

// //           <h1 className="cr__heading cr__heading--small">
// //             Start your journey
// //           </h1>
// //           <p className="cr__enroll-course" style={{ color: paths[activePath].color }}>
// //             {activeCourse?.name}
// //           </p>

// //           <form className="cr__form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
// //             <input type="text" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} />
// //             <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} />
// //             <input type="tel" placeholder="Phone" required value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} />
// //             <select required value={form.batch} onChange={e => setForm(p => ({...p, batch: e.target.value}))}>
// //               <option value="">Preferred batch</option>
// //               <option>Morning</option>
// //               <option>Afternoon</option>
// //               <option>Evening</option>
// //               <option>Weekend</option>
// //             </select>
// //             <button type="submit" className="cr__form-btn" style={{ background: paths[activePath].color }}>
// //               <Send size={14} strokeWidth={1.5} />
// //               Submit enrollment
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     );
// //   };

// //   // ========== SUCCESS VIEW ==========
// //   const renderSuccess = () => (
// //     <div className="cr cr--page cr--center">
// //       <div className="cr__wrap cr__wrap--in">
// //         <div className="cr__success">
// //           <div className="cr__success-icon">
// //             <CheckCircle2 size={48} strokeWidth={1.5} color="#059669" />
// //           </div>
// //           <h2>You're enrolled.</h2>
// //           <p>We'll reach out within 24 hours to begin your journey in <strong style={{ color: paths[activePath].color }}>{activeCourse?.name}</strong>.</p>
// //           <button className="cr__form-btn" style={{ background: paths[activePath].color }} onClick={() => { setView('paths'); setActiveCourse(null); }}>
// //             Explore more programs
// //             <ArrowRight size={14} strokeWidth={1.5} />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <section id="careers">
// //       {view === 'paths' && renderPaths()}
// //       {view === 'detail' && renderDetail()}
// //       {view === 'enroll' && renderEnroll()}
// //       {view === 'success' && renderSuccess()}
// //     </section>
// //   );
// // };

// // export default Career;
















// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   ArrowRight,
//   MessageCircle,
//   Clock,
//   Users,
//   CheckCircle2,
//   Shield,
//   Send,
//   Sparkles,
//   GraduationCap,
//   Briefcase,
//   Palette,
//   Star,
//   ChevronRight,
//   X,
// } from 'lucide-react';
// import './Career.css';

// const Career = () => {
//   const [activePath, setActivePath] = useState(0);
//   const [activeCourse, setActiveCourse] = useState(null);
//   const [view, setView] = useState('paths');
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const [hoveredCourse, setHoveredCourse] = useState(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { 
//         if (entry.isIntersecting) {
//           setIsVisible(true);
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

//   const whatsappNumber = "919843406360";
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi ASPL! I'm interested in your programs.")}`;

//   const paths = [
//     {
//       id: 'tech',
//       title: 'Technology',
//       icon: Sparkles,
//       description: 'Master software engineering with real projects and expert mentorship.',
//       color: '#6366F1',
//       gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A78BFA 100%)',
//       bgGradient: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.05) 100%)',
//       stats: { students: '500+', placement: '94%', projects: '20+' },
//       courses: [
//         { name: 'Full Stack Development', duration: '6 months', price: '₹49,999', features: ['HTML, CSS, JavaScript', 'React & Node.js', 'Database Design', 'Live Projects', 'Certificate'] },
//         { name: 'Data Science & AI', duration: '8 months', price: '₹59,999', features: ['Python', 'Machine Learning', 'Deep Learning', 'Capstone Project', 'Job Guarantee'] },
//         { name: 'Mobile App Development', duration: '5 months', price: '₹44,999', features: ['React Native', 'iOS & Android', 'App Deployment', 'Mentorship'] },
//       ]
//     },
//     {
//       id: 'business',
//       title: 'Business',
//       icon: Briefcase,
//       description: 'Learn analytics and marketing that delivers measurable business impact.',
//       color: '#F59E0B',
//       gradient: 'linear-gradient(135deg, #F59E0B 0%, #F97316 50%, #FB923C 100%)',
//       bgGradient: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(249,115,22,0.05) 100%)',
//       stats: { students: '300+', placement: '90%', projects: '15+' },
//       courses: [
//         { name: 'Business Analytics', duration: '4 months', price: '₹39,999', features: ['Excel Advanced', 'Power BI', 'Tableau', 'Case Studies'] },
//         { name: 'Digital Marketing', duration: '3 months', price: '₹29,999', features: ['SEO & SEM', 'Social Media', 'Google Ads', 'Live Campaigns'] },
//       ]
//     },
//     {
//       id: 'creative',
//       title: 'Creative',
//       icon: Palette,
//       description: 'Create beautiful, functional designs that users love and brands need.',
//       color: '#EC4899',
//       gradient: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 50%, #FB7185 100%)',
//       bgGradient: 'linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(244,63,94,0.05) 100%)',
//       stats: { students: '250+', placement: '88%', projects: '25+' },
//       courses: [
//         { name: 'UI/UX Design', duration: '5 months', price: '₹44,999', features: ['Figma Mastery', 'User Research', 'Prototyping', 'Portfolio'] },
//         { name: 'Graphic Design', duration: '4 months', price: '₹34,999', features: ['Photoshop', 'Illustrator', 'Branding', 'Freelancing'] },
//       ]
//     },
//     {
//       id: 'professional',
//       title: 'Professional',
//       icon: Star,
//       description: 'Communication and leadership skills that accelerate any career.',
//       color: '#10B981',
//       gradient: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #34D399 100%)',
//       bgGradient: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(5,150,105,0.05) 100%)',
//       stats: { students: '200+', placement: '96%', projects: '10+' },
//       courses: [
//         { name: 'Business Communication', duration: '2 months', price: '₹19,999', features: ['Public Speaking', 'Email Writing', 'Negotiation', 'Mock Sessions'] },
//       ]
//     },
//   ];

//   const activePathData = paths[activePath];

//   // ========== PATHS VIEW ==========
//   const renderPaths = () => (
//     <div className="cr" ref={sectionRef} onMouseMove={handleMouseMove}>
      
//       {/* Background system */}
//       <div className="cr-bg">
//         <div className="cr-bg-gradient" />
//         <div className="cr-bg-grid" />
//         <div 
//           className="cr-bg-glow"
//           style={{
//             '--mx': `${mousePos.x * 100}%`,
//             '--my': `${mousePos.y * 100}%`,
//             '--glow-color': activePathData.color,
//           }}
//         />
//         {/* Floating orbs */}
//         <div className="cr-orb cr-orb--1" style={{ '--orb-color': '#6366F1' }} />
//         <div className="cr-orb cr-orb--2" style={{ '--orb-color': '#EC4899' }} />
//       </div>

//       <div className={`cr-wrap ${isVisible ? 'is-visible' : ''}`}>
        
//         {/* Label */}
//         <div className="cr-label-row">
//           <span className="cr-label-line" />
//           <span className="cr-label-text">
//             <GraduationCap size={16} strokeWidth={1.8} />
//             Career programs
//           </span>
//           <span className="cr-label-line" />
//         </div>
        
//         {/* Title */}
//         <h1 className="cr-heading">
//           {/* <span className="cr-heading-static">Find your path</span> */}
//           <span className="cr-heading-accent-wrapper">
//             <span className="cr-heading-accent"> Find your path</span>
//             <svg className="cr-heading-underline" viewBox="0 0 100 8" preserveAspectRatio="none">
//               <path d="M0,4 Q25,8 50,4 Q75,0 100,4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//             </svg>
//           </span>
//         </h1>

//         {/* Path selector pills */}
//         <div className="cr-path-selector">
//           {paths.map((path, i) => (
//             <button
//               key={path.id}
//               className={`cr-path-pill ${activePath === i ? 'is-active' : ''}`}
//               onClick={() => setActivePath(i)}
//               style={{ 
//                 '--pill-color': path.color,
//                 '--pill-gradient': path.gradient,
//               }}
//             >
//               <span className="cr-path-pill-icon">
//                 <path.icon size={16} strokeWidth={1.8} />
//               </span>
//               <span className="cr-path-pill-title">{path.title}</span>
//               {activePath === i && <div className="cr-path-pill-glow" />}
//             </button>
//           ))}
//         </div>

//         {/* Active path description */}
//         <p className="cr-path-desc">
//           {activePathData.description}
//         </p>

//         {/* Course cards */}
//         <div className="cr-courses-grid">
//           {activePathData.courses.map((course, i) => (
//             <article
//               key={course.name}
//               className={`cr-course-card ${hoveredCourse === i ? 'is-hovered' : ''} ${hoveredCourse !== null && hoveredCourse !== i ? 'is-dimmed' : ''}`}
//               style={{ 
//                 '--card-color': activePathData.color,
//                 '--card-gradient': activePathData.gradient,
//                 '--card-index': i,
//               }}
//               onClick={() => { setActiveCourse(course); setView('detail'); }}
//               onMouseEnter={() => setHoveredCourse(i)}
//               onMouseLeave={() => setHoveredCourse(null)}
//             >
//               {/* Shine effect */}
//               <div className="cr-course-shine" />
              
//               {/* Top accent bar */}
//               <div className="cr-course-accent-bar" />
              
//               <div className="cr-course-header">
//                 <h3 className="cr-course-name">{course.name}</h3>
//                 <span className="cr-course-duration">
//                   <Clock size={13} strokeWidth={1.8} />
//                   {course.duration}
//                 </span>
//               </div>
              
//               <div className="cr-course-body">
//                 <ul className="cr-course-features">
//                   {course.features.slice(0, 3).map((f, j) => (
//                     <li key={j} className="cr-course-feature">
//                       <CheckCircle2 size={14} strokeWidth={1.8} />
//                       {f}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div className="cr-course-footer">
//                 <span className="cr-course-price">{course.price}</span>
//                 <span className="cr-course-cta">
//                   Learn more
//                   <ChevronRight size={14} strokeWidth={2} />
//                 </span>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Stats bar */}
//         <div className="cr-stats-bar">
//           <div className="cr-stat-item">
//             <Users size={18} strokeWidth={1.8} className="cr-stat-icon" />
//             <div className="cr-stat-content">
//               <span className="cr-stat-value" style={{ color: activePathData.color }}>
//                 {activePathData.stats.students}
//               </span>
//               <span className="cr-stat-label">Students trained</span>
//             </div>
//           </div>
//           <div className="cr-stat-divider" />
//           <div className="cr-stat-item">
//             <Shield size={18} strokeWidth={1.8} className="cr-stat-icon" />
//             <div className="cr-stat-content">
//               <span className="cr-stat-value" style={{ color: activePathData.color }}>
//                 {activePathData.stats.placement}
//               </span>
//               <span className="cr-stat-label">Placement rate</span>
//             </div>
//           </div>
//           <div className="cr-stat-divider" />
//           <div className="cr-stat-item">
//             <Star size={18} strokeWidth={1.8} className="cr-stat-icon" />
//             <div className="cr-stat-content">
//               <span className="cr-stat-value" style={{ color: activePathData.color }}>
//                 {activePathData.stats.projects}
//               </span>
//               <span className="cr-stat-label">Live projects</span>
//             </div>
//           </div>
//         </div>

//         {/* WhatsApp CTA */}
//         <a 
//           href={whatsappLink} 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           className="cr-wa-cta"
//           style={{ '--wa-color': activePathData.color }}
//         >
//           <MessageCircle size={16} strokeWidth={1.8} />
//           Talk to a counselor
//           <ArrowRight size={14} strokeWidth={2} />
//         </a>
//       </div>
//     </div>
//   );

//   // ========== DETAIL VIEW ==========
//   const renderDetail = () => {
//     if (!activeCourse) return null;
//     return (
//       <div className="cr cr--detail">
//         <div className="cr-bg">
//           <div className="cr-bg-gradient-detail" style={{ background: activePathData.bgGradient }} />
//         </div>
        
//         <div className="cr-wrap cr-wrap--in">
          
//           <button className="cr-back-btn" onClick={() => { setView('paths'); setActiveCourse(null); }}>
//             <ArrowRight size={16} strokeWidth={2} style={{ transform: 'rotate(180deg)' }} />
//             Back to programs
//           </button>

//           <div className="cr-detail-header">
//             <span className="cr-detail-badge" style={{ background: `${activePathData.color}15`, color: activePathData.color }}>
//               <activePathData.icon size={14} strokeWidth={1.8} />
//               {activePathData.title}
//             </span>
            
//             <h1 className="cr-detail-title">{activeCourse.name}</h1>
            
//             <div className="cr-detail-meta-row">
//               <span className="cr-detail-meta-item">
//                 <Clock size={15} strokeWidth={1.8} />
//                 {activeCourse.duration}
//               </span>
//               <span className="cr-detail-meta-divider">·</span>
//               <span className="cr-detail-meta-item cr-detail-meta-price">
//                 {activeCourse.price}
//               </span>
//             </div>
//           </div>

//           <div className="cr-detail-grid">
//             <div className="cr-detail-card">
//               <h3 className="cr-detail-card-title">What you'll learn</h3>
//               <ul className="cr-detail-feature-list">
//                 {activeCourse.features.map((f, i) => (
//                   <li key={i} className="cr-detail-feature-item">
//                     <div className="cr-detail-check" style={{ background: `${activePathData.color}15`, color: activePathData.color }}>
//                       <CheckCircle2 size={16} strokeWidth={2} />
//                     </div>
//                     <span>{f}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div className="cr-detail-card cr-detail-card--cta">
//               <div className="cr-detail-price-big">{activeCourse.price}</div>
//               <p className="cr-detail-price-note">One-time payment · EMI available</p>
              
//               <button 
//                 className="cr-detail-enroll-btn"
//                 style={{ background: activePathData.gradient }}
//                 onClick={() => setView('enroll')}
//               >
//                 Enroll now
//                 <ArrowRight size={16} strokeWidth={2} />
//               </button>
              
//               <div className="cr-detail-guarantee">
//                 <Shield size={14} strokeWidth={1.8} color={activePathData.color} />
//                 <span>{activePathData.stats.placement} placement rate · Job guarantee</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // ========== ENROLL VIEW ==========
//   const renderEnroll = () => {
//     const [form, setForm] = useState({ name: '', email: '', phone: '', batch: '' });
//     const [done, setDone] = useState(false);

//     if (done) {
//       setTimeout(() => setView('success'), 800);
//       return (
//         <div className="cr cr--detail cr--center">
//           <div className="cr-loading">
//             <div className="cr-loading-ring" style={{ borderTopColor: activePathData.color }} />
//             <p>Submitting your enrollment…</p>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className="cr cr--detail">
//         <div className="cr-bg">
//           <div className="cr-bg-gradient-detail" style={{ background: activePathData.bgGradient }} />
//         </div>
        
//         <div className="cr-wrap cr-wrap--in cr-wrap--narrow">
          
//           <button className="cr-back-btn" onClick={() => setView('detail')}>
//             <ArrowRight size={16} strokeWidth={2} style={{ transform: 'rotate(180deg)' }} />
//             Back
//           </button>

//           <div className="cr-enroll-header">
//             <h1 className="cr-enroll-title">Start your journey</h1>
//             <p className="cr-enroll-course-name" style={{ color: activePathData.color }}>
//               {activeCourse?.name}
//             </p>
//           </div>

//           <form className="cr-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
//             <div className="cr-form-group">
//               <label className="cr-form-label">Full name</label>
//               <input 
//                 type="text" 
//                 placeholder="Enter your full name" 
//                 required 
//                 value={form.name} 
//                 onChange={e => setForm(p => ({...p, name: e.target.value}))}
//                 className="cr-form-input"
//               />
//             </div>
            
//             <div className="cr-form-row">
//               <div className="cr-form-group">
//                 <label className="cr-form-label">Email</label>
//                 <input 
//                   type="email" 
//                   placeholder="you@example.com" 
//                   required 
//                   value={form.email} 
//                   onChange={e => setForm(p => ({...p, email: e.target.value}))}
//                   className="cr-form-input"
//                 />
//               </div>
//               <div className="cr-form-group">
//                 <label className="cr-form-label">Phone</label>
//                 <input 
//                   type="tel" 
//                   placeholder="+91 98765 43210" 
//                   required 
//                   value={form.phone} 
//                   onChange={e => setForm(p => ({...p, phone: e.target.value}))}
//                   className="cr-form-input"
//                 />
//               </div>
//             </div>
            
//             <div className="cr-form-group">
//               <label className="cr-form-label">Preferred batch</label>
//               <select 
//                 required 
//                 value={form.batch} 
//                 onChange={e => setForm(p => ({...p, batch: e.target.value}))}
//                 className="cr-form-input cr-form-select"
//               >
//                 <option value="">Select a batch</option>
//                 <option>Morning (8 AM - 11 AM)</option>
//                 <option>Afternoon (12 PM - 3 PM)</option>
//                 <option>Evening (4 PM - 7 PM)</option>
//                 <option>Weekend (Sat & Sun)</option>
//               </select>
//             </div>
            
//             <button 
//               type="submit" 
//               className="cr-form-submit"
//               style={{ background: activePathData.gradient }}
//             >
//               <Send size={15} strokeWidth={2} />
//               Submit enrollment
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   };

//   // ========== SUCCESS VIEW ==========
//   const renderSuccess = () => (
//     <div className="cr cr--detail cr--center">
//       <div className="cr-bg">
//         <div className="cr-bg-gradient-detail" style={{ background: activePathData.bgGradient }} />
//       </div>
      
//       <div className="cr-wrap cr-wrap--in cr-wrap--narrow">
//         <div className="cr-success">
//           <div className="cr-success-icon-wrap">
//             <div className="cr-success-icon-ring" style={{ background: `${activePathData.color}15` }} />
//             <CheckCircle2 size={52} strokeWidth={1.5} color={activePathData.color} className="cr-success-icon" />
//           </div>
          
//           <h2 className="cr-success-title">You're enrolled!</h2>
//           <p className="cr-success-text">
//             We'll reach out within <strong>24 hours</strong> to begin your journey in
//             <strong style={{ color: activePathData.color }}> {activeCourse?.name}</strong>.
//           </p>
          
//           <div className="cr-success-actions">
//             <button 
//               className="cr-form-submit"
//               style={{ background: activePathData.gradient }}
//               onClick={() => { setView('paths'); setActiveCourse(null); }}
//             >
//               Explore more programs
//               <ArrowRight size={15} strokeWidth={2} />
//             </button>
//             <a 
//               href={whatsappLink} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="cr-success-wa"
//             >
//               <MessageCircle size={15} strokeWidth={1.8} />
//               Chat on WhatsApp
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <section id="careers">
//       {view === 'paths' && renderPaths()}
//       {view === 'detail' && renderDetail()}
//       {view === 'enroll' && renderEnroll()}
//       {view === 'success' && renderSuccess()}
//     </section>
//   );
// };

// export default Career;


import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight,
  MessageCircle,
  Clock,
  Users,
  CheckCircle2,
  Shield,
  Send,
  Sparkles,
  GraduationCap,
  Briefcase,
  Palette,
  Star,
  ChevronRight,
} from 'lucide-react';
import './Career.css';

const Career = () => {
  const [activePath, setActivePath] = useState(0);
  const [activeCourse, setActiveCourse] = useState(null);
  const [view, setView] = useState('paths');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const sectionRef = useRef(null);

  // ✅ Moved enroll form state to top level — fixes the hooks error
  const [form, setForm] = useState({ name: '', email: '', phone: '', batch: '' });
  const [done, setDone] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const whatsappNumber = "919843406360";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi ASPL! I'm interested in your programs.")}`;

  const paths = [
    {
      id: 'tech',
      title: 'Technology',
      icon: Sparkles,
      description: 'Master software engineering with real projects and expert mentorship.',
      color: '#6366F1',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A78BFA 100%)',
      bgGradient: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.05) 100%)',
      stats: { students: '500+', placement: '94%', projects: '20+' },
      courses: [
        { name: 'Full Stack Development', duration: '6 months', price: '₹49,999', features: ['HTML, CSS, JavaScript', 'React & Node.js', 'Database Design', 'Live Projects', 'Certificate'] },
        { name: 'Data Science & AI', duration: '8 months', price: '₹59,999', features: ['Python', 'Machine Learning', 'Deep Learning', 'Capstone Project', 'Job Guarantee'] },
        { name: 'Mobile App Development', duration: '5 months', price: '₹44,999', features: ['React Native', 'iOS & Android', 'App Deployment', 'Mentorship'] },
      ]
    },
    {
      id: 'business',
      title: 'Business',
      icon: Briefcase,
      description: 'Learn analytics and marketing that delivers measurable business impact.',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #F97316 50%, #FB923C 100%)',
      bgGradient: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(249,115,22,0.05) 100%)',
      stats: { students: '300+', placement: '90%', projects: '15+' },
      courses: [
        { name: 'Business Analytics', duration: '4 months', price: '₹39,999', features: ['Excel Advanced', 'Power BI', 'Tableau', 'Case Studies'] },
        { name: 'Digital Marketing', duration: '3 months', price: '₹29,999', features: ['SEO & SEM', 'Social Media', 'Google Ads', 'Live Campaigns'] },
      ]
    },
    {
      id: 'creative',
      title: 'Creative',
      icon: Palette,
      description: 'Create beautiful, functional designs that users love and brands need.',
      color: '#EC4899',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 50%, #FB7185 100%)',
      bgGradient: 'linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(244,63,94,0.05) 100%)',
      stats: { students: '250+', placement: '88%', projects: '25+' },
      courses: [
        { name: 'UI/UX Design', duration: '5 months', price: '₹44,999', features: ['Figma Mastery', 'User Research', 'Prototyping', 'Portfolio'] },
        { name: 'Graphic Design', duration: '4 months', price: '₹34,999', features: ['Photoshop', 'Illustrator', 'Branding', 'Freelancing'] },
      ]
    },
    {
      id: 'professional',
      title: 'Professional',
      icon: Star,
      description: 'Communication and leadership skills that accelerate any career.',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #34D399 100%)',
      bgGradient: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(5,150,105,0.05) 100%)',
      stats: { students: '200+', placement: '96%', projects: '10+' },
      courses: [
        { name: 'Business Communication', duration: '2 months', price: '₹19,999', features: ['Public Speaking', 'Email Writing', 'Negotiation', 'Mock Sessions'] },
      ]
    },
  ];

  const activePathData = paths[activePath];

  // Reset form when opening enroll view
  const goToEnroll = () => {
    setForm({ name: '', email: '', phone: '', batch: '' });
    setDone(false);
    setView('enroll');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => {
      setView('success');
    }, 800);
  };

  // ========== PATHS VIEW ==========
  const renderPaths = () => (
    <div className="cr" ref={sectionRef} onMouseMove={handleMouseMove}>
      
      {/* Background system */}
      <div className="cr-bg">
        <div className="cr-bg-gradient" />
        <div className="cr-bg-grid" />
        <div 
          className="cr-bg-glow"
          style={{
            '--mx': `${mousePos.x * 100}%`,
            '--my': `${mousePos.y * 100}%`,
            '--glow-color': activePathData.color,
          }}
        />
        {/* Floating orbs */}
        <div className="cr-orb cr-orb--1" style={{ '--orb-color': '#6366F1' }} />
        <div className="cr-orb cr-orb--2" style={{ '--orb-color': '#EC4899' }} />
      </div>

      <div className={`cr-wrap ${isVisible ? 'is-visible' : ''}`}>
        
        {/* Label */}
        <div className="cr-label-row">
          <span className="cr-label-line" />
          <span className="cr-label-text">
            <GraduationCap size={16} strokeWidth={1.8} />
            Career programs
          </span>
          <span className="cr-label-line" />
        </div>
        
        {/* Title */}
        <h1 className="cr-heading">
          <span className="cr-heading-accent-wrapper">
            <span className="cr-heading-accent"> Find your path</span>
            <svg className="cr-heading-underline" viewBox="0 0 100 8" preserveAspectRatio="none">
              <path d="M0,4 Q25,8 50,4 Q75,0 100,4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>

        {/* Path selector pills */}
        <div className="cr-path-selector">
          {paths.map((path, i) => (
            <button
              key={path.id}
              className={`cr-path-pill ${activePath === i ? 'is-active' : ''}`}
              onClick={() => setActivePath(i)}
              style={{ 
                '--pill-color': path.color,
                '--pill-gradient': path.gradient,
              }}
            >
              <span className="cr-path-pill-icon">
                <path.icon size={16} strokeWidth={1.8} />
              </span>
              <span className="cr-path-pill-title">{path.title}</span>
              {activePath === i && <div className="cr-path-pill-glow" />}
            </button>
          ))}
        </div>

        {/* Active path description */}
        <p className="cr-path-desc">
          {activePathData.description}
        </p>

        {/* Course cards */}
        <div className="cr-courses-grid">
          {activePathData.courses.map((course, i) => (
            <article
              key={course.name}
              className={`cr-course-card ${hoveredCourse === i ? 'is-hovered' : ''} ${hoveredCourse !== null && hoveredCourse !== i ? 'is-dimmed' : ''}`}
              style={{ 
                '--card-color': activePathData.color,
                '--card-gradient': activePathData.gradient,
                '--card-index': i,
              }}
              onClick={() => { setActiveCourse(course); setView('detail'); }}
              onMouseEnter={() => setHoveredCourse(i)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              {/* Shine effect */}
              <div className="cr-course-shine" />
              
              {/* Top accent bar */}
              <div className="cr-course-accent-bar" />
              
              <div className="cr-course-header">
                <h3 className="cr-course-name">{course.name}</h3>
                <span className="cr-course-duration">
                  <Clock size={13} strokeWidth={1.8} />
                  {course.duration}
                </span>
              </div>
              
              <div className="cr-course-body">
                <ul className="cr-course-features">
                  {course.features.slice(0, 3).map((f, j) => (
                    <li key={j} className="cr-course-feature">
                      <CheckCircle2 size={14} strokeWidth={1.8} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="cr-course-footer">
                <span className="cr-course-price">{course.price}</span>
                <span className="cr-course-cta">
                  Learn more
                  <ChevronRight size={14} strokeWidth={2} />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Stats bar */}
        <div className="cr-stats-bar">
          <div className="cr-stat-item">
            <Users size={18} strokeWidth={1.8} className="cr-stat-icon" />
            <div className="cr-stat-content">
              <span className="cr-stat-value" style={{ color: activePathData.color }}>
                {activePathData.stats.students}
              </span>
              <span className="cr-stat-label">Students trained</span>
            </div>
          </div>
          <div className="cr-stat-divider" />
          <div className="cr-stat-item">
            <Shield size={18} strokeWidth={1.8} className="cr-stat-icon" />
            <div className="cr-stat-content">
              <span className="cr-stat-value" style={{ color: activePathData.color }}>
                {activePathData.stats.placement}
              </span>
              <span className="cr-stat-label">Placement rate</span>
            </div>
          </div>
          <div className="cr-stat-divider" />
          <div className="cr-stat-item">
            <Star size={18} strokeWidth={1.8} className="cr-stat-icon" />
            <div className="cr-stat-content">
              <span className="cr-stat-value" style={{ color: activePathData.color }}>
                {activePathData.stats.projects}
              </span>
              <span className="cr-stat-label">Live projects</span>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cr-wa-cta"
          style={{ '--wa-color': activePathData.color }}
        >
          <MessageCircle size={16} strokeWidth={1.8} />
          Talk to a counselor
          <ArrowRight size={14} strokeWidth={2} />
        </a>
      </div>
    </div>
  );

  // ========== DETAIL VIEW ==========
  const renderDetail = () => {
    if (!activeCourse) return null;
    return (
      <div className="cr cr--detail">
        <div className="cr-bg">
          <div className="cr-bg-gradient-detail" style={{ background: activePathData.bgGradient }} />
        </div>
        
        <div className="cr-wrap cr-wrap--in">
          
          <button className="cr-back-btn" onClick={() => { setView('paths'); setActiveCourse(null); }}>
            <ArrowRight size={16} strokeWidth={2} style={{ transform: 'rotate(180deg)' }} />
            Back to programs
          </button>

          <div className="cr-detail-header">
            <span className="cr-detail-badge" style={{ background: `${activePathData.color}15`, color: activePathData.color }}>
              <activePathData.icon size={14} strokeWidth={1.8} />
              {activePathData.title}
            </span>
            
            <h1 className="cr-detail-title">{activeCourse.name}</h1>
            
            <div className="cr-detail-meta-row">
              <span className="cr-detail-meta-item">
                <Clock size={15} strokeWidth={1.8} />
                {activeCourse.duration}
              </span>
              <span className="cr-detail-meta-divider">·</span>
              <span className="cr-detail-meta-item cr-detail-meta-price">
                {activeCourse.price}
              </span>
            </div>
          </div>

          <div className="cr-detail-grid">
            <div className="cr-detail-card">
              <h3 className="cr-detail-card-title">What you'll learn</h3>
              <ul className="cr-detail-feature-list">
                {activeCourse.features.map((f, i) => (
                  <li key={i} className="cr-detail-feature-item">
                    <div className="cr-detail-check" style={{ background: `${activePathData.color}15`, color: activePathData.color }}>
                      <CheckCircle2 size={16} strokeWidth={2} />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="cr-detail-card cr-detail-card--cta">
              <div className="cr-detail-price-big">{activeCourse.price}</div>
              <p className="cr-detail-price-note">One-time payment · EMI available</p>
              
              <button 
                className="cr-detail-enroll-btn"
                style={{ background: activePathData.gradient }}
                onClick={goToEnroll}
              >
                Enroll now
                <ArrowRight size={16} strokeWidth={2} />
              </button>
              
              <div className="cr-detail-guarantee">
                <Shield size={14} strokeWidth={1.8} color={activePathData.color} />
                <span>{activePathData.stats.placement} placement rate · Job guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ========== ENROLL VIEW ==========
  const renderEnroll = () => {
    if (done) {
      return (
        <div className="cr cr--detail cr--center">
          <div className="cr-loading">
            <div className="cr-loading-ring" style={{ borderTopColor: activePathData.color }} />
            <p>Submitting your enrollment…</p>
          </div>
        </div>
      );
    }

    return (
      <div className="cr cr--detail">
        <div className="cr-bg">
          <div className="cr-bg-gradient-detail" style={{ background: activePathData.bgGradient }} />
        </div>
        
        <div className="cr-wrap cr-wrap--in cr-wrap--narrow">
          
          <button className="cr-back-btn" onClick={() => setView('detail')}>
            <ArrowRight size={16} strokeWidth={2} style={{ transform: 'rotate(180deg)' }} />
            Back
          </button>

          <div className="cr-enroll-header">
            <h1 className="cr-enroll-title">Start your journey</h1>
            <p className="cr-enroll-course-name" style={{ color: activePathData.color }}>
              {activeCourse?.name}
            </p>
          </div>

          <form className="cr-form" onSubmit={handleSubmit}>
            <div className="cr-form-group">
              <label className="cr-form-label">Full name</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                required 
                value={form.name} 
                onChange={e => setForm(p => ({...p, name: e.target.value}))}
                className="cr-form-input"
              />
            </div>
            
            <div className="cr-form-row">
              <div className="cr-form-group">
                <label className="cr-form-label">Email</label>
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  required 
                  value={form.email} 
                  onChange={e => setForm(p => ({...p, email: e.target.value}))}
                  className="cr-form-input"
                />
              </div>
              <div className="cr-form-group">
                <label className="cr-form-label">Phone</label>
                <input 
                  type="tel" 
                  placeholder="+91 98765 43210" 
                  required 
                  value={form.phone} 
                  onChange={e => setForm(p => ({...p, phone: e.target.value}))}
                  className="cr-form-input"
                />
              </div>
            </div>
            
            <div className="cr-form-group">
              <label className="cr-form-label">Preferred batch</label>
              <select 
                required 
                value={form.batch} 
                onChange={e => setForm(p => ({...p, batch: e.target.value}))}
                className="cr-form-input cr-form-select"
              >
                <option value="">Select a batch</option>
                <option>Morning (8 AM - 11 AM)</option>
                <option>Afternoon (12 PM - 3 PM)</option>
                <option>Evening (4 PM - 7 PM)</option>
                <option>Weekend (Sat & Sun)</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="cr-form-submit"
              style={{ background: activePathData.gradient }}
            >
              <Send size={15} strokeWidth={2} />
              Submit enrollment
            </button>
          </form>
        </div>
      </div>
    );
  };

  // ========== SUCCESS VIEW ==========
  const renderSuccess = () => (
    <div className="cr cr--detail cr--center">
      <div className="cr-bg">
        <div className="cr-bg-gradient-detail" style={{ background: activePathData.bgGradient }} />
      </div>
      
      <div className="cr-wrap cr-wrap--in cr-wrap--narrow">
        <div className="cr-success">
          <div className="cr-success-icon-wrap">
            <div className="cr-success-icon-ring" style={{ background: `${activePathData.color}15` }} />
            <CheckCircle2 size={52} strokeWidth={1.5} color={activePathData.color} className="cr-success-icon" />
          </div>
          
          <h2 className="cr-success-title">You're enrolled!</h2>
          <p className="cr-success-text">
            We'll reach out within <strong>24 hours</strong> to begin your journey in
            <strong style={{ color: activePathData.color }}> {activeCourse?.name}</strong>.
          </p>
          
          <div className="cr-success-actions">
            <button 
              className="cr-form-submit"
              style={{ background: activePathData.gradient }}
              onClick={() => { setView('paths'); setActiveCourse(null); }}
            >
              Explore more programs
              <ArrowRight size={15} strokeWidth={2} />
            </button>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cr-success-wa"
            >
              <MessageCircle size={15} strokeWidth={1.8} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="careers">
      {view === 'paths' && renderPaths()}
      {view === 'detail' && renderDetail()}
      {view === 'enroll' && renderEnroll()}
      {view === 'success' && renderSuccess()}
    </section>
  );
};

export default Career;