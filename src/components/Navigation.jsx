"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/common-data";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Header scroll behavior
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  // Close drawer when pressing ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav
      className={`fixed w-full z-[9000] top-0 left-0 right-0  transition-all duration-500 ${
        isScrolled ? "backdrop-blur-md bg-white/80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="hero-container 2xl:px-0">
        <div className="py-4 flex items-center justify-between">
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
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA (Desktop) */}
          <div className="hidden md:flex gap-2 items-center">
            <Link
              href={"/"}
              className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors group"
            >
              Login
            </Link>
            <button className="bg-black text-white font-medium px-6 py-3 lg:py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              Get Started — <span className="text-gray-400">It’s Free</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] bg-white z-[99999] transform transition-transform duration-500 ease-in-out ${
          isDrawerOpen ? "translate-x-0 z-[9999]" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 ">
          <Image
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 text-gray-600 hover:text-black transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsDrawerOpen(false)}
              className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors py-2"
            >
              {item.label}
            </Link>
          ))}

          <button className="mt-4 bg-black text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            Get Started — <span className="text-gray-400">It’s Free</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
