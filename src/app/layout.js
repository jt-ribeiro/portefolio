"use client";

import { Share_Tech_Mono } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import "./globals.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={shareTechMono.className}>
        <Header />

        <AnimatePresence mode="wait">
          <motion.main
            key={children?.props?.pageKey || "main"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <Footer />
      </body>
    </html>
  );
}
