import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';
import './CTA.css';

const CTA = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
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
    { icon: Phone, label: 'Call', value: '9843406360', href: 'tel:9843406360', subtext: 'Mon–Sat, 9AM–7PM', color: '#4F46E5' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat now', href: whatsappLink, subtext: 'Instant response', color: '#059669' },
    { icon: Mail, label: 'Email', value: 'info@aspltech.in', href: 'mailto:info@aspltech.in', subtext: 'Reply within 2hrs', color: '#EA580C' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="cta" ref={sectionRef}>
      
      {/* Apple-style animated background */}
      <div className="cta__canvas">
        <div className="cta__mesh cta__mesh--1" />
        <div className="cta__mesh cta__mesh--2" />
        <div className="cta__mesh cta__mesh--3" />
      </div>

      <div className={`cta__wrap ${visible ? 'cta__wrap--in' : ''}`}>
        
        {/* Label */}
        <div className="cta__label">Let's connect</div>
        
        {/* Heading */}
        <h2 className="cta__heading">
          Ready to grow<span className="cta__heading-accent"> together?</span>
        </h2>
        
        {/* Subtitle */}
        <p className="cta__subtitle">
          One partner for business, education, and creative services. Real execution with measurable results.
        </p>

        {/* Contact methods */}
        <div className="cta__methods">
          {contactMethods.map((method, i) => (
            <a
              key={i}
              href={method.href}
              target={method.label === 'WhatsApp' ? '_blank' : undefined}
              rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
              className="cta__method"
              style={{ '--m-color': method.color, animationDelay: `${i * 0.1}s` }}
            >
              <div className="cta__method-icon-wrap">
                <method.icon size={18} strokeWidth={1.8} />
              </div>
              <div className="cta__method-info">
                <span className="cta__method-label">{method.label}</span>
                <span className="cta__method-value">{method.value}</span>
                <span className="cta__method-sub">{method.subtext}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="cta__form-wrap">
          {submitted ? (
            <div className="cta__success">
              <div className="cta__success-icon">
                <CheckCircle2 size={40} strokeWidth={1.5} color="#059669" />
              </div>
              <h3>Message sent</h3>
              <p>We'll get back to you within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="cta__form">
              <div className="cta__form-row">
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  required
                  className="cta__input"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  required
                  className="cta__input"
                />
              </div>
              
              <div className="cta__form-row">
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  className="cta__input"
                />
                <select
                  value={form.service}
                  onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                  className="cta__input cta__select"
                >
                  <option value="">Select service</option>
                  {services.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              
              <textarea
                placeholder="Tell us about your project..."
                rows={3}
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                className="cta__input cta__textarea"
              />
              
              <button type="submit" className="cta__submit">
                <Send size={14} strokeWidth={2} />
                Send message
              </button>
            </form>
          )}
        </div>

        {/* Bottom info */}
        <div className="cta__bottom">
          <span className="cta__bottom-item">
            <MapPin size={13} strokeWidth={1.5} />
            Pondicherry, India
          </span>
          <span className="cta__bottom-item">
            <Clock size={13} strokeWidth={1.5} />
            Mon–Sat, 9AM–7PM
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;