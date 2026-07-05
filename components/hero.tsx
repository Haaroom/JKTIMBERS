"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useParallax, luxuryEasing } from "@/lib/animations";

export default function Hero() {
  const { offset, ref } = useParallax(0.3);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Parallax */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src="/images/hero-bg.png"
          alt="JK Timbers Luxury Showroom"
          style={{
            width: "100%",
            height: "120%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: 900,
          padding: "0 2rem",
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: luxuryEasing }}
          style={{
            fontSize: "0.8rem",
            fontWeight: 500,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontFamily: "var(--font-body)",
          }}
        >
          Established 1976 · Premium Timber & Furniture
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: luxuryEasing }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
          }}
        >
          Crafting Timeless
          <br />
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 400,
              background: "linear-gradient(135deg, #D4AF37, #C6A15B, #E8C97A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Spaces
          </span>{" "}
          Since 1976
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: luxuryEasing }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.8,
            maxWidth: 700,
            margin: "0 auto 2.5rem",
            fontFamily: "var(--font-body)",
          }}
        >
          Nearly five decades of excellence in premium timber, bespoke
          furniture, modular kitchens, interior materials, and architectural
          wood solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: luxuryEasing }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.button
            onClick={() => handleScroll("#products")}
            className="btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "linear-gradient(135deg, #C6A15B, #D4AF37)",
              color: "#1a1a1a",
              fontWeight: 600,
            }}
          >
            Explore Collection
            <ArrowRight size={16} />
          </motion.button>

          <motion.button
            onClick={() => handleScroll("#contact")}
            className="btn-outline"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              borderColor: "rgba(255,255,255,0.3)",
              color: "#FFFFFF",
            }}
          >
            Request a Quote
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
        }}
        onClick={() => handleScroll("#about")}
      >
        <span
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "var(--font-body)",
          }}
        >
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={20} color="rgba(255,255,255,0.5)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
