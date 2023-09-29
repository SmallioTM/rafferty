import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full h-[70px] bg-grey flex justify-between items-center pr-[40px] pl-[40px]">
      <div className="w-[150px] h-8 flex flex items-center justify-start">
        <img className="w-[120px] h-[30] flex" src="/images/logo.png" />
      </div>
      <div className="w-[320px] h-16 flex justify-between items-center px-5">
        <Link href="/" className="text-white">
          Home
        </Link>
        <Link href="/about" className="text-white">
          About
        </Link>
        <Link href="#" className="text-white">
          Work
        </Link>
        <Link href="#" className="text-white">
          Contact
        </Link>
      </div>
      <div className="w-[150px] h-8 bg-white"></div>
    </div>
  );
};

export default NavBar;
