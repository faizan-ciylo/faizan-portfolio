import "./Education.css";

const Education = () => {
    return (
        <div className="education-section section-container" id="education">
            <div className="education-container">
                <h2 className="section-heading">
                    Education <span>&</span> Awards
                </h2>
                <div className="education-info">
                    <div className="education-timeline">
                        <div className="education-dot"></div>
                    </div>

                    <div className="education-info-box">
                        <div className="education-info-in">
                            <div className="education-role">
                                <h4>Bachelor of Science in Computer Science (BSCS)</h4>
                                <h5>Namal University, Pakistan</h5>
                            </div>
                            <h3>2021 - 2025</h3>
                        </div>
                        <p>
                            CGPA 3.47. Final year project: an AI-powered interviewing platform that won 1st Prize at
                            Bahria University's AI Innofest 2025.
                        </p>
                    </div>

                    <div className="education-info-box">
                        <div className="education-info-in">
                            <div className="education-role">
                                <h4>2nd Prize, LUMS AI Nexus Hackathon</h4>
                                <h5>Real-Time Magic Spell Classifier</h5>
                            </div>
                            <h3>Apr 2025</h3>
                        </div>
                        <p>
                            Secured 2nd position among teams from across Pakistan by building an AI-driven solution
                            under 48 hours.
                        </p>
                    </div>

                    <div className="education-info-box">
                        <div className="education-info-in">
                            <div className="education-role">
                                <h4>2nd Prize, Namal University Programming Hackathon</h4>
                                <h5>Inter-university competition</h5>
                            </div>
                            <h3>Feb 2024</h3>
                        </div>
                        <p>
                            Achieved 2nd place solving complex algorithmic challenges against competing universities.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Education;
