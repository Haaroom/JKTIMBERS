"use client";

import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/loading";
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import WhyUs from "@/components/why-us";
import Gallery from "@/components/gallery";
import InstagramSection from "@/components/instagram";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <AnimatePresence>
        <LoadingScreen />
      </AnimatePresence>
      
      {/* 
        The main structure of the JK Timbers Luxury Showroom.
        Each section corresponds to a navigation link and maintains 
        the cinematic, premium aesthetic required.
      */}
      <div style={{ position: "relative" }}>
        <Hero />
        <About />
        <Products />
        <WhyUs />
        <Gallery />
        <InstagramSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </div>
    </>
  );
}
