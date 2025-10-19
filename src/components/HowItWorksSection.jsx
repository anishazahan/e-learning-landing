"use client";

import React from "react";
import centralImage from "@/assets/images/central-works.png";
import Image from "next/image";
import HeadingCard from "./HeadingCard";

export const steps = [
  {
    id: 1,
    title: "Kickstart Your Creativity",
    description: "Suspendisse ultrices gravida dictum fusce ut placerat orci.",
  },
  {
    id: 2,
    title: "Go For Your Goals",
    description:
      "Pulvinar pellentesque habitant morbi tristique senectus et netus.",
  },
  {
    id: 3,
    title: "Mini-Course",
    description:
      "Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum.",
  },
  {
    id: 4,
    title: "Create own course",
    description:
      "Auctor neque vitae tempus quam. Vulputate eu scelerisque imperdiet.",
  },
];

const HowItWorksSection = () => {
  const renderStepCard = (step) => (
    <div
      key={step.id}
      className="group p-6 rounded-3xl bg-white shadow-sm min-h-[180px] relative transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/30 overflow-hidden"
    >
      {/* The number */}
      <span className="text-3xl font-bold text-violet-600 opacity-60 mb-10 block">
        {step.id}
      </span>

      {/* The card content */}
      <h3 className="text-xl font-semibold text-black mt-2 mb-2">
        {step.title}
      </h3>
      <p className="text-sm text-gray-500">{step.description}</p>

      {/* Absolute element for the subtle top-right glow, matching the image */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 rounded-full bg-violet-500 blur-2xl opacity-50 pointer-events-none transition-opacity duration-300 group-hover:opacity-70"></div>
    </div>
  );

  // Divide the steps into left and right columns
  const leftSteps = steps.filter((step) => step.id === 1 || step.id === 2);
  const rightSteps = steps.filter((step) => step.id === 3 || step.id === 4);

  return (
    <section className="py-20 custom-container">
      <div className="">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <HeadingCard title={"✨ Our Process"} />
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium text-black mt-10">
            How Does It Work?
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            Get started in just a few easy steps and unlock access to
            world-class courses.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          {/* LEFT COLUMN (Steps 1 & 2) */}
          <div className="space-y-8">{leftSteps.map(renderStepCard)}</div>

          <div className="w-full h-full p-4 rounded-3xl bg-gray-100">
            <Image
              src={centralImage}
              alt="Platform Demo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT COLUMN (Steps 3 & 4) */}
          <div className="space-y-8">{rightSteps.map(renderStepCard)}</div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
