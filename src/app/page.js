"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.scss";

export default function Home() {
  const [subtitle, setSubtitle] = useState("");
  const [glitch, setGlitch] = useState(false);
  const [clicks, setClicks] = useState(0);

  const fullText = "Computação Gráfica & Multimédia";

  // typewriter suave
  useEffect(() => {
    let i = 0;
    const int = setInterval(() => {
      setSubtitle(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(int);
    }, 80);
    return () => clearInterval(int);
  }, []);

  // glitch rápido ao hover
  const handleGlitch = () => {
    setGlitch(true);
    setTimeout(() => setGlitch(false), 300);
  };

  // easter-egg: 3 cliques → altera cor de fundo
  useEffect(() => {
    if (clicks === 3) {
      document.documentElement.style.setProperty("--bg", "#001a33");
      setTimeout(() => document.documentElement.style.setProperty("--bg", "#0d0d0d"), 3000);
      setClicks(0);
    }
  }, [clicks]);

  return (
    <section className={styles.home} pageKey="home">
      {/* scanlines */}
      <div className={styles.scanlines} />

      <motion.h1
        className={`${styles.title} ${glitch ? styles.glitchActive : ""}`}
        data-text="João Ribeiro"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onMouseEnter={handleGlitch}
        onClick={() => setClicks((c) => c + 1)}
        aria-label="Nome"
      >
        Tomás Ribeiro
      </motion.h1>

      <motion.div
        className={styles.subtitleWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <span className={styles.subtitle}>{subtitle}</span>
        <motion.span
          className={styles.cursor}
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          _
        </motion.span>
      </motion.div>

      <motion.div
        className={styles.ctaWrapper}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.a
          href="/projects"
          className={styles.cta}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explorar Projetos
        </motion.a>
      </motion.div>

      <motion.div
  className={styles.actions}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 2.2, duration: 0.6 }}
>
  <motion.a
    href="/cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.btn}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    📄 Visualizar CV
  </motion.a>

  <motion.a
    href="/cv.pdf"
    download="CV_Tomas_Ribeiro.pdf"
    className={styles.btn}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    ⬇ Download CV
  </motion.a>
</motion.div>

      {/* dica subtísima do easter-egg */}
      {clicks > 0 && (
        <motion.div
          className={styles.hint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
        >
          {clicks}/3
        </motion.div>
      )}
    </section>
  );
}