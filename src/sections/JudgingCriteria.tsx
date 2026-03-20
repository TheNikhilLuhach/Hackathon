"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, Palette, Rocket, Presentation } from "lucide-react";

const criteria = [
  {
    icon: Lightbulb,
    title: "Innovation",
    percentage: "25%",
    description: "Originality of the idea and creative approach to solving the problem. How unique and novel is your solution?",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Code2,
    title: "Technical Implementation",
    percentage: "25%",
    description: "Quality of code, architecture design, and technical complexity. Clean, efficient, and well-structured implementation.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    percentage: "20%",
    description: "User interface aesthetics, user experience flow, and overall design quality. Intuitive and visually appealing.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Impact & Feasibility",
    percentage: "20%",
    description: "Potential real-world impact, scalability, and practicality of the solution. Can this make a difference?",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Presentation,
    title: "Presentation",
    percentage: "10%",
    description: "Quality of demo, clarity of explanation, and ability to articulate the solution effectively.",
    color: "from-orange-500 to-red-500",
  },
];

export function JudgingCriteria() {
  return (
    <section id="judging" className="section py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400 mb-4">
            Evaluation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Judging <span className="gradient-text">Criteria</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Projects will be evaluated based on the following criteria. Make sure to focus on all aspects for a winning submission.
          </p>
        </motion.div>

        {/* Criteria Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((criterion, index) => (
            <motion.div
              key={criterion.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-6 h-full card-hover border border-slate-700/50 hover:border-slate-500/30 transition-all duration-300">
                {/* Percentage Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-2xl font-bold bg-gradient-to-r ${criterion.color} bg-clip-text text-transparent`}>
                    {criterion.percentage}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${criterion.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 glow-sm`}>
                  <criterion.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {criterion.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {criterion.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-4 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: criterion.percentage }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${criterion.color} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Score */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Scoring System</h3>
            <p className="text-slate-400 mb-6">
              Each project will be scored out of 100 points based on the criteria above. Judges will provide detailed feedback to help teams improve their solutions.
            </p>
            <div className="flex items-center justify-center gap-2 text-cyan-400">
              <span className="text-4xl font-bold">100</span>
              <span className="text-xl text-slate-400">Total Points</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
