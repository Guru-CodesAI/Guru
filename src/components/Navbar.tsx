"use client";

import { useEffect, useState } from "react";
import { Menu, X, ShieldAlert, Cpu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 px-6 md:px-12 lg:px-24 ${
        scrolled
          ? "bg-[#04060F]/70 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center space-x-2 group cursor-pointer" aria-label="Gurunathan V Logo">
          {/* Custom SVG Logo: Combining G, V, Neural and Circuit style */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:scale-105 transition-transform duration-300"
          >
            {/* Neural Net Nodes inside G shape */}
            <path
              d="M50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80C58.2843 80 65.7843 76.6421 71.2132 71.2132"
              stroke="#00D9FF"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Circuit Line representing V */}
            <path
              d="M40 45L55 75L80 25"
              stroke="#6D5DF6"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Connecting Circuit nodes */}
            <circle cx="80" cy="25" r="4.5" fill="#FFC857" stroke="#04060F" strokeWidth="1.5" />
            <circle cx="40" cy="45" r="4.5" fill="#00D9FF" stroke="#04060F" strokeWidth="1.5" />
            <circle cx="20" cy="50" r="4.5" fill="#6D5DF6" stroke="#04060F" strokeWidth="1.5" />
            <circle cx="71.2" cy="71.2" r="4.5" fill="#00D9FF" stroke="#04060F" strokeWidth="1.5" />
          </svg>
          <span className="font-display font-extrabold text-lg text-white tracking-widest group-hover:text-primary transition-colors">
            GV
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 font-mono text-xs text-muted hover:text-white uppercase tracking-wider transition-colors relative group cursor-pointer"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-4 py-2 border border-primary/20 bg-primary/5 hover:bg-primary hover:text-background font-mono text-xs uppercase tracking-wider text-primary rounded transition-all duration-300 cursor-pointer shadow-glow-cyan/10"
          >
            PING_OPERATOR
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-muted hover:text-white lg:hidden border border-white/10 rounded-lg bg-white/2 cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 p-6 bg-[#04060F]/95 backdrop-blur-lg border-b border-white/5 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-sm text-muted hover:text-white uppercase tracking-widest py-2 border-b border-white/5 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="w-full text-center px-4 py-3 bg-primary text-background font-mono text-xs uppercase tracking-wider font-extrabold rounded cursor-pointer"
          >
            PING_OPERATOR
          </a>
        </div>
      )}
    </header>
  );
}
