"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import manImg from "@/assets/images/man.png";

export const instructors = [
  { id: 1, name: "Jackson Xavil", title: "Social Teacher" },
  { id: 2, name: "Alyna Sioon", title: "Math Teacher" },
  { id: 3, name: "Siminay Sun", title: "General Teacher" },
  { id: 4, name: "Michael Chen", title: "Web Developer" },
  { id: 5, name: "Sarah Ahmed", title: "Digital Marketing" },
  { id: 6, name: "David Lee", title: "Art & Design" },
];

const InstructorAvatar = ({ instructor, isCurrent, onClick }) => (
  <button
    onClick={onClick}
    className={`w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-2 transition-all duration-300 ease-in-out ${
      isCurrent
        ? "border-violet-600 ring-2 ring-violet-300"
        : "border-gray-200 hover:border-violet-400"
    }`}
    aria-label={`View ${instructor.name}`}
  >
    <Image
      src={manImg}
      alt={instructor.name}
      className="object-cover w-full h-full"
    />
  </button>
);

const InstructorSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [hasMounted, setHasMounted] = useState(false);

  const totalSlides = instructors.length;

  // Only run on client
  useEffect(() => {
    setHasMounted(true);

    const getVisibleCount = () => {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };

    setVisibleCount(getVisibleCount());

    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideRight = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const slideLeft = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto slide
  useEffect(() => {
    if (!isAuto || !hasMounted) return;
    const interval = setInterval(slideRight, 5000);
    return () => clearInterval(interval);
  }, [slideRight, isAuto, hasMounted]);

  const InstructorCard = ({ instructor }) => (
    <div className="relative w-full h-[232px] flex-shrink-0 group cursor-pointer overflow-hidden rounded-2xl">
      <Image
        src={manImg}
        alt={instructor.name}
        width={300}
        height={400}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-end">
        <h3 className="font-medium text-white">{instructor.name}</h3>
        <p className="text-sm mt-[2px] text-gray-300">{instructor.title}</p>
      </div>
      <div className="absolute bottom-5 right-5 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </div>
  );

  const StaticPanel = () => (
    <div className="group p-6 rounded-3xl bg-white shadow-sm relative transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 overflow-hidden w-[340px] xl:w-[370px] h-[232px] flex-col justify-between hidden lg:flex">
      <h2 className="text-xl sm:text-2xl lg:text-4xl pb-5 font-medium text-dark leading-snug relative z-10">
        Our Experienced <br />
        Instructors
      </h2>
      <div className="flex justify-between gap-2 items-center">
        <p className="text-gray-600 relative z-10">
          We have <span className="font-semibold text-dark">200+ expert</span>
        </p>
        <div className="flex -space-x-6 relative z-10">
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

  if (!hasMounted) return null; // Prevent SSR/CSR mismatch

  const visibleSlides = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleSlides.push(instructors[(currentSlide + i) % totalSlides]);
  }

  return (
    <section className="w-full py-16 lg:py-20">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <div className="w-full lg:w-[40%] lg:mb-0 flex items-end justify-between">
            <StaticPanel />
            <h2 className="text-2xl sm:text-3xl pb-5 font-medium text-dark leading-snug relative z-10 lg:hidden">
              Our Experienced <br />
              Instructors
            </h2>
            <div className="hidden lg:flex flex-col items-center">
              <button
                onClick={() => {
                  slideLeft();
                  setIsAuto(false);
                }}
                className="p-3 rounded-full border border-gray-300 transition-colors duration-200 text-gray-600 hover:bg-gray-200 cursor-pointer"
                aria-label="Previous instructor"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  slideRight();
                  setIsAuto(false);
                }}
                className="p-3 rounded-full border border-gray-300 transition-colors duration-200 text-gray-600 hover:bg-gray-200 cursor-pointer"
                aria-label="Next instructor"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[60%] relative">
            <div className="flex justify-between items-end w-full lg:hidden mb-6">
              <div className="flex flex-col gap-2">
                <p className="text-gray-600 relative z-10 mb-3">
                  We have{" "}
                  <span className="font-semibold text-dark">200+ expert</span>
                </p>
                <div className="flex -space-x-6 relative z-10">
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
              <div className="ml-auto lg:hidden justify-end mt-6">
                <button
                  onClick={() => {
                    slideLeft();
                    setIsAuto(false);
                  }}
                  className="p-2 rounded-full border border-gray-300 transition-colors duration-200 text-gray-600 hover:bg-gray-200"
                  aria-label="Previous instructor"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    slideRight();
                    setIsAuto(false);
                  }}
                  className="p-2 rounded-full border border-gray-300 transition-colors duration-200 text-gray-600 hover:bg-gray-200"
                  aria-label="Next instructor"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="w-full flex gap-6 overflow-hidden">
              {visibleSlides.map((instructor) => (
                <div key={instructor.id} className="flex-1 min-w-0">
                  <InstructorCard instructor={instructor} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSlider;
