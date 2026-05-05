// import React, { useState, useEffect } from 'react';
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   ArrowUp, 
//   MessageCircle,
//   ChevronRight,
//   Heart,
//   Linkedin,
//   Instagram,
//   Youtube,
//   Facebook,
//   Twitter,
//   Send,
// } from 'lucide-react';
// import './Footer.css';
// import footerLogo from '../img/logo-dark.png';

// const Footer = () => {
//   const [showTop, setShowTop] = useState(false);

//   const whatsappNumber = "919843406360";
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi ASPL Team! I have a question.")}`;

//   useEffect(() => {
//     const handleScroll = () => setShowTop(window.scrollY > 600);
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const columns = {
//     services: {
//       title: 'Services',
//       links: [
//         { name: 'Business Services', href: '#services' },
//         { name: 'Hospitality & Events', href: '#services' },
//         { name: 'Laptop Solutions', href: '#services' },
//         { name: 'Training & Skills', href: '#services' },
//         { name: 'Creator Studio', href: '#services' },
//       ]
//     },
//     company: {
//       title: 'Company',
//       links: [
//         { name: 'About', href: '#about' },
//         { name: 'Careers', href: '#careers' },
//         { name: 'Strengths', href: '#strengths' },
//         { name: 'Partners', href: '#partners' },
//         { name: 'Contact', href: '#contact' },
//       ]
//     },
//     legal: {
//       title: 'Legal',
//       links: [
//         { name: 'Privacy Policy', href: '#privacy' },
//         { name: 'Terms of Service', href: '#terms' },
//         { name: 'Cookie Policy', href: '#cookies' },
//         { name: 'Refund Policy', href: '#refund' },
//       ]
//     }
//   };

//   const socialLinks = [
//     { icon: Linkedin, href: '#', label: 'LinkedIn' },
//     { icon: Instagram, href: '#', label: 'Instagram' },
//     { icon: Youtube, href: '#', label: 'YouTube' },
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//   ];

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="ftr">
      
//       {/* CTA strip */}
//       <div className="ftr__cta">
//         <div className="ftr__cta-wrap">
//           <div className="ftr__cta-content">
//             <h2 className="ftr__cta-title">Ready to start your next project?</h2>
//             <p className="ftr__cta-sub">Let's discuss how we can help you grow.</p>
//           </div>
//           <div className="ftr__cta-actions">
//             <a href="#contact" className="ftr__cta-btn ftr__cta-btn--primary">
//               Get a free consultation
//               <ChevronRight size={15} strokeWidth={2} />
//             </a>
//             <a 
//               href={whatsappLink} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="ftr__cta-btn ftr__cta-btn--outline"
//             >
//               <MessageCircle size={16} strokeWidth={1.8} />
//               Chat now
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main footer */}
//       <div className="ftr__main">
//         <div className="ftr__wrap">
          
//           {/* Brand column */}
//           <div className="ftr__brand">
//             <a href="#" className="ftr__logo">
//               <img src={footerLogo} alt="ASPL" className="ftr__logo-img" />
//             </a>
//             <p className="ftr__brand-desc">
//               Technology, creativity, marketing, and manpower — all under one roof.
//             </p>
//             <div className="ftr__brand-contact">
//               <a href="tel:9843406360" className="ftr__brand-contact-item">
//                 <Phone size={14} strokeWidth={1.5} />
//                 9843406360
//               </a>
//               <a href="mailto:info@aspltech.in" className="ftr__brand-contact-item">
//                 <Mail size={14} strokeWidth={1.5} />
//                 info@aspltech.in
//               </a>
//               <span className="ftr__brand-contact-item">
//                 <MapPin size={14} strokeWidth={1.5} />
//                 Bangalore, India
//               </span>
//             </div>
//           </div>

//           {/* Link columns */}
//           {Object.values(columns).map((col, i) => (
//             <div key={i} className="ftr__col">
//               <h3 className="ftr__col-title">{col.title}</h3>
//               <ul className="ftr__col-list">
//                 {col.links.map((link, j) => (
//                   <li key={j}>
//                     <a href={link.href} className="ftr__link">{link.name}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Newsletter */}
//           <div className="ftr__col">
//             <h3 className="ftr__col-title">Stay updated</h3>
//             <p className="ftr__newsletter-text">Get the latest news and updates directly to your inbox.</p>
//             <form className="ftr__newsletter" onSubmit={e => e.preventDefault()}>
//               <input 
//                 type="email" 
//                 placeholder="Enter your email" 
//                 className="ftr__newsletter-input"
//               />
//               <button type="submit" className="ftr__newsletter-btn">
//                 <Send size={14} strokeWidth={2} />
//               </button>
//             </form>
            
