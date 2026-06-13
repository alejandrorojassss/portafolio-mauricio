import { useScrollReveal } from "../hooks/useScrollReveal";
import { skills } from "../data/portfolio";
import styles from "../Styles/Skills.module.css"

const CATEGORIES = [
  { key: "frontend", label: "Frontend", icon: "🎨" },
  { key: "backend", label: "Backend", icon: "⚙️" },
  { key: "tools", label: "DevOps & Tools", icon: "🛠️" },
  { key: "languages", label: "Lenguajes", icon: "📐" },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <p className={styles.eyebrow}>Stack técnico</p>
          <h2 className={styles.title}>Habilidades</h2>
        </div>

        <div className={styles.grid}>
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.key}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.label}</h3>
              </div>
              <div className={styles.tags}>
                {skills[cat.key].map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
