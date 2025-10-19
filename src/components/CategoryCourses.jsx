"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { categoriesData } from "@/lib/common-data";
import CourseCard from "./CourseCard";

const CategoryCourses = () => {
  const [activeCategorySlug, setActiveCategorySlug] = useState(
    categoriesData[0].slug
  );

  // Get the currently selected category data
  const activeCategory = categoriesData.find(
    (cat) => cat.slug === activeCategorySlug
  );

  // --- Accordion Logic for Mobile ---
  const handleMobileToggle = (slug) => {
    setActiveCategorySlug((prevSlug) => (prevSlug === slug ? null : slug));
  };

  // --- Desktop Menu Logic ---
  const handleDesktopSelect = (slug) => {
    setActiveCategorySlug(slug);
  };

  // --- Rendering Functions ---

  // Renders the list of categories for the DESKTOP view
  const renderDesktopMenu = () => (
    <div className="hidden lg:block lg:col-span-1 pr-8">
      <ul className="space-y-3">
        {categoriesData.map((category) => (
          <li key={category.slug}>
            <button
              onClick={() => handleDesktopSelect(category.slug)}
              className={`w-full text-left flex items-center py-2 px-3 rounded-lg transition-colors duration-200 
                ${
                  activeCategorySlug === category.slug
                    ? "text-dark font-semibold text-xl pointer-events-none"
                    : "text-gray-500 hover:text-gray-700 cursor-pointer"
                }`}
            >
              {/* Active Dot Style */}
              <span
                className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                  activeCategorySlug === category.slug
                    ? "bg-violet-900"
                    : "bg-transparent"
                }`}
              ></span>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  // Renders the accordion for the MOBILE view
  const renderMobileAccordion = () => (
    <div className="lg:hidden w-full space-y-2">
      {categoriesData.map((category) => {
        const isOpen = activeCategorySlug === category.slug;

        return (
          <div
            key={category.slug}
            className="rounded-xl shadow-sm border border-gray-100/50 overflow-hidden"
          >
            {/* Accordion Header */}
            <button
              onClick={() => handleMobileToggle(category.slug)}
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
            >
              <span
                className={`text-base font-semibold ${
                  isOpen ? "text-purple-600" : "text-gray-700"
                }`}
              >
                {category.name}
              </span>
              {isOpen ? (
                <Minus className="w-5 h-5 text-purple-600" />
              ) : (
                <Plus className="w-5 h-5 text-purple-400" />
              )}
            </button>

            {/* Accordion Content (Courses) */}
            {isOpen && (
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                {/* Horizontal Scrolling Course Cards */}
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {category.courses.length > 0 ? (
                    category.courses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">
                      No courses available in this category.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="py-20 bg-white custom-container">
      <div className="">
        {/* Header */}
        <div className="mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-end">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-medium text-dark md:max-w-[346px]">
            Popular Category Courses
          </h2>
          <p className="mt-3 lg:mt-0 text-base text-gray-500 max-w-lg lg:text-right">
            Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Quam
            elementum pulvinar et nam non quam lacus suspendisse. Ut placerat
            orci nulla pellentesque dignissim.
          </p>
        </div>

        {/* --- MAIN LAYOUT GRID (Desktop) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* 1. Category Menu (Desktop) / Accordion (Mobile) */}
          {renderDesktopMenu()}
          {renderMobileAccordion()}

          {/* 2. Course Cards (Desktop View only) */}
          <div className="hidden lg:block lg:col-span-3">
            {activeCategory && activeCategory.courses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCategory.courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <p className="text-lg text-gray-500 p-8 border rounded-xl bg-gray-50">
                No courses found for {activeCategory?.name}.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCourses;
