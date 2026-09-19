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
      title: "Solvora Spatial Soundbar",
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
          className="text-[12.5px] font-bold tracking-[0.15em] text-[#888888] uppercase block mb-3"
        >
          Community Highlights
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[32px] sm:text-[40px] md:text-[44px] font-bold text-[#141414] tracking-[-0.03em] leading-[1.15]"
        >
          Highly Rated Customer Favorites
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[15px] sm:text-[16px] text-[#6B6B6B] mt-4 leading-relaxed"
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
        className="bg-white rounded-[32px] md:rounded-[40px] border border-[#E8E8E8] shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* Left Column: Product Photo + Streaming UI + Overlay Add to Cart (7 cols) */}
          <div className="lg:col-span-7 relative bg-[#F2F1ED] p-6 sm:p-10 flex items-center justify-center overflow-hidden min-h-[360px] lg:min-h-full">
            {/* TV Screen Mockup Display */}
            <div className="relative w-full max-w-[560px] aspect-[16/10] rounded-[20px] overflow-hidden shadow-2xl border-4 border-[#1E1E1E] bg-black">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover grayscale-[15%] contrast-[1.05]"
              />
              {/* Sleek UI overlay on screen */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between text-white/80 text-[11px] font-medium tracking-wide">
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md">SOLVORA OS 4K</span>
                  <span>HDR10+ · 120Hz</span>
                </div>
                <div className="text-white">
                  <div className="text-[11px] uppercase tracking-wider text-orange-400 font-semibold mb-0.5">Now Playing</div>
                  <div className="text-[15px] font-bold">Atmospheres: Deep Orbit Nature Doc</div>
                </div>
              </div>
            </div>

            {/* Bottom-left overlay pill: Add to Cart */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20">
              <button
                onClick={() => {
                  setAddedToCart(true);
                  setTimeout(() => setAddedToCart(false), 2200);
                }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-semibold transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.12)] ${
                  addedToCart
                    ? "bg-[#111111] text-white"
                    : "bg-white/95 backdrop-blur-md text-[#141414] hover:bg-[#111111] hover:text-white border border-white"
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check size={16} className="text-green-400" />
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
          <div className="lg:col-span-5 p-8 sm:p-12 md:p-14 flex flex-col justify-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F6F4] border border-[#E8E8E8] text-[12px] font-semibold text-[#666666] w-fit mb-5">
              <Truck size={13} className="text-[#141414]" />
              <span>{current.badge}</span>
            </div>

            {/* Title */}
            <h3 className="text-[28px] sm:text-[34px] font-bold text-[#141414] tracking-tight leading-[1.15]">
              {current.title}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <span className="text-[13px] font-medium text-[#777777]">
                {current.reviews}
              </span>
            </div>

            {/* Offer Text */}
            <p className="text-[14.5px] leading-relaxed text-[#6B6B6B] mt-4">
              {current.description}
            </p>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 mt-6">
              <span className="text-[32px] sm:text-[36px] font-extrabold text-[#141414] tracking-tight font-mono">
                {current.price}
              </span>
              <span className="text-[18px] text-[#A0A0A0] line-through font-mono">
                {current.originalPrice}
              </span>
              <span className="text-[12px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                {current.discount}
              </span>
            </div>

            {/* 4 Countdown Boxes */}
            <div className="mt-8">
              <span className="text-[11.5px] font-bold uppercase tracking-[0.15em] text-[#888888] block mb-2.5">
                Limited Time Drop Ends In:
              </span>
              <div className="grid grid-cols-4 gap-2.5 max-w-[340px]">
                <div className="border border-[#E2E2E2] rounded-[16px] py-2.5 px-2 text-center bg-[#FAF9F7]">
                  <span className="block text-[20px] font-bold text-[#141414] font-mono leading-none">
                    {timeLeft.days}
                  </span>
                  <span className="block text-[9.5px] font-semibold text-[#888888] uppercase mt-1 tracking-wider">
                    Days
                  </span>
                </div>
                <div className="border border-[#E2E2E2] rounded-[16px] py-2.5 px-2 text-center bg-[#FAF9F7]">
                  <span className="block text-[20px] font-bold text-[#141414] font-mono leading-none">
                    {timeLeft.hours}
                  </span>
                  <span className="block text-[9.5px] font-semibold text-[#888888] uppercase mt-1 tracking-wider">
                    Hours
                  </span>
                </div>
                <div className="border border-[#E2E2E2] rounded-[16px] py-2.5 px-2 text-center bg-[#FAF9F7]">
                  <span className="block text-[20px] font-bold text-[#141414] font-mono leading-none">
                    {timeLeft.mins}
                  </span>
                  <span className="block text-[9.5px] font-semibold text-[#888888] uppercase mt-1 tracking-wider">
                    Mins
                  </span>
                </div>
                <div className="border border-[#E2E2E2] rounded-[16px] py-2.5 px-2 text-center bg-[#FAF9F7]">
                  <span className="block text-[20px] font-bold text-[#141414] font-mono leading-none">
                    {timeLeft.secs}
                  </span>
                  <span className="block text-[9.5px] font-semibold text-[#888888] uppercase mt-1 tracking-wider">
                    Secs
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="mt-8">
              <a
                href="#categories"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111111] text-white text-[14px] font-medium px-8 py-3.5 rounded-full hover:bg-black transition-all duration-200 btn-hover-shadow"
              >
                Claim Limited Offer
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Controls: Progress Dots (Left) + Arrows (Right) */}
      <div className="flex items-center justify-between mt-8 px-2">
        {/* Progress Dots */}
        <div className="flex items-center gap-2">
          {spotlightProducts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === idx
                  ? "w-8 bg-[#141414]"
                  : "w-2 bg-[#D4D4D4] hover:bg-[#A0A0A0]"
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
            className="w-11 h-11 rounded-full border border-[#E0E0E0] bg-white flex items-center justify-center text-[#666666] hover:border-[#141414] hover:text-[#141414] transition-all shadow-sm hover:scale-105"
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
            className="w-11 h-11 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-black transition-all shadow-sm hover:scale-105"
            aria-label="Next Spotlight Product"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
