"use client";
import { motion } from "framer-motion";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <section className={styles.home} pageKey="home">
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        data-text="João Ribeiro"
      >
        Tomás Ribeiro
      </motion.h1>

      <motion.h2
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Computação Gráfica & Multimédia
      </motion.h2>

      <motion.a
        href="/projects"
        className={styles.cta}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Ver Projetos
      </motion.a>
    </section>
  );
}
