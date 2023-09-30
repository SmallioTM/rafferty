import Link from "next/link";
import { gsap } from "gsap";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full h-[70px] bg-grey flex justify-between items-center pr-[40px] pl-[40px]">
      <div className="w-[150px] h-8 flex items-center justify-start">
        <img className="w-[120px] h-[30] flex" src="/images/logo.png" />
      </div>
      <div className="w-[320px] h-16 flex justify-between items-center px-5">
        <Link onClick={handleNavLinkClick} href="/" className="text-white">
          Home
        </Link>
        <Link onClick={handleNavLinkClick} href="/about" className="text-white">
          About
        </Link>
        <Link onClick={handleNavLinkClick} href="#" className="text-white">
          Work
        </Link>
        <Link onClick={handleNavLinkClick} href="#" className="text-white">
          Contact
        </Link>
      </div>
      <button
        id="button"
        className="text-[#000000] text-[13px] w-[150px] h-8 rounded-md bg-white"
      >
        CONTACT
      </button>
    </div>
  );
};

const handleNavLinkClick = () => {
  const tl = gsap.timeline();
  tl.to(".blue-box", { duration: 0.5, height: "100vh" }).then(() => {
    // Here, you can navigate to the desired page or do any other actions
    // After the navigation or action, reverse the animation
    tl.reverse();
  });
};

export default NavBar;
