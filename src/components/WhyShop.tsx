"use client";

import React from "react";
import { motion } from "framer-motion";
import { Package, ShieldCheck, RotateCcw, Headset } from "lucide-react";

export const WhyShop: React.FC = () => {
  const features = [
    {
      number: "01",
      icon: <Package size={22} className="text-[#141414]" />,
      title: "Enjoy Free Shipping",
      description:
        "Fast, reliable door-to-door courier service with zero hidden charges on every qualified purchase.",
    },
    {
      number: "02",
      icon: <ShieldCheck size={22} className="text-[#141414]" />,
      title: "Safe Payment Process",
      description:
        "Bank-grade 256-bit encryption ensuring your payments, cards, and personal data stay completely secure.",
    },
    {
      number: "03",
      icon: <RotateCcw size={22} className="text-[#141414]" />,
      title: "Smooth Return Process",
      description:
        "A hassle-free 30-day trial with instant label generation and complimentary doorstep return pickup.",
    },
    {
      number: "04",
      icon: <Headset size={22} className="text-[#141414]" />,
      title: "Always-On Support",
      description:
        "Our concierge tech specialists are on standby around the clock to answer questions and troubleshoot.",
    },
  ];

  return (
    <section id="why-shop" className="py-24 md:py-32 px-4 md:px-8 max-w-[1244px] mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-[700px] mx-auto mb-16 md:mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12.5px] font-bold tracking-[0.15em] text-[#888888] uppercase block mb-3"
        >
          The Solvora Standard
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[32px] sm:text-[40px] md:text-[44px] font-bold text-[#141414] tracking-[-0.03em] leading-[1.15]"
        >
          Why Shop With Solvora
          <br className="hidden sm:inline" /> Today And Always?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[15px] sm:text-[16px] text-[#6B6B6B] mt-4 leading-relaxed"
        >
          Engineered hardware backed by an uncompromising commitment to
          exceptional customer care and seamless ownership.
        </motion.p>
      </div>

      {/* 4 Equal Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group bg-white rounded-[24px] border border-[#E8E8E8] p-7 md:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] transition-all duration-300 min-h-[260px]"
          >
            {/* Top row: Number & Icon */}
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-[14px] font-semibold text-[#A0A0A0] tracking-wider">
                {feature.number}
              </span>
              <div className="w-12 h-12 rounded-[16px] border border-[#EAEAEA] bg-[#F7F6F4] flex items-center justify-center text-[#141414] group-hover:bg-[#111111] group-hover:border-[#111111] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
            </div>

            {/* Bottom Content */}
            <div>
              <h3 className="text-[20px] font-bold text-[#141414] tracking-tight mb-2.5">
                {feature.title}
              </h3>
              <p className="text-[14px] text-[#6B6B6B] leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
