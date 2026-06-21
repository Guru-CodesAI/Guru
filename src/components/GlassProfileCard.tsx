"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Cpu, MapPin, Zap } from "lucide-react";
import Image from "next/image";

/* ── GitHub avatar URL ── */
const AVATAR_URL = "https://avatars.githubusercontent.com/u/233450144?v=4";

/* ─────────────────────────────────────────────────
   Animated scan-line that sweeps top→bottom on repeat
───────────────────────────────────────────────── */
function ScanLine() {
  return (
    <motion.div
      aria-hidden
      className="absolute inset-x-0 h-[2px] pointer-events-none z-30"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(0,217,255,0.7) 50%, transparent 100%)",
      }}
      initial={{ top: "-4px" }}
      animate={{ top: ["0%", "100%"] }}
      transition={{ duration: 3.2, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
    />
  );
}

/* ─────────────────────────────────────────────────
   HUD corner brackets
───────────────────────────────────────────────── */
function HUDCorners() {
  const cls =
    "absolute w-5 h-5 pointer-events-none z-30";
  const border = "border-primary/60";
  return (
    <>
      <span className={`${cls} top-0 left-0 border-t-[1.5px] border-l-[1.5px] ${border} rounded-tl-sm`} />
      <span className={`${cls} top-0 right-0 border-t-[1.5px] border-r-[1.5px] ${border} rounded-tr-sm`} />
      <span className={`${cls} bottom-0 left-0 border-b-[1.5px] border-l-[1.5px] ${border} rounded-bl-sm`} />
      <span className={`${cls} bottom-0 right-0 border-b-[1.5px] border-r-[1.5px] ${border} rounded-br-sm`} />
    </>
  );
}

/* ─────────────────────────────────────────────────
   Floating "IDENTITY VERIFIED" badge above the card
───────────────────────────────────────────────── */
function Badge({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="badge"
          initial={{ opacity: 0, y: 10, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.92 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap
                     px-3 py-1.5 rounded-full font-mono text-[9px] tracking-widest uppercase
                     bg-primary/10 border border-primary/30 text-primary
                     backdrop-blur-lg shadow-[0_0_16px_rgba(0,217,255,0.25)]"
        >
          <motion.span
            className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-1.5 align-middle"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          IDENTITY: VERIFIED
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────
   Animated background glow blobs inside card
───────────────────────────────────────────────── */
function GlowBlobs() {
  return (
    <>
      <motion.div
        aria-hidden
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/25 filter blur-[36px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-secondary/25 filter blur-[32px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────
   Main export: GlassProfileCard
───────────────────────────────────────────────── */
export default function GlassProfileCard() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cycleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Auto-cycle: wait 1.8 s → fade in → stay 6 s → fade out → pause 3 s → repeat */
  useEffect(() => {
    const startCycle = () => {
      setVisible(true);
      cycleRef.current = setTimeout(() => {
        if (!hovered) {
          setVisible(false);
          cycleRef.current = setTimeout(startCycle, 3200);
        } else {
          // If user is hovering, extend the visible period
          cycleRef.current = setTimeout(() => {
            setVisible(false);
            cycleRef.current = setTimeout(startCycle, 3200);
          }, 3000);
        }
      }, 6200);
    };

    const init = setTimeout(startCycle, 1800);
    return () => {
      clearTimeout(init);
      if (cycleRef.current) clearTimeout(cycleRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    /* Positioned bottom-right of the hero right column */
    <div className="absolute right-2 bottom-8 lg:right-4 lg:bottom-12 z-20">
      <Badge show={visible} />

      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key="profile-card"
            initial={{ opacity: 0, y: 32, scale: 0.9, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0,  scale: 1,   filter: "blur(0px)"  }}
            exit={{   opacity: 0, y: -18, scale: 0.93, filter: "blur(8px)"  }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
            style={{ willChange: "transform, opacity, filter" }}
          >
            {/* ── Glass card shell ────────────────────────── */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                width: 200,
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(28px) saturate(160%)",
                WebkitBackdropFilter: "blur(28px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.13)",
                boxShadow:
                  "0 8px 48px rgba(0,217,255,0.18), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.15)",
              }}
            >
              <HUDCorners />
              <ScanLine />
              <GlowBlobs />

              {/* ── Avatar photo ───────────────────────────── */}
              <div className="relative w-full h-[195px] overflow-hidden">
                <Image
                  src={AVATAR_URL}
                  alt="Gurunathan V"
                  fill
                  className="object-cover object-top"
                  style={{
                    transform: hovered ? "scale(1.07)" : "scale(1)",
                    transition: "transform 0.6s cubic-bezier(0.25,1,0.5,1)",
                  }}
                  sizes="200px"
                  priority
                />

                {/* Bottom photo fade into card body */}
                <div
                  className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(4,6,15,0.95) 0%, transparent 100%)",
                  }}
                />

                {/* Top HUD status chip inside photo */}
                <div className="absolute top-2.5 left-2.5 flex items-center space-x-1
                                px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm
                                border border-white/10">
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  />
                  <span className="font-mono text-[8px] text-emerald-300 uppercase tracking-widest">
                    Online
                  </span>
                </div>

                {/* Right corner: AI badge */}
                <div className="absolute top-2.5 right-2.5 px-1.5 py-0.5
                                rounded bg-primary/20 border border-primary/40 backdrop-blur-sm">
                  <span className="font-mono text-[8px] text-primary tracking-widest">AI</span>
                </div>
              </div>

              {/* ── Info panel ─────────────────────────────── */}
              <div className="px-4 pt-3 pb-4 space-y-2">
                <div>
                  <p className="font-display font-extrabold text-white text-[14px] tracking-tight leading-tight">
                    Gurunathan V
                  </p>
                  <div className="flex items-center space-x-1 mt-0.5 text-primary">
                    <Cpu size={9} strokeWidth={2} />
                    <span className="font-mono text-[8px] uppercase tracking-widest">
                      AI Engineer · Founder
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-white/40">
                  <MapPin size={8} strokeWidth={2} />
                  <span className="font-mono text-[8px]">Tamil Nadu, India</span>
                </div>

                {/* Divider + status bar */}
                <div
                  className="flex items-center justify-between pt-2"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-center space-x-1 text-accent">
                    <Zap size={8} strokeWidth={2} />
                    <span className="font-mono text-[8px] uppercase tracking-wider">
                      Open to Work
                    </span>
                  </div>
                  <span className="font-mono text-[8px] text-white/30 uppercase">
                    B.Tech AI
                  </span>
                </div>
              </div>
            </div>

            {/* Outer pulsing cyan glow ring on hover */}
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{
                boxShadow: hovered
                  ? "0 0 0 2px rgba(0,217,255,0.55), 0 0 40px rgba(0,217,255,0.3)"
                  : "0 0 0 1px rgba(0,217,255,0.15)",
              }}
              transition={{ duration: 0.35 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
