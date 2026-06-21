"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, Flame, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface Achievement {
  title: string;
  sub: string;
  detail: string;
  rank: string;
  metric: string;
  icon: React.ReactNode;
  themeColor: string; // Tailwind glow border color
}

const achievements: Achievement[] = [
  {
    title: "InnovateX AI Hackathon",
    sub: "National Scale Competition",
    detail: "Developed an AI-driven teammate prediction algorithm. Ranked highly in system execution speed and product viability.",
    rank: "13th Place",
    metric: "out of 317 Teams",
    icon: <Trophy className="text-accent" size={24} />,
    themeColor: "hover:border-accent/40 hover:shadow-glow-gold",
  },
  {
    title: "AI WebForge",
    sub: "Full-Stack Web Innovation",
    detail: "Built a high-fidelity web app using Next.js and integrated AI workflows to automate content layout recommendations.",
    rank: "3rd Place",
    metric: "Regional Podium Finish",
    icon: <Award className="text-primary" size={24} />,
    themeColor: "hover:border-primary/40 hover:shadow-glow-cyan",
  },
  {
    title: "Code Relay 2K26",
    sub: "Algorithms & Fast Programming",
    detail: "Solved real-time algorithmic puzzles under speed challenges, focusing on data structure optimizations.",
    rank: "2nd Prize",
    metric: "National Runner-Up",
    icon: <Medal className="text-secondary" size={24} />,
    themeColor: "hover:border-secondary/40 hover:shadow-glow-purple",
  },
  {
    title: "Hack4Us",
    sub: "Social Impact Hackathon",
    detail: "Architected a decentralized tool for resource allocation in rural communities during natural emergency situations.",
    rank: "6th Place",
    metric: "Top 10 Finalist",
    icon: <Flame className="text-orange-400" size={24} />,
    themeColor: "hover:border-orange-500/40 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]",
  },
];

export default function Achievements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="achievements" className="relative py-24 px-6 md:px-12 lg:px-24 w-full bg-[#04060F] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-[20%] right-[30%] w-[300px] h-[300px] ambient-glow-blue rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 z-10 relative">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-primary uppercase">
            <Sparkles size={12} />
            <span>04 // RECOGNITIONS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            ACHIEVEMENTS
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className={`p-6 bg-white/2 border border-white/5 rounded-2xl flex flex-col justify-between hover:bg-white/4 transition-all duration-300 relative overflow-hidden group ${ach.themeColor}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                perspective: "1000px",
              }}
            >
              {/* Radial flashlight highlight tracking */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest block">
                      {ach.sub}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {ach.title}
                    </h3>
                  </div>
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                    {ach.icon}
                  </div>
                </div>

                <p className="text-sm text-muted leading-relaxed font-sans">
                  {ach.detail}
                </p>
              </div>

              {/* Stats highlights */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-baseline justify-between">
                <div>
                  <span className="text-[9px] font-mono text-white/40 uppercase block">Rank secured</span>
                  <span className="text-2xl font-display font-extrabold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                    {ach.rank}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono text-white/40 uppercase block">Scope</span>
                  <span className="text-sm font-mono font-medium text-white/80">
                    {ach.metric}
                  </span>
                </div>
              </div>

              {/* Decorative Corner lines */}
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-primary/20 group-hover:bg-primary transition-colors duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
