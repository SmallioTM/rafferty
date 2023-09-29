"use client";

// pages/_app.js
import React, { useEffect } from "react";
import "../src/app/globals.css";
import Lenis from "@studio-freight/lenis";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
