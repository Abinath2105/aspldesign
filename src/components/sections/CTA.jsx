import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import './CTA.css';

const CTA = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [focusedField, setFocusedField] = useState(null);
  const sectionRef = useRef(null);

  const whatsappNumber = "919843406360";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi ASPL Team! I'd like to discuss a project.")}`;

  const services = [
    'Business Services',
    'Hospitality & Events',
    'Laptop Solutions',
    'Training & Skills',
    'Creator Studio',
  ];

  const contactMethods = [
    { icon: Phone, label: 'Call us', value: '9843406360', href: 'tel:9843406360', subtext: 'Mon–Sat, 9AM–7PM', color: '#6366F1' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat instantly', href: whatsappLink, subtext: 'Response in minutes', color: '#10B981' },
    { icon: Mail, label: 'Email', value: 'info@aspltech.in', href: 'mailto:info@aspltech.in', subtext: 'Reply within 2hrs', color: '#F59E0B' },
  ];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3500);
  };

  return (
    <section 
      id="contact" 
      className="cta" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      
      {/* Ambient background system */}
      <div className="cta-bg">
        <div className="cta-bg-gradient" />
        <div 
          className="cta-bg-glow"
          style={{
            '--mx': `${mousePos.x * 100}%`,
            '--my': `${mousePos.y * 100}%`,
          }}
        />
        <div className="cta-bg-grid" />
        <div className="cta-orb cta-orb--1" />
        <div className="cta-orb cta-orb--2" />
      </div>

      <div className={`cta-wrap ${visible ? 'is-visible' : ''}`}>
        
        {/* Label */}
        <div className="cta-label">
          <Sparkles size={14} strokeWidth={1.8} />
          <span>Let's connect</span>
          <span className="cta-label-line" />
        </div>
        
        {/* Heading with clip reveal */}
        <h2 className="cta-heading">
          <span className="cta-heading-mask">
            <span className="cta-heading-text">Ready to grow</span>
          </span>
          <span className="cta-heading-mask cta-heading-mask--accent">
            <span className="cta-heading-text cta-heading-text--accent"> together?</span>
          </span>
        </h2>
        
        {/* Subtitle */}
        <p className="cta-subtitle">
          One partner for business, education, and creative services. Real execution with measurable results.
        </p>

        {/* Contact methods */}
        <div className="cta-methods">
          {contactMethods.map((method, i) => (
            <a
              key={i}
              href={method.href}
              target={method.label === 'WhatsApp' ? '_blank' : undefined}
              rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
              className="cta-method"
              style={{ '--m-color': method.color, '--m-i': i }}
            >
              <div className="cta-method-icon">
                <method.icon size={18} strokeWidth={1.8} />
              </div>
              <div className="cta-method-content">
                <span className="cta-method-label">{method.label}</span>
                <span className="cta-method-value">{method.value}</span>
                <span className="cta-method-sub">{method.subtext}</span>
              </div>
              <div className="cta-method-arrow">
                <ArrowRight size={14} strokeWidth={2} />
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="cta-form-container">
          {submitted ? (
            <div className="cta-success">
              <div className="cta-success-icon-wrap">
                <div className="cta-success-icon-ring" />
                <CheckCircle2 size={44} strokeWidth={1.5} color="#10B981" />
              </div>
              <h3 className="cta-success-title">Message sent</h3>
              <p className="cta-success-text">We'll get back to you within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="cta-form">
              <div className="cta-form-row">
                <div className="cta-field">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="cta-input"
                  />
                </div>
                <div className="cta-field">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="cta-input"
                  />
                </div>
              </div>
              
              <div className="cta-form-row">
                <div className="cta-field">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="cta-input"
                  />
                </div>
                <div className="cta-field">
                  <select
                    value={form.service}
                    onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    className="cta-input cta-select"
                  >
                    <option value="">Select service</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="cta-field">
                <textarea
                  placeholder="Tell us about your project..."
                  rows={3}
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="cta-input cta-textarea"
                />
              </div>
              
              <button type="submit" className="cta-submit">
                <span>Send message</span>
                <Send size={14} strokeWidth={2} />
                <div className="cta-submit-shimmer" />
              </button>
            </form>
          )}
        </div>

        {/* Bottom info */}
        <div className="cta-bottom">
          <div className="cta-bottom-item">
            <MapPin size={13} strokeWidth={1.8} />
            <span>Bangalore, India</span>
          </div>
          <div className="cta-bottom-divider" />
          <div className="cta-bottom-item">
            <Clock size={13} strokeWidth={1.8} />
            <span>Mon–Sat, 9AM–7PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;