"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio system
    audioRef.current = new window.Audio("/bg-audio.mpeg");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4; // Slightly lowered volume for background ambiance
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Audio playback locked by browser:", err);
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3">
      {isPlaying && (
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="whitespace-nowrap hidden sm:block"
        >
          <span className="font-mono text-[10px] text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded border border-primary/20 shadow-[0_0_10px_rgba(0,217,255,0.2)]">
            SYSTEM AUDIO ACTIVE
          </span>
        </motion.div>
      )}
      
      <motion.button
        onClick={toggleAudio}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 217, 255, 0.4)" }}
        whileTap={{ scale: 0.9 }}
        className={`flex items-center justify-center p-3.5 rounded-full border transition-all duration-300 backdrop-blur-md cursor-pointer ${
          isPlaying 
            ? "bg-primary/20 border-primary text-primary" 
            : "bg-[#0B0F19]/90 border-white/20 text-white/50 hover:border-primary/50 hover:text-white"
        }`}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>
    </div>
  );
}
