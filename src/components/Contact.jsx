import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Globe, User } from 'lucide-react';
import './Contact.css';

// This key is public by design — it only identifies which inbox to deliver to.
const WEB3FORMS_ACCESS_KEY = 'cd79c297-1fc6-4bb9-9e24-649993c39731';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio contact: ${formData.subject}`,
          from_name: formData.name,
          ...formData,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="section-inner">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let's Build Together</h2>
        <p className="section-subtitle">
          Have a project in mind or want to discuss AI engineering? I'd love to hear from you.
        </p>

        <div className="contact-grid">
          {/* Left — Info */}
          <div className="contact-info animate-on-scroll">
            <p className="contact-text">
              Whether you're looking to integrate AI into your enterprise workflows,
              build a production-grade RAG system, or explore agentic architectures —
              let's connect and engineer something extraordinary.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="contact-item-label">Email</p>
                  <p className="contact-item-value">aswinraji2001@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="contact-item-label">Phone</p>
                  <p className="contact-item-value">+91-8072304841</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="contact-item-label">Location</p>
                  <p className="contact-item-value">India</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a
                className="social-btn"
                href="https://github.com/R-Aswin-Raj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                id="social-github"
              >
                <Globe size={20} />
              </a>
              <a
                className="social-btn"
                href="https://www.linkedin.com/in/r-aswin-raj/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                id="social-linkedin"
              >
                <User size={20} />
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <form className="contact-form animate-on-scroll delay-2" onSubmit={handleSubmit} id="contact-form">
            {/* Honeypot — hidden from real users; bots that fill it get rejected */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: 'none' }}
            />
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Name</label>
                <input
                  className="form-input"
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input
                  className="form-input"
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-subject">Subject</label>
              <input
                className="form-input"
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Message</label>
              <textarea
                className="form-textarea"
                id="contact-message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === 'success' && (
              <div className="form-success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="form-error">
                ✗ Something went wrong. Please try again or email me directly.
              </div>
            )}

            <button
              className="btn-primary form-submit"
              type="submit"
              id="contact-submit"
              disabled={status === 'sending'}
            >
              <Send size={16} />
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
