// import React from 'react';
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
//   Camera
// } from 'lucide-react';

// const Services = () => {
//   const services = [
//     {
//       category: 'Business Services',
//       icon: Briefcase,
//       color: 'from-violet-500 to-purple-600',
//       items: [
//         { name: 'Web & App Development', icon: Code, desc: 'Build powerful, scalable digital platforms' },
//         { name: 'Digital Marketing & Branding', icon: BarChart3, desc: 'Visibility, credibility, leads & sales' },
//         { name: 'UI/UX & Graphic Design', icon: Palette, desc: 'Designs that convert & inspire' },
//         { name: 'GST, Finance & Compliance', icon: Shield, desc: 'Stay compliant without complexity' },
//         { name: 'Manpower & Staffing', icon: Users, desc: 'Right people, right time' },
//         { name: 'Printing & Production', icon: Printer, desc: 'From branding to event assets' },
//       ]
//     },
//     {
//       category: 'Hospitality & Events',
//       icon: UtensilsCrossed,
//       color: 'from-orange-500 to-red-600',
//       items: [
//         { name: 'Multi-cuisine Restaurant', icon: UtensilsCrossed, desc: 'Premium dining experience' },
//         { name: 'Corporate Events', icon: Briefcase, desc: 'Professional event management' },
//         { name: 'Weddings & Celebrations', icon: Users, desc: 'Your dream event realized' },
//         { name: 'End-to-End Execution', icon: BarChart3, desc: 'Planning to flawless delivery' },
//       ]
//     },
//     {
//       category: 'Training & Development',
//       icon: GraduationCap,
//       color: 'from-emerald-500 to-teal-600',
//       items: [
//         { name: 'Digital Marketing', icon: BarChart3, desc: 'Practical training with live projects' },
//         { name: 'Full Stack Development', icon: Code, desc: 'Java, Python & more' },
//         { name: 'UI/UX Design', icon: Palette, desc: 'Design thinking & tools' },
//         { name: 'Spoken English & Soft Skills', icon: Users, desc: 'Communication excellence' },
//       ]
//     },
//     {
//       category: 'Podcast & Creator Studio',
//       icon: Mic,
//       color: 'from-pink-500 to-rose-600',
//       items: [
//         { name: 'Studio Setup & Lighting', icon: Camera, desc: 'Professional recording environment' },
//         { name: 'Multi-cam Shooting', icon: Camera, desc: 'High-quality video production' },
//         { name: 'Editing & Directing', icon: Palette, desc: 'Post-production excellence' },
//         { name: 'Creator Support', icon: Users, desc: 'For brands & educators' },
//       ]
//     },
//   ];

//   return (
//     <section id="services" className="relative py-32">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-6xl font-black mb-6">
//             Our <span className="gradient-text">Services</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Five core categories, infinite possibilities. Everything you need to grow, create, and succeed.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="glass-card rounded-3xl p-8">
//               {/* Category Header */}
//               <div className="flex items-center space-x-4 mb-8">
//                 <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
//                   <service.icon size={28} className="text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold">{service.category}</h3>
//                   <p className="text-sm text-gray-500">{service.items.length} services</p>
//                 </div>
//               </div>

