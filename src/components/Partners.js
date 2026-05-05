// import React, { useEffect, useRef, useState } from 'react';
// import './Partners.css';

// const Partners = () => {
//   const [visible, setVisible] = useState(false);
//   const sectionRef = useRef(null);

//   const partners = [
//     { 
//       name: 'Avant Enterprises', 
//       location: 'Bengaluru',
//       type: 'Technology',
//       since: '2021',
//       projects: '15+',
//       description: 'Enterprise solutions and digital transformation across South India.',
//       color: '#4F46E5',
//     },
//     { 
//       name: 'Digi Pondy', 
//       location: 'Pondicherry',
//       type: 'Marketing',
//       since: '2022',
//       projects: '25+',
//       description: 'Digital marketing campaigns that drive measurable growth.',
//       color: '#EA580C',
//     },
//     { 
//       name: 'De mentee Academy', 
//       location: 'Pondicherry',
//       type: 'Education',
//       since: '2020',
//       projects: '500+',
//       description: 'Premier training institution for skill development and placement.',
//       color: '#059669',
//     },
//     { 
//       name: 'Redbook Events', 
//       location: 'Coimbatore',
//       type: 'Events',
//       since: '2022',
//       projects: '30+',
//       description: 'Corporate conferences and celebrations with flawless execution.',
//       color: '#DB2777',
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setVisible(true); },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="partners" className="ptn" ref={sectionRef}>
      
//       {/* Apple-style animated background */}
//       <div className="ptn__canvas">
//         <div className="ptn__mesh ptn__mesh--1" />
//         <div className="ptn__mesh ptn__mesh--2" />
//         <div className="ptn__mesh ptn__mesh--3" />
//       </div>

//       <div className={`ptn__wrap ${visible ? 'ptn__wrap--in' : ''}`}>
        
//         {/* Header */}
//         <div className="ptn__header">
//           <div className="ptn__label">Our Network</div>
//           <h2 className="ptn__heading">
//             Trusted by
//             <span className="ptn__heading-accent"> industry leaders</span>
//           </h2>
//           <p className="ptn__subtitle">
//             Strategic collaborations that amplify everything we deliver.
//           </p>
//         </div>

//         {/* Partner story cards — horizontal scroll on mobile, wrap on desktop */}
//         <div className="ptn__stories">
//           {partners.map((partner, i) => (
//             <article
//               key={i}
//               className="ptn__story"
//               style={{ 
//                 '--p-color': partner.color,
//                 animationDelay: `${i * 0.12}s`,
//               }}
//             >
//               {/* Large stat number */}
//               <span className="ptn__story-stat" style={{ color: partner.color }}>
//                 {partner.projects}
//               </span>
              
//               {/* Content */}
//               <div className="ptn__story-content">
//                 <h3 className="ptn__story-name">{partner.name}</h3>
//                 <span className="ptn__story-meta">
//                   {partner.type} · {partner.location}
//                 </span>
//                 <p className="ptn__story-desc">{partner.description}</p>
//                 <span className="ptn__story-since" style={{ color: partner.color }}>
//                   Partner since {partner.since}
//                 </span>
//               </div>
              
//               {/* Accent bar */}
//               <span className="ptn__story-line" style={{ background: partner.color }} />
//             </article>
//           ))}
//         </div>

//         {/* Trust indicators */}
//         <div className="ptn__trust">
//           <div className="ptn__trust-item">
//             <span className="ptn__trust-value">4+</span>
//             <span className="ptn__trust-label">Active Partners</span>
//           </div>
//           <div className="ptn__trust-item">
//             <span className="ptn__trust-value">3</span>
//             <span className="ptn__trust-label">Cities</span>
//           </div>
//           <div className="ptn__trust-item">
//             <span className="ptn__trust-value">570+</span>
//             <span className="ptn__trust-label">Joint Projects</span>
//           </div>
//           <div className="ptn__trust-item">
//             <span className="ptn__trust-value">4</span>
//             <span className="ptn__trust-label">Industries</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;



















// import React, { useEffect, useRef, useState } from 'react';
// import { ArrowRight } from 'lucide-react';
// import './Partners.css';

