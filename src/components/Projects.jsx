"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Github } from "lucide-react";

import TypingAnimation from "./TypingAnimation";

export default function Projects() {
  const [filter, setFilter] = React.useState("All");

  const categories = ["All", "Frontend", "Backend", "Fullstack", "JavaScript"];

  const filteredProjects = React.useMemo(() => {
    return portfolioData.projects.filter(project => {
      if (filter === "All") return true;
      if (filter === "Frontend") return project.tech.some(t => ["React", "HTML", "CSS", "Next.js", "Zustand"].includes(t) || t.includes("Frontend"));
      if (filter === "Backend") return project.tech.some(t => ["Node.js", "Express", "API", "WebSockets","Ollama"].includes(t));
      if (filter === "Fullstack") return project.tech.length > 3 || (project.tech.includes("React") && project.tech.includes("Node.js"));
      if (filter === "JavaScript") return project.tech.some(t => t.includes("JavaScript") || t.includes("DOM"));
      return true;
    });
  }, [filter]);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-600/10 blur-[100px] -z-10" />
          <TypingAnimation 
            text="Featured Projects" 
            speed={0.8}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent justify-center"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === cat 
                ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]" 
                : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-blue-500/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                }}
                className="group relative p-6 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(21,90,243,0.2)] overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="text-zinc-400 text-sm mb-6 line-clamp-3 group-hover:text-zinc-300 transition-colors">
                    {project.description}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mb-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 text-center text-xs font-bold rounded-lg border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-all bg-zinc-900/50"
                      >
                        Source
                      </a>
                    )}
                    {(project.link && project.title!="Local AI Email Auto-Responder") && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 text-center text-xs font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                      >
                       Live
                      </a>
                    )}
                      {(project.link && project.title == "Local AI Email Auto-Responder") && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 text-center text-xs font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                      >
                       Demo video
                      </a>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-[10px] rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
