import "src/app/globals.css";

import React from "react";
import HeroSection from "../src/app/components/HeroSection/HeroSection";
import NavBar from "../src/app/components/NavBar/NavBar";
import AboutSection from "@/app/components/AboutSection/AboutSection";

export default function Page() {
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
        <HeroSection data-speed="1.2" /> {/* Added data-speed attribute */}
        <AboutSection />
      </div>
    </main>
  );
}
