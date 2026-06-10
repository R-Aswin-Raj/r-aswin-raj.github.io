import { Award, Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <span className="section-label">Architecture</span>
        <h2 className="section-title">Engineering Intelligence at Scale</h2>
        <p className="section-subtitle">
          Bridging the gap between cutting-edge AI research and production-ready enterprise systems.
        </p>

        <div className="about-grid">
          {/* Left — Summary + Timeline */}
          <div className="about-left">
            <p className="about-summary">
              Generative AI Engineer with hands-on experience designing and deploying applied AI solutions,
              including enterprise-grade <span className="about-highlight">LLM, RAG, and agentic AI systems</span> in
              production environments. Proven expertise in building end-to-end GenAI platforms, including
              multimodal RAG pipelines, semantic retrieval, prompt frameworks, and agent orchestration
              using <span className="about-highlight">Azure OpenAI and Semantic Kernel</span>.
            </p>

            <div className="timeline">
              <div className="timeline-item animate-on-scroll">
                <div className="timeline-dot" />
                <span className="timeline-period">Nov 2023 — Present</span>
                <h3 className="timeline-role">LLM Full Stack Development Analyst</h3>
                <p className="timeline-company">Accenture</p>
                <ul className="timeline-details">
                  <li>Designed and deployed enterprise-grade RAG systems integrating SQL data and semantic search</li>
                  <li>Developed multimodal RAG pipelines integrating text and image-based information</li>
                  <li>Built agent-based AI systems using Semantic Kernel for intelligent task orchestration</li>
                  <li>Optimized LLM pipelines through chunking strategies, embedding tuning, and retrieval logic</li>
                  <li>Enabled production readiness via rate limiting, monitoring hooks, and CI/CD workflows</li>
                </ul>
                <div className="awards">
                  <span className="award-badge">
                    <Award size={14} />
                    Star of the Month — Aug 2025
                  </span>
                  <span className="award-badge">
                    <Award size={14} />
                    ACE Award — FY 2025 & 2026
                  </span>
                </div>
              </div>

              <div className="timeline-item animate-on-scroll">
                <div className="timeline-dot" />
                <span className="timeline-period">May 2022 — Aug 2022</span>
                <h3 className="timeline-role">Intern, Computational Linguistics</h3>
                <p className="timeline-company">Pan Lingua</p>
                <ul className="timeline-details">
                  <li>Conducted extensive EDA and preprocessing for imbalanced datasets</li>
                  <li>Implemented optimized classification algorithms for abusive content detection</li>
                  <li>Performed statistical estimation techniques for balanced model training</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right — Education + Certifications */}
          <div className="about-right">
            <div className="about-right-section animate-on-scroll">
              <h3 className="about-right-title">
                <GraduationCap size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Education
              </h3>
              <div className="education-card">
                <p className="education-degree">B.Tech — CSE (Artificial Intelligence)</p>
                <p className="education-school">Amrita Vishwa Vidyapeetham University</p>
                <span className="education-year">Class of 2023</span>
              </div>
            </div>

            <div className="about-right-section animate-on-scroll">
              <h3 className="about-right-title">
                <ShieldCheck size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Certifications
              </h3>
              <div className="cert-card">
                <p className="cert-name">Azure AI Fundamentals (AI-900)</p>
                <p className="cert-desc">
                  Core AI and ML concepts, real-world applications using Azure Machine Learning and Cognitive Services.
                </p>
                <span className="cert-year">2024</span>
              </div>
              <div className="cert-card">
                <p className="cert-name">Azure AI Engineer Associate (AI-102)</p>
                <p className="cert-desc">
                  Designing, building, and managing AI solutions using Azure Cognitive Services, Bot Services & production tools.
                </p>
                <span className="cert-year">2024</span>
              </div>
            </div>

            <div className="about-right-section animate-on-scroll">
              <h3 className="about-right-title">
                <Briefcase size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Core Focus Areas
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {[
                  'Enterprise RAG', 'Agentic Systems', 'LLM Fine-Tuning',
                  'Prompt Engineering', 'Semantic Search', 'Azure OpenAI',
                  'Multi-Agent Orchestration', 'Production ML'
                ].map(skill => (
                  <span className="tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
