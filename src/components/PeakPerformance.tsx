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
        className="relative w-full rounded-[32px] md:rounded-[44px] bg-[#121214] border border-[#2A2A2E] overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.25)] text-white"
      >
        {/* Top Translucent Header Bar */}
        <div className="w-full h-14 px-6 md:px-8 bg-white/5 backdrop-blur-xl border-b border-white/10 flex items-center justify-between z-20 relative">
          <button
            className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            aria-label="Previous showcase view"
          >
            <ChevronLeft size={19} />
          </button>

          <span className="text-[13px] md:text-[14px] font-semibold tracking-wider text-white/90 uppercase">
            The Peak of Performance
          </span>

          <button
            className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            aria-label="Expand showcase"
          >
            <Maximize2 size={16} />
          </button>
        </div>

        {/* Showcase Canvas */}
        <div className="relative w-full min-h-[440px] sm:min-h-[520px] md:min-h-[580px] flex items-center justify-center p-6 md:p-12 overflow-hidden">
          {/* Neutral Gray Environmental Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#18181C] via-[#121214] to-[#0A0A0C] pointer-events-none" />

          {/* Warm Orange Screen Glow & Lighting Bloom */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[380px] sm:w-[540px] md:w-[680px] h-[260px] sm:h-[340px] bg-gradient-to-tr from-[#FF5E00]/30 via-[#FF9E00]/20 to-transparent blur-[80px] sm:blur-[110px] rounded-full pointer-events-none" />

          {/* Center Product Showcase Image */}
          <div className="relative z-10 w-full max-w-[820px] flex flex-col items-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[16/10] max-h-[420px]"
            >
              {/* Silver Laptop Floating Above Textured Stone Studio Imagery */}
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=90"
                alt="Silver Solvora Flagship Laptop floating with warm screen glow above textured stone"
                className="w-full h-full object-contain filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)]"
              />

              {/* Glowing Screen Highlight Accent */}
              <div className="absolute top-[22%] left-[28%] right-[28%] bottom-[32%] bg-gradient-to-t from-[#FF7A00]/25 to-transparent pointer-events-none mix-blend-screen" />
            </motion.div>

            {/* Spec Highlights Overlay */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-6 w-full max-w-[620px]">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 text-center">
                <Cpu size={18} className="mx-auto text-orange-400 mb-1" />
                <span className="block text-[14px] sm:text-[16px] font-bold">M-3 Max Core</span>
                <span className="block text-[11px] text-white/50">16-Core Processing</span>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 text-center">
                <Zap size={18} className="mx-auto text-amber-400 mb-1" />
                <span className="block text-[14px] sm:text-[16px] font-bold">120Hz Liquid</span>
                <span className="block text-[11px] text-white/50">True Tone OLED</span>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 text-center">
                <BatteryCharging size={18} className="mx-auto text-emerald-400 mb-1" />
                <span className="block text-[14px] sm:text-[16px] font-bold">22h Battery</span>
                <span className="block text-[11px] text-white/50">Fast MagCharge</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="w-full h-1.5 bg-white/10 relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    </section>
  );
};
