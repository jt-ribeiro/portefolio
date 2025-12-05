"use client";
import { motion } from "framer-motion";
import styles from "./Skills.module.scss";

const hardSkills = [
  { name: "React & Next.js", level: 95, tag: "strong", icon: "⚛️" },
  { name: "Vue.js", level: 90, tag: "strong", icon: "🟢" },
  { name: "JavaScript ES6+", level: 90, tag: "strong", icon: "🟨" },
  { name: "HTML5 / CSS3 / SCSS", level: 100, tag: "strong", icon: "🌐" },
  { name: "PHP", level: 90, tag: "strong", icon: "🐘" },
  { name: "Git / GitHub", level: 85, tag: "strong", icon: "🔀" },
  { name: "C / C++", level: 75, tag: "medium", icon: "⚙️" },
  { name: "Node.js & APIs", level: 70, tag: "medium", icon: "🟩" },
  { name: "Ionic / Mobile Apps", level: 50, tag: "medium", icon: "📱" },
  { name: "AI / TensorFlow", level: 60, tag: "innovation", icon: "🧠" },
  { name: "SQL / Bases de Dados", level: 70, tag: "medium", icon: "🗄️" }, // ← extra CV
  { name: "Figma / UI Design", level: 65, tag: "medium", icon: "🎨" }, // ← extra CV
];

export default function Skills() {
  return (
    <section className={styles.skills} pageKey="skills">
      <h2>Competências-Chave</h2>

      <div className={styles.keyGrid}>
        {hardSkills.map((s, i) => (
          <motion.div
            key={s.name}
            className={`${styles.card} ${styles[s.tag]}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>{s.icon}</div>
            <h3>{s.name}</h3>
            <div className={styles.track}>
              <motion.div
                className={styles.fill}
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                viewport={{ once: true }}
              />
            </div>
            <span className={styles.percent}>{s.level}%</span>
          </motion.div>
        ))}
      </div>

      <p className={styles.summary}>
        Experiência comprovada em React, Vue e JavaScript. Conhecimento sólido de Git, Node.js, APIs, PHP e noções de AI/Interação. Competências em bases de dados e design de interfaces. Sempre em aprendizagem contínua.
      </p>
    </section>
  );
}
