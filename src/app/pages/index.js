import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import "src/app/globals.css";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <NavBar />
      <HeroSection />
    </main>
  );
}
