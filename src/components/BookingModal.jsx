import React, { useState } from 'react';
import styles from './BookingModal.module.css';
import { X, Calendar, Clock, Armchair, CheckCircle, Mail, MessageSquare } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, location }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1); // 1: Selection & Seats, 2: Form, 3: Success ticket
  const [selectedClass, setSelectedClass] = useState('VIP Box (Full-Time)');
  const [selectedDate, setSelectedDate] = useState('Today, 10 Jul');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  
  // Seat map details
  const [selectedSeat, setSelectedSeat] = useState(null);
  
  const bookedSeats = ['A3', 'A4', 'B1', 'C7', 'C8', 'D4'];
  const seatRows = ['A', 'B', 'C', 'D'];
  const seatNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  // Form details
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Ticket Code generator
  const [bookingId] = useState(() => 'BDEV' + Math.floor(100000 + Math.random() * 900000));

  const handleSeatClick = (seatCode) => {
    if (bookedSeats.includes(seatCode)) return;
    setSelectedSeat(selectedSeat === seatCode ? null : seatCode);
  };

  const handleNextStep = () => {
    if (!selectedSeat) {
      alert("Please select a seat to proceed!");
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    // 1. FREE EMAIL CLIENT REDIRECT (mailto)
    // Automatically opens the sender's mail app pre-filled with all booking information
    const subject = encodeURIComponent(`bookmydev Booking: ${selectedClass} (${selectedSeat})`);
    const body = encodeURIComponent(
      `Hi Revanth,\n\n` +
      `I would like to book a ticket slot for the following engineering engagement:\n\n` +
      `• Show Class (Engagement): ${selectedClass}\n` +
      `• Showtime (Date & Time): ${selectedDate} at ${selectedTime}\n` +
      `• Allocated Seat: ${selectedSeat}\n` +
      `• Venue Mode: ${location}\n\n` +
      `Message / Project Synopsis:\n` +
      `"${message}"\n\n` +
      `My Contact Email: ${email}\n\n` +
      `Please let me know if this slot works for you!\n\n` +
      `Best regards.`
    );
    
    // Open default mail client pre-filled
    window.location.href = `mailto:revanthsaicherukuri6@gmail.com?subject=${subject}&body=${body}`;

    /* 
    // 2. BACKGROUND EMAIL SUBMISSION (Optional alternative)
    // If you want silent background submission without opening the mail app,
    // you can sign up for a free token at https://web3forms.com and use this block instead:
    
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        access_key: "YOUR_ACCESS_KEY_HERE", // Replace with your Web3Forms key
        subject: `bookmydev Booking: ${selectedClass} (${selectedSeat})`,
        email: email,
        message: `Class: ${selectedClass}\nTime: ${selectedDate} ${selectedTime}\nSeat: ${selectedSeat}\nVenue: ${location}\n\nMessage: ${message}`
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        console.log("Form successfully submitted via API");
      }
    });
    */

    setStep(3);
  };

  const dates = [
    'Today, 10 Jul',
    'Sat, 11 Jul',
    'Sun, 12 Jul',
    'Mon, 13 Jul'
  ];

  const times = [
    '10:00 AM',
    '02:30 PM',
    '05:00 PM',
    '08:00 PM'
  ];

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modalContainer} fade-in`}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <h3>{step === 3 ? 'Booking Confirmed!' : 'Book Interview Ticket'}</h3>
          <button onClick={onClose} className={styles.closeBtn}>
            <X size={20} />
          </button>
        </div>

        {/* Step 1: Seat Selection & Timings */}
        {step === 1 && (
          <div className={styles.modalBody}>
            {/* Show Category Selector */}
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>1. Select Ticket Class</h4>
              <div className={styles.classesGrid}>
                {[
                  { name: 'VIP Box (Full-Time)', desc: 'Long-term product releases' },
                  { name: 'Balcony (Contract / Part-Time)', desc: 'Medium-term modular projects' },
                  { name: 'General (30 Min Consultation)', desc: 'Quick advice or Q&A chats' }
                ].map(cls => (
                  <div 
                    key={cls.name}
                    className={`${styles.classOption} ${selectedClass === cls.name ? styles.activeClass : ''}`}
                    onClick={() => setSelectedClass(cls.name)}
                  >
                    <h5>{cls.name}</h5>
                    <p>{cls.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Date and Time Selector */}
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>2. Select Show Date & Showtime</h4>
              <div className={styles.dateTimeWrapper}>
                <div className={styles.sliderRow}>
                  {dates.map(d => (
                    <button 
                      key={d} 
                      className={`${styles.dateBtn} ${selectedDate === d ? styles.activeDate : ''}`}
                      onClick={() => setSelectedDate(d)}
                    >
                      <Calendar size={12} />
                      <span>{d}</span>
                    </button>
                  ))}
                </div>
                
                <div className={styles.sliderRow}>
                  {times.map(t => (
                    <button 
                      key={t} 
                      className={`${styles.timeBtn} ${selectedTime === t ? styles.activeTime : ''}`}
                      onClick={() => setSelectedTime(t)}
                    >
                      <Clock size={12} />
                      <span>{t}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Screen Layout & Seat Selector */}
            <div className={styles.section}>
              <div className={styles.screenIndicator}>
                <div className={styles.screenCurve} />
                <span>INTERVIEW PLATFORM (SCREEN)</span>
              </div>

              <div className={styles.seatGrid}>
                {seatRows.map(row => (
                  <div key={row} className={styles.seatRow}>
                    <span className={styles.rowLabel}>{row}</span>
                    <div className={styles.seatsList}>
                      {seatNumbers.map(num => {
                        const seatCode = `${row}${num}`;
                        const isBooked = bookedSeats.includes(seatCode);
                        const isSelected = selectedSeat === seatCode;
                        return (
                          <button
                            key={num}
                            className={`${styles.seat} ${
                              isBooked ? styles.bookedSeat : 
                              isSelected ? styles.selectedSeat : styles.availableSeat
                            }`}
                            onClick={() => handleSeatClick(seatCode)}
                            disabled={isBooked}
                            title={isBooked ? 'Seat Occupied' : `Seat ${seatCode}`}
                          >
                            <Armchair size={16} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Legend */}
              <div className={styles.legend}>
                <span className={styles.legendItem}><Armchair size={12} className={styles.legendAvailable} /> Available</span>
                <span className={styles.legendItem}><Armchair size={12} className={styles.legendBooked} /> Booked (Client)</span>
                <span className={styles.legendItem}><Armchair size={12} className={styles.legendSelected} /> Selected</span>
              </div>
            </div>

            {/* Footer Summary */}
            <div className={styles.modalFooter}>
              <div className={styles.summaryText}>
                {selectedSeat ? (
                  <span>Selected Seat: <strong>{selectedSeat}</strong> • Price: <strong>FREE</strong></span>
                ) : (
                  <span>Please select a seat from the map.</span>
                )}
              </div>
              <button 
                className={styles.nextBtn} 
                onClick={handleNextStep}
                disabled={!selectedSeat}
              >
                Choose Seats
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Contact Form */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className={styles.modalBody}>
            <div className={styles.formSection}>
              <p className={styles.formHeaderDesc}>
                You are booking seat <strong>{selectedSeat}</strong> for <strong>{selectedClass}</strong> on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>. Please provide your contact details to generate the ticket.
              </p>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email">
                  <Mail size={16} />
                  <span>Your Email Address</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  placeholder="name@company.com" 
                  className={styles.formInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">
                  <MessageSquare size={16} />
                  <span>Brief Pitch / Project Outline</span>
                </label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  placeholder="Share a short summary of what you are working on, or the interview requirements..." 
                  className={styles.formTextarea}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button 
                type="button" 
                className={styles.backBtn} 
                onClick={() => setStep(1)}
              >
                Change Seat
              </button>
              <button 
                type="submit" 
                className={styles.nextBtn}
              >
                Confirm Ticket Booking
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success Ticket */}
        {step === 3 && (
          <div className={styles.modalBody}>
            <div className={styles.successWrapper}>
              <CheckCircle size={48} className={styles.successIcon} />
              <h4>Ticket Booked Successfully!</h4>
              <p>Your engineering slot is locked. Here is your digital entry ticket:</p>
              
              {/* Virtual Ticket Stub */}
              <div className={styles.ticketStub}>
                <div className={styles.ticketTop}>
                  <div className={styles.ticketLogo}>book<span>my</span>dev</div>
                  <span className={styles.ticketId}>ID: {bookingId}</span>
                </div>
                
                <div className={styles.ticketMid}>
                  <div className={styles.ticketDetails}>
                    <div className={styles.ticketField}>
                      <span className={styles.label}>SHOW (ROLE)</span>
                      <span className={styles.value}>{selectedClass}</span>
                    </div>
                    
                    <div className={styles.ticketField}>
                      <span className={styles.label}>DATE & TIME</span>
                      <span className={styles.value}>{selectedDate} • {selectedTime}</span>
                    </div>

                    <div className={styles.ticketRow}>
                      <div className={styles.ticketField}>
                        <span className={styles.label}>SEAT</span>
                        <span className={styles.value}>{selectedSeat}</span>
                      </div>
                      <div className={styles.ticketField}>
                        <span className={styles.label}>VENUE (MODE)</span>
                        <span className={styles.value}>{location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* CSS Simulated QR Code */}
                  <div className={styles.qrCode}>
                    <div className={styles.qrBlock}>
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className={styles.qrGridRow}>
                          {[...Array(9)].map((_, j) => (
                            <div 
                              key={j} 
                              className={`${styles.qrPixel} ${
                                (i + j) % 2 === 0 || (i < 3 && j < 3) || (i > 5 && j < 3) || (i < 3 && j > 5)
                                  ? styles.qrBlack : ''
                              }`} 
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                    <span className={styles.qrLabel}>SCAN TO ENTER</span>
                  </div>
                </div>

                <div className={styles.ticketBorderDash}>
                  <div className={styles.leftHole} />
                  <div className={styles.rightHole} />
                </div>
                
                <div className={styles.ticketBottom}>
                  <p>Host: <strong>Revanth Sai</strong> (revanthsaicherukuri6@gmail.com)</p>
                  <p>Confirmation sent to: <strong>{email}</strong></p>
                  <p className={styles.ticketNotice}>* Contact Host: +91 72072 87759. Present ticket at showtime.</p>
                </div>
              </div>

              <button className={styles.closeFullBtn} onClick={onClose}>
                Got It, Thank You!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
