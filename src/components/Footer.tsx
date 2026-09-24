"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="px-4 md:px-8 pb-8 max-w-[1244px] mx-auto">
      {/* Rounded Dark Panel */}
      <div className="relative w-full rounded-[32px] md:rounded-[40px] bg-[#0A0A0A] border border-[#2A2A2A] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] pt-0 px-6 sm:px-12 pb-10">
        {/* Thin Gold Gradient Line Across Top Edge */}
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#F7C948] to-transparent" />

        {/* Top Row: Logo, Nav, All Rights Reserved */}
        <div className="pt-10 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          {/* Logo Left */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="DENIS4WARD TECHNOLOGY Footer Logo"
          >
            <div className="w-8 h-8 rounded-lg bg-[#F7C948] flex items-center justify-center flex-shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1L15 8L8 15L1 8L8 1Z"
                  fill="#050505"
                  stroke="#050505"
                  strokeWidth="0.5"
                />
                <path
                  d="M8 4L12 8L8 12L4 8L8 4Z"
                  fill="#F7C948"
                  stroke="#050505"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-[15px] tracking-[0.06em] text-[#F8F8F8] font-[family-name:var(--font-outfit)]">
                DENIS4WARD
              </span>
              <span className="text-[8px] font-semibold tracking-[0.2em] text-[#F7C948] uppercase leading-tight">
                TECHNOLOGY
              </span>
            </div>
          </a>

          {/* Navigation Center */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[13.5px] font-medium text-[#7A7A7A]">
            <a href="#" className="hover:text-[#F7C948] transition-colors duration-200">
              Home
            </a>
            <a href="#why-shop" className="hover:text-[#F7C948] transition-colors duration-200">
              About Us
            </a>
            <a href="#categories" className="hover:text-[#F7C948] transition-colors duration-200">
              Shop
            </a>
            <a href="#favorites" className="hover:text-[#F7C948] transition-colors duration-200">
              Contact
            </a>
            <a href="#" className="hover:text-[#F7C948] transition-colors duration-200">
              Warranty
            </a>
          </nav>

          {/* All Rights Reserved Right */}
          <div className="text-[12.5px] font-medium text-[#4A4A4A]">
            All rights reserved
          </div>
        </div>

        {/* Gold Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent relative z-10" />

        {/* Bottom Row: Copyright + Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#4A4A4A] relative z-10">
          <div>© 2026 DENIS4WARD TECHNOLOGY. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#F7C948] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#F7C948] transition-colors duration-200">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-[#F7C948] transition-colors duration-200">
              Security
            </a>
          </div>
        </div>

        {/* Gigantic Faded DENIS4WARD Watermark */}
        <div
          aria-hidden="true"
          className="absolute -bottom-8 sm:-bottom-14 md:-bottom-18 left-1/2 -translate-x-1/2 text-[60px] sm:text-[110px] md:text-[160px] font-black text-[#F7C948]/[0.03] tracking-tighter select-none pointer-events-none whitespace-nowrap leading-none z-0 font-[family-name:var(--font-outfit)]"
        >
          DENIS4WARD
        </div>
      </div>
    </footer>
  );
};
