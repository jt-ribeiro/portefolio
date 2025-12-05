"use client";
import { motion } from "framer-motion";
import styles from "./Skills.module.scss";

// Categorias separadas
const skillsData = {
  frontend: [
    { name: "React & Next.js", level: 95, tag: "strong", icon: "⚛️" },
    { name: "Vue.js", level: 70, tag: "strong", icon: "🟢" },
    { name: "JavaScript ES6+", level: 90, tag: "strong", icon: "🟨" },
    { name: "HTML5 / CSS3 / SCSS", level: 100, tag: "strong", icon: "🌐" },
    { name: "React Native", level: 85, tag: "strong", icon: "⚛️" },
    { name: "Ionic / Mobile Apps", level: 65, tag: "medium", icon: "📱" },
  ],
  backend: [
    { name: "Node.js & APIs", level: 70, tag: "medium", icon: "🟩" },
    { name: "PHP", level: 90, tag: "strong", icon: "🐘" },
    { name: "C / C++", level: 75, tag: "medium", icon: "⚙️" },
    { name: "AI / TensorFlow", level: 90, tag: "innovation", icon: "🧠" },
  ],
  databases: [
    { name: "SQL / PostgreSQL", level: 90, tag: "medium", icon: "🗄️" },
    { name: "MongoDB", level: 80, tag: "medium", icon: "🍃" },
  ],
  others: [
    { name: "Git / GitHub", level: 90, tag: "strong", icon: "🔀" },
    { name: "Figma / UI Design", level: 85, tag: "medium", icon: "🎨" },
  ],
};

export default function Skills() {
  return (
    <section className={styles.skills} pageKey="skills">
      <h2>Competências-Chave</h2>

      {Object.entries(skillsData).map(([category, skills], idx) => (
        <div key={category} className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h3>

          <div className={styles.keyGrid}>
            {skills.map((s, i) => (
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
        </div>
      ))}

      <p className={styles.summary}>
        Experiência comprovada em desenvolvimento Frontend e Backend, gestão de bases de dados e ferramentas de design. Conhecimentos sólidos em React, Vue, Node.js, APIs, Git, Figma e bases de dados SQL e NoSQL. Sempre em aprendizagem contínua.
      </p>
    </section>
  );
}
