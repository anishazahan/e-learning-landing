"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/common-data";
import logo from "@/assets/images/logo.png";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-md bg-white/80 border-b  shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="hero-container 2xl:px-0">
        <div className=" py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="w-10 h-10 rounded-full">
            <Image
              className="rounded-full"
              src={logo}
              width={40}
              height={40}
              priority
              alt="logo"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA (Desktop only) */}
          <div className="hidden md:flex">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-3 lg:py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              Get Started — It’s Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 py-4 bg-white/95 backdrop-blur-md shadow-md animate-slide-down">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-black hover:text-blue-600 transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
          <button className="bg-gradient-to-r py-3 lg:py-2  from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            Get Started — It’s Free
          </button>
        </div>
      </div>
    </nav>
  );
}
