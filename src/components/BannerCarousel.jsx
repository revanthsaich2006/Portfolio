import React, { useState, useEffect } from 'react';
import styles from './BannerCarousel.module.css';
import { ChevronLeft, ChevronRight, Play, Calendar } from 'lucide-react';

export default function BannerCarousel({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "CHERUKURI REVANTH SAI",
      subtitle: "Starring in: OPEN FOR HIRE",
      tags: "B.Tech CSE • Flask & Node.js • CGPA 8.06 • Active Intern",
      desc: "A software engineering undergraduate at SRM University AP (exchange scholar at Sungkyunkwan University, South Korea) specializing in backend architectures, SQL database scaling, and API integrations.",
      image: "/banner_hiring.jpg",
      actionText: "Book Interview",
      isLive: true,
      action: onOpenBooking
    },
    {
      id: 2,
      title: "GENESIS AI",
      subtitle: "Now Streaming on GitHub",
      tags: "Sci-Fi • Tech • AI Agents • 4.9★ (1.2k votes)",
      desc: "An intelligent generative AI assistant built with vector search embeddings, semantic analysis, and long-term conversation memory memory chains.",
      gradient: "linear-gradient(135deg, #0f1c3f 0%, #080b11 100%)",
      actionText: "Explore Code",
      isLive: false,
      url: "#projects"
    },
    {
      id: 3,
      title: "THE LEDGER WEB",
      subtitle: "Coming Soon to Mainnet",
      tags: "Drama • Web3 • Blockchains • Certifications",
      desc: "Track real-time blockchain operations, scan contract execution gas fees, and review transaction status reports through an interactive portal.",
      gradient: "linear-gradient(135deg, #2b1f0d 0%, #0d0c0a 100%)",
      actionText: "View Pipeline",
      isLive: false,
      url: "#projects"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={`${styles.carousel} container`}>
        {/* Slides */}
        <div 
          className={styles.slidesWrapper}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`${styles.slide} ${currentSlide === index ? styles.activeSlide : ''}`}
              style={{ background: slide.gradient || 'none' }}
            >
              {slide.image && (
                <div 
                  className={styles.slideBgImage}
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              )}
              <div className={styles.slideOverlay} />
              
              <div className={styles.slideContent}>
                {slide.isLive && (
                  <div className={styles.liveBadge}>
                    <span className="live-dot"></span>
                    <span>LIVE OPPORTUNITY</span>
                  </div>
                )}
                
                <h2 className={styles.title}>{slide.title}</h2>
                <h3 className={styles.subtitle}>{slide.subtitle}</h3>
                <p className={styles.tags}>{slide.tags}</p>
                <p className={styles.desc}>{slide.desc}</p>
                
                <div className={styles.actions}>
                  {slide.action ? (
                    <button className={styles.primaryBtn} onClick={slide.action}>
                      <Calendar size={18} />
                      <span>{slide.actionText}</span>
                    </button>
                  ) : (
                    <a href={slide.url} className={styles.primaryBtn}>
                      <Play size={18} fill="currentColor" />
                      <span>{slide.actionText}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeft size={24} />
        </button>
        <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${currentSlide === index ? styles.activeIndicator : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
