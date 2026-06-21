"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight, Terminal, Award, Sparkles } from "lucide-react";

interface TimelineItem {
  title: string;
  details: string;
  date: string;
  type: "hackathon" | "competition" | "summit" | "convention";
  result?: string;
}

const journeyItems: TimelineItem[] = [
  {
    title: "InnovateX AI Hackathon",
    details: "Built SkillForge, an AI-powered partner matcher predicting compatibility scores for hackathon teams.",
    date: "2026",
    type: "hackathon",
    result: "13th Place out of 317 Teams / Top 15 National Finalist",
  },
  {
    title: "India AI Impact Summit",
    details: "Represented student AI developer group showcasing cloud deployment practices and LLM pipelines.",
    date: "2026",
    type: "summit",
    result: "Delegate & Presenter",
  },
  {
    title: "CodeStrike 2026 & Code Relay 2K26",
    details: "Fast-paced code relays solving sequential programming and algorithm optimization challenges.",
    date: "2026",
    type: "competition",
    result: "2nd Prize Winner",
  },
  {
    title: "KR IDEAI-26 & Tech Innova'26",
    details: "Pitched ideation decks on automation in cloud infrastructure and low-code AI systems.",
    date: "2026",
    type: "competition",
    result: "Finalist & Best Pitch",
  },
  {
    title: "AI WebForge Hackathon",
    details: "Built and launched AI templates for design-to-code pipelines in under 36 hours.",
    date: "2025",
    type: "hackathon",
    result: "3rd Place Podium",
  },
  {
    title: "Hack4Us Hackathon",
    details: "Developed emergency assistance dashboards for real-time offline communications.",
    date: "2025",
    type: "hackathon",
    result: "6th Place Finalist",
  },
  {
    title: "GitHub Portfolio Analyzer Hackathon",
    details: "Created semantic analysis tool analyzing user profiles using Gemini API.",
    date: "2025",
    type: "hackathon",
    result: "Top Developer Pick",
  },
  {
    title: "Nation Building Competition",
    details: "National project submission proposing cloud storage solutions for digital ID systems in rural areas.",
    date: "2025",
    type: "competition",
    result: "Special Recognition",
  },
  {
    title: "Open Source Hackathon & Code Clash",
    details: "Contributed pull requests to machine learning repos and took part in competitive coding sprints.",
    date: "2025",
    type: "competition",
  },
  {
    title: "Frontend Odyssey",
    details: "Designed and built zero-dependency interactive UI animations and landing pages.",
    date: "2024",
    type: "competition",
    result: "Best Creative UX Award",
  },
  {
    title: "ISTE Convention & Code-A-Thon",
    details: "Competed in core database architecture and basic backend API structure challenges.",
    date: "2024",
    type: "convention",
    result: "Active Competitor",
  },
  {
    title: "TechTrove Competition",
    details: "Designed custom dashboards for tracking sensor nodes in Internet-of-Things setups.",
    date: "2024",
    type: "competition",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 px-6 md:px-12 lg:px-24 w-full bg-[#04060F] overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-[30%] left-0 w-[400px] h-[400px] ambient-glow-purple rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[300px] h-[300px] ambient-glow-blue rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 z-10 relative">
        {/* Section Header */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 text-xs font-mono tracking-widest text-primary uppercase">
            <Calendar size={12} />
            <span>05 // TIMELINE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            HACKATHON JOURNEY
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto md:mx-0" />
        </div>

        {/* Timeline Circuit */}
        <div className="relative border-l border-white/5 md:ml-32 py-4 space-y-10 pl-6 md:pl-10">
          
          {/* Vertical Glowing Wire line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-secondary to-transparent" />

          {journeyItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group transition-all duration-300"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[30px] md:-left-[46px] top-1.5 w-3 h-3 rounded-full bg-[#04060F] border-2 border-primary group-hover:bg-primary transition-all duration-300 shadow-[0_0_10px_rgba(0,217,255,0.4)]" />

              {/* Date Box floating on left on desktop */}
              <div className="hidden md:block absolute -left-40 top-1.5 w-24 text-right">
                <span className="font-mono text-xs font-bold tracking-widest text-primary bg-primary/5 border border-primary/20 px-2 py-0.5 rounded">
                  {item.date}
                </span>
              </div>

              {/* Card Container */}
              <div className="p-5 bg-white/2 border border-white/5 rounded-xl hover:border-secondary/20 hover:bg-white/4 transition-all duration-300 max-w-3xl relative">
                
                {/* Mobile Date tag */}
                <div className="md:hidden mb-2">
                  <span className="font-mono text-[10px] font-bold text-primary bg-primary/5 border border-primary/20 px-2 py-0.5 rounded">
                    {item.date}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Category Type Tag */}
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 bg-white/5 border border-white/5 px-2 py-0.5 rounded w-fit">
                    {item.type}
                  </span>
                </div>

                <p className="text-sm text-muted mt-2 leading-relaxed font-sans">
                  {item.details}
                </p>

                {item.result && (
                  <div className="mt-3 flex items-center space-x-2 text-xs text-accent">
                    <Award size={12} className="shrink-0" />
                    <span className="font-mono font-medium">{item.result}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
