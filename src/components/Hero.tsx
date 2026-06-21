"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import CanvasSoldier from "./CanvasSoldier";
import { Terminal, ChevronDown, ExternalLink } from "lucide-react";

const GITHUB_AVATAR = "https://avatars.githubusercontent.com/u/233450144?v=4";

const roles = [
  "AI Engineer",
  "Product Builder",
  "Hackathon Competitor",
  "Problem Solver",
  "Future Founder",
];

const stats = [
  { value: "13th", label: "of 317 Teams", sub: "InnovateX AI" },
  { value: "Top 15", label: "National Finalist", sub: "India AI Impact" },
  { value: "3rd Place", label: "AI WebForge", sub: "Hackathon" },
  { value: "2nd Prize", label: "Code Relay", sub: "National Event" },
  { value: "20+", label: "Certifications", sub: "AI & ML" },
  { value: "15+", label: "Technical Events", sub: "Attended" },
];

/* ──────────────────────────────────────────────
   Animated HUD scanline that sweeps across the face
────────────────────────────────────────────── */
function FaceScanline() {
  return (
    <motion.div
      className="absolute left-0 w-full h-[2px] pointer-events-none z-20"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(0,217,255,0.6) 30%, rgba(0,217,255,1) 50%, rgba(0,217,255,0.6) 70%, transparent 100%)",
        boxShadow: "0 0 20px rgba(0,217,255,0.6), 0 0 40px rgba(0,217,255,0.3)",
      }}
      animate={{ top: ["-2%", "102%"] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
    />
  );
}

/* ──────────────────────────────────────────────
   HUD corner brackets
────────────────────────────────────────────── */
function HUDCorners({ size = "w-5 h-5" }: { size?: string }) {
  const cls = `absolute ${size} pointer-events-none z-20`;
  return (
    <>
      <span className={`${cls} top-0 left-0 border-t-2 border-l-2 border-cyan-400/70`} />
      <span className={`${cls} top-0 right-0 border-t-2 border-r-2 border-cyan-400/70`} />
      <span className={`${cls} bottom-0 left-0 border-b-2 border-l-2 border-cyan-400/70`} />
      <span className={`${cls} bottom-0 right-0 border-b-2 border-r-2 border-cyan-400/70`} />
    </>
  );
}

