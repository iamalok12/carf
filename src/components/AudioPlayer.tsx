"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // We create the audio instance here so it's only on client-side
    audioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2022/10/25/audio_2756df60ee.mp3?filename=romantic-piano-1234.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Audio playback failed", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 1 }}
      onClick={togglePlay}
      className="fixed bottom-6 right-6 md:absolute md:bottom-6 md:right-6 z-40 p-3 rounded-full bg-brand-bg/80 backdrop-blur-md shadow-lg border border-brand-gold/30 text-brand-gold hover:scale-110 active:scale-95 transition-transform"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? <Music size={20} /> : <VolumeX size={20} />}
    </motion.button>
  );
}
