import React from 'react';
import styles from './CastSection.module.css';
import { Star } from 'lucide-react';

export default function CastSection({ t }) {
  const cast = [
    {
      id: "revanth",
      name: "Cherukuri Revanth Sai",
      role: "Lead Full-Stack Performer",
      initials: "CRS",
      desc: "Computer Science Undergrad at SRM AP. Python, Flask, Node.js developer, and backend specialist."
    },
    {
      id: "dba",
      name: "Database Architect",
      role: "Writes Queries & Schemas",
      initials: "DBA",
      desc: "Skilled in database management, schema design, and query optimization (MySQL, SQLite, MongoDB)."
    },
    {
      id: "exchange",
      name: "Exchange Scholar",
      role: "Directs Advanced Systems",
      initials: "INT",
      desc: "Studied Advanced Computer Networks, Machine Learning, and 5G Simulations at SKKU, South Korea."
    },
    {
      id: "api",
      name: "Backend Performer",
      role: "Performs API & Debugging",
      initials: "API",
      desc: "Integrated REST APIs and resolved system bottlenecks during the EduBot Intern show."
    }
  ];

  const crew = [
    { name: "Education", role: "B.Tech CSE, SRM University AP (CGPA: 8.06)" },
    { name: "Global Experience", role: "Exchange Student, Sungkyunkwan University" },
    { name: "Key Certifications", role: "MongoDB Node.js, Coursera Backend & OS" },
    { name: "Home Venue", role: "Vijayawada, Andhra Pradesh, India" }
  ];

  return (
    <section id="about" className={`${styles.aboutSection} container`}>
      {/* Cast Section */}
      <div className={styles.wrapper}>
        <h2 className={styles.sectionTitle}>{t.castTitle}</h2>
        <p className={styles.sectionSubtitle}>{t.castSubtitle}</p>
        
        <div className={styles.castGrid}>
          {cast.map(member => (
            <div key={member.id} className={styles.castCard}>
              <div className={styles.avatar}>
                <span>{member.initials}</span>
                <div className={styles.avatarHover}>
                  <p>{member.desc}</p>
                </div>
              </div>
              <h3 className={styles.castName}>{member.name}</h3>
              <p className={styles.castRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Crew Section */}
      <div className={styles.wrapper}>
        <h2 className={styles.sectionTitle}>{t.crewTitle}</h2>
        <p className={styles.sectionSubtitle}>{t.crewSubtitle}</p>
        
        <div className={styles.crewGrid}>
          {crew.map((member, index) => (
            <div key={index} className={styles.crewCard}>
              <h3 className={styles.crewName}>{member.name}</h3>
              <p className={styles.crewRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* User Reviews Section (Testimonials / Bio reviews) */}
      <div className={styles.reviewsWrapper}>
        <div className={styles.reviewsHeader}>
          <div className={styles.headerLeft}>
            <Star className={styles.starIcon} size={20} />
            <h2>{t.audienceReviews}</h2>
          </div>
          <span className={styles.totalRating}>4.9/5 (210 reviews)</span>
        </div>
        
        <div className={styles.reviewCards}>
          <div className={styles.reviewCard}>
            <div className={styles.reviewMeta}>
              <span className={styles.reviewerName}>EduBot Tech Lead Critic</span>
              <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
            </div>
            <p className={styles.reviewText}>
              "Revanth demonstrated exceptional skill in backend application development. His SQL optimizations and query layouts during his software intern production saved server latency and stabilized REST routes. Highly reliable developer."
            </p>
          </div>
          
          <div className={styles.reviewCard}>
            <div className={styles.reviewMeta}>
              <span className={styles.reviewerName}>SRM AP & SKKU Academic Critic</span>
              <span className={styles.reviewRating}>⭐⭐⭐⭐⭐</span>
            </div>
            <p className={styles.reviewText}>
              "Revanth shows exceptional analytical skills in computer networks, machine learning models, and operating systems. His distributed systems benchmark project is a showcase of computational efficiency and robust coding skills."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
