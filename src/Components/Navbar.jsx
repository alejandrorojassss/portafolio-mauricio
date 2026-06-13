import { useState, useEffect } from "react";
import styles from "../Styles/Navbar.module.css"

const NAV_ITEMS = [
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoBracket}>&lt;</span>
          Rojas
          <span className={styles.logoBracket}>/&gt;</span>
        </a>

        <nav className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menú"
        >
          <span
            className={menuOpen ? styles.burgerLineOpen1 : styles.burgerLine}
          />
          <span
            className={menuOpen ? styles.burgerLineOpen2 : styles.burgerLine}
          />
          <span
            className={menuOpen ? styles.burgerLineOpen3 : styles.burgerLine}
          />
        </button>
      </div>
    </header>
  );
}
