"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="px-4 md:px-8 pb-8 max-w-[1244px] mx-auto">
      {/* Rounded Light Panel */}
      <div className="relative w-full rounded-[32px] md:rounded-[40px] bg-white border border-[#E8E8E8] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.02)] pt-0 px-6 sm:px-12 pb-10">
        {/* Thin Multicolor Gradient Line Across Top Edge */}
        <div className="w-full h-1 bg-gradient-to-r from-[#F7D8C8] via-[#F6C79A] via-[#DDD7F6] to-[#DCEBFF]" />

        {/* Top Row: Logo, Nav, All Rights Reserved */}
        <div className="pt-10 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          {/* Logo Left */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Solvora Footer Logo"
          >
            <div className="w-7 h-7 rounded-full bg-[#111111] flex items-center justify-center text-white">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3L11 11M11 3L3 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="font-bold text-[18px] tracking-tight text-[#141414]">
              Solvora
            </span>
          </a>

          {/* Navigation Center */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[14px] font-medium text-[#6B6B6B]">
            <a href="#" className="hover:text-[#141414] transition-colors">
              Home
            </a>
            <a href="#why-shop" className="hover:text-[#141414] transition-colors">
              About Us
            </a>
            <a href="#categories" className="hover:text-[#141414] transition-colors">
              Shop
            </a>
            <a href="#favorites" className="hover:text-[#141414] transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-[#141414] transition-colors">
              Warranty
            </a>
          </nav>

          {/* All Rights Reserved Right */}
          <div className="text-[13px] font-medium text-[#888888]">
            All rights reserved
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#F0F0F0] relative z-10" />

        {/* Bottom Row: Copyright + Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-[#777777] relative z-10">
          <div>© 2026 Solvora Inc. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#141414] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#141414] transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-[#141414] transition-colors">
              Security
            </a>
          </div>
        </div>

        {/* Gigantic Faded Solvora Watermark Spanning the Width, Bleeding Off the Bottom Edge */}
        <div
          aria-hidden="true"
          className="absolute -bottom-10 sm:-bottom-16 md:-bottom-20 left-1/2 -translate-x-1/2 text-[90px] sm:text-[160px] md:text-[220px] font-black text-[#141414]/[0.035] tracking-tighter select-none pointer-events-none whitespace-nowrap leading-none z-0"
        >
          Solvora
        </div>
      </div>
    </footer>
  );
};
