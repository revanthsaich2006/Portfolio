import React from 'react';
import styles from './ResumeModal.module.css';
import { X, Printer, ShieldCheck, Mail, Phone, Download } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    // Downloads the resume from public/ folder
    const link = document.createElement('a');
    link.href = '/Cherukuri_Revanth_Sai_Resume.pdf';
    link.download = 'Cherukuri_Revanth_Sai_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modalContainer} fade-in`}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <h3>Print Admission Pass (Resume)</h3>
          <button onClick={onClose} className={styles.closeBtn}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className={styles.modalBody}>
          <p className={styles.introText}>
            Below is your generated cinema entry ticket. Clicking "Print Ticket" downloads the full PDF resume to your local machine.
          </p>

          {/* Virtual Ticket Stub */}
          <div className={styles.ticketStub}>
            <div className={styles.ticketTop}>
              <div className={styles.ticketLogo}>book<span>my</span>dev</div>
              <span className={styles.ticketId}>PASS: CSE2027</span>
            </div>

            <div className={styles.ticketMid}>
              <div className={styles.ticketDetails}>
                <div className={styles.ticketField}>
                  <span className={styles.label}>ACTOR (DEVELOPER)</span>
                  <span className={styles.value}>Cherukuri Revanth Sai</span>
                </div>

                <div className={styles.ticketField}>
                  <span className={styles.label}>SHOW (QUALIFICATION)</span>
                  <span className={styles.value}>B.Tech CSE, SRM University AP</span>
                </div>

                <div className={styles.ticketRow}>
                  <div className={styles.ticketField}>
                    <span className={styles.label}>SHOW RATING (CGPA)</span>
                    <span className={styles.value}>8.06 / 10.0</span>
                  </div>
                  <div className={styles.ticketField}>
                    <span className={styles.label}>SEAT (AVAILABILITY)</span>
                    <span className={styles.value}>Immediate</span>
                  </div>
                </div>

                <div className={styles.ticketField}>
                  <span className={styles.label}>TOUR (GLOBAL CREDITS)</span>
                  <span className={styles.value}>Sungkyunkwan University, SK</span>
                </div>
              </div>

              {/* QR Code */}
              <div className={styles.qrCode}>
                <div className={styles.qrBlock}>
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className={styles.qrGridRow}>
                      {[...Array(9)].map((_, j) => (
                        <div 
                          key={j} 
                          className={`${styles.qrPixel} ${
                            (i + j) % 3 === 0 || (i < 3 && j < 3) || (i > 5 && j < 3) || (i < 3 && j > 5)
                              ? styles.qrBlack : ''
                          }`} 
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <span className={styles.qrLabel}>SCAN PASS</span>
              </div>
            </div>

            <div className={styles.ticketBorderDash}>
              <div className={styles.leftHole} />
              <div className={styles.rightHole} />
            </div>

            <div className={styles.ticketBottom}>
              <p>Email: <strong>revanthsaicherukuri6@gmail.com</strong></p>
              <p>Phone: <strong>+91 72072 87759</strong></p>
              <p className={styles.ticketNotice}>* Place Cherukuri_Revanth_Sai_Resume.pdf in public/ directory.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Back
          </button>
          <button className={styles.printBtn} onClick={handlePrint}>
            <Download size={16} />
            <span>Print Ticket (Download PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
