"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { fadeUp, staggerContainer, luxuryEasing } from "@/lib/animations";
import {
  Award,
  Clock,
  Store,
  Hammer,
  Sofa,
  Shield,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Only the finest timber and materials sourced from trusted suppliers worldwide.",
  },
  {
    icon: Clock,
    title: "Since 1976",
    description:
      "Nearly 50 years of heritage, expertise, and unwavering commitment to excellence.",
  },
  {
    icon: Store,
    title: "Wholesale & Retail",
    description:
      "Competitive pricing for all — from individual homeowners to large-scale contractors.",
  },
  {
    icon: Hammer,
    title: "Expert Craftsmanship",
    description:
      "Every piece is crafted by skilled artisans with meticulous attention to detail.",
  },
  {
    icon: Sofa,
    title: "Custom Furniture",
    description:
      "Bespoke designs tailored to your vision, space, and lifestyle requirements.",
  },
  {
    icon: Shield,
    title: "Trusted Service",
    description:
      "Generations of customers trust JK Timbers for reliability and integrity.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Timely delivery across 100+ cities with careful handling of every order.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: "2.5rem 2rem",
        background: isHovered ? "var(--surface)" : "transparent",
        border: "1px solid var(--border-color)",
        borderRadius: 12,
        cursor: "default",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 20px 40px var(--shadow-color)"
          : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle glow on hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: isHovered
            ? "linear-gradient(90deg, transparent, var(--accent), transparent)"
            : "transparent",
          transition: "all 0.5s ease",
        }}
      />

      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: isHovered
            ? "linear-gradient(135deg, var(--accent), var(--secondary))"
            : "var(--background)",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          marginBottom: "1.5rem",
        }}
      >
        <Icon
          size={24}
          strokeWidth={1.5}
          style={{
            color: isHovered ? "#FFFFFF" : "var(--accent)",
            transition: "color 0.5s ease",
          }}
        />
      </div>

      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "var(--foreground)",
          marginBottom: "0.75rem",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: "0.95rem",
          lineHeight: 1.7,
          color: "var(--muted)",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default function WhyUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="why-us"
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
            Why Choose Us
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title">
            The JK Timbers{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Difference
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
            What sets us apart is not just our products, but our dedication to
            every customer who walks through our doors.
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