//               {/* Items Grid */}
//               <div className="grid grid-cols-2 gap-4">
//                 {service.items.map((item, idx) => (
//                   <div 
//                     key={idx} 
//                     className="bg-white/[0.02] border border-white/5 rounded-xl p-4 hover:bg-white/[0.05] transition-all duration-300 group cursor-pointer"
//                   >
//                     <item.icon size={20} className="text-violet-400 mb-3 group-hover:scale-110 transition-transform" />
//                     <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
//                     <p className="text-xs text-gray-500">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
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
  CheckCircle2
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);

  const services = [
    {
      id: 'business',
      category: 'Business Services',
      icon: Briefcase,
      gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      color: '#6366F1',
      bgColor: '#EEF2FF',
      tagline: 'Digital transformation under one roof',
      stats: { projects: '200+', clients: '150+', rating: '4.9' },
      items: [
        { name: 'Web & App Development', icon: Code, desc: 'Scalable platforms built with cutting-edge tech', highlight: 'React, Node.js, AWS' },
        { name: 'Digital Marketing & Branding', icon: BarChart3, desc: 'Data-driven campaigns that deliver real ROI', highlight: 'SEO, PPC, Social Media' },
        { name: 'UI/UX & Graphic Design', icon: Palette, desc: 'Human-centered designs that convert visitors', highlight: 'Figma, Prototyping' },
        { name: 'GST, Finance & Compliance', icon: Shield, desc: 'Hassle-free regulatory compliance management', highlight: 'GST Filing, Audits' },
        { name: 'Manpower & Staffing', icon: Users, desc: 'Right talent, right role, right time', highlight: 'IT & Non-IT Roles' },
        { name: 'Printing & Production', icon: Printer, desc: 'Premium print collateral for your brand', highlight: 'Brochures, Merchandise' },
      ]
    },
    {
      id: 'hospitality',
      category: 'Hospitality & Events',
      icon: UtensilsCrossed,
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
      color: '#F59E0B',
      bgColor: '#FFFBEB',
      tagline: 'Creating unforgettable experiences',
      stats: { projects: '500+', clients: '300+', rating: '4.8' },
      items: [
        { name: 'Multi-cuisine Restaurant', icon: UtensilsCrossed, desc: 'Premium dining with diverse culinary options', highlight: 'Indian, Chinese, Italian' },
        { name: 'Corporate Events', icon: Briefcase, desc: 'Professional event planning & execution', highlight: 'Conferences, Seminars' },
        { name: 'Weddings & Celebrations', icon: Star, desc: 'Your dream celebration brought to life', highlight: 'Decor, Catering, Planning' },
        { name: 'End-to-End Execution', icon: CheckCircle2, desc: 'From concept to flawless delivery', highlight: 'Venue, Logistics, Sound' },
      ]
    },
    {
      id: 'laptops',
      category: 'Laptop Solutions',
      icon: Laptop,
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      color: '#10B981',
      bgColor: '#ECFDF5',
      tagline: 'Premium tech at accessible prices',
      stats: { projects: '1000+', clients: '800+', rating: '4.9' },
      items: [
        { name: 'Refurbished Laptops', icon: Laptop, desc: 'Quality-tested devices with warranty', highlight: '8-12 Month Warranty' },
        { name: 'Bulk Corporate Orders', icon: Briefcase, desc: 'Enterprise-grade solutions at scale', highlight: 'Custom Configurations' },
        { name: 'Service & Support', icon: Shield, desc: 'Dedicated after-sales technical support', highlight: '24/7 Assistance' },
        { name: 'Student Discounts', icon: GraduationCap, desc: 'Special pricing for students & startups', highlight: 'Up to 40% Off' },
      ]
    },
    {
      id: 'training',
      category: 'Training & Skills',
      icon: GraduationCap,
      gradient: 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
      color: '#0EA5E9',
      bgColor: '#F0F9FF',
      tagline: 'Learn by building real products',
      stats: { projects: '50+', clients: '500+', rating: '4.7' },
      items: [
        { name: 'Digital Marketing Course', icon: BarChart3, desc: 'Practical training with live campaigns', highlight: '3 Month Program' },
        { name: 'Full Stack Development', icon: Code, desc: 'Java, Python, React & more', highlight: 'Live Projects' },
        { name: 'UI/UX Design', icon: Palette, desc: 'Design thinking & industry tools', highlight: 'Portfolio Building' },
        { name: 'Soft Skills & English', icon: Users, desc: 'Communication & professional excellence', highlight: 'Mock Interviews' },
      ]
    },
    {
      id: 'creator',
      category: 'Creator Studio',
      icon: Mic,
      gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
      color: '#EC4899',
      bgColor: '#FDF2F8',
      tagline: 'Where content comes to life',
      stats: { projects: '100+', clients: '50+', rating: '5.0' },
      items: [
        { name: 'Studio Setup & Lighting', icon: Camera, desc: 'Professional-grade recording environment', highlight: '4K Ready' },
        { name: 'Multi-cam Production', icon: Mic, desc: 'High-quality video with multiple angles', highlight: '3-Camera Setup' },
        { name: 'Editing & Post-Production', icon: Palette, desc: 'Expert editing, color grading & sound', highlight: 'Premiere Pro, DaVinci' },
        { name: 'Creator Support', icon: Users, desc: 'For brands, educators & influencers', highlight: 'End-to-End Service' },
      ]
    },
  ];

  // Scroll to category on mobile
  const scrollToCategory = (index) => {
    setActiveCategory(index);
    if (categoryRefs.current[index] && window.innerWidth < 768) {
      categoryRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeService = services[activeCategory];

  return (
    <section id="services" className="services-premium" ref={sectionRef}>
      
      {/* Background decorative elements */}
      <div className="services-premium__bg">
        <div className="services-premium__bg-orb services-premium__bg-orb--1" />
        <div className="services-premium__bg-orb services-premium__bg-orb--2" />
        <div className="services-premium__bg-grid" />
      </div>

      <div className="services-premium__container">
        
        {/* ============ SECTION HEADER ============ */}
        <div className="services-premium__header">
          {/* Pill Badge */}
          <div className="services-premium__badge">
            <Sparkles size={14} />
            <span>What We Offer</span>
          </div>

          <h2 className="services-premium__title">
            Everything you need,
            <span className="services-premium__title-gradient"> in one place</span>
          </h2>
          
          <p className="services-premium__subtitle">
            Five core verticals. Dozens of services. One partner for all your business, creative, and technical needs.
          </p>

          {/* Category Tabs */}
          <div className="services-premium__tabs">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`services-premium__tab ${index === activeCategory ? 'services-premium__tab--active' : ''}`}
                onClick={() => scrollToCategory(index)}
                style={{
                  '--tab-color': service.color,
                  '--tab-bg': service.bgColor,
                }}
              >
                <div className="services-premium__tab-icon">
                  <service.icon size={18} />
                </div>
                <span className="services-premium__tab-label">{service.category}</span>
                {index === activeCategory && (
                  <span className="services-premium__tab-dot" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ============ ACTIVE CATEGORY CONTENT ============ */}
        <div className="services-premium__content">
          
          {/* Category Hero Card */}
          <div className="services-premium__hero-card" style={{ '--card-color': activeService.color, '--card-bg': activeService.bgColor }}>
            <div className="services-premium__hero-card-inner">
              {/* Left: Info */}
              <div className="services-premium__hero-info">
                <div className="services-premium__hero-icon" style={{ background: activeService.gradient }}>
                  <activeService.icon size={28} color="#fff" />
                </div>
                
                <h3 className="services-premium__hero-title">{activeService.category}</h3>
                <p className="services-premium__hero-tagline">{activeService.tagline}</p>
                
                {/* Stats Row */}
                <div className="services-premium__hero-stats">
                  <div className="services-premium__hero-stat">
                    <span className="services-premium__hero-stat-value">{activeService.stats.projects}</span>
                    <span className="services-premium__hero-stat-label">Projects</span>
                  </div>
                  <div className="services-premium__hero-stat-divider" />
                  <div className="services-premium__hero-stat">
                    <span className="services-premium__hero-stat-value">{activeService.stats.clients}</span>
                    <span className="services-premium__hero-stat-label">Clients</span>
                  </div>
                  <div className="services-premium__hero-stat-divider" />
                  <div className="services-premium__hero-stat">
                    <span className="services-premium__hero-stat-value">{activeService.stats.rating}</span>
                    <span className="services-premium__hero-stat-label">Rating</span>
                  </div>
                </div>

                <a href="#contact" className="services-premium__hero-cta">
                  <span>Get Started with {activeService.category.split(' ')[0]}</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Right: Visual */}
              <div className="services-premium__hero-visual" style={{ backgroundColor: activeService.bgColor }}>
                {/* Abstract shape */}
                <div className="services-premium__hero-shape" style={{ background: activeService.gradient }}>
                  <activeService.icon size={48} color="#fff" opacity={0.3} />
                </div>
                
                {/* Floating mini cards */}
                <div className="services-premium__hero-mini-card services-premium__hero-mini-card--1">
                  <Zap size={14} color={activeService.color} />
                  <span>Premium Quality</span>
                </div>
                <div className="services-premium__hero-mini-card services-premium__hero-mini-card--2">
                  <Shield size={14} color={activeService.color} />
                  <span>100% Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Items Grid */}
          <div className="services-premium__grid">
            {activeService.items.map((item, index) => (
              <div
                key={index}
                className={`services-premium__item ${hoveredItem === index ? 'services-premium__item--hovered' : ''}`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ '--item-color': activeService.color, '--item-bg': activeService.bgColor }}
              >
                {/* Item Header */}
                <div className="services-premium__item-header">
                  <div className="services-premium__item-icon" style={{ backgroundColor: activeService.bgColor, color: activeService.color }}>
                    <item.icon size={18} />
                  </div>
                  <ChevronRight size={14} className="services-premium__item-chevron" />
                </div>

                {/* Item Content */}
                <h4 className="services-premium__item-name">{item.name}</h4>
                <p className="services-premium__item-desc">{item.desc}</p>

                {/* Highlight Tag */}
                <div className="services-premium__item-tag" style={{ color: activeService.color, backgroundColor: activeService.bgColor }}>
                  <Zap size={10} />
                  <span>{item.highlight}</span>
                </div>

                {/* Hover Glow */}
                <div className="services-premium__item-glow" style={{ background: activeService.gradient }} />
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="services-premium__banner" style={{ background: activeService.gradient }}>
            <div className="services-premium__banner-content">
              <div className="services-premium__banner-text">
                <Sparkles size={20} color="#fff" />
                <span>Ready to start your {activeService.category.toLowerCase()} journey?</span>
              </div>
              <a href="#contact" className="services-premium__banner-cta">
                <span>Let's Talk</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;