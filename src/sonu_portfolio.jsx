import { useEffect, useRef, useState } from "react";
import RobotGuide from "./components/RobotGuide/RobotGuide.jsx";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit,
  BriefcaseBusiness, Check, Code2, Cpu, Database, ExternalLink, Github,
  Globe, GraduationCap, Layers3, Linkedin, Mail, Menu, Network,
  ScanEye, Send, Sparkles, X, Zap, MessageSquareText, Terminal, CircleDot
} from "lucide-react";

const profile = {
  name: "Sonu Kumar",
  title: "AI / ML Engineer",
  email: "sonu.code.ai@gmail.com",
  phone: "+91 8800203588",
  linkedin: "https://linkedin.com/in/sonu-softwaresolution",
  github: "https://github.com/sonu-software",
  resume: "/sonu-kumar-resume.pdf",
};

const projects = [
  { id: "01", category: "GENERATIVE AI · PRODUCT ENGINEERING", title: "AI Marketing Automation Platform", summary: "A generative-AI platform for creating promotional content and visuals through connected LLM workflows and image-generation pipelines.", detail: "Company work combining LLM-powered prompt workflows, AI image generation, backend APIs, media handling, and a React interface.", stack: ["Python", "FastAPI", "LLMs", "MySQL", "React"], icon: Sparkles, accent: "violet", metric: "AI PRODUCT", points: ["Developed AI content-generation workflows for promotional visual creation.", "Integrated image-generation pipelines and prompt-engineering workflows.", "Built REST APIs and connected frontend modules.", "Worked with relational data, media management, and backend application flows."] },
  { id: "02", category: "RAG · CYBERSECURITY", title: "CWE & CVE Finder", summary: "A retrieval-augmented system for mapping vulnerability information to relevant weakness records and contextual compliance insights.", detail: "A semantic-retrieval workflow over vulnerability and weakness data, with LLM-generated contextual descriptions and compliance mapping.", stack: ["RAG", "Python", "Semantic Search", "Vector Stores", "LLMs"], icon: Network, accent: "blue", metric: "RAG PIPELINE", points: ["Created semantic retrieval over structured vulnerability data.", "Worked with parsed CSV and JSON data sources.", "Generated contextual analysis using LLM workflows.", "Connected findings with compliance control test cases."] },
  { id: "03", category: "LOCAL LLM · PRIVACY", title: "Offline Personal Chatbot", summary: "A local conversational assistant designed to support private interactions without depending on a live internet connection.", detail: "The résumé describes a quantized Mistral-7B model paired with E5-small-v2 embeddings for local conversational experiences.", stack: ["Mistral-7B", "E5 Embeddings", "Local Inference", "NLP"], icon: MessageSquareText, accent: "mint", metric: "LOCAL INFERENCE", points: ["Integrated a quantized language model for local generation.", "Used embeddings for semantic representations.", "Focused on private interactions and efficient inference.", "Designed for environments with limited internet access."] },
  { id: "04", category: "AUTOMATION · VOICE AI", title: "Voice Calling Agent", summary: "An automated lead workflow connecting calls, outcome handling, demo scheduling, and personalized follow-up communication.", detail: "An n8n-based automation workflow with call-outcome analysis and spreadsheet-supported lead tracking.", stack: ["n8n", "Workflow Automation", "Email APIs", "Excel"], icon: Zap, accent: "orange", metric: "WORKFLOW AUTOMATION", points: ["Orchestrated lead-calling and follow-up workflows.", "Added call-outcome handling and demo scheduling.", "Connected personalized email follow-ups.", "Used spreadsheet analytics to organize outcomes."] },
  { id: "05", category: "NLP · CAREER TOOLS", title: "ATS Resume Matcher", summary: "An AI-assisted tool that compares a résumé with a job description and presents an understandable alignment summary.", detail: "A resume-analysis workflow using LangChain and Gemini to help candidates inspect alignment with a target role.", stack: ["LangChain", "Gemini API", "LLMs", "Text Analysis"], icon: ScanEye, accent: "pink", metric: "LLM APPLICATION", points: ["Integrated résumé and job-description comparison.", "Used LLM analysis to produce a match summary.", "Presented résumé alignment as an understandable score.", "Focused on practical job-search and résumé-refinement needs."] },
  { id: "06", category: "COMPUTER VISION · DEEP LEARNING", title: "Plant Leaf Disease Detection", summary: "A deep-learning image-classification project for identifying plant leaf disease categories.", detail: "The supplied résumé reports 94% project accuracy. This is presented as a reported result, not an independently verified benchmark.", stack: ["Deep Learning", "Python", "Image Classification", "Computer Vision"], icon: ScanEye, accent: "mint", metric: "94% REPORTED ACCURACY", points: ["Developed a model for leaf-image classification.", "Applied image-based deep-learning methods.", "Reported 94% project accuracy in the résumé.", "Explored early disease identification for agriculture."] },
];

