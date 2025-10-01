"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./VideoModal.module.scss";

export default function VideoModal({ src, onClose }) {
  // fecha com ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {/* BACKDROP */}
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose} // clica fora
      />

      {/* MODAL */}
      <div className={styles.modal} onClick={onClose}>
  <motion.div
    className={styles.modalBox} // novo nome
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    onClick={(e) => e.stopPropagation()}
  >
    <button className={styles.close} onClick={onClose} aria-label="Fechar vídeo">
      ✕
    </button>
    <video src={src} controls muted loop playsInline preload="metadata" className={styles.video} />
  </motion.div>
</div>
    </AnimatePresence>
  );
}