// pages/_app.js
import React from "react"; // <-- Import React
import "../src/app/globals.css";
import Lenis from "@studio-freight/lenis";

function MyApp({ Component, pageProps }) {
  // Initialize Lenis when the component mounts
  React.useEffect(() => {
    const lenisInstance = new Lenis({
      wrapper: window, // The element that will be used as the scroll container.
      content: document.documentElement, // The element that contains the content that will be scrolled.
      lerp: 0.1, // Linear interpolation (lerp) intensity (between 0 and 1).
      orientation: "vertical", // The orientation of the scrolling. Can be 'vertical' or 'horizontal'.
    });

    // Make the instance globally available
    window.lenisInstance = lenisInstance;
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
