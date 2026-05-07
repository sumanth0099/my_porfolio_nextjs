"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { User, MapPin, GraduationCap } from "lucide-react";
import Image from "next/image";

import TypingAnimation from "./TypingAnimation";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-600/10 blur-[100px] -z-10" />
          <TypingAnimation 
            text="About Me" 
            speed={1.2}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent justify-center"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 1, -1, 0]
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 }
            }}
            className="relative w-full max-w-[300px] md:max-w-[400px] mx-auto p-4"
          >
            {/* The #155AF3 Decorative Rectangle (Outer Frame) */}
            <div 
              className="absolute inset-0 border-2 rounded-3xl" 
              style={{ borderColor: '#155AF3' }}
            />
            
            {/* The Profile Image (Nested Inside) */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-900">
              <Image
                src={portfolioData.profileImage}
                alt={portfolioData.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-blue-500">
                <User className="w-6 h-6" />
              </div>
              <div>
                <TypingAnimation
                   text="Who I Am"
                   speed={1.0}
                   className="text-xl font-bold mb-2"
                />
                <TypingAnimation
                  text={portfolioData.about.bio}
                  speed={1.0}
                  staggerDelay={0.02}
                  showCursor={true}
                  byWord={true}
                  className="text-zinc-400 text-lg leading-relaxed max-w-xl text-left"
                />
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-blue-500">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <TypingAnimation
                   text="Education"
                   speed={1.0}
                   className="text-xl font-bold mb-2"
                />
                <div className="space-y-4">
                  {portfolioData.education.map((edu, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.3 }}
                      className="border-l-2 border-zinc-800 pl-4 py-1"
                    >
                      <div className="font-semibold text-zinc-100">{edu.degree}</div>
                      <div className="text-sm text-zinc-500">{edu.institution} | {edu.years}</div>
                      <div className="text-xs text-blue-400 mt-1">{edu.grade}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-blue-500">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <TypingAnimation 
                  text={portfolioData.location} 
                  speed={1.0} 
                  className="font-bold text-zinc-100"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
