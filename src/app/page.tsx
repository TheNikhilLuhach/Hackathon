"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { EventDetails } from "@/sections/EventDetails";
import { Schedule } from "@/sections/Schedule";
import { Rules } from "@/sections/Rules";
import { JudgingCriteria } from "@/sections/JudgingCriteria";
import { Coordinators } from "@/sections/Coordinators";
import { Registration } from "@/sections/Registration";
import { Requirements } from "@/sections/Requirements";
import { Footer } from "@/sections/Footer";

// Loading Screen Component
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0f1a]"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center glow"
        >
          <span className="text-white font-bold text-3xl">CV</span>
        </motion.div>

        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl font-bold gradient-text mb-2"
        >
          CodeVerse
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-slate-400"
        >
          Odyssey 2026
        </motion.p>

        {/* Loading Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
          className="w-48 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-8 rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen bg-[#0a0f1a]"
        >
          {/* Background Effects */}
          <ParticleBackground />

          {/* Navigation */}
          <Navbar />

          {/* Page Sections */}
          <Hero />
          <About />
          <EventDetails />
          <Schedule />
          <Rules />
          <JudgingCriteria />
          <Coordinators />
          <Registration />
          <Requirements />
          <Footer />
        </motion.main>
      )}
    </>
  );
}
