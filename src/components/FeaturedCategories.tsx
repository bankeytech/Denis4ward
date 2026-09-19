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
      hasOrangeGlow: true,
      alt: "Sleek metallic laptop with radiant ambient screen glow",
    },
    {
      id: "smart-living",
      title: "Smart Living Devices",
      count: "04 Items",
      image:
        "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=1000&q=85",
      hasOrangeGlow: false,
      alt: "Minimalist smart living connected devices",
    },
    {
      id: "gaming",
      title: "Ultimate Gaming Setup",
      count: "06 Items",
      image:
        "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1000&q=85",
      hasOrangeGlow: false,
      alt: "Precision engineered gaming peripherals",
    },
    {
      id: "sound",
      title: "Sound & Entertainment",
      count: "05 Items",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=85",
      hasOrangeGlow: false,
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
          className="text-[12.5px] font-bold tracking-[0.15em] text-[#888888] uppercase block mb-3"
        >
          Curated Hardware
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[32px] sm:text-[40px] md:text-[44px] font-bold text-[#141414] tracking-[-0.03em] leading-[1.15]"
        >
          Shop Our Featured Categories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[15px] sm:text-[16px] text-[#6B6B6B] mt-4 leading-relaxed"
        >
          Designed for uncompromising clarity, tactile satisfaction, and effortless integration into your home.
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
            className="group relative bg-white rounded-[30px] border border-[#E8E8E8] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col cursor-pointer"
          >
            {/* Top 82% Image Stage */}
            <div className="relative w-full h-[320px] sm:h-[380px] md:h-[410px] overflow-hidden bg-[#F4F3EF] flex items-center justify-center">
              {/* Optional Orange Screen Glow (Specifically for Laptops) */}
              {cat.hasOrangeGlow && (
                <div className="absolute inset-0 pointer-events-none z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[220px] bg-gradient-to-tr from-[#FF7A00]/30 via-[#FFAE42]/25 to-transparent blur-3xl rounded-full" />
                </div>
              )}

              {/* Product Photography */}
              <img
                src={cat.image}
                alt={cat.alt}
                className="w-full h-full object-cover grayscale-[30%] contrast-[1.06] brightness-[0.97] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Subtle Corner Badge Indicator */}
              <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-sm">
                <ArrowUpRight size={17} className="text-[#141414]" />
              </div>
            </div>

            {/* Bottom Row (~18%): Title & Item Count */}
            <div className="px-7 py-5 bg-white border-t border-[#EFEFEF] flex items-center justify-between">
              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#141414] tracking-tight group-hover:text-black transition-colors">
                {cat.title}
              </h3>
              <span className="text-[12.5px] sm:text-[13px] font-semibold text-[#666666] bg-[#F7F6F4] px-3.5 py-1 rounded-full border border-[#E5E5E5] tracking-wide">
                {cat.count}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