/* ──────────────────────────────────────────────
   LARGE Profile Face — Big, clear, always visible
────────────────────────────────────────────── */
function ProfileFace() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
    >
      {/* ─── Floating "IDENTITY VERIFIED" badge ─── */}
      <motion.div
        className="mb-4 whitespace-nowrap z-30
                   px-4 py-2 rounded-full font-mono text-[10px] tracking-[0.2em] uppercase
                   bg-cyan-500/10 border border-cyan-400/30 text-cyan-400
                   backdrop-blur-xl shadow-[0_0_24px_rgba(0,217,255,0.2)]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.span
          className="inline-block w-2 h-2 rounded-full bg-cyan-400 mr-2 align-middle"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        IDENTITY: VERIFIED
      </motion.div>

      {/* ─── Main Photo Container ─── */}
      <motion.div
        className="relative cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Outer animated glow ring */}
        <motion.div
          className="absolute -inset-1 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? "0 0 0 2px rgba(0,217,255,0.7), 0 0 60px rgba(0,217,255,0.35), 0 0 120px rgba(0,217,255,0.15)"
              : "0 0 0 1px rgba(0,217,255,0.25), 0 0 40px rgba(0,217,255,0.12)",
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Glass card */}
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            width: 320,
            background: "rgba(4,8,20,0.7)",
            backdropFilter: "blur(20px) saturate(150%)",
            WebkitBackdropFilter: "blur(20px) saturate(150%)",
            border: "1px solid rgba(0,217,255,0.15)",
            boxShadow:
              "0 12px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,217,255,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <HUDCorners />
          <FaceScanline />

          {/* Animated glow blobs inside card */}
          <motion.div
            aria-hidden
            className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-cyan-500/15 filter blur-[50px] pointer-events-none"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-purple-500/15 filter blur-[40px] pointer-events-none"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* ─── LARGE HD Face Photo ─── */}
          <div className="relative w-full overflow-hidden" style={{ height: 380 }}>
            <Image
              src={GITHUB_AVATAR}
              alt="Gurunathan V — AI Engineer"
              fill
              className="object-cover object-top"
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.7s cubic-bezier(0.25,1,0.5,1)",
              }}
              sizes="320px"
              priority
              quality={100}
              unoptimized
            />

            {/* Bottom gradient fade into info panel */}
            <div
              className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(4,8,20,0.98) 0%, rgba(4,8,20,0.6) 50%, transparent 100%)",
              }}
            />

            {/* Status badges */}
            <div
              className="absolute top-4 left-4 flex items-center space-x-1.5
                          px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md
                          border border-white/10"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-emerald-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
              <span className="font-mono text-[10px] text-emerald-300 uppercase tracking-widest font-medium">
                Online
              </span>
            </div>

            <div
              className="absolute top-4 right-4 px-2.5 py-1.5
                          rounded-md bg-cyan-500/15 border border-cyan-400/40 backdrop-blur-md"
            >
              <span className="font-mono text-[10px] text-cyan-400 tracking-[0.15em] font-bold">
                AI
              </span>
            </div>
          </div>

          {/* ─── Info Panel ─── */}
          <div className="px-5 pt-1 pb-5 space-y-3">
            <div>
              <p className="font-display font-extrabold text-white text-lg tracking-tight leading-tight">
                Gurunathan V
              </p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-[0.15em]">
                  AI Engineer
                </span>
                <span className="text-white/20">·</span>
                <span className="font-mono text-[10px] text-purple-400 uppercase tracking-[0.15em]">
                  Founder
                </span>
              </div>
            </div>

            <p className="font-mono text-[10px] text-white/35 tracking-wide">
              📍 Tamil Nadu, India
            </p>

            {/* Divider + status bar */}
            <div
              className="flex items-center justify-between pt-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center space-x-1.5">
                <span className="font-mono text-[10px] text-amber-400 uppercase tracking-wider font-semibold">
                  ⚡ Open to Work
                </span>
              </div>
              <span className="font-mono text-[10px] text-white/25 uppercase tracking-wider">
                B.Tech AI&DS
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   MAIN HERO SECTION
══════════════════════════════════════════════ */
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev: number) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-24 pb-12 px-6 md:px-12 lg:px-24"
    >
      {/* ═══ BACKGROUND LAYERS ═══ */}

      {/* Grid pattern */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none z-[1]" />
      <div className="absolute inset-0 cyber-grid-dots opacity-25 pointer-events-none z-[1]" />

      {/* Ambient glow orbs */}
      <div className="absolute top-[15%] left-[5%] w-[350px] h-[350px] ambient-glow-blue rounded-full filter blur-[100px] pointer-events-none z-[1]" />
      <div className="absolute bottom-[25%] right-[15%] w-[300px] h-[300px] ambient-glow-purple rounded-full filter blur-[90px] pointer-events-none z-[1]" />

      {/* ═══ FULL-SCREEN HD SOLDIER IMAGE ═══ */}
      <div className="absolute inset-0 w-full h-full z-[2] overflow-hidden pointer-events-none">
        <CanvasSoldier />
      </div>

      {/* ═══ CONTENT ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-[10] my-auto">

        {/* ─── Left Column: Text Content ─── */}
        <motion.div
          className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center space-y-7"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* System Status Tag */}
          <motion.div
            className="flex items-center space-x-2 text-xs font-mono tracking-widest text-primary bg-primary/5 border border-primary/20 px-3 py-1.5 w-fit rounded-full uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <Terminal size={12} className="inline mr-1" />
            <span>OPERATOR STATE // GURUNATHAN_V</span>
          </motion.div>

          {/* Name Heading */}
          <div className="space-y-3">
            <motion.h1
              className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-none text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            >
              GURUNATHAN V
            </motion.h1>
            <div className="h-10 md:h-12 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-2xl md:text-4xl font-accent font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"
                >
                  {roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Description */}
          <motion.p
            className="text-muted text-base md:text-lg max-w-lg font-sans leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Building intelligent products, exploring emerging technologies, and
            transforming ambitious ideas into real-world impact through Artificial
            Intelligence. B.Tech Artificial Intelligence & Data Science
            Undergraduate.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              id="cta-projects"
              href="#projects"
              className="relative inline-flex items-center justify-center px-8 py-3.5 font-mono text-sm tracking-wider uppercase border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-background font-bold hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] cursor-pointer"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              View Projects
            </a>
            <a
              id="cta-journey"
              href="#journey"
              className="relative inline-flex items-center justify-center px-8 py-3.5 font-mono text-sm tracking-wider uppercase border border-white/20 text-white transition-all duration-300 hover:border-accent hover:text-accent font-semibold cursor-pointer"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              Explore Journey
            </a>
            <a
              id="cta-contact"
              href="#contact"
              className="relative inline-flex items-center justify-center px-8 py-3.5 font-mono text-sm tracking-wider uppercase text-muted hover:text-white transition-all duration-300 cursor-pointer"
            >
              Contact Me
              <ExternalLink size={14} className="ml-1.5 opacity-60" />
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-6 border-t border-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative p-3 bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/20"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.08, duration: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <h4 className="text-lg md:text-xl font-display font-extrabold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </h4>
                <p className="text-[10px] font-mono text-muted uppercase mt-0.5 tracking-wider">
                  {stat.label}
                </p>
                <p className="text-[9px] text-white/40 font-sans mt-0.5">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* The restricted ProfileFace card has been completely removed.
            The jaw-dropping glassmorphism spotlight and your clear face are now correctly
            rendered across the ENTIRE SCREEN via CanvasSoldier in the background! */}
        <div className="lg:col-span-6 xl:col-span-5 w-full hidden lg:flex items-center justify-center relative z-[15]">
           {/* Empty to allow background canvas to shine */}
        </div>
      </div>

      {/* Scroll Down */}
      <motion.div
        className="flex justify-center w-full mt-8 z-[10]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <a
          id="btn-scroll-down"
          href="#about"
          aria-label="Scroll Down"
          className="text-muted hover:text-primary transition-colors"
        >
          <ChevronDown size={28} />
        </a>
      </motion.div>
    </section>
  );
}
