import NewsBlogSection from "@/components/BlogSection";
import BlogSection from "@/components/BlogSection";
import CategoryCourses from "@/components/CategoryCourses";
import FeatureSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ImageSlider from "@/components/ImageSlider";
import InstructorSlider from "@/components/InstructorSlider";
import LogoMarquee from "@/components/LogoMarquee";
import Navigation from "@/components/Navigation";
import Newsletter from "@/components/Newsletter";
import PopularCategoryCourses from "@/components/PopularCategoryCourses";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <WhyChooseUs />
      <CategoryCourses />
      <PopularCategoryCourses />
      <TestimonialCarousel />
      <LogoMarquee />
      <HowItWorksSection />
      <ImageSlider />
      <InstructorSlider />
      <FeatureSection />
      <NewsBlogSection />
      <Newsletter />
      <Footer />
    </>
  );
}
