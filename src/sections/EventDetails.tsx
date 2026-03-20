"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Clock, Users, Trophy, Target } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const details = [
  {
    icon: Clock,
    value: 24,
    suffix: "",
    label: "Hours Duration",
    description: "Non-stop coding challenge",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    value: 2,
    suffix: "-4",
    label: "Team Size",
    description: "Members per team",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Trophy,
    value: 30,
    suffix: "",
    label: "Max Teams",
    description: "Limited participation",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    value: 4,
    suffix: "",
    label: "Problem Tracks",
    description: "Diverse challenges",
    color: "from-green-500 to-emerald-500",
  },
];

export function EventDetails() {
  return (
    <section id="details" className="section py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
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
            Event Details
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to <span className="gradient-text">Know</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Get ready for an intense 24-hour coding marathon. Here are the key details you need to prepare for the challenge.
          </p>
        </motion.div>

        {/* Animated Counters Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-8 text-center card-hover h-full">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${detail.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <detail.icon className="w-8 h-8 text-white" />
                </div>

                {/* Counter */}
                <div className="text-5xl font-bold gradient-text mb-2">
                  <Counter end={detail.value} suffix={detail.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {detail.label}
                </h3>
                <p className="text-slate-400 text-sm">
                  {detail.description}
                </p>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Registration Fee</h4>
              <p className="text-slate-400">Free for all participants</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Eligibility</h4>
              <p className="text-slate-400">Open to all university students</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Mode</h4>
              <p className="text-slate-400">Offline at Amity Campus</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
