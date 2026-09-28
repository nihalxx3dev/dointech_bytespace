import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, BadgeCheck, Check, ChevronRight, CirclePlay, Clock3, Filter, Heart, MoreHorizontal, Play, Search, Share2, ShieldCheck, Signal, Star, Users, Video, WandSparkles } from 'lucide-react'
import { categories, courses, modules, reviews } from './data'
import { Avatar, Breadcrumbs, Button, CategoryCard, CourseCard, CourseCover, CourseNav, CourseStats, FilterSelect, HappyStudentsCard, LessonRow, PageShell, ProgressCard, RatingStars, ReadMore, SearchBox, SectionHeading } from './components'

const course = courses[0]
const courseTitle = 'Build Digital Asset: A Comprehensive Guide'

export function HomePage() {
  return <PageShell darkHeader>
    <section className="home-hero">
      <div className="hero-grid" />
      <span className="hero-shape hero-ribbon"/><span className="hero-shape hero-cone"/><span className="hero-shape hero-loop"/><span className="hero-shape hero-squiggle"/>
      <div className="wrap home-hero-content"><h1>Get Access to Hundreds<br className="desktop-break"/> Courses Available</h1><p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p><SearchBox /></div>
      <div className="hero-orbit"/><div className="hero-stage"><img src="/images/hero_main1.png" alt="Hero" className="hero-person-img"/></div>
      <div className="hero-course-float glass-card"><b>UI/UX Design</b><span>200 Courses <i>•</i> 1000+ Students</span></div><ProgressCard/><HappyStudentsCard/>
    </section>
    <section className="partner-strip wrap">
      <div className="partner-logos">
        <img src="/images/logoipsum_1.png" alt="Logoipsum 1" />
        <img src="/images/logoipsum_2.png" alt="Logoipsum 2" />
        <img src="/images/logoipsum_3.png" alt="Logoipsum 3" />
        <img src="/images/logoipsum_4.png" alt="Logoipsum 4" />
        <img src="/images/logoipsum_5.png" alt="Logoipsum 5" />
      </div>
    </section>

    <section className="section wrap home-tag-filter">
      <SectionHeading
        centered
        title="Discover Your Passion, Build Your Skills"
        description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />
      <div className="tag-filter-container">
        <div className="tag-filter-row">
          <button className="filter-pill filter-pill-active">Featured</button>
          <button className="filter-pill">Music</button>
          <button className="filter-pill">Drawing & Painting</button>
          <button className="filter-pill">Marketing</button>
          <button className="filter-pill">Animation</button>
          <button className="filter-pill">Social Media</button>
          <button className="filter-pill">UI/UX Design</button>
          <button className="filter-pill">Creative Marketing</button>
        </div>
        <div className="tag-filter-row">
          <button className="filter-pill">Digital Illustration</button>
          <button className="filter-pill">Film & Video</button>
          <button className="filter-pill">Crafts</button>
          <button className="filter-pill">Freelance & Entrepreneurship</button>
          <button className="filter-pill">Graphic Design</button>
          <button className="filter-pill">Photography</button>
        </div>
        <div className="tag-filter-row">
          <button className="filter-pill">Productivity</button>
          <button className="filter-pill">Web Development</button>
          <button className="filter-pill">Data Science</button>
          <button className="filter-pill">Cooking</button>
          <button className="filter-pill filter-pill-more">+ More</button>
        </div>
      </div>
    </section>

    <section className="section courses-section">
      <div className="wrap">
        <div className="course-grid">
          {courses.slice(0, 3).map(item => <CourseCard course={item} key={item.title} />)}
        </div>
        <div className="course-grid course-grid-extra">
          {courses.slice(3, 6).map(item => <CourseCard course={item} key={item.title} />)}
        </div>
      </div>
    </section>

    <section className="section wrap home-categories">
      <SectionHeading
        centered
        title="Explore Diverse Learning Paths at Bytespace"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />
      <div className="category-grid">
        {categories.map(item => <CategoryCard category={item} key={item.name} />)}
      </div>
    </section>

    <section className="growth-promo-section">
    <div className="wrap">
        {/* Row 1: Path to Professional Growth */}
        <div className="growth-row">
        <div className="growth-copy">
            <h2>Your Path to Professional<br />Growth Starts Here!</h2>
            <p>
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="growth-metrics">
            <div>
                <strong>12K</strong>
                <span>Students</span>
            </div>
            <div>
                <strong>70+</strong>
                <span>Courses</span>
            </div>
            <div>
                <strong>16</strong>
                <span>Creators</span>
            </div>
            </div>
        </div>

        <div className="growth-art">
            {/* Floating Mini Course Card */}
            <div className="promo-mini-course-card">
            <div className="promo-mini-cover">
                <img src="/images/coursebanner.png" alt="Course" />
                <div className="promo-mini-tags">
                <span>17 Lessons</span>
                <span>2 hours 16 mins</span>
                </div>
            </div>
            <div className="promo-mini-info">
                <b>Learn Figma from Basic</b>
                <small>by purepearl studio</small>
                <div className="promo-mini-meta">
                <span className="level-badge"><Signal size={12} /> Beginner</span>
                <b>$25</b>
                </div>
            </div>
            </div>

            {/* Boy Photo */}
            <img className="growth-person-img" src="/images/hero_main1.png" alt="Learner" />

            {/* Floating Lime Squiggle */}
            <img className="promo-lime-squiggle top-squiggle" src="/images/lime.png" alt="" />

            {/* Floating Progress Card */}
            <div className="promo-floating-progress glass-card">
            <span>Learning Progress</span>
            <strong>55%</strong>
            <div className="progress-track"><i /></div>
            </div>
        </div>
        </div>

        {/* Row 2: Create & Manage Courses Easily */}
        <div className="growth-row growth-row-reverse">
        <div className="growth-copy">
            <h2>Create & Manage<br />Courses Easily.</h2>
            <p>
            ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            <div className="growth-checks">
            <span><Check size={14} /> Share Your Expertise</span>
            <span><Check size={14} /> Monetize Your Passion</span>
            <span><Check size={14} /> Flexibility and Autonomy</span>
            <span><Check size={14} /> Build a Community</span>
            </div>
        </div>

        <div className="growth-art">
            {/* Floating Blue Stats */}
            <div className="promo-stat-pill">
            <small>Total Revenue</small>
            <span>July 1-30</span>
            <strong>$120.29</strong>
            </div>
            <div className="promo-stat-pill promo-stat-pill-2">
            <small>Year to Date</small>
            <span>2023</span>
            <strong>$1,200.38</strong>
            <i>+12%</i>
            </div>

            {/* Girl Photo */}
            <img className="growth-person-img" src="/images/hero_main2.png" alt="Creator" />

            {/* Floating Lime Squiggle */}
            <img className="promo-lime-squiggle bottom-squiggle" src="/images/lime.png" alt="" />

            {/* Floating Happy Students */}
            <div className="promo-floating-happy glass-card">
            <div className="happy-rating">
                <span>Happy Students</span>
                <small>4.5 (240) ★</small>
            </div>
            <div className="avatar-stack">
                {['/images/comm1.png', '/images/comm2.png', '/images/comm3.png', '/images/comm1.png', '/images/comm2.png'].map((src, idx) => (
                <img key={idx} src={src} alt="avatar" className="avatar-img" />
                ))}
                <span className="avatar-stack-more">2K+</span>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    <section className="community-section">
      <div className="hero-grid" />
      <div className="wrap community-banner">
        <h2>Unlock Your Potential as a<br />Creator with ByteSpace</h2>
        <p>
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a
          part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your
          expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link to="/creator">
          <Button variant="lime">Join as Creator</Button>
        </Link>
      </div>
    </section>

    <section className="section testimonial-section">
      <div className="wrap">
        <div className="section-row">
          <div className="section-heading">
            <h2>Discover What Our<br />Community Is Saying</h2>
          </div>
          <p className="testimonial-intro">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="testimonial-grid">
          {[
            {
              name: 'Sarah M.',
              role: 'Enthusiastic Learner',
              image: '/images/comm1.png',
              body: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."'
            },
            {
              name: 'James L.',
              role: 'Lifelong Learner',
              image: '/images/comm2.png',
              body: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."'
            },
            {
              name: 'Alex B.',
              role: 'Inspired Creator',
              image: '/images/comm3.png',
              body: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."'
            }
          ].map((item) => (
            <article className="testimonial-card" key={item.name}>
              <img className="testimonial-avatar" src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <span className="testimonial-role">{item.role}</span>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
}

function AuthPage({ mode }: { mode: 'register' | 'login' }) {
  const isRegister = mode === 'register'
  return <PageShell darkHeader noFooter><div className="auth-wrapper"><div className="hero-grid" /><section className="auth-page wrap"><div className="auth-pitch"><span className="eyebrow eyebrow-light">BYTESPACE · YOUR NEXT CHAPTER</span><h1>{isRegister ? 'Sign up and come in' : 'Sign in with ease'}</h1><p>{isRegister ? 'The registration process is straightforward, uncomplicated, and efficient, allowing you to get started quickly and at no cost.' : 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'}</p><div className="auth-art"><img src="/images/auth.png" alt="Auth illustration" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/></div></div><form className="auth-card" onSubmit={e=>e.preventDefault()}>
  <span className="eyebrow">{isRegister ? 'CREATE AN ACCOUNT' : 'Sign In'}</span>
  <h2>{isRegister ? 'Welcome to ByteSpace' : 'Welcome Back'}</h2>
  {isRegister && <p>Create your account and start learning today.</p>}
  
  {isRegister && (
    <label className="field">
      <span>Full Name</span>
      <input autoComplete="name" placeholder="Jamie Davis" />
    </label>
  )}
  
  <label className="field">
    <span>Email</span>
    <input type="email" autoComplete="email" placeholder="designer@example.com"/>
  </label>
  
  <label className="field">
    <span>Password</span>
    <input type="password" autoComplete={isRegister ? 'new-password' : 'current-password'} placeholder="••••••••"/>
  </label>
  
  {isRegister ? (
    <label className="terms-check">
      <input type="checkbox"/> <span>I agree to ByteSpace's <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.</span>
    </label>
  ) : (
    <div className="forgot-row">
      <label><input type="checkbox"/> Remember me</label>
      <a href="#forgot">Forgot password?</a>
    </div>
  )}

  <div className="auth-btn-row">
    <Button type="submit" className="auth-submit-compact">
      {isRegister ? 'Continue' : 'Sign In'}
    </Button>
  </div>

  <div className="auth-divider"><span>or</span></div>

  <div className="social-login-row">
    <button type="button" className="social-btn" aria-label="Sign in with Facebook">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </button>
    <button type="button" className="social-btn" aria-label="Sign in with Google">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
      </svg>
    </button>
  </div>

  <div className="auth-switch">
    {isRegister ? 'Already have an account?' : 'New user?'} <Link to={isRegister ? '/login' : '/register'}>{isRegister ? 'Login' : 'Create an account'}</Link>
  </div>
</form></section></div></PageShell>
}
export function RegisterPage(){ return <AuthPage mode="register"/> }
export function LoginPage(){ return <AuthPage mode="login"/> }

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query,setQuery]=useState(searchParams.get('q')??'')
  const [active,setActive]=useState('All courses')
  const filtered=useMemo(()=>courses.filter(item=>(!query || `${item.title} ${item.creator} ${item.tag}`.toLowerCase().includes(query.toLowerCase()))&&(active==='All courses'||item.tag===active)),[active,query])
  const tags=['All courses','Design','Technology','Business','Lifestyle']
  return <PageShell><section className="search-hero"><div className="wrap"><Breadcrumbs items={['Home','Courses']}/><span className="eyebrow">THE BYTESPACE LIBRARY</span><h1>Find your next<br className="mobile-break"/> great idea.</h1><p>Learn something you love from people who are great at it.</p><SearchBox value={query} onChange={v=>{setQuery(v);setSearchParams(v?{q:v}:{})}}/><div className="search-proof"><Users size={17}/><span>Join over 10,000 learners building their next skill</span></div></div></section><section className="section wrap search-results"><div className="search-result-top"><div><span className="eyebrow">COURSE LIBRARY</span><h2>Explore courses <span className="result-count">({filtered.length})</span></h2></div><FilterSelect label="Sort by" value="Most popular"/></div><div className="search-toolbar"><div className="filter-tabs">{tags.map(tag=><button key={tag} onClick={()=>setActive(tag)} className={active===tag?'filter-tab-active':''}>{tag}</button>)}</div><button className="filter-button"><Filter size={17}/> Filters <span className="filter-badge">2</span></button></div><div className="course-grid">{filtered.length?filtered.map(item=><CourseCard course={item} key={item.title}/>):<div className="empty-results"><Search/><h3>No courses found</h3><p>Try another topic or category.</p></div>}</div><div className="pagination"><button aria-label="Previous page">‹</button><button className="page-active">1</button><button>2</button><button>3</button><span>…</span><button>10</button><button aria-label="Next page">›</button></div></section></PageShell>
}

function CourseIntro({ active = 'About' }: { active?: string }) {
  return <><section className="course-page-hero wrap"><Breadcrumbs items={['Home','Courses','Design',courseTitle]}/><div className="course-intro-grid"><div className="course-intro-copy"><span className="eyebrow">DESIGN · DIGITAL CREATIVITY</span><h1>{courseTitle}</h1><p>Unlock the power of digital creation with expert guidance.</p><div className="creator-inline"><Avatar initials="PP" tone={4}/><span>by <b>purepearl studio</b><BadgeCheck size={15}/></span><span className="creator-separator">·</span><span>Professional Creator</span></div><CourseStats/><div className="course-hero-actions"><Link to="/lessons"><Button>Start learning <ArrowRight size={17}/></Button></Link><button className="share-button"><Share2 size={17}/> Share course</button></div></div><div className="course-intro-art"><CourseCover course={course} large/><button className="video-play" aria-label="Play course preview"><Play size={24} fill="currentColor"/></button><span className="video-time"><Video size={15}/> Course preview</span></div></div><CourseNav active={active}/></section></>
}

function CourseAside() {
  return <aside className="course-aside"><div className="enroll-card"><div className="aside-price">$25 <small>/ lifetime</small></div><p>Get lifetime access to the complete course and all future updates.</p><Link to="/lessons"><Button className="full-button">Enroll Now <ArrowRight size={17}/></Button></Link><div className="safe-note"><ShieldCheck size={16}/>30-day money-back guarantee</div><h3>This course includes</h3><ul><li><CirclePlay/>112 lessons on-demand</li><li><Clock3/>24 hours of video</li><li><WandSparkles/>Downloadable resources</li><li><BadgeCheck/>Certificate of completion</li><li><Heart/>Lifetime access</li></ul></div><div className="instructor-card"><div className="instructor-top"><Avatar initials="PP" tone={4} size="large"/><div><h3>PurePearl Studio</h3><span>Professional Creator</span></div></div><p>Passionate UI/UX and web designer sharing a love of thoughtful digital experiences.</p><Link to="/creator" className="text-link">See full profile <ArrowRight size={15}/></Link></div></aside>
}

export function CourseDetailsPage() {
  return <PageShell><CourseIntro/><div className="wrap course-body-layout"><article className="course-main-column"><SectionHeading title="Description"/><ReadMore><p>Embark on an enlightening exploration into the world of digital creation with our comprehensive course, “Build Digital Assets: A Comprehensive Guide.” This transformative learning experience invites you to delve into the intricacies of crafting impactful digital content. From foundational concepts to advanced techniques, this guide is curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.</p><p>Explore the design principles behind impactful creations, practice effective visual communication, and apply your learning with hands-on exercises.</p></ReadMore><div className="sneak-peek"><div className="sneak-peek-art"><CourseCover course={course}/><button className="video-play"><Play fill="currentColor"/></button></div><div><span className="eyebrow">SNEAK PEEK</span><h3>Get a taste of what's inside</h3><p>Take a look at how we break down each concept into practical, approachable lessons.</p></div></div><div className="key-points"><SectionHeading title="What you'll learn"/><div className="key-point-grid">{['Foundational concepts','Design principles mastery','Advanced creation techniques','Project showcase and critique','Optimize for every platform','Digital asset management','Monetization strategies','Build your portfolio'].map(x=><span key={x}><Check/>{x}</span>)}</div></div><section className="course-lessons-preview"><div className="section-row"><SectionHeading title="Course content" description="112 lessons · 24 hours total"/><Link to="/lessons" className="text-link">View all lessons <ArrowRight size={15}/></Link></div>{modules.slice(0,3).map((item,i)=><div className="module-row" key={item.title}><span className="module-index">0{i+1}</span><span>{item.title}</span><span>{item.count} lessons</span><ChevronRight size={18}/></div>)}</section></article><CourseAside/></div></PageShell>
}

export function LessonsPage() {
  return <PageShell><CourseIntro active="Lessons"/><div className="wrap lessons-page"><div className="lessons-heading"><div><span className="eyebrow">COURSE CURRICULUM</span><h2>Explore the Modules</h2><p>Immerse yourself in the course content through comprehensive lessons, practical insights, and hands-on experiences.</p></div><div className="curriculum-count"><strong>112</strong><span>lessons<br/>24 hours</span></div></div><div className="lessons-layout"><div className="module-list"><div className="module-list-heading"><h3>Lesson List</h3><span>7 modules</span></div>{modules.map((item,i)=><details className="module-accordion" key={item.title} open={i===0}><summary><span className="module-number">0{i+1}</span><span className="module-summary-title">{item.title}<small>{item.count} lessons</small></span><ChevronRight size={18}/></summary><p>{item.description}</p>{['Understanding Digital Elements','Navigating Design Software Tools','Getting Started with Creative Assets'].slice(0,i===0?3:1).map((lesson,j)=><LessonRow key={lesson} number={`${i+1}.${j+1}`} title={lesson} duration={`${12+j*5} mins`} active={i===0&&j===0}/>)}</details>)}</div><aside className="lesson-preview-panel"><div className="lesson-video"><CourseCover course={course} large/><button className="video-play"><Play fill="currentColor"/></button><span className="lesson-video-badge">LESSON 01</span></div><span className="eyebrow">MODULE 01 · LESSON 01</span><h3>Understanding Digital Elements</h3><p>Learn the essential building blocks of digital asset creation and how each element works together.</p><div className="lesson-progress"><span>Course progress</span><b>1 of 112 lessons</b><div className="progress-track"><i style={{width:'7%'}}/></div></div><Link to="/course" className="text-link">Back to course overview <ArrowRight size={15}/></Link></aside></div><section className="learning-notes"><div><span className="eyebrow">YOUR LEARNING JOURNEY</span><h2>Everything you need to keep moving forward.</h2></div><div><h3>Lesson Content</h3><p>Engage with each lesson through captivating video content, detailed explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p></div><div><h3>Lesson Progress Tracking</h3><p>See your growth as you complete lessons, with an intuitive progress tracker guiding your learning journey.</p></div></section></div></PageShell>
}

export function ReviewsPage() {
  const [rating,setRating]=useState('All rating')
  return <PageShell><CourseIntro active="Reviews"/><section className="section wrap reviews-page"><div className="reviews-heading"><div><span className="eyebrow">LEARNER FEEDBACK</span><h2>What Learners Are Saying</h2><p>Discover what our learners have to say about their experience with this course.</p></div><div className="rating-summary"><strong>4.7</strong><RatingStars rating={5}/><span>Based on <b>720</b> reviews</span></div></div><div className="ratings-overview"><div className="rating-overview-title"><h3>Ratings</h3><span>720 total ratings</span></div>{[5,4,3,2,1].map((n,i)=><div className="rating-bar-row" key={n}><span>{n} <Star size={13} fill="currentColor"/></span><div className="rating-track"><i style={{width:`${[74,15,6,3,2][i]}%`}}/></div><small>{[532,120,42,18,8][i]}</small></div>)}</div><div className="review-list-heading"><h3>Individual Reviews <span>(720)</span></h3><div className="review-filters">{['All rating','5','4','3','2','1'].map(v=><button className={rating===v?'review-filter-active':''} key={v} onClick={()=>setRating(v)}>{v}{v==='All rating'?'':' ★'}</button>)}</div></div><div className="review-grid">{reviews.map((item,i)=><article className="review-card" key={item.name}><div className="review-card-head"><Avatar initials={item.initials} tone={i}/><div><b>{item.name}</b><span>{item.role}</span></div><MoreHorizontal size={19}/></div><div className="review-card-rating"><RatingStars/><span>{item.date}</span></div><p>{item.body}</p><button className="helpful-button"><Heart size={16}/> Helpful <span>12</span></button></article>)}</div><div className="pagination"><button>‹</button><button className="page-active">1</button><button>2</button><button>3</button><span>…</span><button>72</button><button>›</button></div></section></PageShell>
}

export function CreatorPage() {
  return <PageShell><section className="creator-profile-hero"><div className="creator-banner"><span className="banner-disc"/><span className="banner-ring"/><span className="banner-corner">CREATE / SHARE / GROW</span></div><div className="wrap creator-profile-content"><div className="creator-profile-heading"><Avatar initials="PP" tone={4} size="large"/><div><span className="eyebrow">FEATURED CREATOR</span><h1>PurePearl Studio <BadgeCheck size={22}/></h1><p>Passionate UI/UX, Web designer</p></div><Button variant="blue">Follow creator <span>+</span></Button></div><div className="creator-bio"><div><h2>About the creator</h2><p>Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive a creative journey. Dive into my portfolio, showcasing a glimpse of my artistic endeavors. Each piece tells a unique story. Explore the world of creativity with me.</p><Link to="#portfolio" className="text-link">View portfolio <ArrowUpRight size={16}/></Link></div><div className="creator-metrics"><div><strong>6</strong><span>Courses</span></div><div><strong>2.4K</strong><span>Students</span></div><div><strong>4.8<Star size={16} fill="currentColor"/></strong><span>Creator rating</span></div></div></div></div></section><section className="section wrap creator-courses"><div className="section-row"><div><span className="eyebrow">PUREPEARL STUDIO</span><h2>Courses by this creator</h2></div><FilterSelect label="Sort by" value="Most relevant"/></div><div className="creator-filter-row"><FilterSelect label="Level" value="All levels"/><FilterSelect label="Category" value="All categories"/><div className="creator-view-tabs"><button className="view-active">Courses</button><button>Portfolio</button></div></div><div className="course-grid">{courses.map(item=><CourseCard key={item.title} course={item}/>)}</div><div className="center-action"><Button variant="outline">Load more courses <ArrowRight size={16}/></Button></div></section></PageShell>
}

export function NotFoundPage() {
  return <PageShell><section className="not-found wrap"><div className="not-found-graphic"><span className="not-found-orbit"/><strong>404</strong><span className="not-found-spark">✳</span></div><span className="eyebrow">OOPS! WRONG TURN</span><h1>The page you are looking for doesn’t exist</h1><p>Try to use a correct URL or go back to homepage to start again.</p><Link to="/"><Button>Back to Home <ArrowRight size={17}/></Button></Link></section></PageShell>
}