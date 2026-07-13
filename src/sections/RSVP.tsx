"use client";

import { motion } from "framer-motion";

export default function RSVP() {
  return (
    <section className="py-32 px-6 bg-[#1a1a1a] relative z-10 overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-10 mix-blend-luminosity" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center relative z-10 max-w-sm mx-auto"
      >
        <span className="w-10 h-[1px] bg-brand-gold/50 mx-auto block mb-8" />
        <p className="font-cormorant text-xl text-white/80 italic leading-relaxed">
          The Chakraborty Family &amp; The Mukherjee Family would love to host you as they celebrate this joyous occasion.
        </p>
        <span className="w-10 h-[1px] bg-brand-gold/50 mx-auto block mt-8" />
      </motion.div>
    </section>
  );
}
