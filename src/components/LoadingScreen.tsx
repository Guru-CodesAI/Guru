"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const statusLogs = [
  "INITIALIZING DIGITAL OPERATOR ENVIRONMENT...",
  "ESTABLISHING SECURE LLM PIPELINES...",
  "COMPILING CIRCUIT BRAND GV...",
  "DETERMINING IDENTITY LOGS...",
  "CALIBRATING VISUAL REFLECTIONS...",
  "DECRYPTING ARCHIVES...",
  "BOOT SECURE SYSTEM..."
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    // Progress counter timer
    const progressInterval = setInterval(() => {
      setProgress((prev: number) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500); // Small pause before fading out
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4; // Randomized progression steps
        return Math.min(100, prev + step);
      });
    }, 120);

    // Tech diagnostic logs rotation timer
    const logsInterval = setInterval(() => {
      setLogIndex((prev: number) => (prev + 1) % statusLogs.length);
    }, 350);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logsInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#04060F] flex flex-col items-center justify-center p-6 select-none">
      
      {/* High-tech ambient glowing lights behind the loading components */}
      <div className="absolute w-[250px] h-[250px] bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full filter blur-[60px] animate-pulse-slow pointer-events-none" />

      <div className="w-full max-w-md flex flex-col items-center space-y-8 z-10 text-center">
        
        {/* Pulsing GV Logo */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center space-x-3 mb-2"
        >
          <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80C58.2843 80 65.7843 76.6421 71.2132 71.2132" stroke="#00D9FF" strokeWidth="6" strokeLinecap="round" />
            <path d="M40 45L55 75L80 25" stroke="#6D5DF6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="80" cy="25" r="5" fill="#FFC857" />
          </svg>
        </motion.div>

        {/* Branding header */}
        <div className="space-y-1">
          <h2 className="font-display font-extrabold text-2xl tracking-widest text-white">
            GURUNATHAN V
          </h2>
          <p className="font-mono text-[9px] text-primary uppercase tracking-widest">
            Futuristic Operator // Portfolio System
          </p>
        </div>

        {/* Technical Loading Circuit Bar */}
        <div className="w-full space-y-2">
          {/* Progress bar */}
          <div className="w-full h-1 bg-white/5 border border-white/10 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage Indicator */}
          <div className="flex justify-between font-mono text-[10px] text-muted">
            <span>CORE_INITIALIZATION</span>
            <span className="text-primary font-bold">{progress}%</span>
          </div>
        </div>

        {/* Diagnostic rotating logs terminal box */}
        <div className="w-full p-4 bg-white/2 border border-white/5 rounded-xl text-left h-20 flex flex-col justify-center">
          <div className="flex items-center space-x-2 text-[10px] font-mono text-muted mb-1">
            <Terminal size={10} className="text-primary animate-pulse" />
            <span>TERMINAL_LOG</span>
          </div>
          <p className="font-mono text-[9px] text-white/80 line-clamp-2 uppercase">
            &gt; {statusLogs[logIndex]}
          </p>
        </div>

        {/* License footer */}
        <p className="font-mono text-[8px] text-white/20 uppercase tracking-widest pt-4">
          MAHENDRA MEC MECH-AI DIVISION © 2026
        </p>

      </div>
    </div>
  );
}
