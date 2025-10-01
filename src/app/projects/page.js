"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoModal from "@/components/VideoModal/VideoModal"; // ← import novo
import styles from "./Projects.module.scss";

const PROJECTS = [
  {
    title: "Sistema POS Industrial (Goldylocks)",
    desc: "Checkout 30 % mais rápido para linha de produção.",
    details:
      "Durante estágio industrial integrei funcionalidades no POS existente (Vue), reduzi tempo de checkout em 22 % e criei testes automatizados que baixaram bugs pós-release de 15 → 3.",
    website: "",
    demo: "",
    github: "https://github.com/jt-ribeiro/goldylocks-pos-frontend",
    tech: ["Vue.js", "PHP", "REST", "MySQL", "SCSS", "Jest"],
  },
  {
    title: "Website Corporativo – Escritório de Advogados",
    desc: "Premium UX com animações 60 fps. 95 Lighthouse.",
    details:
      "Desenvolvimento frontend de site institucional focado em UX e animações avançadas. Entregue em 3 semanas, 100 % estático, nota 95 no Lighthouse e compatível WCAG 2.1 AA.",
    website: "https://vercel.com/tomas-ribeiros-projects-2ec4a16d/barbosa-martins-advocacia",
    demo: "",
    github: "https://github.com/jt-ribeiro/barbosa-martins-advocacia",
    tech: ["React", "Sass", "Framer Motion", "Figma"],
  },
  {
    title: "Extensão Chrome – Controlo por Voz & Gestos",
    desc: "Substitui rato e teclado com IA em tempo real.",
    details:
      "Plugin que combina Handpose (TensorFlow.js) e Web Speech API para navegar e emitir comandos sem periféricos. Utilizado por 50+ pessoas em testes internos.",
    website: "",
    demo: "https://youtu.be/XXXXX",
    github: "https://github.com/jt-ribeiro/hand-voice-chrome-ext",
    tech: ["TensorFlow.js", "Handpose", "Web Speech API", "Chrome APIs"],
  },
  {
    title: "Gestor de Mesas – Restaurante",
    desc: "Gestão de mesas e produtos em tempo real.",
    details:
      "Aplicação full-stack interna para 2 restaurantes em Viana do Castelo. Diminuiu tempo de marcação de mesas de 3 min → 45 s e evita sobreposições.",
    website: "",
    demo: "/0210.mp4",
    github: "https://github.com/jt-ribeiro/RestaurantV2-app",
    tech: ["React", "PHP", "MySQL", "SCSS"],
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.projects} pageKey="projects">
      <h2 className={styles.title}>Projetos</h2>

      <ul className={styles.list}>
        {PROJECTS.map((p, i) => (
          <Item
            key={p.title}
            data={p}
            index={i}
            isOpen={openIndex === i}
            setOpen={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </ul>
    </section>
  );
}

function Item({ data, index, isOpen, setOpen }) {
  const [showVideo, setShowVideo] = useState(false);

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
                {data.website && (
                  <a href={data.website} target="_blank" rel="noreferrer" className={styles.btn}>
                    Website
                  </a>
                )}
                {data.demo && (
                  <button onClick={() => setShowVideo(true)} className={styles.btn}>
                    ▶ Ver Demo
                  </button>
                )}
                {data.github && (
                  <a href={data.github} target="_blank" rel="noreferrer" className={styles.btn}>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL DE VÍDEO */}
      {showVideo && <VideoModal src={data.demo} onClose={() => setShowVideo(false)} />}
    </li>
  );
}