"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-brand-text text-brand-bg hover:bg-brand-burgundy border-brand-text hover:border-brand-burgundy",
    outline: "bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold/10",
    ghost: "bg-transparent text-brand-text hover:text-brand-gold",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative overflow-hidden px-8 py-4 rounded-full font-inter text-sm tracking-[0.15em] uppercase transition-colors duration-300",
        "border",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent -translate-x-full hover:animate-[shine_1.5s_ease-in-out_infinite]" />
      )}
    </motion.button>
  );
}
