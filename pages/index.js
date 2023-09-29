import React from "react";
import HeroSection from "../src/app/components/HeroSection/HeroSection";
import NavBar from "../src/app/components/NavBar/NavBar";
import "src/app/globals.css";
import AboutSection from "@/app/components/AboutSection/AboutSection";

export default function Page() {
  // No need to re-initialize Lenis here

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <NavBar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
