import React from "react";
import "public/images/logo.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center p-[160px]">
        <h1 className="text-9xl font-polysans uppercase tracking-tighter leading-[90%]">
          Rafferty
        </h1>
        <h1 className="text-[#C0C0C0] text-9xl font-fortescue italic uppercase tracking-tight leading-[90%]">
          THIS IS V2 23'
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
