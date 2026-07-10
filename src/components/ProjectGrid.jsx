import React from 'react';
import styles from './ProjectGrid.module.css';
import { ThumbsUp, ArrowUpRight, Film } from 'lucide-react';

export default function ProjectGrid({ searchVal, onOpenBooking, t }) {
  const projects = [
    {
      id: "studysphere",
      title: "StudySphere",
      rating: "98%",
      votes: "148",
      genre: "Node.js / SQLite / AI Manager",
      poster: "/poster_genesis.jpg",
      description: "AI-driven personal study manager. Features secure SQLite database integration, authentication, task tracking, and schedule optimization.",
      github: "https://github.com/revanthsaich2006"
    },
    {
      id: "banking",
      title: "Bank Management System",
      rating: "96%",
      votes: "115",
      genre: "Python / MySQL / Database Normalization",
      poster: "/poster_ledger.jpg",
      description: "Database-driven banking app managing customer accounts, secure transactions, fund transfers, and query optimization.",
      github: "https://github.com/revanthsaich2006"
    },
    {
      id: "hpc-bench",
      title: "HPC Benchmarking",
      rating: "94%",
      votes: "92",
      genre: "Python / Distributed Systems / HPC",
      poster: "/poster_storm.jpg",
      description: "Distributed computing benchmarking system evaluating execution time, scalability, and bottlenecks on consumer devices.",
      github: "https://github.com/revanthsaich2006"
    },
    {
      id: "5g-network",
      title: "5G Simulation Network",
      rating: "95%",
      votes: "88",
      genre: "Python / 5G Simulation / Systems",
      poster: "/poster_null.jpg",
      description: "Simulations analyzing network latency, scalability, and resource allocations under 5G standard protocols, developed during academic exchange.",
      github: "https://github.com/revanthsaich2006"
    }
  ];

  // Filtering based on search query
  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchVal.toLowerCase()) ||
    p.genre.toLowerCase().includes(searchVal.toLowerCase()) ||
    p.description.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <section id="projects" className={`${styles.section} container`}>
      <div className={styles.sectionHeader}>
        <div>
          <h2 className={styles.sectionTitle}>{t.recommendedProjects}</h2>
          <p className={styles.sectionSubtitle}>{t.projectsSubtitle}</p>
        </div>
        <a 
          href="https://github.com/revanthsaich2006" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.seeAll}
        >
          {t.seeAllProjects}
        </a>
      </div>

      {filteredProjects.length > 0 ? (
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.card}>
              {/* Poster Container */}
              <div className={styles.posterContainer}>
                <img 
                  src={project.poster} 
                  alt={`${project.title} Movie Poster`} 
                  className={styles.poster}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback Gradient Card */}
                <div className={styles.fallbackPoster}>
                  <Film size={40} className={styles.fallbackIcon} />
                  <span>{project.title}</span>
                </div>

                {/* Rating Bar */}
                <div className={styles.ratingBar}>
                  <div className={styles.ratingInfo}>
                    <ThumbsUp size={14} className={styles.thumbsIcon} />
                    <span className={styles.ratingPercentage}>{project.rating}</span>
                    <span className={styles.voteCount}>{project.votes} votes</span>
                  </div>
                </div>

                {/* Hover Play/Details Overlay */}
                <div className={styles.overlay}>
                  <p className={styles.descText}>{project.description}</p>
                  <div className={styles.overlayActions}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.overlayBtn}
                    >
                      <span>{t.codeBtn}</span>
                      <ArrowUpRight size={14} />
                    </a>
                    <button className={`${styles.overlayBtn} ${styles.redBtn}`} onClick={onOpenBooking}>
                      <span>{t.bookSlotBtn}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className={styles.caption}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardGenre}>{project.genre}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <Film size={48} className={styles.emptyIcon} />
          <h3>{t.noShowsFound}</h3>
          <p>{t.noShowsDesc}</p>
        </div>
      )}
    </section>
  );
}
