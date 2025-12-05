"use client";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Tomás Ribeiro. Todos os direitos reservados.</p>
      <div className={styles.social}>
        <a href="https://github.com/jt-ribeiro" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="www.linkedin.com/in/tomás-ribeiro-4a0a9b390" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
