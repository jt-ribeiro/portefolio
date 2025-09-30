"use client";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} João Ribeiro. Todos os direitos reservados.</p>
      <div className={styles.social}>
        <a href="https://github.com/usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/usuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
