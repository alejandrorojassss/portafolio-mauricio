import { useState, useRef, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects } from "../data/portfolio";
import styles from "../Styles/Projects.module.css";

export default function Projects() {
  const ref = useScrollReveal();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const featured = projects.filter((p) => p.featured);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const container = scrollRef.current;
    container?.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 500;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className={styles.section} ref={ref}>
      <div className={styles.headerContainer}>
        <div className={`${styles.header} reveal`}>
          <p className={styles.eyebrow}>Trabajo destacado</p>
          <h2 className={styles.title}>Proyectos</h2>
        </div>

        <div className={styles.controls}>
          <button
            className={`${styles.scrollBtn} ${!canScrollLeft ? styles.disabled : ""}`}
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft />
          </button>
          <button
            className={`${styles.scrollBtn} ${!canScrollRight ? styles.disabled : ""}`}
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.carousel} ref={scrollRef}>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className={styles.dotsContainer}>
        {featured.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === 0 ? styles.active : ""}`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    shadowIntensity: 0.3,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calcular ángulos basados en distancia del mouse
    const rotateY = (mouseX / rect.width) * 25;
    const rotateX = -(mouseY / rect.height) * 25;

    // Calcular escala basada en distancia
    const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
    const maxDistance =
      Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;
    const scale = 1 + (1 - Math.min(distance / maxDistance, 1)) * 0.1;

    // Calcular intensidad de sombra
    const shadowIntensity =
      0.3 + (1 - Math.min(distance / maxDistance, 1)) * 0.7;

    setTransform({
      rotateX,
      rotateY,
      scale,
      shadowIntensity,
    });
  };

  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      shadowIntensity: 0.3,
    });
  };

  return (
    <article
      ref={cardRef}
      className={styles.card3d}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1200px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
        boxShadow: `
          0 ${20 * transform.shadowIntensity}px ${60 * transform.shadowIntensity}px rgba(0, 255, 136, ${0.15 * transform.shadowIntensity}),
          0 ${30 * transform.shadowIntensity}px ${80 * transform.shadowIntensity}px rgba(0, 0, 0, ${0.3 * transform.shadowIntensity})
        `,
      }}
    >
      <div className={styles.cardTop}>
        <FolderIcon />
        <div className={styles.cardLinks}>
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
              aria-label="Ver proyecto"
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.cardName}>{project.name}</h3>
      <p className={styles.cardDesc}>{project.description}</p>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function FolderIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
