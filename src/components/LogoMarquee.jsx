"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import logo1 from "@/assets/images/logo-1.png";
import logo2 from "@/assets/images/logo-2.png";
import logo3 from "@/assets/images/logo-3.png";
import logo4 from "@/assets/images/logo-4.png";
import logo5 from "@/assets/images/logo-5.png";
import logo6 from "@/assets/images/logo-6.png";

export const clientLogos = [
  { id: 1, name: "DPEX", src: logo1 },
  { id: 2, name: "GLS", src: logo2 },
  { id: 3, name: "Unity", src: logo3 },
  { id: 4, name: "Tech Global", src: logo4 },
  { id: 5, name: "Academy", src: logo5 },
  { id: 6, name: "Academy", src: logo6 },
];

const LogoMarquee = () => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let offset = 0;
    let animationFrame;

    const speed = 0.5; //  scroll speed

    const animate = () => {
      if (!isPaused) {
        offset += speed;
        if (offset >= container.scrollWidth / 2) {
          offset = 0; // Reset when halfway scrolled (because we duplicate logos)
        }
        container.style.transform = `translateX(-${offset}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div
      className="relative w-full overflow-hidden lg:py-6  select-none hero-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className="flex items-center space-x-16 will-change-transform"
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.name}
              width={100}
              height={40}
              className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
