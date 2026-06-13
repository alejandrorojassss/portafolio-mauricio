import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "../Styles/About.module.css";

const STATS = [
  { value: "8vo", label: "Semestre Ingeniería de Sistemas" },
  { value: "15+", label: "Tecnologías Dominadas" },
  { value: "10+", label: "Proyectos Desarrollados" },
  { value: "24/7", label: "Aprendizaje Continuo" },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.left} reveal`}>
          {" "}
          <p className={styles.eyebrow}>Quién soy</p>
          <h2 className={styles.title}>
            Construyo software,
            <br />
            <span className={styles.accent}>
              desde la idea hasta producción.
            </span>
          </h2>
          <p className={styles.body}>
            Soy estudiante de Ingeniería de Sistemas y desarrollador Full Stack,
            enfocado en crear aplicaciones modernas utilizando herramientas
            acordes a objetivos. Me interesa diseñar soluciones escalables,
            mantenibles y alineadas con buenas prácticas de arquitectura de
            software.
          </p>
          <p className={styles.body}>
            He trabajado en proyectos que abarcan desarrollo web, compiladores,
            algoritmos de inteligencia artificial, computación paralela,
            contenedorización con Docker, orquestación con Kubernetes e
            integración continua. Disfruto resolver problemas complejos y
            transformar requisitos técnicos en productos funcionales y
            eficientes.
          </p>
          <a href="#contact" className={styles.cta}>
            Hablemos de tu próximo proyecto →
          </a>
        </div>

        <div className={`${styles.right} reveal`}>
          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.terminal}>
            <div className={styles.terminalBar}>
              <span className={styles.dot1} />
              <span className={styles.dot2} />
              <span className={styles.dot3} />
              <span className={styles.terminalTitle}>ruiz.json</span>
            </div>
            <pre className={styles.terminalBody}>{`{
  "rol": "Full Stack Developer",
  "stack": ["React", ".NET", "PostgreSQL"],
  "arquitectura": "Clean + Hexagonal",
  "disponible": true
}`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
