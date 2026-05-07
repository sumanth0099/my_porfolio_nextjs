"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Award, ExternalLink } from "lucide-react";
import TypingAnimation from "./TypingAnimation";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-600/10 blur-[100px] -z-10" />
          <TypingAnimation 
            text="Certifications" 
            speed={1.1}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent justify-center"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 hover:border-blue-500/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <Award className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-zinc-100 mb-4 leading-snug group-hover:text-teal-400 transition-colors">
                  {cert.title}
                </h3>
              </div>
              
              <div className="pt-4 border-t border-zinc-800/50">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/btn"
                >
                  View Credential
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
