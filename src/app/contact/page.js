"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Contact.module.scss";

const EMAIL = "tomasribeiro930@gmail.com";

export default function Contact() {
  const [unlocked, setUnlocked] = useState(false);
  const [text, setText] = useState("");

  // efeito máquina de escrever
  useEffect(() => {
    if (!unlocked) return;
    let i = 0;
    const timer = setInterval(() => {
      setText(EMAIL.slice(0, i + 1));
      i++;
      if (i === EMAIL.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, [unlocked]);

  return (
    <section className={styles.contact} pageKey="contact">
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.glitch} data-text="Contacto">
          Contacto
        </h2>

        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div
              key="locked"
              className={styles.locked}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p>Prova que és humano → decifra o código:</p>
              <div className={styles.code}>
                <span className={styles.line}>$ ./decode.sh</span>
                <span className={styles.line}>
                  &gt; echo{" "}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  >
                    ••••••••••••••••
                  </motion.span>
                </span>
              </div>

              <motion.button
                className={styles.btn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUnlocked(true)}
              >
                Desbloquear e-mail
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              className={styles.unlocked}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <p>Endereço descriptografado:</p>
              <a
                href={`mailto:${EMAIL}`}
                className={styles.mail}
                aria-label="Enviar e-mail"
              >
                {text}
                <motion.span
                  className={styles.cursor}
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                >
                  _
                </motion.span>
              </a>

              <motion.div
                className={styles.social}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span>Ou encontra-me em:</span>
                <div>
                  <a
                    href="https://github.com/jt-ribeiro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* scanlines de fundo */}
      <div className={styles.scanlines} />
    </section>
  );
}