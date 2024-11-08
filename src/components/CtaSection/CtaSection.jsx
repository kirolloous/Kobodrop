import React from "react";
import AppleStoreLogo from "../../assets/Herosection Assets/Apple Store.svg";
import GooglePlayLogo from "../../assets/Herosection Assets/Google Play.svg";
import ctalImage from "../../assets/CTA Assets/CTA Image scale.png";
import Star from "../../assets/CTA Assets/Star.png";
import arrowLeftIcon from "../../assets/CTA Assets/ArrowLeftIcon.png";
import arrowRightIcon from "../../assets/CTA Assets/ArrowRightIcon.png";
const CtaSection = () => {
  return (
    <div className="w-full lg:h-[784px] h-[1000px] lg:py-24 py-16 flex justify-center items-center">
      <div className="w-full h-full lg:mx-[80px] md:px-8 px-4 flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full h-full  flex flex-col justify-center items-centers gap-10">
          <h1 className=" font-inter font-semibold md:text-5xl  md:leading-[60px] text-darkJungleGreen text-3xl">
            Join other thousands of people growing with Kobodrop
          </h1>
          <div className="md:w-fit  gap-3 flex w-full items-center   ">
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
        <div className="w-full h-full  relative md:flex-col lg:flex-row flex  overflow-hidden ">
          <div className=" w-full h-full  relative ">
            <img
              src={ctalImage}
              alt=""
              className=" w-full h-full  object-cover  "
            />
          </div>

          <div className=" h-auto md:px-6 md:pb-8 md:pt-6 p-5 flex flex-col md:gap-8 gap-1 absolute top-[180px] md:top-[200px] lg:bottom-0 w-full  backdrop-blur-md bg-darkBlur">
            <h1 className=" font-inter font-normal lg:text-3xl lg:leading-[38px] text-white ">
              “Kobodrop has helped me send and receive money with little to no
              complications. It’s what everyone needs!!.”
            </h1>
            <div className="flex flex-row  gap-4">
              <div className="flex w-full  justify-between">
                <h2 className="  font-inter font-semibold xl:text-4xl text-2xl leading-[44px] text-white">
                  Kemi Ogunnaike
                </h2>
                <div className=" hidden xlg:flex ">
                  <img src={Star} alt="" className="w-[20px] h-[20px]" />
                  <img src={Star} alt="" className="w-[20px] h-[20px]" />
                  <img src={Star} alt="" className="w-[20px] h-[20px]" />
                  <img src={Star} alt="" className="w-[20px] h-[20px]" />
                  <img src={Star} alt="" className="w-[20px] h-[20px]" />
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col w-full justify-between">
              <p className="font-semibold xl:text-lg text-white">Nigeria</p>
              <div className="flex gap-4">
                <div className="w-14 h-14  flex items-center justify-center rounded-full border-[1px] border-white  cursor-pointer ">
                  <img
                    src={arrowLeftIcon}
                    alt=""
                    className="w-[14px] h-[14px]"
                  />
                </div>
                <div className="w-14 h-14  flex items-center justify-center rounded-full border-[1px] border-white cursor-pointer">
                  <img src={arrowRightIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
