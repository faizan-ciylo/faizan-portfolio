import "./Research.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const writings = [
    {
        badge: "AI & Security",
        title: "Role of AI in Cyber Attack Predictions and Prevention",
        abstract:
            "Led a research initiative on utilizing AI models for predicting and preventing cyber-attacks, contributing to the development of proactive security systems through machine learning-based threat detection.",
        tags: ["Threat Detection", "Machine Learning", "Proactive Security"],
    },
    {
        badge: "Computer Vision & OCR",
        title: "Enhancing OCR Capabilities with Bi-directional Long-Short Term Memory",
        abstract:
            "Conducted research focused on improving Optical Character Recognition (OCR) accuracy, exploring advanced techniques to increase recognition efficiency and robustness in various contexts.",
        tags: ["OCR", "BLSTM", "Deep Learning"],
    },
];

const Research = () => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Card reveals
        cardRefs.current.forEach((card) => {
            if (!card) return;
            gsap.fromTo(card,
                { opacity: 0, y: 40, scale: 0.98 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Heading reveals
        if (headingRef.current) {
            gsap.fromTo(headingRef.current,
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    }, []);

    return (
        <div className="research-section section-container" id="research">
            <div className="research-container">

                <p className="research-label">RESEARCH &amp; WRITINGS</p>

                <h2 className="research-heading" ref={headingRef}>
                    Independent<span> Research</span>
                </h2>

                <div className="research-list">
                    {writings.map((item, index) => (
                        <div
                            className="research-card"
                            key={item.title}
                            ref={(el) => { cardRefs.current[index] = el; }}
                        >
                            {/* Top bar glow */}
                            <div className="research-glow"></div>

                            {/* Badges */}
                            <div className="research-badges">
                                <span className="badge badge-open">{item.badge}</span>
                            </div>

                            {/* Title */}
                            <h3 className="research-title">{item.title}</h3>

                            <p className="research-author">Muhammad Faizan, Namal University, Pakistan</p>

                            {/* Divider */}
                            <div className="research-divider"></div>

                            <p className="research-abstract">{item.abstract}</p>

                            {/* Tags */}
                            <div className="research-tags">
                                {item.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Research;
