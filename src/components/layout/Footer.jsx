import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  MessageCircle,
  Sparkles,
  ChevronRight,
  Heart,
  Globe,
  Zap,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  ExternalLink,
  Clock,
  Shield,
  Star
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const footerRef = useRef(null);

  const whatsappNumber = "919843406360";
  const whatsappMessage = encodeURIComponent("Hi ASPL Team! I have a question.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Show/hide back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: {
      title: 'Services',
      links: [
        { name: 'Business Services', href: '#services' },
        { name: 'Hospitality & Events', href: '#services' },
        { name: 'Laptop Solutions', href: '#services' },
        { name: 'Training & Skills', href: '#services' },
        { name: 'Creator Studio', href: '#services' },
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Strengths', href: '#strengths' },
        { name: 'Partners', href: '#partners' },
        { name: 'Careers', href: '#careers' },
        { name: 'Blog', href: '#blog' },
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '#contact' },
        { name: 'FAQs', href: '#faqs' },
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Refund Policy', href: '#refund' },
      ]
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
    { icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' },
    { icon: Youtube, href: '#', label: 'YouTube', color: '#FF0000' },
    { icon: Facebook, href: '#', label: 'Facebook', color: '#1877F2' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
  ];

  return (
    <footer className="footer-premium" ref={footerRef}>
      
      {/* ============ TOP CTA STRIP ============ */}
      <div className="footer-premium__cta-strip">
        <div className="footer-premium__cta-container">
          <div className="footer-premium__cta-content">
            <div className="footer-premium__cta-icon">
              <Sparkles size={20} color="#6366F1" />
            </div>
            <div className="footer-premium__cta-text">
              <span className="footer-premium__cta-heading">Ready to start your next project?</span>
              <span className="footer-premium__cta-sub">Let's discuss how we can help you grow</span>
            </div>
          </div>
          
          <div className="footer-premium__cta-actions">
            <a href="#contact" className="footer-premium__cta-btn footer-premium__cta-btn--primary">
              <span>Get a Free Consultation</span>
              <ChevronRight size={16} />
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-premium__cta-btn footer-premium__cta-btn--whatsapp"
            >
              <MessageCircle size={16} />
              <span>Chat Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* ============ MAIN FOOTER ============ */}
      <div className="footer-premium__main">
        <div className="footer-premium__container">
          
          {/* Brand Column */}
          <div className="footer-premium__brand">
            {/* Logo */}
            <a href="#" className="footer-premium__logo">
              <div className="footer-premium__logo-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="7" fill="url(#footer-logo-grad)"/>
                  <path d="M7 12.5L10.5 16L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="24" y2="24">
                      <stop stopColor="#6366F1"/>
                      <stop offset="1" stopColor="#8B5CF6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="footer-premium__logo-text">
                <span className="footer-premium__logo-brand">ASPL</span>
                <span className="footer-premium__logo-tagline">Tech Solutions</span>
              </div>
            </a>

            <p className="footer-premium__brand-desc">
              Where Technology Meets Tomorrow. We build solutions that power businesses, 
              uplift careers, enable creators, and enhance digital transformation — all under one roof.
            </p>

            {/* Trust Badges */}
            <div className="footer-premium__trust">
              <div className="footer-premium__trust-item">
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="footer-premium__trust-item">
                <Shield size={14} color="#10B981" />
                <span>Trusted Partner</span>
              </div>
              <div className="footer-premium__trust-item">
                <Clock size={14} color="#6366F1" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="footer-premium__social">
              <span className="footer-premium__social-label">Follow us</span>
              <div className="footer-premium__social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="footer-premium__social-icon"
                    aria-label={social.label}
                    style={{ '--social-color': social.color }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((column, colIndex) => (
            <div key={colIndex} className="footer-premium__links-col">
              <h3 className="footer-premium__links-title">{column.title}</h3>
              <ul className="footer-premium__links-list">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="footer-premium__link"
                      onMouseEnter={() => setHoveredLink(`${colIndex}-${linkIndex}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="footer-premium__link-dot" />
                      <span>{link.name}</span>
                      {hoveredLink === `${colIndex}-${linkIndex}` && (
                        <ExternalLink size={10} className="footer-premium__link-icon" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="footer-premium__contact-col">
            <h3 className="footer-premium__links-title">Get in Touch</h3>
            
            <div className="footer-premium__contact-list">
              <a href="tel:9843406360" className="footer-premium__contact-item">
                <div className="footer-premium__contact-icon">
                  <Phone size={16} color="#6366F1" />
                </div>
                <div className="footer-premium__contact-info">
                  <span className="footer-premium__contact-label">Phone</span>
                  <span className="footer-premium__contact-value">9843406360</span>
                </div>
              </a>

              <a href="mailto:info@aspltech.in" className="footer-premium__contact-item">
                <div className="footer-premium__contact-icon">
                  <Mail size={16} color="#0EA5E9" />
                </div>
                <div className="footer-premium__contact-info">
                  <span className="footer-premium__contact-label">Email</span>
                  <span className="footer-premium__contact-value">info@aspltech.in</span>
                </div>
              </a>

              <div className="footer-premium__contact-item">
                <div className="footer-premium__contact-icon">
                  <MapPin size={16} color="#F59E0B" />
                </div>
                <div className="footer-premium__contact-info">
                  <span className="footer-premium__contact-label">Location</span>
                  <span className="footer-premium__contact-value">Pondicherry, India</span>
                </div>
              </div>

              <div className="footer-premium__contact-item">
                <div className="footer-premium__contact-icon">
                  <Globe size={16} color="#10B981" />
                </div>
                <div className="footer-premium__contact-info">
                  <span className="footer-premium__contact-label">Website</span>
                  <span className="footer-premium__contact-value">www.aspltech.in</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-premium__newsletter">
              <span className="footer-premium__newsletter-label">Stay updated</span>
              <div className="footer-premium__newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="footer-premium__newsletter-input"
                />
                <button className="footer-premium__newsletter-btn">
                  <Zap size={14} color="#fff" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ BOTTOM BAR ============ */}
      <div className="footer-premium__bottom">
        <div className="footer-premium__bottom-container">
          <p className="footer-premium__copyright">
            © {new Date().getFullYear()} ASPL Tech Solutions Pvt. Ltd. All rights reserved.
          </p>
          
          <div className="footer-premium__bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="footer-premium__bottom-divider">|</span>
            <a href="#terms">Terms of Service</a>
            <span className="footer-premium__bottom-divider">|</span>
            <a href="#cookies">Cookie Policy</a>
          </div>

          <p className="footer-premium__made-with">
            Made with <Heart size={12} fill="#EF4444" color="#EF4444" /> in India
          </p>
        </div>
      </div>

      {/* ============ BACK TO TOP ============ */}
      <button
        className={`footer-premium__back-to-top ${showBackToTop ? 'footer-premium__back-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;