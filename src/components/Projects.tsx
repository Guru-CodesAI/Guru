"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Code2, Award, Terminal } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  features?: string[];
  tech: string[];
  github: string;
  demo: string;
  achievement?: string;
  glowColor: string; // Tailwind glow class name
}

const projects: Project[] = [
  {
    title: "SkillForge",
    desc: "AI-powered teammate recommendation and compatibility prediction platform for hackathon participants. It matches candidate skills, predicts team compatibility, and optimizes rosters using machine learning.",
    features: ["Skill Matching", "Compatibility Prediction", "Team Optimization", "AI Recommendations"],
    tech: ["Python", "Flask", "React", "Scikit-learn", "SQLite"],
    github: "https://github.com/Guru-CodesAI",
    demo: "https://skillforge-seven-psi.vercel.app/",
    achievement: "Top 15 National Finalist (13th / 317 Teams)",
    glowColor: "hover:shadow-glow-cyan hover:border-primary/30",
  },
  {
    title: "GitHub Portfolio Analyzer",
    desc: "An intelligent analyzer that scans developer repositories, parses commit frequencies, code quality, and language profiles to generate comprehensive AI-driven developer insights and metrics.",
    features: ["Repo Scanning", "Metric Evaluation", "Developer Profiles", "AI Insights Generation"],
    tech: ["Next.js", "React", "Gemini API", "GitHub API", "Tailwind CSS"],
    github: "https://github.com/Guru-CodesAI",
    demo: "https://githubportfolio-ai.vercel.app",
    glowColor: "hover:shadow-glow-purple hover:border-secondary/30",
  },
  {
    title: "APEX F1",
    desc: "A premium Formula 1 digital experience featuring immersive interactive storytelling, telemetry graphics, driver analytics, and high-performance user interface design.",
    features: ["Immersive Storytelling", "Telemetry Simulation", "Responsive Interface", "Driver Statistics"],
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Three.js"],
    github: "https://github.com/Guru-CodesAI",
    demo: "https://apex-f1-tan.vercel.app",
    glowColor: "hover:shadow-glow-gold hover:border-accent/30",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 lg:px-24 w-full bg-[#04060F] overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] ambient-glow-blue rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] ambient-glow-gold rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-primary uppercase">
              <Code2 size={12} />
              <span>02 // ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
              FEATURED PROJECTS
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary" />
          </div>
          <p className="text-muted max-w-md text-sm font-mono">
            A curated index of production-ready web products, full-stack applications, and artificial intelligence solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group flex flex-col justify-between glass-panel p-6 rounded-2xl relative overflow-hidden transition-all duration-500 border border-white/5 bg-white/2 ${project.glowColor}`}
            >
              {/* Subtle top edge gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-primary/40 transition-all duration-500" />
              
              <div className="space-y-6">
                
                {/* Project Heading & Tech Stack */}
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="text-primary opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <Terminal size={18} />
                  </div>
                </div>

                {/* Achievement Badge */}
                {project.achievement && (
                  <div className="flex items-center space-x-1.5 text-xs text-accent bg-accent/5 border border-accent/20 px-2.5 py-1 rounded-md w-fit">
                    <Award size={12} className="shrink-0" />
                    <span className="font-mono uppercase tracking-wider">{project.achievement}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed font-sans">
                  {project.desc}
                </p>

                {/* Features Checklist */}
                {project.features && (
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                      Core Features
                    </span>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-xs text-white/70 flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 shrink-0" />
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Tech Tags and Links */}
              <div className="mt-8 space-y-4 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/5 text-white/60 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Interaction Links */}
                <div className="flex items-center justify-between pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-xs font-mono text-muted hover:text-white transition-colors cursor-pointer"
                  >
                    <Github size={14} />
                    <span>SOURCE_CODE</span>
                  </a>
                  
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-background rounded-md text-xs font-mono transition-all duration-300 cursor-pointer shadow-glow-cyan/10"
                  >
                    <span>LIVE_DEMO</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
