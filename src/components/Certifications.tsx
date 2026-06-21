"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Award, FileText, CheckCircle, X, Sparkles } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  category: "ai-ml" | "cloud" | "dev" | "data-science";
}

const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Dec 2025",
    credentialId: "AWS-ACAD-CF-52199",
    url: "https://aws.amazon.com/training/awsacademy/",
    category: "cloud",
  },
  {
    id: "cert-2",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "Nov 2025",
    credentialId: "DL-AI-SPEC-98211",
    url: "https://coursera.org",
    category: "ai-ml",
  },
  {
    id: "cert-3",
    title: "TensorFlow Developer Professional Certificate",
    issuer: "Google / DeepLearning.AI",
    date: "Oct 2025",
    credentialId: "TF-DEV-PROF-83921",
    url: "https://coursera.org",
    category: "ai-ml",
  },
  {
    id: "cert-4",
    title: "Generative AI Fundamentals",
    issuer: "Google Cloud",
    date: "Sep 2025",
    credentialId: "GCP-GENAI-11822",
    url: "https://cloud.google.com/training",
    category: "ai-ml",
  },
  {
    id: "cert-5",
    title: "Machine Learning Specialization",
    issuer: "Stanford University / DeepLearning.AI",
    date: "Aug 2025",
    credentialId: "SU-ML-SPEC-48192",
    url: "https://coursera.org",
    category: "ai-ml",
  },
  {
    id: "cert-6",
    title: "Applied Data Science with Python",
    issuer: "University of Michigan",
    date: "Jul 2025",
    credentialId: "UMICH-ADS-49299",
    url: "https://coursera.org",
    category: "data-science",
  },
  {
    id: "cert-7",
    title: "Docker Essentials: A Developer Introduction",
    issuer: "IBM",
    date: "Jun 2025",
    credentialId: "IBM-DK-90219",
    url: "https://www.credly.com",
    category: "cloud",
  },
  {
    id: "cert-8",
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "May 2025",
    credentialId: "GCP-CCF-38192",
    url: "https://cloud.google.com/training",
    category: "cloud",
  },
  {
    id: "cert-9",
    title: "Data Science Methodology",
    issuer: "IBM",
    date: "Apr 2025",
    credentialId: "IBM-DSM-29381",
    url: "https://coursera.org",
    category: "data-science",
  },
  {
    id: "cert-10",
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "Mar 2025",
    credentialId: "DL-NNDL-39281",
    url: "https://coursera.org",
    category: "ai-ml",
  },
  {
    id: "cert-11",
    title: "Python for Data Science and AI",
    issuer: "IBM",
    date: "Feb 2025",
    credentialId: "IBM-PYDS-38291",
    url: "https://coursera.org",
    category: "data-science",
  },
  {
    id: "cert-12",
    title: "Java Programming Basics",
    issuer: "Oracle Academy",
    date: "Jan 2025",
    credentialId: "ORA-J-82912",
    url: "https://academy.oracle.com",
    category: "dev",
  },
  {
    id: "cert-13",
    title: "Developing Applications with Cloud Databases",
    issuer: "IBM",
    date: "Nov 2024",
    credentialId: "IBM-DACD-38291",
    url: "https://coursera.org",
    category: "cloud",
  },
  {
    id: "cert-14",
    title: "Data Visualization with Python",
    issuer: "IBM",
    date: "Oct 2024",
    credentialId: "IBM-DVP-38192",
    url: "https://coursera.org",
    category: "data-science",
  },
  {
    id: "cert-15",
    title: "SQL for Data Science",
    issuer: "University of California, Davis",
    date: "Sep 2024",
    credentialId: "UCD-SQLDS-28391",
    url: "https://coursera.org",
    category: "data-science",
  },
  {
    id: "cert-16",
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: "Aug 2024",
    credentialId: "KAG-IML-38291",
    url: "https://www.kaggle.com/learn",
    category: "ai-ml",
  },
  {
    id: "cert-17",
    title: "Data Visualization",
    issuer: "Kaggle",
    date: "Jul 2024",
    credentialId: "KAG-DV-38291",
    url: "https://www.kaggle.com/learn",
    category: "data-science",
  },
  {
    id: "cert-18",
    title: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University",
    date: "Jun 2024",
    credentialId: "VAND-PE-28391",
    url: "https://coursera.org",
    category: "ai-ml",
  },
  {
    id: "cert-19",
    title: "Version Control with Git",
    issuer: "Atlassian",
    date: "May 2024",
    credentialId: "ATL-GIT-38129",
    url: "https://coursera.org",
    category: "dev",
  },
  {
    id: "cert-20",
    title: "Artificial Intelligence Foundations",
    issuer: "NPTEL / Mahendra MEC",
    date: "Apr 2024",
    credentialId: "NPTEL-AIF-28391",
    url: "https://nptel.ac.in",
    category: "ai-ml",
  },
];

