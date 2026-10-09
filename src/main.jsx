import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Award,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  Sparkles,
  Phone,
  ExternalLink,
  Send,
  Loader2,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import "./styles.css";

// Personal details shown throughout the portfolio.
const profile = {
  name: "Surya Teja Katta",
  role: "AI/ML & Software Developer",
  tagline: "Building intelligent, useful software where AI meets the web.",
  location: "Pekeru, West Godavari, Andhra Pradesh — 534320",
  email: "kattasuryateja19@gmail.com",
  phone: "+91 9491064509",
  github: "https://github.com/Surya0604005",
  linkedin: "https://www.linkedin.com/in/surya-teja-katta-816614300",
  youtube: "https://youtube.com/@mrblue-4676",
  instagram: "https://www.instagram.com/heyyy_blue/",
};

// Technical skills and technologies.
const skills = [
  {
    name: "React.js",
    type: "Frontend",
    level: 92,
    note: "Component architecture, hooks, responsive interfaces and modern UI.",
  },
  {
    name: "JavaScript",
    type: "Programming",
    level: 94,
    note: "ES6+, async patterns, browser APIs and interactive applications.",
  },
  {
    name: "Python",
    type: "Programming",
    level: 90,
    note: "FastAPI, automation, data scripting and AI/ML workflows.",
  },
  {
    name: "Java",
    type: "Programming",
    level: 78,
    note: "OOP, DSA and backend fundamentals.",
  },
  {
    name: "Node.js",
    type: "Backend",
    level: 88,
    note: "REST APIs, authentication, Socket.IO and server-side applications.",
  },
  {
    name: "FastAPI",
    type: "Backend",
    level: 86,
    note: "Python APIs, CRUD services, authentication and application backends.",
  },
  {
    name: "Express.js",
    type: "Backend",
    level: 84,
    note: "Node.js APIs, middleware, routes and backend services.",
  },
  {
    name: "HTML5 / CSS3",
    type: "Web",
    level: 96,
    note: "Semantic markup, responsive layouts, animations and design systems.",
  },
  {
    name: "MySQL",
    type: "Database",
    level: 86,
    note: "Relational schemas, queries, CRUD APIs and application data.",
  },
  {
    name: "MongoDB",
    type: "Database",
    level: 82,
    note: "Document models, aggregation and full-stack application data.",
  },
  {
    name: "Firebase",
    type: "Platform",
    level: 80,
    note: "Authentication and application services.",
  },
  {
    name: "REST APIs",
    type: "Architecture",
    level: 88,
    note: "API integration, CRUD workflows and frontend-backend communication.",
  },
  {
    name: "Socket.IO",
    type: "Realtime",
    level: 76,
    note: "Realtime messaging, online status and interactive communication.",
  },
  {
    name: "AI / ML",
    type: "Specialization",
    level: 80,
    note: "Machine learning fundamentals, deep learning and practical AI projects.",
  },
  {
    name: "NumPy / Pandas",
    type: "Data",
    level: 78,
    note: "Data manipulation, analysis and Python-based workflows.",
  },
  {
    name: "Git / GitHub",
    type: "Tools",
    level: 90,
    note: "Version control, repositories, collaboration and deployment workflows.",
  },
  {
    name: "Postman",
    type: "Tools",
    level: 84,
    note: "API testing, debugging and backend development.",
  },
  {
    name: "Vercel",
    type: "Deployment",
    level: 78,
    note: "Deploying modern frontend and full-stack web projects.",
  },
  {
    name: "Tailwind CSS",
    type: "UI",
    level: 88,
    note: "Utility-first responsive styling and design systems.",
  },
  {
    name: "Bootstrap",
    type: "UI",
    level: 82,
    note: "Responsive layouts and rapid interface development.",
  },
  {
    name: "PWA",
    type: "Web",
    level: 72,
    note: "Progressive web application concepts and responsive experiences.",
  },
];

