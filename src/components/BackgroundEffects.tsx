"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);
  const [particles] = useState(() => 
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2, 
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      xEnd: Math.random() * 10 - 5,
    }))
  );

  const [petals] = useState(() => 
    Array.from({ length: 12 }).map((_, i) => ({
      id: `petal-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 15 + 10,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
      xEnd: Math.random() * 20 - 10,
    }))
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Ambient Pulsing Light */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent opacity-50 mix-blend-screen"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Gold Sparkles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-brand-gold opacity-40 shadow-[0_0_8px_rgba(201,168,106,0.8)] transform-gpu will-change-transform"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: ["0vh", "-100vh"], x: ["0vw", `${p.xEnd}vw`], opacity: [0, 0.8, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}

      {/* Floating Petals */}
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white/20 backdrop-blur-sm shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
          style={{ 
            width: p.size, 
            height: p.size * 1.5, 
            left: `${p.x}%`, 
            top: `${p.y}%`,
            borderRadius: "50% 0 50% 50%",
            filter: "drop-shadow(0 2px 4px rgba(216,164,143,0.3))"
          }}
          animate={{ 
            y: ["0vh", "100vh"], 
            x: ["0vw", `${p.xEnd}vw`],
            rotate: [p.rotation, p.rotation + 360],
            opacity: [0, 0.6, 0] 
          }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/0 via-brand-bg/40 to-brand-bg pointer-events-none" />
    </div>
  );
}
