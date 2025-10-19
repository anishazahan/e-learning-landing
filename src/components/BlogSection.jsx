import React from "react";
import Image from "next/image";
import img from "@/assets/images/logo-blog-img.jpg";
import Link from "next/link";

export const blogPosts = [
  {
    id: 1,
    category: "Design",
    title: "World Wide Business Logo Design",
    description:
      "Pudes at tellus at urna. Orci eu lobortis elementum nibh tellus molestie. Blandit Maecenas volutpat.",
    image: img,
  },
  {
    id: 2,
    category: "Design",
    title: "Understanding Modern UI/UX Principles",
    description:
      "Vestibulum sed arcu non odio euismod lacinia. Sagittis vitae et leo duis ut. Massa sapien faucibus.",
    image: img,
  },
  {
    id: 3,
    category: "Design",
    title: "The Power of Branding in Digital Age",
    description:
      "Quisque non tellus orci ac. Nunc sed augue lacus viverra. Ut diam quam nulla porttitor massa id.",
    image: img,
  },
];

const NewsBlogSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="custom-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-dark0">
            News & Blog on Lms
          </h2>
          <p className="mt-5 text-lg text-dark max-w-2xl mx-auto">
            Get started in just a few easy steps and unlock access to
            world-class courses.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href="#"
              className="group relative block w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-xl 
                         transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Background Image */}
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
                priority={post.id === 1}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Content Box */}
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                {/* Category Tag */}
                <span className="inline-flex items-center px-4 py-2 bg-white/20 border border-white/50 backdrop-blur-sm rounded-full text-xs font-medium text-white mb-4">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-medium leading-tight group-hover:text-blue-200 transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-300 opacity-90">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsBlogSection;
