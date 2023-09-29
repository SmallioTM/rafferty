// pages/_app.js
import React, { useEffect } from "react";
import "../src/app/globals.css";
import Lenis from "@studio-freight/lenis";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      wrapper: document.querySelector(".l-wrapper"),
      content: document.querySelector(".l-content"),
      lerp: 0.03,
      orientation: "vertical",
    });

    if (lenis) lenis.scrollTo(0, { immediate: true });

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
