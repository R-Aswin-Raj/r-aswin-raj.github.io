import { ExternalLink, Clock } from 'lucide-react';
import './Work.css';

const PROJECTS = [
  {
    name: 'Enterprise RAG Copilot',
    subtitle: 'Semantic Kernel + Azure OpenAI',
    image: '/images/rag-pipeline.png',
    description:
      'A production-grade C#/.NET enterprise RAG agent service using Semantic Kernel with Azure OpenAI, grounded on Azure AI Search with cited answers, native function plugins, and agentic workflows.',
    features: [
      'Primary + fallback Azure OpenAI deployments with Polly resilience pipelines & circuit breakers',
      'Semantic caching via Redis vector index',
      'OpenTelemetry → Azure Monitor/Application Insights with Grafana dashboards',
      'Async LLM-as-judge evaluation worker',
      'Token-cost/FinOps modeling & secrets via Azure Key Vault with managed identity',
    ],
    tags: ['.NET 8+', 'Semantic Kernel', 'Azure OpenAI', 'Azure AI Search', 'Redis', 'OpenTelemetry'],
  },
  {
    name: 'Multimodal RAG Assistant',
    subtitle: 'Vision-capable knowledge retrieval',
    image: '/images/multi-agent.png',
    description:
      'A multimodal knowledge assistant that ingests PDFs with embedded images, diagrams, and screenshots, answering questions grounded on both text and visual content — e.g., a technical-manual or compliance assistant.',
    features: [
      'Vision-capable retrieval with image + text embeddings',
      'OCR pipeline (Gemma-based OCR or similar)',
      'Content-moderation routing (ties to published abusive-content detection research)',
      'Local CLIP/SigLIP for image feature extraction',
    ],
    tags: ['CLIP/SigLIP', 'Qwen3-VL', 'LanceDB', 'Streamlit', 'Multimodal Embeddings'],
  },
  {
    name: 'GraphRAG Research System',
    subtitle: 'Multi-agent knowledge graph reasoning',
    image: '/images/graphrag.png',
    description:
      'A GraphRAG pipeline that extracts entities and relationships into a knowledge graph for multi-hop reasoning, combined with a multi-agent research crew (researcher → writer → reviewer) for automated report generation.',
    features: [
      'Entity/relationship extraction into Neo4j knowledge graph',
      'Multi-hop reasoning over graph structure',
      'CrewAI multi-agent coordination with GroupChat patterns',
      'Automated research → synthesis → review pipeline',
    ],
    tags: ['Python', 'Neo4j', 'Microsoft GraphRAG', 'CrewAI', 'LangGraph'],
  },
  {
    name: 'AI-Powered Developer Tool',
    subtitle: 'LLM-driven code & data analysis',
    image: '/images/dev-tool.png',
    description:
      'A focused AI tool combining "chat with your codebase" capabilities with automated SQL-query generation and validation — leveraging function calling, structured output, and guardrails for reliable developer workflows.',
    features: [
      'Function calling with structured JSON schema output',
      'Automated SQL query generation with validation & guardrails',
      'Codebase-aware context retrieval',
      'Clean deployed UI with real-time streaming',
    ],
    tags: ['FastAPI', 'Streamlit', 'Qwen2.5-Coder', 'Groq', 'Gemini'],
  },
  {
    name: 'Local-First Private RAG',
    subtitle: 'Hybrid local/cloud AI routing',
    image: '/images/local-rag.png',
    description:
      'A privacy-preserving assistant that runs Ollama locally for routine queries and automatically routes hard/long-context tasks to free cloud tiers via an OpenAI-compatible router — with cost tracking and fallback logic.',
    features: [
      'Hybrid local/cloud routing with intelligent task classification',
      'LiteLLM / OpenRouter gateway with 429 fallback logic',
      'Cost dashboard and FinOps tracking',
      'Privacy-preserving local-first architecture',
    ],
    tags: ['Ollama', 'LiteLLM', 'OpenRouter', 'Gemini', 'Groq'],
  },
];

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="section-inner">
        <span className="section-label">Selected Projects</span>
        <h2 className="section-title">Engineered Intelligence</h2>
        <p className="section-subtitle">
          A showcase of production AI systems built for scale, precision, and measurable business impact.
        </p>

        {/* Projects Grid */}
        <div className="work-featured">
          {PROJECTS.map((project, idx) => (
            <div className={`project-card animate-on-scroll delay-${(idx % 3) + 1}`} key={project.name}>
              <div className="project-image-wrapper">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                />
                <div className="coming-soon-badge">
                  <Clock size={14} />
                  Coming Soon
                </div>
              </div>
              <div className="project-body">
                <div className="project-header">
                  <div>
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <span className="project-link-icon coming-soon-icon" aria-label="Coming soon">
                    <Clock size={16} />
                  </span>
                </div>

                <p className="project-section-text">{project.description}</p>

                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i} className="project-feature">{feature}</li>
                  ))}
                </ul>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
