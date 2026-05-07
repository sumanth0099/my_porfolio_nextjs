"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Code2, ExternalLink, Terminal, Laptop, Cpu } from "lucide-react";
import TypingAnimation from "./TypingAnimation";

const getIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case "leetcode": return Code2;
    case "geeksforgeeks": return Terminal;
    case "codechef": return Laptop;
    case "hackerrank": return Cpu;
    default: return Code2;
  }
};

export default function CodingProfiles() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="coding-profiles" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] -z-10" />
      <div className="container mx-auto px-6 font-sans">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-600/10 blur-[100px] -z-10" />
          <TypingAnimation 
            text="Coding Profiles" 
            speed={1.3}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent justify-center"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full" />
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portfolioData.codingProfiles.map((profile) => {
            const IconComponent = getIcon(profile.platform);
            return (
              <motion.a
                key={profile.platform}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(37, 99, 235, 0.05)"
                }}
                className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md group transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-colors" />
                </div>
                <TypingAnimation 
                  text={profile.platform} 
                  speed={1.2}
                  showCursor={true}
                  staggerDelay={0.03}
                  className="text-xl font-bold text-zinc-100 mb-1 group-hover:text-blue-400 transition-colors"
                />
                <div className="text-sm text-zinc-500 font-medium">
                  <TypingAnimation text={profile.detail} speed={0.8} staggerDelay={0.05} />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
