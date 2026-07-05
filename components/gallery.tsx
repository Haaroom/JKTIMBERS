"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { fadeUp, staggerContainer, luxuryEasing } from "@/lib/animations";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/hero-bg.png",
    alt: "Luxury timber showroom",
    height: 400,
  },
  {
    src: "/images/dining-table.png",
    alt: "Modern dining table",
    height: 320,
  },
  {
    src: "/images/luxury-wardrobe.png",
    alt: "Walk-in wardrobe",
    height: 450,
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    alt: "Modern living room interior",
    height: 350,
  },
  {
    src: "/images/teak-wood.png",
    alt: "Premium teak grain",
    height: 300,
  },
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    alt: "Elegant bedroom with wood accents",
    height: 420,
  },
  {
    src: "/images/designer-doors.png",
    alt: "Designer wooden door",
    height: 380,
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Luxury home exterior",
    height: 340,
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    alt: "Contemporary kitchen design",
    height: 360,
  },
  {
    src: "/images/timber-logs.png",
    alt: "Timber logs warehouse",
    height: 300,
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    alt: "Wooden staircase detail",
    height: 440,
  },
  {
    src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80",
    alt: "Premium office space",
    height: 320,
  },
];

function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof galleryImages;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.95)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      {/* Close Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          background: "rgba(255,255,255,0.1)",
          border: "none",
          borderRadius: "50%",
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#fff",
          zIndex: 10,
        }}
        aria-label="Close lightbox"
      >
        <X size={24} />
      </motion.button>

      {/* Prev Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        style={{
          position: "absolute",
          left: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.1)",
          border: "none",
          borderRadius: "50%",
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#fff",
          zIndex: 10,
        }}
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </motion.button>

      {/* Next Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        style={{
          position: "absolute",
          right: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.1)",
          border: "none",
          borderRadius: "50%",
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#fff",
          zIndex: 10,
        }}
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: luxuryEasing }}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: "90vw",
            maxHeight: "85vh",
            objectFit: "contain",
            borderRadius: 8,
          }}
        />
      </AnimatePresence>

      {/* Counter */}
      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.85rem",
          fontFamily: "var(--font-body)",
          letterSpacing: "0.1em",
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
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
            Showroom
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title">
            Our{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Gallery
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
            Step into our world of premium timber and exquisite furniture.
            Every piece tells a story of craftsmanship.
          </motion.p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            columnCount: 3,
            columnGap: "1.25rem",
          }}
          className="gallery-masonry"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              onClick={() => setLightboxIndex(i)}
              style={{
                breakInside: "avoid",
                marginBottom: "1.25rem",
                borderRadius: 10,
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: luxuryEasing }}
                style={{ overflow: "hidden", borderRadius: 10 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: img.height,
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </motion.div>
              {/* Hover overlay */}
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.4s ease",
                  borderRadius: 10,
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={galleryImages}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() =>
              setLightboxIndex((prev) =>
                prev !== null
                  ? (prev - 1 + galleryImages.length) % galleryImages.length
                  : 0
              )
            }
            onNext={() =>
              setLightboxIndex((prev) =>
                prev !== null
                  ? (prev + 1) % galleryImages.length
                  : 0
              )
            }
          />
        )}
      </AnimatePresence>

      <style jsx global>{`
        .gallery-masonry {
          column-count: 1 !important;
        }
        @media (min-width: 640px) {
          .gallery-masonry {
            column-count: 2 !important;
          }
        }
        @media (min-width: 1024px) {
          .gallery-masonry {
            column-count: 3 !important;
          }
        }
        .gallery-overlay:hover {
          background: rgba(0, 0, 0, 0.2) !important;
        }
      `}</style>
    </section>
  );
}
