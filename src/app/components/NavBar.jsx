import React from "react";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full h-16 bg-grey flex justify-center items-center">
      <div className="w-[300px] h-16 flex justify-between items-center px-5">
        <a href="#" className="text-white">
          Home
        </a>
        <a href="#" className="text-white">
          About
        </a>
        <a href="#" className="text-white">
          Work
        </a>
        <a href="#" className="text-white">
          Contact
        </a>
      </div>
    </div>
  );
};

export default NavBar;
