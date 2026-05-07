"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import TypingAnimation from "./TypingAnimation";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const getCategoryColor = (category) => {
    switch (category?.toLowerCase()) {
      case "frontend":
        return "from-blue-600/20 to-cyan-600/20 border-blue-500/30 shadow-blue-500/10";
      case "backend":
        return "from-purple-600/20 to-pink-600/20 border-purple-500/30 shadow-purple-500/10";
      case "database":
        return "from-emerald-600/20 to-teal-600/20 border-emerald-500/30 shadow-emerald-500/10";
      case "language":
        return "from-orange-600/20 to-amber-600/20 border-orange-500/30 shadow-orange-500/10";
      default:
        return "from-zinc-800/50 to-zinc-900/50 border-zinc-700 shadow-zinc-500/5";
    }
  };

  return (
    <section id="skills" className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-600/10 blur-[100px] -z-10" />
          <TypingAnimation 
            text="Technical Skills" 
            speed={1.0}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent justify-center"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {portfolioData.skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-6 rounded-2xl border bg-gradient-to-br ${getCategoryColor(skill.category)} backdrop-blur-sm transition-all duration-300 text-center group shadow-lg hover:shadow-2xl`}
            >
              <div className="text-zinc-100 font-semibold mb-1">
                <TypingAnimation text={skill.name} speed={1.2} showCursor={true} />
              </div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest mt-2">
                {skill.category}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
