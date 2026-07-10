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
  onOpenResume
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const trendingSearches = ['Python', 'SQL', 'StudySphere', 'Flask', 'MySQL', 'MongoDB', 'Node.js', 'HPC'];

  const handleSuggestionClick = (keyword) => {
    setSearchVal(keyword);
    setShowSuggestions(false);
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
                placeholder="Search for Python, SQL, StudySphere, EduBot..." 
                className={styles.searchInput}
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
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
                        onClick={() => handleSuggestionClick(s)}
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
                {['Remote', 'Vijayawada', 'SRM AP Campus', 'Seoul, South Korea'].map((loc) => (
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
              <span>Hire Revanth</span>
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
            <a href="#projects" className={styles.navLink}>Projects (Movies)</a>
            <a href="#skills" className={styles.navLink}>Skills & Tech (Events)</a>
            <a href="#experience" className={styles.navLink}>Experience (Shows)</a>
            <a href="#about" className={styles.navLink}>Cast & Reviews (Bio)</a>
          </nav>
          
          <div className={styles.navExtras}>
            <span className={styles.extraLink} onClick={onOpenBooking}>Book Consultation</span>
            <span 
              className={styles.badge} 
              onClick={onOpenOffers}
              style={{ cursor: 'pointer' }}
            >
              OFFERS
            </span>
            <span className={styles.extraLink} onClick={onOpenResume}>
              Print Resume
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
