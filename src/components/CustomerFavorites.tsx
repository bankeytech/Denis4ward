"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Star,
  Truck,
  Check,
} from "lucide-react";

export const CustomerFavorites: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "02",
    hours: "14",
    mins: "36",
    secs: "48",
  });

  // Dynamic countdown simulator
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const s = String(59 - now.getSeconds()).padStart(2, "0");
      const m = String(59 - now.getMinutes()).padStart(2, "0");
      const h = String((23 - now.getHours()) % 24).padStart(2, "0");
      setTimeLeft({ days: "02", hours: h, mins: m, secs: s });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const spotlightProducts = [
    {
      id: "tv",
      title: "Ultra HD Smart TV",
      badge: "Free shipping and easy returns",
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=85",
      price: "$549.00",
      originalPrice: "$799.00",
      discount: "Save $250",
      description:
        "Cinematic quantum OLED display with Dolby Vision HDR, AI spatial acoustic soundstage, and instant ambient casting for home theater perfection.",
      reviews: "4.9 (840+ verified reviews)",
    },
    {
      id: "audio-system",
      title: "DENIS4WARD Spatial Soundbar",
      badge: "Staff Pick · Top Performer",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=85",
      price: "$389.00",
      originalPrice: "$499.00",
      discount: "Save $110",
      description:
        "360-degree wireless acoustic projection with tuned carbon woofers, lossless AirPlay 2 streaming, and titanium dome tweeters.",
      reviews: "4.8 (620+ verified reviews)",
    },
  ];

  const current = spotlightProducts[activeSlide];

  return (
    <section id="favorites" className="py-24 md:py-32 px-4 md:px-8 max-w-[1244px] mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-[700px] mx-auto mb-16 md:mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold tracking-[0.18em] text-[#F7C948] uppercase block mb-3"
        >
          Community Highlights
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[32px] sm:text-[40px] md:text-[44px] font-black text-[#F8F8F8] tracking-[-0.03em] leading-[1.15] font-[family-name:var(--font-outfit)]"
        >
          Highly Rated Customer Favorites
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[15px] sm:text-[16px] text-[#7A7A7A] mt-4 leading-relaxed"
        >
          Flagship grade performance selected and rated highest by our global community.
        </motion.p>
      </div>

      {/* Large Spotlight Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#0E0E0E] rounded-[32px] md:rounded-[40px] border border-[#2A2A2A] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* Left Column: Product Photo (7 cols) */}
          <div className="lg:col-span-7 relative bg-[#0A0A0A] p-6 sm:p-10 flex items-center justify-center overflow-hidden min-h-[360px] lg:min-h-full">
            {/* TV Screen Mockup Display */}
            <div className="relative w-full max-w-[560px] aspect-[16/10] rounded-[20px] overflow-hidden shadow-2xl border-4 border-[#1A1A1A] bg-black">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] brightness-[0.85]"
              />
              {/* Sleek UI overlay on screen */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between text-white/80 text-[11px] font-medium tracking-wide">
                  <span className="bg-[#F7C948]/20 backdrop-blur-md px-2.5 py-1 rounded-md text-[#F7C948] font-bold">
                    DENIS4WARD OS 4K
                  </span>
                  <span>HDR10+ · 120Hz</span>
                </div>
                <div className="text-white">
                  <div className="text-[11px] uppercase tracking-wider text-[#F7C948] font-semibold mb-0.5">Now Playing</div>
                  <div className="text-[15px] font-bold">Atmospheres: Deep Orbit Nature Doc</div>
                </div>
              </div>
            </div>

            {/* Bottom-left overlay: Add to Cart */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20">
              <button
                onClick={() => {
                  setAddedToCart(true);
                  setTimeout(() => setAddedToCart(false), 2200);
                }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-semibold transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.4)] ${
                  addedToCart
                    ? "bg-[#F7C948] text-[#050505]"
                    : "bg-[#1A1A1A]/90 backdrop-blur-md text-[#F8F8F8] hover:bg-[#F7C948] hover:text-[#050505] border border-[#3A3A3A]"
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check size={16} className="text-[#050505]" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={15} />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Information, Countdown, Offer (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 md:p-14 flex flex-col justify-center bg-[#0E0E0E]">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7C948]/10 border border-[#F7C948]/20 text-[12px] font-semibold text-[#F7C948] w-fit mb-5">
              <Truck size={13} className="text-[#F7C948]" />
              <span>{current.badge}</span>
            </div>

            {/* Title */}
            <h3 className="text-[28px] sm:text-[33px] font-black text-[#F8F8F8] tracking-tight leading-[1.15] font-[family-name:var(--font-outfit)]">
              {current.title}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex text-[#F7C948]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <span className="text-[13px] font-medium text-[#6A6A6A]">
                {current.reviews}
              </span>
            </div>

            {/* Description */}
            <p className="text-[14.5px] leading-relaxed text-[#7A7A7A] mt-4">
              {current.description}
            </p>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 mt-6">
              <span className="text-[32px] sm:text-[36px] font-extrabold text-[#F7C948] tracking-tight font-mono">
                {current.price}
              </span>
              <span className="text-[18px] text-[#444444] line-through font-mono">
                {current.originalPrice}
              </span>
              <span className="text-[12px] font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                {current.discount}
              </span>
            </div>

            {/* 4 Countdown Boxes */}
            <div className="mt-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#5A5A5A] block mb-2.5">
                Limited Time Drop Ends In:
              </span>
              <div className="grid grid-cols-4 gap-2.5 max-w-[340px]">
                {[
                  { label: "Days", val: timeLeft.days },
                  { label: "Hours", val: timeLeft.hours },
                  { label: "Mins", val: timeLeft.mins },
                  { label: "Secs", val: timeLeft.secs },
                ].map(({ label, val }) => (
                  <div
                    key={label}
                    className="border border-[#2A2A2A] rounded-[16px] py-2.5 px-2 text-center bg-[#141414]"
                  >
                    <span className="block text-[20px] font-bold text-[#F8F8F8] font-mono leading-none">
                      {val}
                    </span>
                    <span className="block text-[9.5px] font-semibold text-[#5A5A5A] uppercase mt-1 tracking-wider">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="mt-8">
              <a
                href="#categories"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F7C948] text-[#050505] text-[14px] font-bold px-8 py-3.5 rounded-full hover:bg-[#D89B1D] transition-all duration-200 shadow-[0_6px_24px_rgba(247,201,72,0.25)] hover:shadow-[0_8px_32px_rgba(247,201,72,0.4)] hover:-translate-y-0.5"
              >
                Claim Limited Offer
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-between mt-8 px-2">
        {/* Progress Dots */}
        <div className="flex items-center gap-2">
          {spotlightProducts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === idx
                  ? "w-8 bg-[#F7C948]"
                  : "w-2 bg-[#2A2A2A] hover:bg-[#4A4A4A]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Circular Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setActiveSlide((prev) =>
                prev === 0 ? spotlightProducts.length - 1 : prev - 1
              )
            }
            className="w-11 h-11 rounded-full border border-[#2A2A2A] bg-[#111111] flex items-center justify-center text-[#6A6A6A] hover:border-[#F7C948]/50 hover:text-[#F7C948] transition-all shadow-sm hover:scale-105"
            aria-label="Previous Spotlight Product"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() =>
              setActiveSlide((prev) =>
                prev === spotlightProducts.length - 1 ? 0 : prev + 1
              )
            }
            className="w-11 h-11 rounded-full bg-[#F7C948] text-[#050505] flex items-center justify-center hover:bg-[#D89B1D] transition-all shadow-sm hover:scale-105"
            aria-label="Next Spotlight Product"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
