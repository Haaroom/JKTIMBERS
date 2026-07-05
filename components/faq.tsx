"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { fadeUp, staggerContainer, luxuryEasing } from "@/lib/animations";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of wood do you offer?",
    answer:
      "We offer a wide range of premium timber including Teak, Sal, Deodar, Pine, Rosewood, Oak, Walnut, and many more. Our inventory caters to both structural and decorative needs, sourced from trusted suppliers to ensure the highest quality.",
  },
  {
    question: "Do you offer custom furniture design?",
    answer:
      "Absolutely! Custom furniture is one of our specialties. Our skilled craftsmen can create bespoke pieces tailored to your exact specifications — from dining tables and wardrobes to modular kitchens and office furniture. Share your vision, and we'll bring it to life.",
  },
  {
    question: "What are your delivery options?",
    answer:
      "We deliver across 100+ cities with careful handling and packaging. Delivery timelines depend on the product type and customization requirements. Standard products are typically delivered within 7–14 days, while custom orders may take 3–6 weeks.",
  },
  {
    question: "Do you offer wholesale pricing?",
    answer:
      "Yes, we are both a wholesale and retail business. We offer competitive wholesale pricing for builders, contractors, architects, and bulk buyers. Contact us directly for wholesale quotations tailored to your project requirements.",
  },
  {
    question: "How can I get a price quote?",
    answer:
      "You can request a quote through our contact form, WhatsApp, or by calling us directly. Share your requirements (product type, dimensions, quantity, and any customization needs), and our team will provide a detailed quotation within 24–48 hours.",
  },
  {
    question: "What is the quality assurance process?",
    answer:
      "Every piece of timber and furniture undergoes rigorous quality checks. We inspect for grain quality, moisture content, structural integrity, and finish quality. Our nearly 50 years of experience ensures that only the best products reach our customers.",
  },
  {
    question: "Do you provide interior design consultation?",
    answer:
      "Yes, we offer expert interior design consultation to help you choose the right materials, finishes, and furniture for your space. Our design team can visit your site and provide tailored recommendations based on your style and budget.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfers, UPI payments, and cheques. For large orders, we can arrange flexible payment plans. All transactions are transparent, and you'll receive proper documentation for every purchase.",
  },
];

function FaqItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      style={{
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.5rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.15rem",
            fontWeight: 500,
            color: isOpen ? "var(--accent)" : "var(--foreground)",
            transition: "color 0.3s ease",
            lineHeight: 1.4,
          }}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: luxuryEasing }}
          style={{
            flexShrink: 0,
            width: 36,
            height: 36,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: isOpen ? "var(--accent)" : "var(--surface)",
            border: isOpen ? "none" : "1px solid var(--border-color)",
            color: isOpen ? "#fff" : "var(--foreground)",
            transition: "all 0.3s ease",
          }}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: luxuryEasing }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                paddingBottom: "1.5rem",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--muted)",
                maxWidth: 700,
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-padding"
      ref={sectionRef}
      style={{ background: "var(--surface)" }}
    >
      <div className="container-luxury" style={{ maxWidth: 900 }}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <motion.div variants={fadeUp} className="section-label">
            FAQ
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title">
            Frequently Asked{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Questions
            </span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="divider-accent"
            style={{ margin: "1.5rem auto" }}
          />
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              {...faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
