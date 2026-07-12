"use client";

import { motion } from "framer-motion";
import { invitationData } from "@/data/invitation";
import { Button } from "@/components/ui/Button";
import { MapPin } from "lucide-react";

export default function Venue() {
  return (
    <section className="py-24 px-6 bg-[#FDFBF7] relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-vibes text-4xl text-brand-burgundy mb-2">Getting There</h2>
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-brand-gold">The Venues</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 perspective-[1500px]">
          {invitationData.venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateY: 20, rotateX: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.2, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
              className="relative rounded-3xl overflow-hidden bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_80px_-15px_rgba(201,168,106,0.4)] group border border-brand-gold/10 transition-shadow duration-500 transform-gpu"
            >
              {/* Image Section */}
              <div className="relative h-80 w-full overflow-hidden">
                {venue.image && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110"
                    style={{ backgroundImage: `url(${venue.image})` }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Continuous Gold Shine Sweep */}
                <motion.div
                  className="absolute inset-0 w-[200%] h-full opacity-30 mix-blend-overlay pointer-events-none"
                  style={{
                    background: "linear-gradient(115deg, transparent 20%, rgba(201,168,106,0.8) 40%, rgba(255,255,255,0.8) 50%, rgba(201,168,106,0.8) 60%, transparent 80%)",
                  }}
                  animate={{ x: ["-100%", "50%"] }}
                  transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut", delay: index * 1.5 }}
                />

                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <h3 className="font-playfair text-3xl text-white mb-2 tracking-wide">{venue.name}</h3>
                  <div className="w-16 h-[2px] bg-brand-gold/80 mb-4 transition-all duration-500 group-hover:w-full" />
                  <p className="font-cormorant text-white/90 text-base leading-relaxed max-w-xs">{venue.address}</p>
                </div>
              </div>
              
              {/* Action Section */}
              <div className="p-8 bg-[#FDFBF7] relative">
                {/* Subtle decorative border inside */}
                <div className="absolute inset-2 border border-brand-gold/10 pointer-events-none rounded-2xl transition-colors duration-500 group-hover:border-brand-gold/30" />
                
                <a href={venue.mapUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 bg-white hover:bg-brand-gold/10 border-brand-gold/20 hover:border-brand-gold/50 text-brand-text transition-all duration-300 py-6">
                    <MapPin size={18} className="text-brand-gold" />
                    <span className="tracking-widest uppercase text-xs font-medium">View on Maps</span>
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
