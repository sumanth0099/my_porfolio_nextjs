"use client";
import React from "react";
import { motion } from "framer-motion";

const marqueeText = [
  "MERN Stack Developer",
  "Next.js Expert",
  "UI/UX Enthusiast",
  "Open for Collaboration",
  "Problem Solver",
  "High Performance Web Apps",
  "PostgreSQL",
  "React 19",
  "Modern Design"
];

export default function Marquee() {
  const content = React.useMemo(() => Array(4).fill(marqueeText).flat(), []);

  return (
    <section className="relative py-20 overflow-hidden bg-zinc-950 border-y border-white/5 space-y-4">
      {/* Row 1: Left moving */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ willChange: "transform" }}
          className="flex gap-12 items-center text-5xl md:text-7xl font-black uppercase tracking-tighter text-zinc-900 select-none"
        >
          {content.map((text, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="hover:text-blue-500/20 transition-colors duration-500">{text}</span>
              <span className="w-4 h-4 rounded-full bg-blue-500/10" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Right moving */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ willChange: "transform" }}
          className="flex gap-12 items-center text-5xl md:text-7xl font-black uppercase tracking-tighter text-blue-500/5 select-none"
        >
          {content.map((text, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="hover:text-purple-500/20 transition-colors duration-500">{text}</span>
              <span className="w-4 h-4 rounded-full bg-purple-500/10" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
