"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.scss";

const PROJECTS = [
  {
    title: "Website Interativo",
    desc: "React + animações dinâmicas.",
    details: "Parallax, hover effects e micro-interações em React + Framer-motion.",
    website: "https://meuwebsite.com",
    demo: "https://demo.meuwebsite.com",
    github: "https://github.com/usuario/projeto1",
    tech: ["React", "Next.js", "SCSS", "Framer Motion"],
  },
  {
    title: "Aplicação Next.js",
    desc: "Portefólio minimalista.",
    details: "Web moderna, performance otimizada e animações 60 fps.",
    website: "https://portfolio.com",
    demo: "https://demo.portfolio.com",
    github: "https://github.com/usuario/projeto2",
    tech: ["Next.js", "SCSS", "Framer Motion"],
  },
  {
    title: "Experiência Multimédia",
    desc: "Computação gráfica 3D.",
    details: "Cenas interativas com Three.js e WebGL.",
    website: "#",
    demo: "#",
    github: "https://github.com/usuario/projeto3",
    tech: ["Three.js", "WebGL", "React"],
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.projects} pageKey="projects">
      <h2 className={styles.title}>Projetos</h2>

      <ul className={styles.list}>
        {PROJECTS.map((p, i) => (
          <Item key={p.title} data={p} index={i} isOpen={openIndex === i} setOpen={() => setOpenIndex(openIndex === i ? null : i)} />
        ))}
      </ul>
    </section>
  );
}

function Item({ data, index, isOpen, setOpen }) {
  return (
    <li className={styles.item}>
      <button className={styles.header} onClick={setOpen} aria-expanded={isOpen}>
        <span className={styles.index}>{"0" + (index + 1)}</span>
        <div className={styles.info}>
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
        </div>
        <motion.div
          className={styles.chevron}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.content}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className={styles.inner}>
              <p>{data.details}</p>

              <div className={styles.tech}>
                {data.tech.map((t) => (
                  <span key={t} className={styles.chip}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.links}>
                <a href={data.website} target="_blank" rel="noreferrer" className={styles.btn}>
                  Website
                </a>
                <a href={data.demo} target="_blank" rel="noreferrer" className={styles.btn}>
                  Demo
                </a>
                <a href={data.github} target="_blank" rel="noreferrer" className={styles.btn}>
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}