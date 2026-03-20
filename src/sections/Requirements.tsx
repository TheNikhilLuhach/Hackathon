"use client";

import { motion } from "framer-motion";
import { Wifi, Zap, Armchair, Headphones, CheckCircle2 } from "lucide-react";

const requirements = [
  {
    icon: Wifi,
    title: "Internet Connectivity",
    description: "High-speed WiFi will be provided throughout the venue for all participants.",
  },
  {
    icon: Zap,
    title: "Power Supply",
    description: "Adequate power outlets available at each workstation. Bring your own extension cords if needed.",
  },
  {
    icon: Armchair,
    title: "Tables & Chairs",
    description: "Comfortable seating arrangements with spacious tables for your equipment.",
  },
  {
    icon: Headphones,
    title: "IT Support",
    description: "Technical assistance available round the clock to help with any issues.",
  },
];

const bringYourOwn = [
  "Laptop with charger",
  "Mobile phone",
  "Extension cord/Power strip",
  "Water bottle",
  "Personal medications if any",
  "ID Card",
];

export function Requirements() {
  return (
    <section id="requirements" className="section py-20 lg:py-32">
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
            What to Expect
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Event <span className="gradient-text">Requirements</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We have got you covered with all the essentials. Here is what will be provided and what you need to bring.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Provided by Organizers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              Provided at Venue
            </h3>
            <div className="space-y-4">
              {requirements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-xl p-5 flex items-start gap-4 card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bring Your Own */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <Armchair className="w-5 h-5 text-white" />
              </div>
              Bring Your Own
            </h3>
            <div className="glass rounded-2xl p-6">
              <ul className="space-y-4">
                {bringYourOwn.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Additional Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 glass rounded-xl p-5 border-l-4 border-cyan-500"
            >
              <p className="text-slate-300 text-sm">
                <strong className="text-white">Note:</strong> Food and refreshments will be provided during the event. Participants are allowed to bring their own snacks. Sleeping arrangements can be made on-site for those who need rest.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
