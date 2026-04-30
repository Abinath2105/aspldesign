import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  Zap,
  Menu,
  X,
  Briefcase,
  Award,
  Users,
  Headphones
} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navRef = useRef(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section
      const sections = ['services', 'strengths', 'partners', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 250) {
          setActiveLink(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { 
      name: 'Services', 
      href: '#services', 
      hasDropdown: true,
      icon: Briefcase,
      dropdownItems: [
        { name: 'Business Services', href: '#services', desc: 'Web, Marketing & Design' },
        { name: 'Hospitality & Events', href: '#services', desc: 'Catering & Celebrations' },
        { name: 'Laptop Solutions', href: '#services', desc: 'Refurbished & New' },
        { name: 'Training & Skills', href: '#services', desc: '10+ Professional Courses' },
        { name: 'Creator Studio', href: '#services', desc: 'Podcast & Production' },
      ]
    },
    { name: 'Strengths', href: '#strengths', icon: Award },
    { name: 'Partners', href: '#partners', icon: Users },
    { name: 'Contact', href: '#contact', icon: Headphones },
  ];

  const whatsappNumber = "919843406360";
  const whatsappMessage = encodeURIComponent("Hi ASPL Team! I'm interested in your services. Let's talk!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (
    <>
      <nav 
        ref={navRef}
        className={`navbar-premium ${scrolled ? 'navbar-premium--scrolled' : ''}`}
      >
        <div className="navbar-premium__container">
          
          {/* ============ LEFT: LOGO ============ */}
          <a 
            href="#" 
            className="navbar-premium__logo"
            onMouseEnter={() => setHoveredItem('logo')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className={`navbar-premium__logo-icon ${hoveredItem === 'logo' ? 'navbar-premium__logo-icon--glow' : ''}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="7" fill="url(#logo-gradient)"/>
                <path d="M7 12.5L10.5 16L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="logo-gradient" x1="0" y1="0" x2="24" y2="24">
                    <stop stopColor="#6366F1"/>
                    <stop offset="1" stopColor="#8B5CF6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="navbar-premium__logo-text">
              <span className="navbar-premium__logo-brand">ASPL</span>
              <span className="navbar-premium__logo-tagline">Tech Solutions</span>
            </div>

            {/* Logo decorative dot */}
            <div className="navbar-premium__logo-dot" />
          </a>

          {/* ============ CENTER: NAVIGATION ============ */}
          <div className="navbar-premium__links">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="navbar-premium__link-wrapper"
                onMouseEnter={() => {
                  setHoveredItem(link.name);
                  if (link.hasDropdown) handleDropdownEnter();
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  if (link.hasDropdown) handleDropdownLeave();
                }}
              >
                <a
                  href={link.href}
                  className={`navbar-premium__link ${activeLink === link.href.replace('#', '') ? 'navbar-premium__link--active' : ''}`}
                  onClick={(e) => {
                    if (link.hasDropdown) {
                      e.preventDefault();
                      setShowDropdown(!showDropdown);
                    }
                  }}
                >
                  {/* Active indicator dot */}
                  {activeLink === link.href.replace('#', '') && (
                    <span className="navbar-premium__link-indicator" />
                  )}
                  
                  <span className="navbar-premium__link-text">{link.name}</span>
                  
                  {link.hasDropdown && (
                    <ChevronDown 
                      size={14} 
                      className={`navbar-premium__link-chevron ${showDropdown ? 'navbar-premium__link-chevron--open' : ''}`}
                    />
                  )}

                  {/* Hover background glow */}
                  <div className="navbar-premium__link-bg" />
                </a>

                {/* Dropdown Menu */}
                {link.hasDropdown && showDropdown && (
                  <div 
                    className="navbar-premium__dropdown"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="navbar-premium__dropdown-inner">
                      {/* Dropdown header */}
                      <div className="navbar-premium__dropdown-header">
                        <Sparkles size={14} className="navbar-premium__dropdown-sparkle" />
                        <span>Our 5 Core Services</span>
                      </div>
                      
                      {/* Dropdown items */}
                      <div className="navbar-premium__dropdown-grid">
                        {link.dropdownItems.map((item, i) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="navbar-premium__dropdown-item"
                            style={{ animationDelay: `${i * 0.05}s` }}
                            onClick={() => setShowDropdown(false)}
                          >
                            <div className="navbar-premium__dropdown-item-icon">
                              <Zap size={14} />
                            </div>
                            <div className="navbar-premium__dropdown-item-content">
                              <span className="navbar-premium__dropdown-item-name">{item.name}</span>
                              <span className="navbar-premium__dropdown-item-desc">{item.desc}</span>
                            </div>
                            <ArrowRight size={12} className="navbar-premium__dropdown-item-arrow" />
                          </a>
                        ))}
                      </div>

                      {/* Dropdown footer */}
                      <div className="navbar-premium__dropdown-footer">
                        <a href="#services" className="navbar-premium__dropdown-footer-link">
                          View All Services
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ============ RIGHT: ACTIONS ============ */}
          <div className="navbar-premium__actions">
            
            {/* WhatsApp Quick Chat */}
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="navbar-premium__action-btn navbar-premium__action-btn--whatsapp"
              onMouseEnter={() => setHoveredItem('whatsapp')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <MessageCircle size={16} />
              <span className="navbar-premium__action-btn-text">Chat</span>
              {/* <span className="navbar-premium__action-btn-badge">Live</span> */}
            </a>

            {/* Phone */}
            <a 
              href="tel:9843406360" 
              className="navbar-premium__action-btn navbar-premium__action-btn--phone"
              onMouseEnter={() => setHoveredItem('phone')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Phone size={16} />
              <span className="navbar-premium__action-btn-text">Call</span>
            </a>

            {/* Primary CTA */}
            <a 
              href="#contact" 
              className="navbar-premium__cta"
              onMouseEnter={() => setHoveredItem('cta')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span>Get Started</span>
              <div className="navbar-premium__cta-arrow">
                <ArrowRight size={14} />
              </div>
              <div className="navbar-premium__cta-shine" />
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className={`navbar-premium__burger ${isOpen ? 'navbar-premium__burger--open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <div className="navbar-premium__burger-lines">
                <span className="navbar-premium__burger-line navbar-premium__burger-line--top" />
                <span className="navbar-premium__burger-line navbar-premium__burger-line--middle" />
                <span className="navbar-premium__burger-line navbar-premium__burger-line--bottom" />
              </div>
            </button>
          </div>
        </div>

        {/* Active section glow bar */}
        <div className="navbar-premium__active-bar" />
      </nav>

      {/* ============ MOBILE MENU ============ */}
      <div 
        className={`navbar-mobile ${isOpen ? 'navbar-mobile--open' : ''}`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div 
          className="navbar-mobile__backdrop" 
          onClick={() => setIsOpen(false)}
        />

        {/* Panel */}
        <div className="navbar-mobile__panel">
          
          {/* Header */}
          <div className="navbar-mobile__header">
            <div className="navbar-mobile__logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="7" fill="url(#logo-gradient-mobile)"/>
                <path d="M7 12.5L10.5 16L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="logo-gradient-mobile" x1="0" y1="0" x2="24" y2="24">
                    <stop stopColor="#6366F1"/>
                    <stop offset="1" stopColor="#8B5CF6"/>
                  </linearGradient>
                </defs>
              </svg>
              <span>ASPL Menu</span>
            </div>
            
            <button 
              className="navbar-mobile__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="navbar-mobile__links">
            {navLinks.map((link, i) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className={`navbar-mobile__link ${activeLink === link.href.replace('#', '') ? 'navbar-mobile__link--active' : ''}`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <span className="navbar-mobile__link-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  
                  <span className="navbar-mobile__link-content">
                    <span className="navbar-mobile__link-name">{link.name}</span>
                    {link.hasDropdown && (
                      <span className="navbar-mobile__link-badge">5 Services</span>
                    )}
                  </span>
                  
                  <ArrowRight size={16} className="navbar-mobile__link-arrow" />
                </a>
                
                {/* Subtle divider */}
                {i < navLinks.length - 1 && (
                  <div className="navbar-mobile__divider" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="navbar-mobile__footer">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="navbar-mobile__action navbar-mobile__action--whatsapp"
            >
              <div className="navbar-mobile__action-icon">
                <MessageCircle size={18} />
              </div>
              <div className="navbar-mobile__action-text">
                <span>Chat on WhatsApp</span>
                <span className="navbar-mobile__action-sub">Typically replies in 5 min</span>
              </div>
            </a>
            
            <a 
              href="tel:9843406360" 
              className="navbar-mobile__action navbar-mobile__action--call"
            >
              <div className="navbar-mobile__action-icon">
                <Phone size={18} />
              </div>
              <div className="navbar-mobile__action-text">
                <span>Call 9843406360</span>
                <span className="navbar-mobile__action-sub">Mon-Sat, 9AM-7PM</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;