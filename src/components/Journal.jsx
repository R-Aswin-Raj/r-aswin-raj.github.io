import { ArrowUpRight } from 'lucide-react';
import './Journal.css';

const ENTRIES = [
  {
    type: 'publication',
    title: 'Multimodal Assessment of Abusive Content',
    excerpt:
      'Developed classification models detecting abusive comments in Tamil and Tamil-English code-mixed datasets using TF-IDF and SVM with Random Kitchen Sinks. Achieved 0.52 F1 score on Tamil-English dataset, demonstrating strong low-resource abuse detection performance.',
    date: '2022',
    tags: ['NLP', 'Multimodal', 'Deep Learning'],
  },
  {
    type: 'publication',
    title: 'Indian Company Logo Detection with YOLOv5',
    excerpt:
      'Built a computer vision model to detect logos of Indian companies from images. Created dataset from scratch, trained YOLOv5 for 100 epochs, and developed an interactive GUI for real-time detection. Achieved 74.5 mean Average Precision.',
    date: '2022',
    tags: ['Computer Vision', 'YOLO', 'Object Detection'],
  },
];

export default function Journal() {
  return (
    <section className="section journal" id="journal">
      <div className="section-inner">
        <span className="section-label">Journal</span>
        <h2 className="section-title">Thoughts & Research</h2>
        <p className="section-subtitle">
          Publications, technical deep-dives, and insights from the frontier of applied AI engineering.
        </p>

        <div className="journal-grid">
          {ENTRIES.map((entry, idx) => (
            <article
              className={`journal-card animate-on-scroll delay-${idx + 1}`}
              key={entry.title}
            >
              <span className={`journal-card-type ${entry.type}`}>
                📄 Publication
              </span>

              <div className="journal-tags">
                {entry.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>

              <h3 className="journal-card-title">{entry.title}</h3>
              <p className="journal-card-excerpt">{entry.excerpt}</p>

              <div className="journal-card-footer">
                <span className="journal-card-date">{entry.date}</span>
                <a className="journal-card-link" href="#">
                  Read More <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
