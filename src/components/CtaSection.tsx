"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { CornerBrackets } from "./ui/CornerBrackets";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 max-w-[1244px] mx-auto">
      {/* Rounded Dark Gradient Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full rounded-[32px] md:rounded-[44px] border border-[#2A2A2A] bg-[#0D0D0D] overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.6)] py-20 sm:py-24 md:py-28 px-6 sm:px-12 text-center"
      >
        {/* Gold Corner Brackets */}
        <CornerBrackets offset={18} />

        {/* Subtle Gold Mesh Glow */}
        <div className="absolute inset-0 mesh-gradient-cta pointer-events-none opacity-100" />

        {/* Ambient top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-b from-[#F7C948]/[0.07] to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-[720px] mx-auto flex flex-col items-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7C948]/10 backdrop-blur-md border border-[#F7C948]/25 shadow-sm mb-6">
            <Sparkles size={13} className="text-[#F7C948]" />
            <span className="text-[12.5px] font-semibold text-[#F7C948]">
              Priority Member Access
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[34px] sm:text-[44px] md:text-[52px] font-black text-[#F8F8F8] tracking-[-0.03em] leading-[1.12] font-[family-name:var(--font-outfit)]">
            Be the first to unlock
            <br />
            <span className="text-[#F7C948]">exclusive deals</span>
          </h2>

          {/* Subtext */}
          <p className="text-[15px] sm:text-[16.5px] text-[#7A7A7A] mt-5 max-w-[540px] leading-relaxed">
            Join over 45,000+ technology enthusiasts receiving early reserve access to
            flagship hardware drops and seasonal member privileges.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="#categories"
              className="inline-flex items-center gap-2 bg-[#F7C948] text-[#050505] text-[15px] font-bold px-8 py-3.5 rounded-full hover:bg-[#D89B1D] transition-all duration-200 btn-hover-shadow group shadow-[0_6px_28px_rgba(247,201,72,0.3)]"
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
