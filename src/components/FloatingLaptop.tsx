"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Braces, Cpu, Sparkles } from "lucide-react";

export function FloatingLaptop() {
  return (
    <div className="relative w-full max-w-lg mx-auto perspective-1000">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotateX: [5, -5, 5],
          rotateY: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Laptop Screen */}
        <div className="relative glass rounded-2xl p-1 glow-sm">
          <div className="bg-slate-900/80 rounded-xl overflow-hidden">
            {/* Screen Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-slate-400">codeverse-hackathon</span>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm">
              <div className="flex items-start gap-2 mb-3">
                <span className="text-blue-400">const</span>
                <span className="text-cyan-300">hackathon</span>
                <span className="text-white">=</span>
                <span className="text-purple-400">{"{"}</span>
              </div>
              <div className="pl-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">"</span>
                  <span className="text-green-400">name</span>
                  <span className="text-slate-500">"</span>
                  <span className="text-white">:</span>
                  <span className="text-slate-500">"</span>
                  <span className="text-yellow-300">CodeVerse</span>
                  <span className="text-slate-500">",</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">"</span>
                  <span className="text-green-400">date</span>
                  <span className="text-slate-500">"</span>
                  <span className="text-white">:</span>
                  <span className="text-slate-500">"</span>
                  <span className="text-yellow-300">25-26 March 2026</span>
                  <span className="text-slate-500">",</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">"</span>
                  <span className="text-green-400">duration</span>
                  <span className="text-slate-500">"</span>
                  <span className="text-white">:</span>
                  <span className="text-slate-500">"</span>
                  <span className="text-yellow-300">24 Hours</span>
                  <span className="text-slate-500">",</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">"</span>
                  <span className="text-green-400">location</span>
                  <span className="text-slate-500">"</span>
                  <span className="text-white">:</span>
                  <span className="text-slate-500">"</span>
                  <span className="text-yellow-300">Amity University</span>
                  <span className="text-slate-500">"</span>
                </div>
              </div>
              <div className="mt-3">
                <span className="text-purple-400">{"}"}</span>
                <span className="text-white">;</span>
              </div>

              {/* Typing cursor */}
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-cyan-400 ml-1"
              />
            </div>

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-4 w-12 h-12 glass rounded-xl flex items-center justify-center glow-sm"
            >
              <Code2 className="w-6 h-6 text-cyan-400" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-10 h-10 glass rounded-xl flex items-center justify-center glow-sm"
            >
              <Terminal className="w-5 h-5 text-blue-400" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-1/2 -right-6 w-11 h-11 glass rounded-xl flex items-center justify-center glow-sm"
            >
              <Braces className="w-5 h-5 text-purple-400" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-1/4 -left-6 w-9 h-9 glass rounded-lg flex items-center justify-center glow-sm"
            >
              <Cpu className="w-4 h-4 text-green-400" />
            </motion.div>
          </div>
        </div>

        {/* Glow effect behind laptop */}
        <div className="absolute inset-0 -z-10 animate-pulse-glow">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-blue-500/30 blur-3xl rounded-full scale-150" />
        </div>
      </motion.div>

      {/* Sparkles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-0 right-0 text-yellow-400"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
    </div>
  );
}
