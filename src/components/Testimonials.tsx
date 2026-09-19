"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle2, Navigation2, MapPin, Clock } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-[1244px] mx-auto overflow-hidden">
      {/* Centered Heading */}
      <div className="text-center max-w-[700px] mx-auto mb-16 md:mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12.5px] font-bold tracking-[0.15em] text-[#888888] uppercase block mb-3"
        >
          Customer Voices
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[32px] sm:text-[40px] md:text-[44px] font-bold text-[#141414] tracking-[-0.03em] leading-[1.15]"
        >
          See What Our Customers
          <br className="hidden sm:inline" /> Really Think
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[15px] sm:text-[16px] text-[#6B6B6B] mt-4 leading-relaxed"
        >
          Real feedback from engineers, creators, and everyday enthusiasts who rely on Solvora hardware daily.
        </motion.p>
      </div>

      {/* Mockup Presentation Container */}
      <div className="relative max-w-[680px] mx-auto flex items-center justify-center min-h-[580px] sm:min-h-[660px]">
        {/* Soft Background Radial Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-tr from-[#DDD7F6]/40 via-[#F7D8C8]/30 to-transparent blur-3xl rounded-full pointer-events-none" />

        {/* Smartphone Mockup with Dynamic Island */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[280px] sm:w-[320px] aspect-[9/18.5] bg-[#1A1A1A] rounded-[48px] p-3 shadow-[0_25px_70px_rgba(0,0,0,0.18)] border-4 border-[#2E2E32] z-10"
        >
          {/* Outer Screen Bezel */}
          <div className="w-full h-full bg-[#0F1014] rounded-[40px] overflow-hidden relative flex flex-col justify-between border border-white/10">
            {/* Dynamic Island Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#111111] border border-white/20" />
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Map UI on Phone Screen */}
            <div className="relative w-full h-full bg-[#1A1D24] overflow-hidden">
              {/* Stylized Vector Map Grid */}
              <div className="absolute inset-0 opacity-25">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern
                      id="grid-pattern"
                      width="32"
                      height="32"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 32 0 L 0 0 0 32"
                        fill="none"
                        stroke="#8E99B0"
                        strokeWidth="0.8"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
              </div>

              {/* Courier Delivery Route Line */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 320 600"
                fill="none"
              >
                <path
                  d="M60 480 C 100 400, 80 320, 160 260 C 220 220, 240 180, 210 120"
                  stroke="#FF6B00"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                />
                <circle cx="210" cy="120" r="8" fill="#FF6B00" />
                <circle cx="210" cy="120" r="16" stroke="#FF6B00" strokeWidth="2" opacity="0.4" />
                <circle cx="110" cy="330" r="10" fill="#FFFFFF" />
              </svg>

              {/* Courier Status Pill Overlay */}
              <div className="absolute top-16 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 text-white">
                <div className="flex items-center gap-2 text-[11px] font-medium text-white/70">
                  <Clock size={12} />
                  <span>Estimated Delivery</span>
                </div>
                <div className="text-[15px] font-bold mt-0.5">Today, 2:45 PM</div>
              </div>

              {/* Pin Destination Tag */}
              <div className="absolute top-36 right-6 bg-[#111111]/90 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/20">
                <MapPin size={10} className="text-orange-400" />
                <span>Solvora Hub</span>
              </div>

              {/* Driver Navigation Bar at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-2xl p-3.5 shadow-xl text-[#141414]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center">
                      <Navigation2 size={15} />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold leading-tight">Order #SOL-8924</div>
                      <div className="text-[10px] text-gray-500">Chrono Pulse Series 7</div>
                    </div>
                  </div>
                  <span className="text-[10.5px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    On Route
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FLOATING REVIEW CARD OVERLAPPING TOP-RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-12 sm:top-16 right-0 sm:-right-8 md:-right-12 z-30 bg-white/95 backdrop-blur-xl rounded-[24px] p-5 sm:p-6 border border-[#E8E8E8] shadow-[0_20px_50px_rgba(0,0,0,0.12)] max-w-[290px] sm:max-w-[340px]"
        >
          {/* 5 Gold Stars */}
          <div className="flex items-center gap-1 text-amber-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>

          {/* Short Review */}
          <p className="text-[13.5px] sm:text-[14.5px] text-[#141414] font-medium leading-relaxed mb-4">
            &ldquo;Seamless delivery in under 24 hours. The build quality of these
            devices is truly unmatched in both tactile finish and battery
            endurance.&rdquo;
          </p>

          {/* User Profile */}
          <div className="flex items-center gap-3 pt-3 border-t border-[#F0F0F0]">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
              alt="Alex Rivera avatar"
              className="w-10 h-10 rounded-full object-cover border border-white shadow-sm"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[13.5px] font-bold text-[#141414]">
                  Alex Rivera
                </span>
                <CheckCircle2 size={13} className="text-blue-500 fill-blue-500/20" />
              </div>
              <span className="text-[11.5px] text-[#777777]">
                Verified Buyer · Sound Engineer
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
