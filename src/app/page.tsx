// File: /src/app/page.tsx
// Sections
import Blog from "@/components/Blog";
import OnlyLatest from "@/components/Blog/onlyLatest";
// import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
// import Features from "@/components/Features";
// import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

// Custom
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
      <OnlyLatest />
      <Join />
      <Testimonials />
    </>
  );
}
