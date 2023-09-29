const React = require("react");
const gsap = require("gsap").gsap;
const ScrollTrigger = require("gsap").ScrollTrigger;

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
