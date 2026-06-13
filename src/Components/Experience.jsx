import { useScrollReveal } from "../hooks/useScrollReveal";
import { experience } from "../data/portfolio";
import styles from "../Styles/Experience.module.css";

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <p className={styles.eyebrow}>Trayectoria</p>
          <h2 className={styles.title}>Experiencia</h2>
        </div>

        <div className={styles.timeline}>
          {experience.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} reveal`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.line}>
                <div className={styles.dot} />
                {i < experience.length - 1 && (
                  <div className={styles.connector} />
                )}
              </div>
              <div className={styles.content}>
                <span className={styles.period}>{item.period}</span>
                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.company}>{item.company}</p>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
