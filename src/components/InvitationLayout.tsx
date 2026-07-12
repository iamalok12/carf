"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface InvitationLayoutProps {
  children: ReactNode;
}

export default function InvitationLayout({ children }: InvitationLayoutProps) {
  return (
    <div className="relative min-h-screen w-full bg-[#1a1a1a] flex justify-center items-center overflow-hidden">
      {/* Desktop Background Blur - Only visible on larger screens */}
      <div className="hidden md:block absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30 blur-sm z-0" />
      
      {/* Mobile-sized container centered on desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full md:max-w-[430px] md:h-[90vh] md:rounded-[40px] md:shadow-2xl bg-brand-bg overflow-x-hidden overflow-y-auto"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(201, 168, 106, 0.2)",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
