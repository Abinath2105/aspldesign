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
  Info,
  Headphones
} from 'lucide-react';
import './AuroraNavbar.css'; // We'll create this next
import logo from '../img/logo-dark.png';

const AuroraNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [hoveredService, setHoveredService] = useState(null);
  const [showServices, setShowServices] = useState(false);
  const navRef = useRef(null);
  const servicesTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      color: '#A78BFA', 
      desc: 'Websites, digital marketing, UI/UX & branding solutions.',
      features: ['Web & Apps', 'SEO', 'UI/UX', 'Cloud']
    },
    { 
      name: 'Hospitality & Events', 
      icon: UtensilsCrossed, 
      color: '#F59E0B', 
      desc: 'Corporate events, weddings, catering & management.',
      features: ['Corporate', 'Weddings', 'Catering', 'Planning']
    },
    { 
      name: 'Laptop Solutions', 
      icon: Laptop, 
      color: '#34D399', 
      desc: 'Premium refurbished laptops with warranty.',
      features: ['Refurbished', 'Bulk Orders', 'Warranty', 'Support']
    },
    { 
      name: 'Training & Skills', 
      icon: GraduationCap, 
      color: '#38BDF8', 
      desc: 'Courses with live projects & placement support.',
      features: ['Live Projects', 'Mentorship', 'Portfolio', 'Placement']
    },
    { 
      name: 'Creator Studio', 
      icon: Camera, 
      color: '#F472B6', 
      desc: 'Podcast recording, video production & editing.',
      features: ['Podcast', 'Video', 'Editing', 'Production']
    },
  ];

  const navLinks = [
    { name: 'About', href: '#services', icon: Info },
    { name: 'Strengths', href: '#strengths', icon: Zap },
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
    }, 200);
  };

  return (
    <>
      <nav className={`aurora-nav ${scrolled ? 'aurora-nav--scrolled' : ''}`} ref={navRef}>
        {/* The flowing aurora background effect */}
        <div className="aurora-nav__bg-flow" />
        
        <div className="aurora-nav__container">
          
          {/* ============ LOGO ============ */}
          <a href="#" className="aurora-nav__logo" aria-label="ASPL Home">
            <img src={logo} alt="ASPL" className="aurora-nav__logo-img" />
            <div className="aurora-nav__logo-shimmer" />
          </a>

          {/* ============ CENTER NAVIGATION ============ */}
          <div className="aurora-nav__links">
            
            {/* Services Dropdown Trigger */}
            <div 
              className="aurora-nav__services-wrapper"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button 
                className={`aurora-nav__services-trigger ${showServices ? 'aurora-nav__services-trigger--active' : ''}`}
                onClick={() => setShowServices(!showServices)}
                aria-expanded={showServices}
              >
                <Sparkles size={15} className="aurora-nav__trigger-icon" />
                <span>Services</span>
                <ChevronDown size={14} className={`aurora-nav__trigger-chevron ${showServices ? 'aurora-nav__trigger-chevron--open' : ''}`} />
              </button>

              {/* ============ MORPHING DROPDOWN PANEL ============ */}
              <div className={`aurora-dropdown ${showServices ? 'aurora-dropdown--open' : ''}`}>
                <div className="aurora-dropdown__inner">
                  
                  {/* Dropdown Header */}
                  <div className="aurora-dropdown__header">
                    <div>
                      <h6 className="aurora-dropdown__title">Explore Our Ecosystem</h6>
                      
                    </div>
                    <a href="#services" className="aurora-dropdown__header-link" onClick={() => setShowServices(false)}>
                      View All <ArrowRight size={13} />
                    </a>
                  </div>

                  {/* Services List */}
                  <div className="aurora-dropdown__grid">
                    {services.map((service, i) => (
                      <a
                        key={service.name}
                        href="#services"
                        className={`aurora-dropdown__item ${hoveredService === i ? 'aurora-dropdown__item--hovered' : ''}`}
                        onMouseEnter={() => setHoveredService(i)}
                        onMouseLeave={() => setHoveredService(null)}
                        onClick={() => setShowServices(false)}
                        style={{ '--item-color': service.color }}
                      >
                        <div className="aurora-dropdown__item-glow" />
                        <div className="aurora-dropdown__item-icon" style={{ background: `${service.color}20`, color: service.color }}>
                          <service.icon size={10} />
                        </div>
                        
                        <div className="aurora-dropdown__item-content">
                          <span className="aurora-dropdown__item-name">{service.name}</span>
                       
                          
                        
                        </div>

                        <ChevronRight size={16} className="aurora-dropdown__item-chevron" />
                      </a>
                    ))}
                  </div>

               
                </div>
              </div>
            </div>

            {/* Quick Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`aurora-nav__link ${activeLink === link.href.replace('#', '') ? 'aurora-nav__link--active' : ''}`}
              >
                <link.icon size={16} className="aurora-nav__link-icon" />
                <span>{link.name}</span>
                <span className="aurora-nav__link-indicator" />
              </a>
            ))}
          </div>

          {/* ============ RIGHT ACTIONS ============ */}
          <div className="aurora-nav__actions">
            
            {/* Call Button */}
            <a href="tel:9843406360" className="aurora-nav__icon-btn" title="Call us">
              <Phone size={18} />
            </a>

            {/* WhatsApp Button */}
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="aurora-nav__icon-btn aurora-nav__icon-btn--whatsapp" 
              title="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
            </a>

            {/* Primary CTA */}
            <a href="#contact" className="aurora-nav__cta">
              <span>Let's Talk</span>
              <ArrowRight size={15} className="aurora-nav__cta-arrow" />
              <div className="aurora-nav__cta-glow" />
            </a>

            {/* Mobile Burger */}
            <button 
              className={`aurora-nav__burger ${isOpen ? 'aurora-nav__burger--open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="aurora-nav__burger-line" />
              <span className="aurora-nav__burger-line" />
            </button>
          </div>
        </div>

        {/* Bottom Gradient border */}
        <div className="aurora-nav__border" />
      </nav>

      {/* ============ MOBILE MENU ============ */}
      <div className={`aurora-mobile ${isOpen ? 'aurora-mobile--open' : ''}`}>
        <div className="aurora-mobile__backdrop" onClick={() => setIsOpen(false)} />
        
        <div className="aurora-mobile__panel">
          
          {/* Header */}
          <div className="aurora-mobile__header">
            <img src={logo} alt="ASPL" className="aurora-mobile__logo" />
            <button className="aurora-mobile__close" onClick={() => setIsOpen(false)}>
              <X size={22} />
            </button>
          </div>

          {/* Services Section */}
          <div className="aurora-mobile__section">
            <span className="aurora-mobile__section-title">Our Ecosystem</span>
            <div className="aurora-mobile__services">
              {services.map((service, i) => (
                <a
                  key={service.name}
                  href="#services"
                  className="aurora-mobile__service"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <div className="aurora-mobile__service-icon" style={{ background: `${service.color}20`, color: service.color }}>
                    <service.icon size={18} />
                  </div>
                  <div className="aurora-mobile__service-info">
                    <span className="aurora-mobile__service-name">{service.name}</span>
                    <span className="aurora-mobile__service-meta">{service.features.slice(0, 2).join(' • ')}</span>
                  </div>
                  <ChevronRight size={16} color={service.color} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="aurora-mobile__section">
            <span className="aurora-mobile__section-title">Navigate</span>
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className="aurora-mobile__link"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${(i + 5) * 0.07}s` }}
              >
                <link.icon size={18} className="aurora-mobile__link-icon" />
                <span>{link.name}</span>
                <ArrowRight size={14} />
              </a>
            ))}
            <a
              href="#contact"
              className="aurora-mobile__link aurora-mobile__link--highlight"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${7 * 0.07}s` }}
            >
              <Headphones size={18} />
              <span>Contact Us</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Footer Actions */}
          <div className="aurora-mobile__footer">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="aurora-mobile__action aurora-mobile__action--whatsapp">
              <MessageCircle size={20} />
              <div>
                <span>WhatsApp Chat</span>
                <small>Instant response</small>
              </div>
            </a>
            <a href="tel:9843406360" className="aurora-mobile__action aurora-mobile__action--call">
              <Phone size={20} />
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

export default AuroraNavbar;