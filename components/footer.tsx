"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border-color)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="container-luxury" style={{ padding: "0 2rem" }}>
        <div
          style={{
            display: "grid",
            gap: "3rem",
            marginBottom: "4rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div style={{ maxWidth: 320 }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "var(--foreground)",
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              JK{" "}
              <span style={{ color: "var(--accent)", fontWeight: 400 }}>
                Timbers
              </span>
            </div>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Crafting timeless spaces since 1976. Premium timber, bespoke
              furniture, and architectural wood solutions for luxury interiors.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.5rem 1rem",
                border: "1px solid var(--accent)",
                borderRadius: 50,
                color: "var(--accent)",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              EST. 1976
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                color: "var(--foreground)",
                marginBottom: "1.5rem",
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {["Home", "About", "Products", "Why Us"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="footer-link"
                    style={{
                      color: "var(--muted)",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                color: "var(--foreground)",
                marginBottom: "1.5rem",
              }}
            >
              Categories
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                "Premium Timber",
                "Custom Furniture",
                "Modular Kitchens",
                "Doors & Windows",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#products"
                    className="footer-link"
                    style={{
                      color: "var(--muted)",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                color: "var(--foreground)",
                marginBottom: "1.5rem",
              }}
            >
              Connect
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <li>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/jktimbers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jktimbers.com"
                  className="footer-link"
                  style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <div
            style={{
              fontSize: "0.85rem",
              color: "var(--muted)",
            }}
          >
            &copy; {currentYear} JK Timbers. All rights reserved.
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "var(--background)",
              border: "1px solid var(--border-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--foreground)",
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>

      <style jsx global>{`
        .footer-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr;
          }
        }
        .footer-link:hover {
          color: var(--accent) !important;
        }
      `}</style>
    </footer>
  );
}
