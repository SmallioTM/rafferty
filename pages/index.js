import "src/app/globals.css";

import React, { useEffect } from "react";
import { gsap } from "libs/gsap.js";
import { ScrollTrigger } from "libs/ScrollTrigger.min.js";
import { ScrollSmoother } from "libs/ScrollSmoother.min.js";
import HeroSection from "../src/app/components/HeroSection/HeroSection";
import NavBar from "../src/app/components/NavBar/NavBar";
import AboutSection from "src/app/components/AboutSection/AboutSection.jsx";
import LargeProjectSection from "src/app/components/LargeProjectSection/LargeProjectSection.jsx";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Page() {
  useEffect(() => {
    // Normalize scroll
    ScrollTrigger.normalizeScroll(true);

    // Create the scroll smoother
    let smoother = ScrollSmoother.create({
      smooth: 1.6,
      effects: true,
      normalizeScroll: true,
    });
  }, []);

  return (
    <main
      id="smooth-wrapper"
      className="overflow-hidden flex min-h-screen flex-col items-center justify-between p-24 bg-black"
    >
      <div
        id="smooth-content"
        className="overflow-hidden flex min-h-screen flex-col items-center"
      >
        <NavBar />
        <HeroSection data-speed="1.2" />
        <AboutSection />
        <LargeProjectSection />
      </div>
    </main>
  );
}
