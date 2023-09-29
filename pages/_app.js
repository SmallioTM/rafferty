"use client";

// pages/_app.js
import React, { useEffect } from "react";
import "../src/app/globals.css";
import Lenis from "@studio-freight/lenis";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // This code will only run on the client side
    const wrapperElement = document.querySelector(".l-wrapper");
    const contentElement = document.querySelector(".l-content");

    if (wrapperElement && contentElement) {
      const lenisInstance = new Lenis({
        wrapper: wrapperElement,
        content: contentElement,
        lerp: 0.1,
        orientation: "vertical",
      });

      // Make the instance globally available
      window.lenisInstance = lenisInstance;
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
