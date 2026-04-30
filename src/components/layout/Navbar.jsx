import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  X,
  Code2,
  UtensilsCrossed,
  Laptop,
  GraduationCap,
  Camera,
  ChevronRight,
  ChevronDown,
  Star,
  Zap,
  Award,
  Users,
  Headphones
} from 'lucide-react';
import './Navbar.css';
import logo from '../img/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [hoveredService, setHoveredService] = useState(null);
  const [showServices, setShowServices] = useState(false);
  const navRef = useRef(null);
  const servicesTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['services', 'strengths', 'partners', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 300) {
          setActiveLink(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const services = [
    { 
      name: 'Business Services', 
      icon: Code2, 
      color: '#6366F1', 
      bgLight: 'rgba(99,102,241,0.12)',
      desc: 'Web development, digital marketing, UI/UX design & branding solutions.',
      features: ['Web & Apps', 'SEO & Marketing', 'UI/UX Design', 'Cloud']
    },
    { 
      name: 'Hospitality & Events', 
      icon: UtensilsCrossed, 
      color: '#F59E0B', 
      bgLight: 'rgba(245,158,11,0.12)',
      desc: 'Corporate events, weddings, catering & end-to-end event management.',
      features: ['Corporate', 'Weddings', 'Catering', 'Planning']
    },
    { 
      name: 'Laptop Solutions', 
      icon: Laptop, 
      color: '#10B981', 
      bgLight: 'rgba(16,185,129,0.12)',
      desc: 'Premium refurbished laptops with warranty for businesses & students.',
      features: ['Refurbished', 'Bulk Orders', 'Warranty', 'Support']
    },
    { 
      name: 'Training & Skills', 
      icon: GraduationCap, 
      color: '#0EA5E9', 
      bgLight: 'rgba(14,165,233,0.12)',
      desc: 'Professional courses with live projects, mentorship & placement support.',
      features: ['Live Projects', 'Mentorship', 'Portfolio', 'Placement']
    },
    { 
      name: 'Creator Studio', 
      icon: Camera, 
      color: '#EC4899', 
      bgLight: 'rgba(236,72,153,0.12)',
      desc: 'Podcast recording, video production, editing & creative direction.',
      features: ['Podcast', 'Video', 'Editing', 'Production']
    },
  ];

  const navLinks = [
    { name: 'Strengths', href: '#strengths', icon: Award },
    { name: 'Partners', href: '#partners', icon: Users },
  ];

  const whatsappNumber = "919843406360";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi ASPL Team! Let's discuss a project.")}`;

  const handleServicesEnter = () => {
    clearTimeout(servicesTimeout.current);
    setShowServices(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => {
      setShowServices(false);
    }, 300);
  };

  return (
    <>
      <nav className={`nav-peak ${scrolled ? 'nav-peak--scrolled' : ''}`} ref={navRef}>
        <div className="nav-peak__container">
          
          {/* ============ LOGO ONLY ============ */}
          <a 
            href="#" 
            className="nav-peak__logo"
            aria-label="ASPL Home"
          >
            <div className="nav-peak__logo-wrapper">
              <img src={logo} alt="ASPL" className="nav-peak__logo-img" />
              <div className="nav-peak__logo-glow" />
            </div>
            <div className="nav-peak__logo-dot" />
          </a>

          {/* ============ CENTER NAVIGATION ============ */}
          <div className="nav-peak__nav">
            
            {/* Services Dropdown Trigger */}
            <div 
              className="nav-peak__services-wrapper"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button 
                className={`nav-peak__services-btn ${showServices ? 'nav-peak__services-btn--active' : ''}`}
                onClick={() => setShowServices(!showServices)}
                aria-expanded={showServices}
              >
                <Sparkles size={14} className="nav-peak__services-icon" />
                <span>Services</span>
                <ChevronDown size={14} className={`nav-peak__services-chevron ${showServices ? 'nav-peak__services-chevron--open' : ''}`} />
              </button>

              {/* ============ APPLE-STYLE DROPDOWN PANEL ============ */}
              <div className={`nav-peak__dropdown ${showServices ? 'nav-peak__dropdown--open' : ''}`}>
                <div className="nav-peak__dropdown-inner">
                  
                  {/* Dropdown Header */}
                  <div className="nav-peak__dropdown-header">
                    <div>
                      <h3>Our Services</h3>
                      <p>Five integrated verticals designed to scale your growth.</p>
                    </div>
                    <a href="#services" className="nav-peak__dropdown-header-link" onClick={() => setShowServices(false)}>
                      View All <ArrowRight size={13} />
                    </a>
                  </div>

                  {/* Services List */}
                  <div className="nav-peak__dropdown-list">
                    {services.map((service, i) => (
                      <a
                        key={service.name}
                        href="#services"
                        className={`nav-peak__dropdown-item ${hoveredService === i ? 'nav-peak__dropdown-item--hovered' : ''}`}
                        onMouseEnter={() => setHoveredService(i)}
                        onMouseLeave={() => setHoveredService(null)}
                        onClick={() => setShowServices(false)}
                        style={{ '--item-color': service.color, '--item-bg': service.bgLight }}
                      >
                        <div className="nav-peak__dropdown-item-icon" style={{ background: service.bgLight, color: service.color }}>
                          <service.icon size={18} />
                        </div>
                        
                        <div className="nav-peak__dropdown-item-content">
                          <span className="nav-peak__dropdown-item-name">{service.name}</span>
                          <span className="nav-peak__dropdown-item-desc">{service.desc}</span>
                          
                          <div className="nav-peak__dropdown-item-tags">
                            {service.features.map((feat) => (
                              <span key={feat} className="nav-peak__dropdown-item-tag" style={{ color: service.color, background: service.bgLight }}>
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>

                        <ChevronRight size={16} className="nav-peak__dropdown-item-chevron" style={{ color: service.color }} />
                      </a>
                    ))}
                  </div>

                  {/* Dropdown Footer */}
                  <div className="nav-peak__dropdown-footer">
                    <div className="nav-peak__dropdown-stat">
                      <Star size={13} fill="#F59E0B" color="#F59E0B" />
                      <span>4.9/5 Client Rating</span>
                    </div>
                    <div className="nav-peak__dropdown-stat">
                      <Zap size={13} color="#6366F1" />
                      <span>200+ Projects Delivered</span>
                    </div>
                    <div className="nav-peak__dropdown-stat">
                      <Users size={13} color="#10B981" />
                      <span>50+ Team Experts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-peak__link ${activeLink === link.href.replace('#', '') ? 'nav-peak__link--active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ============ RIGHT ACTIONS ============ */}
          <div className="nav-peak__actions">
            
            {/* Call Button */}
            <a href="tel:9843406360" className="nav-peak__action-btn nav-peak__action-btn--call" title="Call us">
              <Phone size={16} />
              <span>Call</span>
            </a>

            {/* WhatsApp Button */}
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-peak__action-btn nav-peak__action-btn--whatsapp" 
              title="Chat on WhatsApp"
            >
              <MessageCircle size={16} />
              <span>Chat</span>
            </a>

            {/* Contact CTA */}
            <a href="#contact" className="nav-peak__cta">
              <span>Contact Us</span>
              <ArrowRight size={14} />
            </a>

            {/* Mobile Burger */}
            <button 
              className={`nav-peak__burger ${isOpen ? 'nav-peak__burger--open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="nav-peak__burger-line nav-peak__burger-line--top" />
              <span className="nav-peak__burger-line nav-peak__burger-line--bottom" />
            </button>
          </div>
        </div>

        {/* Bottom Gradient Bar */}
        <div className="nav-peak__active-bar" />
      </nav>

      {/* ============ MOBILE MENU ============ */}
      <div className={`nav-peak-mobile ${isOpen ? 'nav-peak-mobile--open' : ''}`}>
        <div className="nav-peak-mobile__backdrop" onClick={() => setIsOpen(false)} />
        
        <div className="nav-peak-mobile__panel">
          
          {/* Header */}
          <div className="nav-peak-mobile__header">
            <div className="nav-peak-mobile__brand">
              <img src={logo} alt="ASPL" className="nav-peak-mobile__logo" />
            </div>
            <button className="nav-peak-mobile__close" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Services Section */}
          <div className="nav-peak-mobile__section">
            <span className="nav-peak-mobile__section-title">Services</span>
            <div className="nav-peak-mobile__services">
              {services.map((service, i) => (
                <a
                  key={service.name}
                  href="#services"
                  className="nav-peak-mobile__service"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <div className="nav-peak-mobile__service-icon" style={{ background: service.bgLight, color: service.color }}>
                    <service.icon size={18} />
                  </div>
                  <div className="nav-peak-mobile__service-info">
                    <span>{service.name}</span>
                    <span>{service.features.slice(0, 2).join(' • ')}</span>
                  </div>
                  <ChevronRight size={16} color={service.color} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="nav-peak-mobile__section">
            <span className="nav-peak-mobile__section-title">Quick Links</span>
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-peak-mobile__link"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${(i + 5) * 0.07}s` }}
              >
                <link.icon size={16} />
                <span>{link.name}</span>
                <ArrowRight size={14} />
              </a>
            ))}
            <a
              href="#contact"
              className="nav-peak-mobile__link nav-peak-mobile__link--highlight"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${7 * 0.07}s` }}
            >
              <Headphones size={16} />
              <span>Contact</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Footer Actions */}
          <div className="nav-peak-mobile__footer">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="nav-peak-mobile__action nav-peak-mobile__action--whatsapp">
              <MessageCircle size={18} />
              <div>
                <span>WhatsApp Chat</span>
                <small>Instant response</small>
              </div>
            </a>
            <a href="tel:9843406360" className="nav-peak-mobile__action nav-peak-mobile__action--call">
              <Phone size={18} />
              <div>
                <span>9843406360</span>
                <small>Mon-Sat, 9AM-7PM</small>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;