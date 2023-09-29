// pages/_app.js
import React, { useEffect } from "react";
import "../src/app/globals.css";
import Lenis from "@studio-freight/lenis";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Ensure we're running on the client side
    if (typeof window !== "undefined") {
      const lenis = new Lenis({
        wrapper: document.querySelector(".l-wrapper"),
        content: document.querySelector(".l-content"),
        lerp: 0.1,
        orientation: "vertical",
      });

      // Optional: Make Lenis instance globally available
      window.lenisInstance = lenis;
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
