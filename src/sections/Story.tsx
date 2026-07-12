"use client";

import { motion } from "framer-motion";
import { invitationData } from "@/data/invitation";

export default function Story() {
  return (
    <section className="py-24 px-6 bg-brand-bg relative z-10">
      <div className="max-w-sm mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-vibes text-4xl text-brand-burgundy mb-2">Our Story</h2>
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-brand-gold">A Journey of Love</p>
        </motion.div>

        <div className="space-y-16">
          {invitationData.story.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center relative"
            >
              <span className="font-inter text-[10px] tracking-widest uppercase text-brand-gold/80 block mb-3">
                {event.date}
              </span>
              <h3 className="font-playfair text-2xl text-brand-text mb-4 italic">{event.title}</h3>
              <p className="font-cormorant text-lg leading-relaxed text-brand-text/80 px-4">
                {event.description}
              </p>
              
              {index < invitationData.story.length - 1 && (
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-brand-gold to-transparent opacity-50" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
