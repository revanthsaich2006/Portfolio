import React, { useState } from 'react';
import styles from './ExperienceList.module.css';
import { Calendar, MapPin, Users, Ticket, ArrowUpRight } from 'lucide-react';

export default function ExperienceList({ searchVal, onOpenBooking, t }) {
  const experiences = [
    {
      id: "edubot",
      company: "EduBot Laboratories",
      role: "Software Development Intern Act",
      duration: "Jun 2025 - Aug 2025",
      location: "Remote / Bengaluru, India",
      synopsis: "Developed backend web applications using Python and Flask with MySQL database integration. Designed and optimized SQL queries, integrated REST APIs, and debugged backend issues to improve application performance.",
      cast: ["Python", "Flask", "MySQL", "REST APIs", "SQL Optimization", "Debugging"],
      ticketStatus: "Fast Filling"
    },
    {
      id: "skku",
      company: "Sungkyunkwan University, South Korea",
      role: "Exchange Student Scholar Act",
      duration: "Aug 2025 - Dec 2025",
      location: "Suwon / Seoul, South Korea",
      synopsis: "Participated in the international Exchange Student Program. Focused on Advanced Computer Networks, Machine Learning algorithms, 5G Telecomm Simulation Technologies, and Computer Architecture.",
      cast: ["Machine Learning", "Advanced Networks", "5G Simulation", "Computer Architecture"],
      ticketStatus: "Sold Out"
    },
    {
      id: "srmap",
      company: "SRM University AP",
      role: "Computer Science Undergrad Scholar Act (CGPA: 8.06)",
      duration: "2023 - 2027 (Undergrad)",
      location: "Amaravati, Andhra Pradesh, India",
      synopsis: "Undergoing a B.Tech Computer Science curriculum at SRM AP, maintaining a CGPA of 8.06. Gained deep core concepts in Database Management Systems (DBMS), Data Structures & Algorithms, Operating Systems, and Computer Networks.",
      cast: ["DBMS", "Data Structures", "Algorithms", "Operating Systems", "Computer Networks"],
      ticketStatus: "Ongoing Act"
    }
  ];

  const filteredExperiences = experiences.filter(exp => 
    exp.company.toLowerCase().includes(searchVal.toLowerCase()) ||
    exp.role.toLowerCase().includes(searchVal.toLowerCase()) ||
    exp.synopsis.toLowerCase().includes(searchVal.toLowerCase()) ||
    exp.cast.some(tech => tech.toLowerCase().includes(searchVal.toLowerCase()))
  );

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className={`${styles.experienceSection} container`}>
      <div className={styles.sectionHeader}>
        <div>
          <h2 className={styles.sectionTitle}>{t.featuredShows}</h2>
          <p className={styles.sectionSubtitle}>{t.experienceSubtitle}</p>
        </div>
      </div>

      {filteredExperiences.length > 0 ? (
        <div className={styles.list}>
          {filteredExperiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div 
                key={exp.id} 
                className={`${styles.ticketCard} ${isExpanded ? styles.expandedCard : ''}`}
              >
                {/* Main Ticket Layout */}
                <div className={styles.ticketMain}>
                  {/* Left Side: Show Timings (Dates) */}
                  <div className={styles.dateBlock}>
                    <Calendar size={18} className={styles.calIcon} />
                    <span className={styles.duration}>{exp.duration}</span>
                    <span className={`${styles.statusBadge} ${
                      exp.ticketStatus === 'Fast Filling' ? styles.fastBadge : 
                      exp.ticketStatus === 'Sold Out' ? styles.soldBadge : styles.archivedBadge
                    }`}>
                      {exp.ticketStatus}
                    </span>
                  </div>

                  {/* Center: Work Details */}
                  <div className={styles.detailsBlock}>
                    <h3 className={styles.roleTitle}>{exp.role}</h3>
                    <div className={styles.companyRow}>
                      <span className={styles.companyName}>{exp.company}</span>
                      <span className={styles.separator}>•</span>
                      <span className={styles.location}>
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                    
                    {/* Tech Cast */}
                    <div className={styles.castWrapper}>
                      <Users size={12} className={styles.castIcon} />
                      <span className={styles.castLabel}>Cast:</span>
                      <div className={styles.castTags}>
                        {exp.cast.map(tech => (
                          <span key={tech} className={styles.castTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Book/Action */}
                  <div className={styles.actionBlock}>
                    <button 
                      className={styles.infoBtn}
                      onClick={() => toggleExpand(exp.id)}
                    >
                      {isExpanded ? t.hideDetails : t.viewSynopsis}
                    </button>
                    <button 
                      className={styles.bookBtn}
                      onClick={onOpenBooking}
                    >
                      <Ticket size={14} />
                      <span>{t.bookSlotBtn}</span>
                    </button>
                  </div>
                </div>

                {/* Expanded Synopsis Drawer */}
                {isExpanded && (
                  <div className={`${styles.synopsisDrawer} fade-in`}>
                    <h4>Show Synopsis & Deliverables</h4>
                    <p>{exp.synopsis}</p>
                    <div className={styles.synopsisFooter}>
                      <span>Genre: Academic Scholar / Software Engineer Intern</span>
                      <button className={styles.contactBtn} onClick={onOpenBooking}>
                        {t.requestReferences} <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>No career productions matching "{searchVal}" found. Try searching for "EduBot", "SKKU", or "SRM".</p>
        </div>
      )}
    </section>
  );
}
