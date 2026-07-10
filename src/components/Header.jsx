import React, { useState } from 'react';
import styles from './Header.module.css';
import { Search, MapPin, ChevronDown, Menu, Briefcase } from 'lucide-react';

export default function Header({ 
  searchVal, 
  setSearchVal, 
  location, 
  setLocation, 
  onOpenBooking,
  onOpenOffers,
  onOpenResume,
  t
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const trendingSearches = ['Python', 'SQL', 'StudySphere', 'Flask', 'MySQL', 'MongoDB', 'Node.js', 'HPC'];

  const handleSuggestionClick = (keyword) => {
    setSearchVal(keyword);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.blur(); // Blur search box
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={styles.header}>
      {/* Top Main Nav */}
      <div className={styles.topNav}>
        <div className={`${styles.container} container`}>
          <div className={styles.left}>
            <div className={styles.logo} onClick={() => setSearchVal('')}>
              book<span>my</span>dev
            </div>
            
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={18} />
              <input 
                type="text" 
                placeholder={t.searchPlaceholder}
                className={styles.searchInput}
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onKeyDown={handleKeyDown}
              />
              
              {/* Autocomplete Dropdown */}
              {showSuggestions && (
                <div className={`${styles.suggestionsDropdown} fade-in`}>
                  <div className={styles.suggestionsTitle}>Trending Searches</div>
                  <div className={styles.suggestionsList}>
                    {trendingSearches.map((s) => (
                      <button
                        key={s}
                        type="button"
                        className={styles.suggestionTag}
                        onMouseDown={() => handleSuggestionClick(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className={styles.right}>
            <div className={styles.locationSelector}>
              <MapPin size={16} className={styles.pinIcon} />
              <span className={styles.locationText}>{location}</span>
              <ChevronDown size={14} className={styles.chevronIcon} />
              
              <div className={styles.locationDropdown}>
                {['Remote', 'Korea', 'India', 'Andhra Pradesh'].map((loc) => (
                  <div 
                    key={loc} 
                    className={`${styles.locOption} ${location === loc ? styles.activeLoc : ''}`}
                    onClick={() => setLocation(loc)}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            </div>
            
            <button className={styles.hireBtn} onClick={onOpenBooking}>
              <Briefcase size={16} />
              <span>{t.hireMe}</span>
            </button>
            
            <button className={styles.menuBtn} aria-label="Menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Sub Nav */}
      <div className={styles.bottomNav}>
        <div className={`${styles.container} container`}>
          <nav className={styles.navLinks}>
            <a href="#projects" className={styles.navLink}>{t.projectsLink}</a>
            <a href="#skills" className={styles.navLink}>{t.skillsLink}</a>
            <a href="#experience" className={styles.navLink}>{t.experienceLink}</a>
            <a href="#about" className={styles.navLink}>{t.castLink}</a>
          </nav>
          
          <div className={styles.navExtras}>
            <span className={styles.extraLink} onClick={onOpenBooking}>{t.bookConsultation}</span>
            <span 
              className={styles.badge} 
              onClick={onOpenOffers}
              style={{ cursor: 'pointer' }}
            >
              {t.offersBadge}
            </span>
            <span className={styles.extraLink} onClick={onOpenResume}>
              {t.printResume}
            </span>
            <a 
              href="https://github.com/revanthsaich2006" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.extraLink}
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/chrevanthsai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.extraLink}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
