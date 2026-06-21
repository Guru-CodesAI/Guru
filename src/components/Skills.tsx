"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, Database, Cloud, Wrench, Sparkles } from "lucide-react";
import Image from "next/image";

interface SkillItem {
  name: string;
  svgName?: string; // If we have the SVG in public/assets/
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Code2 className="text-primary" size={18} />,
    skills: [
      { name: "Python", svgName: "python" },
      { name: "Java", svgName: "java" },
      { name: "C", svgName: "c" },
      { name: "JavaScript", svgName: "javascript" },
      { name: "HTML5", svgName: "html-5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "AI & Data Science",
    icon: <Cpu className="text-secondary" size={18} />,
    skills: [
      { name: "Machine Learning" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Scikit-learn" },
      { name: "Data Analysis" },
      { name: "Feature Engineering" },
      { name: "Model Evaluation" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="text-accent" size={18} />,
    skills: [
      { name: "AWS", svgName: "aws" },
      { name: "Docker" },
      { name: "Git", svgName: "git" },
      { name: "GitHub", svgName: "github" },
      { name: "Vercel" },
    ],
  },
  {
    title: "Tools & Libraries",
    icon: <Wrench className="text-white/60" size={18} />,
    skills: [
      { name: "Figma", svgName: "figma" },
      { name: "Firebase Studio", svgName: "firebase-studio" },
      { name: "Kaggle", svgName: "kaggle" },
      { name: "Streamlit", svgName: "streamlit" },
      { name: "VS Code" },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="text-primary" size={18} />,
    skills: [
      { name: "SQLite" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 lg:px-24 w-full bg-[#04060F] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-10 left-[40%] w-[350px] h-[350px] ambient-glow-purple rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 z-10 relative">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-primary uppercase">
            <Sparkles size={12} />
            <span>03 // MATRIX</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            SKILLS & TECHNOLOGIES
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary" />
        </div>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/2 border border-white/5 rounded-2xl flex flex-col justify-between hover:border-primary/20 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Corner accent decorative graphic */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                {/* Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="p-2.5 bg-white/5 rounded-lg border border-white/5 shrink-0">
                    {category.icon}
                  </span>
                  <h3 className="font-display font-bold text-white text-lg">
                    {category.title}
                  </h3>
                </div>

                {/* Skill badges grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-center space-x-2.5 hover:bg-white/10 hover:border-white/10 transition-all duration-200"
                    >
                      {skill.svgName ? (
                        <div className="w-6 h-6 flex items-center justify-center shrink-0 bg-white/5 rounded-md p-1">
                          <img
                            src={`/assets/${skill.svgName}.svg`}
                            alt={skill.name}
                            width={16}
                            height={16}
                            className="object-contain"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                              // If image is missing, replace with a dot fallback or code tag
                              e.currentTarget.style.display = "none";
                              const fallback = e.currentTarget.parentElement?.querySelector(".fallback-dot");
                              if (fallback) fallback.classList.remove("hidden");
                            }}
                          />
                          <span className="fallback-dot hidden w-1.5 h-1.5 rounded-full bg-primary" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 flex items-center justify-center shrink-0 bg-white/5 rounded-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        </div>
                      )}
                      <span className="text-xs font-mono font-medium text-white/80 truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Console log status at bottom of cards */}
              <div className="mt-8 pt-4 border-t border-white/5 text-[9px] font-mono text-muted/60 uppercase tracking-widest flex items-center justify-between">
                <span>STATUS: LOADED</span>
                <span>SECURE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
