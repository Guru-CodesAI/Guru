"use client";

import { Cpu, Terminal, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#040209] border-t border-white/5 py-12 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto space-y-10 z-10 relative">
        
        {/* Layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80C58.2843 80 65.7843 76.6421 71.2132 71.2132" stroke="#00D9FF" strokeWidth="6" strokeLinecap="round" />
                <path d="M40 45L55 75L80 25" stroke="#6D5DF6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="80" cy="25" r="5" fill="#FFC857" />
              </svg>
              <span className="font-display font-extrabold text-white tracking-widest text-base">
                GURUNATHAN V
              </span>
            </div>
            <p className="text-xs text-muted max-w-sm font-sans leading-relaxed">
              B.Tech Artificial Intelligence & Data Science student. Engineering user-centric products and research prototypes backed by machine learning models and modern stack deployments.
            </p>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
              Sections Index
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a href="#about" className="text-muted hover:text-primary transition-colors">ABOUT</a>
              <a href="#projects" className="text-muted hover:text-primary transition-colors">PROJECTS</a>
              <a href="#skills" className="text-muted hover:text-primary transition-colors">SKILLS</a>
              <a href="#achievements" className="text-muted hover:text-primary transition-colors">AWARDS</a>
              <a href="#certifications" className="text-muted hover:text-primary transition-colors">DEEDS</a>
              <a href="#contact" className="text-muted hover:text-primary transition-colors">CONTACT</a>
            </div>
          </div>

          {/* System Telemetry Logs */}
          <div className="md:col-span-3 space-y-3 bg-white/2 border border-white/5 p-4 rounded-xl">
            <h4 className="text-[10px] font-mono text-primary uppercase tracking-widest flex items-center">
              <Terminal size={10} className="mr-1.5" />
              SYSTEM_DIAGNOSTICS
            </h4>
            <div className="space-y-1 text-[9px] font-mono text-muted uppercase">
              <div className="flex justify-between">
                <span>Core Framework:</span>
                <span className="text-white">Next.js 15.1</span>
              </div>
              <div className="flex justify-between">
                <span>UI Engine:</span>
                <span className="text-white">React 19</span>
              </div>
              <div className="flex justify-between">
                <span>Diagnostics:</span>
                <span className="text-emerald-400">STABLE // OK</span>
              </div>
              <div className="flex justify-between">
                <span>LOC:</span>
                <span className="text-white">11.37° N, 77.98° E</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom footer bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-muted uppercase tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()} Gurunathan V. All code logs reserved. Brand identity: GV.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-white/5 hover:bg-primary hover:text-background border border-white/10 hover:border-primary text-muted transition-all duration-300 rounded font-mono text-xs uppercase cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>BACK_TO_ROOT</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
