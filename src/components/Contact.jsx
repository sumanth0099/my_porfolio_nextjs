"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Github, Linkedin } from "lucide-react";
import TypingAnimation from "./TypingAnimation";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-12 overflow-hidden relative">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10" />
          
          <div className="text-center mb-12">
            <TypingAnimation 
              text="Let's Connect" 
              speed={0.9}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent justify-center"
            />
            <p className="text-zinc-400">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-left mb-8">
                <TypingAnimation
                  text="Get In Touch"
                  speed={0.8}
                  showCursor={true}
                  className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent"
                />
                <p className="text-zinc-400 text-lg">
                  Have a project in mind? Let&apos;s build something amazing together.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: portfolioData.email, href: `mailto:${portfolioData.email}` },
                  { icon: Github, label: "GitHub", value: "sumanth0099", href: portfolioData.github },
                  { icon: Linkedin, label: "LinkedIn", value: portfolioData.name, href: portfolioData.linkedin }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-blue-600/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase tracking-widest">{item.label}</div>
                      <div className="text-zinc-200 font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl relative"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-500 uppercase">First Name</label>
                  <input type="text" className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-blue-500 outline-none transition-all text-zinc-100" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-500 uppercase">Last Name</label>
                  <input type="text" className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-blue-500 outline-none transition-all text-zinc-100" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-500 uppercase">Email Address</label>
                <input type="email" className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-blue-500 outline-none transition-all text-zinc-100" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-500 uppercase">Message</label>
                <textarea rows="4" className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-blue-500 outline-none transition-all text-zinc-100 resize-none" placeholder="Your message here..." />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-[0.98]"
              >
                Send Message
              </button>
            </motion.form>
          </div>

          <footer className="mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </footer>
        </div>
      </div>
    </section>
  );
}
