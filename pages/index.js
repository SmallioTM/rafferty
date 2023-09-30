import "src/app/globals.css";

import React, { useEffect } from "react"; // <-- Import useEffect
import { gsap } from "libs/gsap.js";
import { ScrollTrigger } from "libs/ScrollTrigger.min.js";
import { ScrollSmoother } from "libs/ScrollSmoother.min.js";
import HeroSection from "../src/app/components/HeroSection/HeroSection";
import NavBar from "../src/app/components/NavBar/NavBar";
import AboutSection from "src/app/components/AboutSection/AboutSection.jsx";
import LargeProjectSection from "src/app/components/LargeProjectSection/LargeProjectSection.jsx";
import "src/app/globals.css";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    let container = document.querySelector("#smooth-content");

    gsap.to(container, {
      y: (i, target) =>
        -(target.scrollHeight - document.documentElement.clientHeight),
      ease: "none",
      scrollTrigger: {
        trigger: "#smooth-wrapper",
        pin: true,
        scrub: 1,
        end: () =>
          `+=${container.scrollHeight - document.documentElement.clientHeight}`,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <main
      id="smooth-wrapper"
      className="overflow-hidden flex min-h-screen flex-col items-center justify-between p-24 bg-black"
    >
      <div
        id="smooth-content"
        className="flex min-h-screen flex-col items-center"
      >
        <NavBar />
        <HeroSection data-speed="1.2" />
        <AboutSection />
        <LargeProjectSection />
      </div>
    </main>
  );
}
