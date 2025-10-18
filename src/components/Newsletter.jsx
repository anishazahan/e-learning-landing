import React from "react";
import { Bell } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="mb-8 p-1.5 rounded-xl custom-container">
      <div className="flex flex-col md:flex-row items-center p-4 rounded-xl relative overflow-hidden">
        {/* Gradient Background Effect for Input Bar */}
        <div
          className="absolute inset-0 opacity-70 rounded-xl"
          style={{
            background: "linear-gradient(to right,#FF8B94, #f472b6, #7051F6 )",
          }}
        ></div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col md:flex-row w-full items-center justify-between">
          {/* Left Text and Icon */}
          <div className="flex items-center space-x-3 text-white mb-4 md:mb-0 md:w-1/3">
            <Bell className="w-10 h-10 tex-lg fill-white px-2 py-1 rounded-xl bg-white/20" />
            <span className="text-lg font-semibold whitespace-nowrap">
              Sign Up Our Newsletter
            </span>
          </div>

          {/* Input Field and Button */}
          <div className="flex w-full md:w-[50%] space-x-2">
            <input
              type="email"
              placeholder="Enter you email"
              className="w-full p-3 rounded-l-lg bg-white/30 border-none placeholder-gray-200 text-white border border-white ring-[1px] ring-white/50 rounded-2xl focus:outline-0 transition-colors placeholder:font-medium"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-dark font-semibold rounded-2xl hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
