const React = require("react");
const gsap = require("gsap").gsap;
const ScrollTrigger = require("gsap").ScrollTrigger;
const ScrollSmoother = require("gsap").ScrollSmoother;

// Register the ScrollTrigger and ScrollSmoother plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function MyApp({ Component, pageProps }) {
  const boxRef = React.useRef(null);

  React.useEffect(() => {
    const tl = gsap.timeline();

    // Expand the blue box to cover the entire viewport
    tl.to(boxRef.current, {
      height: "100vh",
      duration: 0.3,
    });

    // Contract the blue box to reveal the next page
    tl.to(boxRef.current, {
      height: "0vh",
      duration: 0.3,
      delay: 0.2,
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <div className="blue-box" ref={boxRef}></div>
    </>
  );
}

module.exports = MyApp;

// working v