//             {/* Social */}
//             <div className="ftr__social">
//               {socialLinks.map((social, i) => (
//                 <a
//                   key={i}
//                   href={social.href}
//                   className="ftr__social-link"
//                   aria-label={social.label}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <social.icon size={16} strokeWidth={1.5} />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="ftr__bottom">
//         <div className="ftr__bottom-wrap">
//           <p className="ftr__copy">
//             &copy; {new Date().getFullYear()} ASPL Tech Solutions Pvt. Ltd. All rights reserved.
//           </p>
//           <p className="ftr__made">
//             Made  in India
//           </p>
//         </div>
//       </div>

//       {/* Back to top */}
//       {/* <button
//         className={`ftr__top ${showTop ? 'ftr__top--visible' : ''}`}
//         onClick={scrollToTop}
//         aria-label="Back to top"
//       >
//         <ArrowUp size={16} strokeWidth={2} />
//       </button> */}
//     </footer>
//   );
// };

// export default Footer;

















import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  MessageCircle,
  ChevronRight,
  Heart,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Send,
  Sparkles,
} from 'lucide-react';
import './Footer.css';
import footerLogo from '../img/logo-dark.png';

const Footer = () => {
  const [showTop, setShowTop] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const whatsappNumber = "919843406360";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi ASPL Team! I have a question.")}`;

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const columns = {
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
        { name: 'About', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Strengths', href: '#strengths' },
        { name: 'Partners', href: '#partners' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Cookie Policy', href: '#cookies' },
        { name: 'Refund Policy', href: '#refund' },
      ]
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="ftr">
      
      {/* CTA strip */}
      <div className="ftr-cta">
        <div className="ftr-cta-wrap">
          <div className="ftr-cta-content">
            <span className="ftr-cta-label">
              <Sparkles size={14} strokeWidth={1.8} />
              Let's build something great
            </span>
            <h2 className="ftr-cta-title">Ready to start your next project?</h2>
            <p className="ftr-cta-sub">Let's discuss how we can help you grow.</p>
          </div>
          <div className="ftr-cta-actions">
            <a href="#contact" className="ftr-cta-btn ftr-cta-btn--primary">
              <span>Get a free consultation</span>
              <ChevronRight size={16} strokeWidth={2} />
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ftr-cta-btn ftr-cta-btn--outline"
            >
              <MessageCircle size={16} strokeWidth={1.8} />
              <span>Chat now</span>
            </a>
          </div>
        </div>
        {/* Subtle divider */}
        <div className="ftr-cta-divider" />
      </div>

      {/* Main footer */}
      <div className="ftr-main">
        <div className="ftr-wrap">
          
          {/* Brand column */}
          <div className="ftr-brand">
            <a href="#" className="ftr-logo">
              <img src={footerLogo} alt="ASPL" className="ftr-logo-img" />
            </a>
            <p className="ftr-brand-desc">
              Technology, creativity, marketing, and manpower — all under one roof.
            </p>
            <div className="ftr-brand-contact">
              <a href="tel:9843406360" className="ftr-brand-contact-item">
                <Phone size={14} strokeWidth={1.8} />
                <span>9843406360</span>
              </a>
              <a href="mailto:info@aspltech.in" className="ftr-brand-contact-item">
                <Mail size={14} strokeWidth={1.8} />
                <span>info@aspltech.in</span>
              </a>
              <span className="ftr-brand-contact-item">
                <MapPin size={14} strokeWidth={1.8} />
                <span>Bangalore, India</span>
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(columns).map((col, i) => (
            <div key={i} className="ftr-col">
              <h3 className="ftr-col-title">{col.title}</h3>
              <ul className="ftr-col-list">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="ftr-link">
                      {link.name}
                      <span className="ftr-link-arrow">
                        <ChevronRight size={12} strokeWidth={2} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter & Social */}
          <div className="ftr-col ftr-col--newsletter">
            <h3 className="ftr-col-title">Stay updated</h3>
            <p className="ftr-newsletter-text">Get the latest news and updates directly to your inbox.</p>
            
            {subscribed ? (
              <div className="ftr-subscribed">
                <span className="ftr-subscribed-check">✓</span>
                Subscribed successfully
              </div>
            ) : (
              <form className="ftr-newsletter" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ftr-newsletter-input"
                  required
                />
                <button type="submit" className="ftr-newsletter-btn">
                  <Send size={14} strokeWidth={2} />
                </button>
              </form>
            )}
            
            {/* Social links */}
            <div className="ftr-social">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="ftr-social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={17} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ftr-bottom">
        <div className="ftr-bottom-wrap">
          <p className="ftr-copy">
            &copy; {new Date().getFullYear()} ASPL Tech Solutions Pvt. Ltd. All rights reserved.
          </p>
          <p className="ftr-made">
            Made with <Heart size={12} strokeWidth={2} fill="#EC4899" color="#EC4899" /> in India
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        className={`ftr-top ${showTop ? 'is-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={18} strokeWidth={2} />
      </button>
    </footer>
  );
};

export default Footer;