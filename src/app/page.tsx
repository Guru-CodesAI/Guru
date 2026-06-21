"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth scroll on component mount
  useEffect(() => {
    if (loading) return; // Wait until loaded to init smooth scrolling

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll refresh helper on anchor hash transitions
    const handleHashScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hash.startsWith("#")) {
        e.preventDefault();
        const targetEl = document.querySelector(target.hash);
        if (targetEl) {
          lenis.scrollTo(targetEl, { offset: -80 });
        }
      }
    };

    // Attach click events on anchor links
    const anchorLinks = document.querySelectorAll("a[href^='#']");
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleHashScroll);
    });

    return () => {
      lenis.destroy();
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleHashScroll);
      });
    };
  }, [loading]);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="flex flex-col min-h-screen bg-[#04060F] text-white">
          {/* Main Navigation Header */}
          <Navbar />

          {/* Interactive Sections */}
          <main className="flex-1 w-full">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Achievements />
            <Certifications />
            <Journey />
            <Contact />
          </main>

          {/* Core Footer */}
          <Footer />

          {/* Global Audio Controller */}
          <AudioPlayer />
        </div>
      )}
    </>
  );
}
