import React, { useState } from 'react';
import styles from './SkillsSection.module.css';
import { Sparkles, Terminal, Cpu, Database, Cloud, ChevronDown, ChevronUp } from 'lucide-react';

export default function SkillsSection({ searchVal, t }) {
  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'languages', name: 'Languages' },
    { id: 'db-frameworks', name: 'DBs & Frameworks' },
    { id: 'concepts-tools', name: 'Core Specs & Tools' }
  ];

  const [activeTab, setActiveTab] = useState('all');
  const [expandedSkillId, setExpandedSkillId] = useState(null);

  const toggleSpecs = (id) => {
    setExpandedSkillId(expandedSkillId === id ? null : id);
  };

  const skills = [
    {
      id: "programming",
      title: "Programming & Query Scripting",
      category: "languages",
      icon: <Terminal size={24} />,
      type: "Interactive Workshop",
      lang: "Python, SQL, C, C++, JavaScript",
      venue: "Terminal / Query Editor",
      price: "FREE",
      rating: "4.9★",
      popularity: "Highly Rated",
      topics: [
        "Python automation scripting & basic structures",
        "SQL Relational database designs & joins",
        "Procedural C language pointer manipulation",
        "Object Oriented C++ system designs",
        "Dynamic JS web behaviors & interfaces"
      ]
    },
    {
      id: "databases-frameworks",
      title: "Relational DBs & Frameworks",
      category: "db-frameworks",
      icon: <Database size={24} />,
      type: "Masterclass Act",
      lang: "MySQL, SQLite, MongoDB",
      venue: "SQL Console / Server Admin",
      price: "FREE",
      rating: "4.8★",
      popularity: "Best Seller",
      topics: [
        "Relational algebra & SQL query tuning",
        "SQLite localized lightweight storage systems",
        "Database normalization & ACID rules",
        "MongoDB document model integrations",
        "Index allocations & query execution plans"
      ]
    },
    {
      id: "web-frameworks",
      title: "Backend Servers & Frameworks",
      category: "db-frameworks",
      icon: <Cpu size={24} />,
      type: "Application Class",
      lang: "Flask, Node.js",
      venue: "WSGI Server / Node Runtime Environment",
      price: "FREE",
      rating: "4.8★",
      popularity: "Trending",
      topics: [
        "Python Flask server creation & routing setups",
        "Node.js asynchronous eventloop pipelines",
        "REST API request/response format protocols",
        "JSON payload parsing & status responses",
        "Middleware security checks & CORS filters"
      ]
    },
    {
      id: "core-cs",
      title: "Core CS Systems & Algorithms",
      category: "concepts-tools",
      icon: <Cpu size={24} />,
      type: "Academic Foundation",
      lang: "DBMS, OOP, DSA, OS, Computer Networks",
      venue: "Systems / Machine Architectures",
      price: "FREE",
      rating: "4.9★",
      popularity: "Academic Core",
      topics: [
        "Operating System CPU scheduling & memory paging",
        "Data Structures: Trees, Graphs, Hash Maps, Lists",
        "Computer Networks: TCP/IP stack & 5G layers",
        "Algorithms: Search, Sort, dynamic optimizations",
        "Object-Oriented polymorphism & inheritance"
      ]
    },
    {
      id: "backend-ops",
      title: "API Development & Integration",
      category: "concepts-tools",
      icon: <Cloud size={24} />,
      type: "Implementation Workshop",
      lang: "REST APIs, SQL Optimization, Debugging",
      venue: "Postman / Backend Dev Pipelines",
      price: "FREE",
      rating: "4.7★",
      popularity: "Essential",
      topics: [
        "RESTful endpoint standards & error codes",
        "SQL Query Optimization (joins, indexes)",
        "Postman environment testing & assertions",
        "System debugging & log stack trace checks",
        "Input sanitization & transaction safety"
      ]
    },
    {
      id: "tools",
      title: "Modern Developer Utilities",
      category: "concepts-tools",
      icon: <Terminal size={24} />,
      type: "Workflow Training",
      lang: "Git, GitHub, VS Code, Postman",
      venue: "Local Environment / Versioning",
      price: "FREE",
      rating: "4.6★",
      popularity: "Standard Tooling",
      topics: [
        "Git branching, merging, & checkout histories",
        "GitHub remote repositories & pull requests",
        "VS Code extensions & debugger configs",
        "Postman mock servers & API documentation",
        "Command line interface terminal controls"
      ]
    }
  ];

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = 
      skill.title.toLowerCase().includes(searchVal.toLowerCase()) ||
      skill.lang.toLowerCase().includes(searchVal.toLowerCase()) ||
      skill.type.toLowerCase().includes(searchVal.toLowerCase());
      
    const matchesTab = activeTab === 'all' || skill.category === activeTab;
    
    return matchesSearch && matchesTab;
  });

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerTitle}>
            <Sparkles size={20} className={styles.headerIcon} />
            <h2>{t.bestLiveEvents}</h2>
          </div>
          <p className={styles.subtext}>{t.skillsSubtitle}</p>
        </div>

        <div className={styles.tabsContainer}>
          {categories.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {filteredSkills.length > 0 ? (
          <div className={styles.eventsGrid}>
            {filteredSkills.map(skill => {
              const isExpanded = expandedSkillId === skill.id;
              return (
                <div 
                  key={skill.id} 
                  className={`${styles.eventCard} ${isExpanded ? styles.expandedCard : ''}`}
                >
                  <div className={styles.eventThumbnail}>
                    <div className={styles.iconWrapper}>
                      {skill.icon}
                    </div>
                    <span className={styles.popBadge}>{skill.popularity}</span>
                    <span className={styles.ratingBadge}>{skill.rating}</span>
                  </div>

                  <div className={styles.eventDetails}>
                    <p className={styles.eventType}>{skill.type}</p>
                    <h3 className={styles.eventTitle}>{skill.title}</h3>
                    <p className={styles.eventLang}>{skill.lang}</p>
                    <p className={styles.eventVenue}>{skill.venue}</p>
                    
                    <div className={styles.footerRow}>
                      <span className={styles.priceLabel}>Admissions: <span className={styles.priceVal}>{skill.price}</span></span>
                      <button 
                        className={`${styles.bookBadge} ${isExpanded ? styles.activeBadge : ''}`}
                        onClick={() => toggleSpecs(skill.id)}
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? t.closeSpecs : t.viewSpecs}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className={`${styles.specsDrawer} fade-in`}>
                      <h4>{t.coveredTopics}</h4>
                      <ul className={styles.topicsList}>
                        {skill.topics.map((topic, i) => (
                          <li key={i} className={styles.topicItem}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>No masterclasses scheduled for "{searchVal}" in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
