import { motion } from 'framer-motion'
import {
  Activity,
  Apple,
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronDown,
  CircleDot,
  Globe2,
  HeartPulse,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Pill,
  Play,
  ShieldCheck,
  Star,
  Stethoscope,
  Sun,
  Video,
} from 'lucide-react'
import { useTheme } from './hooks/useTheme'
import doctorImg from './assets/Doc.PNG'
import cus1 from './assets/cus1.PNG'
import cus2 from './assets/cus2.PNG'
import cus3 from './assets/cus3.PNG'
import cus4 from './assets/cus4.PNG'
import ctaSphere from './assets/cta_sphere.png'

const navLinks = ['Home', 'About', 'Services', 'Doctors', 'Blog']
const CUSTOMER_AVATARS = [cus1, cus2, cus3, cus4]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

function Button({ children, tone = 'primary', className = '' }) {
  return (
    <motion.a
      href="#doctors"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`btn btn-${tone} ${className}`}
    >
      {children}
    </motion.a>
  )
}

function Logo({ light = false }) {
  return (
    <a href="#home" className="logo" aria-label="Medicare home">
      <span className="logo-mark">
        <CircleDot size={12} />
      </span>
      <span className={light ? 'text-white' : ''}>Medicare</span>
    </a>
  )
}

