"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Minimum time to show the loading animation

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "var(--background)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "relative", marginBottom: "2rem" }}>
        {/* Animated Rings */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            inset: -20,
            border: "1px dashed rgba(212, 175, 55, 0.3)",
            borderRadius: "50%",
          }}
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            inset: -30,
            border: "1px solid rgba(212, 175, 55, 0.1)",
            borderRadius: "50%",
          }}
        />

        {/* Logo Text */}
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
            width: 80,
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            JK
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--accent)",
        }}
      >
        Timbers
      </motion.div>

      {/* Progress Line */}
      <div
        style={{
          width: 120,
          height: 1,
          background: "var(--border-color)",
          marginTop: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "50%",
            background: "var(--accent)",
          }}
        />
      </div>
    </motion.div>
  );
}
