"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCounter, fadeUp, fadeLeft, fadeRight, staggerContainer, luxuryEasing } from "@/lib/animations";
import { Award, Users, Truck, TreePine } from "lucide-react";

const stats = [
  { icon: TreePine, value: 50, suffix: "+", label: "Years of Legacy" },
  { icon: Users, value: 10000, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 500, suffix: "+", label: "Projects Delivered" },
  { icon: Truck, value: 100, suffix: "+", label: "Cities Served" },
];

const milestones = [
  { year: "1976", text: "Founded as a small timber trading business" },
  { year: "1990", text: "Expanded into premium furniture manufacturing" },
  { year: "2005", text: "Launched custom interior design solutions" },
  { year: "2020", text: "Serving customers across 100+ cities" },
  { year: "Today", text: "Nearly 50 years of trust & craftsmanship" },
];

function StatCard({ icon: Icon, value, suffix, label, index }: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { count, ref } = useCounter(value, 2000);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={index}
      style={{
        textAlign: "center",
        padding: "2rem 1rem",
      }}
    >
      <Icon
        size={28}
        style={{ color: "var(--accent)", marginBottom: "0.75rem" }}
        strokeWidth={1.5}
      />
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 600,
          color: "var(--foreground)",
          lineHeight: 1,
        }}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <div
        style={{
          fontSize: "0.85rem",
          color: "var(--muted)",
          marginTop: "0.5rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          fontFamily: "var(--font-body)",
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
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
            Our Heritage
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="section-title"
            style={{ maxWidth: 700, margin: "0 auto 1rem" }}
          >
            A Legacy Built on{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Craftsmanship
            </span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="divider-accent"
            style={{ margin: "1.5rem auto" }}
          />
          <motion.p
            variants={fadeUp}
            className="section-subtitle"
            style={{ margin: "0 auto" }}
          >
            For nearly five decades, JK Timbers has been synonymous with
            quality, trust, and timeless design. From raw timber to bespoke
            furniture, we craft spaces that endure.
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            marginBottom: "4rem",
          }}
          className="about-grid"
        >
          {/* Story */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeLeft}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
              className="about-images"
            >
              <div
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  aspectRatio: "3/4",
                }}
              >
                <img
                  src="/images/teak-wood.png"
                  alt="Premium teak wood"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              <div
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  marginTop: "2rem",
                }}
              >
                <img
                  src="/images/timber-logs.png"
                  alt="Timber logs"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeRight}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                marginBottom: "2rem",
                color: "var(--foreground)",
              }}
            >
              Our Journey
            </h3>
            <div style={{ position: "relative", paddingLeft: "2rem" }}>
              {/* Timeline Line */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 8,
                  bottom: 8,
                  width: 2,
                  background:
                    "linear-gradient(to bottom, var(--accent), var(--secondary), transparent)",
                }}
              />
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.15,
                    ease: luxuryEasing,
                  }}
                  style={{
                    position: "relative",
                    marginBottom: "1.75rem",
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-2rem",
                      top: 6,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: i === milestones.length - 1
                        ? "var(--accent)"
                        : "var(--surface)",
                      border: "2px solid var(--accent)",
                      transform: "translateX(-5px)",
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {m.year}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            padding: "3rem 2rem",
            background: "var(--surface)",
            borderRadius: 12,
            border: "1px solid var(--border-color)",
          }}
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
