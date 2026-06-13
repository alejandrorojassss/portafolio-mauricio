import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "../Styles/About.module.css";

const STATS = [
  { value: "7vo", label: "Semestre Ingeniería de Sistemas" },
  { value: "7+", label: "Tecnologías Dominadas" },
  { value: "8+", label: "Proyectos Desarrollados" },
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
            Desaroollo soluciones,
            <br />
            <span className={styles.accent}>
              Que combien aprendizaje y solucion.
            </span>
          </h2>
          <p className={styles.body}>
            Soy estudiante de Ingeniería de Sistemas con interés en el desarrollo de
            software y la construcción de soluciones tecnológicas que generen valor.
            Me enfoco en el desarrollo Full Stack, participando en proyectos que me
            han permitido fortalecer mis habilidades tanto en frontend como en backend,
            además de adquirir experiencia en bases de datos y arquitecturas modernas.
          </p>
          <p className={styles.body}>
            He trabajado en proyectos académicos relacionados con desarrollo web,
            microservicios, inteligencia artificial, análisis de algoritmos y
            computación en la nube. Disfruto aprender nuevas tecnologías, enfrentar
            desafíos técnicos y transformar ideas en aplicaciones funcionales,
            escalables y mantenibles, manteniendo siempre una actitud de aprendizaje
            continuo y mejora constante.
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
              <span className={styles.terminalTitle}>Alejandro.json</span>
            </div>
            <pre className={styles.terminalBody}>{`{
  "nombre": "Mauricio Alejandro Rojas",
  "rol": "Estudiante de Ingeniería de Sistemas",
  "enfoque": "Full Stack Development",
  "stack": ["React","Node.js","Spring Boot","PostgreSQL"],
  "interes": "Arquitectura de Software",
  "disponible": true
}`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
