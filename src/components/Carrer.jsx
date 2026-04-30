import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight,
  MessageCircle,
  Clock,
  Users,
  CheckCircle2,
  Shield,
  Send,
} from 'lucide-react';
import './Career.css';

const Career = () => {
  const [activePath, setActivePath] = useState(0);
  const [activeCourse, setActiveCourse] = useState(null);
  const [view, setView] = useState('paths');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const whatsappNumber = "919843406360";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi ASPL! I'm interested in your programs.")}`;

  const paths = [
    {
      id: 'tech',
      title: 'Technology',
      description: 'Master software engineering with real projects and expert mentorship.',
      color: '#4F46E5',
      stats: { students: '500+', placement: '94%' },
      courses: [
        { name: 'Full Stack Development', duration: '6 months', price: '₹49,999', features: ['HTML, CSS, JavaScript', 'React & Node.js', 'Database Design', 'Live Projects', 'Certificate'] },
        { name: 'Data Science & AI', duration: '8 months', price: '₹59,999', features: ['Python', 'Machine Learning', 'Deep Learning', 'Capstone Project', 'Job Guarantee'] },
        { name: 'Mobile App Development', duration: '5 months', price: '₹44,999', features: ['React Native', 'iOS & Android', 'App Deployment', 'Mentorship'] },
      ]
    },
    {
      id: 'business',
      title: 'Business',
      description: 'Learn analytics and marketing that delivers measurable business impact.',
      color: '#EA580C',
      stats: { students: '300+', placement: '90%' },
      courses: [
        { name: 'Business Analytics', duration: '4 months', price: '₹39,999', features: ['Excel Advanced', 'Power BI', 'Tableau', 'Case Studies'] },
        { name: 'Digital Marketing', duration: '3 months', price: '₹29,999', features: ['SEO & SEM', 'Social Media', 'Google Ads', 'Live Campaigns'] },
      ]
    },
    {
      id: 'creative',
      title: 'Creative',
      description: 'Create beautiful, functional designs that users love and brands need.',
      color: '#DB2777',
      stats: { students: '250+', placement: '88%' },
      courses: [
        { name: 'UI/UX Design', duration: '5 months', price: '₹44,999', features: ['Figma Mastery', 'User Research', 'Prototyping', 'Portfolio'] },
        { name: 'Graphic Design', duration: '4 months', price: '₹34,999', features: ['Photoshop', 'Illustrator', 'Branding', 'Freelancing'] },
      ]
    },
    {
      id: 'professional',
      title: 'Professional',
      description: 'Communication and leadership skills that accelerate any career.',
      color: '#059669',
      stats: { students: '200+', placement: '96%' },
      courses: [
        { name: 'Business Communication', duration: '2 months', price: '₹19,999', features: ['Public Speaking', 'Email Writing', 'Negotiation', 'Mock Sessions'] },
      ]
    },
  ];

  // ========== PATHS VIEW ==========
  const renderPaths = () => (
    <div className="cr" ref={sectionRef}>
      <div className={`cr__wrap ${isVisible ? 'cr__wrap--in' : ''}`}>
        
        {/* Label */}
        <span className="cr__label">Career programs</span>
        
        {/* Title */}
        <h1 className="cr__heading">
          Find your
          <span className="cr__heading-accent"> path</span>
        </h1>

        {/* Path cards */}
        <div className="cr__paths">
          {paths.map((path, i) => (
            <button
              key={path.id}
              className={`cr__path ${activePath === i ? 'cr__path--on' : ''}`}
              onClick={() => setActivePath(i)}
              style={{ '--p-color': path.color }}
            >
              <span className="cr__path-index">{String(i + 1).padStart(2, '0')}</span>
              <span className="cr__path-title">{path.title}</span>
              <span className="cr__path-desc">{path.description}</span>
              <span className="cr__path-line" />
            </button>
          ))}
        </div>

        {/* Course cards */}
        <div className="cr__courses">
          {paths[activePath].courses.map((course) => (
            <div
              key={course.name}
              className="cr__course"
              onClick={() => { setActiveCourse(course); setView('detail'); }}
              style={{ '--p-color': paths[activePath].color }}
            >
              <span className="cr__course-name">{course.name}</span>
              <span className="cr__course-meta">{course.duration}</span>
              <span className="cr__course-price">{course.price}</span>
              <span className="cr__course-arrow">
                <ArrowRight size={15} strokeWidth={1.5} />
              </span>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="cr__stats">
          <div className="cr__stat">
            <span className="cr__stat-num" style={{ color: paths[activePath].color }}>
              {paths[activePath].stats.students}
            </span>
            <span className="cr__stat-text">Students trained</span>
          </div>
          <div className="cr__stat">
            <span className="cr__stat-num" style={{ color: paths[activePath].color }}>
              {paths[activePath].stats.placement}
            </span>
            <span className="cr__stat-text">Placement rate</span>
          </div>
        </div>

        {/* WhatsApp link */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cr__wa">
          <MessageCircle size={15} strokeWidth={1.5} />
          Talk to a counselor
        </a>
      </div>
    </div>
  );

  // ========== DETAIL VIEW ==========
  const renderDetail = () => {
    if (!activeCourse) return null;
    return (
      <div className="cr cr--page">
        <div className="cr__wrap cr__wrap--in">
          
          <button className="cr__back" onClick={() => setView('paths')}>
            ← Back
          </button>

          <span className="cr__label" style={{ color: paths[activePath].color }}>
            {paths[activePath].title}
          </span>
          
          <h1 className="cr__heading cr__heading--small">
            {activeCourse.name}
          </h1>

          <div className="cr__detail-meta">
            <span><Clock size={14} strokeWidth={1.5} /> {activeCourse.duration}</span>
            <span className="cr__detail-price">{activeCourse.price}</span>
          </div>

          <div className="cr__detail-grid">
            <div>
              <h3 className="cr__detail-subtitle">What you'll learn</h3>
              <ul className="cr__detail-list">
                {activeCourse.features.map((f, i) => (
                  <li key={i}>
                    <CheckCircle2 size={15} strokeWidth={1.5} color={paths[activePath].color} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="cr__detail-box" style={{ borderColor: `${paths[activePath].color}20` }}>
              <span className="cr__detail-box-price">{activeCourse.price}</span>
              <button 
                className="cr__detail-btn"
                style={{ background: paths[activePath].color }}
                onClick={() => setView('enroll')}
              >
                Enroll now
                <ArrowRight size={15} strokeWidth={1.5} />
              </button>
              <p className="cr__detail-note">
                <Shield size={13} strokeWidth={1.5} color={paths[activePath].color} />
                {paths[activePath].stats.placement} placement rate
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ========== ENROLL VIEW ==========
  const renderEnroll = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', batch: '' });
    const [done, setDone] = useState(false);

    if (done) {
      setTimeout(() => setView('success'), 1000);
      return (
        <div className="cr cr--page cr--center">
          <div className="cr__loading">
            <div className="cr__loading-ring" style={{ borderTopColor: paths[activePath].color }} />
            <p>Submitting…</p>
          </div>
        </div>
      );
    }

    return (
      <div className="cr cr--page">
        <div className="cr__wrap cr__wrap--in">
          
          <button className="cr__back" onClick={() => setView('detail')}>
            ← Back
          </button>

          <h1 className="cr__heading cr__heading--small">
            Start your journey
          </h1>
          <p className="cr__enroll-course" style={{ color: paths[activePath].color }}>
            {activeCourse?.name}
          </p>

          <form className="cr__form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <input type="text" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} />
            <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} />
            <input type="tel" placeholder="Phone" required value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} />
            <select required value={form.batch} onChange={e => setForm(p => ({...p, batch: e.target.value}))}>
              <option value="">Preferred batch</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>Weekend</option>
            </select>
            <button type="submit" className="cr__form-btn" style={{ background: paths[activePath].color }}>
              <Send size={14} strokeWidth={1.5} />
              Submit enrollment
            </button>
          </form>
        </div>
      </div>
    );
  };

  // ========== SUCCESS VIEW ==========
  const renderSuccess = () => (
    <div className="cr cr--page cr--center">
      <div className="cr__wrap cr__wrap--in">
        <div className="cr__success">
          <div className="cr__success-icon">
            <CheckCircle2 size={48} strokeWidth={1.5} color="#059669" />
          </div>
          <h2>You're enrolled.</h2>
          <p>We'll reach out within 24 hours to begin your journey in <strong style={{ color: paths[activePath].color }}>{activeCourse?.name}</strong>.</p>
          <button className="cr__form-btn" style={{ background: paths[activePath].color }} onClick={() => { setView('paths'); setActiveCourse(null); }}>
            Explore more programs
            <ArrowRight size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="careers">
      {view === 'paths' && renderPaths()}
      {view === 'detail' && renderDetail()}
      {view === 'enroll' && renderEnroll()}
      {view === 'success' && renderSuccess()}
    </section>
  );
};

export default Career;