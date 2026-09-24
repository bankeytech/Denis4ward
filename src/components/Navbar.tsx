"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X as CloseIcon } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#why-shop" },
    { name: "Shop", href: "#categories" },
    { name: "Contact", href: "#favorites" },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
      <nav
        className={`w-full max-w-[1140px] h-[58px] rounded-full px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.6)] border border-[#2A2A2A]"
            : "bg-[#111111]/80 backdrop-blur-sm border border-[#2A2A2A] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
        }`}
      >
        {/* Left: Brand Logo & Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="DENIS4WARD TECHNOLOGY Home"
        >
          {/* Gold diamond logo mark */}
          <div className="w-8 h-8 rounded-lg bg-[#F7C948] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
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

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-[#9A9A9A]">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`transition-colors duration-200 relative py-1 hover:text-[#F8F8F8] ${
                  isActive ? "text-[#F7C948] font-semibold" : ""
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#F7C948] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right: CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="#categories"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#F7C948] text-[#050505] text-[13px] font-bold px-4 py-2 rounded-full hover:bg-[#D89B1D] transition-all duration-200 hover:shadow-[0_6px_24px_rgba(247,201,72,0.35)] hover:-translate-y-0.5 group"
          >
            <span>Shop Now</span>
            <ArrowUpRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full hover:bg-white/10 text-[#F8F8F8]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <CloseIcon size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-4 right-4 bg-[#111111]/98 backdrop-blur-xl rounded-3xl p-6 border border-[#2A2A2A] shadow-[0_20px_60px_rgba(0,0,0,0.7)] flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name);
                setMobileMenuOpen(false);
              }}
              className="text-[16px] font-medium text-[#F8F8F8] py-2 border-b border-[#2A2A2A] last:border-0 hover:text-[#F7C948] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-[#F7C948] text-[#050505] text-[14px] font-bold py-3 rounded-full mt-2 hover:bg-[#D89B1D] transition-colors"
          >
            <span>Shop Now</span>
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      )}
    </header>
  );
};