const projects = [
  {
    title: "GreenBasket",
    category: "Full-Stack",
    year: "2026",
    description:
      "Full-stack grocery shopping platform with product management, wishlist, cart, checkout, Google Sign-In and REST APIs.",
    tags: ["React", "FastAPI", "MySQL", "Firebase"],
    image: "/images/projects/greenbasket.jpg",
    live: "https://greenbasket-ashen.vercel.app",
    code: "https://github.com/Surya0604005/grocery-store",
  },
  {
    title: "Happy Paws - Pet Shop",
    category: "Full-Stack",
    year: "2026",
    description:
      "A modern pet-shop experience featuring products, services, grooming, vet care, adoption support and responsive shopping interfaces.",
    tags: ["React", "Vite", "CSS", "Responsive UI"],
    image: "/images/projects/happy-paws.jpg",
    live: "https://happy-paws-react-z6qp.vercel.app/",
    code: "https://github.com/Surya0604005/Happy-paws-React",
  },
  {
    title: "iShowJobs",
    category: "Full-Stack",
    year: "2026",
    description:
      "A job discovery platform with structured job listings, search and filtering, company information and a practical recruitment-focused interface.",
    tags: ["JavaScript", "MySQL", "REST API", "Web"],
    image: "/images/projects/ishowjobs.jpg",
    live: "https://ishowjobs.onrender.com",
    code: "https://github.com/Surya0604005/iShowJobs",
  },
  {
    title: "Free Social Media Image Resizer",
    category: "Tools",
    year: "2026",
    description:
      "Free browser tool for resizing images for WhatsApp, Instagram, YouTube and LinkedIn using preset dimensions and Canvas API processing.",
    tags: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    image: "/images/projects/social-media-resizer.jpg",
    live: "https://surya0604005.github.io/free-social-media-image-resizer/",
    code: "https://github.com/Surya0604005/free-social-media-image-resizer",
  },
  {
    title: "Game Hub",
    category: "Frontend",
    year: "2026",
    description:
      "A lightweight browser game collection featuring Tic-Tac-Toe, Sliding Puzzle and Rock-Paper-Scissors.",
    tags: ["JavaScript", "CSS3", "Game UI"],
    image: "/images/projects/game-hub.jpg",
    live: "https://surya0604005.github.io/awesome-game-hub/",
    code: "https://github.com/Surya0604005/awesome-game-hub",
  },
  {
    title: "Pixel Paint",
    category: "Frontend",
    year: "2026",
    description:
      "Interactive browser-based pixel art editor with drawing controls, undo/redo, erasing, clearing and image download.",
    tags: ["JavaScript", "Canvas API", "CSS3"],
    image: "/images/projects/pixel-paint.jpg",
    live: "https://surya0604005.github.io/pixel-paint/",
    code: "https://github.com/Surya0604005/pixel-paint",
  },
];

// Education, internships and the learning journey.
const journey = [
  [
    "2026",
    "Junior Developer Intern — Credencer Technologies",
    "Internship",
    "Worked with modern frontend and backend technologies, API integration, debugging, feature development and real-world software workflows.",
  ],
  [
    "2024–2025",
    "Full Stack Python & ML Intern — Talent Shine India",
    "Internship",
    "Completed a 240-hour internship focused on Full Stack Python Development and Machine Learning, with practical development and database work.",
  ],
  [
    "2022–2026",
    "B.Tech — Artificial Intelligence & Machine Learning",
    "Education",
    "D.N.R. College of Engineering, Bhimavaram — building a foundation across AI/ML, software engineering, databases and web development.",
  ],
  [
    "2024–Present",
    "Building by Doing",
    "Learning",
    "Turning ideas into working applications, developer tools, creative web experiences and practical AI/ML projects.",
  ],
];

