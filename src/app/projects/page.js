"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./Projects.module.scss";

const projects = [
  {
    title: "Website Interativo",
    description: "React + animações dinâmicas.",
    details: "Este projeto demonstra animações complexas em React, incluindo parallax e hover effects.",
    website: "https://meuwebsite.com",
    demo: "https://demo.meuwebsite.com",
    github: "https://github.com/usuario/projeto1",
    technologies: ["React", "Next.js", "SCSS", "Framer Motion"],
  },
  {
    title: "Aplicação Next.js",
    description: "Portefólio minimalista.",
    details: "Portefólio criado para mostrar habilidades em computação gráfica e web moderna.",
    website: "https://portfolio.com",
    demo: "https://demo.portfolio.com",
    github: "https://github.com/usuario/projeto2",
    technologies: ["Next.js", "SCSS", "Framer Motion", "Google Fonts"],
  },
  {
    title: "Experiência Multimédia",
    description: "Computação gráfica.",
    details: "Experiências interativas em 3D, demonstrando computação gráfica avançada.",
    website: "#",
    demo: "#",
    github: "https://github.com/usuario/projeto3",
    technologies: ["Three.js", "WebGL", "React", "SCSS"],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className={styles.projects} pageKey="projects">
      <h2>Projetos</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`${styles.card} ${expanded === project ? styles.expanded : ""}`}
            layout
            onClick={() => setExpanded(project)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className={styles.glitch} data-text={project.title}>
              {project.title}
            </h3>
            <p>{project.description}</p>

            <AnimatePresence>
              {expanded === project && (
                <motion.div
                  className={styles.details}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>{project.details}</p>

                  <div className={styles.technologies}>
                    <h4>Tecnologias:</h4>
                    <ul>
                      {project.technologies.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.links}>
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                      Website
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                      Demo Live
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                      GitHub
                    </a>
                  </div>

                  <button className={styles.closeBtn} onClick={(e) => { e.stopPropagation(); setExpanded(null); }}>
                    Fechar
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
