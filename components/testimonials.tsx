"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { fadeUp, staggerContainer, luxuryEasing } from "@/lib/animations";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kapoor",
    role: "Architect",
    text: "JK Timbers has been our go-to supplier for over 15 years. The quality of their teak wood is unmatched, and their custom furniture designs always exceed our clients' expectations.",
    rating: 5,
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Interior Designer",
    text: "Working with JK Timbers is always a pleasure. Their attention to detail and understanding of modern design aesthetics makes them the perfect partner for luxury residential projects.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Arun Mehta",
    role: "Homeowner",
    text: "We furnished our entire home with JK Timbers. From the dining table to the wardrobes, every piece is a masterpiece. Five decades of experience truly shows in their work.",
    rating: 5,
    initials: "AM",
  },
  {
    name: "Sunita Reddy",
    role: "Builder & Developer",
    text: "As a builder, I need reliable suppliers who deliver quality on time. JK Timbers has never let me down in 20+ years of partnership. Their wholesale pricing is very competitive.",
    rating: 5,
    initials: "SR",
  },
  {
    name: "Vikram Singh",
    role: "Business Owner",
    text: "The modular kitchen JK Timbers designed for our office pantry is stunning. Professional, punctual, and premium — that's how I'd describe the JK Timbers experience.",
    rating: 5,
    initials: "VS",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: luxuryEasing },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.4, ease: luxuryEasing },
    }),
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="section-padding"
      ref={sectionRef}
      style={{ background: "var(--background)" }}
    >
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <motion.div variants={fadeUp} className="section-label">
            Testimonials
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title">
            What Our{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Clients
            </span>{" "}
            Say
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="divider-accent"
            style={{ margin: "1.5rem auto" }}
          />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: luxuryEasing }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            maxWidth: 800,
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Quote Icon */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Quote
              size={48}
              strokeWidth={1}
              style={{ color: "var(--accent)", opacity: 0.3 }}
            />
          </div>

          {/* Testimonial Card */}
          <div
            style={{
              minHeight: 280,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  textAlign: "center",
                  padding: "0 2rem",
                }}
              >
                {/* Stars */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.25rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="#D4AF37"
                      color="#D4AF37"
                    />
                  ))}
                </div>

                {/* Text */}
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                    lineHeight: 1.8,
                    color: "var(--foreground)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    marginBottom: "2rem",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, var(--accent), var(--secondary))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontFamily: "var(--font-heading)",
                      fontSize: "1rem",
                      fontWeight: 600,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "var(--foreground)",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--muted)",
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "2.5rem",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid var(--border-color)",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--foreground)",
                transition: "all 0.3s ease",
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Dots */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
              }}
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    border: "none",
                    background:
                      i === current ? "var(--accent)" : "var(--border-color)",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid var(--border-color)",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--foreground)",
                transition: "all 0.3s ease",
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
