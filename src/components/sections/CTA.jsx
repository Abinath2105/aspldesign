// import React from 'react';
// import { ArrowRight, Phone, Mail } from 'lucide-react';

// const CTA = () => {
//   return (
//     <section id="contact" className="relative py-32">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="glass-card rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/10"></div>
          
//           <div className="relative z-10">
//             <h2 className="text-3xl md:text-6xl font-black mb-6">
//               Ready to <span className="gradient-text">Grow Together?</span>
//             </h2>
//             <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
//               One partner for business, education & creative services. 
//               Real execution with measurable results.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <a
//                 href="tel:9843406360"
//                 className="group inline-flex items-center space-x-3 bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/25"
//               >
//                 <Phone size={20} />
//                 <span>9843406360</span>
//               </a>
//               <a
//                 href="mailto:info@aspltech.in"
//                 className="group inline-flex items-center space-x-3 border border-white/10 hover:border-white/20 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
//               >
//                 <Mail size={20} />
//                 <span>info@aspltech.in</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTA;










import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageCircle, 
  Sparkles,
  MapPin,
  Clock,
  Shield,
  Zap,
  Send,
  CheckCircle2,
  Users,
  Star,
  ExternalLink,
  Calendar,
  ChevronRight
} from 'lucide-react';
import './CTA.css';

