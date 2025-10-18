"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

import img1 from "@/assets/images/slider-1.jpg";
import img2 from "@/assets/images/slider-2.jpg";
import img3 from "@/assets/images/slider-3.jpg";
import img4 from "@/assets/images/slider-4.jpg";

const slideImages = [
  { id: 1, src: img1, alt: "Business people meeting" },
  { id: 2, src: img2, alt: "Team collaboration" },
  { id: 3, src: img3, alt: "Startup discussion" },
  { id: 4, src: img4, alt: "Creative brainstorming" },
];

const AUTO_SLIDE_DURATION = 5000;

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, AUTO_SLIDE_DURATION);
  }, [nextSlide]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isPaused) stopAutoPlay();
    else startAutoPlay();

    return () => stopAutoPlay();
  }, [isPaused, startAutoPlay, stopAutoPlay]);

  const togglePausePlay = () => setIsPaused((prev) => !prev);

  return (
    <div className="hero-container">
      <div className=" relative w-full h-[564px] overflow-hidden rounded-2xl flex justify-center items-center ">
        {/* Slides Container */}
        <div
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            width: `${slideImages.length * 100}%`,
          }}
        >
          {slideImages.map((image, index) => (
            <div
              key={image.id}
              className="relative w-full h-[564px] flex-shrink-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* Pause / Play Button */}
        <button
          onClick={togglePausePlay}
          className="absolute top-4 right-4 flex items-center gap-1 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-dark  border border-gray-300 text-sm font-medium hover:bg-white/40 transition-colors"
        >
          {isPaused ? (
            <>
              <Play className="w-4 h-4" />
              <span>Play</span>
            </>
          ) : (
            <>
              <span>Pause</span>
              <Pause className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsPaused(true);
                stopAutoPlay();
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
