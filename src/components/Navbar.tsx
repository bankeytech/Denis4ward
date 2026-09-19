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
            ? "bg-white/95 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-[#E8E8E8]"
            : "bg-white/90 backdrop-blur-sm border border-[#E8E8E8] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        }`}
      >
        {/* Left: Brand Logo & Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Solvora Home"
        >
          <div className="w-7 h-7 rounded-full bg-[#111111] flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-45">
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
          <span className="font-bold text-[17px] tracking-tight text-[#141414]">
            Solvora
          </span>
        </a>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#6B6B6B]">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`transition-colors duration-200 relative py-1 hover:text-[#141414] ${
                  isActive ? "text-[#141414] font-semibold" : ""
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#141414] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right: CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="#categories"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#111111] text-white text-[13.5px] font-medium px-4 py-2 rounded-full hover:bg-black transition-all duration-200 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 group"
          >
            <span>Shop Now</span>
            <ArrowUpRight
              size={15}
              strokeWidth={2.2}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full hover:bg-black/5 text-[#141414]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <CloseIcon size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl p-6 border border-[#E8E8E8] shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name);
                setMobileMenuOpen(false);
              }}
              className="text-[16px] font-medium text-[#141414] py-2 border-b border-gray-100 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-[#111111] text-white text-[14px] font-medium py-3 rounded-full mt-2"
          >
            <span>Shop Now</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
};
