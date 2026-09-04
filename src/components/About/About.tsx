import { useState } from "react";
import "./About.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className={`about-text ${isExpanded ? "about-expanded" : ""}`}>
          <p className="para">
            I am an <b>AI Software Engineer</b> building production-grade intelligent systems that combine Machine Learning, Generative AI, and agentic AI with full-stack engineering. I approach AI with an <b>engineering mindset</b>, focused on how models behave, fail, and hold up once they leave a notebook and enter a real product.
          </p>

          <p className="para">
            My background spans NLP, computer vision, and full-stack development. At Next Generation Technology Solutions I've built a multi-tool AI SOC analyst platform, an AI-powered recruitment platform with semantic resume matching, and a custom ML model that routes ServiceNow incidents with 83% accuracy, all shipped with React, Node.js, and PostgreSQL.
          </p>

          <p className="para">
            I'm driven by hands-on experimentation, from fine-tuning <b>BERT</b> on custom datasets to building a real-time gesture classifier from scratch. My final year project, an AI-powered interviewing platform, won <b>1st Prize</b> at Bahria University's AI Innofest 2025.
          </p>
        </div>
        <button
          className="about-toggle"
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          {isExpanded ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default About;
