"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { CornerBrackets } from "./ui/CornerBrackets";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 max-w-[1244px] mx-auto">
      {/* Rounded Gradient Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full rounded-[32px] md:rounded-[44px] border border-[#E8E8E8] bg-white overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.04)] py-20 sm:py-24 md:py-28 px-6 sm:px-12 text-center"
      >
        {/* Decorative Dashed Corner Brackets */}
        <CornerBrackets offset={18} />

        {/* Soft Pastel Mesh Glow */}
        <div className="absolute inset-0 mesh-gradient-cta pointer-events-none opacity-95" />

        {/* Content */}
        <div className="relative z-10 max-w-[720px] mx-auto flex flex-col items-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E8E8E8] shadow-sm mb-6">
            <Sparkles size={13} className="text-[#141414]" />
            <span className="text-[12.5px] font-medium text-[#141414]">
              Priority Member Access
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[34px] sm:text-[44px] md:text-[52px] font-bold text-[#141414] tracking-[-0.03em] leading-[1.12]">
            Be the first to unlock
            <br />
            exclusive deals
          </h2>

          {/* Subtext */}
          <p className="text-[15px] sm:text-[16.5px] text-[#6B6B6B] mt-5 max-w-[540px] leading-relaxed">
            Join over 45,000+ technology enthusiasts receiving early reserve access to
            flagship hardware drops and seasonal member privileges.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="#categories"
              className="inline-flex items-center gap-2 bg-[#111111] text-white text-[15px] font-medium px-8 py-3.5 rounded-full hover:bg-black transition-all duration-200 btn-hover-shadow group"
            >
              <span>Shop the Collection</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