// const Partners = () => {
//   const [visible, setVisible] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const sectionRef = useRef(null);
//   const canvasRef = useRef(null);

//   const partners = [
//     { 
//       name: 'Avant Enterprises', 
//       location: 'Bengaluru',
//       type: 'Technology',
//       since: '2021',
//       projects: '15+',
//       description: 'Enterprise solutions and digital transformation across South India.',
//       color: '#4F46E5',
//     },
//     { 
//       name: 'Digi Pondy', 
//       location: 'Pondicherry',
//       type: 'Marketing',
//       since: '2022',
//       projects: '25+',
//       description: 'Digital marketing campaigns that drive measurable growth.',
//       color: '#EA580C',
//     },
//     { 
//       name: 'De mentee Academy', 
//       location: 'Pondicherry',
//       type: 'Education',
//       since: '2020',
//       projects: '500+',
//       description: 'Premier training institution for skill development and placement.',
//       color: '#059669',
//     },
//     { 
//       name: 'Redbook Events', 
//       location: 'Coimbatore',
//       type: 'Events',
//       since: '2022',
//       projects: '30+',
//       description: 'Corporate conferences and celebrations with flawless execution.',
//       color: '#DB2777',
//     },
//   ];

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

//   // Hexagon canvas animation
//   useEffect(() => {
//     if (!canvasRef.current || !visible) return;
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let animId;
//     let time = 0;

//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener('resize', resize);

//     const hexSize = 40;
//     const hexHeight = hexSize * Math.sqrt(3);
//     const hexWidth = hexSize * 2;

//     const drawHexagon = (x, y, size, opacity) => {
//       ctx.beginPath();
//       for (let i = 0; i < 6; i++) {
//         const angle = (Math.PI / 3) * i - Math.PI / 6;
//         const px = x + size * Math.cos(angle);
//         const py = y + size * Math.sin(angle);
//         if (i === 0) ctx.moveTo(px, py);
//         else ctx.lineTo(px, py);
//       }
//       ctx.closePath();
//       ctx.strokeStyle = `rgba(0,0,0,${opacity})`;
//       ctx.lineWidth = 0.5;
//       ctx.stroke();
//     };

//     const animate = () => {
//       time += 0.003;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const cols = Math.ceil(canvas.width / (hexWidth * 0.75)) + 1;
//       const rows = Math.ceil(canvas.height / hexHeight) + 1;

//       for (let row = -1; row < rows; row++) {
//         for (let col = -1; col < cols; col++) {
//           const x = col * hexWidth * 0.75;
//           const y = row * hexHeight + (col % 2 === 0 ? 0 : hexHeight / 2);
          
//           const distX = (x - canvas.width * mousePos.x) / canvas.width;
//           const distY = (y - canvas.height * mousePos.y) / canvas.height;
//           const dist = Math.sqrt(distX * distX + distY * distY);
          
//           const wave = Math.sin(dist * 8 - time * 2) * 0.5 + 0.5;
//           const opacity = 0.02 + wave * 0.04;
          
//           drawHexagon(x, y, hexSize * 0.85, opacity);
//         }
//       }

//       animId = requestAnimationFrame(animate);
//     };
//     animate();

//     return () => {
//       cancelAnimationFrame(animId);
//       window.removeEventListener('resize', resize);
//     };
//   }, [visible, mousePos]);

//   return (
//     <section id="partners" className="ptn" ref={sectionRef}>
      
//       {/* Hexagon canvas */}
//       <canvas ref={canvasRef} className="ptn__hex" />
      
//       {/* Gradient atmosphere */}
//       <div className="ptn__atmos">
//         <div className="ptn__atmos-orb ptn__atmos-orb--1" />
//         <div className="ptn__atmos-orb ptn__atmos-orb--2" />
//         <div 
//           className="ptn__atmos-glow"
//           style={{
//             background: `radial-gradient(ellipse at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(79,70,229,0.04) 0%, transparent 50%)`,
//           }}
//         />
//       </div>

//       <div className={`ptn__wrap ${visible ? 'ptn__wrap--in' : ''}`}>
        
