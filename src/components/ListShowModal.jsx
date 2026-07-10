import React, { useState } from 'react';
import styles from './ListShowModal.module.css';
import { X, Film, Calendar, DollarSign, Mail, FileText, CheckCircle } from 'lucide-react';

export default function ListShowModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1); // 1: Form, 2: Success ticket
  const [showTitle, setShowTitle] = useState('');
  const [category, setCategory] = useState('Fullstack Production');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [email, setEmail] = useState('');
  const [synopsis, setSynopsis] = useState('');

  const [receiptId] = useState(() => 'STAGE' + Math.floor(100000 + Math.random() * 900000));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!showTitle || !email || !synopsis) {
      alert("Please fill in all required fields!");
      return;
    }

    const subject = encodeURIComponent(`List Your Show: ${showTitle} (${category})`);
    const body = encodeURIComponent(
      `Hi Revanth,\n\n` +
      `I want to 'List a Show' (propose a project/role) on your portfolio:\n\n` +
      `• Show Title (Project): ${showTitle}\n` +
      `• Production Class: ${category}\n` +
      `• Target Timeline: ${timeline || 'TBD'}\n` +
      `• Estimated Budget (Ticket Price): ${budget || 'TBD'}\n\n` +
      `Project Synopsis:\n` +
      `"${synopsis}"\n\n` +
      `My Contact Email: ${email}\n\n` +
      `Let's discuss how we can bring this show to the stage!\n\n` +
      `Best regards.`
    );

    window.location.href = `mailto:revanthsaicherukuri6@gmail.com?subject=${subject}&body=${body}`;
    setStep(2);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modalContainer} fade-in`}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <h3>{step === 2 ? 'Show Submitted!' : 'List Your Show (Propose Project)'}</h3>
          <button onClick={onClose} className={styles.closeBtn}>
            <X size={20} />
          </button>
        </div>

        {/* Form Step */}
        {step === 1 && (
          <form onSubmit={handleSubmit} className={styles.modalBody}>
            <p className={styles.introText}>
              Want to collaborate or host a custom software show? Propose your project parameters below to get listed in the scheduler.
            </p>

            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label htmlFor="title">
                  <Film size={14} />
                  <span>Show Title (Project Name) *</span>
                </label>
                <input 
                  type="text" 
                  id="title"
                  required
                  placeholder="e.g. E-Commerce Redesign, SaaS Landing" 
                  className={styles.formInput}
                  value={showTitle}
                  onChange={(e) => setShowTitle(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="category">
                  <FileText size={14} />
                  <span>Production Class *</span>
                </label>
                <select 
                  id="category"
                  className={styles.formSelect}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Fullstack Production">Fullstack Production</option>
                  <option value="Backend Development Act">Backend Development Act</option>
                  <option value="Database Optimization Act">Database Optimization Act</option>
                  <option value="Distributed Benchmark Act">Distributed Systems Act</option>
                </select>
              </div>

              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="timeline">
                    <Calendar size={14} />
                    <span>Timeline (Target Release)</span>
                  </label>
                  <input 
                    type="text" 
                    id="timeline"
                    placeholder="e.g. Immediate, Q3 2026" 
                    className={styles.formInput}
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="budget">
                    <DollarSign size={14} />
                    <span>Estimated Budget</span>
                  </label>
                  <input 
                    type="text" 
                    id="budget"
                    placeholder="e.g. ₹50k, Freelance Rate" 
                    className={styles.formInput}
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">
                  <Mail size={14} />
                  <span>Your Contact Email *</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  required
                  placeholder="recruiter@company.com" 
                  className={styles.formInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="synopsis">
                  <FileText size={14} />
                  <span>Show Synopsis (Project Outline) *</span>
                </label>
                <textarea 
                  id="synopsis"
                  required
                  rows={4}
                  placeholder="Outline the core features, technologies required, and goals..." 
                  className={styles.formTextarea}
                  value={synopsis}
                  onChange={(e) => setSynopsis(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button type="button" className={styles.cancelBtn} onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className={styles.submitBtn}>
                Stage Show Proposals
              </button>
            </div>
          </form>
        )}

        {/* Success Step */}
        {step === 2 && (
          <div className={styles.modalBody}>
            <div className={styles.successWrapper}>
              <CheckCircle size={48} className={styles.successIcon} />
              <h4>Show Staged in Queue!</h4>
              <p>Your custom project proposal has been formatted. Here is your staging ticket pass:</p>

              {/* Digital Pass Stub */}
              <div className={styles.passStub}>
                <div className={styles.passTop}>
                  <div className={styles.passLogo}>book<span>my</span>dev</div>
                  <span className={styles.passId}>PASS: {receiptId}</span>
                </div>

                <div className={styles.passMid}>
                  <div className={styles.passDetails}>
                    <div className={styles.passField}>
                      <span className={styles.label}>PROPOSED SHOW</span>
                      <span className={styles.value}>{showTitle}</span>
                    </div>

                    <div className={styles.passField}>
                      <span className={styles.label}>PRODUCTION CLASS</span>
                      <span className={styles.value}>{category}</span>
                    </div>

                    <div className={styles.passRow}>
                      <div className={styles.passField}>
                        <span className={styles.label}>TIMELINE</span>
                        <span className={styles.value}>{timeline || 'TBD'}</span>
                      </div>
                      <div className={styles.passField}>
                        <span className={styles.label}>BUDGET</span>
                        <span className={styles.value}>{budget || 'TBD'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.passBorderDash}>
                  <div className={styles.leftHole} />
                  <div className={styles.rightHole} />
                </div>

                <div className={styles.passBottom}>
                  <p>Mail redirection composed to: <strong>revanthsaicherukuri6@gmail.com</strong></p>
                  <p className={styles.passNotice}>* Check your default email app to click send and deliver.</p>
                </div>
              </div>

              <button className={styles.closeFullBtn} onClick={onClose}>
                Return to Cinema
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
