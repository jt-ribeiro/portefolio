"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./About.module.scss";

const EMAIL = "tomasribeiro930@email.com";

export default function About() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "joao@dev:~$ whoami" },
  ]);
  const [done, setDone] = useState(false);
  const inputRef = useRef(null);

  const lines = {
    system: [
      "joao@dev:~$ whoami",
      "=> João Ribeiro, 25 anos",
      "=> Lic. Computação Gráfica e Multimédia | ESTG Viana", 
      "=> Junior Developer | React, Next.js, Vue.js",
    ],
    bio: [
      "Gosto de explorar o desconhecido. Se é novo, difícil ou parece impossível,",
      "conta comigo. Trabalho bem em equipa, mas também sei ser auto-suficiente.",
      "Estou sempre pronto para aprender, errar, corrigir e crescer —",
      "tanto pessoalmente como profissionalmente.",
    ],
    call: [`Vamos construir algo incrível juntos? → ${EMAIL}`],
  };

  useEffect(() => {
    if (done) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.system.length - 1) {
        setHistory((h) => [...h, { type: "system", text: lines.system[i + 1] }]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          lines.bio.forEach((l, idx) =>
            setTimeout(() => setHistory((h) => [...h, { type: "bio", text: l }]), idx * 600)
          );
          setTimeout(() => {
            lines.call.forEach((l, idx) =>
              setTimeout(() => setHistory((h) => [...h, { type: "call", text: l }]), idx * 800)
            );
            setDone(true);
          }, lines.bio.length * 600 + 300);
        }, 400);
      }
    }, 500);
  }, [done]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      if (input.trim().toLowerCase() === "whoami") {
        setHistory((h) => [...h, { type: "user", text: input }, { type: "system", text: "Ainda a carregar..." }]);
        setDone(false);
      } else {
        setHistory((h) => [...h, { type: "user", text: input }, { type: "system", text: "Comando não reconhecido. Tenta: whoami" }]);
      }
      setInput("");
    }
  };

  return (
    <section className={styles.about} pageKey="about">
      <motion.div
        className={styles.terminal}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.bar}>
          <span className={styles.btnClose}></span>
          <span className={styles.btnMin}></span>
          <span className={styles.btnMax}></span>
          <span className={styles.title}>joao@dev – ~/about</span>
        </div>

        <div className={styles.body}>
          <AnimatePresence>
            {history.map((h, i) => (
              <motion.div
                key={i}
                className={`${styles.line} ${styles[h.type]}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {h.text}
              </motion.div>
            ))}
          </AnimatePresence>

          {!done && (
            <div className={styles.prompt}>
              <span className={styles.user}>joao@dev:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                className={styles.input}
                autoFocus
                aria-label="Terminal input"
              />
              <motion.span
                className={styles.cursor}
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
              >
                _
              </motion.span>
            </div>
          )}
        </div>
      </motion.div>

      <div className={styles.photo}>
        {/* substitui pela tua foto ou avatar */}
        <img src="/img/eu.jpg" alt="João Ribeiro" />
      </div>
    </section>
  );
}