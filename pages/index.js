// import "src/app/globals.css";

// import React, { useEffect } from "react"; // <-- Import useEffect
// import { gsap } from "libs/gsap.js";
// import { ScrollTrigger } from "libs/ScrollTrigger.min.js";
// import { ScrollSmoother } from "libs/ScrollSmoother.min.js";
// import HeroSection from "../src/app/components/HeroSection/HeroSection";
// import NavBar from "../src/app/components/NavBar/NavBar";
// import AboutSection from "src/app/components/AboutSection/AboutSection.jsx";
// import LargeProjectSection from "src/app/components/LargeProjectSection/LargeProjectSection.jsx";

// gsap.registerPlugin(ScrollTrigger);

// export default function Page() {
//   // Set up the scroll smoother using the useEffect hook
//   useEffect(() => {
//     gsap.to(window, {
//       scrollTo: { y: window.pageYOffset + 1 }, // this small scroll is necessary to fix a ScrollTrigger bug
//       duration: 0.01,
//     });

//     let container = document.querySelector("#smooth-content");
//     gsap.to(container, {
//       y: () =>
//         -(container.scrollHeight - document.documentElement.clientHeight),
//       ease: "none",
//       scrollTrigger: {
//         trigger: document.body,
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1,
//         invalidateOnRefresh: true,
//       },
//     });
//   }, []);

//   return (
//     <main
//       id="smooth-wrapper"
//       className="overflow-hidden flex min-h-screen flex-col items-center justify-between p-24 bg-black"
//     >
//       <div
//         id="smooth-content"
//         className="flex min-h-screen flex-col items-center"
//       >
//         <NavBar />
//         <HeroSection data-speed="1.2" />
//         <AboutSection />
//         <LargeProjectSection />
//       </div>
//     </main>
//   );
// }

import "src/app/globals.css";

import React, { useEffect } from "react"; // <-- Import useEffect
import { gsap } from "libs/gsap.js";
import { ScrollTrigger } from "libs/ScrollTrigger.min.js";
import { ScrollSmoother } from "libs/ScrollSmoother.min.js";
import HeroSection from "../src/app/components/HeroSection/HeroSection";
import NavBar from "../src/app/components/NavBar/NavBar";
import AboutSection from "src/app/components/AboutSection/AboutSection.jsx";
import LargeProjectSection from "src/app/components/LargeProjectSection/LargeProjectSection.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  // Set up the scroll smoother using the useEffect hook
  useEffect(() => {
    // Basic scroll smoother setup using GSAP's ScrollTrigger
    ScrollTrigger.scrollerProxy("#smooth-content", {
      scrollTop(value) {
        return arguments.length
          ? (document.body.scrollTop = value)
          : document.body.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.refresh();
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
