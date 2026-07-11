import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';
import { sendEmail } from './email';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = await sendEmail(formData);
    
    setIsSubmitting(false);
    if (result.success) {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setSubmitStatus('error');
    }
    
    // Reset status after a few seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.className = 'ripple-effect';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container container">
        <h2 className="section-title reveal">Get In Touch</h2>
        
        <div className="contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info-column reveal">
            <h3 className="contact-subtitle">Let's discuss something great together</h3>
            <p className="contact-intro">
              I'm always open to discussing new software development initiatives, coding collaborations, or general technology conversations. Feel free to shoot me a message!
            </p>

            <div className="contact-cards">
              <div className="info-card glass-panel">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div className="info-text">
                  <span className="info-label">Email Me</span>
                  <a href="mailto:crkoushik25@gmail.com" className="info-value">crkoushik25@gmail.com</a>
                </div>
              </div>

              <div className="info-card glass-panel">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div className="info-text">
                  <span className="info-label">Call Me</span>
                  <a href="tel:+911234567890" className="info-value">+91 9597847174</a>
                </div>
              </div>

              <div className="info-card glass-panel">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div className="info-text">
                  <span className="info-label">My Location</span>
                  <span className="info-value">Coimbatore, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-column reveal">
            <form onSubmit={handleSubmit} className="contact-form glass-panel">
              {submitStatus === 'success' ? (
                <div className="form-success-message">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="form-input" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="form-input" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className="form-input" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="form-textarea" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      placeholder="Tell me about your idea..."
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="form-error-text" style={{ color: '#f87171', fontSize: '0.9rem', marginBottom: '1rem', textAlign: 'center' }}>
                      Failed to send message. Please try again.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn-primary form-submit-btn ripple"
                    disabled={isSubmitting}
                    onClick={handleRipple}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
