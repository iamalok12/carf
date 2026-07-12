"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { invitationData } from "@/data/invitation";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(invitationData.weddingDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-6 flex justify-center bg-brand-bg relative z-10 perspective-[1200px]">
      <motion.div
        className="glass-panel rounded-3xl p-8 w-full max-w-sm flex justify-between items-center shadow-[0_20px_40px_rgba(0,0,0,0.2)] relative overflow-hidden transform-gpu"
        initial={{ opacity: 0, y: 50, rotateX: -30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
      >
        {/* Subtle Background Glow inside the panel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/5 blur-2xl pointer-events-none rounded-full" />

        {timeBlocks.map((block, index) => (
          <div key={block.label} className="flex flex-col items-center relative z-10">
            <div className="relative w-[55px] h-[40px] flex justify-center items-center overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={block.value}
                  initial={{ opacity: 0, y: -20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: 20, rotateX: 90 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                  className="font-playfair text-3xl text-brand-text font-medium"
                >
                  {block.value.toString().padStart(2, "0")}
                </motion.div>
              </AnimatePresence>
            </div>
            <span className="font-inter text-[9px] tracking-widest uppercase text-brand-gold mt-2">
              {block.label}
            </span>
            {index < timeBlocks.length - 1 && (
              <span className="absolute top-2 -right-[1.15rem] font-playfair text-2xl text-brand-gold/30">
                :
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
