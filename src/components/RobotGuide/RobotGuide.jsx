import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import RobotCharacter from "./RobotCharacter.jsx";
import RobotSpeechBubble from "./RobotSpeechBubble.jsx";
import "./RobotGuide.css";

const SECTION_MESSAGES = [
  { id: "home", title: "MEET SONU", text: "Sonu builds practical AI systems—from intelligent models to polished, usable products." },
  { id: "about", title: "A LITTLE ABOUT SONU", text: "He connects LLMs, retrieval, computer vision, APIs, and interfaces to solve real problems." },
  { id: "work", title: "PROJECT RADAR", text: "Explore the case studies. Each one shows an AI idea, the approach, and the tools behind it." },
  { id: "experience", title: "BUILT THROUGH EXPERIENCE", text: "His work spans GenAI workflows, computer vision, backend services, and AI product development." },
  { id: "skills", title: "THE TOOLKIT", text: "Python is at the core, alongside PyTorch, TensorFlow, RAG, FastAPI, and product engineering." },
  { id: "education", title: "ALWAYS LEARNING", text: "Strong engineering comes from curiosity, fundamentals, experimentation, and continuous learning." },
  { id: "contact", title: "YOUR TURN!", text: "Have an AI challenge or opportunity? Reach out to Sonu—let's build something useful." },
];

const ROBOT_PATH = [
  { p: 0, x: 79, y: 34 },
  { p: 0.14, x: 14, y: 54 },
  { p: 0.29, x: 82, y: 39 },
  { p: 0.44, x: 16, y: 72 },
  { p: 0.59, x: 79, y: 66 },
  { p: 0.76, x: 14, y: 37 },
  { p: 0.91, x: 81, y: 51 },
  { p: 1, x: 74, y: 72 },
];

function getPathPosition(progress) {
  for (let index = 0; index < ROBOT_PATH.length - 1; index += 1) {
    const start = ROBOT_PATH[index];
    const end = ROBOT_PATH[index + 1];
    if (progress >= start.p && progress <= end.p) {
      const ratio = (progress - start.p) / (end.p - start.p || 1);
      return {
        x: start.x + (end.x - start.x) * ratio,
        y: start.y + (end.y - start.y) * ratio,
      };
    }
  }
  return ROBOT_PATH[ROBOT_PATH.length - 1];
}

export default function RobotGuide() {
  const [gaze, setGaze] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 79, y: 34 });
  const [message, setMessage] = useState({
    id: "intro",
    title: "HI, I'M ROBO",
    text: "I'll guide you around Sonu's AI journey. Scroll and I'll tell you what makes each part interesting.",
  });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateFromScroll = () => {
      const scrollableHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(1, Math.max(0, window.scrollY / scrollableHeight));
      setPosition(reduceMotion ? { x: 79, y: 36 } : getPathPosition(progress));

      const sectionProbe = window.scrollY + window.innerHeight * 0.42;
      let activeMessage = SECTION_MESSAGES[0];
      SECTION_MESSAGES.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= sectionProbe) activeMessage = item;
      });

      setMessage((current) =>
        current.id === activeMessage.id ? current : activeMessage
      );
    };

    const updateGaze = (event) => {
      const width = Math.max(window.innerWidth, 1);
      const height = Math.max(window.innerHeight, 1);
      setGaze({
        x: Math.max(-1, Math.min(1, (event.clientX / width - 0.5) * 2)),
        y: Math.max(-1, Math.min(1, (event.clientY / height - 0.5) * 2)),
      });
    };

    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);
    window.addEventListener("pointermove", updateGaze, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
      window.removeEventListener("pointermove", updateGaze);
    };
  }, []);

  // Portal the mascot to document.body so page/header stacking contexts cannot cover it.
  if (typeof document === "undefined") return null;

  const className = [
    "roaming-robot",
    position.x > 55 ? "bubble-left" : "bubble-right",
    position.y < 32 ? "bubble-below" : "bubble-above",
  ].join(" ");

  return createPortal(
    <aside
      className={className}
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      aria-label="Robo guide: an animated guide to the portfolio"
    >
      <RobotSpeechBubble message={message} />
      <div className="roaming-robot-shadow" aria-hidden="true" />
      <RobotCharacter gaze={gaze} />
      <span className="robot-floating-tag" aria-hidden="true">
        <i /> ROBO GUIDE <b>01</b>
      </span>
    </aside>,
    document.body
  );
}
