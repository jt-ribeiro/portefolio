"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Fecha o menu se clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">JR</Link>
      </div>

      {/* Menu Desktop */}
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projetos</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Hamburger Mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={menuOpen ? styles.open : ""}></span>
        <span className={menuOpen ? styles.open : ""}></span>
        <span className={menuOpen ? styles.open : ""}></span>
      </div>

      {/* Overlay + Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Mobile */}
            <motion.div
              ref={menuRef}
              className={styles.mobileMenu}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/projects" onClick={() => setMenuOpen(false)}>Projetos</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
