"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoModal from "@/components/VideoModal/VideoModal"; // ← import novo
import styles from "./Projects.module.scss";

const PROJECTS = [
  {
    title: "Extensão Chrome – Acessibilidade AI",
    desc: "Navegação hands-free via comandos de voz e gestos.",
    details:
      "Navegação acessível powered by AI. Extensão experimental que substitui periféricos tradicionais por comandos de voz e gestos (TensorFlow.js). Solução inovadora testada e validada por user group de 50+ pessoas.",
    website: "",
    demo: "https://youtu.be/XXXXX",
    github: "https://github.com/jt-ribeiro/hand-voice-chrome-ext",
    tech: ["TensorFlow.js", "Handpose", "Web Speech API", "Chrome APIs"],
  },
  {
    title: "Reservas QR - Gestão Inteligente",
    desc: "Sistema Full-stack para gestão digital de espaços.",
    details: "Plataforma completa para digitalização de restaurantes e eventos. Permite check-in instantâneo via QR Code, gestão de lotação em tempo real e visualização de ementas. Backoffice administrativo desenvolvido com Prisma e PostgreSQL para alta escalabilidade.",
    website: "",
    demo: "",
    github: "https://github.com/jt-ribeiro/reservas-qr.git",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
  {
    title: "Gestor de Mesas – Restaurante V2",
    desc: "Gestão de pedidos e mesas em tempo real.",
    details:
      "Plataforma interna de gestão de pedidos. Otimizou o fluxo de atendimento reduzindo o tempo de alocação de mesas de 3min para 45s. Sincronização em tempo real entre sala e cozinha para eliminar erros de pedidos.",
    website: "",
    demo: "/0210.mp4",
    github: "https://github.com/jt-ribeiro/RestaurantV2-app",
    tech: ["React", "PHP", "MySQL", "SCSS"],
  },
  {
    title: "Website Dentista - Dr. Alves de Sousa",
    desc: "Landing Page Premium com Chatbot para triagem automática.",
    details: "Solução web completa para clínica de prestígio. Integração de Chatbot inteligente (Ana) para triagem automática de pacientes, sistema de marcações direto e design focado em conversão. Stack moderna garantindo performance de topo e SEO otimizado.",
    website: "",
    demo: "",
    github: "https://github.com/jt-ribeiro/websiteDentista.git",
    tech: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Lucide React"],
  },
  {
    title: "CryptoHub - Dashboard Financeiro",
    desc: "Análise de Criptoativos em tempo real com Chart.js.",
    details: "Dashboard analítico de criptoativos em tempo real. Arquitetura modular robusta com integração de APIs financeiras para visualização de dados complexos. Interface responsiva com foco na legibilidade de dados e performance de renderização.",
    website: "",
    demo: "",
    github: "https://github.com/jt-ribeiro/CryptoHub.git",
    tech: ["HTML5", "Sass", "JavaScript", "Chart.js"],
  },
  {
    title: "Sistema POS Industrial (Goldylocks)",
    desc: "Otimização de checkout com redução de 22% no tempo de processo.",
    details:
      "Otimização de checkout industrial com impacto mensurável. Redução de 22% no tempo de processamento em linha de produção crítica. Desenvolvimento de testes automatizados (Jest) que reduziram a taxa de bugs em 80% pós-deploy.",
    website: "",
    demo: "",
    github: "https://github.com/jt-ribeiro/goldylocks-pos-frontend",
    tech: ["Vue.js", "PHP", "REST", "MySQL", "SCSS", "Jest"],
  },
  {
    title: "Website Corporativo – Barbosa Martins",
    desc: "Experiência Digital Premium com animações 60fps | Score 95+",
    details:
      "Presença digital institucional de alta performance. Foco total em UX/UI com animações fluidas (60fps) e acessibilidade (WCAG 2.1). Score consistente de 95+ no Google Lighthouse, garantindo máxima visibilidade e rapidez de carregamento.",
    website: "https://vercel.com/tomas-ribeiros-projects-2ec4a16d/barbosa-martins-advocacia",
    demo: "",
    github: "https://github.com/jt-ribeiro/barbosa-martins-advocacia",
    tech: ["React", "Sass", "Framer Motion", "Figma"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.projects}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Projetos
      </motion.h2>

      <motion.ul
        className={styles.list}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {PROJECTS.map((p, i) => (
          <Item
            key={p.title}
            data={p}
            index={i}
            isOpen={openIndex === i}
            setOpen={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </motion.ul>
    </section>
  );
}

function Item({ data, index, isOpen, setOpen }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.li className={styles.item} variants={itemVariants}>
      <button className={styles.header} onClick={setOpen} aria-expanded={isOpen}>
        <span className={styles.index}>0{index + 1}</span>
        <div className={styles.info}>
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
        </div>
        <motion.div
          className={styles.chevron}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
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
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
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
                    Video Demo
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
    </motion.li>
  );
}