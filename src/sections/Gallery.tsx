"use client";

import { motion } from "framer-motion";
import { invitationData } from "@/data/invitation";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="py-24 px-6 bg-brand-bg relative z-10">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="font-vibes text-4xl text-brand-burgundy mb-2">Memories</h2>
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-brand-gold">A Glimpse in Time</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {invitationData.gallery.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl bg-brand-gold/10 ${
                index % 3 === 0 ? "col-span-2 aspect-[16/9]" : "col-span-1 aspect-square"
              }`}
            >
              <Image
                src={photo.url}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
