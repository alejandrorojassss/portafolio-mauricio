import { useState, useEffect } from "react";
import FloatingCode from "./FloatingCode";
import styles from "../Styles/Hero.module.css";

const ROLES = [
  "Ingeniero de Sistemas",
  "Frontend Developer",
  "React Engineer",
  "Clean Architecture",
  "Full Stack Dev",
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    setText(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero}>
      <FloatingCode />

      <div className={styles.content}>
        <p className={styles.greeting}>Hola, soy</p>

        <h1 className={styles.name}>
          Juan Ruiz
          <span className={styles.dot}>.</span>
        </h1>

        <div className={styles.roleWrapper}>
          <span className={styles.role}>{role}</span>
          <span className={styles.cursor}>|</span>
        </div>

        <p className={styles.tagline}>
          Construyo soluciones que{" "}
          <span className={styles.highlight}>importan</span> —<br />
          con creatividad y atención al detalle.
        </p>

        <div className={styles.actions}>
          <button
            className={styles.btnPrimary}
            onClick={() => scrollTo("projects")}
          >
            Ver proyectos
          </button>
          <button
            className={styles.btnSecondary}
            onClick={() => scrollTo("contact")}
          >
            Contacto
          </button>
        </div>

        <div className={styles.socials}>
          <a
            href="https://github.com/JuanRuiz1012/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-ruiz-4088a9267"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <LinkedinIcon />
          </a>
          <a  href="https://mail.google.com/mail/?view=cm&to=juanolopez1012@gmail.com" target= "_blank" rel="noopener noreferrer" className={styles.social}>
            <MailIcon />
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator} onClick={() => scrollTo("about")}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
