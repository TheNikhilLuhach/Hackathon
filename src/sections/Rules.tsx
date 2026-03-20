"use client";

import { motion } from "framer-motion";
import { AlertCircle, Users, Scale, Upload, Ban, Shield, Clock, FileCode } from "lucide-react";

const rules = [
  {
    icon: Ban,
    title: "No Pre-Built Projects",
    description: "All code must be written during the hackathon. Using pre-existing projects or substantial codebases is strictly prohibited.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Team Size Constraints",
    description: "Teams must consist of 2-4 members. Solo participation is not allowed. All team members must be currently enrolled students.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Scale,
    title: "Judges' Decision Final",
    description: "The judging panel's decision is final and binding. All projects will be evaluated based on the announced criteria.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Upload,
    title: "Code Submission Required",
    description: "All projects must be submitted through the designated platform before the deadline. Late submissions will not be accepted.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Original Work Only",
    description: "Plagiarism is strictly prohibited. Any team found using copied code will be immediately disqualified.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Teams must adhere to all announced deadlines. The code freeze time is absolute with no extensions.",
    color: "from-indigo-500 to-violet-500",
  },
];

export function Rules() {
  return (
    <section id="rules" className="section py-20 lg:py-32">
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
            Rules & Guidelines
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Competition <span className="gradient-text">Rules</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Please read and understand all rules carefully. Violation of any rule may result in disqualification.
          </p>
        </motion.div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-6 h-full card-hover border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${rule.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <rule.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {rule.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {rule.description}
                </p>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass rounded-2xl p-8 border-l-4 border-yellow-500"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Important Notice</h3>
              <p className="text-slate-300 leading-relaxed">
                By participating in CodeVerse Hackathon, all teams agree to abide by these rules. The organizing committee reserves the right to disqualify any team that violates these guidelines. For any clarifications, please contact the coordinators before the event begins.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
