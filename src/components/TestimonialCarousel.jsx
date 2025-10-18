"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import manImg from "@/assets/images/man.png";
import HeadingCard from "./HeadingCard";
import Image from "next/image";

const AUTO_PLAY_DELAY = 6000;

const testimonials = [
  {
    id: 1,
    quote:
      "The courses are easy to follow and packed with practical knowledge. Within 3 months, I landed a new job using the skills I learned here.",
    name: "Sarah Ahmed",
    title: "Digital Marketing",
    avatar: manImg,
  },
  {
    id: 2,
    quote:
      "An excellent platform for career growth. The instructors are industry experts, and the content is always up-to-date. Highly recommend!",
    name: "Michael Chen",
    title: "Full-Stack Developer",
    avatar: manImg,
  },
  {
    id: 3,
    quote:
      "I was skeptical at first, but the community and hands-on projects made all the difference. My promotion is a direct result of these courses.",
    name: "Jessica Lee",
    title: "Product Manager",
    avatar: manImg,
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Effect for auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, AUTO_PLAY_DELAY);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="flex justify-center">
          <HeadingCard title={"🙋🏻 What Our Learners Say 🙌🏻"} />
        </div>

        <h1 className="text-4xl md:text-5xl font-medium text-black  md:mb-14 text-center leading-12 sm:mt-10 mt-5">
          Our Testimonials
        </h1>

        {/* Testimonial Quote */}
        <div className="min-h-[150px] flex items-center justify-center my-8">
          <p className=" text-xl sm:text-2xl md:text-3xl font-light text-dark text-center leading-relaxed max-w-3xl">
            &ldquo;{activeTestimonial.quote}&rdquo;
          </p>
        </div>

        {/* Separator and Progress Bar Area */}
        <div className="mt-5 sm:mt-16 lg:mt-24 mb-6 flex justify-center ">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-[2px] cursor-pointer transition-all duration-1000 ${
                index === activeIndex
                  ? "bg-violet-600" // Active color
                  : "bg-gray-200" // Inactive color
              }`}
              style={{ width: `${100 / testimonials.length}%` }} // Distribute width evenly
              onClick={() => setActiveIndex(index)}
            >
              {/* This inner div simulates the progress filling for the active item */}
              {index === activeIndex && (
                <div
                  className="h-full bg-violet-600 animate-fill-progress"
                  style={{ animationDuration: `${AUTO_PLAY_DELAY}ms` }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Testimonial Author and Controls */}
        <div className="flex justify-between items-center pt-4">
          {/* Author Info */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Avatar (Placeholder) */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
              {/* In a real app, you'd use a Next.js Image component */}
              <Image
                src={activeTestimonial.avatar}
                alt={activeTestimonial.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="font-semibold text-black">
                {activeTestimonial.name}
              </p>
              <p className="text-sm text-gray-500">{activeTestimonial.title}</p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex space-x-2 sm:space-x-3">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition duration-150"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition duration-150"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
