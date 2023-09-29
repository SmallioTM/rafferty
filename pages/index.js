import React from "react";
import HeroSection from "../src/app/components/HeroSection/HeroSection";
import NavBar from "../src/app/components/NavBar/NavBar";
import "src/app/globals.css";
import Lenis from "@studio-freight/lenis";

export default function Page() {
  // Initialize Lenis when the component mounts
  React.useEffect(() => {
    const lenisInstance = new Lenis({
      wrapper: window, // The element that will be used as the scroll container.
      content: document.documentElement, // The element that contains the content that will be scrolled.
      lerp: 0.1, // Linear interpolation (lerp) intensity (between 0 and 1).
      orientation: "vertical", // The orientation of the scrolling. Can be 'vertical' or 'horizontal'.
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <NavBar />
      <HeroSection />
    </main>
  );
}
