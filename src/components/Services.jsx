import { Cpu, Database, Bot } from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    icon: <Cpu size={24} />,
    title: 'LLM Fine-Tuning',
    description:
      'Adapting foundational open-source models and cloud-based models to domain-specific knowledge domains. Ensuring high fidelity in specialized enterprise contexts while minimizing latency and inference costs.',
    tags: ['LoRA / QLoRA', 'HuggingFace', 'PyTorch'],
  },
  {
    icon: <Database size={24} />,
    title: 'RAG Architecture',
    description:
      'Designing advanced Retrieval-Augmented Generation pipelines. Implementing semantic chunking, hybrid search, and cross-encoder reranking to ensure deterministic, hallucination-free outputs grounded in corporate data.',
    tags: ['Vector DBs', 'LangChain', 'LlamaIndex'],
  },
  {
    icon: <Bot size={24} />,
    title: 'Agentic Workflows',
    description:
      'Developing autonomous, tool-calling AI agents capable of orchestrating complex multistep workflows. Creating specialized multi-agent systems for reasoning, execution, and self-correction.',
    tags: ['AutoGen', 'CrewAI', 'Function Calling'],
  },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-inner">
        <span className="section-label">Capabilities</span>
        <h2 className="section-title">Architecting Cognitive Infrastructure</h2>
        <p className="section-subtitle">
          Specialized engineering services focused on translating cutting-edge AI research into robust,
          production-ready enterprise systems.
        </p>

        <div className="services-grid">
          {SERVICES.map((service, idx) => (
            <div
              className={`service-card animate-on-scroll delay-${idx + 1}`}
              key={service.title}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-tags">
                {service.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
