import React from 'react';
import styles from './OffersModal.module.css';
import { X, Award, Percent, Code, Database, Globe } from 'lucide-react';

export default function OffersModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const vouchers = [
    {
      id: 1,
      icon: <Percent size={20} />,
      title: "100% Off Interview Slots",
      code: "HIRED2026",
      desc: "Apply this coupon code during the booking screen to lock down a 100% free interview or general consultation slot.",
      expiry: "Valid till Dec 2026"
    },
    {
      id: 2,
      icon: <Database size={20} />,
      title: "Free Database Schema Audit",
      code: "SQLTUNING",
      desc: "For contract projects: get a complimentary normalized MySQL/SQLite database schema safety review and query optimization plan.",
      expiry: "Limited slots monthly"
    },
    {
      id: 3,
      icon: <Globe size={20} />,
      title: "Global Exchange Bonus",
      code: "SKKU2025",
      desc: "Get full benchmarking access for distributed architectures or 5G telecomm simulations (Korean-English coordinate systems).",
      expiry: "Academic Release"
    }
  ];

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modalContainer} fade-in`}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.titleRow}>
            <Award className={styles.awardIcon} size={22} />
            <h3>Active Movie Vouchers & Offers</h3>
          </div>
          <button onClick={onClose} className={styles.closeBtn} aria-label="Close offers">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className={styles.modalBody}>
          <p className={styles.headerText}>
            Unlock special cinema-themed developer combos for your projects. Copy these codes and mention them during seat bookings!
          </p>

          <div style={styles.vouchersList}>
            {vouchers.map(v => (
              <div key={v.id} className={styles.voucherCard}>
                {/* Left Cutout Details */}
                <div className={styles.voucherLeft}>
                  <div className={styles.iconCircle}>{v.icon}</div>
                  <div className={styles.voucherMain}>
                    <h4>{v.title}</h4>
                    <p className={styles.desc}>{v.desc}</p>
                    <span className={styles.expiry}>{v.expiry}</span>
                  </div>
                </div>

                {/* Dashed Separator */}
                <div className={styles.dashDivider}>
                  <div className={styles.topHole} />
                  <div className={styles.bottomHole} />
                </div>

                {/* Right Coupon Stub */}
                <div className={styles.voucherRight}>
                  <span className={styles.stubLabel}>COUPON</span>
                  <div className={styles.codeStub}>{v.code}</div>
                  <button 
                    className={styles.copyBtn}
                    onClick={() => {
                      navigator.clipboard.writeText(v.code);
                      alert(`Code "${v.code}" copied to clipboard!`);
                    }}
                  >
                    COPY CODE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <button className={styles.closeFullBtn} onClick={onClose}>
            Back to Showtimes
          </button>
        </div>
      </div>
    </div>
  );
}
