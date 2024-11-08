import React from "react";
import IphoneMockUp from "../../assets/Herosection Assets/iPhone_12_Pro_mockup_herosection.png";
import RightHeroSectionImage from "../../assets/Herosection Assets/herosection_crop.png";
import AppleStoreLogo from "../../assets/Herosection Assets/Apple Store.svg";
import GooglePlayLogo from "../../assets/Herosection Assets/Google Play.svg";
const HeroSection = () => {
  return (
    <div className="lg:h-[672px] h-[752px] w-full  pt-16 lg:pb-24 flex flex-row relative overflow-hidden">
      <div className="w-full h-full  lg:gap-8 gap-16   lg:mx-20  lg:px-8 px-4 flex lg:flex-row  flex-col justify-center items-center">
        {/* left side */}
        <div className="w-full h-fit  flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-center lg:items-start items-center lg:gap-12 gap-8 lg:mx-6  w-full  my-auto">
            <div className="flex flex-col justify-center   gap-6">
              <h1 className="text-darkJungleGreen font-inter font-semibold md:text-6xl md:leading-[72px] text-4xl ">
                Start spending the <br /> smart way
              </h1>
              <p className="md:w-[480px] md:h-[90px] w-full -[84px] font-inter md:text-[20px] text-lg md:leading-[30px] leading-[28px] text-lightGray">
                Take Control of Your Finances Anytime, Anywhere with Kobodrop.
                Discover the Smart Way to Use Your Money!
              </p>
            </div>
            <div className="md:w-fit h-full gap-3 flex w-full   ">
              <div className="bg-black w-[132px] h-[44px] rounded-[7px] border-[1px] border-darkGray flex">
                <div className="w-1/3 flex items-center justify-center">
                  <img src={AppleStoreLogo} width={20} alt="" className="" />
                </div>
                <div className="flex flex-col justify-center  text-left gap-0 ">
                  <p className="text-white text-[9px] font-inter h-[7px] ">
                    Download on the
                  </p>
                  <h4 className="text-white text-[17px] font-inter h-[17px]">
                    App Store
                  </h4>
                </div>
              </div>
              <div className="bg-black w-[148.5px] h-[44px] rounded-[7px] border-[1px] border-darkGray flex">
                <div className="w-1/3 flex items-center justify-center">
                  <img src={GooglePlayLogo} width={25} alt="" className="" />
                </div>
                <div className="flex flex-col justify-center  text-left gap-0 ">
                  <p className="text-white text-[9px] font-inter h-[7px] ">
                    GET IT ON
                  </p>
                  <h4 className="text-white text-[17px] font-inter h-[17px]">
                    Google Play
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-full h-full relative ">
          <img
            src={IphoneMockUp}
            alt=""
            className="max-w-[284px] max-h-[578px] lg:max-w-[320px] lg:max-h-[652px] absolute lg:top-[90px] lg:left-[-34px] z-10  top-[1px] left-[50%] transform translate-x-[-50%] lg:translate-x-0  "
          />
        </div>
      </div>
      <div className="w-1/2 absolute  h-full right-0">
        <div className="w-full h-full relative">
          <img
            src={RightHeroSectionImage}
            alt=""
            className="w-[634px]  h-[612px] absolute top-0  left-[100px] object-cover hidden xl:flex "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
