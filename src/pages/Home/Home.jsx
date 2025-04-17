import React from "react";
import homeImg from "../../assets/homeimg.jpeg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div
      className="min-h-screen text-white py-8 px-4 md:py-[48px] md:px-[165px] overflow-hidden relative"
      style={{
        backgroundImage: `url(${homeImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 -50 z-0 overflow-hidden"></div>

      <div className="lg:mt-[348px] mt-[200px] sm:mx-[24px] md:mx-0 flex lg:flex-row flex-col items-center">
        <div className="lg:pr-[298px] text-center lg:text-left">
          <h2 className="text-[#D0D6F9] font-secondaryFont uppercase tracking-[4px] md:text-[28px] text-[16px]">
            so, you what to travel to
          </h2>
          <h1 className="uppercase font-primaryFont shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:text-[144px] text-[80px]">
            space
          </h1>
          <p className="text-[#D0D6F9] font-tertiaryFont max-w-[540px] lg:text-[18px] md:text-[16px] text-[15px] mx-auto lg:mx-0">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="group cursor-pointer relative flex items-center flex-shrink-0 justify-center border bg-white rounded-full md:w-[272px] md:h-[272px] w-[144px] h-[144px] border-white transition-all duration-500 ease-out mt-16 lg:mt-0">
          <div
            className="absolute inset-0 border border-white rounded-full w-full h-full 
                group-hover:scale-150 group-hover:opacity-20 group-hover:bg-white 
                transition-all duration-500 ease-out"
          ></div>
          <Link
            to="/destination"
            className="md:text-[32px] sm:text-[18px] font-medium font-primaryFont text-black uppercase relative z-10"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
