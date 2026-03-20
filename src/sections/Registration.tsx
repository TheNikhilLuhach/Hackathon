"use client";

import { motion } from "framer-motion";
import { QrCode, ExternalLink, Clock, Users, AlertCircle, Download } from "lucide-react";
import Image from "next/image";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/2/d/e/1FAIpQLSe_doNYoqvZXDWXtAjBg_WxV8NPXoq1VSjkXe4i81oCiKHzXg/viewform?usp=send_form";

export function Registration() {
  return (
    <section id="register" className="section py-20 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
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
            Registration
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Secure Your <span className="gradient-text">Spot</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Registration is free and open to all university students. Scan the QR code or click the button below to register your team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="glass rounded-3xl p-8 glow-sm">
              <div className="w-64 h-64 bg-white rounded-2xl flex items-center justify-center relative overflow-hidden p-4">
                {/* Actual QR Code Image */}
                <Image
                  src="/qr-code.png"
                  alt="CodeVerse Hackathon Registration QR Code"
                  width={224}
                  height={224}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="mt-6 text-slate-400 text-sm text-center">
              Scan this QR code to open the registration form
            </p>
            <a
              href="/qr-code.png"
              download="codeverse-hackathon-qr.png"
              className="mt-3 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
            >
              <Download className="w-4 h-4" />
              Download QR Code
            </a>
          </motion.div>

          {/* Registration Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Quick Info */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Registration Deadline</p>
                    <p className="text-slate-400 text-sm">22 March 2026, 11:59 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Team Size</p>
                    <p className="text-slate-400 text-sm">2-4 members per team</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center flex items-center justify-center gap-2 text-lg py-4 rounded-xl ripple"
              >
                <QrCode className="w-5 h-5" />
                Register Now
              </a>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-slate-600 rounded-xl text-slate-300 hover:text-white hover:border-slate-400 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Open Registration Form
              </a>
            </div>

            {/* Note */}
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p>
                Please ensure all team members register individually. You will receive a confirmation email within 24 hours of registration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
