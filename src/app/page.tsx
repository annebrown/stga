// File: /src/app/page.tsx
// Sections
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

// Custom
import Mission from "@/components/About/Mission";
import Answer from "@/components/Answer";
import Join from "@/components/Join";

export const metadata: Metadata = {
  title: "Save the Grove, Again",
  description: "Arnprior Community Initiative",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Answer />
      <Video />
      <Join />
    </>
  );
}