// Certificates and internship credentials.
const certifications = [
  {
    title: "NPTEL — Cloud Computing",
    issuer: "NPTEL",
    description: "Certificate",
    year: "2026",
    link: "/certificates/nptel.pdf",
  },
  {
    title: "Generative AI",
    issuer: "NxtWave",
    description: "Certificate",
    year: "2026",
    link: "/certificates/nextwave.pdf",
  },
  {
    title: "Python Programming",
    issuer: "Infosys Springboard",
    description: "Certificate",
    year: "2026",
    link: "https://www.linkedin.com/posts/surya-teja-katta-816614300_celebrating-my-ai-software-engineering-ugcPost-7293640617442635778-xcnX/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7293640618579251200&highlightedUpdateType=SOCIAL_SHARE&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAAEz6OJIB9nlMe2mKIkZ8w5XNtFscdi21qSo",
  },
  {
    title: "DBMS",
    issuer: "Infosys Springboard",
    description: "Certificate",
    year: "2026",
    link: "https://www.linkedin.com/posts/surya-teja-katta-816614300_celebrating-my-ai-software-engineering-ugcPost-7293640617442635778-xcnX/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7293640618579251200&highlightedUpdateType=SOCIAL_SHARE&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAAEz6OJIB9nlMe2mKIkZ8w5XNtFscdi21qSo",
  },
  {
    title: "Agile Development and Scrum",
    issuer: "Infosys Springboard",
    description: "Certificate",
    year: "2026",
    link: "https://www.linkedin.com/posts/surya-teja-katta-816614300_celebrating-my-ai-software-engineering-ugcPost-7293640617442635778-xcnX/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7293640618579251200&highlightedUpdateType=SOCIAL_SHARE&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAAEz6OJIB9nlMe2mKIkZ8w5XNtFscdi21qSo",
  },
  {
    title: "Full Stack Python & ML Internship",
    issuer: "Talent Shine India Pvt. Ltd.",
    description: "240-hour internship",
    year: "2025",
    link: "/certificates/full-stack.pdf",
  },
];
// Keep this section as a snapshot of the areas currently being explored.
const exploring = [
  ["Generative AI", "Building practical AI-powered applications", "60%"],
  ["AI / ML Engineering", "Turning ML knowledge into useful software", "58%"],
  ["System Design", "Learning scalable application architecture", "48%"],
  [
    "Advanced React",
    "Performance, architecture and polished interfaces",
    "70%",
  ],
  [
    "Backend Engineering",
    "APIs, authentication, databases and deployment",
    "65%",
  ],
  ["Cloud & Deployment", "Strengthening production deployment skills", "45%"],
];

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHead({ num, label, title, sub }) {
  return (
    <Reveal className="section-head">
      <div className="eyebrow">
        ({num} — {label})
      </div>
      <h2>
        {title}
        <br />
        <span>{sub}</span>
      </h2>
    </Reveal>
  );
}

