import React from "react";
import Image from "next/image";
import { Star, Users, Briefcase } from "lucide-react";
import manImg from "@/assets/images/man.png";

const CourseCard = ({ course }) => (
  <div className="flex-shrink-0 p-2 md:w-full rounded-2xl bg-white border-gray-300 overflow-hidden border  group ">
    {/* Image Container */}
    <div className="relative w-full h-56 overflow-hidden group-hover:rounded-t-2xl">
      <Image
        src={course.image}
        alt={course.title}
        layout="fill"
        objectFit="cover"
        className="rounded-t-2xl group-hover:rounded-t-2xl group-hover:scale-105 transition-all duration-500 cursor-pointer"
      />
    </div>

    {/* Content */}
    <div className="py-4 px-2 space-y-3">
      {/* Meta Data (Students, Curriculum, Tag) */}
      <div className="flex items-center justify-between space-x-3 text-xs text-gray-500">
        <div className="flex -space-x-4 relative">
          <div className="flex -space-x-5 z-10 ">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border"
              >
                <Image
                  src={manImg}
                  alt="expert"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          <div className=" bg-gray-200 rounded-full z-20 w-6 h-6 flex justify-center items-center">
            <span className="text-xs">{course.students}</span>
          </div>
        </div>

        <div className="flex justify-center gap-2">
          <div className="flex items-center space-x-1">
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 ">
              {course.curriculum} Curriculum
            </span>
          </div>
          <span className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded-full">
            {course.tag}
          </span>
        </div>
      </div>

      {/* Title and Description */}
      <h3 className="text-lg font-semibold text-dark">{course.title}</h3>
      <p className="text-sm text-gray-600">
        Tempor aliquet eget sit amet tellus cras adipiscing enim. Feugiat in
        ante metus dictum at tempor
      </p>

      {/* Price and Rating */}
      <div className="flex justify-between items-center pt-2 border-t border-gray-100">
        <div className="text-xl font-bold text-dark">
          ${course.price}{" "}
          <span className="text-sm font-normal text-gray-400 line-through">
            ${course.oldPrice}
          </span>
        </div>
        <div className="flex items-center text-sm font-medium text-gray-700">
          <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
          {course.rating} star
        </div>
      </div>
    </div>
  </div>
);

export default CourseCard;
