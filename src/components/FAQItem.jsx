"use client";

import React, { useRef, useEffect } from "react";
import { Minus, Plus } from "lucide-react";

const FAQItem = ({ item, isOpen, onClick }) => {
  const contentRef = useRef(null);

  // Use a custom style to control the height for the transition effect
  const contentHeight = isOpen ? contentRef.current?.scrollHeight : 0;

  return (
    <div className="bg-gray-100/70 rounded-2xl">
      {/* Question Header (Button) */}
      <button
        className={`w-full text-left flex justify-between items-center py-5 px-6 rounded-xl transition-colors duration-300 cursor-pointer ${
          isOpen ? "bg-gray-100/70" : "hover:bg-gray-50"
        }`}
        onClick={() => onClick(item.id)}
        aria-expanded={isOpen}
      >
        <h3
          className={`text-lg sm:text-xl md:text-2xl  font-medium transition-colors duration-300 ${
            isOpen ? "text-dark" : "text-gray-700"
          }`}
        >
          {item.question}
        </h3>

        {/* Icon Toggle */}
        <div
          className={`p-1 transition-transform duration-300 ${
            isOpen ? "text-violet-600" : "text-gray-500"
          }`}
        >
          {isOpen ? (
            <Minus className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </div>
      </button>

      <div
        style={{ maxHeight: `${contentHeight}px` }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div ref={contentRef} className="pb-6 pt-2 px-6">
          <p className="text-gray-600 text-base leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
