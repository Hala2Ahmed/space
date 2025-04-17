import React, { useState } from "react";
import dis1 from "../../assets/Destination - A - Moon.png";
import dis2 from "../../assets/Destination - B - Mars.png";
import dis3 from "../../assets/Destination - C - Europa.png";
import dis4 from "../../assets/Destination - D - Titan.png";
import backgroundImage from "../../assets/main-img3.jpeg";

export default function Destination() {
  const [activeTab, setActiveTab] = useState(0);

  const DestinationData = [
    {
      title: "Moon",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      image: dis1,
      distance: "384,400 km",
      time: "3 days",
    },
    {
      title: "MARS",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      image: dis2,
      distance: "225 MIL. km",
      time: "9 months",
    },
    {
      title: "EUROPA",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      image: dis3,
      distance: "628 MIL. km",
      time: "3 years",
    },
    {
      title: "TITAN",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      image: dis4,
      distance: "1.6 MIL. km",
      time: "7 years",
    },
  ];

  return (
    <div
      className="min-h-screen text-white py-8 px-4 md:py-[48px] md:px-[165px] overflow-hidden relative"
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
        <h2 className="md:mx-[40px] mx-0 mt-[110px] mb-[24px] font-secondaryFont text-center md:text-left w-full lg:text-[28px] md:text-[20px] text-[16px]">
          <span className="text-gray-500 mr-4 ">01</span> PICK YOUR DESTINATION
        </h2>

        <div className="flex flex-col lg:flex-row w-full mt-8 gap-8">
          <div className="flex justify-center w-full lg:w-auto px-[29.5px] lg:py-[127px] py-[42px]">
            <img
              src={DestinationData[activeTab].image}
              alt={DestinationData[activeTab].name}
              className="max-w-[80%] md:max-w-[400px] lg:max-w-[539.35px] border-b border-white/20 lg:border-none"
            />
          </div>

          <div className="px-[47px] lg:py-[133px] py-[11.5px] flex flex-col items-center lg:items-baseline lg:justify-evenly text-center lg:text-left">
            {/* التنقل بالنصوص */}
            <div className="flex space-x-4 mb-8 lg:mb-0">
              {DestinationData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer md:text-[16px] text-[14px] uppercase font-secondaryFont  ${
                    activeTab === index
                      ? "text-white border-b-2 border-white pb-1"
                      : "text-white"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="max-w-[90vw] md:max-w-[445px]">
              <h3 className=" text-[56px] lg:text-[96px] mg:text-[80px] uppercase pt-[40px] font-primaryFont">
                {DestinationData[activeTab].title}
              </h3>
              <p className="text-[#D0D6F9] lg:text-[18px] md:text-[16px] text-[15px] mt-[16px] border-b border-white/20 pb-[40px] font-tertiaryFont">
                {DestinationData[activeTab].description}
              </p>
            </div>
            <div className="flex justify-between flex-col md:flex-row gap-6 pt-[40px]">
              <div>
                <span className="text-[#D0D6F9] text-[14px] font-secondaryFont">
                  AVG. DISTANCE
                </span>
                <p className="text-[28px] uppercase pt-[12px] font-primaryFont">
                  {DestinationData[activeTab].distance}
                </p>
              </div>
              <div>
                <span className="text-[#D0D6F9] text-[14px] font-secondaryFont">
                  EST. TRAVEL TIME
                </span>
                <p className="text-[28px] uppercase pt-[12px] font-primaryFont">
                  {DestinationData[activeTab].time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
