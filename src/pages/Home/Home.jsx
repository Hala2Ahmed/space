import React from "react";
import homeImg from "../../assets/homeimg.jpeg";
export default function Home() {
  return (
    <div
      className="min-h-screen text-white py-8 px-4 md:py-[48px] md:px-[165px] relative"
      style={{
        backgroundImage: `url(${homeImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 -50 z-0"></div>

      <div className="lg:mt-[348px] mt-[200px] sm:mx-[24px] md:mx-0 flex lg:flex-row flex-col items-center  ">
        <div className="lg:pr-[298px] text-center lg:text-left">
          <h2 className="text-[#D0D6F9] uppercase tracking-[4px] text-[28px]">
            so, you what to travel to
          </h2>
          <h1 className="uppercase shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-[144px]">
            space
          </h1>
          <p className="text-[#D0D6F9] max-w-[540px] text-[18px] mx-auto lg:mx-0">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="group cursor-pointer relative flex items-center justify-center border bg-white rounded-full w-60 h-60 border-white transition-all duration-500 ease-out mt-16 lg:mt-0">
          <div
            className="absolute inset-0 border border-white rounded-full w-full h-full 
                group-hover:scale-150 group-hover:opacity-20 group-hover:bg-white 
                transition-all duration-500 ease-out"
          ></div>
          <p className="text-[32px] font-medium text-black uppercase relative z-10">
            Explore
          </p>
        </div>
      </div>
    </div>
  );
}