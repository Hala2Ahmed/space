import React, { useState } from "react";
import techImg1 from "../../assets/Technology Image - A.jpg";
import techImg2 from "../../assets/Technology Image - B.jpg";
import techImg3 from "../../assets/Bitmap (1).png";
import backgroundImage from "../../assets/main-img3.jpeg";

export default function Technology() {
  const [activeTab, setActiveTab] = useState(0);

  const techData = [
    {
      title: "THE TERMINOLOGY…",
      name: "LAUNCH VEHICLE",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: techImg1,
    },
    {
      title: "THE TERMINOLOGY…",
      name: "SPACEPORT",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      image: techImg2,
    },
    {
      title: "THE TERMINOLOGY…",
      name: "SPACE CAPSULE",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: techImg3,
    },
  ];

  return (
    <div
      className="min-h-screen text-white py-8  md:py-[48px] lg:pl-[165px] relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-opacity-50 z-0"></div>

      <div className="relative z-10 flex flex-col  overflow-hidden">
        <h2 className="md:mx-[40px] mx-0 mt-[110px] text-center md:text-left w-full font-secondaryFont lg:text-[28px] md:text-[20px] text-[16px]">
          <span className="text-gray-500 mr-4">03</span> SPACE LAUNCH 101
        </h2>

        <div className="flex flex-col items-center  gap-8 lg:flex-row w-full mt-8">
          {/* التنقل العمودي */}
          <div className="flex lg:flex-col space-x-4 lg:space-x-0 gap-8 justify-center lg:justify-start mb-8 lg:mb-0 lg:mr-8 font-primaryFont">
            {techData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer flex items-center justify-center lg:w-[80px] lg:h-[80px] md:w-[56px] md:h-[56px] w-[40px] h-[40px] rounded-full border transition-colors ${
                  activeTab === index
                    ? "bg-white text-black"
                    : "bg-transparent text-white border-white/25 hover:border-white"
                }`}
              >
                <span className="lg:text-[32px] md:text-[24px] text-[18px]">
                  {index + 1}
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center lg:items-baseline lg:justify-evenly text-center lg:text-left">
            <div className="max-w-[90vw] md:max-w-[491px]">
              <h3 className="text-gray-400 lg:text-[32px] md:text-[24px] text-[18px]  uppercase font-primaryFont">
                {techData[activeTab].title}
              </h3>
              <h1 className="text-[24px] md:text-[40px] lg:text-[56px] mt-4 mb-6 font-normal uppercase font-primaryFont">
                {techData[activeTab].name}
              </h1>
              <p className="text-[#D0D6F9] lg:text-[18px] md:text-[16px] text-[15px] font-tertiaryFont">
                {techData[activeTab].description}
              </p>
            </div>
          </div>

          <div className="mt-[67px] order-first lg:order-last">
            <img
              src={techData[activeTab].image}
              alt={techData[activeTab].name}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
