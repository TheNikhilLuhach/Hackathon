"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Globe, BarChart3, ArrowRight } from "lucide-react";

const themes = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Build intelligent solutions using AI/ML technologies",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Create innovative security tools and protocols",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Develop cutting-edge web applications",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform data into actionable insights",
    color: "from-green-500 to-emerald-500",
  },
];

export function About() {
  return (
    <section id="about" className="section py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400 mb-4">
            About the Event
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What is <span className="gradient-text">CodeVerse?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              CodeVerse Hackathon is a 24-hour coding sprint designed to encourage innovation, creativity, and collaborative problem solving among students. Organized under Odyssey 2026, this event brings together passionate developers, designers, and innovators to build solutions that matter.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Whether you are a beginner or an experienced coder, CodeVerse provides the perfect platform to showcase your skills, learn new technologies, and network with like-minded individuals. Join us for an unforgettable experience of coding, learning, and fun!
            </p>
            <div className="flex items-center gap-2 text-cyan-400 font-medium group cursor-pointer">
              <span>Explore Themes</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass rounded-2xl p-6 text-center card-hover">
              <div className="text-4xl font-bold gradient-text mb-2">24</div>
              <div className="text-slate-400">Hours of Coding</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center card-hover">
              <div className="text-4xl font-bold gradient-text mb-2">30+</div>
              <div className="text-slate-400">Teams Competing</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center card-hover">
              <div className="text-4xl font-bold gradient-text mb-2">4</div>
              <div className="text-slate-400">Innovation Tracks</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center card-hover">
              <div className="text-4xl font-bold gradient-text mb-2">₹50K+</div>
              <div className="text-slate-400">Prize Pool</div>
            </div>
          </motion.div>
        </div>

        {/* Themes Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 card-hover group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${theme.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <theme.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{theme.title}</h3>
              <p className="text-sm text-slate-400">{theme.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
