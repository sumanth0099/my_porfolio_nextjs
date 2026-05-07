"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import TypingAnimation from "./TypingAnimation";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={ref} 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-zinc-950"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1, willChange: "transform, opacity" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[80px] rounded-full -z-10 animate-pulse"
      />
      <motion.div
        style={{ y: y2, willChange: "transform, opacity" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[100px] rounded-full -z-10 animate-pulse"
      />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(21,90,243,0.05),transparent_50%)] -z-10" />

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-block"
        >
          <span className="px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-sm font-medium text-blue-400 backdrop-blur-md glow-blue">
            <TypingAnimation text="✨ Available for New Projects" speed={1.0} />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="text-4xl md:text-8xl font-bold mb-6 tracking-tight leading-tight flex justify-center">
            <TypingAnimation 
              text={`I'm ${portfolioData.name}`}
              speed={1.5}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <TypingAnimation 
              text={portfolioData.role} 
              speed={1.2}
              staggerDelay={0.04}
              showCursor={true}
              className="text-2xl md:text-3xl bg-gradient-to-r from-zinc-100 via-blue-400 to-zinc-500 bg-clip-text text-transparent opacity-90 drop-shadow-sm font-black italic mb-8"
            />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed"
        >
          {portfolioData.about.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 group shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex items-center gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
            {[
              { icon: Github, href: portfolioData.github },
              { icon: Linkedin, href: portfolioData.linkedin },
              { icon: Mail, href: `mailto:${portfolioData.email}` },
            ].map((social, i) => (
              <motion.a
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                href={social.href}
                className="p-3 rounded-full border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/50 hover:text-blue-400 transition-all hover:bg-zinc-800"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - positioned safely to avoid overlap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-0"
      >
        <span className="text-xs text-zinc-600 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
}