// Main single-page portfolio application.
function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        { publicKey },
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS contact form error:", error);
      window.alert(
        "Sorry, your message could not be sent right now. Please try again or email me directly.",
      );
    } finally {
      setSending(false);
    }
  };

  const nav = ["About", "Skills", "Work", "Journey", "Contact"];

  return (
    <div className="app">
      <div className="grain" />
      <Cursor />
      <nav className={scrolled ? "nav scrolled" : "nav"}>
        <a href="#top" className="brand">
          <span className="brand-mark">
            <span className="brand-star">✦</span>
            <span className="brand-short">STK.</span>
            <sup>°</sup>
            <span className="brand-full-name">SURYA TEJA KATTA</span>
          </span>
        </a>
        <div className="nav-links">
          {nav.map((x) => (
            <a key={x} href={"#" + x.toLowerCase()}>
              {x}
            </a>
          ))}
        </div>
        <a className="talk" href="#contact">
          LET'S TALK <ArrowUpRight size={14} />
        </a>
        <button className="menu-btn" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {menu && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            {nav.map((x, i) => (
              <motion.a
                key={x}
                href={"#" + x.toLowerCase()}
                onClick={() => setMenu(false)}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {x}
              </motion.a>
            ))}
            <a
              className="mobile-cta"
              href="#contact"
              onClick={() => setMenu(false)}
            >
              LET'S TALK <ArrowUpRight />
            </a>
            <div className="mobile-location">
              <MapPin size={13} /> {profile.location}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="top" className="hero">
          <div className="orb amber-orb" />
          <div className="orb violet-orb" />
          <div className="orb emerald-orb" />
          <motion.div className="hero-content" style={{ opacity: heroOpacity }}>
            <div className="availability">
              <i /> AVAILABLE FOR NEW OPPORTUNITIES
            </div>
            <div className="eyebrow hero-eyebrow">
              {profile.name.toUpperCase()} — {profile.role.toUpperCase()}
            </div>
            <h1>
              <RevealLine text="CRAFTING" />
              <RevealLine text="DIGITAL" stroke />
              <RevealLine text="EXPERIENCES" accent />
            </h1>
            <p className="hero-tag">
              I build practical software across AI, web and backend — from idea
              to working product.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#work">
                EXPLORE PROJECTS <ArrowUpRight />
              </a>
              <a
                className="btn glass"
                href="/public/resume/Surya_Teja_Resume__01.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME <ArrowUpRight />
              </a>
              <a className="btn glass" href="#contact">
                GET IN TOUCH
              </a>
            </div>
            <div className="chips">
              {["React", "Node.js", "Python", "AI / ML", "System Design"].map(
                (x) => (
                  <span key={x}>{x}</span>
                ),
              )}
            </div>
          </motion.div>
          <a className="scroll-cue" href="#about">
            <span>SCROLL</span>
            <ArrowDown />
          </a>
        </section>

        <div className="marquee">
          <div className="marquee-track">
            {[
              ...[
                "Full-Stack Development",
                "React",
                "Node.js",
                "Python",
                "Java",
                "UI Engineering",
                "AI / ML",
                "MongoDB",
              ],
              ...[
                "Full-Stack Development",
                "React",
                "Node.js",
                "Python",
                "Java",
                "UI Engineering",
                "AI / ML",
                "MongoDB",
              ],
            ].map((x, i) => (
              <React.Fragment key={i}>
                <span>{x}</span>
                <b>◆</b>
              </React.Fragment>
            ))}
          </div>
        </div>

        <section id="about" className="section">
          <SectionHead
            num="01"
            label="ABOUT ME"
            title="Simple to look at."
            sub="Obsessive underneath."
          />
          <div className="about-grid">
            <Reveal className="portrait">
              <div className="portrait-image">
                <img src="/images/profile/profile.jpg" alt="Surya Teja Katta" />
              </div>
              <div className="portrait-badge">
                <strong>AI/ML</strong>
                <small>+ SOFTWARE</small>
              </div>
            </Reveal>
            <Reveal className="about-copy">
              <div className="about-identity">
                <h3>SURYA TEJA KATTA</h3>
                <span>AI/ML &amp; SOFTWARE DEVELOPER</span>
              </div>
              <p className="lead">
                I'm a B.Tech Artificial Intelligence & Machine Learning graduate
                who enjoys turning ideas into polished, useful digital products.
              </p>
              <p>
                I work across frontend and backend development, combining clean
                interfaces with practical APIs, databases and authentication. I
                learn fastest by building real projects.
              </p>
              <p>
                From creative browser tools to full-stack management systems, I
                care about the details that make software feel simple, fast and
                dependable.
              </p>
              <div className="location">
                <MapPin size={16} /> Based in India — working worldwide
              </div>
              <div className="stats">
                <Stat value="5+" label="Core project domains" />
                <Stat value="10+" label="Technologies used" />
                <Stat value="∞" label="Things still learning" />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="section">
          <SectionHead
            num="02"
            label="SKILLS & TECHNOLOGIES"
            title="The toolkit,"
            sub="sharpened daily."
          />
          <div className="skills-grid">
            {skills.map((s, i) => (
              <Skill key={s.name} skill={s} i={i} />
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <SectionHead
            num="03"
            label="FEATURED WORK"
            title="Selected projects,"
            sub="built to last."
          />
          <div className="filters">
            {["All", "Full-Stack", "Frontend", "Tools"].map((x) => (
              <button
                key={x}
                className={filter === x ? "active" : ""}
                onClick={() => setFilter(x)}
              >
                {x}
              </button>
            ))}
          </div>
          <motion.div layout className="projects-grid">
            {filtered.map((p, i) => (
              <Project key={p.title} p={p} index={i} />
            ))}
          </motion.div>
        </section>

        <section id="journey" className="section">
          <SectionHead
            num="04"
            label="MY JOURNEY"
            title="Building forward,"
            sub="one project at a time."
          />
          <div className="timeline">
            {journey.map((j, i) => (
              <Reveal key={j[0] + j[1]} className="timeline-item">
                <div className="node" />
                <div className="year">{j[0]}</div>
                <h3>{j[1]}</h3>
                <div className="org">{j[2]}</div>
                <p>{j[3]}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHead
            num="05"
            label="CERTIFICATIONS & ACHIEVEMENTS"
            title="Proof of work,"
            sub="on the record."
          />
          <div className="cert-list">
            <section className="section">
              <SectionHead
                num="05"
                label="CERTIFICATIONS & ACHIEVEMENTS"
                title="Proof of work,"
                sub="on the record."
              />

              <div className="cert-list">
                {certifications.map((certificate) => (
                  <div className="certificate-row" key={certificate.title}>
                    <div className="certificate-icon">
                      <Award size={23} strokeWidth={1.8} />
                    </div>

                    <div className="certificate-info">
                      <h3>{certificate.title}</h3>
                      <p>
                        {certificate.issuer} · {certificate.description}
                      </p>
                    </div>

                    <span className="certificate-year">{certificate.year}</span>

                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-arrow"
                      aria-label={`View ${certificate.title}`}
                    >
                      <ArrowUpRight size={21} />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section id="exploring" className="explore-wrap section">
          <div className="explore-panel">
            <div className="explore-orb one" />
            <div className="explore-orb two" />
            <div className="explore-head">
              <Sparkles />
              <div className="eyebrow">( 06 — CURRENTLY EXPLORING )</div>
            </div>
            <h2>
              Always mid-curve
              <br />
              <span>on something new.</span>
            </h2>
            <p>
              The experiments, systems and rabbit holes that keep the next
              project sharper.
            </p>
            <div className="explore-grid">
              {exploring.map((x, i) => (
                <div className="explore-card" key={x[0]}>
                  <h3>{x[0]}</h3>
                  <small>{x[1]}</small>
                  <div className="progress">
                    <i style={{ width: x[2] }} />
                  </div>
                  <span>{x[2]} in progress</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <SectionHead
            num="07"
            label="CONTACT"
            title="Let's build"
            sub="something rare."
          />
          <div className="contact-grid">
            <div className="contact-copy">
              <p className="contact-lead">
                Have a project, a role, or just a good idea? My inbox is open.
              </p>
              <a className="email-link" href={"mailto:" + profile.email}>
                <Mail /> {profile.email} <ArrowUpRight />
              </a>
              <div className="location">
                <MapPin /> {profile.location}
              </div>
              <div className="location">
                <Phone /> {profile.phone}
              </div>
              <div className="socials">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin /> LinkedIn
                </a>
                <a href={profile.youtube} target="_blank" rel="noreferrer">
                  ▶ YouTube
                </a>
                <a href={profile.instagram} target="_blank" rel="noreferrer">
                  ◎ Instagram
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={submit}>
              <label>
                YOUR NAME
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </label>
              <label>
                YOUR EMAIL
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                MESSAGE
                <textarea
                  required
                  rows="5"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                />
              </label>
              <button className="submit" disabled={sending}>
                {sending ? (
                  <>
                    <Loader2 className="spin" /> SENDING…
                  </>
                ) : sent ? (
                  <>
                    <Check /> MESSAGE SENT
                  </>
                ) : (
                  <>
                    SEND MESSAGE <Send />
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <a className="brand" href="#top">
            <span className="brand-mark">
              <span className="brand-star">✦</span>
              <span>STK.</span>
              <sup>°</sup>
            </span>
          </a>
          <div>
            {nav.map((x) => (
              <a key={x} href={"#" + x.toLowerCase()}>
                {x}
              </a>
            ))}
          </div>
          <a className="backtop" href="#top">
            <ArrowUp />
          </a>
        </div>
        <div className="watermark">SURYA</div>
        <div className="footer-bottom">
          <span>© 2026 Surya Teja Katta — Built with React</span>
          <span>{profile.location} · Always learning</span>
        </div>
      </footer>
    </div>
  );
}

function RevealLine({ text, stroke, accent }) {
  return (
    <span className="line-wrap">
      <motion.span
        className={(stroke ? "text-stroke " : "") + (accent ? "accent" : "")}
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.05, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}
function Stat({ value, label }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
function Skill({ skill, i }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div ref={ref} className="skill" whileHover={{ y: -4 }}>
      <div className="skill-top">
        <span>{skill.type}</span>
        <b>{skill.level}%</b>
      </div>
      <h3>{skill.name}</h3>
      <p>{skill.note}</p>
      <div className="level">
        <motion.i
          initial={{ width: 0 }}
          animate={inView ? { width: skill.level + "%" } : {}}
          transition={{ duration: 1.2, delay: 0.15 + i * 0.03 }}
        />
      </div>
    </motion.div>
  );
}
function Project({ p, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="project"
    >
      {/* Project artwork is stored in /public/images/projects. */}
      <div className="project-visual">
        <img
          src={p.image}
          alt={`${p.title} project preview`}
          className="project-image"
          loading="lazy"
        />
        <div className="project-shade" />
        <span className="category">{p.category}</span>

        {/* These buttons appear on hover on desktop and stay visible on touch devices. */}
        <div className="project-links">
          <a
            href={p.code}
            target="_blank"
            rel="noreferrer"
            aria-label={`${p.title} source code`}
          >
            <Github size={17} />
          </a>
          {p.live !== "#" && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.title} live project`}
            >
              <ExternalLink size={17} />
            </a>
          )}
        </div>
      </div>

      <div className="project-meta">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <small>{p.year}</small>
      </div>
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <div className="tags">
        {p.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </motion.article>
  );
}
function Cursor() {
  const x = useMotionValue(-100),
    y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 32 }),
    sy = useSpring(y, { stiffness: 350, damping: 32 });
  useEffect(() => {
    const f = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", f);
    return () => window.removeEventListener("pointermove", f);
  }, []);
  return <motion.div className="cursor" style={{ x: sx, y: sy }} />;
}

createRoot(document.getElementById("root")).render(<App />);
