import React from "react";
import HeroSection from "../src/app/components/HeroSection/HeroSection";
import NavBar from "../src/app/components/NavBar/NavBar";
import "src/app/globals.css";
import AboutSection from "@/app/components/AboutSection/AboutSection";

export default function Page() {
  return (
    <main className="l-wrapper flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className="l-content flex min-h-screen flex-col items-center">
        <NavBar />
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
