"use client";

import React, { useState } from "react";
import CourseCard from "./CourseCard";
import { categoriesDataShort } from "@/lib/common-data";
import HeadingCard from "./HeadingCard";

const PopularCategoryCourses = () => {
  const [activeCategorySlug, setActiveCategorySlug] = useState(
    categoriesDataShort[0].slug
  );

  const activeCategory = categoriesDataShort.find(
    (cat) => cat.slug === activeCategorySlug
  );

  return (
    <section className="pt-16 custom-container">
      <div className="">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16">
          <div>
            <div className="mb-2 inline-flex">
              <HeadingCard title={"🎉 + 🎗 New & Trending"} />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-medium mt-5 text-dark">
              Explore Popular Courses
            </h2>
          </div>

          {/* Category Switch Buttons */}
          <div className="flex mt-6 md:mt-0 space-x-3 bg-gray-50 p-1 rounded-full border border-gray-100">
            {categoriesDataShort.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategorySlug(category.slug)}
                className={`px-5 py-2 text-[10px]  sm:text-sm rounded-full font-medium transition-colors duration-200 ${
                  activeCategorySlug === category.slug
                    ? "bg-black text-white shadow pointer-events-none"
                    : "text-gray-600 hover:text-dark cursor-pointer"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards */}
        <div className="">
          {activeCategory && activeCategory.courses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeCategory.courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg py-10">
              No courses found for <strong>{activeCategory?.name}</strong>.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularCategoryCourses;