//         {/* Header */}
//         <div className="ptn__head">
//           <span className="ptn__head-label">Our Network</span>
//           <h2 className="ptn__head-title">
//             Trusted by
//             <span className="ptn__head-title-fade"> industry leaders</span>
//           </h2>
//           <p className="ptn__head-desc">
//             Strategic collaborations that amplify everything we deliver.
//           </p>
//         </div>

//         {/* Partner cards */}
//         <div className="ptn__grid">
//           {partners.map((partner, i) => {
//             const isHovered = hoveredCard === i;
//             return (
//               <article
//                 key={i}
//                 className={`ptn__card ${isHovered ? 'ptn__card--hover' : ''}`}
//                 onMouseEnter={() => setHoveredCard(i)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 style={{ 
//                   '--p-color': partner.color,
//                   animationDelay: `${i * 0.1}s`,
//                 }}
//               >
//                 {/* Large stat */}
//                 <span className="ptn__card-stat" style={{ color: partner.color }}>
//                   {partner.projects}
//                 </span>
                
//                 <div className="ptn__card-body">
//                   <h3 className="ptn__card-name">{partner.name}</h3>
//                   <span className="ptn__card-meta">{partner.type} · {partner.location}</span>
//                   <p className="ptn__card-desc">{partner.description}</p>
//                   <span className="ptn__card-since" style={{ color: partner.color }}>
//                     Partner since {partner.since}
//                   </span>
//                 </div>

//                 <span className="ptn__card-line" style={{ background: partner.color }} />
//               </article>
//             );
//           })}
//         </div>

//         {/* Trust bar */}
//         <div className="ptn__trust">
//           <div className="ptn__trust-item">
//             <span className="ptn__trust-num">4+</span>
//             <span className="ptn__trust-lbl">Active Partners</span>
//           </div>
//           <div className="ptn__trust-item">
//             <span className="ptn__trust-num">3</span>
//             <span className="ptn__trust-lbl">Cities</span>
//           </div>
//           <div className="ptn__trust-item">
//             <span className="ptn__trust-num">570+</span>
//             <span className="ptn__trust-lbl">Joint Projects</span>
//           </div>
//           <div className="ptn__trust-item">
//             <span className="ptn__trust-num">4</span>
//             <span className="ptn__trust-lbl">Industries</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;






















// import React, { useEffect, useRef, useState } from 'react';
// import { ArrowRight, MapPin } from 'lucide-react';
// import './Partners.css';

