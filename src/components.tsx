import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ArrowDown, ArrowLeft, ArrowRight, Bookmark, Check, ChevronDown, Clock3, GraduationCap, Menu, Search, Signal, Star, Users, X } from 'lucide-react'
import type { Course } from './data'

export function Button({ children, variant = 'lime', className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'lime' | 'blue' | 'outline' | 'ghost' }) {
  return <button className={`button button-${variant} ${className}`} {...props}>{children}</button>
}

export function Header({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false)
  return <header className={`site-header ${dark ? 'site-header-dark' : ''}`}>
    <div className="header-inner wrap">
      <Link to="/" className="brand" aria-label="ByteSpace home"><span className="brand-mark" aria-hidden="true"><i /></span><span>ByteSpace</span></Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
      <nav className={`primary-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/search" onClick={() => setOpen(false)}>Courses</NavLink>
        <NavLink to="/creator" onClick={() => setOpen(false)}>Creators</NavLink>
        <span className="mobile-nav-actions"><NavLink to="/login" onClick={() => setOpen(false)}>Sign In</NavLink><NavLink to="/register" className="mobile-join" onClick={() => setOpen(false)}>Join Us</NavLink></span>
      </nav>
      <div className="header-actions"><Link to="/login">Sign In</Link><Link to="/register">Join Us</Link><button aria-label="Saved courses" className="icon-button"><Bookmark size={19} /></button></div>
    </div>
  </header>
}

export function Footer() {
  return <footer className="site-footer"><div className="wrap footer-main">
    <div className="newsletter"><Link to="/" className="brand brand-dark"><span className="brand-mark"><i /></span><span>ByteSpace</span></Link><p>Stay up to date with our latest features and releases by joining our newsletter.</p><form className="newsletter-form" onSubmit={e => e.preventDefault()}><input type="email" aria-label="Email for newsletter" placeholder="Enter your email" /><Button type="submit">Subscribe</Button></form><small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small></div>
    <div className="footer-links"><div><h3>Browse</h3><Link to="/search">Featured Courses</Link><Link to="/search">Featured Categories</Link><Link to="/search">Business</Link><Link to="/search">IT</Link><Link to="/search">Design</Link></div><div className="footer-link-spacer"><Link to="/search">Development</Link><Link to="/search">Marketing</Link><Link to="/search">Photography</Link><Link to="/search">Finance</Link><Link to="/search">Sport</Link></div><div><h3>Platform</h3><Link to="/creator">Become a Creator</Link><a href="#affiliate">Affiliate Program</a><a href="#contact">Contact</a><a href="#help">Help</a><a href="#about">About</a></div></div>
  </div><div className="wrap copyright"><span>© 2023 ByteSpace. All rights reserved by @nihalxx3 & @nihalxx3dev.</span><nav><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Service</a><a href="#cookies">Cookies Settings</a></nav></div></footer>
}

export function PageShell({ children, darkHeader = false, noFooter = false }: { children: React.ReactNode; darkHeader?: boolean; noFooter?: boolean }) {
  return <><Header dark={darkHeader} /><main>{children}</main>{!noFooter && <Footer />}</>
}

export function SectionHeading({ eyebrow, title, description, centered = false }: { eyebrow?: string; title: string; description?: string; centered?: boolean }) {
  return <div className={`section-heading ${centered ? 'section-heading-centered' : ''}`}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{description && <p>{description}</p>}</div>
}

export function SearchBox({ button = true, value, onChange, placeholder = 'Course, topic, creator' }: { button?: boolean; value?: string; onChange?: (value: string) => void; placeholder?: string }) {
  const navigate = useNavigate()
  const [localValue, setLocalValue] = useState(value ?? '')
  const currentValue = onChange ? value ?? '' : localValue
  return <form className="search-box" onSubmit={e => { e.preventDefault(); if (onChange) return; navigate(`/search${currentValue.trim() ? `?q=${encodeURIComponent(currentValue.trim())}` : ''}`) }}><Search size={20} /><input value={currentValue} onChange={e => onChange ? onChange(e.target.value) : setLocalValue(e.target.value)} placeholder={placeholder} aria-label={placeholder} />{button && <Button type="submit">Search</Button>}</form>
}

export function CourseCover({ course, large = false }: { course: Course; large?: boolean }) {
  return <div className={`course-cover cover-${course.theme} ${large ? 'course-cover-large' : ''}`} aria-label={`${course.title} cover art`} role="img"><div className="cover-orbit orbit-one"/><div className="cover-orbit orbit-two"/><span className="cover-label">{course.tag}</span><strong>{course.title}</strong><span className="cover-spark">✳</span></div>
}

export function CourseCard({ course, compact = false }: { course: Course; compact?: boolean }) {
  return <article className={`course-card ${compact ? 'course-card-compact' : ''}`}><Link to="/course" className="course-card-image"><CourseCover course={course} /><span className="cover-play">↗</span></Link><div className="course-card-body"><div className="course-card-title"><div><Link to="/course" className="course-title">{course.title}</Link><span className="course-author">by {course.creator}</span></div><div className="course-rating">{course.rating}<Star size={16} fill="currentColor" /></div></div><div className="course-meta"><span><Signal size={17} />{course.level}</span><span><Users size={17} />{course.students} students</span></div><div className="course-card-bottom"><span className="course-price">{course.price}<small>/lifetime</small></span><Link to="/course" className="text-link">View course <ArrowRight size={15} /></Link></div></div></article>
}

export function CategoryCard({ category }: { category: { name: string; icon: string; color: string } }) {
  return <Link to="/search" className="category-card"><span className={`category-icon category-${category.color}`}>{category.icon}</span><strong>{category.name}</strong><span className="category-arrow"><ArrowRight size={16} /></span></Link>
}

export function RatingStars({ rating = 5 }: { rating?: number }) {
  return <span className="rating-stars" aria-label={`${rating} out of 5 stars`}>{Array.from({ length: 5 }, (_, i) => <Star key={i} size={15} fill={i < Math.round(rating) ? 'currentColor' : 'none'} />)}</span>
}

export function Avatar({ initials, tone = 0, size = 'normal' }: { initials: string; tone?: number; size?: 'normal' | 'large' }) {
  return <span className={`avatar avatar-${tone % 6} ${size === 'large' ? 'avatar-large' : ''}`}>{initials}</span>
}

export function Tabs({ items, active, onChange }: { items: string[]; active: string; onChange: (value: string) => void }) {
  return <div className="tabs" role="tablist">{items.map(item => <button key={item} role="tab" aria-selected={active === item} className={active === item ? 'tab-active' : ''} onClick={() => onChange(item)}>{item}</button>)}</div>
}

export function FilterSelect({ label, value }: { label: string; value: string }) {
  return <button className="filter-select"><span><small>{label}</small>{value}</span><ChevronDown size={16} /></button>
}

export function CourseNav({ active = 'About' }: { active?: string }) {
  return <nav className="course-nav"><Link to="/course" className={active === 'About' ? 'course-nav-active' : ''}>About</Link><Link to="/lessons" className={active === 'Lessons' ? 'course-nav-active' : ''}>Lessons</Link><Link to="/reviews" className={active === 'Reviews' ? 'course-nav-active' : ''}>Reviews</Link></nav>
}

export function AvatarStack() {
  return <div className="avatar-stack">{['JD', 'RM', 'AY', 'CW', 'LK', 'TS', 'MK'].map((person, i) => <Avatar key={person} initials={person} tone={i} />)}<span className="avatar-stack-more">2K+</span></div>
}

export function ProgressCard() {
  return <div className="progress-card glass-card"><span>Learning Progress</span><strong>55%</strong><div className="progress-track"><i /></div></div>
}

export function HappyStudentsCard() {
  return <div className="happy-card glass-card"><span>Happy Students</span><div className="happy-rating">4.5 <small>(240)</small><Star size={14} fill="currentColor" /></div><AvatarStack /></div>
}

export function Breadcrumbs({ items }: { items: string[] }) {
  return <div className="breadcrumbs">{items.map((item, i) => <span key={item}>{i > 0 && <span className="breadcrumb-slash">/</span>}<span className={i === items.length - 1 ? 'breadcrumb-current' : ''}>{item}</span></span>)}</div>
}

export function CourseStats() {
  return <div className="course-stats"><span><GraduationCap size={18} />Intermediate</span><span><Star size={17} fill="currentColor" />4.8 (172 reviews)</span><span><Users size={18} />199 Students</span><span><Clock3 size={18} />24 hours</span></div>
}

export function LessonRow({ number, title, duration, active = false }: { number: string; title: string; duration: string; active?: boolean }) {
  return <button className={`lesson-row ${active ? 'lesson-row-active' : ''}`}><span className="lesson-number">{number}</span><span className="lesson-name">{title}</span><span className="lesson-duration">{duration}</span><span className="lesson-check">{active && <Check size={14} />}</span></button>
}

export function QuoteMark() { return <span className="quote-mark">“</span> }

export function ReadMore({ children }: { children: React.ReactNode }) { return <div className="read-more">{children}<button>Read more <ArrowDown size={14} /></button></div> }

export function BackLink({ to = '/' }: { to?: string }) { return <Link to={to} className="back-link"><ArrowLeft size={16} />Back</Link> }
