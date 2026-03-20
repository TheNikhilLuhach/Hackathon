"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";

const scheduleItems = [
  {
    day: "Day 1",
    date: "25 March 2026",
    events: [
      {
        time: "10:00 AM - 12:00 PM",
        title: "Registration & Orientation",
        venue: "Moot Court Hall",
        description: "Team check-in, welcome session, and event briefing",
      },
      {
        time: "12:15 PM",
        title: "Hackathon Kick-off",
        venue: "CR44, B-Block",
        description: "Problem statements released, coding begins",
      },
      {
        time: "02:00 PM",
        title: "Lunch Break",
        venue: "Food Court",
        description: "Networking lunch session",
      },
      {
        time: "06:00 PM",
        title: "Mentorship Round 1",
        venue: "CR44, B-Block",
        description: "Initial progress review with mentors",
      },
      {
        time: "09:00 PM",
        title: "Dinner & Networking",
        venue: "Food Court",
        description: "Evening meal and team collaboration",
      },
    ],
  },
  {
    day: "Day 2",
    date: "26 March 2026",
    events: [
      {
        time: "12:00 AM",
        title: "Midnight Snack",
        venue: "CR44, B-Block",
        description: "Late night refreshment break",
      },
      {
        time: "03:00 AM",
        title: "Mentorship Round 2",
        venue: "CR44, B-Block",
        description: "Progress check and guidance",
      },
      {
        time: "07:00 AM",
        title: "Breakfast",
        venue: "Food Court",
        description: "Morning fuel for the final stretch",
      },
      {
        time: "11:00 AM",
        title: "Code Freeze",
        venue: "CR44, B-Block",
        description: "Final submission deadline",
      },
      {
        time: "01:00 PM",
        title: "Presentations & Judging",
        venue: "Moot Court Hall",
        description: "Project demos and winner announcement",
      },
    ],
  },
];

const venueDetails = [
  {
    name: "Moot Court Hall",
    purpose: "Registration & Finals",
    address: "Main Academic Block, Ground Floor",
    time: "25 March | 10:00 AM – 12:00 Noon",
  },
  {
    name: "CR44, B-Block",
    purpose: "Main Hackathon Venue",
    address: "B-Block, 2nd Floor",
    time: "25 March 12:15 PM – 26 March 1:00 PM",
  },
];

export function Schedule() {
  return (
    <section id="schedule" className="section py-20 lg:py-32">
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
            Schedule & Venue
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Mark Your <span className="gradient-text">Calendar</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Two days of intense coding, learning, and innovation. Here is the complete schedule.
          </p>
        </motion.div>

        {/* Venue Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {venueDetails.map((venue, index) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{venue.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium mb-2">{venue.purpose}</p>
                  <p className="text-slate-400 text-sm mb-3">{venue.address}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>{venue.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {scheduleItems.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
            >
              {/* Day Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{day.day}</h3>
                  <p className="text-cyan-400">{day.date}</p>
                </div>
              </div>

              {/* Events */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-blue-500/50" />

                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <motion.div
                      key={event.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: eventIndex * 0.1 }}
                      className="relative pl-16"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-slate-900" />

                      {/* Event Card */}
                      <div className="glass rounded-xl p-5 card-hover group">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                          <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {event.title}
                          </h4>
                          <span className="inline-flex items-center gap-1 text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full">
                            <Clock className="w-3 h-3" />
                            {event.time}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm mb-2">{event.description}</p>
                        <div className="flex items-center gap-2 text-sm text-cyan-400">
                          <MapPin className="w-4 h-4" />
                          <span>{event.venue}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
