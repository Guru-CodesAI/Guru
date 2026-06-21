"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, MapPin, Target, Sparkles, BookOpen } from "lucide-react";

const education = {
  institution: "Mahendra Engineering College",
  degree: "B.Tech Artificial Intelligence & Data Science",
  duration: "2024 – 2028",
  cgpa: "8.17",
  location: "Tamil Nadu, India",
};

const brandTraits = [
  { letter: "G", name: "Growth", desc: "Constant learning and expanding skillsets across artificial intelligence, software design, and system architecture." },
  { letter: "V", name: "Vision", desc: "Identifying future tech trends and engineering real-world solutions that tackle modern societal challenges." },
  { letter: "G", name: "Grit", desc: "The persistence to debug, build, scale, and deliver solutions under tight competition hackathon timelines." },
  { letter: "V", name: "Victory", desc: "Striving for excellence, securing top national rankings, and winning recognition in major developer contests." }
];

const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Cloud Computing",
  "Software Development",
  "Web Development",
  "Open Source",
  "Startups",
  "Product Design",
  "Hackathons"
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12 lg:px-24 w-full bg-[#04060F] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] ambient-glow-purple rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 z-10 relative">
        
        {/* Section Title */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-primary uppercase">
            <Sparkles size={12} />
            <span>01 // SYNOPSIS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            ABOUT ME
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary" />
        </div>

        {/* Narrative & Traits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-muted text-lg leading-relaxed">
              I am an Artificial Intelligence & Data Science undergraduate passionate about building AI-powered products, solving real-world problems, and continuously exploring new technologies.
            </p>
            <p className="text-muted leading-relaxed">
              My drive comes from creating software that bridges the gap between complex neural configurations and elegant user experiences. I thrive in high-pressure team events and hackathons, turning rough concepts into functional, validated products.
            </p>

            {/* Brand Traits (Growth, Vision, Grit, Victory) */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono tracking-wider text-white/50 uppercase">
                THE GV FOUNDATION BRAND
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {brandTraits.map((trait, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white/2 border border-white/5 rounded-xl hover:border-secondary/20 hover:bg-white/4 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm bg-gradient-to-br from-primary/20 to-secondary/20 text-primary border border-primary/20">
                        {trait.letter}
                      </span>
                      <h4 className="font-display font-bold text-white text-base">
                        {trait.name}
                      </h4>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      {trait.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hologram Card / Education Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 text-primary/20 group-hover:text-primary transition-colors duration-300">
                <GraduationCap size={40} />
              </div>
              <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
                Academic Log
              </h3>
              <h4 className="text-xl font-display font-bold text-white mb-1">
                {education.degree}
              </h4>
              <p className="text-muted text-sm font-semibold mb-6 flex items-center">
                <BookOpen size={14} className="mr-1.5 text-secondary" />
                {education.institution}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase block">
                    Duration
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {education.duration}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase block">
                    Performance
                  </span>
                  <span className="text-sm font-semibold text-accent flex items-center">
                    <Award size={14} className="mr-1 text-accent animate-pulse" />
                    {education.cgpa} CGPA
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] font-mono text-muted uppercase block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white flex items-center mt-0.5">
                    <MapPin size={12} className="mr-1 text-primary" />
                    {education.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Interest Badges */}
            <div className="p-6 bg-white/2 border border-white/5 rounded-2xl">
              <h3 className="font-mono text-xs text-muted uppercase tracking-widest mb-4 flex items-center">
                <Target size={14} className="mr-2 text-primary" />
                Core Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1.5 bg-white/5 border border-white/5 rounded-md text-white/80 hover:border-primary/20 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
