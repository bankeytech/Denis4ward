"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Maximize2, Cpu, Zap, BatteryCharging } from "lucide-react";

export const PeakPerformance: React.FC = () => {
  const [progress] = useState(65);

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-[1244px] mx-auto">
      {/* Full-width Rounded Showcase Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full rounded-[32px] md:rounded-[44px] bg-[#080808] border border-[#2A2A2A] overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.7)] text-white"
      >
        {/* Top Translucent Header Bar */}
        <div className="w-full h-14 px-6 md:px-8 bg-[#111111]/80 backdrop-blur-xl border-b border-[#2A2A2A] flex items-center justify-between z-20 relative">
          <button
            className="p-1.5 rounded-full hover:bg-white/10 text-[#6A6A6A] hover:text-white transition-colors"
            aria-label="Previous showcase view"
          >
            <ChevronLeft size={19} />
          </button>

          <span className="text-[13px] md:text-[14px] font-bold tracking-[0.15em] text-[#F7C948] uppercase font-[family-name:var(--font-outfit)]">
            The Peak of Performance
          </span>

          <button
            className="p-1.5 rounded-full hover:bg-white/10 text-[#6A6A6A] hover:text-white transition-colors"
            aria-label="Expand showcase"
          >
            <Maximize2 size={16} />
          </button>
        </div>

        {/* Showcase Canvas */}
        <div className="relative w-full min-h-[440px] sm:min-h-[520px] md:min-h-[580px] flex items-center justify-center p-6 md:p-12 overflow-hidden">
          {/* Dark Environmental Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#080808] to-[#050505] pointer-events-none" />

          {/* Gold Screen Glow & Lighting Bloom */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[380px] sm:w-[540px] md:w-[680px] h-[260px] sm:h-[340px] bg-gradient-to-tr from-[#F7C948]/15 via-[#D89B1D]/10 to-transparent blur-[80px] sm:blur-[110px] rounded-full pointer-events-none" />

          {/* Center Product Showcase Image */}
          <div className="relative z-10 w-full max-w-[820px] flex flex-col items-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[16/10] max-h-[420px]"
            >
              {/* DENIS4WARD Flagship Laptop */}
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=90"
                alt="DENIS4WARD Flagship Laptop floating with gold screen glow on matte black surface"
                className="w-full h-full object-contain filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)] brightness-[0.92]"
              />

              {/* Gold Screen Highlight Accent */}
              <div className="absolute top-[22%] left-[28%] right-[28%] bottom-[32%] bg-gradient-to-t from-[#F7C948]/15 to-transparent pointer-events-none mix-blend-screen" />
            </motion.div>

            {/* Spec Highlights Overlay */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-6 w-full max-w-[620px]">
              <div className="bg-[#111111]/80 backdrop-blur-md border border-[#2A2A2A] rounded-2xl p-3 sm:p-4 text-center hover:border-[#F7C948]/30 transition-colors duration-300">
                <Cpu size={18} className="mx-auto text-[#F7C948] mb-1" />
                <span className="block text-[14px] sm:text-[16px] font-bold text-[#F8F8F8]">M-3 Max Core</span>
                <span className="block text-[11px] text-[#5A5A5A]">16-Core Processing</span>
              </div>
              <div className="bg-[#111111]/80 backdrop-blur-md border border-[#2A2A2A] rounded-2xl p-3 sm:p-4 text-center hover:border-[#F7C948]/30 transition-colors duration-300">
                <Zap size={18} className="mx-auto text-[#E8C56A] mb-1" />
                <span className="block text-[14px] sm:text-[16px] font-bold text-[#F8F8F8]">120Hz Liquid</span>
                <span className="block text-[11px] text-[#5A5A5A]">True Tone OLED</span>
              </div>
              <div className="bg-[#111111]/80 backdrop-blur-md border border-[#2A2A2A] rounded-2xl p-3 sm:p-4 text-center hover:border-[#F7C948]/30 transition-colors duration-300">
                <BatteryCharging size={18} className="mx-auto text-emerald-400 mb-1" />
                <span className="block text-[14px] sm:text-[16px] font-bold text-[#F8F8F8]">22h Battery</span>
                <span className="block text-[11px] text-[#5A5A5A]">Fast MagCharge</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gold Progress Bar */}
        <div className="w-full h-1.5 bg-[#1A1A1A] relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#D89B1D] via-[#F7C948] to-[#E8C56A] transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    </section>
  );
};
