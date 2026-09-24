"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const FeaturedCategories: React.FC = () => {
  const categories = [
    {
      id: "laptops",
      title: "Premium Laptops",
      count: "05 Items",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85",
      hasGoldGlow: true,
      alt: "Sleek metallic laptop with radiant ambient screen glow",
    },
    {
      id: "smart-living",
      title: "Smart Living Devices",
      count: "04 Items",
      image:
        "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=1000&q=85",
      hasGoldGlow: false,
      alt: "Minimalist smart living connected devices",
    },
    {
      id: "gaming",
      title: "Ultimate Gaming Setup",
      count: "06 Items",
      image:
        "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1000&q=85",
      hasGoldGlow: false,
      alt: "Precision engineered gaming peripherals",
    },
    {
      id: "sound",
      title: "Sound & Entertainment",
      count: "05 Items",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=85",
      hasGoldGlow: false,
      alt: "High-end studio acoustic monitor and entertainment audio",
    },
  ];

  return (
    <section id="categories" className="py-24 md:py-32 px-4 md:px-8 max-w-[1244px] mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-[700px] mx-auto mb-16 md:mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold tracking-[0.18em] text-[#F7C948] uppercase block mb-3"
        >
          Curated Hardware
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[32px] sm:text-[40px] md:text-[44px] font-black text-[#F8F8F8] tracking-[-0.03em] leading-[1.15] font-[family-name:var(--font-outfit)]"
        >
          Shop Our Featured Categories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[15px] sm:text-[16px] text-[#7A7A7A] mt-4 leading-relaxed"
        >
          Designed for uncompromising clarity, tactile satisfaction, and effortless integration into your life.
        </motion.p>
      </div>

      {/* 2x2 Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            whileHover={{ y: -6 }}
            className="group relative bg-[#111111] rounded-[30px] border border-[#2A2A2A] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.6)] hover:border-[#F7C948]/35 transition-all duration-300 flex flex-col cursor-pointer"
          >
            {/* Top Image Stage */}
            <div className="relative w-full h-[320px] sm:h-[380px] md:h-[410px] overflow-hidden bg-[#0D0D0D] flex items-center justify-center">
              {/* Optional Gold Glow for Laptops */}
              {cat.hasGoldGlow && (
                <div className="absolute inset-0 pointer-events-none z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[220px] bg-gradient-to-tr from-[#F7C948]/20 via-[#D89B1D]/15 to-transparent blur-3xl rounded-full" />
                </div>
              )}

              {/* Product Photography */}
              <img
                src={cat.image}
                alt={cat.alt}
                className="w-full h-full object-cover grayscale-[25%] contrast-[1.08] brightness-[0.75] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Arrow Badge */}
              <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F7C948] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-[0_4px_16px_rgba(247,201,72,0.4)]">
                <ArrowUpRight size={17} className="text-[#050505]" />
              </div>

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Row: Title & Item Count */}
            <div className="px-7 py-5 bg-[#111111] border-t border-[#1E1E1E] flex items-center justify-between">
              <h3 className="text-[19px] sm:text-[21px] font-bold text-[#F8F8F8] tracking-tight group-hover:text-[#F7C948] transition-colors duration-300 font-[family-name:var(--font-outfit)]">
                {cat.title}
              </h3>
              <span className="text-[12px] sm:text-[12.5px] font-bold text-[#F7C948] bg-[#F7C948]/10 px-3.5 py-1 rounded-full border border-[#F7C948]/20 tracking-wide">
                {cat.count}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
