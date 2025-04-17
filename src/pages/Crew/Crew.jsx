import React, { useState } from "react";
import crewImg1 from "../../assets/base.png";
import crewImg2 from "../../assets/image-removebg-preview(262).png";
import crewImg3 from "../../assets/image-removebg-preview(288).png";
import crewImg4 from "../../assets/image-removebg-preview(265).png";
import backgroundImage from "../../assets/main-img2.jpeg";

export default function Crew() {
  const [activeTab, setActiveTab] = useState(0);

  const crewData = [
    {
      title: "COMMANDER",
      name: "DOUGLAS HURLEY",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: crewImg1,
    },
    {
      title: "Mission Specialist ",
      name: "MARK SHUTTLEWORTH",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: crewImg2,
    },
    {
      title: "PILOT",
      name: "Victor Glover",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      image: crewImg3,
    },
    {
      title: "Flight Engineer",
      name: "Anousheh Ansari",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      image: crewImg4,
    },
  ];

  return (
    <div
      className="min-h-screen text-white py-8 px-4 md:py-[48px] md:px-[165px] relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-opacity-50 z-0 overflow-hidden"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="md:mx-[40px] mx-0 mt-[110px] text-center  md:text-left w-full font-secondaryFont lg:text-[28px] md:text-[20px] text-[16px]">
          <span className="text-gray-500 mr-4">02</span> MEET YOUR CREW
        </h2>

        <div className="flex flex-col lg:flex-row  w-full mt-8">
          <div className="flex flex-col items-center lg:items-baseline lg:justify-evenly text-center lg:text-left">
            <div className="max-w-[90vw] md:max-w-[539px]">
              <h3 className="text-gray-400 lg:text-[32px] md:text-[24px] text-[18px] uppercase mt-4 font-primaryFont">
                {crewData[activeTab].title}
              </h3>
              <h1 className="text-[24px] md:text-[40px] lg:text-[56px] my-4 font-normal uppercase font-primaryFont">
                {crewData[activeTab].name}
              </h1>
              <p className="text-[#D0D6F9] lg:text-[18px] md:text-[16px] text-[15px] font-tertiaryFont">
                {crewData[activeTab].description}
              </p>
            </div>

            <div className="flex space-x-4 mt-[32px] mb-[24px]">
              {crewData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer w-3 h-3 rounded-full transition-colors ${
                    activeTab === index
                      ? "bg-white"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className=" flex justify-center w-full lg:w-auto">
            <img
              src={crewData[activeTab].image}
              alt={crewData[activeTab].name}
              className="max-w-[80%] md:max-w-[400px] lg:max-w-[539.35px] border-b border-white/20 lg:border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
