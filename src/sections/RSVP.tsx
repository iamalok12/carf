"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { X, CheckCircle2 } from "lucide-react";
import { invitationData } from "@/data/invitation";

export default function RSVP() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto close after success
      setTimeout(() => {
        setIsOpen(false);
        // Reset state after closed
        setTimeout(() => setIsSuccess(false), 500);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-32 px-6 bg-[#1a1a1a] relative z-10 overflow-hidden flex flex-col items-center">
      {/* Dark background for contrast */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-10 mix-blend-luminosity" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center relative z-10"
      >
        <h2 className="font-playfair text-3xl md:text-4xl text-brand-gold mb-8 italic">We would love for you to join us</h2>

        <div className="relative w-full max-w-xs mx-auto mb-10">
          <motion.div
            className="absolute inset-0 bg-brand-gold rounded-full transform-gpu will-change-transform"
            animate={{ scale: [1, 1.1, 1], opacity: [0, 0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <Button onClick={() => setIsOpen(true)} className="relative bg-brand-gold text-[#1a1a1a] border-brand-gold hover:bg-brand-bg hover:text-brand-text w-full transform-gpu">
            RSVP Now
          </Button>
        </div>

        <div className="flex flex-col items-center mt-12 border-t border-brand-gold/20 pt-8">
          <span className="font-inter text-[10px] tracking-widest uppercase text-brand-gold/60 mb-4">Contact Information</span>
          <h3 className="font-playfair text-xl text-brand-gold mb-2">{invitationData.contact?.family}</h3>
          <p className="font-cormorant text-brand-bg/70 text-sm max-w-[200px] mb-4">
            {invitationData.contact?.address}
          </p>
          <div className="flex flex-col gap-1">
            {invitationData.contact?.phones.map((phone, i) => (
              <a key={i} href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="font-inter text-sm text-brand-gold hover:text-brand-bg transition-colors">
                {phone}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:absolute"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed md:absolute bottom-0 left-0 right-0 h-[85vh] bg-brand-bg rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)] z-50 overflow-y-auto flex flex-col"
            >
              <div className="sticky top-0 bg-brand-bg/80 backdrop-blur-md pt-4 pb-4 px-6 flex justify-between items-center z-10 border-b border-brand-gold/10">
                <h3 className="font-playfair text-2xl text-brand-text">Your Response</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-brand-gold/10 text-brand-text hover:bg-brand-gold/20 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <CheckCircle2 size={64} className="text-brand-green mb-6" />
                    <h4 className="font-playfair text-3xl text-brand-text mb-2">Thank You!</h4>
                    <p className="font-cormorant text-xl text-brand-text/70">Your response has been received.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block font-inter text-xs tracking-widest uppercase text-brand-gold mb-2">Guest Name</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-transparent border-b border-brand-gold/30 p-2 font-cormorant text-xl text-brand-text focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-text/30"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block font-inter text-xs tracking-widest uppercase text-brand-gold mb-2">Will you attend?</label>
                      <div className="flex gap-4">
                        <label className="flex-1 flex items-center gap-3 p-4 border border-brand-gold/20 rounded-xl cursor-pointer hover:bg-brand-gold/5 transition-colors">
                          <input type="radio" name="attending" value="yes" required className="accent-brand-gold w-4 h-4" />
                          <span className="font-cormorant text-lg text-brand-text">Joyfully Accepts</span>
                        </label>
                        <label className="flex-1 flex items-center gap-3 p-4 border border-brand-gold/20 rounded-xl cursor-pointer hover:bg-brand-gold/5 transition-colors">
                          <input type="radio" name="attending" value="no" required className="accent-brand-gold w-4 h-4" />
                          <span className="font-cormorant text-lg text-brand-text">Regretfully Declines</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block font-inter text-xs tracking-widest uppercase text-brand-gold mb-2">Number of Guests</label>
                      <select className="w-full bg-transparent border-b border-brand-gold/30 p-2 font-cormorant text-xl text-brand-text focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-inter text-xs tracking-widest uppercase text-brand-gold mb-2">A message for the couple</label>
                      <textarea
                        rows={3}
                        className="w-full bg-transparent border-b border-brand-gold/30 p-2 font-cormorant text-xl text-brand-text focus:outline-none focus:border-brand-gold transition-colors resize-none placeholder:text-brand-text/30"
                        placeholder="Dietary requirements or a little note..."
                      />
                    </div>

                    <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send RSVP"}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
