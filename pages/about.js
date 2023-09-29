import HeroSectionv2 from "../src/app/components/HeroSection/HeroSectionv2";
import NavBar from "src/app/components/NavBar/NavBar.jsx";
import "src/app/globals.css";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <NavBar />
      <HeroSectionv2 />
    </main>
  );
}
