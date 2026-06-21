"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Instagram, Copy, Check, Send, Sparkles, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("vengaigurunathan2@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitted(true);
        // Trigger confetti celebrating connection
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#00D9FF", "#6D5DF6", "#FFC857"],
        });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError(true);
      }
    } catch(err) {
      setError(true);
    }
    
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 lg:px-24 w-full bg-[#04060F] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] ambient-glow-purple rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] ambient-glow-blue rounded-full filter blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 z-10 relative">
        {/* Section Header */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 text-xs font-mono tracking-widest text-primary uppercase">
            <Sparkles size={12} />
            <span>07 // TRANSMISSION</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            LET&apos;S BUILD AMAZING THINGS
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info and Social Links Column */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                Open to internships, hackathons, collaborations, startup opportunities, research work, and innovative projects. Let&apos;s establish a connection.
              </p>

              {/* Direct email copy container */}
              <div className="p-4 bg-slate-900/50 border border-white/10 rounded-xl flex items-center justify-between gap-4">
                <div className="flex items-center space-x-3 truncate">
                  <span className="p-2 bg-primary/10 border border-primary/20 text-primary rounded-lg">
                    <Mail size={18} />
                  </span>
                  <span className="font-mono text-sm text-white truncate font-bold">
                    vengaigurunathan2@gmail.com
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/40 hover:text-primary transition-all shrink-0 cursor-pointer"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Social Grid */}
            <div className="space-y-4 mt-8 lg:mt-0">
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest block">
                External Coordinates
              </span>
              <div className="grid grid-cols-3 gap-3">
                <a href="https://github.com/Guru-CodesAI" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900/50 border border-white/10 rounded-xl hover:border-primary/50 hover:bg-white/5 flex flex-col items-center justify-center text-center transition-all cursor-pointer group shadow-lg">
                  <Github size={20} className="text-white group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-mono text-slate-300 mt-2 group-hover:text-white transition-colors">GITHUB</span>
                </a>
                <a href="https://www.linkedin.com/in/gurunathan-v-521295367" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900/50 border border-white/10 rounded-xl hover:border-secondary/50 hover:bg-white/5 flex flex-col items-center justify-center text-center transition-all cursor-pointer group shadow-lg">
                  <Linkedin size={20} className="text-white group-hover:text-secondary transition-colors" />
                  <span className="text-[10px] font-mono text-slate-300 mt-2 group-hover:text-white transition-colors">LINKEDIN</span>
                </a>
                <a href="https://www.instagram.com/shadow_guru07" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900/50 border border-white/10 rounded-xl hover:border-accent/50 hover:bg-white/5 flex flex-col items-center justify-center text-center transition-all cursor-pointer group shadow-lg">
                  <Instagram size={20} className="text-white group-hover:text-accent transition-colors" />
                  <span className="text-[10px] font-mono text-slate-300 mt-2 group-hover:text-white transition-colors">INSTAGRAM</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 md:p-8 rounded-2xl relative shadow-2xl border border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Status messages */}
                {submitted && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 text-green-300 rounded-lg text-sm flex items-center space-x-2 font-bold shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                    <Check size={18} />
                    <span className="font-mono">TRANSMISSION SECURED TO DATABASE. TALK TO YOU SOON!</span>
                  </div>
                )}
                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg text-sm flex items-center space-x-2 font-bold shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                    <AlertCircle size={18} />
                    <span className="font-mono">CONNECTION FAILED OR MISSING FIELDS. PLEASE RETRY.</span>
                  </div>
                )}

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="form-name" className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                    Your Name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-4 py-3 text-base text-white font-bold placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all shadow-inner"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="form-email" className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                    Your Email Address
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-4 py-3 text-base text-white font-bold placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all shadow-inner"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                    Transmit Message
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-4 py-3 text-base text-white font-bold placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all resize-none shadow-inner"
                    placeholder="Describe your project, collaboration, or opportunity..."
                  />
                </div>

                {/* Send Button */}
                <button
                  id="btn-submit"
                  type="submit"
                  disabled={loading || submitted}
                  className="w-full relative inline-flex items-center justify-center px-8 py-4 bg-primary border border-primary text-background font-mono text-base tracking-wider uppercase font-extrabold transition-all duration-300 hover:bg-transparent hover:text-primary hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] rounded-lg cursor-pointer disabled:opacity-50"
                >
                  <Send size={16} className="mr-2" />
                  <span>{loading ? "TRANSMITTING..." : "Transmit Core"}</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
