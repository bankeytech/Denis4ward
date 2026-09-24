"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones as HeadphoneIcon,
  Award,
  Navigation,
} from "lucide-react";
import { CornerBrackets } from "./ui/CornerBrackets";

export const Hero: React.FC = () => {
  const fanProducts = [
    {
      id: "headphones",
      category: "HEADPHONES",
      title: "Acoustic Studio Max",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=85",
      rotation: -24,
      translateX: -280,
      translateY: 28,
      zIndex: 10,
    },
    {
      id: "camera",
      category: "CAMERA",
      title: "Lumix Prime Lens",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=85",
      rotation: -12,
      translateX: -140,
      translateY: -6,
      zIndex: 20,
    },
    {
      id: "smartwatch",
      category: "SMARTWATCH",
      title: "Chrono Pulse Series 7",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=85",
      rotation: 0,
      translateX: 0,
      translateY: -28,
      zIndex: 30,
    },
    {
      id: "earbuds",
      category: "TWS AUDIO",
      title: "AirPods Pro Gen 2",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=600&q=85",
      rotation: 12,
      translateX: 140,
      translateY: -6,
      zIndex: 20,
    },
    {
      id: "speaker",
      category: "HOME AUDIO",
      title: "Echo Sphere",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=85",
      rotation: 24,
      translateX: 280,
      translateY: 28,
      zIndex: 10,
    },
  ];

  const partners = [
    { primary: "AURA", secondary: "SYSTEMS" },
    { primary: "NOVASYS", secondary: "ELECTRONICS" },
    { primary: "KINETIX", secondary: "AUDIO" },
    { primary: "VELOCE", secondary: "HARDWARE" },
    { primary: "ZENITH", secondary: "LABS" },
  ];

  return (
    <section className="pt-24 md:pt-28 pb-12 px-4 md:px-8 max-w-[1244px] mx-auto">
      {/* Giant Single Rounded Dark Container */}
      <div className="relative w-full rounded-[32px] md:rounded-[44px] border border-[#2A2A2A] bg-[#0D0D0D] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.7)]">
        {/* Gold Corner Brackets */}
        <CornerBrackets offset={18} />

        {/* Subtle Radial Gold Glow */}
        <div className="absolute inset-0 mesh-gradient-hero pointer-events-none opacity-100" />

        {/* Ambient top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#F7C948]/[0.06] to-transparent pointer-events-none" />

        {/* Top Content Area */}
        <div className="relative z-20 pt-16 md:pt-20 px-6 flex flex-col items-center text-center">
          {/* Top Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7C948]/10 backdrop-blur-md border border-[#F7C948]/25 shadow-sm mb-6 cursor-default"
          >
            <Sparkles size={13} className="text-[#F7C948]" />
            <span className="text-[13px] font-semibold text-[#F7C948] tracking-tight">
              Premium Gadget Collection
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] sm:text-[54px] lg:text-[68px] leading-[1.06] font-black text-[#F8F8F8] tracking-[-0.03em] max-w-[880px] font-[family-name:var(--font-outfit)]"
          >
            Premium Gadgets.
            <br />
            <span className="text-[#F7C948]">Exceptional</span> Technology.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] sm:text-[16.5px] leading-relaxed text-[#8A8A8A] mt-5 max-w-[580px]"
          >
            Discover flagship smartphones, powerful laptops, premium tablets, smart
            watches and accessories curated for professionals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#categories"
              className="inline-flex items-center gap-2 bg-[#F7C948] text-[#050505] text-[14.5px] font-bold px-7 py-3.5 rounded-full hover:bg-[#D89B1D] transition-all duration-200 btn-hover-shadow group"
            >
              <span>Shop Now</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 bg-transparent text-[#F7C948] text-[14.5px] font-semibold px-7 py-3.5 rounded-full border border-[#F7C948]/40 hover:border-[#F7C948] hover:bg-[#F7C948]/8 transition-all duration-200 group"
            >
              <span>Explore Collection</span>
            </a>
          </motion.div>
        </div>

        {/* HERO PRODUCT FAN ARC STAGE */}
        <div className="relative z-20 w-full mt-10 md:mt-14 h-[420px] sm:h-[480px] md:h-[530px] flex items-center justify-center overflow-visible select-none">
          {/* Fan Cards Container */}
          <div className="relative w-full max-w-[900px] h-full flex items-center justify-center">
            {fanProducts.map((prod, idx) => {
              return (
                <motion.div
                  key={prod.id}
                  initial={{ opacity: 0, y: 60, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    y: prod.translateY,
                    rotate: prod.rotation,
                    x: prod.translateX,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 40,
                    transition: { duration: 0.2 },
                  }}
                  style={{ zIndex: prod.zIndex }}
                  className="absolute w-[185px] sm:w-[210px] md:w-[230px] bg-[#141414] rounded-[22px] p-2.5 sm:p-3 pb-5 sm:pb-6 polaroid-shadow border border-[#2A2A2A] hover:border-[#F7C948]/40 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(247,201,72,0.08)] cursor-pointer"
                >
                  {/* Photo Canvas */}
                  <div className="w-full aspect-[4/3.8] rounded-[16px] overflow-hidden bg-[#1A1A1A] relative mb-3 sm:mb-3.5">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] brightness-[0.90] transition-transform duration-500 hover:scale-105"
                      loading="eager"
                    />
                  </div>
                  {/* Card Meta */}
                  <div className="px-1 text-left">
                    <span className="block text-[9.5px] sm:text-[10px] font-bold tracking-wider text-[#F7C948] uppercase mb-0.5">
                      {prod.category}
                    </span>
                    <h3 className="text-[13px] sm:text-[14px] font-bold text-[#F8F8F8] tracking-tight truncate">
                      {prod.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}

            {/* FLOATING DARK GLASSMORPHISM FEATURE PILLS */}
            {/* 1. Premium Quality (Top Center) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 z-40 glass-pill px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[12px] font-medium shadow-md hover:scale-105 transition-transform"
            >
              <Award size={14} className="text-[#F7C948]" />
              <span>Premium Quality</span>
            </motion.div>

            {/* 2. Secure Payments (Upper Left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75, duration: 0.4 }}
              className="absolute top-12 sm:top-14 left-[14%] sm:left-[22%] z-40 glass-pill px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[12px] font-medium shadow-md hover:scale-105 transition-transform hidden sm:flex"
            >
              <ShieldCheck size={14} className="text-[#F7C948]" />
              <span>Secure Payments</span>
            </motion.div>

            {/* 3. 24/7 Support (Upper Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute top-12 sm:top-14 right-[14%] sm:right-[22%] z-40 glass-pill px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[12px] font-medium shadow-md hover:scale-105 transition-transform hidden sm:flex"
            >
              <HeadphoneIcon size={14} className="text-[#F7C948]" />
              <span>24/7 Support</span>
            </motion.div>

            {/* 4. Easy Tracking (Far Upper Left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.85, duration: 0.4 }}
              className="absolute top-28 sm:top-36 left-[3%] sm:left-[8%] z-40 glass-pill px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[12px] font-medium shadow-md hover:scale-105 transition-transform"
            >
              <Navigation size={13} className="text-[#F7C948]" />
              <span>Easy Tracking</span>
            </motion.div>

            {/* 5. Easy Returns (Far Upper Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="absolute top-28 sm:top-36 right-[3%] sm:right-[8%] z-40 glass-pill px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[12px] font-medium shadow-md hover:scale-105 transition-transform"
            >
              <RotateCcw size={13} className="text-[#F7C948]" />
              <span>Easy Returns</span>
            </motion.div>

            {/* 6. Fast Delivery (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.95, duration: 0.4 }}
              className="absolute bottom-6 sm:bottom-10 left-[16%] sm:left-[24%] z-40 glass-pill px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[12px] font-medium shadow-md hover:scale-105 transition-transform"
            >
              <Truck size={14} className="text-[#F7C948]" />
              <span>Fast Delivery</span>
            </motion.div>
          </div>
        </div>

        {/* PARTNER STRIP */}
        <div className="relative z-20 w-full border-t border-[#1E1E1E] bg-[#0A0A0A]/80 backdrop-blur-sm py-7 px-6">
          <div className="max-w-[1000px] mx-auto flex flex-wrap items-center justify-between gap-6 sm:gap-8">
            {partners.map((partner) => (
              <div
                key={partner.primary}
                className="flex flex-col items-center justify-center opacity-35 hover:opacity-75 transition-opacity duration-200 cursor-default group"
              >
                <span className="text-[13px] md:text-[14px] font-black tracking-[0.2em] text-[#F8F8F8] leading-tight">
                  {partner.primary}
                </span>
                <span className="text-[9px] md:text-[9.5px] font-semibold tracking-[0.25em] text-[#6A6A6A] leading-tight mt-0.5">
                  {partner.secondary}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