const experience = [
  { period: "NOV 2025 — PRESENT", role: "AI/ML Engineer", company: "Miracle Eye Pvt. Ltd.", kind: "Professional experience", points: ["Developing a generative-AI marketing automation platform for promotional visual generation.", "Building FastAPI services, REST APIs, and AI workflows for content generation.", "Working with MySQL, media management, secure file handling, and backend performance.", "Integrating LLMs, prompt engineering, image-generation pipelines, and React modules."] },
  { period: "JUN 2025 — NOV 2025", role: "AI/ML Engineer Intern", company: "CyberSRC Pvt. Ltd.", kind: "Internship", points: ["Worked on custom NLP solutions using LLMs, fine-tuning, and prompt engineering.", "Built cybersecurity data-collection workflows using Requests and BeautifulSoup.", "Developed conversational AI systems using LangChain and related frameworks.", "Integrated intelligent chatbots with external APIs and enterprise platforms."] },
  { period: "DATES NOT PROVIDED", role: "Data Science Intern", company: "Unified Mentor", kind: "Internship", points: ["Worked on predictive analytics, preprocessing, feature engineering, and model optimization.", "Implemented deep-learning approaches for image-classification tasks."] },
  { period: "DATES NOT PROVIDED", role: "IT Recruiter", company: "Mbit Computraining Pvt. Ltd.", kind: "Earlier experience", points: ["Handled recruitment workflows for Data Science and AI/ML roles.", "Conducted candidate screening and technical assessments."] },
];

const skillGroups = [
  { title: "Generative AI & LLMs", icon: BrainCircuit, level: 88, items: ["GPT · LLaMA · Mistral", "RAG pipelines", "Prompt engineering", "LangChain", "Gemini API", "Hugging Face"] },
  { title: "AI / Machine Learning", icon: Cpu, level: 84, items: ["PyTorch", "TensorFlow / Keras", "Scikit-learn", "NLP", "SentenceTransformers", "Computer vision"] },
  { title: "Data & Retrieval", icon: Database, level: 79, items: ["FAISS", "ChromaDB", "Weaviate", "Pinecone", "MySQL / SQLite", "Pandas / NumPy"] },
  { title: "Product Engineering", icon: Code2, level: 82, items: ["Python", "FastAPI / REST APIs", "React / JavaScript", "Flask / Streamlit", "Git / GitHub", "n8n automation"] },
];

const education = [
  { degree: "Master of Computer Applications (MCA)", school: "GGSIP University", period: "JUL 2021 — AUG 2023", result: "9.4 CGPA" },
  { degree: "Bachelor of Computer Applications (BCA)", school: "PDM University", period: "JUL 2017 — AUG 2020", result: "6.3 CGPA" },
];

function NeuronCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0, height = 0, raf = 0, particles = [];
    const pointer = { x: -1000, y: -1000 };
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = Math.floor(width * dpr); canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(105, Math.max(36, Math.floor((width * height) / 15000)));
      particles = Array.from({ length: count }, () => ({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .26, vy: (Math.random() - .5) * .26, r: Math.random() * 1.5 + .45, phase: Math.random() * 6.28 }));
    };
    const move = e => { pointer.x = e.clientX; pointer.y = e.clientY; };
    const draw = t => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p, i) => {
        if (!reduceMotion) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
          const dx = pointer.x - p.x, dy = pointer.y - p.y, d = Math.hypot(dx, dy);
          if (d < 120 && d > 0) { p.x -= dx / d * .08; p.y -= dy / d * .08; }
        }
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 145) {
            const a = (1 - d / 145) * .25;
            const grad = ctx.createLinearGradient(p.x, p.y, q.x, q.y);
            grad.addColorStop(0, `rgba(89, 210, 255, ${a})`); grad.addColorStop(1, `rgba(166, 112, 255, ${a})`);
            ctx.strokeStyle = grad; ctx.lineWidth = .65; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * (reduceMotion ? 1 : .75 + Math.sin(t * .001 + p.phase) * .2), 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? "rgba(94,220,255,.75)" : "rgba(173,145,255,.72)";
        ctx.shadowBlur = 9; ctx.shadowColor = "rgba(98,166,255,.45)"; ctx.fill(); ctx.shadowBlur = 0;
      });
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };
    resize(); draw(0);
    window.addEventListener("resize", resize); window.addEventListener("pointermove", move, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move); };
  }, []);
  return <canvas className="neuron-canvas" ref={canvasRef} aria-hidden="true" />;
}



