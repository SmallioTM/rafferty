// pages/_app.js
import React from "react";
import "../src/app/globals.css";
import Lenis from "@studio-freight/lenis";

function MyApp({ Component, pageProps }) {
  // Initialize Lenis when the component mounts
  React.useEffect(() => {
    const wrapperElement = document.querySelector(".l-wrapper");
    const contentElement = document.querySelector(".l-content");

    const lenisInstance = new Lenis({
      wrapper: wrapperElement,
      content: contentElement,
      lerp: 0.1,
      orientation: "vertical",
    });

    // Make the instance globally available
    window.lenisInstance = lenisInstance;
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
