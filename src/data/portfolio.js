export const skills = {
  frontend: [
    "React",
    "React Native",
    "JavaScript",
    "TypeScript",
    "Material UI",
    "Tailwind CSS",
    "CSS / SCSS",
    "HTML",
  ],
  backend: [
    ".NET",
    "C#",
    "Python",
    "Spring Boot",
    "PostgreSQL",
    "MySQL",
    "Clean Architecture",
    "Hexagonal Architecture",
    "Component Based Architecture",
    "MediatR",
    "Microservices",
  ],
  tools: ["Git", "Docker", "Kubernetes", "GitHub Actions", "Vite", "REST APIs"],
  languages: ["Python", "C++", "Java", "SQL", "JavaScript", "C#", "TypeScript"],
};

export const projects = [
  {
    id: 1,
    name: "StreamLang-UV",
    description:
      "Intérprete funcional construido sobre #lang eopl (Racket/DrRacket 8.10). Incluye tipo de datos algebraicos, inferencia de scope, y compatibilidad estricta con SLLGEN.",
    tags: ["Racket", "EOPL", "Compiladores", "DrRacket"],
    link: "#",
    featured: true,
    image: "/src/assets/imagen1Portfolio.png", // ← AGREGA ESTO
  },
  {
    id: 2,
    name: "Mancala Kalah Engine",
    description:
      "Motor paralelo para Kalah(6,4) desplegado en Kubernetes. Stack: motor C++/OpenMP, backend Python/FastAPI, frontend HTML/JS, CI/CD con GitHub Actions.",
    tags: ["C++", "OpenMP", "FastAPI", "Kubernetes", "Docker"],
    link: "#",
    featured: true,
    image: "/public/imagen2Portfolio.png", // ← AGREGA ESTO
  },
  {
    id: 3,
    name: "Módulos Frontend ERP",
    description:
      "Arquitectura de módulos React (container + grid + detail + custom hooks) integrados con backend .NET/PostgreSQL. Incluye DocumentType, Menu/SubMenu, ColorParams.",
    tags: ["React", "Material UI", "REST", ".NET", "PostgreSQL"],
    link: "#",
    featured: true,
    image: "/src/assets/imagen3Portfolio.png", // ← AGREGA ESTO
  },
  {
    id: 4,
    name: "MiniLang",
    description:
      "Mini-lenguaje tipado con intérprete, verificador de tipos y suite de tests en DrRacket. Resolución de conflictos de scope, void, andmap y provide.",
    tags: ["Racket", "Type Checking", "Intérprete"],
    link: "#",
    featured: false,
  },
  {
    id: 5,
    name: "ML Workshop — FIFA 23",
    description:
      "Modelos de regresión y clasificación sobre datos de FIFA 23. Decision Trees, KNN, Random Forest con GridSearchCV usando scikit-learn en Jupyter.",
    tags: ["Python", "scikit-learn", "Machine Learning", "Jupyter"],
    link: "#",
    featured: false,
  },
  {
    id: 6,
    name: "PostgreSQL Hexagonal Migration",
    description:
      "Migración de FK nullable-first para ColorConfiguration en arquitectura hexagonal .NET. Cambios en entidad, DTOs, command handler y repositorio.",
    tags: [".NET", "PostgreSQL", "Clean Architecture", "EF Core"],
    link: "#",
    featured: false,
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Q-Services",
    period: "2024 — Presente",
    desc: "Full Stack Developer con experiencia en Arquitectura Limpia, Microservicios y API Gateway. Desarrollo aplicaciones escalables con React, .NET y PostgreSQL, implementando frontend modular, componentes reutilizables e integración de servicios REST.",
  },
  {
    role: "Estudiante — Ingeniería de Sistemas",
    company: "Universidad del Valle",
    period: "2023 — Presente",
    desc: " Estudiante de octavo semestre de Ingeniería de Sistemas, con experiencia en desarrollo Full Stack, bases de datos y cloud. Destaco por pensamiento analítico, aprendizaje rápido, trabajo colaborativo y orientación a resultados.",
  },
];
