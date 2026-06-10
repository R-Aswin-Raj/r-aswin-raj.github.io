import { ArrowDown, Download, Send } from 'lucide-react';
import './Hero.css';

const TAGS = [
  'Agentic AI Systems',
  'Enterprise RAG',
  'LLM Engineering',
  'Agent Orchestration',
  'Azure OpenAI',
];

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>
      <div className="hero-grid" />

      {/* Content */}
      <div className="hero-content">
        <img
          className="hero-avatar"
          src="/images/aswin_raj_profile_pic.png"
          alt="R Aswin Raj"
          width="160"
          height="160"
        />

        <p className="hero-greeting">Hello, I'm</p>

        <h1 className="hero-name">R Aswin Raj</h1>

        <p className="hero-title gradient-text">
          Generative AI Engineer
        </p>

        <p className="hero-description">
          Designing and deploying production-grade LLM, RAG, and agentic AI systems.
          Translating cutting-edge AI research into robust enterprise solutions
          with measurable business impact.
        </p>

        <div className="hero-tags">
          {TAGS.map(tag => (
            <span className="hero-tag" key={tag}>{tag}</span>
          ))}
        </div>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => scrollToSection('contact')}
            id="hero-contact-btn"
          >
            <Send size={16} />
            Get In Touch
          </button>
          <a
            className="btn-secondary"
            href="/Aswin_Raj_Resume.pdf"
            download="Aswin_Raj_Resume.pdf"
            id="hero-resume-btn"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button className="hero-scroll" onClick={() => scrollToSection('services')}>
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
