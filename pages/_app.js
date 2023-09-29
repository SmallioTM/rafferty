// pages/_app.js
import "../src/app/globals.css";
import Lenis from "@studio-freight/lenis";

function MyApp({ Component, pageProps }) {
  // Initialize Lenis when the component mounts
  React.useEffect(() => {
    const lenisInstance = new Lenis({
      // Your configuration here
    });

    // Optional: If you want to make the instance globally available
    window.lenisInstance = lenisInstance;
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
