import React from "react";
import Image from "next/image";
import { Bell, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/images/black-logo.png";
import Link from "next/link";
import appStorelogo from "@/assets/images/app-store-logo.png";
import googlePay from "@/assets/images/google-pay.png";

export const footerLinks = {
  courses: [
    { name: "Courses", href: "#" },
    { name: "Classes", href: "#" },
    { name: "Instructor", href: "#" },
    { name: "Business", href: "#" },
    { name: "Modern Art", href: "#" },
    { name: "Art Science", href: "#" },
    { name: "Sustainability", href: "#" },
  ],
  quickLinks: [
    { name: "Sustainability", href: "#" },
    { name: "Business", href: "#" },
    { name: "Courses", href: "#" },
    { name: "Instructor", href: "#" },
    { name: "Classes", href: "#" },
    { name: "Art Science", href: "#" },
  ],
  contact: {
    phone: "+990 271 838 6933",
    email: "info@example.com",
    location: "California, USA",
  },
};

const Footer = () => {
  return (
    <footer className="text-dark hero-container bg-gray-50 rounded-3xl mb-6 pt-10">
      <div className="px-6">
        {/* --- 2. Main Footer Links and Contact --- */}
        <div className="flex flex-wrap gap-10 justify-between border-b border-gray-300 pb-12">
          {/* Column 1: Logo and Description */}
          <div className="lg:max-w-[400px]">
            <div className="w-10 h-10 rounded-full mb-5">
              <Image
                className="rounded-full"
                src={logo}
                width={40}
                height={40}
                priority
                alt="logo"
              />
            </div>
            <p className="text-sm mb-6 max-w-xs">
              In hendrerit gravida rutrum quisque non tellus orci ac. Felis
              bibendum ut tristique et egestas quis.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-dark transition-colors p-3 rounded-full border border-gray-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:text-dark transition-colors p-3 rounded-full border border-gray-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-dark transition-colors p-3 rounded-full border border-gray-300"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="hover:text-dark transition-colors p-3 rounded-full border border-gray-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex items-start justify-between flex-wrap gap-10 lg:gap-28">
            {/* Column 2: Courses */}
            <div className="lg:col-span-2">
              <h4 className="font-medium text-dark mb-4 whitespace-nowrap">
                Courses
              </h4>
              <ul className="space-y-3 text-sm">
                {footerLinks.courses.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-dark transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Link */}
            <div className=" lg:col-span-2">
              <h4 className="font-medium text-dark mb-4 whitespace-nowrap">
                Quick Link
              </h4>
              <ul className="space-y-3 text-sm">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-dark transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className=" lg:col-span-2">
              <h4 className="font-medium text-dark mb-4 whitespace-nowrap">
                Phone number
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="font-medium text-dark">
                    {footerLinks.contact.phone}
                  </span>
                </li>
                <li>
                  <span className="font-medium text-dark">
                    {footerLinks.contact.email}
                  </span>
                </li>
                <li className="pt-2">
                  Location: {footerLinks.contact.location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- 3. Bottom Copyright and App Badges --- */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm ">
          {/* Copyright */}
          <p className="mb-4 md:mb-0 text-dark text-sm">
            &copy; 2025 wedesigntec. All rights reserved
          </p>

          {/* App Badges */}
          <div className="flex space-x-4">
            {/* Google Play Badge Placeholder */}
            <Link href="#" aria-label="Download on Google Play">
              <div className="w-[131px] h-[56px] rounded-2xl border border-gray-300">
                <Image
                  className="rounded-2xl"
                  src={googlePay}
                  width={131}
                  height={56}
                  priority
                  alt="logo"
                />
              </div>
            </Link>

            {/* App Store Badge Placeholder */}
            <Link href="#" aria-label="Download on App Store">
              <div className="w-[131px] h-[56px] rounded-2xl ">
                <Image
                  className="rounded-2xl"
                  src={appStorelogo}
                  width={131}
                  height={56}
                  priority
                  alt="logo"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
