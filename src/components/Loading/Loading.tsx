import { useEffect, useState } from "react";
import "./Loading.css";
import { useLoading } from "../../context/LoadingProvider";

import Marquee from "react-fast-marquee";
import { FaPython, FaNodeJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiPostgresql, SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiOpencv, SiLangchain, SiJupyter, SiHuggingface } from 'react-icons/si';

const dataIcons = [
  { Icon: FaPython, name: "Python" },
  { Icon: SiTensorflow, name: "TensorFlow" },
  { Icon: SiPytorch, name: "PyTorch" },
  { Icon: SiKeras, name: "Keras" },
  { Icon: SiScikitlearn, name: "Scikit-learn" },
  { Icon: SiOpencv, name: "OpenCV" },
  { Icon: SiHuggingface, name: "Transformers" },
  { Icon: SiJupyter, name: "Jupyter" }
];

const webIcons = [
  { Icon: FaReact, name: "React" },
  { Icon: FaNodeJs, name: "Node" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiLangchain, name: "LangChain" },
  { Icon: FaGitAlt, name: "Git" }
];

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  if (percent >= 100) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 800);
    }, 500);
  }

  useEffect(() => {
    import("../utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 300);
      }
    });
  }, [isLoaded]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          MF
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee speed={60}>
            {dataIcons.map((tech, i) => (
              <div className="tech-icon-item" key={i}>
                <tech.Icon className="tech-icon" />
                <span className="tech-icon-name">{tech.name}</span>
              </div>
            ))}
          </Marquee>
          <Marquee direction="right" speed={50}>
            {webIcons.map((tech, i) => (
              <div className="tech-icon-item" key={i}>
                <tech.Icon className="tech-icon" />
                <span className="tech-icon-name">{tech.name}</span>
              </div>
            ))}
          </Marquee>
          <Marquee speed={40}>
            <span>AI Software Engineer</span> <span>Machine Learning</span>
            <span>AI Software Engineer</span> <span>Machine Learning</span>
          </Marquee>
          <Marquee direction="right" speed={60}>
            {[...dataIcons].reverse().map((tech, i) => (
              <div className="tech-icon-item" key={i}>
                <tech.Icon className="tech-icon" />
                <span className="tech-icon-name">{tech.name}</span>
              </div>
            ))}
          </Marquee>
          <Marquee speed={50}>
            {[...webIcons].reverse().map((tech, i) => (
              <div className="tech-icon-item" key={i}>
                <tech.Icon className="tech-icon" />
                <span className="tech-icon-name">{tech.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      const rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