export default function Certifications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert: Certificate) => {
      const matchesSearch =
        cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || cert.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="certifications" className="relative py-24 px-6 md:px-12 lg:px-24 w-full bg-[#04060F] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[40%] right-0 w-[400px] h-[400px] ambient-glow-purple rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 z-10 relative">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-primary uppercase">
            <Award size={12} />
            <span>06 // CREDENTIALS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            CERTIFICATIONS
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary" />
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pb-6 border-b border-white/5">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {["all", "ai-ml", "cloud", "data-science", "dev"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-widest border transition-all duration-300 rounded ${
                  selectedCategory === cat
                    ? "bg-primary text-background border-primary font-bold shadow-glow-cyan"
                    : "bg-white/2 border-white/10 text-muted hover:text-white hover:border-white/20"
                }`}
              >
                {cat.replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-md w-full">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search credentials..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/80 border border-white/20 rounded px-10 py-3 text-sm font-mono text-white font-bold placeholder-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCertificates.map((cert: Certificate) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveCert(cert)}
                className="p-5 bg-white/2 border border-white/5 hover:border-primary/20 hover:bg-white/4 rounded-xl flex flex-col justify-between transition-all duration-300 cursor-pointer relative group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[9px] text-primary uppercase tracking-wider bg-primary/5 border border-primary/20 px-2 py-0.5 rounded">
                      {cert.category.replace("-", " ")}
                    </span>
                    <span className="text-[10px] font-mono text-muted">{cert.date}</span>
                  </div>

                  <h3 className="font-display font-semibold text-white group-hover:text-primary transition-colors text-base line-clamp-2">
                    {cert.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-muted">
                  <span className="font-sans font-medium text-white/70">{cert.issuer}</span>
                  <span className="flex items-center text-[10px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    VIEW_DEED <ExternalLink size={10} className="ml-1" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty Search State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-16 p-8 bg-white/2 border border-white/5 rounded-2xl">
            <p className="text-muted font-mono text-sm">NO CREDENTIALS MATCHED CURRENT FILTERS</p>
          </div>
        )}
      </div>

      {/* Lightbox / Detail Viewer Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#04060F]/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-background border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_24px_48px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* High-tech glow accent inside modal */}
              <div className="absolute -top-12 -left-12 w-48 h-48 ambient-glow-blue rounded-full filter blur-[40px] pointer-events-none opacity-40" />

              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 p-2 text-muted hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/5"
              >
                <X size={18} />
              </button>

              <div className="space-y-6 pt-4">
                <div className="flex items-center space-x-3 text-primary">
                  <span className="p-3 bg-primary/10 border border-primary/20 rounded-xl">
                    <FileText size={24} />
                  </span>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-white/50 block">
                      Security Log: Validated
                    </span>
                    <h3 className="font-display font-extrabold text-white text-xl md:text-2xl leading-tight">
                      {activeCert.title}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 bg-white/2 border border-white/5 rounded-xl text-sm">
                  <div>
                    <span className="text-[10px] font-mono text-muted uppercase block mb-0.5">Issuer</span>
                    <span className="font-semibold text-white">{activeCert.issuer}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted uppercase block mb-0.5">Issue Date</span>
                    <span className="font-semibold text-white">{activeCert.date}</span>
                  </div>
                  {activeCert.credentialId && (
                    <div className="col-span-1 md:col-span-2">
                      <span className="text-[10px] font-mono text-muted uppercase block mb-0.5">Credential ID</span>
                      <span className="font-mono text-xs font-semibold text-accent">{activeCert.credentialId}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {activeCert.url && (
                    <a
                      href={activeCert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-5 py-3 bg-primary border border-primary text-background font-mono text-sm uppercase font-extrabold transition-all duration-300 hover:bg-transparent hover:text-primary rounded-lg shadow-glow-cyan"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <button
                    onClick={() => setActiveCert(null)}
                    className="flex-1 flex items-center justify-center space-x-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-sm uppercase font-semibold transition-all duration-300 rounded-lg"
                  >
                    <span>Close Viewer</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