// const Partners = () => {
//   const [visible, setVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { 
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.2 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const partners = [
//     { 
//       name: 'Avant Enterprises', 
//       location: 'Bengaluru',
//       type: 'Technology',
//       since: '2021',
//       projects: '15+',
//       description: 'Enterprise solutions and digital transformation across South India.',
//       color: '#6366F1',
//     },
//     { 
//       name: 'Digi Pondy', 
//       location: 'Pondicherry',
//       type: 'Marketing',
//       since: '2022',
//       projects: '25+',
//       description: 'Digital marketing campaigns that drive measurable growth.',
//       color: '#F59E0B',
//     },
//     { 
//       name: 'De mentee Academy', 
//       location: 'Pondicherry',
//       type: 'Education',
//       since: '2020',
//       projects: '500+',
//       description: 'Premier training institution for skill development and placement.',
//       color: '#10B981',
//     },
//     { 
//       name: 'Redbook Events', 
//       location: 'Coimbatore',
//       type: 'Events',
//       since: '2022',
//       projects: '30+',
//       description: 'Corporate conferences and celebrations with flawless execution.',
//       color: '#EC4899',
//     },
//   ];

//   const stats = [
//     { value: '4+', label: 'Active Partners' },
//     { value: '3', label: 'Cities' },
//     { value: '570+', label: 'Joint Projects' },
//     { value: '4', label: 'Industries' },
//   ];

//   return (
//     <section id="partners" className="ptn" ref={sectionRef}>
//       <div className={`ptn-wrap ${visible ? 'is-visible' : ''}`}>
        
//         {/* Label */}
//         <div className="ptn-label">
//           <span>Our Network</span>
//         </div>

//         {/* Title */}
//         <h2 className="ptn-title">
//           Trusted by industry leaders
//         </h2>
        
//         {/* Subtitle */}
//         <p className="ptn-subtitle">
//           Strategic collaborations that amplify everything we deliver.
//         </p>

//         {/* Partner cards */}
//         <div className="ptn-grid">
//           {partners.map((partner, i) => (
//             <div
//               key={i}
//               className="ptn-card"
//               style={{ '--color': partner.color, '--i': i }}
//             >
//               <div className="ptn-card-top">
//                 <span className="ptn-card-type">{partner.type}</span>
//                 <span className="ptn-card-since">Since {partner.since}</span>
//               </div>
              
//               <h3 className="ptn-card-name">{partner.name}</h3>
              
//               <div className="ptn-card-location">
//                 <MapPin size={12} strokeWidth={2} />
//                 {partner.location}
//               </div>
              
//               <p className="ptn-card-desc">{partner.description}</p>
              
//               <div className="ptn-card-stat">
//                 <span className="ptn-card-stat-value">{partner.projects}</span>
//                 <span className="ptn-card-stat-label">Projects delivered</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats row */}
//         <div className="ptn-stats">
//           {stats.map((stat, i) => (
//             <div key={i} className="ptn-stats-item">
//               <span className="ptn-stats-value">{stat.value}</span>
//               <span className="ptn-stats-label">{stat.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

















// import React, { useEffect, useRef, useState } from 'react';
// import { MapPin } from 'lucide-react';
// import './Partners.css';

// const Partners = () => {
//   const [visible, setVisible] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const sectionRef = useRef(null);
//   const gridRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { 
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const partners = [
//     { 
//       name: 'Avant Enterprises', 
//       location: 'Bengaluru',
//       type: 'Technology',
//       since: '2021',
//       projects: '15+',
//       description: 'Enterprise solutions and digital transformation across South India.',
//       color: '#6366F1',
//     },
//     { 
//       name: 'Digi Pondy', 
//       location: 'Pondicherry',
//       type: 'Marketing',
//       since: '2022',
//       projects: '25+',
//       description: 'Digital marketing campaigns that drive measurable growth.',
//       color: '#F59E0B',
//     },
//     { 
//       name: 'De mentee Academy', 
//       location: 'Pondicherry',
//       type: 'Education',
//       since: '2020',
//       projects: '500+',
//       description: 'Premier training institution for skill development and placement.',
//       color: '#10B981',
//     },
//     { 
//       name: 'Redbook Events', 
//       location: 'Coimbatore',
//       type: 'Events',
//       since: '2022',
//       projects: '30+',
//       description: 'Corporate conferences and celebrations with flawless execution.',
//       color: '#EC4899',
//     },
//   ];

//   const stats = [
//     { value: '4+', label: 'Active Partners' },
//     { value: '3', label: 'Cities' },
//     { value: '570+', label: 'Joint Projects' },
//     { value: '4', label: 'Industries' },
//   ];

//   return (
//     <section id="partners" className="ptn" ref={sectionRef}>
//       <div className={`ptn-wrap ${visible ? 'is-visible' : ''}`}>
        
//         {/* Label — fades up */}
//         <div className="ptn-label">
//           <span>Our Network</span>
//         </div>

//         {/* Title — reveals with clip animation */}
//         <h2 className="ptn-title">
//           <span className="ptn-title-line">Trusted by industry leaders</span>
//         </h2>
        
//         {/* Subtitle */}
//         <p className="ptn-subtitle">
//           Strategic collaborations that amplify everything we deliver.
//         </p>

//         {/* Partner cards grid */}
//         <div className="ptn-grid" ref={gridRef}>
//           {partners.map((partner, i) => (
//             <div
//               key={i}
//               className={`ptn-card ${hoveredCard === i ? 'is-hovered' : ''} ${hoveredCard !== null && hoveredCard !== i ? 'is-dimmed' : ''}`}
//               style={{ '--color': partner.color, '--i': i }}
//               onMouseEnter={() => setHoveredCard(i)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Subtle top accent that slides in on hover */}
//               <div className="ptn-card-accent" />
              
//               <div className="ptn-card-top">
//                 <span className="ptn-card-type">{partner.type}</span>
//                 <span className="ptn-card-since">Since {partner.since}</span>
//               </div>
              
//               <h3 className="ptn-card-name">{partner.name}</h3>
              
//               <div className="ptn-card-location">
//                 <MapPin size={12} strokeWidth={2} />
//                 {partner.location}
//               </div>
              
//               <p className="ptn-card-desc">{partner.description}</p>
              
//               <div className="ptn-card-stat">
//                 <span className="ptn-card-stat-value">{partner.projects}</span>
//                 <span className="ptn-card-stat-label">Projects delivered</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats row — staggered reveal */}
//         <div className="ptn-stats">
//           {stats.map((stat, i) => (
//             <div key={i} className="ptn-stats-item" style={{ '--stat-i': i }}>
//               <span className="ptn-stats-value">{stat.value}</span>
//               <span className="ptn-stats-label">{stat.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;














// import React, { useEffect, useRef, useState } from 'react';
// import { MapPin } from 'lucide-react';
// import './Partners.css';

// const Partners = () => {
//   const [visible, setVisible] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const sectionRef = useRef(null);
//   const gridRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { 
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const partners = [
//     { 
//       name: 'Avant Enterprises', 
//       location: 'Bengaluru',
//       type: 'Technology',
//       since: '2021',
//       projects: '15+',
//       description: 'Enterprise solutions and digital transformation across South India.',
//       color: '#6366F1',
//     },
//     { 
//       name: 'Digi Pondy', 
//       location: 'Pondicherry',
//       type: 'Marketing',
//       since: '2022',
//       projects: '25+',
//       description: 'Digital marketing campaigns that drive measurable growth.',
//       color: '#F59E0B',
//     },
//     { 
//       name: 'De mentee Academy', 
//       location: 'Pondicherry',
//       type: 'Education',
//       since: '2020',
//       projects: '500+',
//       description: 'Premier training institution for skill development and placement.',
//       color: '#10B981',
//     },
//     { 
//       name: 'Redbook Events', 
//       location: 'Coimbatore',
//       type: 'Events',
//       since: '2022',
//       projects: '30+',
//       description: 'Corporate conferences and celebrations with flawless execution.',
//       color: '#EC4899',
//     },
//   ];

//   const stats = [
//     { value: '4+', label: 'Active Partners' },
//     { value: '3', label: 'Cities' },
//     { value: '570+', label: 'Joint Projects' },
//     { value: '4', label: 'Industries' },
//   ];

//   return (
//     <section id="partners" className="ptn" ref={sectionRef}>
//       <div className={`ptn-wrap ${visible ? 'is-visible' : ''}`}>
        
//         {/* Label — fades up */}
//         <div className="ptn-label">
//           <span>Our Network</span>
//         </div>

//         {/* Title — reveals with clip animation */}
//         <h2 className="ptn-title">
//           <span className="ptn-title-line">Trusted by industry leaders</span>
//         </h2>
        
//         {/* Subtitle */}
//         <p className="ptn-subtitle">
//           Strategic collaborations that amplify everything we deliver.
//         </p>

//         {/* Partner cards grid */}
//         <div className="ptn-grid" ref={gridRef}>
//           {partners.map((partner, i) => (
//             <div
//               key={i}
//               className={`ptn-card ${hoveredCard === i ? 'is-hovered' : ''} ${hoveredCard !== null && hoveredCard !== i ? 'is-dimmed' : ''}`}
//               style={{ '--color': partner.color, '--i': i }}
//               onMouseEnter={() => setHoveredCard(i)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Subtle top accent that slides in on hover */}
//               <div className="ptn-card-accent" />
              
//               <div className="ptn-card-top">
//                 <span className="ptn-card-type">{partner.type}</span>
//                 <span className="ptn-card-since">Since {partner.since}</span>
//               </div>
              
//               <h3 className="ptn-card-name">{partner.name}</h3>
              
//               <div className="ptn-card-location">
//                 <MapPin size={12} strokeWidth={2} />
//                 {partner.location}
//               </div>
              
//               <p className="ptn-card-desc">{partner.description}</p>
              
//               <div className="ptn-card-stat">
//                 <span className="ptn-card-stat-value">{partner.projects}</span>
//                 <span className="ptn-card-stat-label">Projects delivered</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats row — staggered reveal */}
//         <div className="ptn-stats">
//           {stats.map((stat, i) => (
//             <div key={i} className="ptn-stats-item" style={{ '--stat-i': i }}>
//               <span className="ptn-stats-value">{stat.value}</span>
//               <span className="ptn-stats-label">{stat.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;







import React, { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import './Partners.css';

const Partners = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
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

  const partners = [
    { 
      name: 'Avant Enterprises', 
      location: 'Bengaluru',
      type: 'Technology',
      since: '2021',
      projects: '15+',
      description: 'Enterprise solutions and digital transformation across South India.',
      color: '#6366F1',
    },
    { 
      name: 'Digi Pondy', 
      location: 'Pondicherry',
      type: 'Marketing',
      since: '2022',
      projects: '25+',
      description: 'Digital marketing campaigns that drive measurable growth.',
      color: '#F59E0B',
    },
    { 
      name: 'De mentee Academy', 
      location: 'Pondicherry',
      type: 'Education',
      since: '2020',
      projects: '500+',
      description: 'Premier training institution for skill development and placement.',
      color: '#10B981',
    },
    { 
      name: 'Redbook Events', 
      location: 'Coimbatore',
      type: 'Events',
      since: '2022',
      projects: '30+',
      description: 'Corporate conferences and celebrations with flawless execution.',
      color: '#EC4899',
    },
  ];

  const stats = [
    { value: '4+', label: 'Active Partners' },
    { value: '3', label: 'Cities' },
    { value: '570+', label: 'Joint Projects' },
    { value: '4', label: 'Industries' },
  ];

  return (
    <section 
      id="partners" 
      className="ptn" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      {/* Ambient background */}
      <div className="ptn-bg">
        <div className="ptn-bg-gradient" />
        <div 
          className="ptn-bg-glow"
          style={{
            '--mx': `${mousePos.x * 100}%`,
            '--my': `${mousePos.y * 100}%`,
          }}
        />
        <div className="ptn-bg-grid" />
      </div>

      <div className={`ptn-wrap ${visible ? 'is-visible' : ''}`}>
        
        {/* Label */}
        <div className="ptn-label">
          <span className="ptn-label-line" />
          <span>Our Network</span>
        </div>

        {/* Title */}
        <h2 className="ptn-title">
          <span className="ptn-title-mask">
            <span className="ptn-title-text">Trusted by industry leaders</span>
          </span>
        </h2>
        
        {/* Subtitle */}
        <p className="ptn-subtitle">
          Strategic collaborations that amplify everything we deliver.
        </p>

        {/* Partner cards grid */}
        <div className="ptn-grid">
          {partners.map((partner, i) => (
            <div
              key={i}
              className={`ptn-card ${hoveredCard === i ? 'is-hovered' : ''} ${hoveredCard !== null && hoveredCard !== i ? 'is-dimmed' : ''}`}
              style={{ '--color': partner.color, '--i': i }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Accent bar */}
              <div className="ptn-card-accent" />
              
              {/* Shine effect on hover */}
              <div className="ptn-card-shine" />
              
              <div className="ptn-card-top">
                <span className="ptn-card-type">{partner.type}</span>
                <span className="ptn-card-since">Since {partner.since}</span>
              </div>
              
              <h3 className="ptn-card-name">{partner.name}</h3>
              
              <div className="ptn-card-location">
                <MapPin size={12} strokeWidth={2} />
                {partner.location}
              </div>
              
              <p className="ptn-card-desc">{partner.description}</p>
              
              <div className="ptn-card-stat">
                <span className="ptn-card-stat-value">{partner.projects}</span>
                <span className="ptn-card-stat-label">Projects delivered</span>
              </div>

              {/* Corner glow */}
              <div className="ptn-card-glow" />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="ptn-stats">
          {stats.map((stat, i) => (
            <div key={i} className="ptn-stats-item" style={{ '--stat-i': i }}>
              <span className="ptn-stats-value">{stat.value}</span>
              <span className="ptn-stats-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;