const CTA = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [activeField, setActiveField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const whatsappNumber = "919843406360";
  const whatsappMessage = encodeURIComponent("Hi ASPL Team! I'd like to discuss a project. Can we connect?");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const services = [
    'Business Services',
    'Hospitality & Events',
    'Laptop Solutions',
    'Training & Skills',
    'Creator Studio',
    'Other'
  ];

  const contactCards = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '9843406360',
      href: 'tel:9843406360',
      color: '#6366F1',
      bgColor: '#EEF2FF',
      subtext: 'Mon-Sat, 9AM-7PM',
      badge: 'Quick'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat Instantly',
      href: whatsappLink,
      color: '#10B981',
      bgColor: '#ECFDF5',
      subtext: 'Typically replies in 5 min',
      badge: 'Fastest'
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'info@aspltech.in',
      href: 'mailto:info@aspltech.in',
      color: '#F59E0B',
      bgColor: '#FFFBEB',
      subtext: 'We reply within 2 hours',
      badge: 'Detailed'
    },
  ];

  const trustIndicators = [
    { icon: Shield, text: '100% Confidential' },
    { icon: Clock, text: 'Quick Response' },
    { icon: Users, text: 'Expert Team' },
    { icon: Star, text: '4.9/5 Rating' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: '', email: '', phone: '', service: '', message: '' });
        setSelectedService(null);
      }, 3000);
    }, 1500);
  };

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.cta-premium__reveal');
    elements?.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="cta-premium" ref={sectionRef}>
      
      {/* Background */}
      <div className="cta-premium__bg">
        <div className="cta-premium__bg-orb cta-premium__bg-orb--1" />
        <div className="cta-premium__bg-orb cta-premium__bg-orb--2" />
        <div className="cta-premium__bg-orb cta-premium__bg-orb--3" />
      </div>

      <div className="cta-premium__container">
        
        {/* ============ SECTION HEADER ============ */}
        <div className="cta-premium__header cta-premium__reveal">
          <div className="cta-premium__badge">
            <Sparkles size={14} />
            <span>Let's Connect</span>
          </div>

          <h2 className="cta-premium__title">
            Ready to
            <span className="cta-premium__title-gradient"> grow together?</span>
          </h2>
          
          <p className="cta-premium__subtitle">
            One partner for business, education, and creative services. 
            Real execution with measurable results — let's build your success story.
          </p>
        </div>

        {/* ============ CONTACT CARDS ROW ============ */}
        <div className="cta-premium__contact-cards cta-premium__reveal">
          {contactCards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              target={card.icon === MessageCircle ? '_blank' : undefined}
              rel={card.icon === MessageCircle ? 'noopener noreferrer' : undefined}
              className="cta-premium__contact-card"
              style={{
                '--card-color': card.color,
                '--card-bg': card.bgColor,
              }}
            >
              <div className="cta-premium__contact-card-header">
                <div 
                  className="cta-premium__contact-card-icon"
                  style={{ backgroundColor: card.bgColor, color: card.color }}
                >
                  <card.icon size={20} />
                </div>
                <span className="cta-premium__contact-card-badge" style={{ backgroundColor: card.bgColor, color: card.color }}>
                  {card.badge}
                </span>
              </div>
              
              <div className="cta-premium__contact-card-body">
                <span className="cta-premium__contact-card-label">{card.label}</span>
                <span className="cta-premium__contact-card-value">{card.value}</span>
                <span className="cta-premium__contact-card-subtext">{card.subtext}</span>
              </div>

              <div className="cta-premium__contact-card-arrow">
                <ExternalLink size={14} color={card.color} />
              </div>
            </a>
          ))}
        </div>

        {/* ============ MAIN CONTENT: FORM + INFO ============ */}
        <div className="cta-premium__main cta-premium__reveal">
          
          {/* Left: Form */}
          <div className="cta-premium__form-wrapper" ref={formRef}>
            <div className="cta-premium__form-card">
              
              {/* Form Header */}
              <div className="cta-premium__form-header">
                <div className="cta-premium__form-header-icon">
                  <Send size={18} color="#6366F1" />
                </div>
                <div>
                  <h3 className="cta-premium__form-title">Send us a message</h3>
                  <p className="cta-premium__form-subtitle">Fill the form below and we'll get back within 2 hours</p>
                </div>
              </div>

              {isSubmitted ? (
                /* Success State */
                <div className="cta-premium__form-success">
                  <div className="cta-premium__form-success-icon">
                    <CheckCircle2 size={48} color="#10B981" />
                  </div>
                  <h4 className="cta-premium__form-success-title">Message Sent!</h4>
                  <p className="cta-premium__form-success-text">
                    Thank you for reaching out. Our team will contact you within 2 hours.
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="cta-premium__form">
                  <div className="cta-premium__form-row">
                    <div className={`cta-premium__form-group ${activeField === 'name' ? 'cta-premium__form-group--active' : ''}`}>
                      <label className="cta-premium__form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        placeholder="John Doe"
                        required
                        className="cta-premium__form-input"
                      />
                    </div>

                    <div className={`cta-premium__form-group ${activeField === 'email' ? 'cta-premium__form-group--active' : ''}`}>
                      <label className="cta-premium__form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        placeholder="john@company.com"
                        required
                        className="cta-premium__form-input"
                      />
                    </div>
                  </div>

                  <div className="cta-premium__form-row">
                    <div className={`cta-premium__form-group ${activeField === 'phone' ? 'cta-premium__form-group--active' : ''}`}>
                      <label className="cta-premium__form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField('phone')}
                        onBlur={() => setActiveField(null)}
                        placeholder="+91 98765 43210"
                        className="cta-premium__form-input"
                      />
                    </div>

                    <div className={`cta-premium__form-group ${activeField === 'service' ? 'cta-premium__form-group--active' : ''}`}>
                      <label className="cta-premium__form-label">Service Interested In</label>
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField('service')}
                        onBlur={() => setActiveField(null)}
                        className="cta-premium__form-input cta-premium__form-select"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={`cta-premium__form-group ${activeField === 'message' ? 'cta-premium__form-group--active' : ''}`}>
                    <label className="cta-premium__form-label">Message</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      placeholder="Tell us about your project or requirements..."
                      rows={4}
                      className="cta-premium__form-input cta-premium__form-textarea"
                    />
                  </div>

                  {/* Service Quick Select */}
                  <div className="cta-premium__form-quick-select">
                    <span className="cta-premium__form-quick-label">Quick select service:</span>
                    <div className="cta-premium__form-quick-tags">
                      {services.slice(0, 5).map((service) => (
                        <button
                          key={service}
                          type="button"
                          className={`cta-premium__form-quick-tag ${formState.service === service ? 'cta-premium__form-quick-tag--active' : ''}`}
                          onClick={() => setFormState(prev => ({ ...prev, service }))}
                        >
                          {formState.service === service && <CheckCircle2 size={12} />}
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className={`cta-premium__form-submit ${isSubmitting ? 'cta-premium__form-submit--loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="cta-premium__form-spinner" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Info Panel */}
          <div className="cta-premium__info">
            
            {/* Office Hours Card */}
            <div className="cta-premium__info-card">
              <div className="cta-premium__info-card-header">
                <Calendar size={18} color="#6366F1" />
                <h4>Office Hours</h4>
              </div>
              <div className="cta-premium__info-hours">
                <div className="cta-premium__info-hour-row">
                  <span>Monday - Saturday</span>
                  <span className="cta-premium__info-hour-time">9:00 AM - 7:00 PM</span>
                </div>
                <div className="cta-premium__info-hour-row">
                  <span>Sunday</span>
                  <span className="cta-premium__info-hour-time cta-premium__info-hour-time--closed">Closed</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="cta-premium__info-card">
              <div className="cta-premium__info-card-header">
                <Shield size={18} color="#10B981" />
                <h4>Why Reach Out?</h4>
              </div>
              <div className="cta-premium__info-trust">
                {trustIndicators.map((item, index) => (
                  <div key={index} className="cta-premium__info-trust-item">
                    <item.icon size={16} color="#6366F1" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map / Location */}
            <div className="cta-premium__info-card">
              <div className="cta-premium__info-card-header">
                <MapPin size={18} color="#F59E0B" />
                <h4>Visit Us</h4>
              </div>
              <p className="cta-premium__info-address">
                ASPL Tech Solutions Pvt. Ltd.<br />
                Pondicherry, India
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-premium__info-directions"
              >
                <span>Get Directions</span>
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Brand Quote */}
            <div className="cta-premium__info-quote">
              <Zap size={18} color="#6366F1" />
              <p>"We don't just create services — we create success stories. Let's build yours together."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;