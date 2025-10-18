"use client";

import React, { useState } from "react";
import Image from "next/image";
import FAQItem from "./FAQItem";
import img from "@/assets/images/learning-faq.jpg";
import coverImg from "@/assets/images/faq-cover-img.png";

export const faqItems = [
  {
    id: 1,
    question: "How Much Does It Cost?",
    answer:
      "Feugiat pretium nibh ipsum vel pretium lectus quam. Aliquot porttitor leo a diam sollicitudin. Ut id aliquam. Orci eu lobortis elementum nibh tellus molestie. Blandit Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Mattis pellentesque id nibh tortor id.",
  },
  {
    id: 2,
    question: "What Are Our Special Features?",
    answer:
      "We offer personalized learning paths, 24/7 expert support, hands-on projects, and a community forum to connect with peers and instructors.",
  },
  {
    id: 3,
    question: "How many classes can I enroll?",
    answer:
      "There is no limit to the number of courses you can enroll in. However, we recommend focusing on one to three courses at a time for optimal learning.",
  },
  {
    id: 4,
    question: "What is the eligibility to do online course?",
    answer:
      "Our courses are designed for all levels, from beginners with no prior experience to seasoned professionals looking to upskill. Eligibility details are provided on each course page.",
  },
  {
    id: 5,
    question: "How Do You Interact With Your Students?",
    answer:
      "Interaction happens through live Q&A sessions, dedicated chat channels, weekly office hours, and personalized feedback on project submissions.",
  },
  {
    id: 6,
    question: "What Education Solution Do You Provide?",
    answer:
      "We provide comprehensive solutions including professional certification programs, corporate upskilling packages, and short-form mini-courses.",
  },
];

const FAQSection = () => {
  const [openItemId, setOpenItemId] = useState(faqItems[0].id);

  const handleItemClick = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className=" lg:pt-20 bg-white">
      <div className="custom-container">
        <div className="grid  grid-cols-1 lg:grid-cols-2  items-center">
          {/* Left Side: Title and Image/Graphic (CORRECTED) */}
          <div className=" mb-8 lg:mb-0">
            <h1 className="text-xl sm:text-4xl font-medium text-dark leading-tight text-center lg:text-left mb-10">
              Uncover your potential with our assistance.
            </h1>

            {/* The Image/Graphic container with proper layering */}
            <div className="relative w-full aspect-[4/5] max-w-lg mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl">
              {/* 1. Background Image (The blurred room/people) */}
              <Image
                priority
                src={img}
                alt="Background Context"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />

              {/* 2. Foreground Graphic (The white UI card) */}
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 z-10">
                <div className="relative w-full h-full">
                  {/* Image for the UI graphic (faq-cover-img.png) */}
                  <Image
                    priority
                    src={coverImg}
                    alt="Main UI Graphic"
                    layout="fill"
                    objectFit="contain" // Use 'contain' to fit the whole graphic inside the space
                    className="drop-shadow-2xl" // Adds shadow to the floating graphic
                  />
                </div>
              </div>

              {/* 3. OPTIONAL: Blurred shadow/glow effect behind the graphic */}
              <div className="absolute inset-0 m-auto w-3/4 h-full bg-indigo-500/10 rounded-[3rem] blur-3xl -z-20" />
            </div>
          </div>

          {/* Right Side: FAQ Accordion */}
          <div className="bg-white rounded-xl">
            <div className="space-y-4">
              {faqItems.map((item) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={item.id === openItemId}
                  onClick={handleItemClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
