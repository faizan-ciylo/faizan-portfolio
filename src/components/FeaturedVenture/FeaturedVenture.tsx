import "./FeaturedVenture.css";
import { MdEmojiEvents } from "react-icons/md";


const FeaturedVenture = () => {
    return (
        <div className="venture-section section-container" id="venture">
            <div className="venture-container">

                {/* Section Label */}
                <p className="section-label">FINAL YEAR PROJECT</p>

                {/* Main Heading */}
                <h2 className="section-heading">
                    AI Interviewing<span> System</span>
                </h2>

                {/* Split layout */}
                <div className="venture-body">
                    {/* Left: Info */}
                    <div className="venture-info">
                        <p className="venture-category">AI Agents · LLMs · Computer Vision · Full-Stack</p>
                        <p className="venture-status">🏆 1st Prize &nbsp;·&nbsp; Bahria University AI Innofest 2025</p>
                        <p className="venture-desc">
                            An AI-driven interview automation platform that acts as a virtual interviewer — generating
                            dynamic, context-aware questions with LLMs and evaluating candidate responses in real time,
                            including confidence prediction and cheating detection via DeepFace + MTCNN face verification.
                            Reduced manual screening time by ~70% and improved shortlisting efficiency for hiring teams.
                        </p>
                        <div className="venture-tags">
                            <span>LLM Question Generation</span>
                            <span>Speech-to-Text</span>
                            <span>Semantic Similarity</span>
                            <span>Face Verification</span>
                        </div>
                        <div className="venture-link">
                            <MdEmojiEvents size={18} />
                            ~70% reduction in manual screening time
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="venture-visual">
                        <div className="venture-character-container">
                            <img
                                src="/images/ai-interviewing-system.png"
                                alt="AI Interviewing System dashboard preview"
                                className="venture-image"
                            />
                        </div>
                    </div>
                </div>
                <div className="venture-divider"></div>
            </div>
        </div>
    );
};
export default FeaturedVenture;
