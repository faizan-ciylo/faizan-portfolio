import "./WhatIDo.css";

const skills = [
  {
    title: "AI & Machine Learning",
    subtitle: "Deep Learning, NLP & Computer Vision",
    description:
      "Building and fine-tuning models across NLP, computer vision, and deep learning, from BERT intent classifiers to face verification pipelines.",
    tags: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Scikit-learn",
      "OpenCV / DeepFace",
      "CNNs / RNNs",
      "BERT / NLP",
      "NumPy / Pandas",
    ],
  },
  {
    title: "Generative & Agentic AI",
    subtitle: "LLMs, RAG & AI Agents",
    description:
      "Designing multi-tool AI agents, RAG pipelines, and workflow automation that plug LLMs into real enterprise systems and decision-making.",
    tags: [
      "LangChain",
      "RAG",
      "AI Agents",
      "Vector DBs / Pgvector",
      "Embeddings",
      "Semantic Search",
      "Speech-to-Text / TTS",
      "Workflow Automation",
    ],
  },
  {
    title: "Full-Stack Engineering",
    subtitle: "APIs, Databases & Production Systems",
    description:
      "Shipping the AI into a real product: REST APIs, relational schemas, and scalable architecture across MERN/PERN stack applications.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "SQL",
      "Git",
      "Agile",
    ],
  },
];

const WhatIDo = () => {
  return (
    <div className="whatIDO">
      <div className="what-header">
        <h2 className="title">
          W<span className="hat-h2">HAT</span> I<span className="do-h2"> DO</span>
        </h2>
      </div>

      <div className="what-grid">
        {skills.map((skill) => (
          <div className="what-card" key={skill.title}>
            <div className="what-card-glow"></div>
            <h3>{skill.title}</h3>
            <h4>{skill.subtitle}</h4>
            <p>{skill.description}</p>
            <div className="what-tags-row">
              {skill.tags.map((tag) => (
                <span className="what-tags" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
