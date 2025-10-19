"use client";

import Image from "next/image";
import { Search } from "lucide-react";

import heroLeft1 from "@/assets/images/hero-images/hero-left-1.png";
import heroLeft2 from "@/assets/images/hero-images/hero-left-2-top.png";
import heroLeft3 from "@/assets/images/hero-images/hero-left-3-bottom.png";
import heroLeftEnd from "@/assets/images/hero-images/hero-left-end.png";
import middleHero from "@/assets/images/hero-images/middle-hero-img.png";
import rightBottom from "@/assets/images/hero-images/right-bottom.png";
import rightEnd from "@/assets/images/hero-images/right-end.png";
import rightTop1 from "@/assets/images/hero-images/right-top-1.png";
import rightTop2 from "@/assets/images/hero-images/right-top-2.png";
import HeadingCard from "./HeadingCard";

export default function HeroSection() {
  return (
    <div className="mx-2">
      <section className="hero-container rounded-4xl mt-[80px]  bg-[linear-gradient(180deg,_#f3f0ff_10%,_#7051F6CC_80%)] overflow-hidden mb-20">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center  pt-14 lg:pt-28 pb-12 ">
          <HeadingCard title={"✨ No.1 in USA"} />
          <h1 className="text-2xl my-5 md:text-4xl lg:text-[46px] font-medium text-black max-w-[880px] leading-tight">
            From weak foundations to <br />
            <span className="text-purple-600">powerful confidence</span> and
            true mastery.
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl text-sm md:text-base">
            Whether it’s top trending courses to stay ahead in the job market,
            mock tests to ace exams with confidence, our platform is built to
            empower learners of all ages.
          </p>

          {/* Search Bar */}
          <div className="mt-8 w-full max-w-md relative bg-white/50 rounded-2xl">
            <input
              type="text"
              placeholder="Search course"
              className="w-full pl-6 pr-12 py-4 rounded-2xl border border-gray-200 focus:ring-[1px] focus:ring-purple-500 focus:outline-none"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full cursor-pointer hover:bg-gray-200 transition">
              <Search className="text-gray-600" size={18} />
            </div>
          </div>

          <p className="text-sm my-5 text-black">
            🔥 75k+ free courses listed online
          </p>

          <div className="w-full mt-5 lg:mt-7 flex justify-center mx-auto">
            {/* Background Elements */}
            <div className="grid grid-cols-1 gap-4 lg:gap-0  lg:grid-cols-3 ">
              {/* left */}
              <div className="grid grid-cols-3 gap-4 lg:gap-0">
                <div className=" ">
                  <Image src={heroLeft1} alt="hero left 1" priority />
                </div>
                <div className="flex flex-col gap-4">
                  <div className=" ">
                    <Image src={heroLeft2} alt="hero left 2" priority />
                  </div>
                  <div className=" ">
                    <Image src={heroLeft3} alt="hero left 3" priority />
                  </div>
                </div>
                <div className="">
                  <Image src={heroLeftEnd} alt="hero left end" priority />
                </div>
              </div>

              {/* middle */}
              <div className="">
                <Image
                  className=""
                  src={middleHero}
                  alt="right top 1"
                  priority
                />
              </div>

              {/* right */}
              <div className=" grid-cols-2 gap-4 lg:-ml-6 hidden lg:grid">
                <div className="flex flex-col">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative w-[110px] h-[128px]">
                      <Image
                        src={rightTop1}
                        alt="right top 1"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-[110px] h-[128px]">
                      <Image
                        src={rightTop2}
                        alt="right top 2"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="relative w-[252px] h-[128px] mt-2">
                    <Image
                      src={rightBottom}
                      alt="right bottom"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="relative w-[210px] lg:ml-6 rounded-3xl h-[272px]">
                  <Image
                    src={rightEnd}
                    alt="right end"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:hidden">
                {" "}
                <div className="flex flex-col ">
                  {" "}
                  <div className="grid grid-cols-2 gap-4">
                    {" "}
                    <div className=" ">
                      {" "}
                      <Image src={rightTop1} alt="right top 1" priority />{" "}
                    </div>{" "}
                    <div className=" ">
                      {" "}
                      <Image src={rightTop2} alt="right top 2" priority />{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="w-[272px] h-[128px] mt-2">
                    {" "}
                    <Image
                      width={272}
                      height={128}
                      src={rightBottom}
                      alt="right bottom"
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-[272px] h-[272px] ">
                  {" "}
                  <Image
                    className="h-auto object-contain"
                    src={rightEnd}
                    alt="right end"
                    priority
                  />{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
