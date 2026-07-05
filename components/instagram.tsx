"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Camera as Instagram, Heart, MessageCircle } from "lucide-react";

const instaPosts = [
  {
    image: "/images/teak-wood.png",
    likes: "2,847",
    comments: "156",
  },
  {
    image: "/images/dining-table.png",
    likes: "3,219",
    comments: "203",
  },
  {
    image: "/images/luxury-wardrobe.png",
    likes: "4,102",
    comments: "287",
  },
  {
    image: "/images/designer-doors.png",
    likes: "1,956",
    comments: "142",
  },
  {
    image: "/images/hero-bg.png",
    likes: "5,431",
    comments: "321",
  },
  {
    image: "/images/timber-logs.png",
    likes: "2,318",
    comments: "178",
  },
];

function InstaCard({
  image,
  likes,
  comments,
  index,
}: {
  image: string;
  likes: string;
  comments: string;
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
        position: "relative",
        aspectRatio: "1",
        borderRadius: 10,
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <img
        src={image}
        alt={`JK Timbers Instagram post ${index + 1}`}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: isHovered ? "scale(1.08)" : "scale(1)",
        }}
      />

      {/* Hover Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isHovered ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          transition: "all 0.4s ease",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "#fff",
            fontSize: "0.9rem",
            fontWeight: 600,
          }}
        >
          <Heart size={18} fill="#fff" /> {likes}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "#fff",
            fontSize: "0.9rem",
            fontWeight: 600,
          }}
        >
          <MessageCircle size={18} /> {comments}
        </motion.div>
      </div>

      {/* Instagram Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
        style={{
          position: "absolute",
          top: "0.75rem",
          right: "0.75rem",
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Instagram size={16} color="#fff" />
      </motion.div>
    </motion.div>
  );
}

export default function InstagramSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="instagram"
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
            Follow Us
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title">
            On{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Instagram
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
            Get inspired by our latest projects and behind-the-scenes moments.
          </motion.p>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
          className="insta-grid"
        >
          {instaPosts.map((post, i) => (
            <InstaCard key={i} {...post} index={i} />
          ))}
        </motion.div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <motion.a
            href="https://instagram.com/jktimbers"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 2.5rem",
              background:
                "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              color: "#FFFFFF",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              border: "none",
              borderRadius: 50,
              textDecoration: "none",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(220, 39, 67, 0.3)",
            }}
          >
            <Instagram size={18} />
            Follow @jktimbers
          </motion.a>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (min-width: 640px) {
          .insta-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .insta-grid {
            grid-template-columns: repeat(6, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
