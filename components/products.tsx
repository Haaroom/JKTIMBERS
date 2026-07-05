"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { fadeUp, staggerContainer, luxuryEasing } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Teak Wood",
    subtitle: "Premium Grade",
    image: "/images/teak-wood.png",
    span: "large",
  },
  {
    title: "Timber Logs",
    subtitle: "Wholesale & Retail",
    image: "/images/timber-logs.png",
    span: "normal",
  },
  {
    title: "Designer Doors",
    subtitle: "Custom Crafted",
    image: "/images/designer-doors.png",
    span: "normal",
  },
  {
    title: "Windows",
    subtitle: "Architectural Wood",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    span: "normal",
  },
  {
    title: "Luxury Wardrobes",
    subtitle: "Walk-in & Built-in",
    image: "/images/luxury-wardrobe.png",
    span: "normal",
  },
  {
    title: "Dining Tables",
    subtitle: "Bespoke Designs",
    image: "/images/dining-table.png",
    span: "large",
  },
  {
    title: "Office Furniture",
    subtitle: "Executive Collection",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    span: "normal",
  },
  {
    title: "Custom Furniture",
    subtitle: "Made to Order",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    span: "normal",
  },
  {
    title: "Modular Kitchen",
    subtitle: "Modern Living",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    span: "normal",
  },
  {
    title: "Interior Materials",
    subtitle: "Premium Selection",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    span: "normal",
  },
];

function ProductCard({
  title,
  subtitle,
  image,
  span,
  index,
}: {
  title: string;
  subtitle: string;
  image: string;
  span: string;
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
        borderRadius: 12,
        overflow: "hidden",
        cursor: "pointer",
        gridColumn: span === "large" ? "span 2" : "span 1",
        minHeight: span === "large" ? 420 : 340,
      }}
      className={span === "large" ? "product-card-large" : "product-card"}
    >
      {/* Image */}
      <motion.img
        src={image}
        alt={title}
        loading="lazy"
        animate={{ scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.8, ease: luxuryEasing }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isHovered
            ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
          transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "2rem",
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.4, ease: luxuryEasing }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(212, 175, 55, 0.9)",
              marginBottom: "0.5rem",
              fontFamily: "var(--font-body)",
            }}
          >
            {subtitle}
          </div>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: span === "large" ? "1.75rem" : "1.4rem",
              fontWeight: 600,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h3>
        </motion.div>

        {/* Hover Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3, ease: luxuryEasing }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "1rem",
            color: "#D4AF37",
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            fontFamily: "var(--font-body)",
          }}
        >
          Inquire Now <ArrowUpRight size={16} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="products"
      className="section-padding"
      ref={sectionRef}
      style={{ background: "var(--surface)" }}
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
            Our Collection
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title">
            Premium{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Products
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
            From raw timber to finished masterpieces — explore our curated
            collection of premium wood products and bespoke furniture.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
          className="products-bento"
        >
          {products.map((product, i) => (
            <ProductCard key={product.title} {...product} index={i} />
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .products-bento {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .products-bento {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .product-card-large,
          .product-card {
            grid-column: span 1 !important;
            min-height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
