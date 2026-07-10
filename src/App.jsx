import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BannerCarousel from './components/BannerCarousel';
import ProjectGrid from './components/ProjectGrid';
import SkillsSection from './components/SkillsSection';
import ExperienceList from './components/ExperienceList';
import CastSection from './components/CastSection';
import BookingModal from './components/BookingModal';
import OffersModal from './components/OffersModal';
import ListShowModal from './components/ListShowModal';
import ResumeModal from './components/ResumeModal';
import { Gift, HelpCircle, Shield, PhoneCall, Mail, ArrowUp } from 'lucide-react';

// Custom inline SVG icons for brands (as they are not present in modern brand-neutral lucide-react)
const GithubIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  const [searchVal, setSearchVal] = useState('');
  const [location, setLocation] = useState('Remote');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isOffersOpen, setIsOffersOpen] = useState(false);
  const [isListShowOpen, setIsListShowOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top button visibility check
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);
  const handleOpenOffers = () => setIsOffersOpen(true);
  const handleCloseOffers = () => setIsOffersOpen(false);
  const handleOpenListShow = () => setIsListShowOpen(true);
  const handleCloseListShow = () => setIsListShowOpen(false);
  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Aurora Ambient Background */}
      <div className="aurora-bg">
        <div className="blob blob-red"></div>
        <div className="blob blob-blue"></div>
        <div className="blob blob-purple"></div>
      </div>

      {/* Navigation Header */}
      <Header 
        searchVal={searchVal} 
        setSearchVal={setSearchVal} 
        location={location} 
        setLocation={setLocation} 
        onOpenBooking={handleOpenBooking} 
        onOpenOffers={handleOpenOffers}
        onOpenResume={handleOpenResume}
      />

      {/* Featured Banner Billboard Carousel */}
      <BannerCarousel onOpenBooking={handleOpenBooking} />

      <main style={{ flexGrow: 1 }}>
        {/* Recommended Movies -> Recommended Projects */}
        <ProjectGrid searchVal={searchVal} onOpenBooking={handleOpenBooking} />

        {/* Live Events -> Skills & Tech Workshops */}
        <SkillsSection searchVal={searchVal} />

        {/* Theatrical Plays -> Work Experiences */}
        <ExperienceList searchVal={searchVal} onOpenBooking={handleOpenBooking} />

        {/* Cast & Crew -> About Developer & Testimonial Reviews */}
        <CastSection />
      </main>

      {/* BookMyShow Style Footer */}
      <footer style={styles.footer}>
        {/* Top Callout Banner */}
        <div style={styles.listShowBanner}>
          <div style={styles.bannerContainer}>
            <div style={styles.bannerLeft}>
              <Gift style={styles.giftIcon} size={22} />
              <strong style={styles.bannerText}>List your Show!</strong>
              <span style={styles.bannerSubtext}>Got an idea, product, or position? Let's showcase it together.</span>
            </div>
            <button style={styles.bannerBtn} onClick={handleOpenListShow}>Contact Now</button>
          </div>
        </div>

        {/* Support Icons Row */}
        <div style={styles.supportContainer}>
          <div style={styles.supportGrid}>
            <div style={styles.supportItem}>
              <PhoneCall size={20} style={styles.supportIcon} />
              <span>24/7 CUSTOMER CARE</span>
            </div>
            <div style={styles.supportItem} onClick={handleOpenBooking}>
              <HelpCircle size={20} style={styles.supportIcon} />
              <span>BOOKING CONFIRMATION</span>
            </div>
            <a href="https://github.com/revanthsaich2006" target="_blank" rel="noopener noreferrer" style={styles.supportItemLink}>
              <Shield size={20} style={styles.supportIcon} />
              <span>SECURE REPOSITORIES</span>
            </a>
          </div>
        </div>

        {/* Bottom Logo & Socials */}
        <div style={styles.footerMain}>
          <div style={styles.footerLogo}>
            book<span>my</span>dev
          </div>
          
          <div style={styles.socialRow}>
            <a href="https://github.com/revanthsaich2006" target="_blank" rel="noopener noreferrer" style={styles.socialLink} aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com/in/chrevanthsai" target="_blank" rel="noopener noreferrer" style={styles.socialLink} aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:revanthsaicherukuri6@gmail.com" style={styles.socialLink} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>

          <p style={styles.copyright}>
            Copyright 2026 &copy; bookmydev Ltd. All Rights Reserved.<br />
            This portfolio is built as a tribute layout and is designed to host cleanly on Vercel.
          </p>
        </div>
      </footer>

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button 
          style={styles.scrollTopBtn} 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Armchair Ticket Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        location={location} 
      />

      {/* Cinema Coupon Offers Modal */}
      <OffersModal 
        isOpen={isOffersOpen} 
        onClose={handleCloseOffers} 
      />

      {/* List Your Show Proposal Modal */}
      <ListShowModal 
        isOpen={isListShowOpen} 
        onClose={handleCloseListShow} 
      />

      {/* Resume Print Pass Ticket Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={handleCloseResume} 
      />
    </>
  );
}

// Inline CSS for the footer & layout wrapper (keeps bundle lightweight and easy)
const styles = {
  footer: {
    backgroundColor: '#33353d',
    color: '#b5b6be',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
  },
  listShowBanner: {
    backgroundColor: '#2b2d35',
    padding: '16px 20px',
    color: '#ffffff',
  },
  bannerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
  },
  bannerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },
  giftIcon: {
    color: '#F84464',
  },
  bannerText: {
    fontSize: '15px',
    fontWeight: '700',
  },
  bannerSubtext: {
    fontSize: '13px',
    color: '#b5b6be',
  },
  bannerBtn: {
    backgroundColor: '#F84464',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: '13px',
    padding: '8px 16px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.2s ease',
  },
  supportContainer: {
    borderBottom: '1px solid #40424b',
    padding: '24px 20px',
  },
  supportGrid: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    textAlign: 'center',
    gap: '20px',
  },
  supportItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    fontSize: '11px',
    fontWeight: '600',
    color: '#b5b6be',
    cursor: 'pointer',
  },
  supportItemLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    fontSize: '11px',
    fontWeight: '600',
    color: '#b5b6be',
    textDecoration: 'none',
  },
  supportIcon: {
    color: '#71727a',
  },
  footerMain: {
    backgroundColor: '#0f1015',
    padding: '40px 20px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '24px',
  },
  footerLogo: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '28px',
    fontWeight: '900',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
  },
  socialRow: {
    display: 'flex',
    gap: '16px',
  },
  socialLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#2b2d35',
    color: '#ffffff',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
  },
  copyright: {
    fontSize: '12px',
    color: '#71727a',
    lineHeight: '1.6',
    maxWidth: '600px',
  },
  scrollTopBtn: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    backgroundColor: '#F84464',
    color: '#ffffff',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(248, 68, 100, 0.4)',
    zIndex: 90,
  }
};

export default App;