function Navbar() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="nav-wrap">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Logo />
        <div className="nav-links">
          {navLinks.map((item) => (
            <a key={item} href={`#${item === 'Home' ? 'home' : item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="login-link" href="#login">Login</a>
          <Button className="nav-signup">
            Sign up <ArrowRight size={14} />
          </Button>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <Moon size={14} /> : <Sun size={14} />}
          </button>
          <button className="mobile-menu" type="button" aria-label="Open menu">
            <Menu size={18} />
          </button>
        </div>
      </nav>
    </header>
  )
}

function HeroDoctor() {
  return (
    <motion.div
      className="hero-doctor"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="doctor-image-wrapper">
        <img
          src={doctorImg}
          alt="Doctor"
        />
      </div>
      <motion.div className="hero-play-badge" animate={{ y: [0, -4, 0] }} transition={{ duration: 3.2, repeat: Infinity }}>
        <span className="play-icon"><Play size={14} /></span>
        <div>
          <strong>Watch Demo</strong>
          <small>Instant Care</small>
        </div>
      </motion.div>
      <motion.div className="float-card float-stats" animate={{ y: [0, -6, 0] }} transition={{ duration: 3.8, repeat: Infinity }}>
        <span className="mini-icon"><HeartPulse size={13} /></span>
        <div>
          <strong>1.2k Active</strong>
          <small>Patients today</small>
        </div>
      </motion.div>
      <motion.div className="float-card float-center" animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>
        <div className="call-preview">
          <span className="call-avatar" aria-hidden="true" />
          <div>
            <strong>Consultation Active</strong>
            <small>Dr. Sara is online</small>
          </div>
        </div>
        <button className="call-button" aria-label="Open call details"><Video size={14} /></button>
      </motion.div>
      <motion.div className="float-card float-med" animate={{ y: [0, -7, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>
        <span className="mini-icon"><MessageCircle size={13} /></span>
        <div>
          <strong>Medicare</strong>
          <small>2 min ago</small>
        </div>
      </motion.div>
      <motion.div className="float-card float-call" animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <span className="call-icon"><Video size={13} /></span>
        <span>Calling...</span>
        <button className="call-small" aria-label="Camera"><Video size={10} /></button>
        <button className="call-end" aria-label="End call"><ArrowRight size={10} /></button>
        <button className="call-small" aria-label="Settings"><CircleDot size={10} /></button>
      </motion.div>
    </motion.div>
  )
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-reference-frame" aria-hidden="true">
        <img src="/reference-design.jpg" alt="" />
      </div>
      <div className="container hero-grid">
        <motion.div variants={stagger} initial="hidden" animate="show" className="hero-copy">
          <motion.p variants={fadeUp} className="eyebrow center">No.1 Medical Service</motion.p>
          <motion.h1 variants={fadeUp}>
            Get Premium <br /> medical care <br /> for your best <br /> health
          </motion.h1>
          <motion.p variants={fadeUp} className="hero-text">
            Medicare provides a wide range of medical services to keep you healthy. Expert consultation is available anytime.
          </motion.p>
          <motion.div variants={fadeUp} className="hero-actions">
            <Button>Appointment <ArrowRight size={15} /></Button>
          </motion.div>
          <motion.div variants={fadeUp} className="hero-benefits">
            <div className="benefit-pill">
              <ShieldCheck size={14} />
              <span>HIPAA Compliant</span>
            </div>
            <div className="benefit-pill">
              <HeartPulse size={14} />
              <span>24/7 Care</span>
            </div>
            <div className="benefit-pill">
              <MessageCircle size={14} />
              <span>Expert Doctors</span>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="happy-row">
            <span>Happy Customers</span>
            <div className="avatar-stack">
              {CUSTOMER_AVATARS.map((src, index) => (
                <img key={index} src={src} alt={`Customer ${index + 1}`} />
              ))}
            </div>
          </motion.div>
        </motion.div>
        <HeroDoctor />
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-top">
        <strong>Hi, Wanda</strong>
        <CalendarCheck size={13} />
      </div>
      <div className="phone-card">
        <span>Appointment</span>
        <strong>17 June</strong>
        <small>10:00 AM - Heart checkup</small>
        <button aria-label="Confirm appointment"><Check size={12} /></button>
      </div>
      <div className="phone-list">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

function ChatMockup() {
  return (
    <div className="chat-card">
      <div className="chat-head">
        <img src="https://api.dicebear.com/8.x/adventurer/svg?seed=Sara" alt="" />
        <div><strong>Dr. Thomas</strong><small>Online</small></div>
      </div>
      <p className="bubble in">How are you feeling today?</p>
      <p className="bubble out">Much better, thank you.</p>
      <div className="message-input">Type message <ArrowRight size={12} /></div>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="dashboard">
      {/* Left panel: Appointments Growth Chart */}
      <div className="chart-panel">
        <div className="chart-header">
          <span className="chart-title">Appointments Growth</span>
          <div className="chart-dropdown">
            <span>This Year (2024)</span>
            <svg className="chevron-down" width="8" height="6" viewBox="0 0 8 6" fill="none">
              <path d="M1 1.5L4 4.5L7 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="chart-container">
          {/* Y-Axis labels */}
          <div className="y-axis">
            <span>1000</span>
            <span>800</span>
            <span>600</span>
            <span>400</span>
            <span>200</span>
            <span>0</span>
          </div>
          
          {/* Chart area */}
          <div className="chart-area">
            {/* Horizontal Grid Lines */}
            <div className="grid-lines">
              <div className="grid-line" />
              <div className="grid-line" />
              <div className="grid-line" />
              <div className="grid-line" />
              <div className="grid-line" />
              <div className="grid-line" />
            </div>
            
            {/* SVG Curve and Markers */}
            <svg className="chart-svg" viewBox="0 0 320 180" preserveAspectRatio="none">
              {/* Dotted vertical line for May */}
              <line x1="106" y1="180" x2="106" y2="135" stroke="#7764f6" strokeWidth="1.5" strokeDasharray="3 3" />
              
              {/* Curve path */}
              <path
                d="M 0 180 Q 53 160, 106 144 T 212 90 T 320 18"
                fill="none"
                stroke="#7764f6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              
              {/* Highlight dot at May */}
              <circle cx="106" cy="144" r="5" fill="#7764f6" stroke="#fff" strokeWidth="2" />
            </svg>
            
            {/* Tooltip Card */}
            <div className="chart-tooltip" style={{ left: '33%', bottom: '40px' }}>
              <div className="tooltip-content">
                <span>May 2024</span>
                <strong>200</strong>
              </div>
              <div className="tooltip-arrow" />
            </div>
          </div>
        </div>
        
        {/* X-Axis labels */}
        <div className="x-axis">
          <span>Jan</span>
          <span>Mar</span>
          <span>May</span>
          <span>Jul</span>
          <span>Sep</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>
      </div>

      {/* Right panel: Next Appointment Info */}
      <div className="info-panel">
        {/* User profile */}
        <div className="user-profile">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
            alt="Jane Doe"
            className="user-avatar"
          />
          <div className="user-details">
            <span className="greeting">Hello,</span>
            <span className="username">Jane Doe</span>
          </div>
        </div>
        
        {/* Appointment details */}
        <div className="appointment-details">
          <h4 className="details-title">Next Appointment</h4>
          <span className="appointment-type">General Check-up</span>
          <span className="doctor-name">Dr. Smith</span>
          
          <div className="appointment-meta">
            <div className="meta-item">
              <svg className="meta-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>May 24, 2024</span>
            </div>
            <div className="meta-item">
              <svg className="meta-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>10:30 AM</span>
            </div>
          </div>
        </div>
        
        <div className="divider" />
        
        {/* Health summary */}
        <div className="health-summary">
          <span className="summary-title">Health Summary</span>
          <div className="sparkline-container">
            <svg className="sparkline-svg" viewBox="0 0 160 40" preserveAspectRatio="none">
              <path
                d="M 0 20 L 10 20 L 15 10 L 20 30 L 25 15 L 30 20 L 45 20 L 50 15 L 55 35 L 60 5 L 65 25 L 70 20 L 90 20 L 95 10 L 100 30 L 105 5 L 110 25 L 115 20 L 130 20 L 135 15 L 140 35 L 145 10 L 150 25 L 160 20"
                fill="none"
                stroke="#7764f6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function PrescriptionMockup() {
  return (
    <div className="prescription-mockup-wrapper">
      <div className="clipboard-card secondary">
        <div className="clip" />
        <div className="paper-lines">
          <span className="line short" />
          <span className="line" />
          <span className="line" />
        </div>
      </div>
      <div className="clipboard-card primary">
        <div className="clip" />
        <div className="paper-lines">
          <span className="line short" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
      </div>
    </div>
  )
}

function GlobalMockup() {
  return (
    <div className="global-mockup-wrapper">
      <div className="flag-badge">
        <span>🇺🇸 USA</span>
        <span className="arrow">↗</span>
      </div>
      <div className="flag-badge">
        <span>🇩🇪 Germany</span>
        <span className="arrow">↗</span>
      </div>
    </div>
  )
}

const features = [
  {
    title: 'Mobile Health Apps: Tools for patients to track symptoms, medications',
    text: 'Tools for patients to track symptoms, medicines, and appointments, promoting self-management and engagement.',
    icon: Activity,
    media: <PhoneMockup />,
    className: 'large',
  },
  {
    title: 'Secure Messaging Systems: HIPAA-compliant platforms',
    text: 'HIPAA-compliant platforms that allow patients and providers to communicate securely.',
    icon: ShieldCheck,
    media: <ChatMockup />,
    className: 'large',
  },
  {
    title: 'Personal Health Dashboard & Appointment Booking System',
    text: 'Track vitals, medications, and appointments in one place. Easily schedule, reschedule, or cancel appointments.',
    icon: HeartPulse,
    media: <DashboardMockup />,
    className: 'wide',
  },
  {
    title: 'Online Prescription Services: Facilitate easy ordering',
    text: '',
    icon: Pill,
    media: <PrescriptionMockup />,
  },
  {
    title: 'Online global service we provide from any country',
    text: '',
    icon: Globe2,
    media: <GlobalMockup />,
  },
]

function FeatureCard({ feature, index }) {
  const Icon = feature.icon
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className={`feature-card ${feature.className || ''}`}
    >
      <div className="feature-info">
        <span className="card-icon"><Icon size={15} /></span>
        <h3>{feature.title}</h3>
        {feature.text && <p>{feature.text}</p>}
      </div>
      {feature.media}
      {index === 4 && (
        <div className="floating-note">
          <Star size={10} /> 4.9 rating
        </div>
      )}
    </motion.article>
  )
}

function Features() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow center">Features</p>
          <h2>Discover Our Benefits &amp; <br /> Features</h2>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="features-grid">
          {features.map((feature, index) => <FeatureCard key={feature.title} feature={feature} index={index} />)}
          <motion.article variants={fadeUp} whileHover={{ y: -5 }} className="feature-card explore">
            <h3>Explore our more amazing services</h3>
            <Button tone="light">Explore more <ArrowRight size={13} /></Button>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}

const companies = ['Lilly', 'GSK', 'Pfizer', 'Roche', 'Novartis', 'Sanofi', 'Merck', 'Bayer', 'AbbVie', 'Amgen']

function TrustedBy() {
  return (
    <section className="trusted section">
      <div className="container">
        <div className="section-head compact">
          <h2>Trusted by 100+ Global top company <br /> connect with us</h2>
          <p>Pharmaceutical &amp; health campaign partners.</p>
        </div>
        <div className="logo-cloud">
          {companies.map((name) => (
            <span key={name}><CircleDot size={10} /> {name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const doctors = [
  ['Miles', 'Medicine Specialist', 'Offers specialized care for preventative care, nutrition, exercise', cus1],
  ['Nguyen', 'Gynecologist', 'Offers specialized care for preventative care, nutrition, exercise', cus2],
  ['Flores', 'Senior Orthopedics', 'Offers specialized care for preventative care, nutrition, exercise', cus3],
]

function Consultants() {
  return (
    <section id="doctors" className="section doctors">
      <div className="container">
        <div className="section-head compact">
          <h2>Collaborate with our best <br /> consultant by online</h2>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="doctor-grid">
          {doctors.map(([name, role, text, img]) => (
            <motion.article variants={fadeUp} whileHover={{ y: -5 }} className="doctor-card" key={name}>
              <button className="dots" aria-label="More options">...</button>
              <img src={img} alt={`Dr. ${name}`} />
              <h3>Dr. {name}</h3>
              <strong>{role}</strong>
              <p>{text}</p>
              <button className="doctor-phone-btn" aria-label="Call doctor">
                <Phone size={12} fill="#fff" />
              </button>
            </motion.article>
          ))}
        </motion.div>
        <p className="consult-note">
          Patients can consult with healthcare providers from the comfort of their homes,
          <span> eliminating travel time and costs.</span> Reduced waiting times.
        </p>
        <Button className="center-btn">Make a call <ArrowRight size={14} /></Button>
      </div>
    </section>
  )
}

function MapPanel() {
  return (
    <div className="map-panel">
      {/* Map grid lines & streets background */}
      <div className="map-background">
        <div className="street-line street-1" />
        <div className="street-line street-2" />
        <div className="street-line street-3" />
        <div className="street-line street-4" />
        <div className="street-line street-5" />
      </div>

      {/* Scattered Doctor Pins */}
      <div className="map-pin pin-1">
        <img src={cus1} alt="Dr. Miles" />
        <div className="pin-dot" />
      </div>
      <div className="map-pin pin-2">
        <img src={cus2} alt="Dr. Nguyen" />
        <div className="pin-dot" />
      </div>
      <div className="map-pin pin-3">
        <img src={cus3} alt="Dr. Flores" />
        <div className="pin-dot" />
      </div>
      <div className="map-pin pin-4">
        <img src={cus4} alt="Dr. Sara" />
        <div className="pin-dot" />
      </div>

      {/* Dr. Rishu Popup Overlay Card */}
      <div className="appointment-pop">
        <div className="pop-header">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rishu" alt="Dr. Rishu" className="pop-avatar" />
          <div className="pop-doctor-info">
            <div className="pop-name-row">
              <strong>Dr. Rishu</strong>
              <div className="pop-rating">
                <Star size={10} fill="#fbbf24" stroke="none" />
                <span>4.7</span>
              </div>
            </div>
            <small className="pop-specialty">Psychiatrist</small>
          </div>
        </div>

        <div className="pop-details">
          <div className="pop-detail-item">
            <Video size={10} className="pop-icon" />
            <span>Virtual Consultation</span>
          </div>
          <div className="pop-detail-item">
            <CalendarCheck size={10} className="pop-icon" />
            <span>10:00 AM - 10:30 AM</span>
          </div>
        </div>

        <div className="pop-actions">
          <button className="pop-btn-main">Make Appointment</button>
          <button className="pop-btn-icon" aria-label="Details">
            <MessageCircle size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}

const additional = [
  'Personalized Health Assessment',
  'Patient Education',
  'Integration with Pharmacy Services',
  'Virtual Health Assistant',
  'Emergency Contact Feature',
  'Health Tracking',
]

function AdditionalFeatures() {
  return (
    <section id="about" className="section additional">
      <div className="container split">
        <MapPanel />
        <div className="add-copy">
          <span className="card-icon"><Stethoscope size={15} /></span>
          <h2>Additional Medical Features</h2>
          <p>Offer programs focused on preventative care, nutrition, exercise, and mental health. Features customized logs and progress reports.</p>
          <div className="check-grid">
            {additional.map((item) => (
              <span key={item}>
                <span className="check-badge">
                  <Check size={9} strokeWidth={3} />
                </span>
                {item}
              </span>
            ))}
          </div>
          <button className="read-more-btn">
            <span>Read More</span>
            <span className="btn-arrow-circle">
              <ArrowRight size={12} />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <motion.div className="cta" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {/* 3D Spheres blended via CSS screen mix-blend-mode */}
          <img src={ctaSphere} alt="" className="cta-sphere sphere-main" />
          <img src={ctaSphere} alt="" className="cta-sphere sphere-corner" />
          
          <div className="cta-content">
            <h2>Bring your customer services the next <br /> level of excellence.</h2>
            <button className="cta-schedule-btn">
              <span>Make a schedule</span>
              <span className="arrow-circle">
                <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const footerColumns = {
  Company: ['About us', 'Careers', 'Press', 'Blog'],
  Platform: ['Services', 'Pricing', 'Doctors', 'Security'],
  Solutions: ['For Patient', 'For Clinic', 'For Hospital', 'API'],
  'For Association': ['Medical Boards', 'Partners', 'Research', 'Education'],
}

function Footer() {
  return (
    <footer id="blog" className="footer">
      <div className="container">
        <div className="footer-top">
          <h2>Let's Connect with us</h2>
          <div>
            <Button>Get Started <ArrowRight size={13} /></Button>
            <Button tone="ghost">Explore <ChevronDown size={13} /></Button>
          </div>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>Customer-service excellence for your health.</p>
            <form>
              <input aria-label="Email address" placeholder="Enter your email" type="email" />
              <button type="submit">Subscribe</button>
            </form>
            <div className="store-row">
              <span><Apple size={13} /> App Store</span>
              <span><Play size={13} /> Google Play</span>
            </div>
          </div>
          {Object.entries(footerColumns).map(([title, links]) => (
            <div className="footer-col" key={title}>
              <h3>{title}</h3>
              {links.map((link) => <a key={link} href="#home">{link}</a>)}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>Copyright 2026 Medicare. All rights reserved.</span>
          <span className="socials">f in x ig</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TrustedBy />
        <Consultants />
        <AdditionalFeatures />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
