import { Code, Brain, Cloud, Wrench } from 'lucide-react';
import './TechStack.css';

const CATEGORIES = [
  {
    icon: <Code size={22} />,
    title: 'Programming',
    skills: [
      'Python', 'Azure Services', 'Async Workflows',
      'REST APIs', 'FastAPI', 'Vector Databases',
      'Embeddings Indexing', 'SQL',
    ],
  },
  {
    icon: <Brain size={22} />,
    title: 'Machine Learning & AI',
    skills: [
      'Generative AI', 'Agentic Systems', 'Deep Learning',
      'Reinforcement Learning', 'NLP', 'Computer Vision',
      'Semantic Search', 'Prompt Engineering',
    ],
  },
  {
    icon: <Cloud size={22} />,
    title: 'Cloud Technologies',
    skills: [
      'Azure Cognitive Services', 'Azure Machine Learning',
      'Azure OpenAI', 'Containerized Deployments',
      'CI/CD Pipelines', 'Cloud-Native Architecture',
    ],
  },
  {
    icon: <Wrench size={22} />,
    title: 'Tools & Frameworks',
    skills: [
      'Transformers', 'YOLO', 'Semantic Kernel',
      'LangChain', 'LlamaIndex', 'Pandas',
      'OpenCV', 'PostgreSQL', 'TensorFlow',
      'PyTorch', 'HuggingFace',
    ],
  },
];

export default function TechStack() {
  return (
    <section className="section techstack" id="stack">
      <div className="section-inner">
        <span className="section-label">Stack</span>
        <h2 className="section-title">Tools of the Trade</h2>
        <p className="section-subtitle">
          A curated set of technologies and frameworks honed through production-grade AI engineering.
        </p>

        <div className="techstack-grid">
          {CATEGORIES.map((cat, idx) => (
            <div
              className={`techstack-category animate-on-scroll delay-${idx + 1}`}
              key={cat.title}
            >
              <div className="techstack-category-icon">{cat.icon}</div>
              <h3 className="techstack-category-title">{cat.title}</h3>
              <div className="techstack-chips">
                {cat.skills.map(skill => (
                  <span className="tech-chip" key={skill}>
                    <span className="tech-chip-dot" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
