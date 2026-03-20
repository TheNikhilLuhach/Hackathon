"use client";

import { motion } from "framer-motion";
import { Phone, Mail, GraduationCap, Users } from "lucide-react";

interface BaseCoordinator {
  name: string;
  role: string;
  image: string | null;
  color: string;
}

interface FacultyCoordinator extends BaseCoordinator {}

interface StudentCoordinator extends BaseCoordinator {
  phone: string;
}

type Coordinator = FacultyCoordinator | StudentCoordinator;

const facultyCoordinators: FacultyCoordinator[] = [
  {
    name: "Prof. Dr. Sunil Pathak",
    role: "Head of Department",
    image: null,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Dhruv Arora",
    role: "Faculty Coordinator",
    image: null,
    color: "from-purple-500 to-pink-500",
  },
];

const studentCoordinators: StudentCoordinator[] = [
  {
    name: "Nikhil Kumar",
    role: "Student Coordinator",
    phone: "7297072067",
    image: null,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Jenendra Khandelwal",
    role: "Student Coordinator",
    phone: "8824318188",
    image: null,
    color: "from-orange-500 to-amber-500",
  },
];

function CoordinatorCard({ person, type }: { person: Coordinator; type: "faculty" | "student" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group"
    >
      <div className="glass rounded-2xl p-6 text-center card-hover border border-slate-700/50 hover:border-slate-500/30 transition-all duration-300">
        {/* Avatar */}
        <div className="relative mb-4 mx-auto w-28 h-28">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${person.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
          <div className="absolute inset-1 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
            {person.image ? (
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-4xl font-bold text-slate-600">
                {person.name.split(" ").map(n => n[0]).join("")}
              </div>
            )}
          </div>
          {/* Glow ring */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${person.color} opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-300 -z-10`} />
        </div>

        {/* Info */}
        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
          {person.name}
        </h3>
        <p className="text-slate-400 text-sm mb-3">{person.role}</p>

        {/* Contact */}
        {type === "student" && "phone" in person && (
          <a
            href={`tel:${person.phone}`}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>{person.phone}</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function Coordinators() {
  return (
    <section id="team" className="section py-20 lg:py-32">
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
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet the <span className="gradient-text">Coordinators</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Get in touch with our dedicated team for any queries or support during the hackathon.
          </p>
        </motion.div>

        {/* Faculty Coordinators */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Faculty Coordinators</h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 max-w-2xl mx-auto gap-6">
            {facultyCoordinators.map((person, index) => (
              <CoordinatorCard key={person.name} person={person} type="faculty" />
            ))}
          </div>
        </div>

        {/* Student Coordinators */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Student Coordinators</h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 max-w-2xl mx-auto gap-6">
            {studentCoordinators.map((person, index) => (
              <CoordinatorCard key={person.name} person={person} type="student" />
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Need Help?</h3>
            <p className="text-slate-400 mb-6">
              For any queries regarding registration, rules, or the event, feel free to reach out to our coordinators.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:7297072067"
                className="inline-flex items-center gap-2 btn-primary rounded-full text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Nikhil
              </a>
              <a
                href="tel:8824318188"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 rounded-full text-slate-300 hover:text-white hover:border-slate-400 transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Jenendra
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
