"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, luxuryEasing } from "@/lib/animations";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Camera as Instagram,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Hello JK Timbers!%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ARequirement: ${formData.requirement}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "1rem 1.25rem",
    background: "var(--background)",
    border: "1px solid var(--border-color)",
    borderRadius: 8,
    color: "var(--foreground)",
    fontFamily: "var(--font-body)",
    fontSize: "0.95rem",
    outline: "none",
    transition: "all 0.3s ease",
  };

  return (
    <section
      id="contact"
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
            Get In Touch
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title">
            Contact{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Us
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
            Have a project in mind? We&apos;d love to hear from you. Reach out
            for inquiries, quotations, or consultations.
          </motion.p>
        </motion.div>

        {/* Split Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="contact-grid"
        >
          {/* Left — Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeLeft}
          >
            <div
              style={{
                padding: "2.5rem",
                background: "var(--surface)",
                borderRadius: 16,
                border: "1px solid var(--border-color)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem",
                  color: "var(--foreground)",
                }}
              >
                Send an Inquiry
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  marginBottom: "2rem",
                }}
              >
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: "center",
                    padding: "3rem 1rem",
                  }}
                >
                  <CheckCircle
                    size={56}
                    style={{ color: "var(--accent)", marginBottom: "1rem" }}
                  />
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.5rem",
                      color: "var(--foreground)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Thank You!
                  </h3>
                  <p style={{ color: "var(--muted)" }}>
                    Your inquiry has been sent. We&apos;ll respond shortly.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1.25rem",
                    }}
                    className="form-row"
                  >
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "var(--accent)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--border-color)")
                      }
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "var(--accent)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--border-color)")
                      }
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--accent)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--border-color)")
                    }
                  />

                  <select
                    value={formData.requirement}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        requirement: e.target.value,
                      })
                    }
                    style={{
                      ...inputStyle,
                      color: formData.requirement
                        ? "var(--foreground)"
                        : "var(--muted)",
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238A7A6D' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--accent)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--border-color)")
                    }
                  >
                    <option value="">Select Requirement</option>
                    <option value="Timber/Wood">Timber / Wood</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Modular Kitchen">Modular Kitchen</option>
                    <option value="Doors & Windows">Doors & Windows</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                    <option value="Custom Project">Custom Project</option>
                    <option value="Other">Other</option>
                  </select>

                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: 120,
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--accent)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--border-color)")
                    }
                  />

                  <motion.button
                    type="submit"
                    className="btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "1.1rem",
                      fontSize: "0.95rem",
                    }}
                  >
                    <Send size={16} />
                    Send Inquiry
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right — Business Details */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeRight}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {/* Info Cards */}
            <div
              style={{
                padding: "2rem",
                background: "var(--surface)",
                borderRadius: 16,
                border: "1px solid var(--border-color)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "var(--background)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={20} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        marginBottom: "0.25rem",
                        color: "var(--foreground)",
                      }}
                    >
                      Visit Our Showroom
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6 }}>
                      JK Timbers, Main Road,
                      <br />
                      City, State — 000000
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "var(--background)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={20} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        marginBottom: "0.25rem",
                        color: "var(--foreground)",
                      }}
                    >
                      Call Us
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                      +91 XXXXX XXXXX
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "var(--background)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        marginBottom: "0.25rem",
                        color: "var(--foreground)",
                      }}
                    >
                      Email Us
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                      info@jktimbers.com
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "var(--background)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={20} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        marginBottom: "0.25rem",
                        color: "var(--foreground)",
                      }}
                    >
                      Working Hours
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6 }}>
                      Mon — Sat: 9:00 AM – 7:00 PM
                      <br />
                      Sunday: By Appointment
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <motion.a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  flex: 1,
                  minWidth: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "1rem",
                  background: "#25D366",
                  color: "#FFFFFF",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                <MessageCircle size={18} />
                WhatsApp
              </motion.a>

              <motion.a
                href="tel:+91XXXXXXXXXX"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  flex: 1,
                  minWidth: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "1rem",
                  background: "var(--primary)",
                  color: "#FFFFFF",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                <Phone size={18} />
                Call Now
              </motion.a>

              <motion.a
                href="https://instagram.com/jktimbers"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  flex: 1,
                  minWidth: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "1rem",
                  background:
                    "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  color: "#FFFFFF",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                <Instagram size={18} />
                Instagram
              </motion.a>
            </div>

            {/* Google Maps */}
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--border-color)",
                height: 250,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.5!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JK Timbers Location"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
