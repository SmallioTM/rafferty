import React from "react";
import "public/images/logo.png";
import "public/images/hero-r.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[auto] flex flex-col items-center p-[0] mt-[160px]">
        <h1 className="text-9xl font-polysans uppercase tracking-tighter leading-[90%]">
          Rafferty
        </h1>
        <h1 className="text-[#C0C0C0] text-9xl font-fortescue italic uppercase tracking-tight leading-[90%]">
          Portfolio 23'
        </h1>
      </div>
      <img
        className="w-[45opx] h-[45opx] pt-[80px] flex"
        src="/images/hero-r.png"
      />
    </div>
  );
};

export default HeroSection;