function SectionHeading({ eyebrow, title, text, number }) {
  return <div className="section-heading reveal"><div className="section-heading-meta"><span className="eyebrow"><i />{eyebrow}</span>{number && <span className="section-number">{number}</span>}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function FloatingCard({ className, icon: Icon, label, value, accent }) {
  return <div className={`float-card ${className} ${accent || ""}`}><span className="float-card-icon"><Icon size={16} /></span><span className="float-card-copy"><small>{label}</small><strong>{value}</strong></span><span className="float-card-signal" /></div>;
}

export default function SonuPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [photoFailed, setPhotoFailed] = useState(false);
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal, .project-card, .experience-item, .skill-card, .education-card, .contact-panel");
    if (!("IntersectionObserver" in window)) { nodes.forEach(n => n.classList.add("is-visible")); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); observer.unobserve(e.target); } }), { threshold: .1, rootMargin: "0px 0px -24px 0px" });
    nodes.forEach((node, i) => { node.style.setProperty("--reveal-delay", `${(i % 4) * 75}ms`); observer.observe(node); });
    const updateThread = () => {
      const grid = document.querySelector(".thread-grid");
      if (!grid) return;
      const rect = grid.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight * 0.25)));
      grid.style.setProperty("--thread-progress", String(progress));
    };
    updateThread();
    window.addEventListener("scroll", updateThread, { passive: true });
    window.addEventListener("resize", updateThread);
    return () => { observer.disconnect(); window.removeEventListener("scroll", updateThread); window.removeEventListener("resize", updateThread); };
  }, []);
  useEffect(() => {
    if (!activeProject) return;
    const key = e => { if (e.key === "Escape") setActiveProject(null); };
    document.addEventListener("keydown", key); document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", key); document.body.style.overflow = ""; };
  }, [activeProject]);
  const closeMenu = () => setMenuOpen(false);

  return <div className="portfolio-shell">
    <NeuronCanvas /><RobotGuide /><div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="ambient ambient-three" />
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Sonu Kumar home"><span className="wordmark-mark">s<span>.</span>k</span><span className="wordmark-label">AI ENGINEER <b>·</b> PORTFOLIO</span></a>
      <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation"><a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Projects</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#skills" onClick={closeMenu}>Toolkit</a><a href="#education" onClick={closeMenu}>Education</a><a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={14} /></a></nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-ambient-ring ring-a" /><div className="hero-ambient-ring ring-b" /><div className="hero-ambient-ring ring-c" />
        <div className="hero-status"><span className="status-pulse" /> OPEN TO AI/ML OPPORTUNITIES <span className="status-divider" /> INDIA · REMOTE</div>
        <div className="hero-layout">
          <div className="hero-center reveal">
            <p className="hero-kicker"><span>HELLO, WORLD</span><span className="kicker-line" /></p>
            <h1>Sonu <span className="hero-name-accent">Kumar</span><span className="hero-period">.</span></h1>
            <div className="hero-role"><span className="role-bracket">[</span> AI / ML ENGINEER <span className="role-separator">—</span> GENERATIVE AI <span className="role-bracket">]</span></div>
            <p className="hero-description">Building intelligent systems that connect <span>models, data, and products.</span> From retrieval-augmented generation to computer vision, I turn complex AI into practical software.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={16} /></a><a className="button button-ghost" href={profile.resume} download>Download résumé <ArrowDown size={15} /></a></div>
            <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github /> <span>GITHUB</span><ArrowUpRight /></a><i /><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /><span>LINKEDIN</span><ArrowUpRight /></a><i /><a href={`mailto:${profile.email}`}><Mail /><span>EMAIL</span><ArrowUpRight /></a></div>
          </div>

          <aside className="hero-portrait reveal" aria-label="Portrait of Sonu Kumar">
            <div className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
            <div className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
            <div className="portrait-frame">
              {!photoFailed ? (
                <img
                  className="portrait-image"
                  src="/sonu-passport.jpg"
                  alt="Sonu Kumar, AI and Machine Learning Engineer"
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <div className="portrait-fallback" role="img" aria-label="Sonu Kumar portrait placeholder">
                  <span>SK</span>
                  <small>Add sonu-passport.jpg to the public folder</small>
                </div>
              )}
              <span className="portrait-corner portrait-corner-tl" aria-hidden="true" />
              <span className="portrait-corner portrait-corner-tr" aria-hidden="true" />
              <span className="portrait-corner portrait-corner-bl" aria-hidden="true" />
              <span className="portrait-corner portrait-corner-br" aria-hidden="true" />
            </div>
            <div className="portrait-badge portrait-badge-top">
              <span className="portrait-badge-icon"><BrainCircuit size={15} /></span>
              <span><small>FOCUS AREA</small><strong>Applied AI</strong></span>
            </div>
            <div className="portrait-badge portrait-badge-bottom">
              <span className="portrait-live-dot" />
              <span><strong>AI / ML ENGINEER</strong><small>GenAI · RAG · Computer Vision</small></span>
            </div>
            <p className="portrait-caption"><span>01</span> HUMAN CREATIVITY. MACHINE INTELLIGENCE.</p>
          </aside>
        </div>
        <div className="hero-orbit-node node-a"><span /></div><div className="hero-orbit-node node-b"><span /></div><div className="hero-orbit-node node-c"><span /></div>
        <a className="scroll-cue" href="#about"><span className="scroll-cue-line" /> SCROLL TO EXPLORE <ArrowDown size={13} /></a>
        <div className="hero-index"><span>01</span><i /> 06 SECTIONS</div>
      </section>

      <section className="signal-strip"><div className="signal-strip-inner"><span className="signal-label">FOCUS AREAS</span><div className="signal-item"><BrainCircuit /> GENERATIVE AI</div><div className="signal-item"><Network /> RAG & RETRIEVAL</div><div className="signal-item"><ScanEye /> COMPUTER VISION</div><div className="signal-item"><Terminal /> PRODUCT ENGINEERING</div></div></section>

      <section className="section-wrap about-section section-pad" id="about">
        <div className="about-side"><SectionHeading eyebrow="01 / ABOUT ME" number="01" title={<>Engineering the space<br /><span className="muted-heading">between AI and impact.</span></>} /><div className="about-note"><span className="about-note-dot" /> Curious by nature. Practical by design.</div></div>
        <div className="about-content reveal"><p className="about-lead">I build complete AI applications — not just isolated models.</p><p>My work spans LLM-powered workflows, retrieval-augmented generation, semantic search, NLP, and computer vision. I connect AI components to APIs, databases, and web interfaces to turn technical concepts into usable products.</p><p>I care about clear system design, useful user experiences, and solutions that can be understood, maintained, and improved.</p><div className="about-facts"><div><span>01</span><strong>Product mindset</strong><small>From idea to application</small></div><div><span>02</span><strong>Applied AI</strong><small>LLMs, retrieval, vision</small></div><div><span>03</span><strong>Full-stack delivery</strong><small>APIs, data, interface</small></div></div><div className="about-code-note"><Terminal size={15} /><span>const approach = <b>"build · measure · improve"</b>;</span></div></div>
      </section>

      <section className="work-section section-pad" id="work"><div className="section-wrap"><SectionHeading eyebrow="02 / SELECTED WORK" number="02" title={<>Projects built to<br /><span className="muted-heading">solve real problems.</span></>} text="A selection of AI systems, automation workflows, and computer-vision experiments. Open any project to inspect the approach and contributions." /><div className="project-grid thread-grid"><svg className="thread-svg" viewBox="0 0 1000 1250" preserveAspectRatio="none" aria-hidden="true"><path className="thread-path-base" d="M500 0 C500 100 150 110 180 245 S800 330 790 465 S150 570 180 690 S820 800 790 930 S250 1030 500 1250"/><path className="thread-path-progress" d="M500 0 C500 100 150 110 180 245 S800 330 790 465 S150 570 180 690 S820 800 790 930 S250 1030 500 1250"/></svg>{projects.map((project, projectIndex) => { const Icon = project.icon; return <button style={{ "--project-index": projectIndex }} className={`project-card accent-${project.accent}`} key={project.id} onClick={() => setActiveProject(project)} aria-label={`View ${project.title} case study`}><div className="project-card-top"><span>CASE STUDY / {project.id}</span><span className="project-open"><ArrowUpRight /></span></div><div className="project-visual"><div className="project-visual-grid" /><div className="project-visual-orbit orbit-one" /><div className="project-visual-orbit orbit-two" /><div className="project-visual-icon"><Icon /></div><span className="project-visual-code">{project.id} <i /> SYSTEM</span></div><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-row">{project.stack.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-card-bottom"><span>{project.metric}</span><span className="project-card-link">EXPLORE <ArrowRight /></span></div></button>; })}</div><div className="work-footnote"><span>i</span> Repository and demo links are omitted where the résumé does not provide verified public URLs.</div></div></section>

      <section className="section-wrap experience-section section-pad" id="experience"><SectionHeading eyebrow="03 / THE JOURNEY" number="03" title={<>Experience shaped<br /><span className="muted-heading">by building.</span></>} text="A chronological view of professional experience and practical work, using the dates available in the résumé." /><div className="experience-timeline"><div className="timeline-rail" />{experience.map((item, index) => <article className="experience-item" key={`${item.company}-${item.role}`}><div className="experience-marker"><span>{String(index + 1).padStart(2, "0")}</span><i /></div><div className="experience-period">{item.period}</div><div className="experience-main"><div className="experience-title-row"><div><h3>{item.role}</h3><p>{item.company}</p></div><span className="experience-type">{item.kind}</span></div><ul>{item.points.map(point => <li key={point}><Check size={14} />{point}</li>)}</ul></div></article>)}</div></section>

      <section className="skills-section section-pad" id="skills"><div className="section-wrap"><SectionHeading eyebrow="04 / ENGINEERING TOOLKIT" number="04" title={<>A versatile AI<br /><span className="muted-heading">engineering toolkit.</span></>} text="Grouped by how tools fit into an end-to-end AI system, from model workflows to the product surface." /><div className="skills-grid">{skillGroups.map((group, index) => { const Icon = group.icon; return <article className="skill-card" key={group.title}><div className="skill-card-top"><span>0{index + 1} / CAPABILITY</span><Icon /></div><h3>{group.title}</h3><div className="skill-level"><div><span>WORKING TOOLKIT</span><b>{group.level}%</b></div><div className="skill-track"><span style={{ width: `${group.level}%` }} /></div></div><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>; })}</div></div></section>

      <section className="section-wrap education-section section-pad" id="education"><SectionHeading eyebrow="05 / FOUNDATIONS" number="05" title={<>Education &amp; learning</>} text="The academic foundation behind the engineering work." /><div className="education-grid">{education.map(item => <article className="education-card" key={item.degree}><div className="education-icon"><GraduationCap /></div><div className="education-main"><span className="education-label">ACADEMIC RECORD</span><h3>{item.degree}</h3><p>{item.school}</p><span className="education-period">{item.period}</span></div><div className="education-result"><strong>{item.result}</strong><small>RESULT</small></div></article>)}</div><div className="certification-line"><span>CONTINUOUS LEARNING</span><p>Advanced Data Science Certification · Introduction to AI/ML · Machine Learning &amp; Algorithms · Introduction to Linux</p></div></section>

      <section className="contact-section section-pad" id="contact"><div className="section-wrap contact-panel reveal"><div className="contact-grid-art" /><div className="contact-decoration"><Globe /></div><div className="contact-copy"><span className="eyebrow"><i /> 06 / LET’S CONNECT</span><h2>Have a problem<br />worth <span className="gradient-text">solving?</span></h2><p>Open to AI/ML Engineer and Generative AI opportunities where I can help turn complex ideas into useful products.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}?subject=${encodeURIComponent("AI/ML Engineering opportunity")}`}>Start a conversation <Send size={15} /></a><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={14} /></a></div></div><div className="contact-terminal"><div className="terminal-top"><span /><span /><span /><small>CONTACT.SYS</small></div><div className="terminal-body"><p><b>01</b> <span>STATUS</span> <strong className="terminal-online">AVAILABLE</strong></p><p><b>02</b> <span>ROLE</span> <strong>AI / ML ENGINEER</strong></p><p><b>03</b> <span>FOCUS</span> <strong>GENAI · RAG · CV</strong></p><div className="terminal-prompt"><i /> ready_to_build<span>_</span></div></div></div><div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ExternalLink /></a><a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub <ExternalLink /></a><a href={`tel:${profile.phone.replaceAll(" ", "")}`}><BriefcaseBusiness /> {profile.phone}</a></div></div></section>
    </main>

    <footer className="site-footer section-wrap"><a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">s<span>.</span>k</span></a><p>Designed and built with intent by Sonu Kumar.</p><span className="footer-built"><CircleDot size={11} /> BUILT WITH REACT</span><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={13} /></a><span className="footer-year">© {new Date().getFullYear()}</span></footer>

    {activeProject && <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setActiveProject(null); }}><section className={`project-modal accent-${activeProject.accent}`} role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close case study"><X /></button><span className="project-category">{activeProject.id} / {activeProject.category}</span><h2 id="modal-title">{activeProject.title}</h2><p className="modal-summary">{activeProject.summary}</p><p className="modal-details">{activeProject.detail}</p><h3>Contribution &amp; approach</h3><ul className="modal-contributions">{activeProject.points.map(point => <li key={point}><Check />{point}</li>)}</ul><h3>Technology</h3><div className="tag-row modal-tags">{activeProject.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="modal-disclaimer">Descriptions are based on the supplied résumé. Add verified repository links, screenshots, and evaluation details before publishing detailed case studies.</div></section></div>}
  </div>;
}
