"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import manImg from "@/assets/images/man.png";

export const instructors = [
  {
    id: 1,
    name: "Jackson Xavil",
    title: "Social Teacher",
  },
  {
    id: 2,
    name: "Alyna Sioon",
    title: "Math Teacher",
  },
  {
    id: 3,
    name: "Siminay Sun",
    title: "General Teacher",
  },
  {
    id: 4,
    name: "Michael Chen",
    title: "Web Developer",
  },
  {
    id: 5,
    name: "Sarah Ahmed",
    title: "Digital Marketing",
  },
  {
    id: 6,
    name: "David Lee",
    title: "Art & Design",
  },
];

const InstructorSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Responsive listener
  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = instructors.length;

  // Move right (loop continuously)
  const slideRight = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const slideLeft = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto slide every 5s
  useEffect(() => {
    if (!isAuto) return;
    const interval = setInterval(slideRight, 5000);
    return () => clearInterval(interval);
  }, [slideRight, isAuto]);

  // Instructor Card Component
  const InstructorCard = ({ instructor }) => (
    <div className="relative w-full h-[232px] flex-shrink-0 group cursor-pointer overflow-hidden rounded-3xl">
      <Image
        src={manImg}
        alt={instructor.name}
        width={300}
        height={400}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-end">
        <h3 className="text-xl font-semibold text-white">{instructor.name}</h3>
        <p className="text-sm text-gray-300">{instructor.title}</p>
      </div>
      <div className="absolute bottom-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </div>
  );

  // Static Info Panel
  const StaticPanel = () => (
    <div className="group p-6 rounded-3xl bg-white shadow-sm  relative transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/30 overflow-hidden">
      <h2 className="text-3xl pb-5 font-medium text-dark leading-snug relative z-10">
        Our Experienced <br />
        Instructors
      </h2>

      <div className="flex justify-between gap-6">
        <p className=" text-sm text-gray-600 relative z-10">
          We have <span className="font-semibold text-dark">200+ expert</span>
        </p>

        <div className="flex -space-x-6 relative z-10 pt-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border"
            >
              <Image
                src={manImg}
                alt="expert"
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-1/3 rounded-full bg-violet-500 blur-2xl opacity-50 pointer-events-none transition-opacity duration-300 group-hover:opacity-70"></div>
    </div>
  );

  // Get sliced visible items (for continuous loop)
  const visibleSlides = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleSlides.push(instructors[(currentSlide + i) % totalSlides]);
  }

  return (
    <section className="w-full">
      <div className="pt-20 pb-10 custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Static Panel */}
          <div className="lg:col-span-1 h-[232px]">
            <StaticPanel />
          </div>

          {/* Slider */}
          <div className="lg:col-span-3 relative flex flex-col items-center">
            {/* Slider Cards */}
            <div className="w-full flex gap-4 overflow-hidden justify-center">
              {visibleSlides.map((instructor) => (
                <div key={instructor.id} className="flex-1 min-w-0">
                  <InstructorCard instructor={instructor} />
                </div>
              ))}
            </div>

            {/* Controls + Indicators */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  slideLeft();
                  setIsAuto(false);
                }}
                className="p-3 rounded-full border border-gray-300 transition-colors duration-200 text-gray-600 hover:bg-gray-200"
                aria-label="Previous instructor"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {instructors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsAuto(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-violet-600 w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  slideRight();
                  setIsAuto(false);
                }}
                className="p-3 rounded-full border border-gray-300 transition-colors duration-200 text-gray-600 hover:bg-gray-200"
                aria-label="Next instructor"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSlider;
