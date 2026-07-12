"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { invitationData } from "@/data/invitation";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const { partner1, partner2 } = invitationData.couple;

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative h-[90vh] md:h-full min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Cinematic Parallax Background with Slow Zoom */}
      <motion.div
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center"
        style={{ y, opacity: 0.15 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Bokeh Orbs */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: useTransform(scrollY, [0, 500], [0, 50]) }}
      >
        {[
          { size: 250, left: 20, top: 15, delay: 0, duration: 15 },
          { size: 180, left: 70, top: 40, delay: 2, duration: 12 },
          { size: 300, left: 40, top: 80, delay: 1, duration: 18 },
          { size: 220, left: 85, top: 10, delay: 4, duration: 14 },
          { size: 150, left: 10, top: 60, delay: 3, duration: 10 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-gold/20 blur-3xl mix-blend-screen"
            style={{
              width: orb.size,
              height: orb.size,
              left: `${orb.left}%`,
              top: `${orb.top}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Golden Frame */}
      <div className="absolute inset-4 md:inset-8 border border-brand-gold/30 rounded-2xl md:rounded-3xl pointer-events-none z-10" />
      <div className="absolute inset-5 md:inset-10 border border-brand-gold/10 rounded-xl md:rounded-2xl pointer-events-none z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={letterAnimation}
        style={{ opacity }}
      >
        <motion.p variants={itemAnimation} className="font-inter text-xs md:text-sm tracking-[0.3em] uppercase text-brand-gold mb-6">
          The Wedding Celebration of
        </motion.p>

        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 z-20">
          {/* Bride */}
          <div className="flex flex-col items-center text-center w-full perspective-[1500px]">
            <h1 className="font-playfair text-5xl leading-none text-brand-text font-medium italic mb-3 tracking-wide break-words w-full flex flex-wrap justify-center">
              {partner1.firstName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateX: -90, rotateY: 45, scale: 0.5 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.1, type: "spring", bounce: 0.5 }}
                  className="inline-block drop-shadow-md"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
            {partner1.parents && (
              <motion.p 
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 2, delay: 2 }}
                className="font-cormorant text-sm text-brand-text/70 italic max-w-xs"
              >
                {partner1.parents}
              </motion.p>
            )}
          </div>

          {/* Ampersand */}
          <motion.div 
            className="perspective-[1000px] z-20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 1.5, type: "spring" }}
          >
            <motion.span 
              className="font-vibes text-4xl text-brand-gold py-6 drop-shadow-[0_0_15px_rgba(201,168,106,0.8)] inline-block"
              animate={{ rotateY: [0, 360], filter: ["hue-rotate(0deg)", "hue-rotate(30deg)", "hue-rotate(0deg)"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.3, rotateZ: 10 }}
            >
              &
            </motion.span>
          </motion.div>
          
          {/* Groom */}
          <div className="flex flex-col items-center text-center w-full perspective-[1500px]">
            <h1 className="font-playfair text-5xl leading-none text-brand-text font-medium italic mb-3 tracking-wide break-words w-full flex flex-wrap justify-center">
              {partner2.firstName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateX: 90, rotateY: -45, scale: 0.5 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 + index * 0.1, type: "spring", bounce: 0.5 }}
                  className="inline-block drop-shadow-md"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
            {partner2.parents && (
              <motion.p 
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 2, delay: 3 }}
                className="font-cormorant text-sm text-brand-text/70 italic max-w-xs"
              >
                {partner2.parents}
              </motion.p>
            )}
          </div>
        </div>

        <motion.p variants={itemAnimation} className="mt-10 font-cormorant text-xl md:text-2xl tracking-widest text-brand-text/80">
          {invitationData.weddingDateFormatted}
        </motion.p>

        <motion.p variants={itemAnimation} className="mt-2 font-inter text-xs tracking-[0.2em] uppercase text-brand-gold/80">
          {invitationData.weddingLocation}
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 z-20 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity }}
      >
        <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-brand-text/50 mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-brand-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
