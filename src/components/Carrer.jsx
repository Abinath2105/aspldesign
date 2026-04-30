import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Star, 
  Zap,
  Clock,
  BarChart3,
  Shield,
  Users,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Briefcase,
  Target,
  Trophy,
  Send,
  BookOpen,
  Monitor,
  TrendingUp,
  MessageCircle,
  Code2,
  Palette,
  LineChart,
  Megaphone,
  Heart,
  Play
} from 'lucide-react';
import './Career.css';

const Career = () => {
  const [currentView, setCurrentView] = useState('paths');
  const [selectedPath, setSelectedPath] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [hoveredPath, setHoveredPath] = useState(null);
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    batch: '',
    experience: '',
    goal: '',
    message: ''
  });

  const whatsappNumber = "919843406360";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi ASPL Team! I'm interested in your career programs. Can you guide me?")}`;

  const careerPaths = [
    {
      id: 'tech',
      icon: Code2,
      title: 'Tech & Development',
      description: 'Build the future with code. Master programming, web development, and software engineering.',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      color: '#6366F1',
      bgColor: 'rgba(99,102,241,0.08)',
      stats: { students: '500+', placement: '94%', salary: '₹8 LPA' },
      courses: [
        {
          id: 'fullstack',
          name: 'Full Stack Web Development',
          duration: '6 Months',
          level: 'Beginner to Advanced',
          price: '₹49,999',
          icon: Code2,
          features: [
            'HTML, CSS, JavaScript Mastery',
            'React.js & Node.js',
            'Database Management',
            'Real-world Projects',
            'Industry Certification',
            'Placement Assistance'
          ]
        },
        {
          id: 'datascience',
          name: 'Data Science & AI',
          duration: '8 Months',
          level: 'Intermediate',
          price: '₹59,999',
          icon: LineChart,
          features: [
            'Python Programming',
            'Machine Learning',
            'Deep Learning',
            'Data Visualization',
            'Capstone Projects',
            '100% Job Guarantee'
          ]
        },
        {
          id: 'mobile',
          name: 'Mobile App Development',
          duration: '5 Months',
          level: 'Beginner',
          price: '₹44,999',
          icon: Monitor,
          features: [
            'React Native',
            'iOS & Android',
            'UI/UX Design',
            'App Store Deployment',
            'Live Projects',
            'Mentorship'
          ]
        }
      ]
    },
    {
      id: 'business',
      icon: TrendingUp,
      title: 'Business & Analytics',
      description: 'Master the tools of success. Learn business strategy, data analytics, and management.',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
      color: '#F59E0B',
      bgColor: 'rgba(245,158,11,0.08)',
      stats: { students: '300+', placement: '90%', salary: '₹6.5 LPA' },
      courses: [
        {
          id: 'business-analytics',
          name: 'Business Analytics',
          duration: '4 Months',
          level: 'Beginner',
          price: '₹39,999',
          icon: BarChart3,
          features: [
            'Excel Advanced',
            'Power BI',
            'Tableau',
            'Statistical Analysis',
            'Business Intelligence',
            'Case Studies'
          ]
        },
        {
          id: 'digital-marketing',
          name: 'Digital Marketing',
          duration: '3 Months',
          level: 'Beginner',
          price: '₹29,999',
          icon: Megaphone,
          features: [
            'SEO & SEM',
            'Social Media Marketing',
            'Content Marketing',
            'Google Ads',
            'Analytics',
            'Live Campaigns'
          ]
        }
      ]
    },
    {
      id: 'creative',
      icon: Palette,
      title: 'Creative & Digital',
      description: 'Design. Market. Influence. Unlock your creative potential with industry-leading tools.',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
      color: '#EC4899',
      bgColor: 'rgba(236,72,153,0.08)',
      stats: { students: '250+', placement: '88%', salary: '₹5.5 LPA' },
      courses: [
        {
          id: 'ui-ux',
          name: 'UI/UX Design',
          duration: '5 Months',
          level: 'Beginner',
          price: '₹44,999',
          icon: Palette,
          features: [
            'Figma Mastery',
            'User Research',
            'Wireframing',
            'Prototyping',
            'Design Systems',
            'Portfolio Building'
          ]
        },
        {
          id: 'graphic-design',
          name: 'Graphic Design',
          duration: '4 Months',
          level: 'Beginner',
          price: '₹34,999',
          icon: Sparkles,
          features: [
            'Adobe Photoshop',
            'Illustrator',
            'Brand Identity',
            'Typography',
            'Print Design',
            'Freelancing Guide'
          ]
        }
      ]
    },
    {
      id: 'professional',
      icon: Briefcase,
      title: 'Professional Skills',
      description: 'Skills that set you apart. Communication, leadership, and career development.',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      color: '#10B981',
      bgColor: 'rgba(16,185,129,0.08)',
      stats: { students: '200+', placement: '96%', salary: '₹4.5 LPA' },
      courses: [
        {
          id: 'communication',
          name: 'Business Communication',
          duration: '2 Months',
          level: 'All Levels',
          price: '₹19,999',
          icon: Users,
          features: [
            'Public Speaking',
            'Email Writing',
            'Presentation Skills',
            'Negotiation',
            'Interpersonal Skills',
            'Mock Sessions'
          ]
        }
      ]
    }
  ];

  const trustIndicators = [
    { icon: Trophy, text: '15+ Career Programs', color: '#F59E0B' },
    { icon: TrendingUp, text: '92% Placement Rate', color: '#10B981' },
    { icon: Users, text: '50+ Industry Mentors', color: '#6366F1' },
    { icon: Shield, text: '100% Job Guarantee*', color: '#EC4899' },
  ];

  const handlePathClick = (path) => {
    setSelectedPath(path);
    setCurrentView('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setCurrentView('enrollment');
    setFormStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPaths = () => {
    setCurrentView('paths');
    setSelectedPath(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCourses = () => {
    setCurrentView('courses');
    setSelectedCourse(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => setFormStep(prev => Math.min(prev + 1, 3));
  const handlePrevStep = () => setFormStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Enrollment Data:', { ...formData, course: selectedCourse?.name, path: selectedPath?.title });
      setIsSubmitting(false);
      setCurrentView('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  const resetForm = () => {
    setFormData({ fullName: '', email: '', phone: '', batch: '', experience: '', goal: '', message: '' });
    setCurrentView('paths');
    setSelectedPath(null);
    setSelectedCourse(null);
    setFormStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ============================================
  // RENDER: CAREER PATHS
  // ============================================
  const renderCareerPaths = () => (
    <div className="career-premium">
      {/* Hero */}
      <section className="career-premium__hero">
        <div className="career-premium__hero-bg">
          <div className="career-premium__hero-orb career-premium__hero-orb--1" />
          <div className="career-premium__hero-orb career-premium__hero-orb--2" />
        </div>
        
        <div className="career-premium__hero-content">
          <div className="career-premium__badge">
            <GraduationCap size={14} />
            <span>Career Development</span>
          </div>
          
          <h1 className="career-premium__hero-title">
            Your career
            <span className="career-premium__hero-title-gradient"> starts here</span>
          </h1>
          
          <p className="career-premium__hero-desc">
            Industry-vetted curriculum. Expert mentors. Real projects. 
            We don't just teach — we transform careers.
          </p>

          <div className="career-premium__hero-stats">
            {trustIndicators.map((item, i) => (
              <div key={i} className="career-premium__hero-stat">
                <item.icon size={18} color={item.color} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Grid */}
      <section className="career-premium__paths">
        <div className="career-premium__container">
          <div className="career-premium__section-header">
            <h2>Choose Your Path</h2>
            <p>Select a career track and explore industry-aligned programs</p>
          </div>

          <div className="career-premium__paths-grid">
            {careerPaths.map((path) => (
              <div
                key={path.id}
                className={`career-premium__path-card ${hoveredPath === path.id ? 'career-premium__path-card--hovered' : ''}`}
                onMouseEnter={() => setHoveredPath(path.id)}
                onMouseLeave={() => setHoveredPath(null)}
                onClick={() => handlePathClick(path)}
                style={{ '--path-color': path.color, '--path-bg': path.bgColor }}
              >
                <div className="career-premium__path-card-accent" style={{ background: path.gradient }} />
                
                <div className="career-premium__path-card-icon" style={{ background: path.gradient }}>
                  <path.icon size={24} color="#FFFFFF" />
                </div>

                <h3 className="career-premium__path-card-title">{path.title}</h3>
                <p className="career-premium__path-card-desc">{path.description}</p>

                <div className="career-premium__path-card-stats">
                  <div className="career-premium__path-card-stat">
                    <Users size={12} color={path.color} />
                    <span>{path.stats.students}</span>
                  </div>
                  <div className="career-premium__path-card-stat">
                    <TrendingUp size={12} color={path.color} />
                    <span>{path.stats.placement}</span>
                  </div>
                  <div className="career-premium__path-card-stat">
                    <Target size={12} color={path.color} />
                    <span>{path.stats.salary}</span>
                  </div>
                </div>

                <div className="career-premium__path-card-action">
                  <span>Explore Courses</span>
                  <ArrowRight size={14} color={path.color} />
                </div>

                <div className="career-premium__path-card-glow" style={{ background: `radial-gradient(circle at center, ${path.color}15, transparent 70%)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="career-premium__why">
        <div className="career-premium__container">
          <div className="career-premium__section-header">
            <h2>Why ASPL?</h2>
            <p>The difference that makes the difference</p>
          </div>

          <div className="career-premium__why-grid">
            {[
              { icon: Trophy, title: 'Industry Experts', desc: 'Learn from professionals with 10+ years experience', color: '#F59E0B' },
              { icon: Monitor, title: 'Live Projects', desc: 'Build real products for real clients', color: '#6366F1' },
              { icon: Briefcase, title: 'Placement Support', desc: 'Dedicated career coaching & interview prep', color: '#10B981' },
              { icon: BookOpen, title: 'Flexible Learning', desc: 'Online & offline batches at your convenience', color: '#EC4899' },
              { icon: Users, title: 'Small Batches', desc: 'Personal attention with 1:15 mentor ratio', color: '#0EA5E9' },
              { icon: Shield, title: 'Certification', desc: 'Industry-recognized certificates on completion', color: '#8B5CF6' },
            ].map((item, i) => (
              <div key={i} className="career-premium__why-card">
                <div className="career-premium__why-card-icon" style={{ background: `${item.color}12`, color: item.color }}>
                  <item.icon size={20} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="career-premium__cta-banner">
        <div className="career-premium__container">
          <div className="career-premium__cta-banner-inner">
            <div className="career-premium__cta-banner-content">
              <MessageCircle size={24} color="#25D366" />
              <div>
                <h3>Not sure which path to choose?</h3>
                <p>Chat with our career counselor on WhatsApp — get personalized guidance in minutes.</p>
              </div>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="career-premium__cta-banner-btn">
              <MessageCircle size={16} />
              <span>Chat Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  // ============================================
  // RENDER: COURSES
  // ============================================
  const renderCourses = () => (
    <div className="career-premium">
      <section className="career-premium__hero career-premium__hero--compact">
        <div className="career-premium__hero-content">
          <button className="career-premium__back-btn" onClick={handleBackToPaths}>
            <ChevronLeft size={16} /> Back to Paths
          </button>
          
          <div className="career-premium__badge" style={{ background: selectedPath.bgColor, color: selectedPath.color }}>
            <selectedPath.icon size={14} />
            <span>{selectedPath.title}</span>
          </div>
          
          <h1 className="career-premium__hero-title" style={{ fontSize: '2.4rem' }}>
            Available Courses
          </h1>
          <p className="career-premium__hero-desc">{selectedPath.description}</p>
        </div>
      </section>

      <section className="career-premium__courses">
        <div className="career-premium__container">
          <div className="career-premium__courses-grid">
            {selectedPath.courses.map((course) => (
              <div
                key={course.id}
                className={`career-premium__course-card ${hoveredCourse === course.id ? 'career-premium__course-card--hovered' : ''}`}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
                style={{ '--course-color': selectedPath.color }}
              >
                <div className="career-premium__course-card-top">
                  <div className="career-premium__course-card-icon" style={{ background: selectedPath.gradient }}>
                    <course.icon size={20} color="#FFFFFF" />
                  </div>
                  
                  <div className="career-premium__course-card-badges">
                    <span style={{ background: selectedPath.bgColor, color: selectedPath.color }}>
                      <Clock size={10} /> {course.duration}
                    </span>
                    <span style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.5)' }}>
                      <TrendingUp size={10} /> {course.level}
                    </span>
                  </div>
                </div>

                <h3 className="career-premium__course-card-title">{course.name}</h3>

                <ul className="career-premium__course-card-features">
                  {course.features.map((feat, i) => (
                    <li key={i}>
                      <CheckCircle2 size={12} color={selectedPath.color} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="career-premium__course-card-footer">
                  <div className="career-premium__course-card-price">{course.price}</div>
                  <button className="career-premium__course-card-btn" onClick={() => handleEnrollClick(course)}>
                    Enroll Now <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  // ============================================
  // RENDER: ENROLLMENT
  // ============================================
  const renderEnrollment = () => (
    <div className="career-premium">
      <section className="career-premium__hero career-premium__hero--compact">
        <div className="career-premium__hero-content">
          <button className="career-premium__back-btn" onClick={handleBackToCourses}>
            <ChevronLeft size={16} /> Back to Courses
          </button>
          
          <h1 className="career-premium__hero-title" style={{ fontSize: '2rem' }}>
            Complete Enrollment
          </h1>
        </div>
      </section>

      <section className="career-premium__enroll">
        <div className="career-premium__container">
          <div className="career-premium__enroll-layout">
            
            {/* Left: Form */}
            <div className="career-premium__enroll-form">
              {/* Step Indicator */}
              <div className="career-premium__enroll-steps">
                {['Personal Info', 'Preferences', 'Review'].map((step, i) => (
                  <div key={i} className={`career-premium__enroll-step ${formStep > i + 1 ? 'career-premium__enroll-step--done' : ''} ${formStep === i + 1 ? 'career-premium__enroll-step--active' : ''}`}>
                    <div className="career-premium__enroll-step-circle">
                      {formStep > i + 1 ? <CheckCircle2 size={14} /> : i + 1}
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {formStep === 1 && (
                  <div className="career-premium__enroll-step-content">
                    <h3>Personal Information</h3>
                    <div className="career-premium__enroll-field">
                      <label>Full Name *</label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required placeholder="John Doe" />
                    </div>
                    <div className="career-premium__enroll-field">
                      <label>Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="john@example.com" />
                    </div>
                    <div className="career-premium__enroll-field">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+91 9876543210" />
                    </div>
                    <button type="button" className="career-premium__enroll-next" onClick={handleNextStep}>
                      Next Step <ArrowRight size={14} />
                    </button>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="career-premium__enroll-step-content">
                    <h3>Learning Preferences</h3>
                    <div className="career-premium__enroll-field">
                      <label>Experience Level *</label>
                      <select name="experience" value={formData.experience} onChange={handleInputChange} required>
                        <option value="">Select your experience</option>
                        <option value="beginner">Beginner (No prior experience)</option>
                        <option value="intermediate">Intermediate (Some knowledge)</option>
                        <option value="advanced">Advanced (Professional)</option>
                      </select>
                    </div>
                    <div className="career-premium__enroll-field">
                      <label>Preferred Batch *</label>
                      <select name="batch" value={formData.batch} onChange={handleInputChange} required>
                        <option value="">Select batch timing</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
                        <option value="evening">Evening (6 PM - 9 PM)</option>
                        <option value="weekend">Weekend (Sat-Sun)</option>
                      </select>
                    </div>
                    <div className="career-premium__enroll-field">
                      <label>Career Goal *</label>
                      <input type="text" name="goal" value={formData.goal} onChange={handleInputChange} required placeholder="e.g., Become a full-stack developer" />
                    </div>
                    <div className="career-premium__enroll-buttons">
                      <button type="button" className="career-premium__enroll-prev" onClick={handlePrevStep}>
                        <ChevronLeft size={14} /> Back
                      </button>
                      <button type="button" className="career-premium__enroll-next" onClick={handleNextStep}>
                        Review <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                )}

                {formStep === 3 && (
                  <div className="career-premium__enroll-step-content">
                    <h3>Review Your Details</h3>
                    <div className="career-premium__enroll-review">
                      <div className="career-premium__enroll-review-item">
                        <span>Course</span>
                        <strong>{selectedCourse?.name}</strong>
                      </div>
                      <div className="career-premium__enroll-review-item">
                        <span>Path</span>
                        <strong>{selectedPath?.title}</strong>
                      </div>
                      <div className="career-premium__enroll-review-item">
                        <span>Name</span>
                        <strong>{formData.fullName}</strong>
                      </div>
                      <div className="career-premium__enroll-review-item">
                        <span>Email</span>
                        <strong>{formData.email}</strong>
                      </div>
                      <div className="career-premium__enroll-review-item">
                        <span>Phone</span>
                        <strong>{formData.phone}</strong>
                      </div>
                      <div className="career-premium__enroll-review-item">
                        <span>Batch</span>
                        <strong>{formData.batch}</strong>
                      </div>
                    </div>
                    <div className="career-premium__enroll-buttons">
                      <button type="button" className="career-premium__enroll-prev" onClick={handlePrevStep}>
                        <ChevronLeft size={14} /> Edit
                      </button>
                      <button type="submit" className={`career-premium__enroll-submit ${isSubmitting ? 'career-premium__enroll-submit--loading' : ''}`} disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>Processing...</>
                        ) : (
                          <><Send size={14} /> Confirm Enrollment</>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Right: Course Summary */}
            <div className="career-premium__enroll-summary">
              <div className="career-premium__enroll-summary-card">
                <div className="career-premium__enroll-summary-header">
                  <div className="career-premium__enroll-summary-icon" style={{ background: selectedPath?.gradient }}>
                    {/* <selectedPath?Iicon size={20} color="#FFFFFF" /> */}
                  </div>
                  <span>Course Summary</span>
                </div>
                
                <h4>{selectedCourse?.name}</h4>
                <p className="career-premium__enroll-summary-path">{selectedPath?.title}</p>
                
                <div className="career-premium__enroll-summary-details">
                  <div>
                    <Clock size={14} />
                    <span>{selectedCourse?.duration}</span>
                  </div>
                  <div>
                    <TrendingUp size={14} />
                    <span>{selectedCourse?.level}</span>
                  </div>
                  <div>
                    <Target size={14} />
                    <span>{selectedCourse?.price}</span>
                  </div>
                </div>

                <div className="career-premium__enroll-summary-features">
                  {selectedCourse?.features.map((feat, i) => (
                    <div key={i}>
                      <CheckCircle2 size={13} color={selectedPath?.color} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="career-premium__enroll-trust">
                <Shield size={14} color="#10B981" />
                <span>Your information is secure and encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // ============================================
  // RENDER: SUCCESS
  // ============================================
  const renderSuccess = () => (
    <div className="career-premium">
      <section className="career-premium__success">
        <div className="career-premium__success-card">
          <div className="career-premium__success-icon">
            <CheckCircle2 size={48} color="#10B981" />
          </div>
          <h2>Enrollment Successful!</h2>
          <p>
            Thank you for enrolling in <strong>{selectedCourse?.name}</strong>.<br />
            Our team will contact you within <strong>24 hours</strong> to guide you through the next steps.
          </p>
          
          <div className="career-premium__success-details">
            <div>
              <span>Course</span>
              <strong>{selectedCourse?.name}</strong>
            </div>
            <div>
              <span>Duration</span>
              <strong>{selectedCourse?.duration}</strong>
            </div>
            <div>
              <span>Path</span>
              <strong>{selectedPath?.title}</strong>
            </div>
          </div>

          <div className="career-premium__success-actions">
            <button className="career-premium__success-btn career-premium__success-btn--primary" onClick={resetForm}>
              Explore More Courses <ArrowRight size={16} />
            </button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="career-premium__success-btn career-premium__success-btn--whatsapp">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <>
      {currentView === 'paths' && renderCareerPaths()}
      {currentView === 'courses' && selectedPath && renderCourses()}
      {currentView === 'enrollment' && selectedPath && selectedCourse && renderEnrollment()}
      {currentView === 'success' && selectedPath && selectedCourse && renderSuccess()}
    </>
  );
};

export default Career;