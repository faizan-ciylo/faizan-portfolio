import "./Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2 className="section-heading">
          My career <span>&</span> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance AI/ML &amp; Software Consultant</h4>
                <h5>Self-employed</h5>
              </div>
              <h3>Mar 2023 - Jan 2025</h3>
            </div>
            <p>
              Conducted 50+ online sessions tutoring Python and machine learning fundamentals. Assisted clients with
              software debugging, design patterns, and requirement specifications, and delivered data analysis and
              ML model training/evaluation projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Software Engineer</h4>
                <h5>Next Generation Technology Solutions (NGTSOL) | Full-time</h5>
              </div>
              <h3>Jun 2025 - Present</h3>
            </div>
            <p>
              Building production-grade intelligent systems combining Machine Learning, Generative AI, and agentic AI
              with full-stack engineering. Shipped an AI SOC Analyst platform with a multi-tool agent integrating
              Wazuh SIEM data and LLM-based alert triage, an AI-powered recruitment platform (PERN stack) with
              semantic resume matching, and a custom ML model that auto-routes ServiceNow incidents with 83% accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
